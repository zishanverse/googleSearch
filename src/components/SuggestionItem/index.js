import './index.css'

const SuggestionItem = props => {
  const {item, fun} = props

  const {suggestion} = item

  const changeInput = () => fun(suggestion)

  return (
    <li>
      <p className="para">{item}</p>
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
