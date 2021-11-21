// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {Thumbnail, displayingPhoto, isSelected} = props
  const {id, thumbnailUrl, thumbnailAltText} = Thumbnail
  const onclickThumbnail = () => {
    displayingPhoto(id)
  }
  const selectedStyle = isSelected
    ? 'thumbnail-style selected-button'
    : 'thumbnail-style'
  return (
    <li>
      <button type="button" onClick={onclickThumbnail}>
        <img
          src={thumbnailUrl}
          className={selectedStyle}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
