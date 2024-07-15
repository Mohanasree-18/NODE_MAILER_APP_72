const express = require("express");
const sendEmail = require("./utils/sendEmail");
const app = express();
const PORT = process.env.PORT || 9000;
const sendemail = require("./utils/sendEmail");

//!SET VIEW ENGINE
app.set("view engine", "ejs");

//!serve static assets
//this mean that our server will store any files that are kept in public folder
app.use(express.static("public"));

//!pass the data from form
app.use(express.urlencoded({ extended: false }));

//!route to render email form
app.get("/", (req, res) => {
  //we will render tenplate engine or html
  res.render("email-form");
});

//!route to send email
app.post("/send-email", async (req, res) => {
  const { email, message } = req.body;
  try {
    sendemail(email, message);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, console.log(`server is running on PORT:${PORT}`));
