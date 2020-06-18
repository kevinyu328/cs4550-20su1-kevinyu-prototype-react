export const checkLogin = () =>
    fetch("http://localhost:8080/api/profile", {
      method: 'POST',
      credentials: "include"
    })
      .then(response => response.json())



export const getUserByUsername = (username) =>
    fetch(`http://localhost:8080/api/users/${username}`)
      .then(response => response.json())
