import axios from "axios"
import { ObjectId } from "mongodb"
import { useEffect, useState } from "react"
import { Stack } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

import ActionMenuModal from "../../components/ActionMenuModal"
import ActionsList from "../../components/ActionsList"
import DownloadButton from "../../components/Buttons/DownloadButton"
import FileUploadButton from "../../components/Buttons/FileUploadButton"
import SaveScriptButton from "../../components/Buttons/SaveScriptButton"
import ExcelTable from "../../components/ExcelTable"
import Header from "../../components/Header"
import ScriptTitle from "../../components/ScriptTitle"
import clientPromise from "../../lib/mongodb"

const ScriptPage = (props) => {
  const [downloadUrl, setDownloadUrl] = useState(null)
  const [actions, setActions] = useState([])
  const [sheets, setSheets] = useState([])
  const [activeAction, setActiveAction] = useState(0)
  const [modalShow, setModalShow] = useState(false)

  const { id, title } = props
  const handleClose = () => setModalShow(false)

  useEffect(() => {
    const getActions = async () => {
      // Get Actions from database
      const response = await axios({ method: "GET", url: `/api/scripts/${id}` })
      // Load actions into state
      setActions(response.data.actions || [])
    }
    getActions()
  }, [setActions, id])

  const parseData = async (index) => {
    // Don't parse if no file is uploaded
    if (!sheets[0]) {
      return
    }
    const actionsSubset = actions.slice(0, index + 1)
    try {
      const response = await axios({
        url: "/api/parse",
        method: "POST",
        data: { actions: actionsSubset, sheet: sheets[0] },
      })

      if (response.status != 200) {
        console.error("did not get parsed data")
        return
      }
      const sheetsCopy = [...sheets]
      sheetsCopy[index + 1] = response.data
      setSheets(sheetsCopy)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <Header />
      <Container>
        <Row>
          <ScriptTitle title={title || id} id={id} />
        </Row>
        <Row>
          <Col lg="4">
            <FileUploadButton setSheets={setSheets} />
            <ActionsList
              actions={actions}
              setActions={setActions}
              activeAction={activeAction}
              setActiveAction={setActiveAction}
              parseData={parseData}
              sheets={sheets}
            />
            <Stack direction="horizontal">
              <Button
                variant="outline-secondary"
                onClick={() => setModalShow(true)}
              >
                Add action
              </Button>
              <ActionMenuModal
                show={modalShow}
                handleClose={handleClose}
                actions={actions}
                setActions={setActions}
              />
              <SaveScriptButton
                id={id}
                actions={actions}
                setActions={setActions}
              />
              <DownloadButton
                variant="outline-primary"
                downloadUrl={downloadUrl}
              >
                Download file
              </DownloadButton>
            </Stack>
          </Col>
          <Col lg="8">
            <ExcelTable
              sheet={sheets[activeAction]}
              setDownloadUrl={setDownloadUrl}
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}

// TODO: implement on-demand ISR for all pages
// So that, if user updates name of script, it's reflected immediately on /scripts page
export async function getStaticProps({ params: { script } }) {
  try {
    const client = await clientPromise
    const db = client.db("excelParser")

    const oid = new ObjectId(script)

    const results = await db.collection("scripts").findOne({ _id: oid })

    if (!results) {
      return { props: { id: script } }
    }

    return {
      props: {
        id: script,
        title: results.name || null,
      },
      revalidate: 10,
    }
  } catch (e) {
    console.error(e)
  }
}

export async function getStaticPaths() {
  try {
    const client = await clientPromise
    const db = client.db("excelParser")

    const actionsList = await db.collection("scripts").find()
    const allActions = await actionsList.toArray()

    const paths = allActions.map((e) => {
      return {
        params: {
          script: e._id.toString(),
        },
      }
    })

    return {
      paths,
      fallback: true,
    }
  } catch (e) {
    console.error(e)
  }
}

export default ScriptPage
