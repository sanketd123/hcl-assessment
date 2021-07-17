import { BrowserRouter, Route, Switch } from  "react-router-dom";
import {Signup}  from "../modules/auth";
import {Home,MakePayment}  from  "../modules/layout/home";


function Router() {
    return (
        <BrowserRouter>
            <Switch>

                <Route exact path="/" component={Signup} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/make-payment" component={MakePayment} />    
                
         
            </Switch>
        </BrowserRouter>
    )

}

export default Router;