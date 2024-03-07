const user1 = {
  name: "Joseph",
  followers: 0,
};

const user2 = user1;
user2.followers = user1.followers++;

console.log(user1.followers);

console.log(user2.followers);

const add = 1 + 1;

console.log(add);
