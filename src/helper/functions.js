const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step)

const getColumnRange = () => {
  return range(1, 11, 1)
}

const getUID = (length) => {
  const Z_BASE_32 = "ybndrfg8ejkmcpqxot1uwisza345h769"
  let stringBuilder = []
  for (let i = 0; i < length; i++) {
    stringBuilder.push(Z_BASE_32[Math.floor(Math.random() * Z_BASE_32.length)])
  }

  return stringBuilder.join("")
}

export { getColumnRange, getUID, range }
