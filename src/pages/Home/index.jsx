import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import "./style.scss";
import Modal from "../../components/Modal";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { PiAirplaneTakeoffLight } from "react-icons/pi";
import { RiHotelLine } from "react-icons/ri";
import { PiTrain } from "react-icons/pi";
import IntlTelInput from "intl-tel-input/react";
import { flags } from "../../data";
import Button from "../../components/Button";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineMailOutline } from "react-icons/md";

export default function Home() {
  const [loginOpen, setLoginOpen] = useState(false);
  const toggle = () => setLoginOpen((prevState) => !prevState);
  const [loginActiveButton, setLoginActiveButton] = useState(1);
  const [mobileNumber, setMobileNumber] = useState(null);
  const changeNumber = (number) => {
    console.log("changeNumber ", number);
  };
  return (
    <div className="m-0 p-0">
      <div className="vh-100 w-100 top-section">
        <Navbar loginClick={toggle} />
      </div>
      <Modal
        open={loginOpen}
        setOpen={setLoginOpen}
        size={"xl"}
        className={"m-h-100 p-0"}
      >
        <div className="row m-0 p-0 position-relative">
          <div className="col-5 m-0 p-0">
            <Carousel
              className="w-100 m-h-100 m-0 p-0"
              // autoPlay={true}
              dynamicHeight={true}
              showThumbs={false}
              useKeyboardArrows={false}
              // showArrows={true}
              showStatus={false}
            >
              <div className="d-flex justify-content-center">
                <img
                  src={require("../../assets/images/photo-1470074558764-4e577e98bc85.avif")}
                  className="slider-img"
                />
                <div className="index-div">
                  <div className="slider-primary-text text-left">
                    Sign up now to join the club of
                  </div>
                  <div className="slider-secondary-text mt-2">
                    10 crore+ Happy Travellers
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-center w-100">
                <img
                  src={require("../../assets/images/photo-1504598318550-17eba1008a68.avif")}
                  className="slider-img"
                />
                <div className="index-div-two d-inline-block ">
                  <div className="slider-header mb-2">Sign up now to get</div>
                  <div className="d-inline-block d-flex justify-content-start py-2 mx-5 slider-card mb-2">
                    <div className="slider-image  d-inline-block">
                      <PiAirplaneTakeoffLight size={40} />
                    </div>
                    <div className=" d-inline-block">
                      <span className="slider-card-title  mx-2">
                        FLAT 10% OFF
                      </span>
                      <span className="slider-card-desc  mx-2">
                        On Domestic Flight*
                      </span>
                    </div>
                  </div>
                  <div className="d-inline-block d-flex justify-content-start py-2 mx-5 slider-card mb-2">
                    <div className="slider-image  d-inline-block">
                      <RiHotelLine size={40} />
                    </div>
                    <div className=" d-inline-block">
                      <span className="slider-card-title  mx-2">
                        FLAT 20% OFF*
                      </span>
                      <span className="slider-card-desc  mx-2">
                        On Domestic Hotels
                      </span>
                    </div>
                  </div>
                  <div className="d-inline-block d-flex justify-content-start py-2 mx-5 slider-card mb-4">
                    <div className="slider-image  d-inline-block">
                      <PiTrain size={40} />
                    </div>
                    <div className=" d-inline-block ">
                      <span className="slider-card-title mx-2">
                        Zero Convenience Fee*
                      </span>
                      <span className="slider-card-desc mx-2">
                        On Train Bookings
                      </span>
                    </div>
                  </div>
                  <div className="slider-footer mx-5">
                    COUPON CODE : WELCOMEMMT
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-center w-100">
                <img
                  src={require("../../assets/images/photo-1476900543704-4312b78632f8.avif")}
                  className="slider-img"
                />
                <div className="index-div-two d-inline-block ">
                  <div className="slider-header mb-2">Sign up now to get</div>
                  <div className="d-inline-block d-flex justify-content-start py-2 mx-5 slider-card mb-2">
                    <div className="slider-image  d-inline-block">
                      <PiAirplaneTakeoffLight size={40} />
                    </div>
                    <div className=" d-inline-block">
                      <span className="slider-card-title  mx-2">
                        Lock Flight Prices & Pay Later
                      </span>
                    </div>
                  </div>
                  <div className="d-inline-block d-flex justify-content-start py-2 mx-5 slider-card mb-2">
                    <div className="slider-image  d-inline-block">
                      <RiHotelLine size={40} />
                    </div>
                    <div className=" d-inline-block">
                      <span className="slider-card-title  mx-2">
                        Book Hotels @ ₹0
                      </span>
                    </div>
                  </div>
                  <div className="d-flex justify-content py-2 mx-5 slider-card mb-4">
                    <div className="slider-image  d-inline-block">
                      <PiTrain size={40} />
                    </div>
                    <div className=" d-inline-block ">
                      <span className="slider-card-title mx-2">
                        Get 3X refund, if your waitlisted train doesn’t get
                        confirmed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
          <div className="col-7 m-0 p-0 px-5 position-relative with-right">
            <div className="py-4 pb-2">
              <div className="login-button-group text-center d-flex justify-content">
                <div
                  className={`d-inline-block w-50 ${
                    loginActiveButton === 1
                      ? "login-btn-group-blue"
                      : "login-btn-group"
                  } h-100`}
                  onClick={() => setLoginActiveButton(1)}
                >
                  PERSONAL ACCOUNT
                </div>
                <div
                  className={`d-inline-block w-50 ${
                    loginActiveButton === 1
                      ? "login-btn-group"
                      : "login-btn-group-pink"
                  } h-100`}
                  onClick={() => setLoginActiveButton(2)}
                >
                  MYBIZ ACCOUNT
                </div>
              </div>
            </div>
            <div className="d-block my-4">
              <div className="row">
                <div className="mobile-title mb-3">Mobile Number</div>
                <div className="col-3 pe-0">
                  <select className="form-control m-0">
                    {flags.map((item, index) => {
                      return (
                        <option
                          key={index}
                          value={item.code}
                          className="w-100  mobile-option"
                        >
                          <img
                            src="https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/XK.svg"
                            alt="Flag of Kosovo"
                            style={{ width: "30px", height: "auto" }}
                          />
                          {item.code}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="col-9 ps-1">
                  <input type="text" className="form-control m-0" />
                </div>
              </div>
            </div>
            <div className="d-block my-4">
              <Button
                name={"CONTINUE"}
                className="w-100 custom-btn"
                onClick={() => {}}
              />
            </div>
            <div class="line-container">
              <span>Or Login/Signup With</span>
            </div>
            <div className="d-block align-items-center justify-content-center w-100 text-center">
              <div className="d-inline-block login-with align-items-center justify-content-center">
                <FcGoogle size={20} className="with-icon" />
              </div>
              <div className="d-inline-block  login-with align-items-center justify-content-center">
                <MdOutlineMailOutline size={20} className="with-icon" />
              </div>
            </div>
            <div className="login-footer mx-5">
              By proceeding, you agree to MakeMyTrip's <span className="login-footer-blue">Privacy Policy</span>, <span className="login-footer-blue">User
              Agreement</span> and <span className="login-footer-blue">T&Cs</span>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
