import axios from "axios"
import Button from "react-bootstrap/Button"

const SaveScriptButton = ({ id, actions, setActions }) => {
  const handleClick = async () => {
    try {
      const response = await axios({
        method: "POST",
        url: `/api/scripts/${id}`,
        data: { actions, id },
      })

      setActions(response.data.actions)
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
