export const addComment = (forumId, newComment) =>
    fetch(`https://cs4550-20su1-proto-server.herokuapp.com/api/forums/${forumId}/comments`, {
      method: "POST",
      body: JSON.stringify(newComment),
      headers: {"content-type": "application/json"}
    })
      .then(response => response.json())


export const getCommentsForForum = (forumId) =>
    fetch(`https://cs4550-20su1-proto-server.herokuapp.com/api/forums/${forumId}/comments`)
      .then(response => response.json())


export const deleteComment = (commentId) =>
    fetch(`https://cs4550-20su1-proto-server.herokuapp.com/api/comments/${commentId}`, {
      method: "DELETE"
    })


export const updateComment = (commentId, updatedComment) =>
    fetch(`https://cs4550-20su1-proto-server.herokuapp.com/api/comments/${commentId}`, {
      method: "PUT",
      body: JSON.stringify(updatedComment),
      headers: {"content-type": "application/json"}
    })
      .then(response => response.json())