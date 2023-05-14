import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function ContactUs(props) {
  return (
    <div>
      <Navbar />
      <header id="contact-header" >
        <div id="contact" className="container align-items-center "  >
          <div className="col m-3">
            <h1 className="mt-2 align-content-center">
              Contact Us
            </h1>
          </div>
        </div>
      </header>
      <div className="container mt-5 align-items-center">
        <h3 style={{ textAlign: 'center' }}>
          Let's Start a Conversation.
        </h3>

        <div className="container-fluid mt-5 row align-items-center">
          <div className="container col-6">
            <form className="text-center border border-light p-5" action="#!">
              <p className="h4 mb-4">Contact us</p>
              <input type="text" id="defaultContactFormName" className="form-control mb-4" placeholder="Name" />
              <input type="email" id="defaultContactFormEmail" className="form-control mb-4" placeholder="E-mail" />
              <div className="form-group">
                <textarea className="form-control rounded-0" id="exampleFormControlTextarea2" rows={3} placeholder="Message" defaultValue={""} />
              </div>
              <button className="btn btn-info btn-block" type="submit">Send</button>
            </form>

          </div>
          <div className="container col-6 map1">
            <div className="row-6 justify-content-center d-flex">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30158.70774588553!2d72.85098084711525!3d19.114741022188095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b61b41dfb131%3A0xa668297563ddac31!2sAndheri%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1670424130777!5m2!1sen!2sin" width={400} height={350} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
            <div className=" row-6 ">
              <div className="row" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '50%' }}>
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i className="fas fa-home me-3 text-secondary" />SANTCRUZ, MUMBAI 400010, MH</p>
                <p>
                  <i className="fas fa-envelope me-3 text-secondary" />
                  info@example.com
                </p>
                <p><i className="fas fa-phone me-3 text-secondary" /> + 01 234 567 88</p>
                <p><i className="fas fa-print me-3 text-secondary" /> + 01 234 567 89</p>
              </div>
            </div>
          </div>
          <div className="container ">

            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    Do i have to return the car to the same location where i picked it up?
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    For all the bookings, return the Rentself Car to its pick-up location. If you leave Rentself Car away from your Pick-up location, you will be charged up to INR 10,000 in wrong location drop penalties + Car recovery expenses incurred by Rentself until the vehicle is returned to the correct location. Late fees will also be charged at the effective hourly booking rate.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Can i book for any period of time?
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    You can book cars by the hour, day, week, or month. You can book them 60 days in advance. The minimum reservation period for regular bookings is 8 hours.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    What happens if i return the car late?
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    A high penalty will be applicable for the amount of time you are late. In order to avoid paying this penalty, you can extend the booking from the app, well in advance.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                    How am i reimbursed if i pump my own fuel?
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse " aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Rentself is providing UNLIMITED KILOMETERS with NO FUEL Bookings, but the Guests are expected to drop the car at an equal or higher fuel level than the Booking Start time. Reimbursement for any excess fuel will be processed to the Guests. Refuelling Charges will be levied if the vehicle is dropped at a lower fuel level than the Booking Start time. If the booking type is With-fuel, Rentself pays for the fuel, regardless of whether the vehicle is a diesel or petrol variant. Rentself refuels the vehicles regularly. If you are driving a long distance and you need to refuel the vehicle, keep the original fuel receipt and submit it after your reservation and Rentself will happily reimburse you the amount based on estimation. We do not reimburse fuel refund on No fuel bookings, Please refuel the vehicles as per your need. While ending the trip vehicle fuel % should be as same as the start fuel % to avoid unnecessary charges. Start &amp; End Checklist is mandatory.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    What is traffic violation rule ?
                  </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Please ensure you drive safely without breaking any traffic rules. In case of an uncertain event of a traffic violation, Please clear the penalty through the Govt portal to avoid un-necessary charges against your booking and inconvenience to other customers.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                    Why do i have to pay a deposit?
                  </button>
                </h2>
                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Rentself doesn't take any deposits for serving a Booking. Based on additional usage customers will be charged at the time of Booking End.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
                    How do i unlock my car?
                  </button>
                </h2>
                <div id="collapseSeven" className="accordion-collapse collapse " aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    "Location without fleet (KLE booking): Filling checklists is easy! Now you can fill your pick up checklist via the Rentself App. Just login to the App, select your live booking from the My bookings page and start. 1. Fill Exterior cleanliness and damage reporting with images. 2. Unlock the vehicle 3. Interior cleanliness, documents check and vehicle KM/Fuel readings with images. 4. Pick up the car keys from the dashboard. 5. Start your trip. It is advised to keep the images for your future reference and do ensure proper network coverage filling the checklist." Location with Fleet assistance: Collect the keys from the location executive.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                    How do i find my car?
                  </button>
                </h2>
                <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    It simple to find the vehicle. We will share the exact vehicle location 30 minutes prior to your booking start time through an SMS on your registered contact number. Use this navigation to reach your vehicle or you can even use Find my car option through your App and follow the Last mile directions.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                    How do i reach the location of the car?
                  </button>
                </h2>
                <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    All Refunds made shall be through the original payment account only within 30 working days
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

ContactUs.propTypes = {}

export default ContactUs
