(async function() {
  const r = await graphql(
    schema,
    `
      mutation {
        addUser(user: { name: "Paul", age: 61 }) {
          name
          age
        }
      }
    `,
    root
  );
  await graphql(
    schema,
    `
      mutation {
        deleteUser(id: "1") {
          name
          age
        }
      }
    `,
    root
  );
  const r1 = await graphql(
    schema,
    `
      query {
        getUsers {
          name
          age
        }
        getUser(id: "5") {
          name
          age
        }
      }
    `,
    root
  );
  console.log(r1.data);
})();
