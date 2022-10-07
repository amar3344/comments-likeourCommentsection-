import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentDetails, renderFunctionForLikedImage, getDeleteFunction} = props
  const {
    nameInput,
    commentInput,
    id,
    isLike,
    date,
    backGroundColors,
  } = commentDetails
  const initialName = nameInput.slice(0, 1).toUpperCase()
  const color =
    backGroundColors[Math.ceil(Math.random() * backGroundColors.length - 1)]
  const likeImage = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likedText = isLike ? 'Liked' : 'Like'
  const likedClassName = isLike ? 'backGround' : null

  const getLikedImage = () => {
    renderFunctionForLikedImage(id)
  }

  const deleteFromCommentContainer = () => {
    getDeleteFunction(id)
  }

  return (
    <li className="comment-container">
      <div className="name-container">
        <div className={`initial-name ${color}`}>
          <p className="initial-text">{initialName}</p>
        </div>
        <p className="name-text">{nameInput}</p>
        <p className="date-text">{formatDistanceToNow(date)} ago</p>
      </div>
      <p className="comment-text-input">{commentInput}</p>
      <div className="like-delete-container">
        <div className="like-container">
          <img src={likeImage} alt="like" className="like-image" />
          <button
            type="button"
            className={`button-like-delete ${likedClassName}`}
            onClick={getLikedImage}
          >
            {likedText}
          </button>
        </div>
        <button
          type="button"
          className="button-like-delete"
          onClick={deleteFromCommentContainer}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
      <hr className="line" />
    </li>
  )
}

export default CommentItem
