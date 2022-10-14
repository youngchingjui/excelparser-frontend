import {
  removeAtoBRows,
  removeColumns,
  removeRows,
} from "../../../helper/api/parseFunctions"

const actionFunctions = {
  removeRows: (action, responseString) => removeRows(action, responseString),
  removeColumns: (action, responseString) =>
    removeColumns(action, responseString),
  removeAtoBRows: (action, responseString) =>
    removeAtoBRows(action, responseString),
}

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
