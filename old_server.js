const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
const PORT = 6000;

// Connect to SQLite database
const db = new sqlite3.Database("/myPWA/.database/datasource.sqlite3", sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error("Error connecting to database:", err.message);
    } else {
        console.log("Connected to SQLite database");
    }
});

// Middleware
app.use(cors());
app.use(express.static("public"));

// Route to fetch cars with filters
app.get("/cars", (req, res) => {
    let query = "SELECT * FROM cars WHERE 1=1";
    const params = [];

    if (req.query.make && req.query.make !== "All") {
        query += " AND make = ?";
        params.push(req.query.make);
    }
    if (req.query.type && req.query.type !== "All") {
        query += " AND type = ?";
        params.push(req.query.type);
    }
    if (req.query.transmission && req.query.transmission !== "All") {
        query += " AND transmission = ?";
        params.push(req.query.transmission);
    }
    if (req.query.drivetrain && req.query.drivetrain !== "All") {
        query += " AND drivetrain = ?";
        params.push(req.query.drivetrain);
    }

    db.all(query, params, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
