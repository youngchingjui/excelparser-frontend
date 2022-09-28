import { Readable } from "stream"

const csvParser = require("csv-parser")
const fs = require("fs")

const handler = (req, res) => {
  if (req.method === "POST") {
    const { body } = req

    const { actions, tableContents } = JSON.parse(body)
    // Replace headers
    const headersDict = {
      交易日期: "date",
      支出: "outflow",
      收入: "inflow",
      对方户名: "payee",
      交易地点: "notes",
    }

    const readable_stream = Readable.from(tableContents)
    let result = []
    readable_stream.pipe(
      csvParser({
        skipLines: 3, // Remove first x rows
        mapHeaders: ({ header, index }) => {
          if (header in headersDict) {
            return headersDict[header]
          }
          return header
        },
      })
        .on("data", (row) => {
          // Combine 'outflow' and 'inflow' columns into 'amount'
          const outflow = parseFloat(row.outflow)
          const inflow = parseFloat(row.inflow)
          if (outflow > 0) {
            row.amount = -outflow
          } else if (inflow > 0) {
            row.amount = inflow
          } else {
            row.amount = 0
          }

          // Remove "支付宝-" or "财付通-" from `payee` and `notes` columns.
          // Add to new `tags` column

          if (row.payee.startsWith("支付宝")) {
            row.tags = "支付宝"
            row.payee = row.payee.replace("支付宝" + "-", "")

            if (row.payee.startsWith("支付宝")) {
              row.payee = row.payee.replace("支付宝" + "-", "")
            }
          }

          if (row.notes.startsWith("支付宝")) {
            row.tags = "支付宝"
            row.notes = row.notes.replace("支付宝" + "-", "")

            if (row.notes.startsWith("支付宝")) {
              row.notes = row.notes.replace("支付宝" + "-", "")
            }
          }

          if (row.payee.startsWith("财付通")) {
            row.tags = "财付通"
            row.payee = row.payee.replace("财付通" + "-", "")

            if (row.payee.startsWith("财付通")) {
              row.payee = row.payee.replace("财付通" + "-", "")
            }
          }

          if (row.notes.startsWith("财付通")) {
            row.tags = "财付通"
            row.notes = row.notes.replace("财付通" + "-", "")

            if (row.notes.startsWith("财付通")) {
              row.notes = row.notes.replace("财付通" + "-", "")
            }
          }

          // If payee is missing text, fill in with "notes"
          if (actions[4].type == "if") {
            const action = actions[4]
            if (row[action.logic.if.subject] == action.logic.if.value) {
              row[action.logic.then.subject] = row[action.logic.then.value]
            }
          }

          // If both `payee` and `notes` are missing in text and `摘要` column is `利息存入`, then fill `payee` as "中国建设银行股份有限公司上海分行运行中心" and `notes` as "利息存入"

          if (row.payee == "" && row.notes == "" && row.摘要 == "利息存入") {
            row.payee = "中国建设银行股份有限公司上海分行运行中心"
            row.notes = "利息存入"
          }

          // If text in `payee` and `notes` are the same, remove text in `notes`
          if (row.payee == row.notes) {
            row.notes = ""
          }

          // If notes is empty, then replace notes with "ATM存款" (only after notes is copied to payee)
          if (row.notes == "") {
            row.notes = row.摘要
          }

          // If `摘要` is not "消费" and `摘要` does not equal `notes`, then append `摘要` text to front of existing notes (after removing tags)
          if (!(row.摘要 == "消费") && !(row.摘要 == row.notes)) {
            row.notes = row.摘要 + "-" + row.notes
          }

          // Checks if date column is empty. If so, remove row
          if (row.date == "") {
            return null
          }

          // Return only these columns
          row = {
            date: row.date,
            payee: row.payee,
            amount: row.amount,
            notes: row.notes,
            tags: row.tags,
          }

          // Add parsed row
          result.push(row)
        })
        .on("end", () => {
          // ObjectToCSVString
          let stringData = ""
          // TODO: This only gets headers from first row. If missing some values, then header won't appear
          stringData += Object.keys(result[0]).join(",") + "\n"
          for (const row of result) {
            stringData += Object.values(row).join(",") + "\n"
          }
          res.status(200).json(stringData)
        })
    )
  } else if (req.method === "GET") {
    res.status(200).json({ message: "Here's the GET method" })
  } else {
    res.status(401).json({ message: `${req.method} not supported` })
  }
}
export default handler
