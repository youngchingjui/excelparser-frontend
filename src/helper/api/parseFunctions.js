const removeRows = (action, responseString) => {
  const tempArray = responseString.split("\r\n")
  tempArray.splice(0, action.value)
  return tempArray.join("\r\n")
}

const removeColumns = (action, responseString) => {
  const tempArray = responseString.split("\r\n")

  const tempArray2 = tempArray.map((row) => {
    const rowArray = row.split(",")
    rowArray.splice(0, action.value)
    return rowArray.join(",")
  })
  return tempArray2.join("\r\n")
}

const removeAtoBRows = (action, responseString) => {
  const tempArray = responseString.split("\r\n")
  tempArray.splice(action.a, action.b - action.a)
  return tempArray.join("\r\n")
}

export { removeAtoBRows, removeColumns, removeRows }
