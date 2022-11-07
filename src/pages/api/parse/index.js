import { actionFunctions } from "../../../helper/mappings"

// TODO: do input validation, since users can edit html validation. HTML validation is not fool-proof
const handler = (req, res) => {
  if (req.method === "POST") {
    const { body } = req
    const { actions, sheet } = body

    let responseString = sheet
    actions.forEach((action) => {
      if (!actionFunctions.hasOwnProperty(action.type)) {
        console.warn("no matching action")
        return
      }
      responseString = actionFunctions[action.type](action, responseString)
    })

    res.status(200).json(responseString)
  } else if (req.method === "GET") {
    res.status(200).json({ message: "Here's the GET method" })
  } else {
    res.status(401).json({ message: `${req.method} not supported` })
  }
}
export default handler
