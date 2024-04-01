import { router } from "../../server.js";

router.get("/", (req, res) => {
	res.send({ message: "Users API" });
});

export default router;
