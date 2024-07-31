const axios = require('axios');
const fs = require('fs');
const path = require('path');
require('dotenv').config();


const DUMMY_DATA_URL = process.env.DUMMY_DATA_URL;
const DUMMY_DATA_PATH = path.join(__dirname, 'data', 'dummyData.json');


// Fetches data from the DUMMY_DATA_URL and saves it to the DUMMY_DATA_PATH

(async () => {
    try {
        let response = await axios.get(DUMMY_DATA_URL);
        let data = response.data;
        fs.mkdirSync(path.join(__dirname, 'data'), { recursive: true });
        fs.writeFileSync(DUMMY_DATA_PATH, JSON.stringify(data, null, 2), 'utf8');
        console.log("Data has been fetched and saved successfully");
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
})()

