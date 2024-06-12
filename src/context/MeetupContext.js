import React from 'react'

const MeetupContext = React.createContext({
  registered: false,
  shwErr: false,
  name: '',
  type: '',
  tpoic: '',
  takeInput: () => {},
  takeType: () => {},
  changeErr: () => {},
  userRegister: () => {},
})

export default MeetupContext
