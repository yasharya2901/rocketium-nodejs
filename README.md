# Node.js Dummy JSON Data API

This project is a Node.js application that sets up a server to fetch, store, and serve dummy JSON data. It allows basic filtering and sorting of data through API endpoints. Additionally, the project utilizes caching to enhance performance and reduce server load.

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

