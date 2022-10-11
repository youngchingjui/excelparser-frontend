import { ObjectId } from "mongodb"

const handler = (req, res) => {
  if (req.method == "GET") {
    const newObjectId = JSON.parse(JSON.stringify(new ObjectId()))
    res.send(newObjectId)
  }
}

export default handler
