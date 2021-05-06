import Form from "../form"
import Result from "../Results"
import History from "../history"
import React from "react"

class Collection extends React.Component{    
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
        
     
    render(){
      // console.log("----",this.props.location)
    
return(
<div>
<Form  data={this.props.location} recive={this.getData} />
<History />
<Result send= {this.state.people}/>
</div>
)
}
   
}
export default Collection