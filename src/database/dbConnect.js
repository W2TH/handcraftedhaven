const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve('./src/database', 'handcrafted-haven.db');

// Function to initialize the database
const initializeDatabase = (db) => {
    // Create Users table
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        description TEXT
    )`, (err) => {
        if (err) {
            console.error("Error creating users table:", err.message);
        } else {
            console.log("Users table is ready");
        }
    });

    // Create Products table
    db.run(`CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        description TEXT,
        price REAL NOT NULL
    )`, (err) => {
        if (err) {
            console.error("Error creating products table:", err.message);
        } else {
            console.log("Products table is ready");
        }
    });

    // Create Reviews table
    db.run(`CREATE TABLE IF NOT EXISTS reviews (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        content TEXT NOT NULL,
        rating INTEGER NOT NULL
    )`, (err) => {
        if (err) {
            console.error("Error creating reviews table:", err.message);
        } else {
            console.log("Reviews table is ready");
        }
    });
};

// Create a new database instance and connect to it
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error("Error connecting to the SQLite database:", err.message);
    } else {
        console.log("Database file should be here:", dbPath);

        // Initialize the database with the required tables
        initializeDatabase(db);
    }
});

module.exports = db;
