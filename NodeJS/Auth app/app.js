import express from "express";
import signinRouter from "./src/account/signin/signin.router.js";
import profileRouter from "./src/account/profile/profile.router.js";

const app = express();
const PORT = 4000;

app.use(express.json());
app.use("/signin", signinRouter);
app.use("/profile", profileRouter);

app.listen(PORT, () => {
	console.log(`The server is running at http://localhost:${PORT}`);
});
