export const getAllForums = () =>
    fetch("https://cs4550-20su1-proto-server.herokuapp.com/api/forums")
      .then(response => response.json())


export const getForumById = (forumId) =>
    fetch(`https://cs4550-20su1-proto-server.herokuapp.com/api/forums/${forumId}`)
      .then(response => response.json())


export const createForum = (forum) =>
    fetch("https://cs4550-20su1-proto-server.herokuapp.com/api/forums", {
      method: 'POST',
      body: JSON.stringify(forum),
      headers: {"content-type": "application/json"}
    })
      .then(response => response.json())



export const deleteForum = (forumId) =>
    fetch(`https://cs4550-20su1-proto-server.herokuapp.com/api/forums/${forumId}`, {
      method: "DELETE"
    })
      .then(response => response.json())


export const updateForum = (forumId, updatedForum) =>
    fetch(`https://cs4550-20su1-proto-server.herokuapp.com/api/forums/${forumId}`, {
      method: "PUT",
      body: JSON.stringify(updatedForum),
      headers: {"content-type": "application/json"}
    })
      .then(response => response.json())




