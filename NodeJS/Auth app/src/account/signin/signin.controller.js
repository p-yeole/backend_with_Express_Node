import jwt from "jsonwebtoken";
export const profile = {
	id: "007",
	email: "pratikyeole2732@gmail.com",
	password: "012345",
	name: "Pratik Yeole",
	city: "Pune",
	state: "MH",
};

export const signinUser = (req, res) => {
	const { email, password } = req.body;

	if (email !== profile.email || password !== profile.password) {
		return res
			.status(401)
			.send({ data: {}, meta: { message: "Your credentials are invalid" } });
	}

	const userToken = jwt.sign({ id: profile.id }, "PratikYeole");

	// Issue a Token
	return res.status(200).send({
		data: {
			token: userToken,
		},
		meta: { message: "You're logged in" },
	});
};
