"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const database_1 = __importDefault(require("./build/Config/database"));
const cors_1 = __importDefault(require("cors"));
const PORT = process.env.PORT || 3002;
var db = database_1.default.connection;
app.use(cors_1.default());
app.use(express_1.default.json());
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("DB connnect successull");
});
app.listen(PORT, () => {
    console.log("WoW its working");
});
app.get("/get", (req, res) => {
    res.send({ mess: "jhal dab" });
});
app.use('/todo', require('./build/Todo/Post/Post'));
// export default 
