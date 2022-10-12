import axios from "axios"
import { useEffect, useState } from "react"

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
