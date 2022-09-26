import Table from "react-bootstrap/Table"

const ExcelTable = ({ contents }) => {
  return (
    <Table hover>
      <thead>
        <tr>
          {contents
            .split("\n")[0]
            .split(",")
            .map((e, index) => (
              <th key={index}>{e}</th>
            ))}
        </tr>
      </thead>
      <tbody>
        {contents
          .split("\n")
          .splice(1)
          .map((row, index) => (
            <tr key={index}>
              {row.split(",").map((cell, index) => (
                <td key={index}>{cell}</td>
              ))}
            </tr>
          ))}
      </tbody>
    </Table>
  )
}

export default ExcelTable
