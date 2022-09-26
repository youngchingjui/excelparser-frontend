const handler = (req, res) => {
  if (req.method === "POST") {
    res.status(200).json({ name: "John Doe" })
  } else if (req.method === "GET") {
    res.status(200).json({ message: "Here's the GET method" })
  } else {
    res.status(401).json({ message: `${req.method} not supported` })
  }
}

export default handler
