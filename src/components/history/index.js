
import{If,Then} from "../if-statement"


function History(){


    let triggerL=false
    let methods=[];
    let urls=[];
    let body=[];
if(localStorage.getItem("method")){
    triggerL=true
    methods=JSON.parse(localStorage.getItem("method"))
    urls=JSON.parse(localStorage.getItem("url"))
    body=JSON.parse(localStorage.getItem("body"))
}




    return(
        

<div id="history">
<If condition={triggerL}>
<Then>
        {
        methods.map((ele,ind)=>{

           return(
           <div key={ind} onClick={returnForm}>
           <h6 >
            {ele} 
         </h6>
            <h5>
             {urls[ind]}
         </h5>
         <h4 style={{display:"none"}} >{body[ind]}</h4>
         </div>
           )
            })}
</Then>
</If>
</div>

    )
}
function returnForm(e){
    console.log(e.target.parentElement.children[1].textContent)
    document.getElementById("url").value=e.target.parentElement.children[1].textContent
    document.getElementById("bodyT").value=e.target.parentElement.children[2].textContent
    document.getElementById(e.target.parentElement.children[0].textContent).checked=true
    
    }

export default History