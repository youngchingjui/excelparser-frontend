import Container from "react-bootstrap/Container"
import Header from "../components/Header"
import Link from "next/link"
import getUID from "../helper/uid"

const HomePage = () => {
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
          <Link
            href={{
              pathname: "/scripts/[script]",
              query: { script: getUID(6) },
            }}
          >
            Create your own script
          </Link>
        </div>
      </Container>
    </>
  )
}

export default HomePage
