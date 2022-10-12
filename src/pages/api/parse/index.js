const handler = (req, res) => {
  if (req.method === "POST") {
    const { body } = req
    const { actions, sheets } = body

    let responseString
    actions.forEach((action) => {
      if (action.type == "removeRows") {
        const sheetArray = sheets[0].split("\r\n")
        sheetArray.splice(0, action.value)
        responseString = sheetArray.join("\r\n")
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
