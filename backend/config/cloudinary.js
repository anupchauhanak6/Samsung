import {v2 as cloudinary} from 'cloudinary'
import 'dotenv/config'

cloudinary.config({
    claud_name: process.env.CLOUDINARY_CLAUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

export const connectCloudinary = async () => {
    try {
        const result = await cloudinary.api.ping();
        console.log('Cloudinary connected: ', result.status);
        
    } catch (error) {
        console.log(error);
    }
}