import _ApplyArithmatic from "./_ApplyArithmatic"
import _DeleteColumnsAToB from "./_DeleteColumnsAToB"
import _IfClause from "./_IfClause"
import _IfThen from "./_IfThen"
import _InsertAColumnsAfterColumnB from "./_InsertAColumnsAfterColumnB"
import _RemoveAToBRows from "./_RemoveAToBRows"
import _RemoveColumns from "./_RemoveColumns"
import _RemoveRows from "./_RemoveRows"
import _SelectField from "./_SelectField"
import _SetCellValue from "./_SetCellValue"
import _SetValue from "./_SetValue"
import _TextField from "./_TextField"
import _ThenClause from "./_ThenClause"

const Action = {
  RemoveRows: _RemoveRows,
  RemoveColumns: _RemoveColumns,
  RemoveAToBRows: _RemoveAToBRows,
  IfClause: _IfClause,
  IfThen: _IfThen,
  ThenClause: _ThenClause,
  TextField: _TextField,
  SelectField: _SelectField,
  InsertAColumnsAfterColumnB: _InsertAColumnsAfterColumnB,
  SetCellValue: _SetCellValue,
  SetValue: _SetValue,
  ApplyArithmatic: _ApplyArithmatic,
  DeleteColumnsAToB: _DeleteColumnsAToB,
}
export default Action
