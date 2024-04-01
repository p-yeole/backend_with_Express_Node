import express from "express";

export const app = express();
const PORT = 4000;

app.use(express.json());

export const initServer = () => {
	app.listen(PORT, () => {
		console.log(`http://localhost:${PORT}`);
	});
};

export const router = express.Router();
// module.exports = { app };
