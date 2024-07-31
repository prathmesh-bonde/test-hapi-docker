import Users from '../data/index.js';

const loginUser = (request) => {
	const { username, password } = request.payload;

	const user = Users.find((user) => user.username === username);
	if (user && user.password === password) {
		console.log('Login successful!');
		return 'Login successful!';
	} else {
		console.log('Invalid Username or Password');
		return 'Invalid Username or Password';
	}
};

export { loginUser };
