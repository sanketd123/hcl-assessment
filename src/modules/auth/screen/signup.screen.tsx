import React from 'react';
import Authlayout from '../../../applayout/authlayout';
import { Link } from 'react-router-dom';
import SliderComponent from '../component/sliderComponent';

function SignupScreen() {
    return (

        <div className="onboard_wrapper">
            <div className="f_row">
                <div className="left_col">
                    <SliderComponent />
                </div>
                <div className="right_col">
                    <div className="form_wrapper">

                        <div className="form_field">
                            <h1>Register customer </h1>
                        </div>
                        <form>

                           <div className="form_field">
                                <label className="form_label">Customer Full Name</label>
                                <div className="text_field">
                                    <input placeholder="Enter your email" />
                                </div>
                            </div>

                            <div className="form_field">
                                <label className="form_label">Customer Date of Birth</label>
                                <div className="text_field">
                                    <input placeholder="Enter your email" />
                                </div>
                            </div>

                            <div className="form_field">
                                <label className="form_label">Customer Email</label>
                                <div className="text_field">
                                    <input placeholder="Enter your email" />
                                </div>
                            </div>

                            <div className="form_field">
                                <label className="form_label">Customer Addhar Card No.</label>
                                <div className="text_field">
                                    <input placeholder="Enter your email" />
                                </div>
                            </div>

                            <div className="form_field">
                                <label className="form_label">Password</label>
                                <div className="text_field">
                                    <input type="password" className="detect_input" placeholder="Enter your password" />
                                </div>
                            </div>

                            <div className="form_field">
                                <label className="form_label">Confirm Password</label>
                                <div className="text_field">
                                    <input type="password" className="detect_input" placeholder="Enter your Confirm password" />
                                </div>
                            </div>



                            <div className="form_field">
                               <Link to="/home" className="fill_btn ">Register customer</Link>
                               
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}
export const Signup = Authlayout(SignupScreen);
