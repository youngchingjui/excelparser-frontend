const _columnLetterToIndex = (colLetters) => {
  // Converts column letters (ie X, ab, etc) to array indices
  const columnIndex = colLetters
    .split("")
    .reduce(
      (sum, c) =>
        sum * 26 + c.toUpperCase().charCodeAt(0) - "A".charCodeAt(0) + 1,
      0
    )

  return columnIndex - 1
}

const _cellAddressToRowColumnObject = (cellAddressString) => {
  // Split the cell address into a column component and a row component
  const [_, column, row] = cellAddressString.match(/([a-zA-Z]+)([0-9]+)/)

  // Convert the column component to a number
  const columnIndex = _columnLetterToIndex(column)

  // Return the row and column indices as an object
  return { row: parseInt(row, 10) - 1, column: columnIndex }
}

const _getFromValue = ({ type, value, rowArray }) => {
  let newValue
  if (type == "column") {
    const fromColumn = _columnLetterToIndex(value)
    newValue = rowArray[fromColumn]
  } else if (type == "text") {
    newValue = value
  } else {
    throw Error("Invalid from type:", type)
  }

  return newValue
}

const setValue = (action, responseString) => {
  const { target, from } = action
  const rowsArray = responseString.split("\r\n")
  if (target.type == "column") {
    const newRows = rowsArray.map((rowString) => {
      const rowArray = rowString.split(",")
      const colIndex = _columnLetterToIndex(target.value)
      rowArray[colIndex] = _getFromValue({
        type: from.type,
        value: from.value,
        rowArray,
      })
      return rowArray.join(",")
    })

    return newRows.join("\r\n")
  } else if (target.type == "cell") {
    const { row, column } = _cellAddressToRowColumnObject(target.value)
    const newRowArray = rowsArray[row] ? rowsArray[row].split(",") : []
    newRowArray[column] = _getFromValue({
      type: from.type,
      value: from.value,
      rowArray: rowsArray[row] ? rowsArray[row].split(",") : [],
    })
    rowsArray[row] = newRowArray.join(",")
    return rowsArray.join("\r\n")
  } else {
    throw Error("Invalid target type:", target.type)
  }
}

export default setValue
