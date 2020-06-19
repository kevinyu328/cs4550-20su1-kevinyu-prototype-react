import React from "react";
import {getForumById, updateForum} from "../../services/ForumServices";
import {Link} from "react-router-dom";
import {checkLogin} from "../../services/UserServices";
import {addMovieToFavorites} from "../../services/MovieServices";
import {
  addComment,
  deleteComment,
  getCommentsForForum, updateComment
} from "../../services/CommentServices";


export default class DiscussionForumComponent extends React.Component {
  state = {
    forum: '',
    comments: null,
    commentText: '',
    user: null,
    commentAdded: false,
    commentDeleted: false,
    editingComment: '',
    editingText: '',
    forumText: '',
    forumTitle: '',
    editingForumText: false,
  }


  componentDidMount() {
    getForumById(this.props.match.params.forumId)
      .then(forum => this.setState({forum: forum}))


    getCommentsForForum(this.props.match.params.forumId)
    .then(comments => this.setState({
      comments: comments
    }))


    checkLogin()
    .catch(e => '')
    .then(user => {
      if(user)
        this.setState({
          user: user
        })
    })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // if(prevState.comments !== this.state.comments) {
    //   // this.componentDidMount()
    //   // getCommentsForForum(this.props.match.params.forumId)
    //   // .then(comments => this.setState({
    //   //   comments: comments
    //   // }))
    // }
  }





  logout = () => {
    fetch("http://localhost:8080/api/logout", {
      method: 'POST',
      credentials: "include"
    })
    .then(response => this.props.history.push("/"))

  }


  addComment = () => {
    if(!this.state.user) {
      alert('Please log in to add a comment')
      this.props.history.push("/login")
    } else {
      addComment(this.state.forum.id, {
        username: this.state.user.username,
        text: this.state.commentText
      })
        .then(newComment => this.setState(prevState => ({
          comments: [...prevState.comments, newComment]
        })))
    }
  }


  deleteComment = (commentToDelete) => {
    deleteComment(commentToDelete.id)
    this.setState(prevState => ({
      comments: prevState.comments.filter(comment =>
        comment !== commentToDelete
      )
    }))
  }


  updateComment = (commentId, updatedComment) => {
    updateComment(commentId, updatedComment)
      .then(status =>
          getCommentsForForum(this.props.match.params.forumId)
            .then(comments => this.setState({
              comments: comments
            }))
      )
  }


  updateForumText = (forumId, updatedForum) => {
    updateForum(forumId, updatedForum)
      .then(status =>
          getForumById(this.props.match.params.forumId)
          .then(forum => this.setState({forum: forum})))
  }



  render() {
    return (
        <div className='container wbdv-forum-container'>
          {
            this.state.user &&
            <nav className="navbar fixed-top navbar-light bg-light">

              <Link to={"/"} className="navbar-brand">
                What Movie Should I Watch Next?
              </Link>


              <div className='wbdv-search-field-and-btn'>
                <input  className="wbdv-nav-search-field form-control mr-sm-2"
                        type="search"
                        placeholder="Search For a Movie Title"
                        aria-label="Search"
                        title="Search for a movie here"
                        value={this.state.query}
                        onChange={(event) => this.setState({
                          query: event.target.value
                        })}/>
                <Link to={`/search/${this.state.query}`}>
                  <button className="btn btn-danger my-2 my-sm-0"
                          type="submit">
                    Search
                    {/*<i className="fa fa-plus"/>*/}
                  </button>
                </Link>

              </div>

              <div>
                <ul className='navbar-nav wbdv-nav-login-signup'>
                  <li className='wbdv-nav-signup nav-item'>
                    <Link to={'/profile'}>
                      <button className='btn btn-outline-success'>
                        My profile
                      </button>
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <button onClick={this.logout}
                            className='btn btn-danger'>
                      Log out
                    </button>
                  </li>

                </ul>
              </div>
            </nav>
          }

          {
            !this.state.user &&
            <nav className="navbar fixed-top navbar-light bg-light">

              <Link to={"/"} className="navbar-brand">
                What Movie Should I Watch Next?
              </Link>

              <div className='wbdv-search-field-and-btn'>
                <input  className="wbdv-nav-search-field form-control mr-sm-2"
                        type="search"
                        placeholder="Search For a Movie Title"
                        aria-label="Search"
                        title="Search for a movie here"
                        value={this.state.query}
                        onChange={(event) => this.setState({
                          query: event.target.value
                        })}/>
                <Link to={`/search/${this.state.query}`}>
                  <button className="btn btn-danger my-2 my-sm-0"
                          type="submit">
                    Search
                    {/*<i className="fa fa-plus"/>*/}
                  </button>
                </Link>

              </div>

              <div>
                <ul className='navbar-nav wbdv-nav-login-signup'>
                  <li className='wbdv-nav-signup nav-item'>
                    <Link to={'/register'}>
                      <button className='btn btn-outline-success'>
                        Sign up
                      </button>
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link to={'/login'}>
                      <button className='btn btn-warning'>
                        Log in
                      </button>
                    </Link>
                  </li>

                </ul>
              </div>
            </nav>
          }

          <div className='wbdv-forum-edit-fields'>

          <div className='wbdv-forum-title-edit-btn'>

            {
              !this.state.editingForumText &&
                 <h2>{this.state.forum.title}</h2>
            }
            {
              this.state.editingForumText &&
                <input className='form-control wbdv-forum-edit-title'
                       value={this.state.forumTitle}
                       onChange={event => this.setState({forumTitle: event.target.value})}/>
            }



            {
              !this.state.editingForumText && this.state.user && this.state.user.role === "admin" &&
              <button className='wbdv-forum-inside-edit-btn btn btn-outline-dark'
                      onClick={() => this.setState({
                editingForumText: true,
                forumText: this.state.forum.text,
                forumTitle: this.state.forum.title})}>
                Edit
              </button>

            }
          </div>


          {
            !this.state.editingForumText &&
              <p>
                {this.state.forum.text}
              </p>
          }

          {
            this.state.editingForumText &&
                <div>

                  <textarea value={this.state.forumText}
                            onChange={event => this.setState({forumText: event.target.value})}
                            className='form-control'
                            name='forum-text'
                            rows='10'>
                  </textarea>
                  

                  <button className='float-right wbdv-forum-inside-ok-btn btn btn-success'
                          onClick={() => {
                    this.setState({editingForumText: false})
                    this.updateForumText(this.state.forum.id, {
                      ...this.state.forum,
                      text: this.state.forumText,
                      title: this.state.forumTitle
                    })
                  }}>
                    Ok
                  </button>


                </div>
          }


        </div>







          {/*{console.log(this.state.forum.comments)}*/}

          <div className='wbdv-comment-container'>
            <ul className='list-group list-group-flush'>
              {
                this.state.comments && this.state.comments.map(comment =>

                  <li className='list-group-item wbdv-comment-list-item'>
                    <div className='wbdv-comment'>

                    {/*<div>Title: {comment.title}</div>*/}
                      <div>
                        {
                          this.state.editingComment.id !== comment.id &&
                            comment.text
                        }

                        {
                          this.state.editingComment.id === comment.id &&
                            <textarea value={this.state.editingText}
                                      onChange={event => this.setState({editingText: event.target.value})}
                                      className='form-control'
                                      name='editing-text'
                                      rows='3'>
                            </textarea>
                        }

                      </div>

                      <div className='wbdv-commented-by'>
                        Comment by: <Link to={`/profile/${comment.username}`}>
                        {comment.username}
                      </Link>
                      </div>
                    </div>



                    {
                      this.state.user !== null && this.state.user.username === comment.username &&
                          <div>


                            {
                              !this.state.editingComment &&
                              <button className='btn btn-dark' onClick={() => {
                                this.setState({editingComment: comment, editingText: comment.text})
                              }}>
                                Edit
                              </button>
                            }
                            {
                              this.state.editingComment &&
                                  <div>
                                    <button className='btn btn-success' onClick={() => {
                                      this.setState({
                                        editingComment: ''})

                                      this.updateComment(comment.id, {
                                        ...comment,
                                        text: this.state.editingText
                                      })
                                    }

                                    }>
                                      Ok
                                    </button>


                                    <button className='wbdv-comment-delete-btn btn btn-danger'
                                            onClick={() => this.deleteComment(comment)}>
                                      Delete
                                    </button>
                                  </div>






                            }


                          </div>



                    }









                  </li>



                )
              }




              {/*<div className='form-group row'>*/}
                <textarea value={this.state.commentText}
                          onChange={event => this.setState({commentText: event.target.value})}
                          className='wbdv-new-comment-fld form-control'
                          name='comment-text'
                          placeholder='Enter a new comment here'
                          rows='3'>
                </textarea>
              {/*</div>*/}

              <button className='btn btn-primary' onClick={() => this.addComment()}>
                Submit comment
              </button>



            </ul>
          </div>

        </div>
    )
  }
}