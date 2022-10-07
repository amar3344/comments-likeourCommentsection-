import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    commentList: [],
    nameInput: '',
    commentInput: '',
  }

  renderFunctionForLikedImage = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLike: !eachComment.isLike}
        }
        return eachComment
      }),
    }))
  }

  getDeleteFunction = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.filter(eachItem => eachItem.id !== id),
    }))
  }

  getCommentContainer = () => {
    const {commentList, backGroundColors} = this.state

    return commentList.map(eachComment => (
      <CommentItem
        key={eachComment.id}
        commentDetails={eachComment}
        backGroundColors={backGroundColors}
        renderFunctionForLikedImage={this.renderFunctionForLikedImage}
        getDeleteFunction={this.getDeleteFunction}
      />
    ))
  }

  getCommentInput = event => {
    this.setState({commentInput: event.target.value})
  }

  getNameInput = event => {
    this.setState({nameInput: event.target.value})
  }

  addToComment = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state

    const addNewComment = {
      id: uuidv4(),
      nameInput,
      commentInput,
      date: new Date(),
      isLike: false,
      backGroundColors: initialContainerBackgroundClassNames,
    }

    this.setState(prevState => ({
      commentList: [...prevState.commentList, addNewComment],
      nameInput: '',
      commentInput: '',
    }))
  }

  render() {
    const {commentList} = this.state
    return (
      <div className="main-container">
        <div className="bg-container">
          <h1 className="heading">Comments</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="comment-image"
          />
          <form className="form" onSubmit={this.addToComment}>
            <p className="text-tag">Say something about 4.0 Technologies</p>
            <input
              type="text"
              placeholder="Your Name"
              className="input-name"
              onChange={this.getNameInput}
            />
            <textarea
              rows="5"
              cols="30"
              className="text-area"
              placeholder="Your Comment"
              onChange={this.getCommentInput}
            />
            <button type="submit" className="button">
              Add Comment
            </button>
          </form>
          <div className="bottom-container">
            <div className="no-of-comments-container">
              <p className="no-of-comments">{commentList.length}</p>
            </div>
            <p className="comment-text">Comments</p>
          </div>
          <hr className="line" />
          <ul className="comment-list-container">
            {this.getCommentContainer()}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
