const handler = (req, res) => {
  if (req.method === "POST") {
    const { body } = req
    const newData = body.split("\n").splice(1).join("\n")
    res.status(200).json(newData)
  } else if (req.method === "GET") {
    res.status(200).json({ message: "Here's the GET method" })
  } else {
    res.status(401).json({ message: `${req.method} not supported` })
  }
}

export default handler
