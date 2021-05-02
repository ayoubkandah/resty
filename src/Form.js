import React from 'react'

class Form extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(prop) {
        super(prop)
        this.state = {
            words: 'nothing to see here',
            method:null,
          };
          this.Result = this.Result.bind(this);
        }
    Result(e){
        e.preventDefault()
        // console.log("ddd")
        let url=e.target.url.value
     let method=e.target.method.value
     let p =document.createElement("p")

     
let Result=document.getElementById("Result")
Result.append(p)
p.textContent=method+" "+ url

        // console.log(url)
    }

        render(){
            return (

                <div id="Main">
                    {/* <form > */}
                <form onSubmit={this.Result}>
              <label  name="urlN">URL</label>
              <input type="text" name="url" /> 
              <input type="submit" value="GO!"  />
              {/* <button type="submit" onClick={this.Result}>GO!</button> */}
              <br />
              <br />
              <div className="radio-toolbar">
              <input className="radio" type="radio" name="method" value="get" id="get"/>

              <label className="radioGet" htmlFor="get" id="f">GET</label>
              <input className="radio" id="post" type="radio" name="method" value="post" />
              <label className="radio" htmlFor="post">POST</label>
              <input className="radio" id="put"type="radio" name="method" value="put" />
              <label className="radio" htmlFor="put">PUT</label>
              <input className="radio" id="delete" type="radio" name="method" value="delete" />
              <label className="radio" htmlFor="delete">DELETE</label>
              </div>
                </form>
              <section id="Result">
              </section>
              </div>

            );
        }
  }


  export default Form;