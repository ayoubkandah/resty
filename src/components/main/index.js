import React from "react"
import {Route,Switch} from "react-router-dom"
// import Form from "../form"
// import Result from "../Results"
import Collection from "../collection"
import HistoryPage from "../historyPage"
import Help from "../help"
function Main(){

return (
    
    <div id="main">
    
<Switch> 
<Route exact path="/" component={Collection}>
</Route>
<Route exact path="/history" component={HistoryPage}>
</Route>
<Route exact path="/help" component={Help}>
</Route>
</Switch>
    

    </div>

)


}

export default Main






