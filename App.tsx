import React, { useEffect, useState } from 'react';

export const App: FunctionComponent = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    (async function() {
      const response: any = await fetch('http://localhost:4000/graphql?', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          query: '{getUsers{id, name, age, comments{userId, value}}}'
        })
      });
      const {
        data: { getUsers }
      } = await response.json();
      console.log(getUsers);
      setUsers(getUsers);
    })();
    // (async function() {
    //   const response: any = await fetch('http://localhost:4000/graphql?', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       Accept: 'application/json'
    //     },
    //     body: JSON.stringify({
    //       query: 'mutation {deleteUser(id: "1"){id, name, age}}'
    //     })
    //   });
    //   const {
    //     data: { deleteUser }
    //   } = await response.json();
    //   setUsers(deleteUser);
    // })();
  }, []);

  return (
    <ul>
      {users.map((user: any) => (
        <li key={user.name}>
          {user.id} : {user.name} - {user.age}
        </li>
      ))}
    </ul>
  );
};
