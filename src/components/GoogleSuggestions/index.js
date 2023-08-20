import SuggestionItem from '../SuggestionItem/index'
import './index.css'

const GoogleSuggestions = props => {
  const {suggestionsList, change, search, changeInput} = props

  const changeList = event => {
    change(event.target.value)
  }

  return (
    <div className="container">
      <div className="searchContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="googleLogo"
        />
        <div className="card">
          <div className="searchCard">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="logo"
            />
            <input
              type="search"
              className="input"
              placeholder="Search Google"
              value={search}
              onChange={changeList}
            />
          </div>
          <ul className="flex">
            {suggestionsList.map(each => (
              <SuggestionItem item={each} key={each.id} fun={changeInput} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default GoogleSuggestions
