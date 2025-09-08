import express from "express"

const app = express()

app.use("/api/:URL", (req, res, next)=>{
    const remainingUrl = req.params.URL
    return res.send(`<h2>${remainingUrl} isnt available now.</h2>`)
})

app.listen(8000, ()=>{
    console.log(`listening on http://localhost:8000`);
})