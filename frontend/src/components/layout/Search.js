import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
// import { useNavigation } from "@react-navigation/core";

const Search = () => {
    let navigate = useNavigate()
    const [keyword, setKeyword] = useState('');

    const searchHandler = (e) => {
        e.preventDefault()

        if(keyword.trim()) {
           navigate(`/search/${keyword}`, {
            state:{
              keyword
            },
          })
        } else {
            navigate('/')
        }
    }

  return (
<div>
{/* <form onSubmit={searchHandler}> */}

    <div className="input-block">
    <div className="input-box">
      <form onSubmit={searchHandler} className="big-deal-form ">
        <div className="input-group ">
          <div className="input-group-text">
            <span className="search"><i className="fa fa-search"></i></span>
          </div>
          <input type="search" className="form-control" placeholder="Search a Product" 
              onChange={(e) => setKeyword(e.target.value)} />
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
  </div>
{/* </form> */}
</div>

  )
}

export default Search