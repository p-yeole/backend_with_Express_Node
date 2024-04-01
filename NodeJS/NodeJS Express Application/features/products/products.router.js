import { router } from "../../server.js";

router.get("/", (req, res) => {
	res.send("Products");
});

export default router;
