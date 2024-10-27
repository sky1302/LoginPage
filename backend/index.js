const express = require("express")
const app = express()
const cors = require("cors")

app.use(express.json())
app.use(cors())

app.post("/v1/login/user/data", (req, res) => {
    const {emp_id, email} = req.body
    return res.json({
        "emp_id" : emp_id,
        "email" : email
    })
})

app.listen(3000, () => {
    console.log("Server is running on port : 3000")
})