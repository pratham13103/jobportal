require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const authRoute = require("./routes/auth");
const otpRoute = require("./routes/otp"); // Import OTP route
const session = require("express-session");
const passportStrategy = require("./passport");



const app = express();

// Use express-session instead of cookie-session
app.use(
    session({
        secret: process.env.SESSION_SECRET || "your_secret_key",
        resave: false,
        saveUninitialized: true,
        cookie: {
            secure: false, // ❌ Set to true if using HTTPS
            httpOnly: true,
            sameSite: "lax",
            maxAge: 24 * 60 * 60 * 1000, // 1 day
        },
    })
);


// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// CORS configuration
app.use(
    cors({
        origin: "http://localhost:3000",
        methods: "GET,POST,PUT,DELETE",
        credentials: true,
    })
);

app.use(express.json()); // Important for OTP API request handling

// Routes
app.use("/otp", otpRoute); // Add OTP route
app.use("/api/v1/auth", authRoute);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
