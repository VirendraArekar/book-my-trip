import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import './style.css'
import { currencies } from "../../data";
import { CiSearch } from "react-icons/ci";
import Modal from '../Modal'
import { strShorten } from "../../utils/helper";
import { MdOutlineHolidayVillage } from "react-icons/md";


export default function index(props) {
  const [currencyOpen, setSetCurrencyOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [countryCurruncies, setCountryCurrencies] = useState(currencies);

  const toggle = () => setLanguageOpen((prevState) => !prevState);
  const toggle2 = () => setSetCurrencyOpen((prevState) => !prevState);
  const {loginClick, tabCategories, renderTabLogo} = props

  const renderTabLogoAlt = (name) => {
    return (
      <div className="text-center">
        {name === "Flights" ? (
          <img
            src={require("../../assets/images/plane_870092.png")}
            className="tab-img-alt"
          />
        ) : name === "Hotels" ? (
          <img
            src={require("../../assets/images/resort_5273266.png")}
            className="tab-img-alt"
          />
        ) : name === "Homestays & Villas" ? (
          <img
            src={require("../../assets/images/castle_10236380.png")}
            className="tab-img-alt"
          />
        ) : name === "Holiday Packages" ? (
          <img
            src={require("../../assets/images/beach-chair_3707289.png")}
            className="tab-img-alt"
          />
        ) : name === "Trains" ? (
          <img
            src={require("../../assets/images/train_3639911.png")}
            className="tab-img-alt"
          />
        ) : name === "Buses" ? (
          <img
            src={require("../../assets/images/school-bus_8160193.png")}
            className="tab-img-alt"
          />
        ) : name === "Cabs" ? (
          <img
            src={require("../../assets/images/taxi_896980.png")}
            className="tab-img-alt"
          />
        ) : name === "Forex Card & Currency" ? (
          <img
            src={require("../../assets/images/8241638.png")}
            className="tab-img-alt"
          />
        ) : (
          <img
            src={require("../../assets/images/travel_insurance_icon_150918.png")}
            className="tab-img-alt"
          />
        )}
      </div>
    );
  };
  return (
    <nav class="navbar navbar-light justify-content-right align-items-center px-2 py-0 fixed-top navbar-color">
      <a class="navbar-brand mb-0 ">
        <img src={require("../../assets/images/mmt_dt_header_icon_3x.avif")} className="logo" />
      </a>
      <div className="text-light w-50 d-flex ">
      {tabCategories.map((item, index) => {
                return (
                  <div
                    className="tab-items-alt text-center middle-nav position-relative"
                    key={index}
                    onClick={() => setTab(item?.id)}
                  >
                    {renderTabLogoAlt(item.name)}
                    <span
                      className={`d-block text-center tab-box-text-alt ${
                        item?.active ? "text-primary" : ""
                      }`}
                    >
                      {strShorten(item.name, 7)}
                    </span>
                   
                  </div>
                );
              })}
        
      </div>
      <div className="text-light p-0 m-0 d-flex justify-content-center align-items-center">
        <div className="width-35 d-inline-flex d-flex justify-content-center align-items-center">

        <div className="log-signup-btn">
       
       <MdOutlineHolidayVillage size={20} className="mr-2"/>
       Login Or Create Account
 </div>
          <div className="">
            <Dropdown isOpen={currencyOpen} toggle={toggle2} direction={"center"} className="px-1 py-0 btn-trans" >
              <DropdownToggle caret className="dropdown-title-text-alt  custom-dropdown-alt  px-4 ">Country<br></br><span className="dropdown-title-text-span">India</span></DropdownToggle>
              <DropdownMenu className="mt-2">
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem>Some Action</DropdownItem>
                <DropdownItem text>Dropdown Item Text</DropdownItem>
                <DropdownItem disabled>Action (disabled)</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Foo Action</DropdownItem>
                <DropdownItem>Bar Action</DropdownItem>
                <DropdownItem>Quo Action</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>

          

          <div className="">
            <Dropdown isOpen={currencyOpen} toggle={toggle2} direction={"center"} className="px-1 py-0 btn-trans" >
              <DropdownToggle caret className="dropdown-title-text-alt  custom-dropdown-alt  px-4 ">Language<br></br><span className="dropdown-title-text-span">English</span></DropdownToggle>
              <DropdownMenu className="mt-2">
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem>Some Action</DropdownItem>
                <DropdownItem text>Dropdown Item Text</DropdownItem>
                <DropdownItem disabled>Action (disabled)</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Foo Action</DropdownItem>
                <DropdownItem>Bar Action</DropdownItem>
                <DropdownItem>Quo Action</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <div className="">
            <Dropdown isOpen={languageOpen} toggle={toggle} direction={"center"} className="px-1 py-0 " >
              <DropdownToggle caret className="dropdown-title-text-alt custom-dropdown-alt  px-4">Currency<br></br><span className="dropdown-title-text-span">AED</span></DropdownToggle>
              <DropdownMenu className="mt-5 dropdown-width">
                <div className="dropdown-search w-100 d-inline-block">
                   <CiSearch  className="w-20"/>
                   <input type="text" className="w-80 search-input ml-5 d-inline-block" placeholder="Search Currency"/>
                </div>
                {
                    countryCurruncies.map((item, index) => {
                      return(
                        <>
                          {
                            index < 7 ?
                            <>
                                {
                                    index === 0 &&
                                    <DropdownItem header>POPULAR CURRENCY</DropdownItem>
                                }
                                <DropdownItem className="py-2">
                                    <div className="d-flex justify-content-between">
                                        <span className="dropdown-left-text">{item?.name}</span>
                                        <span className="dropdown-right-text">{item?.value}</span>
                                    </div>
                                </DropdownItem>
                            </>
                            :
                            <>
                                {
                                    index === 7 &&
                                    <>
                                    <DropdownItem divider />
                                    <DropdownItem header>OTHER CURRENCIES</DropdownItem>
                                    </>
                                }
                                
                                <DropdownItem className="py-2">
                                    <div className="d-flex justify-content-between">
                                        <span className="dropdown-left-text">{item?.name}</span>
                                        <span className="dropdown-right-text">{item?.value}</span>
                                    </div>
                                </DropdownItem>
                            </>
                          }
                        </>
                      )
                    })
                }
              </DropdownMenu>
            </Dropdown>
           
          </div>
          
        </div>
      </div>
      
    </nav>
  );
}
