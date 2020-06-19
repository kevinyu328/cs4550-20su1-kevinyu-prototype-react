export const getAllForums = () =>
    fetch("http://localhost:8080/api/forums")
      .then(response => response.json())


export const getForumById = (forumId) =>
    fetch(`http://localhost:8080/api/forums/${forumId}`)
      .then(response => response.json())


export const createForum = (forum) =>
    fetch("http://localhost:8080/api/forums", {
      method: 'POST',
      body: JSON.stringify(forum),
      headers: {"content-type": "application/json"}
    })
      .then(response => response.json())



export const deleteForum = (forumId) =>
    fetch(`http://localhost:8080/api/forums/${forumId}`, {
      method: "DELETE"
    })
      .then(response => response.json())


export const updateForum = (forumId, updatedForum) =>
    fetch(`http://localhost:8080/api/forums/${forumId}`, {
      method: "PUT",
      body: JSON.stringify(updatedForum),
      headers: {"content-type": "application/json"}
    })
      .then(response => response.json())




