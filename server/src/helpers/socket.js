const users = [];

// Join user to chat
function userJoin(id, userData, room) {
  const user = { id, userData, room };
  const findUserIndexIfExist = users.findIndex(
    (user) => user.userData.email === userData.email
  );

  if (findUserIndexIfExist !== -1) {
    users[findUserIndexIfExist] = user;

    return user;
  }

  users.push(user);
  return user;
}

// Get current user
function getCurrentUser(email) {
  return users.find((user) => user.userData.email === email);
}

module.exports = {
  userJoin,
  getCurrentUser,
};
