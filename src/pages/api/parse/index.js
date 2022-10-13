import { removeColumns, removeRows } from "../../../helper/api/parseFunctions"

const handler = (req, res) => {
  if (req.method === "POST") {
    const { body } = req
    const { actions, sheet } = body

    let responseString = sheet
    actions.forEach((action) => {
      switch (action.type) {
        case "removeRows":
          responseString = removeRows(action, responseString)
          break
        case "removeColumns":
          responseString = removeColumns(action, responseString)
          break
        default:
          console.log("no matching action")
      }
    })

    res.status(200).json(responseString)
  } else if (req.method === "GET") {
    res.status(200).json({ message: "Here's the GET method" })
  } else {
    res.status(401).json({ message: `${req.method} not supported` })
  }
}
export default handler
