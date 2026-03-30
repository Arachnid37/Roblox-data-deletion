const express = require("express");
const app = express();

app.use(express.json());

app.post("/roblox-webhook", (req, res) => {
    console.log("Webhook received:", JSON.stringify(req.body, null, 2));
    res.sendStatus(200);
});

app.get("/", (req, res) => {
    res.send("Server running");
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server started");
});
