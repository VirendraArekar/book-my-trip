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
import { categories, flags, userType } from "../../data";
import Button from "../../components/Button";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineMailOutline } from "react-icons/md";
import { strShorten } from "../../utils/helper";
import { FaAngleDown } from "react-icons/fa6";
import { GoArrowSwitch } from "react-icons/go";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

export default function Home() {
  const [loginOpen, setLoginOpen] = useState(false);
  const toggle = () => setLoginOpen((prevState) => !prevState);
  const [loginActiveButton, setLoginActiveButton] = useState(1);
  const [mobileNumber, setMobileNumber] = useState(null);
  const [tabCategories, setTabCategories] = useState(categories);
  const [tripType, setTripType] = useState("Round");
  const setTab = (id) => {
    setTabCategories(
      tabCategories.map((category) => {
        if (category.id === id) {
          return { ...category, active: true };
        }
        return { ...category, active: false };
      })
    );
  };

  useState(() => {
    setTab(1);
  }, []);

  const changeNumber = (number) => {
    console.log("changeNumber ", number);
  };

  const renderTabLogo = (name) => {
    return (
      <div className="text-center">
        {name === "Flights" ? (
          <img
            src={require("../../assets/images/plane_870092.png")}
            className="tab-img"
          />
        ) : name === "Hotels" ? (
          <img
            src={require("../../assets/images/resort_5273266.png")}
            className="tab-img"
          />
        ) : name === "Homestays & Villas" ? (
          <img
            src={require("../../assets/images/castle_10236380.png")}
            className="tab-img"
          />
        ) : name === "Holiday Packages" ? (
          <img
            src={require("../../assets/images/beach-chair_3707289.png")}
            className="tab-img"
          />
        ) : name === "Trains" ? (
          <img
            src={require("../../assets/images/train_3639911.png")}
            className="tab-img"
          />
        ) : name === "Buses" ? (
          <img
            src={require("../../assets/images/school-bus_8160193.png")}
            className="tab-img"
          />
        ) : name === "Cabs" ? (
          <img
            src={require("../../assets/images/taxi_896980.png")}
            className="tab-img"
          />
        ) : name === "Forex Card & Currency" ? (
          <img
            src={require("../../assets/images/8241638.png")}
            className="tab-img"
          />
        ) : (
          <img
            src={require("../../assets/images/travel_insurance_icon_150918.png")}
            className="tab-img"
          />
        )}
      </div>
    );
  };
  return (
    <div className="m-0 p-0">
      <div className="vh-100 w-100 top-section">
        <Navbar loginClick={toggle} />
        <div className="container-fluid mx-0 mt-5 px-5 position-relative search-section">
          <div className="d-flex justify-content-center align-items-center position-relative">
            <div className=" mb-4 position-absolute tab-navigation d-flex bg-light justify-content-center align-items-center">
              {tabCategories.map((item, index) => {
                return (
                  <div
                    className="tab-items text-center align-middle position-relative"
                    key={index}
                    onClick={() => setTab(item?.id)}
                  >
                    {renderTabLogo(item.name)}
                    <span
                      className={`d-block text-center tab-box-text ${
                        item?.active ? "text-primary" : ""
                      }`}
                    >
                      {item.name}
                    </span>
                    {item?.active && (
                      <hr
                        className="d-block position-absolute tab-active"
                        size={8}
                      ></hr>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <form className="bg-light p-4 rounded search-bottom postion-relative">
            <div className="row radio-tab">
              <div className="col">
                <div
                  class="form-check  d-inline-block"
                  onClick={() => setTripType("One")}
                >
                  <input
                    class="form-check-input"
                    type="radio"
                    name="trip-city"
                    id="flexRadioDefault1"
                    checked={`${tripType == "One" ? true : false}`}
                  />
                  <label
                    class={`form-check-label radio-label ${
                      tripType == "One" ? "text-primary" : ""
                    }`}
                    for="flexRadioDefault1"
                  >
                    One Way
                  </label>
                </div>
                <div
                  class="form-check  d-inline-block ms-4"
                  onClick={() => setTripType("Round")}
                >
                  <input
                    class="form-check-input"
                    type="radio"
                    name="trip-city"
                    id="flexRadioDefault2"
                    checked={`${tripType == "Round" ? true : false}`}
                  />
                  <label
                    class={`form-check-label radio-label ${
                      tripType == "Round" ? "text-primary" : ""
                    }`}
                    for="flexRadioDefault2"
                  >
                    Round Trip
                  </label>
                </div>
                <div
                  class="form-check d-inline-block ms-4"
                  onClick={() => setTripType("Multi")}
                >
                  <input
                    class="form-check-input"
                    type="radio"
                    name="trip-city"
                    id="flexRadioDefault3"
                    checked={`${tripType == "Multi" ? true : false}`}
                  />
                  <label
                    class={`form-check-label radio-label ${
                      tripType == "Multi" ? "text-primary" : ""
                    }`}
                    for="flexRadioDefault3"
                  >
                    Multi City
                  </label>
                </div>
              </div>
              <div className="col text-end ">
                <span className="text-end radio-label">
                  Book International and Domestic Flights
                </span>
              </div>
            </div>
            <div className="row mb-3 mt-2 border rounded to-from-section">
              <div className="col-md-3 p-4 justify-content-center align-items-center to-from-box position-relative">
                <div className="to-from-title"> From</div>
                <div className="to-from-header">Delhi</div>
                <div className="to-from-info">DEL, Delhi Airport India</div>
                <div className="position-absolute reverse-arrow">
                  <GoArrowSwitch size={20} className="text-primary"/>
                </div>
              </div>
              <div className="col-md-3 p-4 justify-content-center align-items-center to-from-box border border-top-0 border-bottom-0 border-end-0">
                <div className="to-from-title">To</div>
                <div className="to-from-header">Bangluru</div>
                <div className="to-from-info">{strShorten('BLR, Bangluru International  Airport India', 37)}</div>
              </div>
              <div className="col-md-2 p-4 justify-content-center align-items-center to-from-box border border-top-0 border-bottom-0 border-end-0">
              <div className="to-from-title">Departure
                <FaAngleDown size={20} className="mx-1 text-primary"/>
              </div>
                <div className="to-from-header">7 Dec'24</div>
                <div className="to-from-info">Saturday</div>
              </div>
              <div className="col-md-2 p-4 justify-content-center align-items-center to-from-box border border-top-0 border-bottom-0 border-end-0">
              <div className="to-from-title">Return <FaAngleDown size={20} className="mx-1 text-primary"/></div>
                <div className="to-from-header">2 Jan'25</div>
                <div className="to-from-info">Thursday</div>
              </div>
              <div className="col-md-2 p-4 justify-content-center align-items-center to-from-box border border-top-0 border-bottom-0 border-end-0">
                <div className="to-from-title">Travellers & Class <FaAngleDown size={20} className="mx-1 text-primary"/></div>
                <div className="to-from-header">1 Traveller</div>
                <div className="to-from-info">{strShorten('Economy/Premium Economy', 15)}</div>
              </div>
            </div>

            <div className="row mb-5">
              <div className="col-2">
                <div className="user-title-header">Select a special fare</div>
                <div className="user-title-hightlight d-inline-block">Extra Saving</div>
              </div>
              {
                userType.map((item, index) => {
                  return (
                    <div className="col-2 p-0 m-0 pe-2">
                    <div className=" border rounded  d-flex align-items-center p-3" key={index}>
                      <input
                        type="radio"
                        name="user-type"
                        className="d-inline-block form-check-input user-radio"
                      />
                      <div className="d-inline-block px-3">
                        <div className="user-type-title">{item?.name}</div>
                        <div className="user-type-desc">{item?.desc}</div>
                      </div>
                    </div>
                    </div>
                  );
                })
              }
             
            </div>

            <div className="position-absolute search-btn d-flex justify-content-center align-items-center">
              <Button name={'SEARCH'} className="s-button gradiant-blue" btn=" " onClick={() => {}}/>
            </div>

            <div className="position-absolute search-arrow d-flex justify-content-center align-items-center">
              <div className="w-100 text-center">
                <MdKeyboardDoubleArrowDown size={25} color="#FFFFFF"/>
                <span className="text-white mx-2 tx-lg">Explore More</span>
                <MdKeyboardDoubleArrowDown size={25} color="#FFFFFF"/>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <div className="d-flex justify-content-center align-items-center position-relative mt-4">
            <div className=" mb-4 position-absolute tab-navigation d-flex bg-light justify-content-center align-items-center">
              {tabCategories.map((item, index) => {
                return (
                  <div
                    className="tab-items text-center align-middle position-relative"
                    key={index}
                    onClick={() => setTab(item?.id)}
                  >
                    {renderTabLogo(item.name)}
                    <span
                      className={`d-block text-center tab-box-text ${
                        item?.active ? "text-primary" : ""
                      }`}
                    >
                      {item.name}
                    </span>
                    {item?.active && (
                      <hr
                        className="d-block position-absolute tab-active"
                        size={8}
                      ></hr>
                    )}
                  </div>
                );
              })}
            </div>
          </div> */}

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
            <div className="line-container">
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
              By proceeding, you agree to MakeMyTrip's{" "}
              <span className="login-footer-blue">Privacy Policy</span>,{" "}
              <span className="login-footer-blue">User Agreement</span> and{" "}
              <span className="login-footer-blue">T&Cs</span>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
