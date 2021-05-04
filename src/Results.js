// import {Component} from "react"
/* <section id="Result">
              </section> */ 
            //   import JSONPretty from 'react-json-prettify';
            import JSONPretty from 'react-json-pretty';
            import 'react-json-pretty/themes/monikai.css';

              function Results(send){
                  
                  if(send.send.results){
                      let data= send.send
                      console.log()
                        return( 
                        <div id="container">
                            <section id="Result">  
       
<JSONPretty   id="json-pretty" data={data}></JSONPretty>
     
</section>
</div>
                 )
}

return(   <section id="Result">  </section>  )
              
              }
            
              export default Results;