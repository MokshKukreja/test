const express = require('express')
const app = express()
const port = 8000


// app.use((req,res,next)=>{
//     console.log("HTTPS Method" + req.method + " , URL" +req.url)
//     next();
// })
// app.use("/transactions",transactionRouter)
// app.use("/users",userRouter)



// mongoose.connect(process.env.MONGO_URL, () => {
//     console.log("Connected successfully");
// })
// mongoose.set('strictQuery', true);
// mongoose.connect("mongodb+srv://mokshkukreja999:moksh90@cluster0.frzozja.mongodb.net/expense?retryWrites=true&w=majority&appName=Cluster0", () => {
//     console.log("Connected successfully");
// })
// mongoose.set('strictQuery', true);



app.use('/', (req, res) => {
    res.json({messgae:"Hello"})
})

app.listen(8000, () => {
    console.log(`Example app listening on port ${port}`)
})