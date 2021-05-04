// import './App.scss';
import react from "react"
import Header from './Header.js'
import Footer from './Footer.js'
import Form from './Form.js'
import Results from "./Results.js"
import './reset.css'
import './App.scss'
import 'react-json-pretty/themes/monikai.css';

// console.log(component)

class App extends react.Component {

  constructor(props) {
    super(props)
    this.state = {
      people:[],
    }
  }
  getData=(data)=> {
    this.setState({people:data})

    // console.log(this.state.people)
  }
  
  render() {
    return (
      <>
        < Header />
        < Form  recive={this.getData} />
        <Results send= {this.state.people} />
        < Footer />
      </>
    );
  
  }
}

export default App;

