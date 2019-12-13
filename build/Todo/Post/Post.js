"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes = express_1.default.Router();
const TodoSchema_1 = __importDefault(require("./../../Config/Model/TodoSchema"));
routes.get("/get", (req, res) => {
    res.send({ mess: "jhal dab chokra" });
});
routes.post('/createTodo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const createTodo = yield new TodoSchema_1.default(req.body);
    createTodo.save()
        .then(() => {
        res.send({ message: "Todo Ache wyo" });
    })
        .catch((err) => {
        console.log(err);
    });
}));
routes.delete('/delteTodo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield TodoSchema_1.default.findOneAndDelete(req.body).then(() => {
        res.send({ message: "Todo Ache wyo" });
    })
        .catch((err) => {
        console.log(err);
    });
}));
routes.put('/updateTodo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield TodoSchema_1.default.findOneAndUpdate(req.body, { addTodo: "Qayoom2" }).then(() => {
        res.send({ message: "Todo Ache wyo" });
    })
        .catch((err) => {
        console.log(err);
    });
}));
routes.get('/gettodo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let allTodo = yield TodoSchema_1.default.find();
    res.send({ message: allTodo });
}));
module.exports = routes;
