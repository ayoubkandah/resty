
import{If,Then} from "../if-statement"

 function History(){


    let triggerL=false
    let methods=[];
    let urls=[];
if(localStorage.getItem("method")){
    triggerL=true
    methods=JSON.parse(localStorage.getItem("method"))
    urls=JSON.parse(localStorage.getItem("url"))
}




    return(
        

<div id="history">
<If condition={triggerL}>
<Then>
        {
        methods.map((ele,ind)=>{

           return(
           <div key={ind}>
           <h6 >
            {ele} 
         </h6>
            <h5>
             {urls[ind]}
         </h5>
         </div>
           )
            })}
</Then>
</If>
</div>

    )


}

export default History