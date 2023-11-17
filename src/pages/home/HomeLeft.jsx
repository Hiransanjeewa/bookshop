import React, { useState } from 'react';
import './Home.css';
import { FiUser } from 'react-icons/fi';
import { IoIosAddCircleOutline } from 'react-icons/io';

const HomeLeft = () => {
  // State to track the selected book
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div>
      {/* Left Filters */}
      <div className="left_filters">

        {/* First Filters */}
        <div className="first_filters">
          <label htmlFor="">
            <FiUser className='icon1' />
          </label>
          <select name="">
            <option value="en">Please Select</option>
          </select>
          <IoIosAddCircleOutline className='icon2' />

          <label htmlFor="">
            <FiUser className='icon1' />
          </label>
          <select name="">
            <option value="en">Please Select</option>
          </select>
          <IoIosAddCircleOutline className='icon2' />
        </div>

        {/* Second Filters */}
        <div className="second_filters">
          <select name="">
            <option value="en">Please Select</option>
          </select>
          <select name="">
            <option value="en">Please Select</option>
          </select>
          <select name="">
            <option value="en">Please Select</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="topics">
        <div className="section">PRODUCT</div>
        <div className="section">QUANTITY</div>
        <div className="section">UNIT PRICE</div>
        <div className="section">LINE PRICE</div>
      </div>

      {/* Table Details */}
      <div className="book_Container">
        <div className="details">
          {selectedBook ? (
            <div>
              <p>{selectedBook.product}</p>
              <p>{selectedBook.quanntity}</p>
              <p>{selectedBook.unitprice}</p>
              <p>{selectedBook.lineprice}</p>
            </div>
          ) : (
            <div className='mzg'>
              <p>Please Select Product Item</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeLeft;
