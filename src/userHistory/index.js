import './index.css'

const userHistory = props => {
  const {historyDetailsList, onDeleteDetails} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetailsList

  const onDeleteList = () => {
    onDeleteDetails(id)
  }

  return (
    <li>
      <div>
        <p>{timeAccessed}</p>
        <div>
          <div>
            <img src={logoUrl} alt="domain logo" />
            <p className="title">{title}</p>
            <p>{domainUrl}</p>
          </div>
        </div>
      </div>
      <div className="delete-container">
        <button
          type="button"
          className="delete-button"
          onClick={onDeleteList}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="browser-delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default userHistory
