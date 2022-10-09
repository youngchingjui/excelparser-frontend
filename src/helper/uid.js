const Z_BASE_32 = "ybndrfg8ejkmcpqxot1uwisza345h769"

const getUID = (length) => {
  let stringBuilder = []
  for (let i = 0; i < length; i++) {
    stringBuilder.push(Z_BASE_32[Math.floor(Math.random() * Z_BASE_32.length)])
  }

  return stringBuilder.join("")
}

export default getUID
