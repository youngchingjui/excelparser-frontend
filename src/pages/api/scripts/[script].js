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
      // Create a new script or update existing script
      const { actions, id } = req.body
      try {
        const client = await clientPromise
        const db = client.db("excelParser")

        // Update script, or create new if doesn't exist
        const response = await db
          .collection("scripts")
          .replaceOne({ _id: ObjectId(id) }, { actions }, { upsert: true })

        if (!response.acknowledged) {
          throw Error("Did not create or update script correctly")
        }

        // Send back updated script
        const updatedScript = await db
          .collection("scripts")
          .findOne({ _id: ObjectId(id) })

        res.send(updatedScript)
      } catch (e) {
        console.error(e)
        res.status(500).end("error with POST")
      }

    default:
      res.end(`${req.method} not supported`)
  }
}

export default handler
