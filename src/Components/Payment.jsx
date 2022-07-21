import React from 'react'
import Login from '../Button/Login'

const Payment = () => {
    return (
        <>
            {/* Shipping detail */}
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="col-sm-11">
                            <h4 class="mb-3">Shipping and Payment</h4>
                            <div className="container">
                                <div className="col">
                                    {/* <button id="login" type="button" class="btn px-5 py-3 mx-3 my-4 rounded-5">LOG IN</button> */}
                                    <Login/>
                                    <button id="signup" type="button" class="btn px-5 py-3 mx-3 my-4 rounded-5">SIGN UP</button>

                                </div>
                            </div>
                            <form class="needs-validation" novalidate="">
                                <div class="row g-3">
                                    <h5 class="mb-3">Shipping information</h5>

                                    <div class="col-sm-6" >

                                        <input type="First Name" class="form-control form-control-lg rounded-pill mx-3 my-2 " id="firstname" placeholder="First Name" value="" required="" />
                                        <div class="invalid-feedback">
                                            Valid last name is required.
                                        </div>
                                    </div>

                                    <div class="col-sm-6" >

                                        <input type="Last Name" class="form-control form-control-lg rounded-pill mx-3 my-2 " id="lastname" placeholder="Last Name" value="" required="" />
                                        <div class="invalid-feedback">
                                            Valid last name is required.
                                        </div>
                                    </div>
                                    <div class="col-sm-6">

                                        <input type="Email" class="form-control form-control-lg  rounded-pill mx-3 my-2" id="Email" placeholder="Email" value="" required="" />
                                        <div class="invalid-feedback">
                                            Valid first name is required.
                                        </div>
                                    </div>

                                    <div class="col-sm-6" >

                                        <input type="Address" class="form-control form-control-lg rounded-pill mx-3 my-2 " id="Address" placeholder="Address" value="" required="" />
                                        <div class="invalid-feedback">
                                            Valid last name is required.
                                        </div>
                                    </div>


                                    <div class="col-sm-6" >

                                        <input type="City" class="form-control form-control-lg rounded-pill mx-3 my-2 " id="city" placeholder="City" value="" required="" />
                                        <div class="invalid-feedback">
                                            Valid last name is required.
                                        </div>
                                    </div>

                                    <div class="col-sm-6" >

                                        <input type="Postal Code" class="form-control form-control-lg rounded-pill mx-3 my-2 " id="postalcode" placeholder="Postal Code" value="" required="" />
                                        <div class="invalid-feedback">
                                            Valid last name is required.
                                        </div>
                                    </div>

                                    <div class="col-sm-6" >

                                        <input type="Phone number" class="form-control form-control-lg rounded-pill mx-3 my-2 " id="Phone" placeholder="Phone number" value="" required="" />
                                        <div class="invalid-feedback">
                                            Valid last name is required.
                                        </div>
                                    </div>

                                    <div class="col-sm-6">

                                        <select class="form-select form-select-lg mx-3 my-2 rounded-pill" id="country" required="">
                                            <option value="">Poland</option>
                                            <option>United States</option>
                                        </select>
                                        <div class="invalid-feedback">
                                            Please select a valid country.
                                        </div>
                                        <div class="invalid-feedback">
                                            Valid last name is required.
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                    {/* Payment option */}
                    <div class="col-md-4">

                        <div class="col-sm-11">
                            <h5 class=" mt-5 pt-5 pb-4">Payment Method</h5>
                            <div className="container ">
                                <div class="row">
                                    <div class="col-sm-4  rounded-pill ">
                                        <img class="py-2 px-1" src="assets/payment/paypal.png" alt="paypal" height="60px" width="90px" />
                                    </div>
                                    <div class="col-sm-4  rounded-pill ">
                                        <img class="py-2 px-1" src="assets/payment/visa.png" alt="paypal" height="60px" width="90px" />
                                    </div>
                                    <div class="col-sm-4  rounded-pill ">
                                        <img class="py-2 px-1" src="assets/payment/master.png" alt="paypal" height="60px" width="90px" />
                                    </div>
                                </div>
                                <div class="row my-2">
                                    <div class="col-sm-4  rounded-pill  ">
                                        <img src="assets/payment/maestro.png" alt="paypal" height="60px" width="90px" />
                                    </div>
                                    <div class="col-sm-4  rounded-pill ">
                                        <img class="py-2 px-1" src="assets/payment/ideal.png" alt="paypal" height="60px" width="90px" />
                                    </div>
                                    <div class="col-sm-4  rounded-pill ">
                                        <img class="py-2 px-1" src="assets/payment/discover (2).png" alt="paypal" height="60px" width="90px" />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="container ">
                            <h5 class=" mt-3 pt-4 ">Delivery Method</h5>
                            <div class="row">
                                <div id="deli1" class="col  rounded-pill">
                                    <div class="row">
                                        <div class="col">
                                            <img src="assets/delivery/inpost.png" alt="inpost" height="60px" width="70px" />
                                        </div>
                                        <div class="col mt-3">
                                            <p>$20.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div id="deli2" class="col  rounded-pill">
                                        <div class="row">
                                            <div class="col">
                                                <img src="assets/delivery/dhl.png" alt="inpost" height="60px" width="70px" />
                                            </div>
                                            <div class="col mt-3">
                                                <p>$15.00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div id="deli3" class=" col  rounded-pill">
                                    <div class="row">
                                        <div class="col">
                                            <img src="assets/delivery/fedx.png" alt="inpost" height="60px" width="70px" />
                                        </div>
                                        <div class="col mt-3">
                                            <p>$10.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div id="deli4" class="col  rounded-pill">
                                        <div class="row">
                                            <div class="col">
                                                <img src="assets/delivery/dpd.png" alt="inpost" height="60px" width="70px" />
                                            </div>
                                            <div class="col mt-3">
                                                <p>$12.00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* Cart option  */}
                    <div class="col col-lg-3 mt-5 pt-5">

                        <h5 class="d-flex justify-content-start align-items-center ">
                            <span class="text">Your cart</span>

                        </h5>
                        <ul class=" mb-3">
                            <li class="d-flex flex-row mb-3 justify-content-between my-4">
                                <img class="rounded-pill me-3" src="assets/T-shirt/tshirt.jpg" alt="tshirt" height="60px" width="60px" />
                                <div className="row">
                                    <h6 class="">T-shirt <br /> Summer vibes  </h6>
                                    <small class="text-muted">#261311</small>
                                </div>
                                <span class="text-active">$89.99</span>
                            </li>
                            <li class="d-flex flex-row mb-3 justify-content-between my-4">
                                <img class="rounded-pill me-3" src="assets/T-shirt/tshirt2.jpg" alt="tshirt" height="60px" width="60px" />
                                <div className="row">
                                    <h6 class="">Basic Slim <br /> Fit T-shirt  </h6>
                                    <small class="text-muted">#212315</small>
                                </div>
                                <span class="text-active">$69.99</span>
                            </li>



                            <li id="total" class="d-flex justify-content-between rounded-pill ">
                                <span>Total Cost</span>
                                <strong>$159.98</strong>
                            </li>
                        </ul>

                        <div className="container mt-5 ">
                            <li class="d-flex justify-content-center ">
                                <i className='bi bi-truck mx-3 mt-3 '> </i>
                                <p className='mx-2'>You are <strong>$30.02</strong>away <br /> from free shipping!</p>
                            </li>
                        </div>

                    </div>
                </div>

                <div className="container my-5 py-3 ">
                    <div class="row">
                        <div class="col mt-2">
                            <li class="d-flex   ">
                                <i class="bi bi-arrow-left "></i>
                                <p className='mx-2'>Back</p>
                            </li>
                        </div>
                        <div class="col-md-auto">
                            <button id="continue" type="button" class="btn rounded-pill ">CONTINUE SHOPPING</button>

                        </div>
                        <div class="col col-lg-3">
                            <button id="shopping" type="button" class="btn rounded-pill ">PROCEED TO PAYMENT</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Payment