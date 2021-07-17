import React from "react";
import Account from '../modules/auth/screen/account.screen';
interface Props{
   
  }
function higherOrderComponent(WrappedComponent: any){
    class HOCC extends React.Component<Props, any> {
      componentDidMount(){
        console.log("componentDidMount", this.props)
      }
      render() {
        return (
          // <Account>
            
           
          // </Account>

   <WrappedComponent {...this.props}/>
        );
      }
    }
      
    return HOCC;
 };
 export default higherOrderComponent;