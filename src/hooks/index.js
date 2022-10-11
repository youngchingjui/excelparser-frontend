import { useEffect, useState } from "react"
import axios from "axios"

const useNewObjectId = () => {
  const [objectId, setObjectId] = useState(null)
  useEffect(() => {
    axios.get("/api/getNewObjectId").then((result) => {
      setObjectId(result.data)
    })
  }, [])

  return objectId
}

export { useNewObjectId }
