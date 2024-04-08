const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

function generateTimestamp() {
    return Math.round(new Date().getTime() / 1000);
}

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: (req, file) => {
        return {
            folder: 'destinations_DEV',
            allowed_formats: ['png', 'jpg', 'jpeg'], // Add allowed formats here
            timestamp: generateTimestamp()
        };
    },
});

module.exports = {
    cloudinary,
    storage
};