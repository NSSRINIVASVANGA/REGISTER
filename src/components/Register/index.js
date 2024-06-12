import MeetupContext from '../../context/MeetupContext'
import Navbar from '../Navbar'
import './index.css'

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

const Register = props => (
  <MeetupContext.Consumer>
    {value => {
      const {takeInput, takeType, name} = value
      const {type, shwErr, changeErr, userRegister} = value

      const nameChange = event => {
        takeInput(event.target.value)
      }

      const optionChange = event => {
        takeType(event.target.value)
      }

      const changeRoute = () => {
        const {history} = props
        history.replace('/')
      }

      const formSubmit = event => {
        event.preventDefault()
        if (name.length === 0) {
          changeErr()
        } else {
          userRegister()
          changeRoute()
        }
      }

      return (
        <div className="home-con">
          <Navbar />
          <div className="reg-con">
            <div className="img-con">
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
                className="reg-img"
              />
            </div>
            <form onSubmit={formSubmit} className="form-con">
              <h1 className="heading"> Let us join </h1>
              <div className="input-con">
                <label htmlFor="name"> NAME </label>
                <input
                  value={name}
                  type="text"
                  id="name"
                  className="input"
                  placeholder="Your Name"
                  onChange={nameChange}
                />
              </div>
              <div className="input-con">
                <label htmlFor="topic"> TOPICS </label>
                <select
                  value={type}
                  id="topic"
                  className="input"
                  onChange={optionChange}
                >
                  {topicsList.map(eachItem => (
                    <option value={eachItem.id} key={eachItem.id}>
                      {' '}
                      {eachItem.displayText}{' '}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" className="button">
                {' '}
                Register Now{' '}
              </button>
              {shwErr && <p className="error"> Please enter your name </p>}
            </form>
          </div>
        </div>
      )
    }}
  </MeetupContext.Consumer>
)

export default Register
