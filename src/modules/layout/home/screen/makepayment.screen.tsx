import React from 'react';
import AppLayout from "../../../../applayout/applayout";
import { stockData } from "../../../../data";
import { Link } from 'react-router-dom';
interface Props {
}
interface State {
}
class MakePaymentScreen extends React.Component {
    constructor(props: Props) {
    super(props);
   this.state = {
           
        }
    }
render() {

return (
<>


    <div className="custom_container">
    <div className="white_wrapper">
      <div className="flex_row align_center">
          <div className="flex_col_sm_6">
            <div className="">
              <h2 className="page_title">Payment History</h2>
            </div>
          </div>
          <div className="flex_col_sm_6 text-right">
             <Link to="/home" className="outline_btn ftr_btn m_r_15">Back</Link>
              
          </div>
      </div>
    </div>

        <div className="white_wrapper">  
              <div className="flex_row">
                    <div className="flex_col_sm_4">
                    <div className="form_field">
                                <label className="form_label">Customer Id</label>
                                <div className="text_field">
                                    <input placeholder="Enter your Customer Id"  value="FSA3211" readOnly />
                                </div>
                            </div>
                    </div>
                    <div className="flex_col_sm_4">
                    <div className="form_field">
                                <label className="form_label">Full Name</label>
                                <div className="text_field">
                                    <input placeholder="Enter your Full Name"  />
                                </div>
                            </div>
                    </div>
              </div> 

               <div className="flex_row">
                    <div className="flex_col_sm_8">
                    <div className="form_field">
                                <label className="form_label">Description</label>
                                <div className="text_field">
                                    <textarea></textarea>
                                </div>
                            </div>
                    </div>
               </div>  



               <div className="flex_row">
                    <div className="flex_col_sm_4">
                    <div className="form_field">
                                <label className="form_label">Category of Spend</label>
                                <div className="text_field">
                                    <input placeholder="Enter your price"  value="FSA3211" readOnly />
                                </div>
                            </div>
                    </div>
                    <div className="flex_col_sm_4">
                    <div className="form_field">
                                <label className="form_label">Payment Type</label>
                                <div className="text_field">
                                    <select>
                                        <option>Select Payment</option>
                                        <option>Making a Payment</option>
                                        <option>Receiving a Payment</option>
                                    </select>
                                </div>
                            </div>
                    </div>
              </div> 


              <div className="flex_row">
                    <div className="flex_col_sm_4">
                    <div className="form_field">
                                <div className="text_field">
                                        <button className="fill_btn">Submit</button>
                                </div>
                            </div>
                    </div>
                    
              </div> 
        </div>
    </div>

    
    
</>
)
}
}
export const MakePayment = AppLayout(MakePaymentScreen);