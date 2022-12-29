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

// TODO: aValue returns "0" if blank with Number function. Not sure if this is expected
const ifThenStatement = (action, responseString) => {
  const { if: ifStatement, then: thenStatement } = action
  const { a: ifA, b: ifB, relationalOperator } = ifStatement[0]
  const { a: thenA, b: thenB, type: thenType } = thenStatement
  const { type: ifAType, value: ifAValue } = ifA
  const { type: ifBType, value: ifBValue } = ifB
  const tempArray = responseString.split("\r\n")
  const newArray = tempArray.map((row) => {
    const rowArray = row.split(",")
    const aValue = Number(rowArray[ifAValue - 1])
    const bValue = Number(ifBValue)

    // If either a value or b value are not numbers, skip
    if (isNaN(aValue) || isNaN(bValue)) {
      return rowArray.join(",")
    }

    if (relationalOperator == "equalTo") {
      if (aValue == bValue) {
        rowArray[thenB - 1] = rowArray[thenA - 1]
      }
    } else if (relationalOperator == "greaterThan") {
      if (aValue > bValue) {
        rowArray[thenB - 1] = rowArray[thenA - 1]
      }
    } else if (relationalOperator == "lessThan") {
      if (aValue < bValue) {
        rowArray[thenB - 1] = rowArray[thenA - 1]
      }
    } else if (relationalOperator == "greaterThanOrEqualTo") {
      if (aValue >= bValue) {
        rowArray[thenB - 1] = rowArray[thenA - 1]
      }
    } else if (relationalOperator == "lessThanOrEqualTo") {
      if (aValue <= bValue) {
        rowArray[thenB - 1] = rowArray[thenA - 1]
      }
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

const applyArithmatic = (action, responseString) => {
  const { operation, column, value } = action
  const tempArray = responseString.split("\r\n")
  const newArray = tempArray.map((row) => {
    const rowArray = row.split(",")
    // Don't apply arithmatic to non-numbers, usually headers
    if (isNaN(rowArray[column - 1])) {
      return rowArray.join(",")
    }

    if (operation == "Add") {
      rowArray[column - 1] = Number(rowArray[column - 1]) + Number(value)
    } else if (operation == "Subtract") {
      rowArray[column - 1] = Number(rowArray[column - 1]) - Number(value)
    } else if (operation == "Multiply") {
      rowArray[column - 1] = Number(rowArray[column - 1]) * Number(value)
    } else if (operation == "Divide") {
      rowArray[column - 1] = Number(rowArray[column - 1]) / Number(value)
    }

    return rowArray.join(",")
  })

  return newArray.join("\r\n")
}

const deleteColumnsAToB = (action, responseString) => {
  const { a, b } = action
  const tempArray = responseString.split("\r\n")
  const newArray = tempArray.map((row) => {
    const rowArray = row.split(",")
    rowArray.splice(a - 1, b - a + 1)
    return rowArray.join(",")
  })

  return newArray.join("\r\n")
}

export {
  applyArithmatic,
  deleteColumnsAToB,
  ifThenStatement,
  insertAColumnsAfterColumnB,
  removeAtoBRows,
  removeColumns,
  removeRows,
  setCellValue,
}
