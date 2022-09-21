import { useRouter } from "next/router"
import Button from "react-bootstrap/Button"

const Script = () => {
  const router = useRouter()
  const { script } = router.query

  return (
    <div>
      <div>Header</div>
      <div>Sidebar</div>
      <div>
        Excel window
        <div>Decode from GB-18030 to UTF-8</div>
        <div>Remove first 4 lines</div>
        <div>Replace headers:</div>
        <div>&quot;交易时间&quot; --&gt; &quot;date&quot;</div>
        <div>&quot;交易对方&quot; --&gt; &quot;payee&quot;</div>
        <div>&quot;商品&quot; --&gt; &quot;notes&quot;</div>
        <div>&quot;金额（元）&quot; --&gt; &quot;amount&quot;</div>
        <div>Converts date column to actual date format</div>
        <div></div>
        <div>
          If 收/支 column is &quot;支出&quot;j, then amount is multiplied by -1
        </div>
        <div>If notes == &quot;/&quot;, copy 交易类型 into 商品</div>
        <div>Returns the following columns: date, payee, notes, amount</div>
        <Button>Add next instruction</Button>
      </div>
    </div>
  )
}

export default Script
