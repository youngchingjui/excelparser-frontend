import axios from "axios"
import Button from "react-bootstrap/Button"

const TestComponent = ({ actions, sheets, setSheets }) => {
  const parseData = async (e) => {
    e.preventDefault
    const response = await axios({
      url: "/api/parse",
      method: "POST",
      data: { actions, sheets },
    })

    if (response.status != 200) {
      console.error("did not get parsed data")
      return
    }

    setSheets([response.data])
  }
  return <Button onClick={parseData}>Parse</Button>
}

export default TestComponent
