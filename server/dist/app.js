"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
// import { router as indexRouter } from './routes/index'
const routes_1 = require("./routes");
const users_1 = require("./routes/users");
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.set('trust proxy', 1);
app.enable('trust proxy');
app.use((0, cors_1.default)({
    origin: [process.env.REACT_APP_URI] // <== URL of our future React app
}));
// app.use(
//     cors()
//   );
app.use('/', routes_1.indexRouter);
app.use('/users', users_1.usersRouter);
mongoose_1.default
    .connect(process.env.MONGODB_URI)
    .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
})
    .catch((err) => {
    console.error("Error connecting to mongo: ", err);
});
exports.default = app;
