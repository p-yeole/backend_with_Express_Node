const user = {
	username: "example_user",
	email: "user@example.com",
	name: "John Doe",
	age: 30,
	gender: "male",
	country: "United States",
	interests: ["coding", "reading", "traveling"],
	membership: "gold",
	last_login: "2024-03-14T08:30:00Z",
};

const profile = {
	name: "Pratik",
	email: "pratikyeole2732@gmail.com",
};

//Destructuring Array
// const { username, email, name, age, gender, country, interests, membership } =
// 	user;
// const message = `Welcome ${name}. You've successfully registered for our service in ${membership} membership `;

// console.log(message);

//Rest Operator
const { name, email, ...otherData } = user;
console.log(otherData);

//Spread Operator
const newUser2 = { ...user, ...profile, name: "Modi", age: 65 };
console.log(newUser2);
