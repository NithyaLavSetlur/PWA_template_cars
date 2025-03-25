const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");
const routes = require(path.join(__dirname, "routes", "routes.js")); // Make sure this path is correct

const app = express();

// Set the views directory (if not using default 'views' directory)
app.set('views', __dirname + '/views');

// Set the view engine (e.g., ejs)
app.set('view engine', 'ejs');

app.use('/', routes);

// Database setup with error handling
const dbPath = path.join(__dirname, ".database", "datasource.db");
console.log("Database path:", dbPath);

if (!fs.existsSync(dbPath)) {
    console.error("Error: Database file not found at", dbPath);
    process.exit(1);
}

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error("Database connection error:", err.message);
        process.exit(1);
    }
    console.log("Connected to SQLite database");
});

// Middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static(path.join(__dirname, "public")));

// Routes --> needs to be in routes.js file
app.get('/users', (req, res) => {
    // connection.query('SELECT * FROM cars', (err, results) => {
    //   if (err) {
    //     res.status(500).send('Database query error');
    //     return;
    //   }
      db.all("SELECT * FROM cars", (err, results) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ error: err.message });
        }
      // Render the 'index.ejs' template and pass the results to it
      res.render('index', { users: results });
    });
  });
  

// app.get("/users", (req, res) => {
//     console.log("Fetching cars...");
    // db.all("SELECT * FROM cars", (err, rows) => {
    //     if (err) {
    //         console.error("Database error:", err);
    //         return res.status(500).json({ error: err.message });
    //     }
//         // Render the 'index.ejs' template and pass the results to it
//         console.log(`Returned ${rows.length} cars`);
//         res.render('index', { users: results });
//         // res.json(rows);
//     });
// });


// Test endpoint
app.get("/api/test", (req, res) => {
    res.json({ 
        status: "Server is working",
        time: new Date().toISOString()
    });
});

// Default route
app.get('/', (req,res) => {
    res.send('Hello, World!');  
});

// Start server (ONLY ONE app.listen)
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/users`);
});