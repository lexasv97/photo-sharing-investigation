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
const index_1 = require("./routes/index");
const users_1 = require("./routes/users");
const experiment_one_1 = require("./routes/experiment-one");
const experiment_two_1 = require("./routes/experiment-two");
const experiment_three_1 = require("./routes/experiment-three");
const experimnent_four_1 = require("./routes/experimnent-four");
const experiment_five_1 = require("./routes/experiment-five");
const experiment__six_1 = require("./routes/experiment.-six");
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
app.use('/', index_1.indexRouter);
app.use('/users', users_1.usersRouter);
app.use('/experiment-one', experiment_one_1.experimentOneRouter);
app.use('/experiment-two', experiment_two_1.experimenTwoRouter);
app.use('/experiment-three', experiment_three_1.experimentThreeRouter);
app.use('/experiment-four', experimnent_four_1.experimentFourRouter);
app.use('/experiment-five', experiment_five_1.experimentFiveRouter);
app.use('/experiment-six', experiment__six_1.experimentSixRouter);
mongoose_1.default
    .connect(process.env.MONGODB_URI)
    .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
})
    .catch((err) => {
    console.error("Error connecting to mongo: ", err);
});
exports.default = app;
