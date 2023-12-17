"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.experimentFiveRouter = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.experimentFiveRouter = router;
/* GET home page. */
router.get('/', function (req, res, next) {
    res.send({ title: 'Express' });
});
