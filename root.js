const { USERS } = require('./db/users');
const { COMMENTS } = require('./db/comments');

module.exports.root = {
  getUsers: () => {
    return USERS.map(user => ({
      ...user,
      comments: COMMENTS.filter(comment => comment.userId === user.id)
    }));
  },
  getUser: ({ id }) => ({
    ...USERS.find(user => user.id === id),
    comments: COMMENTS.filter(comment => comment.userId === user.id)
  }),
  addUser: ({ user }) => {
    const id = (Math.max(...USERS.map(user => user.id)) + 1).toString();
    USERS.push({ id, ...user });
  },
  deleteUser: ({ id }) => {
    const index = USERS.findIndex(user => user.id === id);
    USERS.splice(index, 1);
    return USERS;
  }
};
