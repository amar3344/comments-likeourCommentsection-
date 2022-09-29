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

  getCommentContainer = () => {
    const {commentList} = this.state

    return commentList.map(eachComment => (
      <CommentItem key={eachComment.id} commentDetails={eachComment} />
    ))
  }

  getCommentInput = event => {
    this.setState({commentInput: event.target.value})
  }

  getNameInput = event => {
    this.stateState({nameInput: event.target.value})
  }

  addToComment = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state

    const addNewComment = {
      id: uuidv4(),
      nameInput,
      commentInput,
      isLike: false,
    }

    this.setState(prevState => ({
      commentList: [...prevState.commentList, addNewComment],
      nameInput: '',
      commentInput: '',
    }))
  }

  render() {
    const {nameInput, commentInput, commentList} = this.state
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
            <p className="no-of-comments">{commentList.length}</p>
            <p className="comment-text">Comments</p>
          </div>
          <ul className="comment-list-container">
            {this.getCommentContainer()}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
