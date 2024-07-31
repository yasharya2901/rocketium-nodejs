# Node.js Dummy JSON Data API

This project is a Node.js application that sets up a server to fetch, store, and serve dummy JSON data. It allows basic filtering and sorting of data through API endpoints. Additionally, the project utilizes caching to enhance performance and reduce server load.

Live Demo: https://rocketium-nodejs.onrender.com/api/data

## Features

- Fetches and stores dummy JSON data from a specified URL.
- Provides an API endpoint to access the data.
- Supports filtering and sorting of data based on multiple query parameters.
- Implements caching to improve performance and reduce server load.

## Project Structure

├── data<br>
│ └── dummyData.json # Local storage of fetched JSON data <br>
├── .env # Environment variables<br>
├── package.json # Node.js project metadata<br>
├── index.js # Main application file<br>
└── README.md # Project documentation<br>

## API Endpoints

GET - `/api/data`
<br>Fetches and returns the dummy JSON data with optional filtering and sorting.

| Query Parameter | Type   | Description                                                       |
|-----------------|--------|-------------------------------------------------------------------|
| `name`          | String | Filters data by name (case-insensitive, partial match).           |
| `language`      | String | Filters data by language (case-insensitive, exact match).         |
| `version`       | Number | Filters data by version number (greater than or equal).           |
| `bio`           | String | Filters data by bio (case-insensitive, partial match).            |
| `minversion`    | Number | Filters data with version greater than or equal to `minversion`.  |
| `maxversion`    | Number | Filters data with version less than or equal to `maxversion`.     |
| `sortBy`        | String | Sorts data by specified field (`name`, `language`, `version`).    |
| `order`         | String | Sort order (`asc` for ascending, `desc` for descending).          |

## Example Links

1. **Get all data:**

   [https://rocketium-nodejs.onrender.com/api/data](https://rocketium-nodejs.onrender.com/api/data)

2. **Filter by name (e.g., "Adeel"):**

   [https://rocketium-nodejs.onrender.com/api/data?name=Adeel](https://rocketium-nodejs.onrender.com/api/data?name=Adeel)

3. **Filter by language (e.g., "Sindhi"):**

   [https://rocketium-nodejs.onrender.com/api/data?language=Sindhi](https://rocketium-nodejs.onrender.com/api/data?language=Sindhi)

4. **Filter by version (e.g., greater than or equal to 2.0):**

   [https://rocketium-nodejs.onrender.com/api/data?version=2.0](https://rocketium-nodejs.onrender.com/api/data?version=2.0)

5. **Filter by bio (e.g., contains "pharetra"):**

   [https://rocketium-nodejs.onrender.com/api/data?bio=pharetra](https://rocketium-nodejs.onrender.com/api/data?bio=pharetra)

6. **Filter by version range (e.g., between 1.5 and 6.0):**

   [https://rocketium-nodejs.onrender.com/api/data?minversion=1.5&maxversion=6.0](https://rocketium-nodejs.onrender.com/api/data?minversion=1.5&maxversion=6.0)

7. **Sort by version in ascending order:**

   [https://rocketium-nodejs.onrender.com/api/data?sortBy=version&order=asc](https://rocketium-nodejs.onrender.com/api/data?sortBy=version&order=asc)

8. **Sort by version in descending order:**

   [https://rocketium-nodejs.onrender.com/api/data?sortBy=version&order=desc](https://rocketium-nodejs.onrender.com/api/data?sortBy=version&order=desc)

9. **Filter by name and sort by version descending:**

   [https://rocketium-nodejs.onrender.com/api/data?name=Adeel&sortBy=version&order=desc](https://rocketium-nodejs.onrender.com/api/data?name=Adeel&sortBy=version&order=desc)

10. **Filter by language and sort by name ascending:**

    [https://rocketium-nodejs.onrender.com/api/data?language=Sindhi&sortBy=name&order=asc](https://rocketium-nodejs.onrender.com/api/data?language=Sindhi&sortBy=name&order=asc)

# Getting Started
### Prerequisites

- Node.js (version 14 or above)
- npm (Node Package Manager)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yasharya2901/rocketium-nodejs
   cd rocketium-nodejs
   ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Create a .env file in the root directory and add the following variables:**
    ```bash
    DUMMY_DATA_URL=<YOUR_DUMMY_DATA_URL>
    PORT=<YOUR_DESIRED_PORT>
    ```
    * Replace <YOUR_DUMMY_DATA_URL> with the URL of the dummy JSON data.

4. **Run the project**
    ```bash
    npm start
    ```
    The server will start running on the specified port.

# Additional Features
## Caching
This project utilizes node-cache to cache filtered and sorted results. Cached data is identified by using the full URL (including query parameters) as the cache key. Caching reduces server load and improves response times for repeated requests with the same query parameters.

    Cache TTL (Time-To-Live): 100 seconds
    Cache Check Period: 120 seconds

