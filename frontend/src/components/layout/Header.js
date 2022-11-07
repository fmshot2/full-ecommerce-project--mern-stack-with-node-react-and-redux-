import React, { Fragment } from 'react';
// import "../../App.css"
// import {  Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Search from './Search'

const Header = () => {
  return (
    <Fragment>
    <header id="stickyheader">
      <div className="mobile-fix-option"></div>
      <div className="top-header">
        <div className="custom-container">
          <div className="row">
            <div className="col-xl-5 col-md-7 col-sm-6">
              <div className="top-header-left">
                <div className="shpping-order">
                  <h6>free shipping on order over $99 </h6>
                </div>
                <div className="app-link">
                  <h6>
                    Download aap
                  </h6>
                  <ul>
                    <li><a><i className="fa fa-apple" ></i></a></li>
                    <li><a><i className="fa fa-android" ></i></a></li>
                    <li><a><i className="fa fa-windows" ></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-md-5 col-sm-6">
              <div className="top-header-right">
                <div className="top-menu-block">
                  <ul>
                    <li><a href="#">gift cards</a></li>
                    <li><a href="#">Notifications</a></li>
                    <li><a href="#">help & contact</a></li>
                    <li><a href="#">todays deal</a></li>
                    <li><a href="#">track order</a></li>
                    <li><a href="#">shipping </a></li>
                    <li><a href="#">easy returns</a></li>
                  </ul>
                </div>
                <div className="language-block">
                  <div className="language-dropdown">
                      <span  className="language-dropdown-click">
                        english <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </span>
                    <ul className="language-dropdown-open">
                      <li><a href="#">hindi</a></li>
                      <li><a href="#">english</a></li>
                      <li><a href="#">marathi</a></li>
                      <li><a href="#">spanish</a></li>
                    </ul>
                  </div>
                  <div className="curroncy-dropdown">
                      <span className="curroncy-dropdown-click">
                        usd<i className="fa fa-angle-down" aria-hidden="true"></i>
                      </span>
                    <ul className="curroncy-dropdown-open">
                      <li><a href="#"><i className="fa fa-inr"></i>inr</a></li>
                      <li><a href="#"><i className="fa fa-usd"></i>usd</a></li>
                      <li><a href="#"><i className="fa fa-eur"></i>eur</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="layout-header2">
        <div className="container">
          <div className="col-md-12">
            <div className="main-menu-block">
              <div className="header-left">
                <div className="sm-nav-block">
                    <span className="sm-nav-btn">
                      <i className="fa fa-bars"></i>
                    </span>
                  <ul className="nav-slide">
                    <li>
                      <div className="nav-sm-back">
                        back <i className="fa fa-angle-right ps-2"></i>
                      </div>
                    </li>
                    <li><a href="category-page(left-sidebar).html">western ware</a></li>
                    <li><a href="category-page(left-sidebar).html">TV, Appliances</a></li>
                    <li><a href="category-page(left-sidebar).html">Pets Products</a></li>
                    <li><a href="category-page(left-sidebar).html">Car, Motorbike</a></li>
                    <li><a href="category-page(left-sidebar).html">Industrial Products</a></li>
                    <li><a href="category-page(left-sidebar).html">Beauty, Health Products</a></li>
                    <li><a href="category-page(left-sidebar).html">Grocery Products </a></li>
                    <li><a href="category-page(left-sidebar).html">Sports</a></li>
                    <li><a href="category-page(left-sidebar).html">Bags, Luggage</a></li>
                    <li><a href="category-page(left-sidebar).html">Movies, Music </a></li>
                    <li><a href="category-page(left-sidebar).html">Video Games</a></li>
                    <li><a href="category-page(left-sidebar).html">Toys, Baby Products</a></li>
                    <li className="mor-slide-open">
                      <ul>
                        <li><a href="category-page(left-sidebar).html">Bags, Luggage</a></li>
                        <li><a href="category-page(left-sidebar).html">Movies, Music </a></li>
                        <li><a href="category-page(left-sidebar).html">Video Games</a></li>
                        <li><a href="category-page(left-sidebar).html">Toys, Baby Products</a></li>
                      </ul>
                    </li>
                    <li>
                      <a className="mor-slide-click">
                        mor category
                        <i className="fa fa-angle-down pro-down" ></i>
                        <i className="fa fa-angle-up pro-up" ></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="brand-logo logo-sm-center">
                  <a href="index.html">
                    <img src="/assets/images/layout-2/logo/logo.png" className="img-fluid  " alt="logo"/>
                  </a>
                </div>
              </div>
              {/* <div className="input-block">
                <div className="input-box">
                  <form className="big-deal-form ">
                    <div className="input-group ">
                      <div className="input-group-text">
                        <span className="search"><i className="fa fa-search"></i></span>
                      </div>
                      <input type="search" className="form-control" placeholder="Search a Product" />
                      <div className="input-group-text">
                        <select>
                          <option>All Category</option>
                          <option>indurstrial</option>
                          <option>sports</option>
                        </select>
                      </div>
                    </div>
                  </form>
                </div>
              </div> */}
                <Search/>
              <div className="header-right">
                <div className="icon-block">
                  <ul>
                    <li className="mobile-search">
                      <a href="#">
                        {/* <svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             viewBox="0 0 612.01 612.01" style="enableBackground:new 0 0 612.01 612.01;"
                             xmlSpace="preserve">
                          <g>
                            <g>
                              <g>
                                <path d="M606.209,578.714L448.198,423.228C489.576,378.272,515,318.817,515,253.393C514.98,113.439,399.704,0,257.493,0
                                  C115.282,0,0.006,113.439,0.006,253.393s115.276,253.393,257.487,253.393c61.445,0,117.801-21.253,162.068-56.586
                                  l158.624,156.099c7.729,7.614,20.277,7.614,28.006,0C613.938,598.686,613.938,586.328,606.209,578.714z M257.493,467.8
                                  c-120.326,0-217.869-95.993-217.869-214.407S137.167,38.986,257.493,38.986c120.327,0,217.869,95.993,217.869,214.407
                                  S377.82,467.8,257.493,467.8z"/>
                              </g>
                            </g>
                          </g>
                          </svg> */}
                      </a>
                    </li>
                    <li className="mobile-user "  >
                      <a href="#">
                        {/* <svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             viewBox="0 0 512 512" style="enableBackground:new 0 0 512 512;" xmlSpace="preserve">
                            <g>
                              <g>
                                <path d="M256,0c-74.439,0-135,60.561-135,135s60.561,135,135,135s135-60.561,135-135S330.439,0,256,0z M256,240
                                  c-57.897,0-105-47.103-105-105c0-57.897,47.103-105,105-105c57.897,0,105,47.103,105,105C361,192.897,313.897,240,256,240z"/>
                              </g>
                            </g>
                          <g>
                              <g>
                                <path d="M297.833,301h-83.667C144.964,301,76.669,332.951,31,401.458V512h450V401.458C435.397,333.05,367.121,301,297.833,301z
                                   M451.001,482H451H61v-71.363C96.031,360.683,152.952,331,214.167,331h83.667c61.215,0,118.135,29.683,153.167,79.637V482z"/>
                              </g>
                            </g>
                          </svg> */}
                      </a>
                    </li>
                    <li className="mobile-setting" >
                      <a href="#">
                        <svg  enableBackground="new 0 0 512 512"  viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg"><path d="m272.066 512h-32.133c-25.989 0-47.134-21.144-47.134-47.133v-10.871c-11.049-3.53-21.784-7.986-32.097-13.323l-7.704 7.704c-18.659 18.682-48.548 18.134-66.665-.007l-22.711-22.71c-18.149-18.129-18.671-48.008.006-66.665l7.698-7.698c-5.337-10.313-9.792-21.046-13.323-32.097h-10.87c-25.988 0-47.133-21.144-47.133-47.133v-32.134c0-25.989 21.145-47.133 47.134-47.133h10.87c3.531-11.05 7.986-21.784 13.323-32.097l-7.704-7.703c-18.666-18.646-18.151-48.528.006-66.665l22.713-22.712c18.159-18.184 48.041-18.638 66.664.006l7.697 7.697c10.313-5.336 21.048-9.792 32.097-13.323v-10.87c0-25.989 21.144-47.133 47.134-47.133h32.133c25.989 0 47.133 21.144 47.133 47.133v10.871c11.049 3.53 21.784 7.986 32.097 13.323l7.704-7.704c18.659-18.682 48.548-18.134 66.665.007l22.711 22.71c18.149 18.129 18.671 48.008-.006 66.665l-7.698 7.698c5.337 10.313 9.792 21.046 13.323 32.097h10.87c25.989 0 47.134 21.144 47.134 47.133v32.134c0 25.989-21.145 47.133-47.134 47.133h-10.87c-3.531 11.05-7.986 21.784-13.323 32.097l7.704 7.704c18.666 18.646 18.151 48.528-.006 66.665l-22.713 22.712c-18.159 18.184-48.041 18.638-66.664-.006l-7.697-7.697c-10.313 5.336-21.048 9.792-32.097 13.323v10.871c0 25.987-21.144 47.131-47.134 47.131zm-106.349-102.83c14.327 8.473 29.747 14.874 45.831 19.025 6.624 1.709 11.252 7.683 11.252 14.524v22.148c0 9.447 7.687 17.133 17.134 17.133h32.133c9.447 0 17.134-7.686 17.134-17.133v-22.148c0-6.841 4.628-12.815 11.252-14.524 16.084-4.151 31.504-10.552 45.831-19.025 5.895-3.486 13.4-2.538 18.243 2.305l15.688 15.689c6.764 6.772 17.626 6.615 24.224.007l22.727-22.726c6.582-6.574 6.802-17.438.006-24.225l-15.695-15.695c-4.842-4.842-5.79-12.348-2.305-18.242 8.473-14.326 14.873-29.746 19.024-45.831 1.71-6.624 7.684-11.251 14.524-11.251h22.147c9.447 0 17.134-7.686 17.134-17.133v-32.134c0-9.447-7.687-17.133-17.134-17.133h-22.147c-6.841 0-12.814-4.628-14.524-11.251-4.151-16.085-10.552-31.505-19.024-45.831-3.485-5.894-2.537-13.4 2.305-18.242l15.689-15.689c6.782-6.774 6.605-17.634.006-24.225l-22.725-22.725c-6.587-6.596-17.451-6.789-24.225-.006l-15.694 15.695c-4.842 4.843-12.35 5.791-18.243 2.305-14.327-8.473-29.747-14.874-45.831-19.025-6.624-1.709-11.252-7.683-11.252-14.524v-22.15c0-9.447-7.687-17.133-17.134-17.133h-32.133c-9.447 0-17.134 7.686-17.134 17.133v22.148c0 6.841-4.628 12.815-11.252 14.524-16.084 4.151-31.504 10.552-45.831 19.025-5.896 3.485-13.401 2.537-18.243-2.305l-15.688-15.689c-6.764-6.772-17.627-6.615-24.224-.007l-22.727 22.726c-6.582 6.574-6.802 17.437-.006 24.225l15.695 15.695c4.842 4.842 5.79 12.348 2.305 18.242-8.473 14.326-14.873 29.746-19.024 45.831-1.71 6.624-7.684 11.251-14.524 11.251h-22.148c-9.447.001-17.134 7.687-17.134 17.134v32.134c0 9.447 7.687 17.133 17.134 17.133h22.147c6.841 0 12.814 4.628 14.524 11.251 4.151 16.085 10.552 31.505 19.024 45.831 3.485 5.894 2.537 13.4-2.305 18.242l-15.689 15.689c-6.782 6.774-6.605 17.634-.006 24.225l22.725 22.725c6.587 6.596 17.451 6.789 24.225.006l15.694-15.695c3.568-3.567 10.991-6.594 18.244-2.304z"/><path d="m256 367.4c-61.427 0-111.4-49.974-111.4-111.4s49.973-111.4 111.4-111.4 111.4 49.974 111.4 111.4-49.973 111.4-111.4 111.4zm0-192.8c-44.885 0-81.4 36.516-81.4 81.4s36.516 81.4 81.4 81.4 81.4-36.516 81.4-81.4-36.515-81.4-81.4-81.4z"/></svg>
                      </a>
                    </li>
                    <li className="mobile-wishlist item-count" >
                      <a href="#">
                        <svg viewBox="0 -28 512.001 512" xmlns="http://www.w3.org/2000/svg"><path d="m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm-112.96875-425.523437c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0"/></svg>
                        <div className="item-count-contain" >
                          2
                        </div>
                      </a>
                    </li>
                    <li className="mobile-cart item-count" >
                      <a href="#">
                        <div className="cart-block">
                          <div className="cart-icon">
                            <svg  enableBackground="new 0 0 512 512"  viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg"><g><path d="m497 401.667c-415.684 0-397.149.077-397.175-.139-4.556-36.483-4.373-34.149-4.076-34.193 199.47-1.037-277.492.065 368.071.065 26.896 0 47.18-20.377 47.18-47.4v-203.25c0-19.7-16.025-35.755-35.725-35.79l-124.179-.214v-31.746c0-17.645-14.355-32-32-32h-29.972c-17.64 0-31.99 14.351-31.99 31.99v31.594l-133.21-.232-9.985-54.992c-2.667-14.694-15.443-25.36-30.378-25.36h-68.561c-8.284 0-15 6.716-15 15s6.716 15 15 15c72.595 0 69.219-.399 69.422.719 16.275 89.632 5.917 26.988 49.58 306.416l-38.389.2c-18.027.069-32.06 15.893-29.81 33.899l4.252 34.016c1.883 15.06 14.748 26.417 29.925 26.417h26.62c-18.8 36.504 7.827 80.333 49.067 80.333 41.221 0 67.876-43.813 49.067-80.333h142.866c-18.801 36.504 7.827 80.333 49.067 80.333 41.22 0 67.875-43.811 49.066-80.333h31.267c8.284 0 15-6.716 15-15s-6.716-15-15-15zm-209.865-352.677c0-1.097.893-1.99 1.99-1.99h29.972c1.103 0 2 .897 2 2v111c0 8.284 6.716 15 15 15h22.276l-46.75 46.779c-4.149 4.151-10.866 4.151-15.015 0l-46.751-46.779h22.277c8.284 0 15-6.716 15-15v-111.01zm-30 61.594v34.416h-25.039c-20.126 0-30.252 24.394-16.014 38.644l59.308 59.342c15.874 15.883 41.576 15.885 57.452 0l59.307-59.342c14.229-14.237 4.13-38.644-16.013-38.644h-25.039v-34.254l124.127.214c3.186.005 5.776 2.603 5.776 5.79v203.25c0 10.407-6.904 17.4-17.18 17.4h-299.412l-35.477-227.039zm-56.302 346.249c0 13.877-11.29 25.167-25.167 25.167s-25.166-11.29-25.166-25.167 11.29-25.167 25.167-25.167 25.166 11.291 25.166 25.167zm241 0c0 13.877-11.289 25.167-25.166 25.167s-25.167-11.29-25.167-25.167 11.29-25.167 25.167-25.167 25.166 11.291 25.166 25.167z"/></g></svg>
                          </div>
                          <div className="cart-item">
                            <h5>shopping</h5>
                            <h5>cart</h5>
                          </div>
                        </div>
                      </a>
                      <div className="item-count-contain">
                        3
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="menu-nav">
                    <span className="toggle-nav">
                      <i className="fa fa-bars "></i>
                    </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="searchbar-input">
          <div className="input-group">       
            <span className="input-group-text">
              {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="28.931px" height="28.932px" viewBox="0 0 28.931 28.932" style="enableBackground:new 0 0 28.931 28.932;" xmlSpace="preserve"><g><path d="M28.344,25.518l-6.114-6.115c1.486-2.067,2.303-4.537,2.303-7.137c0-3.275-1.275-6.355-3.594-8.672C18.625,1.278,15.543,0,12.266,0C8.99,0,5.909,1.275,3.593,3.594C1.277,5.909,0.001,8.99,0.001,12.266c0,3.276,1.275,6.356,3.592,8.674c2.316,2.316,5.396,3.594,8.673,3.594c2.599,0,5.067-0.813,7.136-2.303l6.114,6.115c0.392,0.391,0.902,0.586,1.414,0.586c0.513,0,1.024-0.195,1.414-0.586C29.125,27.564,29.125,26.299,28.344,25.518z M6.422,18.111c-1.562-1.562-2.421-3.639-2.421-5.846S4.86,7.983,6.422,6.421c1.561-1.562,3.636-2.422,5.844-2.422s4.284,0.86,5.845,2.422c1.562,1.562,2.422,3.638,2.422,5.845s-0.859,4.283-2.422,5.846c-1.562,1.562-3.636,2.42-5.845,2.42S7.981,19.672,6.422,18.111z"/></g></svg> */}
            </span>
            <input type="text" className="form-control" placeholder="search your product"/>
            <span className="input-group-text close-searchbar">
              {/* <svg viewBox="0 0 329.26933 329" xmlns="http://www.w3.org/2000/svg"><path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/></svg> */}
            </span>
          </div>
        </div>
      </div>
      <div className="category-header-2">
        <div className="custom-container">
          <div className="row">
            <div className="col-12">
              <div className="navbar-menu">
                <div className="logo-block">
                  <div className="brand-logo logo-sm-center">
                    <a href="index.html">
                      <img src="../../../public/assets/images/layout-2/logo/logo.png" className="img-fluid  " alt="logo"/>
                    </a>
                  </div>
                </div>
                <div className="nav-block">
    
                  <div className="nav-left" >
    
                    <nav className="navbar" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent">
                      <button className="navbar-toggler" type="button">
                        <span className="navbar-icon"><i className="fa fa-arrow-down"></i></span>
                      </button>
                      <h5 className="mb-0  text-white title-font">Shop by category</h5>
                    </nav>
                    <div className="collapse  nav-desk" id="navbarToggleExternalContent">
                      <ul className="nav-cat title-font">
                        <li> <a href="category-page(left-sidebar).html"><img src="../../assets/images/layout-1/nav-img/01.png" alt="category-product"/> western ware</a></li>
                        <li> <a href="category-page(left-sidebar).html"><img src="../../assets/images/layout-1/nav-img/02.png" alt="category-product"/> TV, Appliances</a></li>
                        <li> <a href="category-page(left-sidebar).html"><img src="../../assets/images/layout-1/nav-img/03.png" alt="category-product"/> Pets Products</a></li>
                        <li> <a href="category-page(left-sidebar).html"><img src="../../assets/images/layout-1/nav-img/04.png" alt="category-product"/> Car, Motorbike</a></li>
                        <li> <a href="category-page(left-sidebar).html"><img src="../../assets/images/layout-1/nav-img/05.png" alt="category-product"/> Industrial Products</a></li>
                        <li> <a href="category-page(left-sidebar).html"><img src="../../assets/images/layout-1/nav-img/06.png" alt="category-product"/> Beauty, Health Products</a></li>
                        <li> <a href="category-page(left-sidebar).html"><img src="../../assets/images/layout-1/nav-img/07.png" alt="category-product"/> Grocery Products </a></li>
                        <li> <a href="category-page(left-sidebar).html"><img src="../../assets/images/layout-1/nav-img/08.png" alt="category-product"/> Sports</a></li>
                        <li> <a href="category-page(left-sidebar).html"><img src="../../assets/images/layout-1/nav-img/09.png" alt="category-product"/> Bags, Luggage</a></li>
                        <li> <a href="category-page(left-sidebar).html"><img src="../../assets/images/layout-1/nav-img/10.png" alt="category-product"/> Movies, Music </a></li>
                        <li> <a href="category-page(left-sidebar).html"><img src="../../assets/images/layout-1/nav-img/11.png" alt="category-product"/> Video Games</a></li>
                        <li> <a href="category-page(left-sidebar).html"><img src="../../assets/images/layout-1/nav-img/12.png" alt="category-product"/> Toys, Baby Products</a></li>
                        <li>
                          <ul className="mor-slide-open">
                            <li> <a href="category-page(left-sidebar).html"><img src="../../../public/assets/images/layout-1/nav-img/08.png" alt="category-product"/> Sports</a></li>
                            <li> <a href="category-page(left-sidebar).html"><img src="../../../public/assets/images/layout-1/nav-img/09.png" alt="category-product"/> Bags, Luggage</a></li>
                            <li> <a href="category-page(left-sidebar).html"><img src="../../../public/assets/images/layout-1/nav-img/10.png" alt="category-product"/> Movies, Music </a></li>
                            <li> <a href="category-page(left-sidebar).html"><img src="../../../public/assets/images/layout-1/nav-img/11.png" alt="category-product"/> Video Games</a></li>
                            <li> <a href="category-page(left-sidebar).html"><img src="../../../public/assets/images/layout-1/nav-img/12.png" alt="category-product"/> Toys, Baby Products</a></li>
                          </ul>
                        </li>
                        <li>
                          <a className="mor-slide-click">mor category <i className="fa fa-angle-down pro-down"></i><i className="fa fa-angle-up pro-up"></i></a>
                        </li>
                      </ul>
                      
                    </div>
                  </div>
                </div>
                <div className="menu-block">
                  <nav id="main-nav">
                    <div className="toggle-nav"><i className="fa fa-bars sidebar-bar"></i></div>
                    <ul id="main-menu" className="sm pixelstrap sm-horizontal">
                      <li>
                        <div className="mobile-back text-right">Back<i className="fa fa-angle-right ps-2" aria-hidden="true"></i></div>
                      </li>
                      <li>
                        <a className="dark-menu-item" href="#">Home</a>
                        <ul>
                          <li><a  href="index.html">mega store 1</a></li>
                          <li><a  href="layout-2.html">mega store 2</a></li>
                          <li><a  href="layout-3.html">mega store 3</a></li>
                          <li><a  href="layout-4.html">mega store 4</a></li>
                          <li><a  href="megastore.html">mega store 5</a></li>
                          <li><a  href="layout-5.html">electronics</a></li>
                          <li><a  href="layout-6.html">vegetable</a></li>
                          <li><a  href="furniture.html">furniture</a></li>
                          <li><a  href="cosmetic.html">cosmetic</a></li>
                          <li><a  href="kids.html">kids</a></li>
                          <li><a  href="tools.html">tools</a></li>
                          <li><a  href="grocery.html">grocery</a></li>
                          <li><a  href="pets.html">pets</a></li>
                          <li><a  href="farming.html">farming</a></li>
                          <li><a  href="digital-marketplace.html">digital marketplace</a></li>
                        </ul>
                      </li>
                      <li>
                        <a className="dark-menu-item" href="#">shop</a>
                        <ul>
                          <li><a href="category-page(left-sidebar).html">left sidebar</a></li>
                          <li><a href="category-page(right-sidebar).html">right sidebar</a></li>
                          <li><a href="category-page(no-sidebar).html">no sidebar</a></li>
                          <li><a href="category-page(sidebar-popup).html">sidebar popup</a></li>
                          <li><a href="category-page(metro).html">metro </a></li>
                          <li><a href="category-page(full-width).html">full width </a></li>
                          <li><a href="category-page(infinite-scroll).html">infinite scroll</a></li>
                          <li><a href="category-page(3-grid).html">3 grid</a></li>
                          <li><a href="category-page(6-grid).html">6 grid</a></li>
                          <li><a href="category-page(list-view).html">list view</a></li>
                        </ul>
                      </li>
                      <li className="mega"><a  className="dark-menu-item" href="#">product
                      </a>
                        <ul className="mega-menu full-mega-menu ">
                          <li>
                            <div className="container">
                              <div className="row">
                                <div className="col mega-box">
                                  <div className="link-section">
                                    <div className="menu-title">
                                      <h5>sidebar</h5>
                                    </div>
                                    <div className="menu-content">
                                      <ul>
                                        <li><a href="product-page(left-sidebar).html">left sidebar</a></li>
                                        <li><a href="product-page(right-sidebar).html">right sidebar</a></li>
                                        <li><a href="product-page(no-sidebar).html">non sidebar</a></li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="col mega-box">
                                  <div className="link-section">
                                    <div className="menu-title">
                                      <h5>bonus layout</h5>
                                    </div>
                                    <div className="menu-content">
                                      <ul>
                                        <li><a href="product-page(bundle).html">bundle</a></li>
                                        <li><a href="product-page(image-swatch).html">image swatch</a></li>
                                        <li><a href="product-page(vertical-tab).html">vertical tab</a></li>
                                        <li><a href="product-page(video-thumbnail).html">video thumbnail</a></li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="col mega-box">
                                  <div className="link-section">
                                    <div className="menu-title">
                                      <h5>product layout </h5>
                                    </div>
                                    <div className="menu-content">
                                      <ul>
                                        <li><a href="product-page(4-image).html">4 image </a></li>
                                        <li><a href="product-page(sticky).html">sticky</a></li>
                                        <li><a href="product-page(accordian).html">accordian</a></li>
                                        <li><a href="product-page(360-view).html">360 view</a></li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="col mega-box">
                                  <div className="link-section">
                                    <div className="menu-title">
                                      <h5>thumbnail image</h5>
                                    </div>
                                    <div className="menu-content">
                                      <ul>
                                        <li><a href="product-page(left-image).html">left image</a></li>
                                        <li><a href="product-page(right-image).html">right image</a></li>
                                        <li><a href="product-page(image-outside).html">image outside</a></li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="col mega-box">
                                  <div className="link-section">
                                    <div className="menu-title">
                                      <h5>3 column</h5>
                                    </div>
                                    <div className="menu-content">
                                      <ul>
                                        <li><a href="product-page(3-col-left).html">thumbnail left</a></li>
                                        <li><a href="product-page(3-col-right).html">thumbnail right</a></li>
                                        <li><a href="product-page(3-column).html">thubnail bottom</a></li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="col mega-box">
                                  <div className="link-section">
                                    <div className="menu-title">
                                      <h5>product element</h5>
                                    </div>
                                    <div className="menu-content">
                                      <ul>
                                        <li><a href="element-productbox.html">product box</a></li>
                                        <li><a href="element-product-slider.html">product slider</a></li>
                                        <li><a href="element-no_slider.html">no slider</a></li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row menu-banner">
                                <div className="col-lg-6">
                                  <div>
                                    <img src="../../../public/assets/images/menu-banner1.jpg" alt="menu-banner" className="img-fluid"/>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div>
                                    <img src="../../../public/assets/images/menu-banner2.jpg" alt="menu-banner" className="img-fluid"/>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a  className="dark-menu-item" href="#">pages</a>
                        <ul>
                          <li>
                            <a href="#">invoice<span className="new-tag">new</span></a>
                            <ul>
                              <li><a href="./invoice-template/element-invoice.html">invoice one</a></li>
                              <li><a href="./invoice-template/element-invoice2.html">invoice two</a></li>
                              <li><a href="./invoice-template/element-invoice3.html">invoice three</a></li>
                              <li><a href="./invoice-template/element-invoice4.html">invoice four</a></li>
                              <li><a href="./invoice-template/element-invoice5.html">invoice five</a></li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">account</a>
                            <ul>
                              <li><a href="wishlist.html">wishlist</a></li>
                              <li><a href="cart.html">cart</a></li>
                              <li><a href="dashboard.html">Dashboard</a></li>
                              <li><a href="login.html">login</a></li>
                              <li><a href="register.html">register</a></li>
                              <li><a href="contact.html">contact</a></li>
                              <li><a href="forget-pwd.html">forget password</a></li>
                              <li><a href="profile.html">profile </a></li>
                              <li>
                                <a href="#">checkout</a>
                                <ul>
                                  <li><a href="checkout.html">checkout 1</a></li>
                                  <li><a href="checkout2.html">checkout 2<span className="new-tag">new</span></a></li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li><a href="about-page.html">about us</a></li>
                          <li><a href="search.html">search</a></li>
                          <li><a href="typography.html">typography </a></li>
                          <li><a href="review.html">review </a></li>
                          <li><a href="order-success.html">order success</a></li>
                          <li><a href="order-history.html">order history</a></li>
                          <li><a href="order-tracking.html">order tracking</a></li>
                          <li>
                            <a href="#">compare</a>
                            <ul>
                              <li><a href="compare.html">compare</a></li>
                              <li><a href="compare-2.html">compare-2</a></li>
                            </ul>
                          </li>
                          <li><a href="collection.html">collection</a></li>
                          <li><a href="look-book.html">lookbook</a></li>
                          <li><a href="404.html">404</a></li>
                          <li><a href="coming-soon.html">coming soon </a></li>
                          <li><a href="faq.html">FAQ</a></li>
                        </ul>
                      </li>
                      <li>
                        <a  className="dark-menu-item" href="#">blog</a>
                        <ul>
                          <li><a href="blog(left-sidebar).html">left sidebar</a></li>
                          <li><a href="blog(right-sidebar).html">right sidebar</a></li>
                          <li><a href="blog(no-sidebar).html">no sidebar</a></li>
                          <li><a href="blog-details.html">blog details</a></li>
                          <li><a href="blog-creative(left-sidebar).html">creative left sidebar</a></li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="icon-block">
                  <ul>
                    <li className="mobile-search">
                      <a href="#">
                        {/* <svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             viewBox="0 0 612.01 612.01" style="enableBackground:new 0 0 612.01 612.01;"
                             xmlSpace="preserve">
                        <g>
                          <g >
                            <g>
                              <path d="M606.209,578.714L448.198,423.228C489.576,378.272,515,318.817,515,253.393C514.98,113.439,399.704,0,257.493,0
                                C115.282,0,0.006,113.439,0.006,253.393s115.276,253.393,257.487,253.393c61.445,0,117.801-21.253,162.068-56.586
                                l158.624,156.099c7.729,7.614,20.277,7.614,28.006,0C613.938,598.686,613.938,586.328,606.209,578.714z M257.493,467.8
                                c-120.326,0-217.869-95.993-217.869-214.407S137.167,38.986,257.493,38.986c120.327,0,217.869,95.993,217.869,214.407
                                S377.82,467.8,257.493,467.8z"/>
                            </g>
                          </g>
                        </g>
                        </svg> */}
                      </a>
                    </li>
                    <li className="mobile-user onhover-dropdown"  >
                      <a href="#">
                        {/* <svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             viewBox="0 0 512 512" style="enableBackground:new 0 0 512 512;" xmlSpace="preserve">
                          <g>
                            <g>
                              <path d="M256,0c-74.439,0-135,60.561-135,135s60.561,135,135,135s135-60.561,135-135S330.439,0,256,0z M256,240
                                c-57.897,0-105-47.103-105-105c0-57.897,47.103-105,105-105c57.897,0,105,47.103,105,105C361,192.897,313.897,240,256,240z"/>
                            </g>
                          </g>
                          <g>
                            <g>
                              <path d="M297.833,301h-83.667C144.964,301,76.669,332.951,31,401.458V512h450V401.458C435.397,333.05,367.121,301,297.833,301z
                                 M451.001,482H451H61v-71.363C96.031,360.683,152.952,331,214.167,331h83.667c61.215,0,118.135,29.683,153.167,79.637V482z"/>
                            </g>
                          </g>
                        </svg> */}
                      </a>
                    </li>
                    <li className="mobile-setting" >
                      <a href="#">
                        <svg  enableBackground="new 0 0 512 512"  viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg"><path d="m272.066 512h-32.133c-25.989 0-47.134-21.144-47.134-47.133v-10.871c-11.049-3.53-21.784-7.986-32.097-13.323l-7.704 7.704c-18.659 18.682-48.548 18.134-66.665-.007l-22.711-22.71c-18.149-18.129-18.671-48.008.006-66.665l7.698-7.698c-5.337-10.313-9.792-21.046-13.323-32.097h-10.87c-25.988 0-47.133-21.144-47.133-47.133v-32.134c0-25.989 21.145-47.133 47.134-47.133h10.87c3.531-11.05 7.986-21.784 13.323-32.097l-7.704-7.703c-18.666-18.646-18.151-48.528.006-66.665l22.713-22.712c18.159-18.184 48.041-18.638 66.664.006l7.697 7.697c10.313-5.336 21.048-9.792 32.097-13.323v-10.87c0-25.989 21.144-47.133 47.134-47.133h32.133c25.989 0 47.133 21.144 47.133 47.133v10.871c11.049 3.53 21.784 7.986 32.097 13.323l7.704-7.704c18.659-18.682 48.548-18.134 66.665.007l22.711 22.71c18.149 18.129 18.671 48.008-.006 66.665l-7.698 7.698c5.337 10.313 9.792 21.046 13.323 32.097h10.87c25.989 0 47.134 21.144 47.134 47.133v32.134c0 25.989-21.145 47.133-47.134 47.133h-10.87c-3.531 11.05-7.986 21.784-13.323 32.097l7.704 7.704c18.666 18.646 18.151 48.528-.006 66.665l-22.713 22.712c-18.159 18.184-48.041 18.638-66.664-.006l-7.697-7.697c-10.313 5.336-21.048 9.792-32.097 13.323v10.871c0 25.987-21.144 47.131-47.134 47.131zm-106.349-102.83c14.327 8.473 29.747 14.874 45.831 19.025 6.624 1.709 11.252 7.683 11.252 14.524v22.148c0 9.447 7.687 17.133 17.134 17.133h32.133c9.447 0 17.134-7.686 17.134-17.133v-22.148c0-6.841 4.628-12.815 11.252-14.524 16.084-4.151 31.504-10.552 45.831-19.025 5.895-3.486 13.4-2.538 18.243 2.305l15.688 15.689c6.764 6.772 17.626 6.615 24.224.007l22.727-22.726c6.582-6.574 6.802-17.438.006-24.225l-15.695-15.695c-4.842-4.842-5.79-12.348-2.305-18.242 8.473-14.326 14.873-29.746 19.024-45.831 1.71-6.624 7.684-11.251 14.524-11.251h22.147c9.447 0 17.134-7.686 17.134-17.133v-32.134c0-9.447-7.687-17.133-17.134-17.133h-22.147c-6.841 0-12.814-4.628-14.524-11.251-4.151-16.085-10.552-31.505-19.024-45.831-3.485-5.894-2.537-13.4 2.305-18.242l15.689-15.689c6.782-6.774 6.605-17.634.006-24.225l-22.725-22.725c-6.587-6.596-17.451-6.789-24.225-.006l-15.694 15.695c-4.842 4.843-12.35 5.791-18.243 2.305-14.327-8.473-29.747-14.874-45.831-19.025-6.624-1.709-11.252-7.683-11.252-14.524v-22.15c0-9.447-7.687-17.133-17.134-17.133h-32.133c-9.447 0-17.134 7.686-17.134 17.133v22.148c0 6.841-4.628 12.815-11.252 14.524-16.084 4.151-31.504 10.552-45.831 19.025-5.896 3.485-13.401 2.537-18.243-2.305l-15.688-15.689c-6.764-6.772-17.627-6.615-24.224-.007l-22.727 22.726c-6.582 6.574-6.802 17.437-.006 24.225l15.695 15.695c4.842 4.842 5.79 12.348 2.305 18.242-8.473 14.326-14.873 29.746-19.024 45.831-1.71 6.624-7.684 11.251-14.524 11.251h-22.148c-9.447.001-17.134 7.687-17.134 17.134v32.134c0 9.447 7.687 17.133 17.134 17.133h22.147c6.841 0 12.814 4.628 14.524 11.251 4.151 16.085 10.552 31.505 19.024 45.831 3.485 5.894 2.537 13.4-2.305 18.242l-15.689 15.689c-6.782 6.774-6.605 17.634-.006 24.225l22.725 22.725c6.587 6.596 17.451 6.789 24.225.006l15.694-15.695c3.568-3.567 10.991-6.594 18.244-2.304z"/><path d="m256 367.4c-61.427 0-111.4-49.974-111.4-111.4s49.973-111.4 111.4-111.4 111.4 49.974 111.4 111.4-49.973 111.4-111.4 111.4zm0-192.8c-44.885 0-81.4 36.516-81.4 81.4s36.516 81.4 81.4 81.4 81.4-36.516 81.4-81.4-36.515-81.4-81.4-81.4z"/></svg>
                      </a>
                    </li>
                    <li className="mobile-wishlist item-count" >
                      <a href="#">
                        {/* <svg viewBox="0 -28 512.001 512" xmlns="http://www.w3.org/2000/svg"><path d="m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm-112.96875-425.523437c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0"/></svg> */}
                        <div className="cart-item">
                          <div>0 item<span>wishlist</span>
                          </div>
                        </div>
                        <div className="item-count-contain" >
                          2
                        </div>
                      </a>
                    </li>
                    <li className="mobile-cart item-count" >
                      <a href="#">
                        {/* <svg  enableBackground="new 0 0 512 512"  viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg"><g><path d="m497 401.667c-415.684 0-397.149.077-397.175-.139-4.556-36.483-4.373-34.149-4.076-34.193 199.47-1.037-277.492.065 368.071.065 26.896 0 47.18-20.377 47.18-47.4v-203.25c0-19.7-16.025-35.755-35.725-35.79l-124.179-.214v-31.746c0-17.645-14.355-32-32-32h-29.972c-17.64 0-31.99 14.351-31.99 31.99v31.594l-133.21-.232-9.985-54.992c-2.667-14.694-15.443-25.36-30.378-25.36h-68.561c-8.284 0-15 6.716-15 15s6.716 15 15 15c72.595 0 69.219-.399 69.422.719 16.275 89.632 5.917 26.988 49.58 306.416l-38.389.2c-18.027.069-32.06 15.893-29.81 33.899l4.252 34.016c1.883 15.06 14.748 26.417 29.925 26.417h26.62c-18.8 36.504 7.827 80.333 49.067 80.333 41.221 0 67.876-43.813 49.067-80.333h142.866c-18.801 36.504 7.827 80.333 49.067 80.333 41.22 0 67.875-43.811 49.066-80.333h31.267c8.284 0 15-6.716 15-15s-6.716-15-15-15zm-209.865-352.677c0-1.097.893-1.99 1.99-1.99h29.972c1.103 0 2 .897 2 2v111c0 8.284 6.716 15 15 15h22.276l-46.75 46.779c-4.149 4.151-10.866 4.151-15.015 0l-46.751-46.779h22.277c8.284 0 15-6.716 15-15v-111.01zm-30 61.594v34.416h-25.039c-20.126 0-30.252 24.394-16.014 38.644l59.308 59.342c15.874 15.883 41.576 15.885 57.452 0l59.307-59.342c14.229-14.237 4.13-38.644-16.013-38.644h-25.039v-34.254l124.127.214c3.186.005 5.776 2.603 5.776 5.79v203.25c0 10.407-6.904 17.4-17.18 17.4h-299.412l-35.477-227.039zm-56.302 346.249c0 13.877-11.29 25.167-25.167 25.167s-25.166-11.29-25.166-25.167 11.29-25.167 25.167-25.167 25.166 11.291 25.166 25.167zm241 0c0 13.877-11.289 25.167-25.166 25.167s-25.167-11.29-25.167-25.167 11.29-25.167 25.167-25.167 25.166 11.291 25.166 25.167z"/></g></svg> */}
                      </a>
                      <div className="item-count-contain">
                        3
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="category-right">
                  <div className="contact-block">
                    <div>
                      <i className="fa fa-volume-control-phone"></i>
                      <span>call us<span>123-456-76890</span></span>
                    </div>
                  </div>
                  <div className="btn-group">
                    <div  className="gift-block" data-bs-toggle="dropdown">
                      <div className="grif-icon">
                        <i className="icon-gift"></i>
                      </div>
                      <div className="gift-offer">
                        <p>gift box</p>
                        <span>Festivel Offer</span>
                      </div>
                    </div>
                    <div className="dropdown-menu gift-dropdown">
                      <div className="media">
                        <div  className="me-3">
                          <img src="../../../public/assets/images/icon/1.png" alt="Generic placeholder"/>
                        </div>
                        <div className="media-body">
                          <h5 className="mt-0">Billion Days</h5>
                          <p><img src="../../../public/assets/images/icon/currency.png" className="cash" alt="curancy"/> Flat Rs. 270 Rewards</p>
                        </div>
                      </div>
                      <div className="media">
                        <div  className="me-3">
                          <img src="../../../public/assets/images/icon/2.png" alt="Generic placeholder" className="gift-bloc"/>
                        </div>
                        <div className="media-body">
                          <h5 className="mt-0">Fashion Discount</h5>
                          <p><img src="../../../public/assets/images/icon/fire.png"  className="fire" alt="fire"/>Extra 10% off (upto Rs. 10,000*) </p>
                        </div>
                      </div>
                      <div className="media">
                        <div  className="me-3">
                          <img src="../../../public/assets/images/icon/3.png" alt="Generic placeholder"/>
                        </div>
                        <div className="media-body">
                          <h5 className="mt-0">75% off Store</h5>
                          <p>No coupon code is required.</p>
                        </div>
                      </div>
                      <div className="media">
                        <div  className="me-3">
                          <img src="../../../public/assets/images/icon/6.png" alt="Generic placeholder"/>
                        </div>
                        <div className="media-body">
                          <h5 className="mt-0">Upto 50% off</h5>
                          <p>Buy popular phones under Rs.20.</p>
                        </div>
                      </div>
                      <div className="media">
                        <div  className="me-3">
                          <img src="../../../public/assets/images/icon/5.png" alt="Generic placeholder"/>
                        </div>
                        <div className="media-body">
                          <h5 className="mt-0">Beauty store</h5>
                          <p><img src="../../../public/assets/images/icon/currency.png" className="cash" alt="curancy"/> Flat Rs. 270 Rewards</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="searchbar-input">
          <div className="input-group">       
            <span className="input-group-text">
              {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="28.931px" height="28.932px" viewBox="0 0 28.931 28.932" style="enableBackground:new 0 0 28.931 28.932;" xmlSpace="preserve"><g><path d="M28.344,25.518l-6.114-6.115c1.486-2.067,2.303-4.537,2.303-7.137c0-3.275-1.275-6.355-3.594-8.672C18.625,1.278,15.543,0,12.266,0C8.99,0,5.909,1.275,3.593,3.594C1.277,5.909,0.001,8.99,0.001,12.266c0,3.276,1.275,6.356,3.592,8.674c2.316,2.316,5.396,3.594,8.673,3.594c2.599,0,5.067-0.813,7.136-2.303l6.114,6.115c0.392,0.391,0.902,0.586,1.414,0.586c0.513,0,1.024-0.195,1.414-0.586C29.125,27.564,29.125,26.299,28.344,25.518z M6.422,18.111c-1.562-1.562-2.421-3.639-2.421-5.846S4.86,7.983,6.422,6.421c1.561-1.562,3.636-2.422,5.844-2.422s4.284,0.86,5.845,2.422c1.562,1.562,2.422,3.638,2.422,5.845s-0.859,4.283-2.422,5.846c-1.562,1.562-3.636,2.42-5.845,2.42S7.981,19.672,6.422,18.111z"/></g></svg> */}
            </span>
            <input type="text" className="form-control" placeholder="search your product"/>
            <span className="input-group-text close-searchbar">
              {/* <svg viewBox="0 0 329.26933 329" xmlns="http://www.w3.org/2000/svg"><path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/></svg> */}
            </span>
          </div>
        </div>
      </div>
    </header>
    </Fragment>
  )
}

export default Header