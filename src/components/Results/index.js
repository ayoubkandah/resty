// import {Component} from "react"
/* <section id="Result">
              </section> */ 
              // import JSONPretty from 'react-json-prettify';
            import JSONPretty from 'react-json-pretty';
            import 'react-json-pretty/themes/monikai.css';
            // localStorage.setItem("names", JSON.stringify(names));

            // //...
            // var storedNames = JSON.parse(localStorage.getItem("names"));

            

              function Results(send){
                

                let j=JSON.stringify(send.send)
                // console.log(j.length)
                if(j.length>2){
                      let data= send.send
                      console.log()
                        return( 
                        <div id="container">
                            <div id="Result">  
       
<JSONPretty   id="json-pretty" data={data}></JSONPretty>
     
</div>
</div>
                 )
}

return(  <div id="container">  <section id="Result">  </section> </div> )
              
              }
            
              export default Results;