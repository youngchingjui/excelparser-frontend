import Container from "react-bootstrap/Container"
import Header from "../../components/Header"
import Link from "next/link"
import getUID from "../../helper/uid"

const scripts = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>Scripts</h1>
        <Link
          href={{
            pathname: "/scripts/[script]",
            query: { script: getUID(6) },
          }}
        >
          Create your own script
        </Link>
      </Container>
    </>
  )
}

export default scripts
