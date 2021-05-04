import React from 'react'

import { If, Then } from '../if-statement';
import loadingImg from './cupertino_activity_indicator.gif'
class Form extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
      this.state = {
        trigger: false,
      }
  }
  Result = async (e) => {
    e.preventDefault()
    let methodArr=[];
    let urlArr=[];
    if(localStorage.getItem("method")){
      methodArr=JSON.parse(localStorage.getItem("method"))
    }
    methodArr.push(e.target.method.value)
    localStorage.setItem("method",JSON.stringify(methodArr))
    if(localStorage.getItem("url")){
      urlArr=JSON.parse(localStorage.getItem("url"))
    }
    urlArr.push(e.target.url.value)
    localStorage.setItem("url",JSON.stringify(urlArr))
    this.setState({ trigger: true })
    let body = e.target.body.value
    let body1 = {}
    let body2 = null;
    // console.log(body)
    if (body.length === 0) {
      body = {};
    } else {

      body1 = JSON.parse(body)
      body2 = JSON.stringify(body1)
    }

    // function Cons(data){
    //   this.data=data
    // }
    // body=new Cons(e.target.body.value)
    // console.log( body)
    // console.log(body1)
    // const response = await fetch(url, {
    //   method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //https://reqres.in/api/users
    //e.target.url.value
    //"https://swapi.dev/api/people/"
// console.log(e.target.urlN.value)
    let data = await fetch(e.target.url.value, {
      method: e.target.method.value,
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',

      body: body2

    });

    // console.log(dat  a)
    let jsonData = await data.json()
    this.setState({ trigger: false })

    // console.log(jsonData)
    //  console.log(jsonData)
    this.props.recive(jsonData)


    //         // console.log("ddd")
    //           let url=e.target.url.value
    //      let method=e.target.method.value
    //      let p =document.createElement("p")


    // let Result=document.getElementById("Result")
    // Result.append(p)
    // p.textContent=method+" "+ url

    //         // console.log(url)
  }

  render() {
    return (
      
      <div id="Main">
        {/* <form > */}
        <form onSubmit={this.Result}>
          <label id="urlN" name="urlN">URL</label>
          <input type="text" name="url" />
          <input type="submit" value="GO!" /> {/* <section id="Result">
              </section> */}
        <If condition={this.state.trigger}>
          <Then>
<img alt="Loading"src={loadingImg  }></img> 
            </Then> 
              </If>
          <br />
          <br />
          {/* <p id="bodyL"  >Body</p> */}
          <textarea id="bodyT" rows="0" type="text" name="body" cols="40" placeholder="Insert A JSON Formate !! Just For POST & PUT !! "></textarea>


          {/* <button type="submit" onClick={this.Result}>GO!</button> */}
          <br />
          <br />
          <div className="radio-toolbar">
            <input defaultChecked className="radio" type="radio" name="method" value="GET" id="get" />
            <label className="radio" htmlFor="get" id="f">GET</label>
            <input className="radio" id="post" type="radio" name="method" value="POST" />
            <label className="radio" htmlFor="post">POST</label>
            <input className="radio" id="put" type="radio" name="method" value="PUT" />
            <label className="radio" htmlFor="put">PUT</label>
            <input className="radio" id="delete" type="radio" name="method" value="DELETE" />
            <label className="radio" htmlFor="delete">DELETE</label>
          </div>
        </form>
        
              </div>

            );
        }
  }


  export default Form;