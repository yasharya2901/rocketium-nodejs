const axios = require('axios');
const fs = require('fs');
const path = require('path');
const express = require('express');
const cors = require('cors');
require('dotenv').config();


const app = express();

app.use(cors());
app.use(express.json());

const DUMMY_DATA_URL = process.env.DUMMY_DATA_URL;
const DUMMY_DATA_PATH = path.join(__dirname, 'data', 'dummyData.json');

let dummyData;


// Fetches data from the DUMMY_DATA_URL and saves it to the DUMMY_DATA_PATH

(async () => {
    try {
        let response = await axios.get(DUMMY_DATA_URL);
        dummyData = response.data;
        fs.mkdirSync(path.join(__dirname, 'data'), { recursive: true });
        fs.writeFileSync(DUMMY_DATA_PATH, JSON.stringify(dummyData, null, 2), 'utf8');
        console.log("Data has been fetched and saved successfully");
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
})() // anonymous function to fetch and save data in server during initialisation

app.get('/api/data', (req, res) => {
    let data = [...dummyData];
  
    const { name, language, version, bio, minversion, maxversion } = req.query;
    
    if (name) {
      data = data.filter((item) => item.name.toLowerCase().includes(name.toLowerCase()));
    }
    if (language) {
      data = data.filter((item) => item.language.toLowerCase() === language.toLowerCase());
    }
    if (version) {
      const versionNumber = parseFloat(version);
      data = data.filter((item) => item.version >= versionNumber);
    }
    if (bio) {
      data = data.filter((item) => item.bio.toLowerCase().includes(bio.toLowerCase()));
    }

    if (minversion || maxversion) {
        const minVer = parseFloat(minversion) || -Infinity;
        const maxVer = parseFloat(maxversion) || Infinity;
        data = data.filter((item) => item.version >= minVer && item.version <= maxVer);
    }
  
    const { sortBy, order } = req.query;
    if (sortBy) {
      data.sort((a, b) => {
        if (order === 'desc') {
          return a[sortBy] < b[sortBy] ? 1 : -1;
        }
        if (order === 'asc') {
            return a[sortBy] > b[sortBy] ? 1 : -1;
        }
      });
    }
    res.json(data);
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
})