import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
const Form1 = () => {
  //yup library validation 
  const validationSchema = Yup.object().shape({
    Fname: Yup.string().required('First Name is required'),
    Lname: Yup.string().required('Last Name is required'),
    phone: Yup.string()
      .matches(/^\d{10}$/, 'Phone Number must be 10 digits')
      .required('Phone Number is required'),
    mail: Yup.string().email('Invalid email').required('Email is required'),
    amount: Yup.number().required('Donation Amount is required'),
    Visa: Yup.string().required('Card Type is required'),
    card_name: Yup.string().required('Name on Card is required'),
    card_no: Yup.string()
      .matches(/^\d{4}-\d{4}-\d{4}-\d{4}$/, 'Invalid Card Number')
      .required('Card Number is required'),
    cvv: Yup.string().required('CVV is required'),
    address1: Yup.string().required('Address Line 1 is required'),
    address2: Yup.string().required('Address Line 2 is required'),
    city: Yup.string().required('City Name is required'),
    state: Yup.string().required('State Name is required'),
    pin: Yup.string()
      .matches(/^\d{5,6}$/, 'Pin code must be 5 to 6 digits')
      .required('Pin code is required'),
    check_box: Yup.boolean().oneOf([true], 'You must accept the terms and conditions')
  });
  const formik = useFormik({
    initialValues: {
      Fname: '',
      Lname: '',
      phone: '',
      mail: '',
      amount: '',
      Visa: '',
      card_name: '',
      card_no: '',
      cvv: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      pin: '',
      check_box: false
    },
    validationSchema: validationSchema,// yup library 
    onSubmit: (values, { resetForm }) => {
      // Get the current counter value from local storage
      let counter = parseInt(localStorage.getItem('counter')) || 0;
      counter++;
      // Update the counter value in local storage
      localStorage.setItem('counter', counter.toString());
      const uniqueId = counter.toString();
      // Store the data in local storage with the unique ID
      localStorage.setItem(uniqueId, JSON.stringify(values));
      // Reset the form fields 
      resetForm();
      alert('Form submitted successfully!');
    }
  });
  return (
    <div>
      <form id="form" className="form" name="form" onSubmit={formik.handleSubmit}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="top">
                <h3 id="heading">XYZ Foundation</h3>
                <h4>Donation Form</h4>
              </div>
            </div>
          </div>
          <div className="mid">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-val text-start ">
                  <label htmlFor="Fname">First Name</label><br />
                  <input
                  class="w-100"
                    type="text"
                    id="Fname"
                    name="Fname"
                    placeholder="Enter your First name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Fname}
                  />
                  {formik.touched.Fname && formik.errors.Fname ? (
                    <div class="text-start text-danger">{formik.errors.Fname}</div>
                  ) : null}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-val text-start">
                  <label htmlFor="Lname">Last Name</label><br />
                  <input
                  class="w-100"
                    type="text"
                    id="Lname"
                    name="Lname"
                    placeholder="Enter your last name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Lname}
                  />
                  {formik.touched.Lname && formik.errors.Lname ? (
                    <div class="text-start text-danger">{formik.errors.Lname}</div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="form-val text-start">
                  <label htmlFor="phone">Phone Number</label><br />
                  <input
                  class="w-100"
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Enter Your number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                  />
                  {formik.touched.Lname && formik.errors.phone ? (
                    <div class="text-start text-danger">{formik.errors.phone}</div>
                  ) : null}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-val text-start">
                  <label htmlFor="mail">Email Address</label><br />
                  <input
                  class="w-100"
                    type="email"
                    id="mail"
                    name="mail"
                    placeholder="Enter Your email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.mail}
                  />
                  {formik.touched.Lname && formik.errors.mail ? (
                    <div class="text-start text-danger">{formik.errors.mail}</div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="form-val text-start">
                  <label htmlFor="amount">Donation Amount</label><br />
                  <input
                  class="w-100"
                    type="text"
                    id="amount"
                    name="amount"
                    placeholder="Enter the Amount in Rs."
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.amount}
                  />
                  {formik.touched.Lname && formik.errors.amount ? (
                    <div class="text-start text-danger">{formik.errors.amount}</div>
                  ) : null}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-val text-start">
                  <label>Select Card Type</label><br />
                  <span id="icon">
                    <i className="fa-brands fa-cc-visa fa-2x"></i>
                    <i className="fa-brands fa-cc-mastercard fa-2x"></i>
                    <i className="fa-solid fa-credit-card fa-2x"></i>
                  </span>
                  <div className="form-val">
                    <label>
                      <input
                      class="w-100"
                        type="radio"
                        id="Visa"
                        name="Visa"
                        value="Visa"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        checked={formik.values.Visa === "Visa"}
                      />
                      Visa
                    </label>
                    <label>
                      <input
                      class="w-100"
                        type="radio"
                        id="Visa"
                        name="Visa"
                        value="Mastercard"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        checked={formik.values.Visa === "Mastercard"}
                      />
                      Mastercard
                    </label>
                  </div>
                  {formik.touched.Visa && formik.errors.Visa ? (
                    <div class="text-start text-danger">{formik.errors.Visa}</div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="form-val text-start">
                  <label htmlFor="card_name">Name on the Card</label><br />
                  <input
                    type="text"
                    id="card_name"
                    name="card_name"
                    placeholder="Enter the Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.card_name}
                  />
                  {formik.touched.card_name && formik.errors.card_name ? (
                    <div class="text-start text-danger">{formik.errors.card_name}</div>
                  ) : null}
                </div>
              </div>

              <div className="col-lg-4">
                <div className="form-val text-start">
                  <label htmlFor="card_no">Card Number</label><br />
                  <input
                  class="w-100"
                    type="text"
                    id="card_no"
                    name="card_no"
                    placeholder="1234-5678-9012-3456"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.card_no}
                  />
                  {formik.touched.card_no && formik.errors.card_no ? (
                    <div class="text-start text-danger">{formik.errors.card_no}</div>
                  ) : null}
                </div>
              </div>

              <div className="col-lg-4">
                <div className="form-val text-start">
                  <label htmlFor="cvv">CVV number</label><br />
                  <input
                  class="w-100"
                    type="text"
                    id="cvv"
                    name="cvv"
                    placeholder="EX: 123"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.cvv}
                  />
                  {formik.touched.cvv && formik.errors.cvv ? (
                    <div class="text-start text-danger">{formik.errors.cvv}</div>
                  ) : null}
                </div>
              </div>

            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="form-val text-start">
                  <label htmlFor="address1">Address Line-1</label><br />
                  <input
                  class="w-100"
                    type="text"
                    id="address1"
                    name="address1"
                    placeholder="Enter your address"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.address1}
                  />
                  {formik.touched.address1 && formik.errors.address1 ? (
                    <div class="text-start text-danger">{formik.errors.address1}</div>
                  ) : null}
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-val text-start">
                  <label htmlFor="address2">Address Line-2</label><br />
                  <input
                  class="w-100"
                    type="text"
                    id="address2"
                    name="address2"
                    placeholder="Enter your address"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.address2}
                  />
                  {formik.touched.address2 && formik.errors.address2 ? (
                    <div class="text-start text-danger">{formik.errors.address2}</div>
                  ) : null}
                </div>
              </div>

            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="form-val text-start">
                  <label htmlFor="city">City Name</label><br />
                  <input
                  class="w-100"
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Enter your city"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.city}
                  />
                  {formik.touched.city && formik.errors.city ? (
                    <div class="text-start text-danger">{formik.errors.city}</div>
                  ) : null}
                </div>
              </div>

              <div className="col-lg-4">
                <div className="form-val text-start">
                  <label htmlFor="state">State Name</label><br />
                  <input
                  class="w-100"
                    type="text"
                    id="state"
                    name="state"
                    placeholder="Enter your State"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.state}
                  />
                  {formik.touched.state && formik.errors.state ? (
                    <div class="text-start text-danger">{formik.errors.state}</div>
                  ) : null}
                </div>
              </div>

              <div className="col-lg-4">
                <div className="form-val text-start">
                  <label htmlFor="pin">Pin code</label><br />
                  <input
                  class="w-100"
                    type="text"
                    id="pin"
                    name="pin"
                    placeholder="Enter the Pincode"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.pin}
                  />
                  {formik.touched.pin && formik.errors.pin ? (
                    <div class="text-start text-danger">{formik.errors.pin}</div>
                  ) : null}
                </div>
              </div>

            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="form-val mt-2 mx-1">
                  <label htmlFor="check_box">
                    <input
                    class="mx-1"
                      type="checkbox"
                      id="check_box"
                      name="check_box"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      checked={formik.values.check_box}
                    />
                    I have read and agree the terms and condition.
                  </label>
                  {formik.touched.check_box && formik.errors.check_box ? (
                    <div class="error text-center text-danger">{formik.errors.check_box}</div>
                  ) : null}
                </div>
              </div>

            </div>
            <div className="row">
              <div className="col-12">
                <div className="bt">
                  <button
                    className="btn btn-success mt-2"
                    id="submitbtn"
                    type="submit"
                  >
                    Pay now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form1;
