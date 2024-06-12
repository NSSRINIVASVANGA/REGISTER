import {Link} from 'react-router-dom'
import MeetupContext from '../../context/MeetupContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <MeetupContext.Consumer>
    {value => {
      const {registered, name, tpoic} = value
      const heading = registered ? 'heading-1' : 'heading-2'
      const desc = registered ? 'desc-1' : 'desc-2'

      return (
        <div className="home-con">
          <Navbar />
          <div className="extra-con">
            <div className="text-con">
              <h1 className={heading}>
                {' '}
                {registered ? `Hello ${name}` : 'Welcome to Meetup'}{' '}
              </h1>
              <p className={desc}>
                {' '}
                {registered
                  ? `Welcome to ${tpoic}`
                  : 'Please register for the topic'}{' '}
              </p>
              {registered ? null : (
                <Link to="/register">
                  <button type="button" className="button">
                    {' '}
                    Register{' '}
                  </button>
                </Link>
              )}
            </div>
            <div className="img-con">
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
                className="image"
              />
            </div>
          </div>
        </div>
      )
    }}
  </MeetupContext.Consumer>
)

export default Home
