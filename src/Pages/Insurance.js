import React from 'react'

import insu1 from '../images/insu.jpeg'
import caru1 from '../images/Boost-Your-Car-Insurance.jpg'
import caru2 from '../images/car-6808872_1280.png'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

function Insurance() {
  return (
    <div> 
      <Navbar/>
      <div id="carouselExampleFade" className="carousel slide carousel-fade mt-5" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={caru1} className="d-block w-100" height={400} />
      </div>
      <div className="carousel-item">
        <img src={caru2} className="d-block w-100" height={400} />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  <div className="container my-5 ">
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-2">
      <div className="col">
        <div className="card shadow-sm">
          <img src={insu1} width="100%" height="250vh" />
          <div className="card-body">
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary">View details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card shadow-sm">
          <div className="card-body">
            <form method="POST" action="https://www.phonepe.com/insurance/motor-insurance/">  
              <table style={{borderSpacing: '5px', margin: 'auto', borderColor: 'black'}}>
                <tbody><tr>
                    <td style={{width: '100px'}} name="attributes">Booking Id</td>
                    <td>
                      <input type="text" name="fnameP" id="fnameP" required minLength={3} autofocus /><span style={{color: 'red', fontWeight: 700}}>&nbsp;&nbsp;*</span>
                    </td>
                  </tr>
                  <tr className="err">
                    <td />
                    <td>
                      <small id="fnP" style={{color: 'rgb(249, 5, 5)', fontWeight: 700, backgroundColor: '#fafdfa99'}} />
                    </td>
                  </tr>
                  <tr>
                    <td style={{width: '100px'}} name="attributes" required minLength={3}>
                      Name:
                    </td>
                    <td>
                      <input type="text" name="lnameP" id="lnameP" required minLength={3} /><span style={{color: 'red', fontWeight: 700}}>&nbsp;&nbsp;*</span>
                    </td>
                  </tr>
                  <tr className="err">
                    <td />
                    <td>
                      <small id="lnP" style={{color: 'rgb(249, 5, 5)', fontWeight: 700, backgroundColor: '#fafdfa99'}} />
                    </td>
                  </tr>
                  <tr>
                    <td style={{width: '100px'}} name="attributes" required minLength={3}>
                      Amount:
                    </td>
                    <td>
                      <input type="text" name="lnameP" id="lnameP" required minLength={3} /><span style={{color: 'red', fontWeight: 700}}>&nbsp;&nbsp;*</span>
                    </td>
                  </tr>
                  <tr>
                    <td style={{width: '100px'}} name="attributes">
                      Vehicle type
                    </td>
                    <td>
                      <select id="inputDistrict">
                        <option value="SUV">SUV</option>
                        <option value="Sedan">Sedan</option>
                        <option value="LUV">LUV</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td style={{width: '100px'}} name="attributes">Extra Info</td>
                    <td><textarea type="textarea" rows={3} defaultValue={""} /></td>
                  </tr>
                  <tr>
                    <td colSpan={2} style={{justifyContent: 'center', textAlign: 'center'}}>
                      <a href="https://www.phonepe.com/insurance/motor-insurance/car-insurance/"><button type="submit">Submit </button></a>
                    </td>
                  </tr>
                </tbody></table>
            </form>
            <div className="d-flex justify-content-between align-items-center">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
  </div>
  )
}



export default Insurance
