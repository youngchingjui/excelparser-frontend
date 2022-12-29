import Action from ".."

const _ComparisonValue = ({ state }) => {
  const { comparisonValue, setComparisonValue } = state
  return (
    <Action.TextField
      value={comparisonValue}
      onChange={(e) => setComparisonValue(e.target.value)}
    />
  )
}

export default _ComparisonValue
