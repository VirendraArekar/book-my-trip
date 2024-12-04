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


export default function index(props) {
  const [currencyOpen, setSetCurrencyOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [countryCurruncies, setCountryCurrencies] = useState(currencies);

  const toggle = () => setLanguageOpen((prevState) => !prevState);
  const toggle2 = () => setSetCurrencyOpen((prevState) => !prevState);
  const {loginClick} = props
  return (
    <nav class="navbar navbar-light justify-content-right px-4 py-0">
      <a class="navbar-brand">
        <img src={require("../../assets/images/logo.avif")} className="logo" />
      </a>
      <div className="text-light w-50">
        <ul className="row w-100 py-0">
          <li className="nav-menu col-4 d-flex d-block  align-items-center justify-content-center">
            <img
              src={require("../../assets/images/key.png")}
              className="nav-logo"
            />
            <div className="d-inline-block p-2 py-0">
              <div className="navbar-box-text pb-1">List Your Property</div>
              <div className="navbar-box-text-gray">Growth Your Bussiness!</div>
            </div>
          </li>
          <li className="nav-menu col-4 d-flex align-items-center justify-content-center">
            <img
              src={require("../../assets/images/laptop-bag_11912996.png")}
              className="nav-logo"
            />
            <div className="d-inline-block p-2 py-0">
              <div className="navbar-box-text pb-1">Introducing my Biz</div>
              <div className="navbar-box-text-gray">
                Business Travel Solution
              </div>
            </div>
          </li>
          <li className="nav-menu col-4 d-flex align-items-center justify-content-center">
            <img
              src={require("../../assets/images/suitcases_1889578.png")}
              className="nav-logo"
            />
            <div className="d-inline-block p-2 py-0">
              <div className="navbar-box-text pb-1">My Trips</div>
              <div className="navbar-box-text-gray">Manage Your Booking</div>
            </div>
          </li>
        </ul>
      </div>
      <div className="text-light p-0 m-0">
        <div className="width-35 d-inline-flex">
          {/* <button className="btn btn-block gradiant-blue">
            Login or Create Account
          </button> */}
          <div>
          <Dropdown isOpen={loginOpen} toggle={loginClick} direction={"center"} className="px-1 py-0 " >
            <DropdownToggle caret className="dropdown-title-text custom-dropdown gradiant-blue">Login or Create Account</DropdownToggle>
            <DropdownMenu className="d-none">

            </DropdownMenu>
            </Dropdown>
          </div>
          <div className="">
            <Dropdown isOpen={currencyOpen} toggle={toggle2} direction={"center"} className="px-1 py-0" >
              <DropdownToggle caret className="dropdown-title-text custom-dropdown">INR|ENG</DropdownToggle>
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
              <DropdownToggle caret className="dropdown-title-text custom-dropdown">INR</DropdownToggle>
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
