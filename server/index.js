const express = require("express")
const cors = require("cors")
const mysql = require("mysql")
const { Stripe } = require("stripe");
const stripe = new Stripe("sk_test_51PBRzCRp2oHR08Od7gCz1DSbFvEy5wrq8dpdXs5Y7xog2WOnJc59k81r88zbcLUIfCxoueGBSkfQa6PL4Pzvrwfy00YrJrk4dO")

const app = express()
app.use(express.json())
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'gymate',
});

app.post("/api/create-checkout-session", async (req, res) => {

    try {

        const { product } = req.body;
        console.log(product);

        const sessions = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price: product,
                    quantity: 1,
                },
            ],
            mode: 'subscription',
            success_url: 'http://localhost:5173/profile/5',
            cancel_url: 'http://localhost:5173/pricing',
        });

        res.json({ id: sessions.id })
    } catch (error) {
        // console.dir({ error }, { depth: null })
        console.log(error.message);
        res.status(400).json({ message: error.message });
    }
})

db.connect((err) => {
    if (err) {
        console.error(err)
    }
    console.log('Connected to database');
});

//get data from login db
app.get("/gymate/data", (req, res) => {
    const sql = "SELECT * FROM login";
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        console.log({ result });
        res.json(result);
    });
});

// send data to login db
app.post("/gymate/data", (req, res) => {
    // const sql = `INSERT INTO login (name, email, password) VALUES ('${req.body.name}', '${req.body.email}', '${req.body.password}')`;
    const sql = "INSERT INTO login (name, email, password) VALUES (?, ?, ?)";

    // db.query(sql, (err, result) => {
    db.query(sql, [req.body.name, req.body.email, req.body.password], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: "Server error" });
            return;
        }
        res.json(result);
    });
});

//login endpoint
app.post("/gymate/login", (req, res) => {
    const { email, password } = req.body;
    const sql = `SELECT * FROM login WHERE email = ? AND password = ?`;
    db.query(sql, [email, password], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: "Server error" });
            return;
        }
        if (result.length > 0) {
            res.status(200).json({ success: true, message: "Login successful" });
        } else {
            res.status(401).json({ success: false, message: "Invalid email or password" });
        }
    });
});

//update end point
app.put("/gymate/update", (req, res) => {
    const { idlogin, name, email, password } = req.body;
    const sql = "UPDATE login SET name =?, email =?, password =? WHERE idlogin =?";
    db.query(sql, [name, email, password, idlogin], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: "Server error" });
            return;
        }
        res.json(result);
    });
});

app.listen(3001, () => {
    console.log("Server running on port 3001");
});
