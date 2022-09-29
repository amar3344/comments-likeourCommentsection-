import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentDetails} = props
  const {nameInput, commentInput, id, isLike} = commentDetails
  const initialName = nameInput.slice(0, 1)
  return (
    <div className="comment-container">
      <div className="name-container">
        <p className="initial-name">{initialName}</p>
        <p>{nameInput}</p>
      </div>
    </div>
  )
}

export default CommentItem
