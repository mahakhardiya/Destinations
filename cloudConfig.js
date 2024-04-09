const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// Set up Cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

// Function to generate a timestamp
function generateTimestamp() {
    // Use the current time as the timestamp
    return Math.round(new Date().getTime() / 1000);
}

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: (req, file) => {
        const timestamp = generateTimestamp(); // Generate timestamp
        return {
            folder: 'destinations_DEV',
            allowed_formats: ['png', 'jpg', 'jpeg'], // Add allowed formats here
            timestamp: timestamp, // Use generated timestamp
            api_key: process.env.CLOUD_API_KEY,
            signature: cloudinary.utils.api_sign_request({ timestamp: timestamp }, process.env.CLOUD_API_SECRET) // Generate signature
        };
    },
});

module.exports = {
    cloudinary,
    storage
};
