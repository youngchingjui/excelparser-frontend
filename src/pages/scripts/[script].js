import axios from "axios"
import { ObjectId } from "mongodb"
import { useEffect, useState } from "react"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

import ActionMenuModal from "../../components/ActionMenuModal"
import ActionsList from "../../components/ActionsList"
import DownloadButton from "../../components/DownloadButton"
import ExcelTable from "../../components/ExcelTable"
import FileUploadButton from "../../components/FileUploadButton"
import Header from "../../components/Header"
import TestComponent from "../../components/Test"
import clientPromise from "../../lib/mongodb"

const ScriptPage = (props) => {
  const [downloadUrl, setDownloadUrl] = useState(null)
  const [actions, setActions] = useState([])
  const [sheets, setSheets] = useState([])
  const [activeAction, setActiveAction] = useState(0)
  const [modalShow, setModalShow] = useState(false)

  const handleClose = () => setModalShow(false)
  // Load actions into state
  useEffect(() => {
    setActions(props.actions || [])
  }, [setActions, props.actions])

  const parseData = async (index) => {
    const actionsSubset = actions.slice(0, index + 1)
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
  }

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
            <TestComponent
              actions={actions}
              sheets={sheets}
              setSheets={setSheets}
            />
            <FileUploadButton setSheets={setSheets} />
            <ActionsList
              actions={actions}
              setActions={setActions}
              activeAction={activeAction}
              setActiveAction={setActiveAction}
              parseData={parseData}
            />
            <Button variant="secondary" onClick={() => setModalShow(true)}>
              Add action
            </Button>
            <ActionMenuModal
              show={modalShow}
              handleClose={handleClose}
              actions={actions}
              setActions={setActions}
            />
            <DownloadButton variant="secondary" downloadUrl={downloadUrl}>
              Download file
            </DownloadButton>
          </Col>
          <Col xs="8">
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

export async function getStaticProps({ params: { script } }) {
  try {
    const client = await clientPromise
    const db = client.db("excelParser")

    const oid = new ObjectId(script)

    const results = await db.collection("scripts").findOne({ _id: oid })

    if (!results) {
      return { props: { actions: [] } }
    }

    return { props: { actions: results.actions || [] } }
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
