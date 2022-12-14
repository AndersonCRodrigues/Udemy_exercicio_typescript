type VerifyuserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyuserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const dbUser = { username: 'ze', password: '123' };
const sentUser = { username: 'ze', password: '1234' };

const loggedIn = verifyUser(dbUser, sentUser);

console.log(loggedIn);
