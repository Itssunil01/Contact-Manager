const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const User = require("./Modules/user");
const LocalStrategy = require("passport-local");
const userRoutes = require("./Routes/user");
const listingRoutes = require("./Routes/listing");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors( {origin: "http://localhost:5173" , credentials: true} ));

const sessions = {
  secret: "secretpassword",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  },
};



app.use(session(sessions));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// app.use("/demo" , async (req,res) => {
//   let fakeUser = new User({
//     email: "student@gmail.com",
//     username: "delta-student"
//   })

//   let regsisterUser = await User.register(fakeUser , "hellobuddy");
//   res.send(regsisterUser);
// })

app.use("/", userRoutes)
app.use("/", listingRoutes)


const mongoUrl = "mongodb://127.0.0.1:27017/contact-manager";

main()
  .then(() => {
    console.log("connected to mongo");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(mongoUrl);
}

app.get("/", (req, res) => {
  res.send("Hello there");
});

app.listen(port, () => {
  console.log("listening");
});
