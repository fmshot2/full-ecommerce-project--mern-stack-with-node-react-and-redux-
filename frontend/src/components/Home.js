import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import { getProducts } from '../actions/productActions';
import MetaData from './layout/MetaData'
import Product from './product/Product';
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './layout/Loader'
import { useAlert } from 'react-alert';
import Pagination from 'react-js-pagination';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons'
// import { faStar as fasFaStar } from '@fortawesome/free-solid-svg-icons'

const attributeElements = {
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "xml:space": "preserve",
};

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range)

const Home = () => {
  
  const [currentPage, setcurrentPage] = useState(1)
  const [category, setCategory] = useState('')
  const [keyword, setKeyword] = useState('')
  const [price, setPrice] = useState([1, 1000])
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, products, error, productsCount, resPerPage } = useSelector(state => state.products)
  const location = useLocation();
  const [rating, setRating] = useState(0)
  const totalStars = 5;
  const activeStars = 0;


  const categories = [
    'Electronics',
    'Cameras',
    'Laptops',
    'Accessories',
    'Headphones',
    'Food',
    'Books',
    'Clothes/Shoes',
    'Beauty/Health',
    'Sports',
    'Outdoor',
    'Home'
  ]


  if (location.state !== null && location.pathname === `/search/${location.state.keyword}`) {
    location.state.keyword = setKeyword(location.state.keyword)
  }
  console.log('dloca', location);


  if (location.state == null) {
    location.state = {
      ...location.state,
      keyword: ''
    }
    location.state.keyword = setKeyword(location.state.keyword)
  }


  useEffect(() => {
   
    if (error) {
      return alert.error(error)
    }
    dispatch(getProducts(keyword, currentPage, price, category, rating));

  }
    , [dispatch, alert, error, keyword, currentPage, price, category, rating])

  function setCurrentPageNo(pageNumber) {
    setcurrentPage(pageNumber)
  }

  return (
    <Fragment>
            {loading ? <Loader /> : (
              <Fragment>
      <MetaData title={"Buy Best Products"} />
      <main>
        {/* collection banner start */}

        <section className="collection-banner section-py-space">
          <div className="custom-container">
            <div className="row layout-4-collection">
              <div className="col-md-4  ">
                <div
                  className="collection-banner-main p-left  height-equal"
                  style={{ minHeight: "235px" }}
                >
                  <div
                    className="collection-img bg-size"
                    style={{
                      backgroundImage:
                        'url("../assets/images/layout-4/collection-banner/1.jpg")',
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      display: "block",
                    }}
                  >
                    {" "}
                    <img
                      src="../assets/images/layout-4/collection-banner/1.jpg"
                      className="img-fluid bg-img"
                      alt="banner"
                      style={{ display: "none" }}
                    />{" "}
                  </div>
                  <div className="collection-banner-contain">
                    <div>
                      <h3>vivo</h3>
                      <h4>smart phone</h4>
                      <div className="shop">
                        {" "}
                        <a href="product-page(left-sidebar).html">
                          shop now
                          <i className="fa fa-arrow-circle-right"></i>
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4  ">
                <div
                  className="collection-banner-main p-left  height-equal"
                  style={{ minHeight: "235px" }}
                >
                  <div
                    className="collection-img  bg-size"
                    style={{
                      backgroundImage:
                        'url("../assets/images/layout-1/collection-banner/2.jpg")',
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      display: "block",
                    }}
                  >
                    {" "}
                    <img
                      src="../assets/images/layout-1/collection-banner/2.jpg"
                      className="img-fluid bg-img"
                      alt="banner"
                      style={{ display: "none" }}
                    />{" "}
                  </div>
                  <div className="collection-banner-contain">
                    <div>
                      <h3>hand</h3>
                      <h4>lether bag</h4>
                      <div className="shop">
                        {" "}
                        <a href="product-page(left-sidebar).html">
                          shop now
                          <i className="fa fa-arrow-circle-right"></i>
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2 ">
                <div
                  className="collection-banner-main p-left banner-8 height-equal"
                  style={{ minHeight: "235px" }}
                >
                  <div className="collection-banner-contain">
                    <div>
                      <h3>extra</h3>
                      <h3>50% off</h3>
                      <h1>sale</h1>
                      <h6>free shipping</h6>
                      <div className="shop">
                        {" "}
                        <a href="product-page(left-sidebar).html">
                          shop now
                          <i className="fa fa-arrow-circle-right"></i>
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--collection banner end-->*/}

        {/* <!--top brand panel start--> */}
        <section className="brand-panel section-py-space">
          <div className="brand-panel-box">
            <div className="brand-panel-contain">
              <ul>
                <li>
                  <a href="#">top brand</a>
                </li>
                <li>
                  <a>:</a>
                </li>
                <li>
                  <a href="#">aerie</a>
                </li>
                <li>
                  <a href="#">baci lingrie</a>
                </li>
                <li>
                  <a href="#">gerbe</a>
                </li>
                <li>
                  <a href="#">jolidon</a>
                </li>
                <li>
                  <a href="#">oysho</a>
                </li>
                <li>
                  <a href="#">ultimo</a>
                </li>
                <li>
                  <a href="#">vassarette</a>
                </li>
                <li>
                  <a href="#">wonderbra</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* <!--top brand panel end--> */}

        {/* <!--hot deal start--> */}
        <section>
          <div className="custom-container ">
            <div className="row hot-4">
              <div className="col-md-2 pr-lg-0  ">
                <div className="media-banner banner-inverse b-g-white1 border-0 media-banner-2">
                  <div className="media-banner-box">
                    <div className="media-heading">
                      <h5>on sale</h5>{" "}
                    </div>
                  </div>
                  <div className="media-banner-box">
                    <div className="media">
                      <a href="product-page(left-sidebar).html" tabIndex="0">
                        {" "}
                        <img
                          src="../assets/images/layout-1/media-banner/1.jpg"
                          className="img-fluid  "
                          alt="banner"
                        />{" "}
                      </a>
                      <div className="media-body">
                        <div className="media-contant">
                          <div>
                            <div className="product-detail">
                              <ul className="rating">
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star-o"></i>
                                </li>
                              </ul>
                              <a
                                href="product-page(left-sidebar).html"
                                tabIndex="0"
                              >
                                <p> multicolor dresh</p>
                              </a>
                              <h6>$30.00</h6>{" "}
                            </div>
                            <div className="cart-info">
                              <button
                                className="tooltip-top"
                                data-tippy-content="Add to cart"
                              >
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-shopping-cart"
                                >
                                  <circle cx="9" cy="21" r="1"></circle>
                                  <circle cx="20" cy="21" r="1"></circle>
                                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                </svg>{" "}
                              </button>{" "}
                              <a
                                href="#"
                                className="add-to-wish tooltip-top"
                                data-tippy-content="Add to Wishlist"
                              >
                                <i
                                  data-feather="heart"
                                  className="add-to-wish"
                                ></i>
                              </a>{" "}
                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#quick-view"
                                className="tooltip-top"
                                data-tippy-content="Quick View"
                              >
                                <i data-feather="eye"></i>
                              </a>{" "}
                              <a
                                href="compare.html"
                                className="tooltip-top"
                                data-tippy-content="Compare"
                              >
                                <i data-feather="refresh-cw"></i>
                              </a>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="media-banner-box">
                    <div className="media">
                      <a href="product-page(left-sidebar).html" tabIndex="0">
                        {" "}
                        <img
                          src="../assets/images/layout-1/media-banner/2.jpg"
                          className="img-fluid  "
                          alt="banner"
                        />{" "}
                      </a>
                      <div className="media-body">
                        <div className="media-contant">
                          <div>
                            <div className="product-detail">
                              <ul className="rating">
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star-o"></i>
                                </li>
                              </ul>
                              <a
                                href="product-page(left-sidebar).html"
                                tabIndex="0"
                              >
                                <p> Leriya Fashion</p>
                              </a>
                              <h6>$35.00</h6>{" "}
                            </div>
                            <div className="cart-info">
                              <button
                                className="tooltip-top"
                                data-tippy-content="Add to cart"
                              >
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-shopping-cart"
                                >
                                  <circle cx="9" cy="21" r="1"></circle>
                                  <circle cx="20" cy="21" r="1"></circle>
                                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                </svg>{" "}
                              </button>{" "}
                              <a
                                href="#"
                                className="add-to-wish tooltip-top"
                                data-tippy-content="Add to Wishlist"
                              >
                                <i
                                  data-feather="heart"
                                  className="add-to-wish"
                                ></i>
                              </a>{" "}
                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#quick-view"
                                className="tooltip-top"
                                data-tippy-content="Quick View"
                              >
                                <i data-feather="eye"></i>
                              </a>{" "}
                              <a
                                href="compare.html"
                                className="tooltip-top"
                                data-tippy-content="Compare"
                              >
                                <i data-feather="refresh-cw"></i>
                              </a>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="media-banner-box">
                    <div className="media">
                      <a href="product-page(left-sidebar).html" tabIndex="0">
                        {" "}
                        <img
                          src="../assets/images/layout-1/media-banner/3.jpg"
                          className="img-fluid  "
                          alt="banner"
                        />{" "}
                      </a>
                      <div className="media-body">
                        <div className="media-contant">
                          <div>
                            <div className="product-detail">
                              <ul className="rating">
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star-o"></i>
                                </li>
                              </ul>
                              <a
                                href="product-page(left-sidebar).html"
                                tabIndex="0"
                              >
                                <p> Leriya Fashion</p>
                              </a>
                              <h6>$60.00</h6>{" "}
                            </div>
                            <div className="cart-info">
                              <button
                                className="tooltip-top"
                                data-tippy-content="Add to cart"
                              >
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-shopping-cart"
                                >
                                  <circle cx="9" cy="21" r="1"></circle>
                                  <circle cx="20" cy="21" r="1"></circle>
                                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                </svg>{" "}
                              </button>{" "}
                              <a
                                href="#"
                                className="add-to-wish tooltip-top"
                                data-tippy-content="Add to Wishlist"
                              >
                                <i
                                  data-feather="heart"
                                  className="add-to-wish"
                                ></i>
                              </a>{" "}
                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#quick-view"
                                className="tooltip-top"
                                data-tippy-content="Quick View"
                              >
                                <i data-feather="eye"></i>
                              </a>{" "}
                              <a
                                href="compare.html"
                                className="tooltip-top"
                                data-tippy-content="Compare"
                              >
                                <i data-feather="refresh-cw"></i>
                              </a>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="media-banner-box">
                    <div className="media">
                      <a href="product-page(left-sidebar).html" tabIndex="0">
                        {" "}
                        <img
                          src="../assets/images/layout-1/media-banner/4.jpg"
                          className="img-fluid  "
                          alt="banner"
                        />{" "}
                      </a>
                      <div className="media-body">
                        <div className="media-contant">
                          <div>
                            <div className="product-detail">
                              <ul className="rating">
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star-o"></i>
                                </li>
                              </ul>
                              <a
                                href="product-page(left-sidebar).html"
                                tabIndex="0"
                              >
                                <p> Maroon dresh</p>
                              </a>
                              <h6>$80.00</h6>{" "}
                            </div>
                            <div className="cart-info">
                              <button
                                className="tooltip-top"
                                data-tippy-content="Add to cart"
                              >
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-shopping-cart"
                                >
                                  <circle cx="9" cy="21" r="1"></circle>
                                  <circle cx="20" cy="21" r="1"></circle>
                                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                </svg>{" "}
                              </button>{" "}
                              <a
                                href="#"
                                className="add-to-wish tooltip-top"
                                data-tippy-content="Add to Wishlist"
                              >
                                <i
                                  data-feather="heart"
                                  className="add-to-wish"
                                ></i>
                              </a>{" "}
                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#quick-view"
                                className="tooltip-top"
                                data-tippy-content="Quick View"
                              >
                                <i data-feather="eye"></i>
                              </a>{" "}
                              <a
                                href="compare.html"
                                className="tooltip-top"
                                data-tippy-content="Compare"
                              >
                                <i data-feather="refresh-cw"></i>
                              </a>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8 ">
                <div className="hot-deal layout-4 hotdeal-third">
                  <div className="title1 pb-0 text-left ps-5">
                    <h4>today's hot deal</h4>{" "}
                  </div>
                  <div className="slide-1 no-arrow">
                    <div>
                      <div className="hot-deal-contain   deal-abjust b-g-white1 ">
                        <div className="row hot-deal-subcontain">
                          <div className="col-lg-4 col-md-4">
                            <div className="hotdeal-right-slick border">
                              <div>
                                <a href="product-page(left-sidebar).html">
                                  <div className="img-wrraper">
                                    <div>
                                      {" "}
                                      <img
                                        src="../assets/images/layout-2/hot-deal/8.jpg"
                                        alt="hot-deal"
                                        className="img-fluid bg-img "
                                      />{" "}
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="hotdeal-right-slick">
                              <div>
                                <div>
                                  <a href="product-page(left-sidebar).html">
                                    <h5>oppo find x2 </h5>{" "}
                                  </a>
                                  <ul className="rating">
                                    <li>
                                      <i className="fa fa-star"></i>
                                    </li>
                                    <li>
                                      <i className="fa fa-star"></i>
                                    </li>
                                    <li>
                                      <i className="fa fa-star"></i>
                                    </li>
                                    <li>
                                      <i className="fa fa-star"></i>
                                    </li>
                                    <li>
                                      <i className="fa fa-star-o"></i>
                                    </li>
                                  </ul>
                                  <p>
                                    {" "}
                                    It is a long established fact that a reader.
                                    It is a long established fact that a
                                    reader.It is a long established fact that a
                                    reader. It is a long established fact that a
                                    reader.{" "}
                                  </p>
                                  <h6>
                                    $45.00<span>$50.30</span>
                                  </h6>
                                  <div className="timer">
                                    <p id="demo"> </p>
                                  </div>{" "}
                                  <a
                                    href="product-page(left-sidebar).html"
                                    className="btn btn-normal btn-md"
                                  >
                                    shop now
                                  </a>{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="hotdeal-right-nav">
                              <div>
                                {" "}
                                <img
                                  src="../assets/images/layout-2/hot-deal/8.jpg"
                                  alt="hot-deal"
                                  className="img-fluid  "
                                />{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2 p-l-md-0 ">
                <div className="media-banner  banner-inverse b-g-white1 border-0 media-banner-2">
                  <div className="media-banner-box">
                    <div className="media-heading">
                      <h5>on sale</h5>{" "}
                    </div>
                  </div>
                  <div className="media-banner-box">
                    <div className="media">
                      <a href="product-page(left-sidebar).html" tabIndex="0">
                        {" "}
                        <img
                          src="../assets/images/layout-1/media-banner/3.jpg"
                          className="img-fluid  "
                          alt="banner"
                        />{" "}
                      </a>
                      <div className="media-body">
                        <div className="media-contant">
                          <div>
                            <div className="product-detail">
                              <ul className="rating">
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star-o"></i>
                                </li>
                              </ul>
                              <a
                                href="product-page(left-sidebar).html"
                                tabIndex="0"
                              >
                                <p> Leriya Fashion</p>
                              </a>
                              <h6>$60.00</h6>{" "}
                            </div>
                            <div className="cart-info">
                              <button
                                className="tooltip-top"
                                data-tippy-content="Add to cart"
                              >
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-shopping-cart"
                                >
                                  <circle cx="9" cy="21" r="1"></circle>
                                  <circle cx="20" cy="21" r="1"></circle>
                                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                </svg>{" "}
                              </button>{" "}
                              <a
                                href="#"
                                className="add-to-wish tooltip-top"
                                data-tippy-content="Add to Wishlist"
                              >
                                <i
                                  data-feather="heart"
                                  className="add-to-wish"
                                ></i>
                              </a>{" "}
                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#quick-view"
                                className="tooltip-top"
                                data-tippy-content="Quick View"
                              >
                                <i data-feather="eye"></i>
                              </a>{" "}
                              <a
                                href="compare.html"
                                className="tooltip-top"
                                data-tippy-content="Compare"
                              >
                                <i data-feather="refresh-cw"></i>
                              </a>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="media-banner-box">
                    <div className="media">
                      <a href="product-page(left-sidebar).html" tabIndex="0">
                        {" "}
                        <img
                          src="../assets/images/layout-1/media-banner/4.jpg"
                          className="img-fluid  "
                          alt="banner"
                        />{" "}
                      </a>
                      <div className="media-body">
                        <div className="media-contant">
                          <div>
                            <div className="product-detail">
                              <ul className="rating">
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star-o"></i>
                                </li>
                              </ul>
                              <a
                                href="product-page(left-sidebar).html"
                                tabIndex="0"
                              >
                                <p> Maroon dresh</p>
                              </a>
                              <h6>$80.00</h6>{" "}
                            </div>
                            <div className="cart-info">
                              <button
                                className="tooltip-top"
                                data-tippy-content="Add to cart"
                              >
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-shopping-cart"
                                >
                                  <circle cx="9" cy="21" r="1"></circle>
                                  <circle cx="20" cy="21" r="1"></circle>
                                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                </svg>{" "}
                              </button>{" "}
                              <a
                                href="#"
                                className="add-to-wish tooltip-top"
                                data-tippy-content="Add to Wishlist"
                              >
                                <i
                                  data-feather="heart"
                                  className="add-to-wish"
                                ></i>
                              </a>{" "}
                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#quick-view"
                                className="tooltip-top"
                                data-tippy-content="Quick View"
                              >
                                <i data-feather="eye"></i>
                              </a>{" "}
                              <a
                                href="compare.html"
                                className="tooltip-top"
                                data-tippy-content="Compare"
                              >
                                <i data-feather="refresh-cw"></i>
                              </a>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="media-banner-box">
                    <div className="media">
                      <a href="product-page(left-sidebar).html" tabIndex="0">
                        {" "}
                        <img
                          src="../assets/images/layout-1/media-banner/1.jpg"
                          className="img-fluid  "
                          alt="banner"
                        />{" "}
                      </a>
                      <div className="media-body">
                        <div className="media-contant">
                          <div>
                            <div className="product-detail">
                              <ul className="rating">
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star-o"></i>
                                </li>
                              </ul>
                              <a
                                href="product-page(left-sidebar).html"
                                tabIndex="0"
                              >
                                <p> multicolor dresh</p>
                              </a>
                              <h6>$30.00</h6>{" "}
                            </div>
                            <div className="cart-info">
                              <button
                                className="tooltip-top"
                                data-tippy-content="Add to cart"
                              >
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-shopping-cart"
                                >
                                  <circle cx="9" cy="21" r="1"></circle>
                                  <circle cx="20" cy="21" r="1"></circle>
                                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                </svg>{" "}
                              </button>{" "}
                              <a
                                href="#"
                                className="add-to-wish tooltip-top"
                                data-tippy-content="Add to Wishlist"
                              >
                                <i
                                  data-feather="heart"
                                  className="add-to-wish"
                                ></i>
                              </a>{" "}
                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#quick-view"
                                className="tooltip-top"
                                data-tippy-content="Quick View"
                              >
                                <i data-feather="eye"></i>
                              </a>{" "}
                              <a
                                href="compare.html"
                                className="tooltip-top"
                                data-tippy-content="Compare"
                              >
                                <i data-feather="refresh-cw"></i>
                              </a>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="media-banner-box">
                    <div className="media">
                      <a href="product-page(left-sidebar).html" tabIndex="0">
                        {" "}
                        <img
                          src="../assets/images/layout-1/media-banner/2.jpg"
                          className="img-fluid  "
                          alt="banner"
                        />{" "}
                      </a>
                      <div className="media-body">
                        <div className="media-contant">
                          <div>
                            <div className="product-detail">
                              <ul className="rating">
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star-o"></i>
                                </li>
                              </ul>
                              <a
                                href="product-page(left-sidebar).html"
                                tabIndex="0"
                              >
                                <p> Leriya Fashion</p>
                              </a>
                              <h6>$35.00</h6>{" "}
                            </div>
                            <div className="cart-info">
                              <button
                                className="tooltip-top"
                                data-tippy-content="Add to cart"
                              >
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-shopping-cart"
                                >
                                  <circle cx="9" cy="21" r="1"></circle>
                                  <circle cx="20" cy="21" r="1"></circle>
                                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                </svg>{" "}
                              </button>{" "}
                              <a
                                href="#"
                                className="add-to-wish tooltip-top"
                                data-tippy-content="Add to Wishlist"
                              >
                                <i
                                  data-feather="heart"
                                  className="add-to-wish"
                                ></i>
                              </a>{" "}
                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#quick-view"
                                className="tooltip-top"
                                data-tippy-content="Quick View"
                              >
                                <i data-feather="eye"></i>
                              </a>{" "}
                              <a
                                href="compare.html"
                                className="tooltip-top"
                                data-tippy-content="Compare"
                              >
                                <i data-feather="refresh-cw"></i>
                              </a>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--hot deal end--> */}

        {/* <!--tab product-->  */}
        <section className="section-pt-space">
          <div className="tab-product-main">
            <div className="tab-prodcut-contain">
              <ul className="tabs tab-title">
                <li className="current">
                  <a href="tab-1">fashion</a>
                </li>
                <li className="">
                  <a href="tab-2">electronic</a>
                </li>
                {/* <li className=""><a href="tab-3">footware</a></li>
          <li className=""><a href="tab-4">sports</a></li>
          <li className=""><a href="tab-5">toys</a></li>
          <li className=""><a href="tab-6">books</a></li> */}
              </ul>
            </div>
          </div>
        </section>
        {/* <!--tab product--> */}

        <div className="title1 section-my-space">
          <h4>Special Products</h4>
        </div>

        <section className="product section-pb-space mb--5">
          <div className="custom-container">
            <div className="row">
              <div className="col pr-0">
                <div className="product-slide-6 no-arrow slick-initialized slick-slider">
                  <button
                    className="slick-prev slick-arrow"
                    aria-label="Previous"
                    type="button"
                    style={{ display: "inline-block" }}
                  >
                    Previous
                  </button>
                  <div className="slick-list draggable">
                  {products && products.map(product => (

          //         <div key={product._id} class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{width: "308px"}}><div><div style={{width: "100%", display: "inline-block"}}/>
          //         <div class="product-box product-box2">
          //            <div class="product-imgbox">
          //               <div class="product-front">
          //                  <Link to="product-page(left-sidebar).html" tabindex="0">
          //                  <img  src={product.images[0].url} alt=""
          //          className="img-fluid"/>                           </Link>
          //               </div>
          //               <div class="product-back">
          //                  <Link to="product-page(left-sidebar).html" tabindex="0">
          //                  <img  src={product.images[0].url} alt=""
          //          className="img-fluid"/>                           </Link>
          //               </div>
          //               <div class="product-icon icon-inline">
          //                  <button class="tooltip-top  add-cartnoty" data-tippy-content="Add to cart" tabindex="0">
          //                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          //                  </button>
          //                  <a href="" class="add-to-wish tooltip-top" data-tippy-content="Add to Wishlist" tabindex="0">
          //                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          //                  </a>
          //                  <a href="" data-bs-toggle="modal" data-bs-target="#quick-view" class="tooltip-top" data-tippy-content="Quick View" tabindex="0">
          //                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
          //                  </a>
          //                  <a href="compare.html" class="tooltip-top" data-tippy-content="Compare" tabindex="0">
          //                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-refresh-cw"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
          //                  </a>
          //               </div>
          //               <div class="new-label1">
          //                  <div>new</div>
          //               </div>
          //               <div class="on-sale1">
          //                  on sale
          //               </div>
          //            </div>
          //            <div class="product-detail product-detail2 ">
          //               {/* <ul>
          //                  <li><i class="fa fa-star"></i></li>
          //                  <li><i class="fa fa-star"></i></li>
          //                  <li><i class="fa fa-star"></i></li>
          //                  <li><i class="fa fa-star"></i></li>                           
          //                  <li><i class="fa fa-star-o"></i></li>
          //               </ul> */}
                        
          // <div className="ratings mt-auto">
          //   <div className="rating-outer">
          //     <div className="rating-inner" style={{ width: `${(product.ratings / 5) * 100}%` }}></div>
          //   </div>
          //   <span id="no_of_reviews">({product.numOfReviews} Reviews)</span>
          // </div>
          //               <Link to="product-page(no-sidebar).html" tabindex="0">
          //                  <h3>{product.name}</h3>
          //               </Link>
          //               <h5>
          //                  $50
          //                  <span>
          //             $80
          //           </span>
          //               </h5>
          //            </div>
          //         </div>
          //      </div></div>
                // {products.map(product => (
                  // <div> key={product._id} {product.name}</div>
        
        <Product key={product._id} product={product} />
        
        // ))};
                          ))}

                  </div>
                  <button
                    className="slick-next slick-arrow"
                    aria-label="Next"
                    type="button"
                    style={{ display: "inline-block" }}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
           
          </div>
        </section>

        {resPerPage <= productsCount && (
              <div className='d-flex justify-content-center mt-5'>
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={resPerPage}
                  totalItemsCount={productsCount}
                  onChange={setCurrentPageNo}
                  nextPageText={'Next'}
                  prevPageText={'Prev'}
                  firstPageText={'First'}
                  lastPageText={'Last'}
                  itemClass="page-item"
                  linkClass='page-link'
                />
              </div>

            )}

       

        {/* {products && products.map(product => ( */}

       
 

        {/* <!--services start-->  */}
        <section className="services ">
          <div className="container">
            <div className="row service-block">
              <div className="col-lg-3 col-md-6  col-sm-12">
                <div className="media">
                  <svg
                    height="679pt"
                    viewBox="0 -117 679.99892 679"
                    width="679pt"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m12.347656 378.382812h37.390625c4.371094 37.714844 36.316407 66.164063 74.277344 66.164063 37.96875 0 69.90625-28.449219 74.28125-66.164063h241.789063c4.382812 37.714844 36.316406 66.164063 74.277343 66.164063 37.96875 0 69.902344-28.449219 74.285157-66.164063h78.890624c6.882813 0 12.460938-5.578124 12.460938-12.460937v-352.957031c0-6.882813-5.578125-12.464844-12.460938-12.464844h-432.476562c-6.875 0-12.457031 5.582031-12.457031 12.464844v69.914062h-105.570313c-4.074218.011719-7.890625 2.007813-10.21875 5.363282l-68.171875 97.582031-26.667969 37.390625-9.722656 13.835937c-1.457031 2.082031-2.2421872 4.558594-2.24999975 7.101563v121.398437c-.09765625 3.34375 1.15624975 6.589844 3.47656275 9.003907 2.320312 2.417968 5.519531 3.796874 8.867187 3.828124zm111.417969 37.386719c-27.527344 0-49.851563-22.320312-49.851563-49.847656 0-27.535156 22.324219-49.855469 49.851563-49.855469 27.535156 0 49.855469 22.320313 49.855469 49.855469 0 27.632813-22.21875 50.132813-49.855469 50.472656zm390.347656 0c-27.53125 0-49.855469-22.320312-49.855469-49.847656 0-27.535156 22.324219-49.855469 49.855469-49.855469 27.539063 0 49.855469 22.320313 49.855469 49.855469.003906 27.632813-22.21875 50.132813-49.855469 50.472656zm140.710938-390.34375v223.34375h-338.375c-6.882813 0-12.464844 5.578125-12.464844 12.460938 0 6.882812 5.582031 12.464843 12.464844 12.464843h338.375v79.761719h-66.421875c-4.382813-37.710937-36.320313-66.15625-74.289063-66.15625-37.960937 0-69.898437 28.445313-74.277343 66.15625h-192.308594v-271.324219h89.980468c6.882813 0 12.464844-5.582031 12.464844-12.464843 0-6.882813-5.582031-12.464844-12.464844-12.464844h-89.980468v-31.777344zm-531.304688 82.382813h99.703125v245.648437h-24.925781c-4.375-37.710937-36.3125-66.15625-74.28125-66.15625-37.960937 0-69.90625 28.445313-74.277344 66.15625h-24.929687v-105.316406l3.738281-5.359375h152.054687c6.882813 0 12.460938-5.574219 12.460938-12.457031v-92.226563c0-6.882812-5.578125-12.464844-12.460938-12.464844h-69.796874zm-30.160156 43h74.777344v67.296875h-122.265625zm0 0" />{" "}
                  </svg>
                  <div className="media-body">
                    <h5>free shipping</h5>{" "}
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6  col-sm-12">
                <div className="media">
                  <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    {...attributeElements}
                    x="0px"
                    y="0px"
                    viewBox="0 0 417.12 417.12"
                  >
                    <g>
                      <g>
                        <path
                          d="M409.12,200.741c-4.418,0-8,3.582-8,8c-0.06,106.525-86.464,192.831-192.988,192.772
      C101.607,401.453,15.3,315.049,15.36,208.524C15.42,102,101.824,15.693,208.348,15.753c51.36,0.029,100.587,20.54,136.772,56.988
      l-17.84-0.72c-4.418,0-8,3.582-8,8s3.582,8,8,8l36.72,1.52c1.013,0.003,2.018-0.188,2.96-0.56l0.88-0.56
      c1.381-0.859,2.534-2.039,3.36-3.44c0.034-0.426,0.034-0.854,0-1.28c0.183-0.492,0.317-1.001,0.4-1.52l3.2-36.72
      c0.376-4.418-2.902-8.304-7.32-8.68s-8.304,2.902-8.68,7.32l-1.6,18.16c-80.799-82.092-212.848-83.14-294.939-2.341
      s-83.14,212.848-2.341,294.939s212.848,83.14,294.939,2.341c39.786-39.159,62.212-92.635,62.261-148.459
      C417.12,204.323,413.538,200.741,409.12,200.741z"
                        />{" "}
                      </g>
                    </g>
                    <g>
                      <g>
                        <path
                          d="M200.4,256.341c-3.716-2.516-8.162-3.726-12.64-3.44h-56c1.564-2.442,3.302-4.768,5.2-6.96
      c6.727-7.402,14.088-14.201,22-20.32c10.667-8.747,18.293-15.147,22.88-19.2c5.252-4.976,9.752-10.689,13.36-16.96
      c4.377-7.234,6.649-15.545,6.56-24c-0.009-11.177-4.27-21.931-11.92-30.08c-3.725-3.941-8.181-7.12-13.12-9.36
      c-8.709-3.645-18.08-5.443-27.52-5.28c-8.048-0.163-16.055,1.194-23.6,4c-6.2,2.328-11.862,5.894-16.64,10.48
      c-4.219,4.117-7.565,9.042-9.84,14.48c-2.098,4.853-3.213,10.074-3.28,15.36c-0.192,3.547,1.081,7.018,3.52,9.6
      c2.345,2.352,5.56,3.626,8.88,3.52c3.499,0.231,6.903-1.19,9.2-3.84c2.503-3.303,4.424-7.01,5.68-10.96
      c0.939-3.008,2.144-5.926,3.6-8.72c4.562-7.738,12.94-12.416,21.92-12.24c4.114,0.077,8.149,1.147,11.76,3.12
      c3.625,1.82,6.693,4.583,8.88,8c2.194,3.673,3.329,7.882,3.28,12.16c-0.067,4.437-1.105,8.806-3.04,12.8
      c-2.129,4.829-5.019,9.286-8.56,13.2c-4.419,4.617-9.298,8.772-14.56,12.4c-5.616,4.247-10.96,8.843-16,13.76
      c-7.787,7.04-16.453,15.467-26,25.28c-2.638,2.966-4.773,6.344-6.32,10c-1.632,3.159-2.612,6.614-2.88,10.16
      c-0.018,3.939,1.605,7.707,4.48,10.4c3.393,3.096,7.896,4.684,12.48,4.4h78.4c3.842,0.312,7.641-0.993,10.48-3.6
      c2.291-2.379,3.53-5.579,3.44-8.88C204.691,262.051,203.173,258.598,200.4,256.341z"
                        />{" "}
                      </g>
                    </g>
                    <g>
                      <g>
                        <path
                          d="M333.76,222.901c-4.254-1.637-8.809-2.346-13.36-2.08h-4.56v-82.48c0-12.373-5.333-18.56-16-18.56
      c-3.185-0.052-6.261,1.155-8.56,3.36c-3.331,3.343-6.382,6.956-9.12,10.8l-56.48,75.6l-3.92,5.2c-1.067,1.44-2.107,2.907-3.12,4.4
      c-0.916,1.374-1.668,2.851-2.24,4.4c-0.475,1.308-0.718,2.689-0.72,4.08c-0.237,4.699,1.607,9.263,5.04,12.48
      c4.323,3.358,9.742,4.984,15.2,4.56h53.52v20.08c-0.273,4.252,1.006,8.459,3.6,11.84c5.276,5.346,13.887,5.403,19.233,0.127
      c0.043-0.042,0.085-0.084,0.127-0.127c2.587-3.384,3.866-7.589,3.6-11.84v-20h6.48c4.242,0.298,8.476-0.677,12.16-2.8
      c2.877-2.141,4.425-5.63,4.08-9.2C339.301,228.744,337.319,224.811,333.76,222.901z M289.36,220.581h-45.84l45.84-61.92V220.581z"
                        />{" "}
                      </g>
                    </g>
                  </svg>
                  <div className="media-body">
                    <h5>24X7 SERVICE</h5>{" "}
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6  col-sm-12 ">
                <div className="media">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 295.82 295.82"
                    {...attributeElements}
                    enableBackground="new 0 0 295.82 295.82"
                  >
                    <g>
                      <g>
                        <path d="m269.719,43.503h-243.617c-13.921,0-26.102,12.181-26.102,26.102v156.611c0,13.921 12.181,26.102 26.102,26.102h243.617c13.921,0 26.102-12.181 26.102-26.102v-156.611c-0.001-13.921-12.182-26.102-26.102-26.102zm-243.617,17.401h243.617c5.22,0 8.701,3.48 8.701,8.701v13.921h-261.019v-13.921c-1.06581e-14-5.22 3.481-8.701 8.701-8.701zm252.317,40.023v13.921h-261.018v-13.921h261.018zm-8.7,133.989h-243.617c-5.22,0-8.701-3.48-8.701-8.701v-93.966h261.018v93.966c0,5.221-3.48,8.701-8.7,8.701z" />
                        <path d="m45.243,172.272h45.243c5.22,0 8.701-3.48 8.701-8.701 0-5.22-3.48-8.701-8.701-8.701h-45.243c-5.22,0-8.701,3.48-8.701,8.701 0.001,5.221 3.481,8.701 8.701,8.701z" />
                        <path d="m151.391,191.413h-106.148c-5.22,0-8.701,3.48-8.701,8.701s3.48,8.701 8.701,8.701h106.147c3.48,0 8.701-3.48 8.701-8.701s-3.48-8.701-8.7-8.701z" />{" "}
                      </g>
                    </g>
                  </svg>
                  <div className="media-body">
                    <h5>EASY RETURN</h5>{" "}
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6  col-sm-12 ">
                <div className="media">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    {...attributeElements}
                    x="0px"
                    y="0px"
                    viewBox="0 0 448 448"
                  >
                    <g>
                      <g>
                        <g>
                          <path
                            d="M384,172.4C384,83.6,312.4,12,224,12S64,83.6,64,172c0,0,0,0,0,0.4C28.4,174.4,0,204,0,240v8c0,37.6,30.4,68,68,68h3.6
        l28.4,45.2c20,32,54,50.8,91.6,50.8h5.6c3.6,13.6,16,24,30.8,24c17.6,0,32-14.4,32-32c0-17.6-14.4-32-32-32
        c-14.8,0-27.2,10.4-30.8,24h-5.6c-32,0-61.2-16.4-78-43.6L90.4,316H96c8.8,0,16-7.2,16-16V188c0-8.8-7.2-16-16-16H80
        c0-79.6,64.4-144,144-144s144,64.4,144,144h-16c-8.8,0-16,7.2-16,16v112c0,8.8,7.2,16,16,16h28c37.6,0,68-30.4,68-68v-8
        C448,204,419.6,174.4,384,172.4z M228,388c8.8,0,16,7.2,16,16s-7.2,16-16,16s-16-7.2-16-16S219.2,388,228,388z M96,188v112H68
        c-28.8,0-52-23.2-52-52v-8c0-28.8,23.2-52,52-52H96z M432,248c0,28.8-23.2,52-52,52h-28V188h28c28.8,0,52,23.2,52,52V248z"
                          />
                          <path
                            d="M290.4,72.4c-0.8-0.4-2-1.2-3.2-2c-1.2-0.8-2.4-1.6-3.2-2c-3.6-2.4-8.8-1.2-10.8,2.8S272,79.6,276,82
        c0.8,0.4,2,1.2,3.2,2s2.4,1.6,3.6,2c1.2,0.8,2.8,1.2,4,1.2c2.8,0,5.2-1.2,6.8-4C295.6,79.6,294.4,74.8,290.4,72.4z"
                          />
                          <path
                            d="M224,52c-34,0-66,14.8-88,40.4c-2.8,3.2-2.4,8.4,0.8,11.2c1.6,1.2,3.2,2,5.2,2c2.4,0,4.4-0.8,6-2.8
        c19.2-22,46.8-34.8,76-34.8c7.2,0,14.4,0.8,21.6,2.4c4.4,0.8,8.4-2,9.6-6s-2-8.4-6-9.6C240.8,52.8,232.4,52,224,52z"
                          />{" "}
                        </g>
                      </g>
                    </g>
                  </svg>
                  <div className="media-body">
                    <h5>ONLINE PAYMENT</h5>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--services end--> */}

        {/* <!--tab product-->  */}
        <section className="section-pb-space">
          <div className="tab-product-main">
            <div className="tab-prodcut-contain">
              <ul className="tabs tab-title">
                <li className="current">
                  <a href="tab-7">new product</a>
                </li>
                <li className="">
                  <a href="tab-8">Feature Products</a>
                </li>
                <li className="">
                  <a href="tab-9">best Sellers</a>
                </li>
                <li className="">
                  <a href="tab-10">On Sale</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* <!--tab product--> */}

        {/* <!--media banner start-->  */}
        <section className="section-pb-space">
          <div className="custom-container">
            <div className="row ">
              <div className="col-12">
                <div className="theme-tab">
                  <div className="tab-content-cls">
                    <div id="tab-7" className="tab-content active default ">
                      <div className="slide-5 no-arrow">
                        <div>
                          <div className="media-banner b-g-white1 border-0">
                            <div className="media-banner-box">
                              <div className="media">
                                <a
                                  href="product-page(left-sidebar).html"
                                  tabIndex="0"
                                >
                                  {" "}
                                  <img
                                    src="../assets/images/layout-1/media-banner/4.jpg"
                                    className="img-fluid  "
                                    alt="banner"
                                  />{" "}
                                </a>
                                <div className="media-body">
                                  <div className="media-contant">
                                    <div>
                                      <div className="product-detail">
                                        <ul className="rating">
                                          <li>
                                            <i className="fa fa-star"></i>
                                          </li>
                                          <li>
                                            <i className="fa fa-star"></i>
                                          </li>
                                          <li>
                                            <i className="fa fa-star"></i>
                                          </li>
                                          <li>
                                            <i className="fa fa-star"></i>
                                          </li>
                                          <li>
                                            <i className="fa fa-star-o"></i>
                                          </li>
                                        </ul>
                                        <a
                                          href="product-page(left-sidebar).html"
                                          tabIndex="0"
                                        >
                                          <p> Maroon dresh</p>
                                        </a>
                                        <h6>$80.00</h6>{" "}
                                      </div>
                                      <div className="cart-info">
                                        <button
                                          className="tooltip-top"
                                          data-tippy-content="Add to cart"
                                        >
                                          {" "}
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-shopping-cart"
                                          >
                                            <circle
                                              cx="9"
                                              cy="21"
                                              r="1"
                                            ></circle>
                                            <circle
                                              cx="20"
                                              cy="21"
                                              r="1"
                                            ></circle>
                                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                          </svg>{" "}
                                        </button>
                                        <a
                                          href="#"
                                          className="add-to-wish tooltip-top"
                                          data-tippy-content="Add to Wishlist"
                                        >
                                          <i
                                            data-feather="heart"
                                            className="add-to-wish"
                                          ></i>
                                        </a>
                                        <a
                                          href="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#quick-view"
                                          className="tooltip-top"
                                          data-tippy-content="Quick View"
                                        >
                                          <i data-feather="eye"></i>
                                        </a>
                                        <a
                                          href="compare.html"
                                          className="tooltip-top"
                                          data-tippy-content="Compare"
                                        >
                                          <i data-feather="refresh-cw"></i>
                                        </a>{" "}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="media-banner-box">
                              <div className="media">
                                <a
                                  href="product-page(left-sidebar).html"
                                  tabIndex="0"
                                >
                                  {" "}
                                  <img
                                    src="../assets/images/layout-1/media-banner/1.jpg"
                                    className="img-fluid  "
                                    alt="banner"
                                  />{" "}
                                </a>
                                <div className="media-body">
                                  <div className="media-contant">
                                    <div>
                                      <div className="product-detail">
                                        <ul className="rating">
                                          <li>
                                            <i className="fa fa-star"></i>
                                          </li>
                                          <li>
                                            <i className="fa fa-star"></i>
                                          </li>
                                          <li>
                                            <i className="fa fa-star"></i>
                                          </li>
                                          <li>
                                            <i className="fa fa-star"></i>
                                          </li>
                                          <li>
                                            <i className="fa fa-star-o"></i>
                                          </li>
                                        </ul>
                                        <a
                                          href="product-page(left-sidebar).html"
                                          tabIndex="0"
                                        >
                                          <p> multicolor dresh</p>
                                        </a>
                                        <h6>$30.00</h6>{" "}
                                      </div>
                                      <div className="cart-info">
                                        <button
                                          className="tooltip-top"
                                          data-tippy-content="Add to cart"
                                        >
                                          {" "}
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-shopping-cart"
                                          >
                                            <circle
                                              cx="9"
                                              cy="21"
                                              r="1"
                                            ></circle>
                                            <circle
                                              cx="20"
                                              cy="21"
                                              r="1"
                                            ></circle>
                                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                          </svg>{" "}
                                        </button>{" "}
                                        <a
                                          href="#"
                                          className="add-to-wish tooltip-top"
                                          data-tippy-content="Add to Wishlist"
                                        >
                                          <i
                                            data-feather="heart"
                                            className="add-to-wish"
                                          ></i>
                                        </a>{" "}
                                        <a
                                          href="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#quick-view"
                                          className="tooltip-top"
                                          data-tippy-content="Quick View"
                                        >
                                          <i data-feather="eye"></i>
                                        </a>{" "}
                                        <a
                                          href="compare.html"
                                          className="tooltip-top"
                                          data-tippy-content="Compare"
                                        >
                                          <i data-feather="refresh-cw"></i>
                                        </a>{" "}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="media-banner-box">
                              <div className="media">
                                <a
                                  href="product-page(left-sidebar).html"
                                  tabIndex="0"
                                >
                                  {" "}
                                  <img
                                    src="../assets/images/layout-1/media-banner/2.jpg"
                                    className="img-fluid  "
                                    alt="banner"
                                  />{" "}
                                </a>
                                <div className="media-body">
                                  <div className="media-contant">
                                    <div>
                                      <div className="product-detail">
                                        <ul className="rating">
                                          <li>
                                            <i className="fa fa-star"></i>
                                          </li>
                                          <li>
                                            <i className="fa fa-star"></i>
                                          </li>
                                          <li>
                                            <i className="fa fa-star"></i>
                                          </li>
                                          <li>
                                            <i className="fa fa-star"></i>
                                          </li>
                                          <li>
                                            <i className="fa fa-star-o"></i>
                                          </li>
                                        </ul>
                                        <a
                                          href="product-page(left-sidebar).html"
                                          tabIndex="0"
                                        >
                                          <p> Leriya Fashion</p>
                                        </a>
                                        <h6>$35.00</h6>{" "}
                                      </div>
                                      <div className="cart-info">
                                        <button
                                          className="tooltip-top"
                                          data-tippy-content="Add to cart"
                                        >
                                          {" "}
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-shopping-cart"
                                          >
                                            <circle
                                              cx="9"
                                              cy="21"
                                              r="1"
                                            ></circle>
                                            <circle
                                              cx="20"
                                              cy="21"
                                              r="1"
                                            ></circle>
                                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                          </svg>{" "}
                                        </button>{" "}
                                        <a
                                          href="#"
                                          className="add-to-wish tooltip-top"
                                          data-tippy-content="Add to Wishlist"
                                        >
                                          <i
                                            data-feather="heart"
                                            className="add-to-wish"
                                          ></i>
                                        </a>{" "}
                                        <a
                                          href="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#quick-view"
                                          className="tooltip-top"
                                          data-tippy-content="Quick View"
                                        >
                                          <i data-feather="eye"></i>
                                        </a>{" "}
                                        <a
                                          href="compare.html"
                                          className="tooltip-top"
                                          data-tippy-content="Compare"
                                        >
                                          <i data-feather="refresh-cw"></i>
                                        </a>{" "}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--media banner end--> */}

        {/* <!--box categroy start-->  */}
        <section className="box-category section-pb-space">
          <div className="container-fluid ">
            <div className="row">
              <div className="col pl-0">
                <div className="slide-10 no-arrow">
                  <div>
                    <a href="category-page(left-sidebar).html">
                      <div className="box-category-contain">
                        <h4>10% off</h4>{" "}
                      </div>
                    </a>
                  </div>
                  <div>
                    <a href="category-page(left-sidebar).html">
                      <div className="box-category-contain">
                        <h4>under @99</h4>{" "}
                      </div>
                    </a>
                  </div>
                  <div>
                    <a href="category-page(left-sidebar).html">
                      <div className="box-category-contain">
                        <h4>free shipping</h4>{" "}
                      </div>
                    </a>
                  </div>
                  <div>
                    <a href="category-page(left-sidebar).html">
                      <div className="box-category-contain">
                        <h4>extra 10% off</h4>{" "}
                      </div>
                    </a>
                  </div>
                  <div>
                    <a href="category-page(left-sidebar).html">
                      <div className="box-category-contain">
                        <h4>$79 cashback</h4>{" "}
                      </div>
                    </a>
                  </div>
                  <div>
                    <a href="category-page(left-sidebar).html">
                      <div className="box-category-contain">
                        <h4>80% off</h4>{" "}
                      </div>
                    </a>
                  </div>
                  <div>
                    <a href="category-page(left-sidebar).html">
                      <div className="box-category-contain">
                        <h4>on sale</h4>{" "}
                      </div>
                    </a>
                  </div>
                  <div>
                    <a href="category-page(left-sidebar).html">
                      <div className="box-category-contain">
                        <h4>only $49</h4>{" "}
                      </div>
                    </a>
                  </div>
                  <div>
                    <a href="category-page(left-sidebar).html">
                      <div className="box-category-contain">
                        <h4>under @150</h4>{" "}
                      </div>
                    </a>
                  </div>
                  <div>
                    <a href="category-page(left-sidebar).html">
                      <div className="box-category-contain">
                        <h4>save money</h4>{" "}
                      </div>
                    </a>
                  </div>
                  <div>
                    <a href="category-page(left-sidebar).html">
                      <div className="box-category-contain">
                        <h4>80% off</h4>{" "}
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--box category end--> */}

        {/* <!--deal banner start--> */}
        <section className="deal-banner  deal-banner-inverse">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-8">
                <div className="deal-banner-containe">
                  <h2>save up to 30% to 40% off</h2>
                  <h1>omg! just look at the great deals!</h1>{" "}
                </div>
              </div>
              <div className="col-md-12 col-lg-4 ">
                <div className="deal-banner-containe">
                  <div className="deal-btn">
                    <a
                      href="category-page(left-sidebar).html"
                      className="btn-white"
                    >
                      View more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--deal banner end--> */}

        {/* <!--rounded category start--> */}
        <section className="rounded-category rounded-category-inverse">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="slide-6 no-arrow">
                  <div>
                    <div className="category-contain">
                      <div className="img-wrapper">
                        <a href="category-page(left-sidebar).html">
                          {" "}
                          <img
                            src="../assets/images/layout-1/rounded-cat/1.png"
                            alt="category  "
                            className="img-fluid"
                          />{" "}
                        </a>
                      </div>{" "}
                      <a
                        href="category-page(left-sidebar).html"
                        className="btn-rounded"
                      >
                        flower
                      </a>{" "}
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--rounded category end--> */}

        {/* <!--testimonial start-->  */}
        <section className="testimonial">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="slide-1 no-arrow">
                  <div>
                    <div className="testimonial-contain">
                      <div className="media">
                        <div className="testimonial-img">
                          {" "}
                          <img
                            src="../assets/images/testimonial/1.jpg"
                            className="img-fluid rounded-circle  "
                            alt="testimonial"
                          />{" "}
                        </div>
                        <div className="media-body">
                          <h5>mark jecno</h5>
                          <p>
                            Contrary to popular belief, Lorem Ipsum is not
                            simply random text. It has roots in a piece of
                            classNameical Latin literature from 45 BC, making it
                            over 2000 years old. Richard McClintock, a Latin
                            professor at Hampden-Sydney College in Virginia.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* {/* <!--testimonial end--> */}

        {/* <!--instagram start--> */}
        <section className="instagram section-big-py-space">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="insta-contant2">
                  <div className="slide-7 no-arrow">
                    <div>
                      <div className="instagram-box">
                        {" "}
                        <img
                          src="../assets/images/insta/1.jpg"
                          className="img-fluid  "
                          alt="insta"
                        />
                        <div className="insta-cover">
                          {" "}
                          <i className="fa fa-instagram"></i>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="insta-sub-contant2">
                    <div className="insta-title">
                      <h4>
                        <span>#</span>INSTAGRAM
                      </h4>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--instagram end--> */}
      </main>
      </Fragment>
       )}
    </Fragment>
  );
};

export default Home;
