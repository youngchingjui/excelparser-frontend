import { ObjectId } from "mongodb"

import clientPromise from "../../../lib/mongodb"

const handler = async (req, res) => {
  const id = req.query.script
  const { updates, script } = req.body
  switch (req.method) {
    case "GET":
      // Retreive a script by ID
      try {
        const client = await clientPromise
        const db = client.db("excelParser")

        const oid = new ObjectId(id)
        const response = await db.collection("scripts").findOne({ _id: oid })
        console.info(response)
        res.status(200).send(response)
      } catch (e) {
        console.error(e)
      }

      break
    // TODO: Make POST only to create a new script, not updating one
    // Create a new script or update existing script
    case "POST":
      try {
        const client = await clientPromise
        const db = client.db("excelParser")

        // Update script, or create new if doesn't exist
        const response = await db
          .collection("scripts")
          .replaceOne({ _id: ObjectId(id) }, { script }, { upsert: true })

        console.info(response)
        if (!response.acknowledged) {
          throw Error("Script creation or update unsuccessfull")
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

      break

    // Update script or create new if doesn't exist
    case "PATCH":
      try {
        const client = await clientPromise
        const db = client.db("excelParser")

        const response = await db
          .collection("scripts")
          .updateOne({ _id: ObjectId(id) }, { $set: updates }, { upsert: true })

        console.info(response)
        if (!response.acknowledged) {
          res
            .status(400)
            .end("Something went wrong. Script update unsuccessful")

          break
        }

        // Return updated script
        const updatedScript = await db
          .collection("scripts")
          .findOne({ _id: ObjectId(id) })
        res.send(updatedScript)
      } catch (e) {
        console.error(e)
        res.status(500).end("error with PATCH")
      }

      break
    default:
      res.end(`${req.method} not supported`)
  }
}

export default handler
