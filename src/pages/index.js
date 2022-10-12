import Link from "next/link"
import Container from "react-bootstrap/Container"

import Header from "../components/Header"
import { useNewObjectId } from "../hooks"

const HomePage = () => {
  const objectId = useNewObjectId()
  return (
    <>
      <Header />
      <Container>
        <h1>Welcome to Excel Parser</h1>
        <div>
          ExcelParser is a no-code tool that helps you build automations for
          your Excel or CSV files, instead of writing VBA scripts
        </div>
        <div>
          <Link href="/scripts">View list of scripts</Link>
        </div>
        <div>
          {objectId && (
            <Link
              href={{
                pathname: "/scripts/[script]",
                query: { script: objectId },
              }}
            >
              Create your own script
            </Link>
          )}
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps(context) {
  return { props: {}, revalidate: 10 }
}

export default HomePage
