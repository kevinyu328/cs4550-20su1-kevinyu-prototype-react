export const checkLogin = () =>
    fetch("https://cs4550-20su1-proto-server.herokuapp.com/api/profile", {
      method: 'POST',
      credentials: "include"
    })
      .then(response => response.json())



export const getUserByUsername = (username) =>
    fetch(`https://cs4550-20su1-proto-server.herokuapp.com/api/users/${username}`)
      .then(response => response.json())
