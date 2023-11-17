import React, { useState, useEffect, useRef } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import jsonData from './../../data.json';

const HomeRight = () => {
  // Manage the data source for books
  const [dataSource, setDataSource] = useState([]);

  // Manage more data to fetch
  const [hasMore, setHasMore] = useState(true);

  // Manage rotating images
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Scroll handling
  const bookSectionRef = useRef(null);

  // Initial data fetch
  useEffect(() => {
    setDataSource(jsonData.slice(0, 6));
  }, []);

  // Fetch more data when scrolling
  const fetchData = () => {
    const newData = jsonData.slice(dataSource.length, dataSource.length + 3);

    if (newData.length === 0) {
      setHasMore(false);
    }
    setDataSource([...dataSource, ...newData]);
  };

  // Handle scrolling and fetch more data
  const handleScroll = () => {
    const bookSection = bookSectionRef.current;
    if (bookSection.scrollHeight - bookSection.scrollTop <= bookSection.clientHeight + 350) {
      fetchData();
    }
  };

  // Rotate images in regular interval
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % (dataSource.length * 3));
    }, 5000);
    return () => clearInterval(intervalId);
  }, [dataSource]);

  return (
    <div>
      
      {/* Books Filters */}
      <div className="right_filter">
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

      {/* Book Section */}
      <div className="book_section" ref={bookSectionRef} onScroll={handleScroll}>
        <InfiniteScroll
          className="book_details"
          dataLength={dataSource.length}
          next={fetchData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          scrollableTarget="book_section"
        >
          {dataSource.map((item, index) => (
            <div key={index} className='book'>
              {item.images.map((image, imgIndex) => (
                <img
                  key={image.id}
                  src={image.image}
                  alt={`Image ${image.id}`}
                  style={{
                    display: imgIndex === currentImageIndex % 3 ? 'block' : 'none',
                  }}
                />
              ))}
              <a href="#" className='book_name'>{item.name}</a><br />
              <span className='book_price'>Rs.{item.price}</span>
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default HomeRight;
