# 🔗 URL Shortener

A simple URL Shortener built using **Node.js, Express.js, and MySQL**.

This project converts long URLs into short, unique URLs using NanoID and stores the URL mappings in a MySQL database.

## 🚀 Features

- Generate unique short URLs
- Store URLs in MySQL
- Retrieve URLs using a short ID
- Redirect users to the original URL
- REST API for creating short URLs
- REST API for accessing short URLs
- MySQL database integration
- Environment variable support using dotenv
- Organized backend using routes and controllers
- Feature-based Git branching

## 🛠️ Tech Stack

- Node.js
- Express.js
- MySQL
- mysql2
- NanoID
- dotenv
- Nodemon

## 📁 Project Structure

```text
URL_Shortner/
│
├── config/
│   └── db.js
│
├── controller/
│   └── url.js
│
├── routes/
│   └── url.js
│
├── .env
├── .gitignore
├── index.js
├── package.json
└── package-lock.json
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/arshadtraya99/URL-Shortner.git
```

### 2. Navigate to the project

```bash
cd URL-Shortner
```

### 3. Install dependencies

```bash
npm install
```

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=url_shortner
DB_PORT=3306
PORT=8000
```

> Never commit the `.env` file to GitHub because it contains database credentials.

## 🗄️ Database Setup

Open MySQL Workbench or the MySQL terminal.

Create the database:

```sql
CREATE DATABASE url_shortner;

USE url_shortner;
```

Create the `urls` table:

```sql
CREATE TABLE urls (
    id INT PRIMARY KEY AUTO_INCREMENT,
    short_id VARCHAR(20) NOT NULL UNIQUE,
    redirect_url TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP
);
```

Create the `visit_history` table:

```sql
CREATE TABLE visit_history (
    id INT PRIMARY KEY AUTO_INCREMENT,
    url_id INT NOT NULL,
    visited_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (url_id)
        REFERENCES urls(id)
        ON DELETE CASCADE
);
```

## ▶️ Running the Project

Start the development server:

```bash
npm start
```

The server will run on:

```text
http://localhost:8000
```

## 📡 API Endpoints

### 1. Create Short URL

**Method:**

```text
POST
```

**Endpoint:**

```text
http://localhost:8000/url
```

**Request Body:**

```json
{
    "url": "https://google.com"
}
```

**Example Response:**

```json
{
    "shortId": "hMuRMrds",
    "redirectUrl": "https://google.com"
}
```

The `shortId` is generated using NanoID.

### 2. Get Short URL

**Method:**

```text
GET
```

**Endpoint:**

```text
http://localhost:8000/url/:shortId
```

For example, if the generated short ID is:

```text
hMuRMrds
```

use:

```text
http://localhost:8000/url/hMuRMrds
```

The server searches the MySQL database for the corresponding `short_id`.

## 🔄 Application Flow

### Creating a Short URL

```text
Client
   │
   │ POST /url
   ▼
Express Router
   │
   ▼
URL Controller
   │
   ├── Validate URL
   │
   ├── Generate short ID using NanoID
   │
   ▼
MySQL Database
   │
   └── Store short_id + redirect_url
   │
   ▼
Return Short URL
```

### Accessing a Short URL

```text
Client
   │
   │ GET /url/:shortId
   ▼
Express Router
   │
   ▼
URL Controller
   │
   ▼
MySQL Database
   │
   └── Find original URL
   │
   ▼
Redirect to Original URL
```

## 🧠 Database Design

The project uses a relational database design.

### URLs Table

```text
urls
│
├── id
├── short_id
├── redirect_url
├── created_at
└── updated_at
```

### Visit History Table

```text
visit_history
│
├── id
├── url_id
└── visited_at
```

One URL can have multiple visits.

```text
             urls
               │
               │ 1
               │
               │
               │ many
               ▼
        visit_history
```

## 🌿 Git Branching Strategy

The project uses feature branches for development.

```text
main
 │
 ├── adding_new_feature
 │
 └── added_get_method
```

The `main` branch contains stable code, while new features are developed in separate branches.

Typical workflow:

```bash
git checkout -b feature-name
git add .
git commit -m "Add feature"
git push -u origin feature-name
```

After testing the feature, create a Pull Request and merge it into `main`.

## 📌 Project Progress

- [x] Node.js project setup
- [x] Express server setup
- [x] MySQL connection
- [x] Database creation
- [x] URLs table
- [x] Visit history table
- [x] NanoID integration
- [x] Generate short ID
- [x] Create short URL API
- [x] Store URL in MySQL
- [x] GET short ID API
- [ ] Redirect to original URL
- [ ] Store visit history
- [ ] URL validation
- [ ] Frontend
- [ ] Analytics
- [ ] User authentication
- [ ] Deployment

## 🔮 Future Improvements

- URL validation
- Custom short URLs
- Click and visit analytics
- User authentication
- URL expiration
- QR code generation
- Frontend interface
- Rate limiting
- User-specific URL management
- Cloud deployment

## 👨‍💻 Author

**Arshad**

GitHub:

https://github.com/arshadtraya99/URL-Shortner

## 📄 License

This project is created for learning and development purposes.
