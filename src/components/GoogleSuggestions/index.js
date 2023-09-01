import SuggestionItem from '../SuggestionItem/index'
import './index.css'

const GoogleSuggestions = props => {
  const {suggestionsList, change, search} = props

  const changeList = event => {
    change(event.target.value)
  }

  const changeInput = suggestion => {
    change(suggestion)
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

          <ul className="list">
            {suggestionsList.map(each => (
              <SuggestionItem
                suggestion={each.suggestion}
                key={each.id}
                fun={changeInput}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default GoogleSuggestions
