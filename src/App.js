import {Component} from 'react'
import GoogleSuggestions from './components/GoogleSuggestions/index'
import './App.css'

const suggestionsList = [
  {id: 1, suggestion: 'Price of Ethereum'},
  {id: 2, suggestion: 'Oculus Quest 2 specs'},
  {id: 3, suggestion: 'Tesla Share Price'},
  {id: 4, suggestion: 'Price of Ethereum today'},
  {id: 5, suggestion: 'Latest trends in AI'},
  {id: 6, suggestion: 'Latest trends in ML'},
]

class App extends Component {
  state = {list: suggestionsList, searchInput: ''}

  changeList = value => {
    const updatedList = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(value.toLowerCase()),
    )

    this.setState({list: updatedList, searchInput: value})
  }

  render() {
    const {list, searchInput} = this.state

    return (
      <GoogleSuggestions
        suggestionsList={list}
        change={this.changeList}
        search={searchInput}
      />
    )
  }
}

export default App
