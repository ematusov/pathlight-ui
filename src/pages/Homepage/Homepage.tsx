import React from 'react';
import logoFull from 'assets/logoFull.png'

class Homepage extends React.Component {
    render() {
      return (
      <>
      <img src={logoFull} alt="Logo" />
      <h1>Hello, Homepage!</h1>
      </>
      )
    }
  }

export default Homepage;