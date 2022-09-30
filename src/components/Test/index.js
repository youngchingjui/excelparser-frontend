import Button from "react-bootstrap/Button"

const TestComponent = ({ actions, sheets, setSheets }) => {
  const parseData = async (e) => {
    e.preventDefault
    const response = await fetch("/api/parse", {
      method: "POST",
      body: JSON.stringify({ actions, sheets }),
    })

    if (!response.ok) {
      console.error("did not get parsed data")
      return
    }

    const jsonData = await response.json()
    setSheets(jsonData)
  }
  return (
    <>
      <Button onClick={parseData}>Test Button</Button>
    </>
  )
}

export default TestComponent
