import express, { Request, Response, NextFunction } from 'express'
const router = express.Router();

import * as fs from 'fs';
import * as exif from 'exif-parser';

// HEIC DECODING



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

const getGeolocationFromImage = (filePath: string): { latitude?: number, longitude?: number } => {
  try {
    const fileBuffer = fs.readFileSync(filePath);
    const parser = exif.create(fileBuffer);
    const result = parser.parse();

    if (result.tags && result.tags.GPSLatitude && result.tags.GPSLongitude) {
      const latitude = result.tags.GPSLatitude
      const longitude = result.tags.GPSLongitude
      return { latitude, longitude };
    }

    return {};
  } catch (error) {
    console.error('Error reading or parsing the image file:', error);
    return {};
  }
}

const imagePath = '/Users/alexeysv/Desktop/myProjects/photo-sharing-investigation/server/public/test2.jpg' // image path
const geolocation = getGeolocationFromImage(imagePath);

if (geolocation.latitude !== undefined && geolocation.longitude !== undefined) {
  console.log('Geolocation:', geolocation.latitude, geolocation.longitude);
} else {
  console.log('Geolocation not found in the image.');
}

router.get('/',  (req: Request, res: Response, next: NextFunction) => {
  res.send({ title: 'Express' });
});

export { router as experimentOneRouter };