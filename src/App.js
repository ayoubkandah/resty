// import './App.scss';
import react from "react"
import Header from './components/header'
import Footer from './components/footer'
import Form from './components/form'
import Results from "./components/Results"
import History from "./components/history"
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
  // toggle(bool){
  //   this.setState({trigger:bool})
  // }
  render() {
    return (
      <>
        < Header />
        < Form  recive={this.getData} />
        <History/>
        <Results send= {this.state.people} />
        < Footer />
      </>
    );
  
  }
}

export default App;

