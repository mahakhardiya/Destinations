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
        const api_key = process.env.CLOUD_API_KEY; // Retrieve API key from environment variables
        const folder = 'destinations_DEV'; // Define the folder parameter

        // Construct the string to sign
        const stringToSign = `allowed_formats=png,jpg,jpeg&folder=${folder}&timestamp=${timestamp}&api_key=${api_key}`;

        // Generate the signature using SHA1 hashing algorithm
        const signature = cloudinary.utils.api_sign_request(stringToSign, process.env.CLOUD_API_SECRET);

        return {
            folder: folder,
            allowed_formats: ['png', 'jpg', 'jpeg'],
            timestamp: timestamp,
            api_key: api_key,
            signature: signature
        };
    },
});

module.exports = {
    cloudinary,
    storage
};
