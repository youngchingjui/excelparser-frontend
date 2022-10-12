import { ObjectId } from "mongodb"

import clientPromise from "../../../lib/mongodb"

const handler = async (req, res) => {
  switch (req.method) {
    case "GET":
      // Retreive a script by ID
      const { script: scriptID } = req.query
      try {
        const client = await clientPromise
        const db = client.db("excelParser")

        const oid = new ObjectId(scriptID)
        const script = await db.collection("scripts").findOne({ _id: oid })
        res.send(script)
      } catch (e) {
        console.error(e)
      }

      res.end(`Script: ${scriptID}`)

    case "POST":
      // Create a new script
      const data = req.body
      try {
        const client = await clientPromise
        const db = client.db("excelParser")

        await db.collection("scripts").insertOne(JSON.parse(data))
        res.end("Successfully added new script")
      } catch (e) {
        res.end("error with POST")
      }

    default:
      res.end(`${req.method} not supported`)
  }
}

export default handler
