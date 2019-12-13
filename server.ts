import express from 'express'
const app = express();
import mongoose from "./Config/database"
import cors from 'cors'
const PORT = process.env.PORT || 3002;
var db = mongoose.connection;

app.use(cors())
app.use(express.json());
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("DB connnect successull")
});

app.listen(PORT, () => {
    console.log("WoW its working")
})
app.get("/get", (req, res) => {
    res.send({ mess: "jhal dab" })
})



app.use('/todo', require('./Todo/Post/Post'))

// export default 