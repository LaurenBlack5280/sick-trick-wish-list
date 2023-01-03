import { Component } from 'react';
import './App.css';
import CardContainer from '../CardContainer';
// import { getTricksData } from '../../apiCalls';
import Form from '../Form';
class App extends Component {
  constructor() {
    super()
    this.state = {
      tricks: []
    }
  }

  componentDidMount = () => {
     fetch('http://localhost:3001/api/v1/tricks')
      .then(res => {
          console.log(res)
      //     if(!res.ok) {
      //         throw new Error(res.statusText)
      //     }
          return res.json()
      })
      .then(data => {
        this.setState({ tricks: data})
      })
      // .catch(err => {
      //     console.log(`${err.message}`)
      // })
  }

  addTrick = newTrick => {
    this.setState({
      tricks: [...this.state.tricks, newTrick]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Form addTrick={this.addTrick}/>
        <CardContainer tricks={ this.state.tricks }/>
      </div>
    );
  }
}

export default App;