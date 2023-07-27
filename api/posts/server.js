import app from "./app.js"

let port = process.env.PORT

if (port == null || port == "") port = 3333

app.listen(port)
