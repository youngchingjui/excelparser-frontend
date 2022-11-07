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
  tempArray.splice(action.a - 1, action.b - action.a + 1)
  return tempArray.join("\r\n")
}

const ifThenStatement = (action, responseString) => {
  const tempArray = responseString.split("\r\n")
  const newArray = tempArray.map((row) => {
    const rowArray = row.split(",")
    if (rowArray[action.if[0].a.value - 1] == action.if[0].b.value) {
      rowArray[action.then.b - 1] = rowArray[action.then.a - 1]
    }
    return rowArray.join(",")
  })

  return newArray.join("\r\n")
}

const insertAColumnsAfterColumnB = (action, responseString) => {
  const tempArray = responseString.split("\r\n")

  // Don't add columns if action.a is 0 or below
  if (action.a < 1) {
    return responseString
  }

  const newColumns = Array(action.a).fill("")
  const tempArray2 = tempArray.map((row, index) => {
    const rowArray = row.split(",")
    rowArray.splice(action.b, 0, [...newColumns])
    return rowArray.join(",")
  })
  return tempArray2.join("\r\n")
}

const setCellValue = (action, responseString) => {
  const { column, row, value } = action
  const tempArray = responseString.split("\r\n")
  const targetRow = tempArray[row - 1]
  const rowArray = targetRow.split(",")
  rowArray[column - 1] = value
  tempArray[row - 1] = rowArray
  return tempArray.join("\r\n")
}

export {
  ifThenStatement,
  insertAColumnsAfterColumnB,
  removeAtoBRows,
  removeColumns,
  removeRows,
  setCellValue,
}
