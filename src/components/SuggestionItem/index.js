import './index.css'

const SuggestionItem = props => {
  const {suggestion, fun} = props

  const changeInput = () => fun(suggestion)

  return (
    <li className="flex">
      <p className="para">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
        onClick={changeInput}
      />
    </li>
  )
}

export default SuggestionItem
