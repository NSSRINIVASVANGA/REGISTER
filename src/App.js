import {Component} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'
import MeetupContext from './context/MeetupContext'
import './App.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class App extends Component {
  state = {
    shwErr: false,
    name: '',
    type: topicsList[0].id,
    tpoic: topicsList[0].displayText,
    registered: false,
  }

  onTakeInput = value => {
    this.setState({name: value})
  }

  onTakeType = value => {
    console.log(value)
    const val = topicsList.filter(eachItem => eachItem.id === value)
    console.log(val)
    this.setState({type: value, tpoic: val[0].displayText})
  }

  onChangeErr = () => {
    this.setState({shwErr: true})
  }

  onRegister = () => {
    this.setState({registered: true})
  }

  render() {
    const {name, type, shwErr, registered, tpoic} = this.state
    return (
      <MeetupContext.Provider
        value={{
          name,
          type,
          shwErr,
          registered,
          tpoic,
          takeInput: this.onTakeInput,
          takeType: this.onTakeType,
          changeErr: this.onChangeErr,
          userRegister: this.onRegister,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </MeetupContext.Provider>
    )
  }
}

export default App
