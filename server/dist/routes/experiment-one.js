"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.experimentOneRouter = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.experimentOneRouter = router;
const fs = __importStar(require("fs"));
const exif = __importStar(require("exif-parser"));
// import { decode } from 'heic-convert';
// const decodeHEIC = async (inputPath: string, outputPath: string): Promise<void> => {
//     try {
//         const inputBuffer = fs.readFileSync(inputPath);
//         const { width, height, channels, data } = await decode(inputBuffer);
//         // You can do something with the decoded data here
//         // For example, save it as a JPEG file
//         const outputBuffer = Buffer.from(data);
//         fs.writeFileSync(outputPath, outputBuffer);
//         console.log('HEIC decoding complete.');
//     } catch (error) {
//         console.error('Error decoding HEIC:', error);
//     }
// };
// const heicFilePath = '../../../public/test2.heic';
// const outputFilePath = '/Users/alexeysv/Desktop/myProjects/photo-sharing-investigation/server/test2.jpg';
// decodeHEIC(heicFilePath, outputFilePath);
const getGeolocationFromImage = (filePath) => {
    try {
        const fileBuffer = fs.readFileSync(filePath);
        const parser = exif.create(fileBuffer);
        const result = parser.parse();
        if (result.tags && result.tags.GPSLatitude && result.tags.GPSLongitude) {
            const latitude = result.tags.GPSLatitude;
            const longitude = result.tags.GPSLongitude;
            return { latitude, longitude };
        }
        return {};
    }
    catch (error) {
        console.error('Error reading or parsing the image file:', error);
        return {};
    }
};
const imagePath = '/Users/alexeysv/Desktop/myProjects/photo-sharing-investigation/server/public/test2.jpg';
const geolocation = getGeolocationFromImage(imagePath);
if (geolocation.latitude !== undefined && geolocation.longitude !== undefined) {
    console.log('Geolocation:', geolocation.latitude, geolocation.longitude);
}
else {
    console.log('Geolocation not found in the image.');
}
/* GET home page. */
router.get('/', function (req, res, next) {
    res.send({ title: 'Express' });
});
