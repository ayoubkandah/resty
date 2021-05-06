// import { render } from "@testing-library/react";
import React from "react"
import{If,Then} from "../if-statement"
import {Link} from "react-router-dom"
import "./historyPage.scss"
let triggerL;
let methods=[];
let urls=[];
// let urlData;
let body=[];
function displayData(e){
    
 document.getElementById("urlData").textContent
 = "URL: "+ e.target.parentElement.children[1].textContent
 document.getElementById("methodData").textContent
 ="Method: "+e.target.parentElement.children[0].textContent
 document.getElementById("bodyData").textContent
 ="Body: "+e.target.parentElement.children[2].textContent

}


class HistoryPage extends React.Component{
constructor(props){
    super(props)
    this.state={
    
    }
}

Results(){
 triggerL=false
 methods=[];
 urls=[];

if(localStorage.getItem("method")){
triggerL=true
methods=JSON.parse(localStorage.getItem("method"))
urls=JSON.parse(localStorage.getItem("url"))
body=JSON.parse(localStorage.getItem("body"))
}
}




render(){
    this.Results()
    return(
        <div>
<div id="history1">
<If condition={triggerL}>
<Then>
    {
    methods.map((ele,ind)=>{

       return(
       <div key={ind}  >
       <h6  onClick={displayData}>
        {ele} 
     </h6>
        <h5 onClick={displayData}>
         {urls[ind]}
     </h5>
     <h4 style={{display:"none"}} >{body[ind]}</h4>

     <Link   to={{
                  pathname:"/",
                  data:{
                    method:ele,
                    url:urls[ind],
                   body:body[ind]
                  }
                }}
 >  Go2Form
 </Link>
     </div>
       )
        })}     
</Then>
</If>

</div>
<div id="historyD">
    <p id="urlData"></p>
    <p id="methodData"></p>
    <p id="bodyData"></p>
</div>
</div>

)
}



}

export default HistoryPage
