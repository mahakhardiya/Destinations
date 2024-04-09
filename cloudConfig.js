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
    params: async () => {
        const timestamp = generateTimestamp(); // Generate timestamp
        const folder = 'destinations_DEV'; // Define the folder parameter

        return {
            folder: folder,
            allowed_formats: ['png', 'jpg', 'jpeg'], // Add allowed formats here
            timestamp: timestamp, // Use generated timestamp
            signature: cloudinary.utils.api_sign_request({
                timestamp: timestamp,
                folder: folder,
                api_key: process.env.CLOUD_API_KEY
            }, process.env.CLOUD_API_SECRET) // Generate signature
        };
    },
});

module.exports = {
    cloudinary,
    storage
};
