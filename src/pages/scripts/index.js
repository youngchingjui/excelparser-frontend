import Link from "next/link"
import { Button } from "react-bootstrap"
import Container from "react-bootstrap/Container"

import Header from "../../components/Header"
import { useNewObjectId } from "../../hooks"
import clientPromise from "../../lib/mongodb"

const ScriptsPage = ({ scripts }) => {
  const objectId = useNewObjectId()

  return (
    <>
      <Header />
      <Container>
        <h1>Scripts</h1>

        <h3>My scripts</h3>
        {scripts.map((e) => {
          return (
            <div key={e._id}>
              <Link
                href={{
                  pathname: "/scripts/[script]",
                  query: { script: e._id },
                }}
              >
                {e.name ? e.name : e._id}
              </Link>
            </div>
          )
        })}
        {objectId && (
          <Link
            href={{
              pathname: "/scripts/[script]",
              query: { script: objectId },
            }}
            passHref
          >
            <Button>Create your own script</Button>
          </Link>
        )}
      </Container>
    </>
  )
}

export async function getStaticProps() {
  try {
    const client = await clientPromise
    const db = client.db("excelParser")

    const scripts = await db.collection("scripts").find().toArray()
    return {
      props: {
        scripts: JSON.parse(JSON.stringify(scripts)),
      },
      revalidate: 10,
    }
  } catch (e) {
    console.error(e)
  }
  return { props: {} }
}

export default ScriptsPage
