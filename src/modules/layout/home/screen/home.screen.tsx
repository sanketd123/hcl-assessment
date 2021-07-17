import React from 'react';
import AppLayout from "../../../../applayout/applayout";


interface Props {
}
interface State {
}
class HomeScreen extends React.Component {
    constructor(props: Props) {
    super(props);
   this.state = {
            rows: [
                {
                    id: 0,
                    title: "ABC"
                },
                {
                    id: 1,
                    title: "DEF"
                },
                {
                    id: 2,
                    title: "GHI"
                }
            ]
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
              <button className="outline_btn ftr_btn">Filter</button>
          </div>
      </div>
    </div>
        <div className="white_wrapper">
        <table>
  <tr>
    <th>Customer ID</th>
    <th>Transaction Description</th>
    <th>Amount</th>
    <th>Payment Type</th>
    <th>Category</th>
    <th>Date</th>
  </tr>
  <tr>
    <td>12345685</td>
    <td>Loan EMI</td>
    <td>Rs. 5000</td>
    <td>Debit</td>
    <td>House</td>
    <td>19/06/2021 12:00</td>
  </tr>

  <tr>
    <td>12345685</td>
    <td>Loan EMI</td>
    <td>Rs. 5000</td>
    <td>Debit</td>
    <td>House</td>
    <td>19/06/2021 12:00</td>
  </tr>

  <tr>
    <td>12345685</td>
    <td>Loan EMI</td>
    <td>Rs. 5000</td>
    <td>Debit</td>
    <td>House</td>
    <td>19/06/2021 12:00</td>
  </tr>
  
</table>
        </div>
    </div>
    
</>
)
}
}
export const Home = AppLayout(HomeScreen);