import React from 'react';
import Header from './component/header/header';
import Footer from './component/footer/footer';

function LayoutWrapper(props:any){
    return (
        <div className="app_wrapper">
          <Header></Header>
          {props.children}
          <Footer></Footer>
        </div>
      );
}


export default LayoutWrapper;
