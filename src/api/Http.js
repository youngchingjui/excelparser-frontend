const mockHttp = async (resource) => {
  return new Promise((res) => {
    setTimeout(async () => {
      const fetched = await import(`./mocks/${resource}.json`)
      res(fetched.default)
    }, 50)
  })
}

export default mockHttp
