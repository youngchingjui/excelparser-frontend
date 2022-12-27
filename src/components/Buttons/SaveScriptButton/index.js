import axios from "axios"
import Button from "react-bootstrap/Button"

const SaveScriptButton = ({ id, actions }) => {
  const handleClick = async () => {
    try {
      const response = await axios({
        method: "PATCH",
        url: `/api/scripts/${id}`,
        data: { id, updates: { actions } },
      })

      console.log("Successfully updated script")
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Button variant="outline-secondary" onClick={handleClick}>
      Save script
    </Button>
  )
}

export default SaveScriptButton
