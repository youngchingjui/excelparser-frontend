const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step)

const getColumnRange = () => {
  return range(1, 11, 1)
}

export { getColumnRange, range }
