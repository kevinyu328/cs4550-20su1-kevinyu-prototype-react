export const addComment = (forumId, newComment) =>
    fetch(`http://localhost:8080/api/forums/${forumId}/comments`, {
      method: "POST",
      body: JSON.stringify(newComment),
      headers: {"content-type": "application/json"}
    })
      .then(response => response.json())


export const getCommentsForForum = (forumId) =>
    fetch(`http://localhost:8080/api/forums/${forumId}/comments`)
      .then(response => response.json())


export const deleteComment = (commentId) =>
    fetch(`http://localhost:8080/api/comments/${commentId}`, {
      method: "DELETE"
    })


export const updateComment = (commentId, updatedComment) =>
    fetch(`http://localhost:8080/api/comments/${commentId}`, {
      method: "PUT",
      body: JSON.stringify(updatedComment),
      headers: {"content-type": "application/json"}
    })
      .then(response => response.json())