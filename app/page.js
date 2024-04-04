"use client"
import React, { useState } from 'react';
import axios from 'axios';

const Page = () => {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=50");
      const data = response.data;
      setImages(data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  return (
    <>
    <div className='flex justify-center'>  <p className=' p-3 item-center  rounded text-yellow-400 bg-teal-600 w-auto overflow-hidden '>
        Welcome to Image Libarary  "click" on  Get images for image
      </p></div>
      <br/>

      <button onClick={fetchImages} className='bg-indigo-400 p-3'>Get Images</button>

      <div className='p-20'>
        <div className='grid grid-cols-3 gap-2'>
          {images.map((elem, i) => (
            <div key={i} className='m-5 rounded overflow-hidden'>
              <img
                src={elem.download_url}
                alt={`Image ${i}`}
                width={300}
                height={300}
                className='object-cover w-full h-full'
              />
            </div>
          ))}
        </div>
      </div>

      <h1>This is the home page</h1>
    </>
  );
};

export default Page;
