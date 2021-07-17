import React from "react";

import LayoutWrapper from "../modules/layout/layoutwrapper";


interface Props{

  }


function higherOrderComponent(WrappedComponent: any) {

  class HOCC extends React.Component<Props, any> {
  
    componentDidMount(){
        console.log("componentDidMount", this.props)
      }

    render() {
      return (
        <LayoutWrapper >
             <WrappedComponent {...this.props}/>
          </LayoutWrapper>
      );
    }
  }

  return HOCC;
};
export default higherOrderComponent;