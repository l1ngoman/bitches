import React, { Component } from 'react'

class CorgiCircle extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentImage: 0
    }
  }
  render() {
    console.log(this.props);
    let { currentImage } = this.state
    return (
      <img  id="corgi" src={this.props.corgImages[currentImage]} className="App-logo" alt="logo" onClick={this.handleClick} />
    )
  }

  handleClick = () => {
    console.log("I WAS CLICKED!");
    let x = this.state.currentImage
    // cycle through all images but also loop back to beginning
    if ((x + 1) % this.props.corgImages.length == 0 ) {
      this.setState({currentImage: 0})
    } else {
    x++
    this.setState({currentImage: x})
    // function(){document.getElementById('corgi').setAttribute('src', logo1)}
    }
  }
}

export default CorgiCircle
