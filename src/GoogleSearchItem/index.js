import './index.css'

const GoogleSearchItem = props => {
  const {eachItem, onDelete} = props
  const {logoUrl, title, timeAccessed, domainUrl} = eachItem

  const handleDelete = () => {
    onDelete(eachItem.id)
  }

  return (
    <li className="list-item">
      <div className="time">
        <p>{timeAccessed}</p>
      </div>
      <div className="title-container">
        <div className="title-card">
          <img src={logoUrl} alt="domain logo" className="domain-logo" />
          <p className="title">{title}</p>
          <p className="url">{domainUrl}</p>
        </div>
        <button
          type="button"
          className="delete-btn"
          data-testid="delete"
          onClick={handleDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-img"
          />
        </button>
      </div>
    </li>
  )
}
export default GoogleSearchItem
