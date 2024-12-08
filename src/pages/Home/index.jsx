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
import { categories, exploreData, flags, offers, userType } from "../../data";
import Button from "../../components/Button";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineMailOutline } from "react-icons/md";
import { strShorten } from "../../utils/helper";
import { FaAngleDown } from "react-icons/fa6";
import { GoArrowSwitch } from "react-icons/go";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { FaEarthAsia } from "react-icons/fa6";
import { GrMapLocation } from "react-icons/gr";
import { TfiWallet } from "react-icons/tfi";
import { IoPeopleOutline } from "react-icons/io5";
import { IoGiftOutline } from "react-icons/io5";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import fimgOne from "../../assets/images/5b28b4a9-d58d-4984-b60b-c0410a572f00.png";
import fimgTwo from "../../assets/images/022d9c0e-ae81-4ab2-8b8e-948d76eb421d.png";
import fimgThreee from "../../assets/images/63ef6026-1674-4e06-91f8-77d868e15bcc.png";
import { UncontrolledCarousel } from "reactstrap";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Desc from "./Desc";
import Footer from "../../components/Footer";
import StickyNavbar from "../../components/StickyNavbar"

import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

export default function Home() {
  const [loginOpen, setLoginOpen] = useState(false);
  const toggle = () => setLoginOpen((prevState) => !prevState);
  const [loginActiveButton, setLoginActiveButton] = useState(1);
  const [mobileNumber, setMobileNumber] = useState(null);
  const [tabCategories, setTabCategories] = useState(categories);
  const [tripType, setTripType] = useState("Round");
  const [offer, setOffer] = useState("Offer");
  const [flagships, setFlagships] = useState([
    "Lemon Tree Hotels",
    "WelcomHritage",
    "Wyndham Hotels & Resorts",
  ]);
  const slideImages = Array.from({ length: 15 }, () =>
    Math.floor(Math.random() * 15)
  );
  const [stickyNav, setStickyNav] = useState(false);

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

  const listenToScroll = () => {
    let heightToHideFrom = 90;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
        setStickyNav(true);
    } 
    else if(winScroll < heightToHideFrom){
      setStickyNav(false);
    }
    else {
      setStickyNav(false);
    }
  };

  useState(() => {
    setTab(1);
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
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

  const renderExploreLogo = (index) => {
    return (
      <>
        {index === 1 ? (
          <FaEarthAsia size={18} />
        ) : index === 2 ? (
          <GrMapLocation size={18} />
        ) : index === 3 ? (
          <TfiWallet size={18} />
        ) : index === 4 ? (
          <IoPeopleOutline size={18} />
        ) : (
          <IoGiftOutline size={18} />
        )}
      </>
    );
  };

  const onlineImageUrl = (index) => {
    return index === 0 ?
          'https://images.unsplash.com/photo-1652928945804-9d9731e4da91?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=aaron-robinson-9QDlFQ6qTlM-unsplash.jpg' : (index === 1 ? "https://images.unsplash.com/photo-1534238151781-c62af32c97a0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=annie-spratt-G96zP4dbsIA-unsplash.jpg" : (index === 2 ? "https://images.unsplash.com/photo-1625408851347-9a0ed832409c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=anthony-persegol-18RbV5vamPM-unsplash.jpg" : (index === 3 ? "https://images.unsplash.com/photo-1724599685287-299a6412b92a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=pascal-bernardon-DM1p2cYN6I8-unsplash.jpg" : (index === 4 ? "https://images.unsplash.com/photo-1648030003736-4382a71bca1d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=fabio-traina--fPpCTLWh74-unsplash.jpg" : (index === 5 ? "https://images.unsplash.com/photo-1583447198378-a0aeae7eec9c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=philippe-collard-roqJ4FFEq2s-unsplash.jpg" : (index === 6 ? "https://images.unsplash.com/photo-1733303988168-83110897f699?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=igor-sporynin-a0j0rZx4D2Q-unsplash.jpg" : (index === 7 ? "https://images.unsplash.com/photo-1733234321541-ed30d2dff66d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=igor-sporynin-V30qGCDzpR4-unsplash.jpg" : (index === 8 ? "https://images.unsplash.com/photo-1732951360178-0b27854fdd24?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=igor-sporynin-nbJgQEWQpik-unsplash.jpg" : (index === 9 ? "https://images.unsplash.com/photo-1733035996834-27c7af9b0f84?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=igor-sporynin-SPiOrWBYd1E-unsplash.jpg" : "https://images.unsplash.com/photo-1733035996834-27c7af9b0f84?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=igor-sporynin-SPiOrWBYd1E-unsplash.jpg")))))))))
  }

  return (
    <div className="m-0 p-0">
      <div className="vh-100 w-100 top-section">
        {stickyNav ? (
          <StickyNavbar loginClick={toggle} tabCategories={tabCategories} renderTabLogo={renderTabLogo}/>
        ) : (
          <Navbar loginClick={toggle} />
        )}

        <div className={`container-fluid mx-0 mt-5 px-4 position-relative search-section ${stickyNav ? "add-top-margin" : ""}`}>
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

          <form className="bg-light p-4 pt-3 rounded search-bottom postion-relative">
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
              <div className="col-md-3 p-4 py-3 justify-content-center align-items-center to-from-box position-relative">
                <div className="to-from-title"> From</div>
                <div className="to-from-header">Delhi</div>
                <div className="to-from-info">DEL, Delhi Airport India</div>
                <div className="position-absolute reverse-arrow">
                  <GoArrowSwitch size={20} className="text-primary" />
                </div>
              </div>
              <div className="col-md-3 p-4 py-3 justify-content-center align-items-center to-from-box border border-top-0 border-bottom-0 border-end-0">
                <div className="to-from-title">To</div>
                <div className="to-from-header">Bangluru</div>
                <div className="to-from-info">
                  {strShorten("BLR, Bangluru International  Airport India", 37)}
                </div>
              </div>
              <div className="col-md-2 p-4 py-3 justify-content-center align-items-center to-from-box border border-top-0 border-bottom-0 border-end-0">
                <div className="to-from-title">
                  Departure
                  <FaAngleDown size={20} className="mx-1 text-primary" />
                </div>
                <div className="to-from-header">7 Dec'24</div>
                <div className="to-from-info">Saturday</div>
              </div>
              <div className="col-md-2 p-4 py-3 justify-content-center align-items-center to-from-box border border-top-0 border-bottom-0 border-end-0">
                <div className="to-from-title">
                  Return <FaAngleDown size={20} className="mx-1 text-primary" />
                </div>
                <div className="to-from-header">2 Jan'25</div>
                <div className="to-from-info">Thursday</div>
              </div>
              <div className="col-md-2 p-4 py-3 justify-content-center align-items-center to-from-box border border-top-0 border-bottom-0 border-end-0">
                <div className="to-from-title">
                  Travellers & Class{" "}
                  <FaAngleDown size={20} className="mx-1 text-primary" />
                </div>
                <div className="to-from-header">Traveller</div>
                <div className="to-from-info">
                  {strShorten("Economy/Premium Economy", 15)}
                </div>
              </div>
            </div>

            <div className="row mb-4 mx-0 px-0">
              <div className="col px-0">
                <div className="user-title-header">Select a special fare</div>
                <div className="user-title-hightlight d-inline-block">
                  Extra Saving
                </div>
              </div>
              {userType.map((item, index) => {
                return (
                  <div className="col p-0 m-0 pe-2 px-0">
                    <div
                      className=" border rounded d-flex align-items-center p-3 px-2 regular-box"
                      key={index}
                    >
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
              })}
            </div>

            <div className="position-absolute search-btn d-flex justify-content-center align-items-center">
              <Button
                name={"SEARCH"}
                className="s-button gradiant-blue"
                btn=" "
                onClick={() => {}}
              />
            </div>

            <div className="position-absolute search-arrow d-flex justify-content-center align-items-center mb-2">
              <div className="w-100 text-center">
                <MdKeyboardDoubleArrowDown size={25} color="#FFFFFF" />
                <span className="text-white mx-2 tx-lg">Explore More</span>
                <MdKeyboardDoubleArrowDown size={25} color="#FFFFFF" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center explore-div">
        <div className="border explore-section bg-light">
          {exploreData.map((item, index) => {
            return (
              <div
                className={`d-inline-block explore-box py-3 px-4 ${
                  index != 0
                    ? "border border-end-0 border-top-0 border-bottom-0"
                    : ""
                }`}
              >
                <div
                  className={`d-flex justify-content-center align-items-center`}
                >
                  {renderExploreLogo(index + 1)}

                  <div className="d-inline-block">
                    <div className="ms-3 explore-title d-flex align-items-center">
                      {item.name}
                      {item.new && (
                        <span className="mx-1 expore-hightlight"> new </span>
                      )}
                    </div>
                    <div className="ms-3 explore-desc">{item.desc}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="m-4 mx-5 search-bottom postion-relative">
        <div className="row border rounded search-bottom-box">
          <div className="col-6 p-4 pb-1 mb-0">
            <div className="px-2">
              <span className="offer-header me-3">Offers</span>
              <div className="d-inline-block offer-tab-group border border-start-0 border-end-0 border-top-0 text-center">
                <div
                  className={`offer-tab d-inline-block ${
                    offer === "Offer" ? "offer-tab-active" : ""
                  }`}
                  onClick={() => setOffer("Offer")}
                >
                  All Offers
                </div>
                <div
                  className={`offer-tab d-inline-block ${
                    offer === "Flight" ? "offer-tab-active" : ""
                  }`}
                  onClick={() => setOffer("Flight")}
                >
                  Flight
                </div>
                <div
                  className={`offer-tab d-inline-block ${
                    offer === "Hotel" ? "offer-tab-active" : ""
                  }`}
                  onClick={() => setOffer("Hotel")}
                >
                  Hotel
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 p-4 pb-1 mb-0 text-end jsutify-content-center align-items-center">
            <div className="px-2 p-4 offer-view">
              VIEW ALL <MdOutlineArrowRightAlt size={25} className="ms-2" />
            </div>
          </div>

          <div className="col-12 mx-3 py-0 my-0 mb-4">
            <div className="row mx-5 px-5 pt-0 mt-0">
              {offers.map((item, index) => {
                return (
                  <div className="col-6 m-0 p-0 offer-card">
                    <div className="row border  py-3 px-1 my-2 mx-1 offer-card-box">
                      <div className="col-4">
                        {index === 0 ? (
                          <img
                            src={require("../../assets/images/Desktop-Dubai-Hotel-Sale-171024.avif")}
                            className="offer-img"
                          />
                        ) : index === 1 ? (
                          <img
                            src={require("../../assets/images/mmtwings-116x116-23032023.avif")}
                            className="offer-img"
                          />
                        ) : (
                          <img
                            src={require("../../assets/images/df-mmtsuper-116x116-01022023.avif")}
                            className="offer-img"
                          />
                        )}
                      </div>
                      <div className="col-8 position-relative ">
                        <div className="d-flex justify-content-between">
                          <div className="card-left-text">INTL HOTLES</div>
                          <div className="card-right-text">T&C'S APPLY</div>
                        </div>
                        <div className="offer-card-header my-2">
                          ON DUBAI & ABU DHABI HOTELS
                        </div>
                        <hr></hr>
                        <div className="offer-card-desc">
                          Grab Up to 30% OFF*
                        </div>
                        <div className="position-absolute book-now">
                          BOOK NOW
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="m-4 mx-5 search-bottom postion-relative">
        <div className="row">
          <div className="d-flex justify-content-center border flagship-section rounded align-items-center py-5">
            <div className="d-inline-block flagship-header">
              Flagship Hotel Stores on MakeMyTrip
            </div>
            {flagships.map((item, index) => {
              return (
                <div
                  className="d-inline-block border flagship-card mx-1 position-relative"
                  style={{
                    backgroundImage: `url(${
                      index === 0 ? fimgOne : index === 1 ? fimgTwo : fimgThreee
                    })`,
                  }}
                  key={index}
                >
                  <div className="flagship-profile-title position-absolute d-inline-block">
                    {item}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* <div className="m-4 mx-5 search-bottom postion-relative">
        <div className="row">
        <UncontrolledCarousel
          
          items={[
            {
              altText: 'Slide 1',
              caption: 'Slide 1',
              key: 1,
              src: 'https://picsum.photos/id/123/1200/600'
            },
            {
              altText: 'Slide 2',
              caption: 'Slide 2',
              key: 2,
              src: 'https://picsum.photos/id/456/1200/600'
            },
            {
              altText: 'Slide 3',
              caption: 'Slide 3',
              key: 3,
              src: 'https://picsum.photos/id/678/1200/600'
            }
          ]}
        />
        </div>
      </div> */}

      <div className="m-4 mx-5 postion-relative">
        <div className="row">
          <div className="border rounded px-5 py-4">
            <div className="row">
              <div className="col-10">
                {/* d-flex justify-content-center align-items-center */}
                <div className="d-flex justify-content-start align-items-center">
                  <img
                    src={require("../../assets/images/gift_mobile_phone_icon_179524.png")}
                    className="mobile-shop-img"
                  />
                  <div className="mx-3">
                    <div className="download-header">Download App Now !</div>
                    <div className="download-desc">
                      Use code{" "}
                      <span className="download-desc-dark">WELCOMEMMT</span> and
                      get <span className="download-desc-dark">FLAT 12%</span>{" "}
                      OFF* on your first domestic flight booking
                    </div>
                  </div>
                </div>
                <div className="w-100">
                  <div className="d-inline-block border rounded my-3">
                    <div className="d-inline-block mx-2">
                      <img
                        src={require("../../assets/images/Indianflag_6504.png")}
                        className="indian-flag-img"
                      />
                    </div>
                    <div className="d-inline-block country-code">+91 -</div>
                    <input type="number" className="mobile-input" />
                    <button type="button" className="app-link-btn">
                      GET APP LINK
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-2">
                <div className="text-end my-4">
                  {/*          
                 <img src={require('../../assets/images/5a902dbf7f96951c82922875.png')} className="store-img-google d-block text-end"/>

                 <img src={require('../../assets/images/5a902dbf7f96951c82922875.png')} className="store-img-google d-block text-end"/> */}

                  <img
                    src={require("../../assets/images/5a902db97f96951c82922874.png")}
                    className="store-img d-block"
                  />

                  <img
                    src={require("../../assets/images/5a902db97f96951c82922874.png")}
                    className="store-img d-block"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="m-4 mx-5 postion-relative">
        <div className="row">
          <div className="border rounded py-4 px-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="d-block-inline slide-title">
                Handpicked Collections for You
              </div>
              <div className="d-inline-block">
                <div className="d-inline-block slide-arrow-box border slide-arrow-left">
                  <FaAngleLeft size={12} className="slide-arrow " />
                </div>
                <div className="d-inline-block slide-arrow-box border slide-arrow-right">
                  <FaAngleRight size={12} className="slide-arrow " />
                </div>
              </div>
            </div>
            <Slide slidesToScroll={5} slidesToShow={5} indicators={false}>
              {slideImages.map((item, index) => {
                return (
                  <div className="slide-parent">
                    <div className="secong-box w-70 d-flex justify-content-center align-items-center">
                      <div className="second-cap"></div>
                    </div>
                    <div className="first-box w-80 d-flex justify-content-center align-items-center">
                      <div className="first-cap"></div>
                    </div>

                    <div
                      className="slide-box position-relative"
                      style={{
                        backgroundImage: `url(${onlineImageUrl(index)})`,
                      }}
                    >
                      <div className="position-absolute w-100 slide-bottom-text">
                        <div className="text-center slide-header">
                          <span className="px-1 bg-light">TOP 8</span>
                        </div>
                        <div>
                          <div className="text-light text-center slide-desc px-1">
                            Stays In & Around Delhi for a Weekend Getaway
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slide>
          </div>
        </div>
      </div>

      <div className="m-4 mx-5 postion-relative">
        <div className="row">
          <div className="border rounded py-4 px-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="d-block-inline slide-title">
                Unlock Lesser-Known Wonders of India
              </div>
              <div className="d-inline-block">
                <div className="d-inline-block slide-arrow-box border slide-arrow-left">
                  <FaAngleLeft size={12} className="slide-arrow " />
                </div>
                <div className="d-inline-block slide-arrow-box border slide-arrow-right">
                  <FaAngleRight size={12} className="slide-arrow " />
                </div>
              </div>
            </div>
            <Slide slidesToScroll={5} slidesToShow={5} indicators={false}>
              {slideImages.map((item, index) => {
                return (
                  <div className="slide-parent">
                    <div
                      className="slide-box position-relative"
                      style={{
                        backgroundImage: `url(${onlineImageUrl(index)})`,
                      }}
                    >
                      <div className="position-absolute w-100 slide-bottom-text">
                        <div>
                          <div className="text-light text-left text-start slide-desc px-2">
                            Tamil Nadu's Charming Hill Town
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slide>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <Desc />
      </div>
      <div className="px-5 py-5 bottom-col">
        <div className="row">
          <div className="col bottom-desc">
            <div className="bottom-title">Why MakeMyTrip?</div>
            <br></br>
            <span className="bottom-desc">
              Established in 2000, MakeMyTrip has since positioned itself as one
              of the leading companies, providing great offers, competitive
              airfares, exclusive discounts, and a seamless online booking
              experience to many of its customers. The experience of booking
              your flight tickets, hotel stay, and holiday package through our
              desktop site or mobile app can be done with complete ease and no
              hassles at all. We also deliver amazing offers, such as Instant
              Discounts, Fare Calendar, MyRewardsProgram, MyWallet, and many
              more while updating them from time to time to better suit our
              customers’ evolving needs and demands.
            </span>
          </div>
          <div className="col bottom-desc">
            <div className="bottom-title">Booking Flights with MakeMyTrip</div>
            <br></br>
            <span className="bottom-desc">
              At MakeMyTrip, you can find the best of deals and cheap air
              tickets to any place you want by booking your tickets on our
              website or app. Being India’s leading website for hotel, flight,
              and holiday bookings, MakeMyTrip helps you book flight tickets
              that are affordable and customized to your convenience. With
              customer satisfaction being our ultimate goal, we also have a 24/7
              dedicated helpline to cater to our customer’s queries and
              concerns. Serving over 5 million happy customers, we at MakeMyTrip
              are glad to fulfill the dreams of folks who need a quick and easy
              means to find air tickets. You can get a hold of the cheapest
              flight of your choice today while also enjoying the other
              available options for your travel needs with us.
            </span>
          </div>
          <div className="col bottom-desc">
            <div className="bottom-title">Domestic Flights with MakeMyTrip</div>
            <br></br>
            <span className="bottom-desc">
              MakeMyTrip is India's leading player for flight bookings. With the
              cheapest fare guarantee, experience great value at the lowest
              price. Instant notifications ensure current flight status, instant
              fare drops, amazing discounts, instant refunds and rebook options,
              price comparisons and many more interesting features.
            </span>
          </div>
        </div>
      </div>
      <Footer />
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
