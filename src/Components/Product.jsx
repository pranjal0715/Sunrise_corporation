import React, { useState } from 'react';
// import hero from '../assets/hero.jpg';
import { useNavigate } from 'react-router-dom'
import {default as Img01} from '../assets/Img01.jpeg'
import {default as Img02} from '../assets/Img02.jpeg'
// import {default as Img03} from '../assets/Img03.jpeg'
import {default as Img04} from '../assets/Img04.jpeg'
import {default as Img06} from '../assets/Img06.jpg'
import {default as Img07} from '../assets/Img07.jpg'


const Product = () => {

const Navigate = useNavigate();

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20  ">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Comprehensive Range of Chemicals</h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-black">At Sunrise Corporation Pvt. Ltd., we provide a comprehensive range of high-quality chemicals tailored to meet the demands of various industries. Our offerings include Basic Inorganic Chemicals essential for industrial manufacturing, Intermediates Chemicals crucial for producing pharmaceuticals and agrochemicals, Textile Chemicals that enhance fabric performance and durability, and Dyes Chemicals that deliver vibrant, long-lasting colors to textiles. Our products ensure quality and efficiency across all applications.</p>
        </div>
        <div className="flex flex-wrap bg-white ">
          <button onClick={() => {window.scrollTo(0, 0); Navigate("/Product/Basic")}} className="xl:w-1/4 md:w-1/2 p-4 shadow-xl">
            <button className="bg-gray-300 p-6 rounded-lg">
              <img className="h-40 rounded w-full object-cover object-center mb-6" src={Img02} alt="content" />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Basic Chemical</h2>
              {/* <p class="leading-relaxed text-base">Basic chemicals: Building blocks for everything from plastics to fertilizers</p> */}
              <button onClick={() => {window.scrollTo(0, 0); Navigate("/Product/Basic")}} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">See Products</button>
            </button>
          </button>
          <button onClick={() => {window.scrollTo(0, 0); Navigate("/Product/Textile")}} className="xl:w-1/4 md:w-1/2 p-4 shadow-xl">
            <button className="bg-gray-300 p-6 rounded-lg ">
              <img className="h-40 rounded w-full object-cover object-center mb-6" src={Img06} alt="content" />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Textile Auxiliaries</h2>
              {/* <p class="leading-relaxed text-base">Chemicals that enhance textile quality</p> */}
              <button onClick={() => {window.scrollTo(0, 0); Navigate("/Product/Textile")}} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">See Products</button>
            </button>
          </button>
          <button onClick={() => {window.scrollTo(0, 0); Navigate("/Product/Intermediate")}} className="xl:w-1/4 md:w-1/2 p-4 shadow-xl">
            <button className="bg-gray-300 p-6 rounded-lg ">
              <img className="h-40 rounded w-full object-cover object-center mb-6" src={Img01} alt="content" />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Intermediates</h2>
              {/* <p class="leading-relaxed text-base">Chemicals used to create more complex molecules </p> */}
              <button onClick={() => {window.scrollTo(0, 0); Navigate("/Product/Intermediate")}} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">See Products</button>
            </button>
          </button>
          <button onClick={() => {window.scrollTo(0, 0); Navigate("/Product/Dyes")}}  className="xl:w-1/4 md:w-1/2 p-4 shadow-xl">
            <button className="bg-gray-300 p-6 rounded-lg ">
              <img className="h-40 rounded w-full object-cover object-center mb-6" src={Img07} alt="content" />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
              <h2 className="text-2xl font-bold text-gray-900  mb-4">Dyes</h2>
              {/* <p class="leading-relaxed text-base"> Dyes bring vibrancy to our world</p> */}
              <button onClick={() => {window.scrollTo(0, 0); Navigate("/Product/Dyes")}} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">See Products</button>
            </button>
          </button>
          <button onClick={() => {window.scrollTo(0, 0); Navigate("/Product/Conc_Textile")}}  className="xl:w-1/4 md:w-1/2 p-4 shadow-xl">
            <button className="bg-gray-300 p-6 rounded-lg ">
              <img className="h-40 rounded w-full object-cover object-center mb-6" src={Img04} alt="content" />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
              <h2 className="text-2xl font-bold text-gray-900  mb-4">Concentrated Textile Products</h2>
              {/* <p class="leading-relaxed text-base"> Dyes bring vibrancy to our world</p> */}
              <button onClick={() => {window.scrollTo(0, 0); Navigate("/Product/Dyes")}} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">See Products</button>
            </button>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Product;
