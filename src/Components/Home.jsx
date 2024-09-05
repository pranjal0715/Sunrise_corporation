import React from "react";
import { useNavigate } from "react-router-dom";
import { default as Main } from "../assets/Main.jpg";

const Home = () => {
  const Navigate = useNavigate();
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a966705f-3ec1-4a67-8ab5-7a2f17ef794b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
        {/* <!-- image - start --> */}
        <img
          src={Main}
          loading="lazy"
          alt="Photo by Fakurian Design"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        {/* <!-- image - end --> */}

        {/* <!-- overlay - start --> */}
        <div className="absolute inset-0 bg-blue-400 mix-blend-multiply"></div>
        {/* <!-- overlay - end --> */}

        {/* <!-- text start --> */}
        <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
          {/* <p className="mb-4 text-center text-lg text-white sm:text-xl md:mb-8">Very proud to introduce</p> */}
          <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl ">
            Welcome to Sunrise Corporation!
          </h1>

          <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
            <button
              onClick={() => {
                window.scrollTo(0, 0);
                Navigate("/Product");
              }}
              to="/"
              className="inline-block rounded-lg bg-cyan-400 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-cyan-500 focus-visible:ring active:bg-cyan-600 md:text-base"
            >
              Start now
            </button>

            {/* <a href="#" className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Take tour</a> */}
          </div>
        </div>
        {/* <!-- text end --> */}
      </section>
      {/* Content Part */}
      <div className="text-gray-600 body-font animate-zoomIn">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              SERVICES
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              What We Are ?
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Welcome to Sunrise Corporation Pvt. Ltd., your trusted source for
              premium chemical solutions. We specialize in Basic Inorganic
              Chemicals for industrial processes, Intermediates Chemicals for
              efficient production, Textile Chemicals to enhance fabric quality,
              and Dyes Chemicals for vibrant, lasting colors. Partner with us
              for reliable, high-quality products that drive your business
              forward.
            </p>
          </div>

          {/* <div className="flex flex-wrap  justify-between gap-4">
              <button
                onClick={() => {
                  window.scrollTo(0, 0);
                  Navigate("/Product/Basic");
                }}
                className="xl:w-1/4 lg:w-1/4 md:w-full p-4  border border-black border-opacity-80 shadow-2xl border-opacity-60 bg-gray-200 rounded-lg transform transition-transform duration-300 hover:-translate-y-1 hover:translate-y-0"
              >
                <h2 className="text-lg sm:text-xl text-black font-medium title-font mb-2">
                  Basic Chemicals
                </h2>
                <p className="leading-relaxed text-gray-900 text-base mb-4">
                  Inorganic basic chemicals are fundamental industrial substances
                  like acids, alkalis, salts, and gases used in various processes.
                </p>
                <a className="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </button>

              <button
                onClick={() => {
                  window.scrollTo(0, 0);
                  Navigate("/Product/Textile");
                }}
                className="xl:w-1/4 lg:w-1/4 md:w-full p-4 border border-black border-opacity-80 shadow-2xl border-opacity-60 bg-blue-200 rounded-lg transform transition-transform duration-300 hover:-translate-y-1 hover:translate-y-0"
              >
                <h2 className="text-lg sm:text-xl text-black font-medium title-font mb-2">
                  Textile Chemicals
                </h2>
                <p className="leading-relaxed text-gray-900 text-base mb-4">
                  Textile-based chemicals include dyes, pigments, softeners,
                  surfactants, and finishing agents used in fabric processing and
                  production.
                </p>
                <a className="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </button>

              <button
                onClick={() => {
                  window.scrollTo(0, 0);
                  Navigate("/Product/Intermediate");
                }}
                className="xl:w-1/4 lg:w-1/4 md:w-full p-4 border border-black border-opacity-80 shadow-2xl border-opacity-60 bg-gray-200 rounded-lg transform transition-transform duration-300 hover:-translate-y-1 hover:translate-y-0"
              >
                <h2 className="text-lg sm:text-xl text-black font-medium title-font mb-2">
                  Intermediates
                </h2>
                <p className="leading-relaxed text-gray-900 text-base mb-4">
                  Intermediates-based chemicals are compounds used as raw
                  materials to produce pharmaceuticals, agrochemicals, dyes, and
                  other chemicals.
                </p>
                <a className="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </button>

              <button
                onClick={() => {
                  window.scrollTo(0, 0);
                  Navigate("/Product/Dyes");
                }}
                className="xl:w-1/4 lg:w-1/4 md:w-full p-4 border border-black border-opacity-80 shadow-2xl  bg-blue-200 rounded-lg transform transition-transform duration-300 hover:-translate-y-1 hover:translate-y-0"
              >
                <h2 className="text-lg sm:text-xl text-black font-medium title-font mb-2">
                  Dyes
                </h2>
                <p className="leading-relaxed text-gray-900 text-base mb-4">
                  Dyes-based chemicals are compounds used to impart color to
                  textiles, paper, and other materials in various industries.
                </p>
                <a className="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </button>

              <button
                onClick={() => {
                  window.scrollTo(0, 0);
                  Navigate("/Product/Conc_Textile");
                }}
                className="xl:w-1/4 lg:w-1/4 md:w-full p-4  border border-black border-opacity-80 shadow-2xl border-opacity-60 bg-gray-200 rounded-lg transform transition-transform duration-300 hover:-translate-y-1 hover:translate-y-0"
              >
                <h2 className="text-lg sm:text-xl text-black font-medium title-font mb-2">
                  Concentrated Textile Chemicals
                </h2>
                <p className="leading-relaxed text-gray-900 text-base mb-4">
                  High-strength textile chemicals designed for efficient dyeing,
                  printing, and finishing processes with minimal environmental
                  impact.
                </p>
                <a className="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </button>
            </div> */}

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => {
                window.scrollTo(0, 0);
                Navigate("/Product/Basic");
              }}
              className="xl:w-1/4 lg:w-1/4 md:w-full p-4 border border-black border-opacity-80 shadow-2xl border-opacity-60 bg-gray-200 rounded-lg transform transition-transform duration-300 hover:-translate-y-1 hover:translate-y-0"
            >
              <h2 className="text-lg sm:text-xl text-black font-medium title-font mb-2">
                Basic Chemicals
              </h2>
              <p className="leading-relaxed text-gray-900 text-base mb-4">
                Inorganic basic chemicals are fundamental industrial substances
                like acids, alkalis, salts, and gases used in various processes.
              </p>
              <a className="text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </button>

            <button
              onClick={() => {
                window.scrollTo(0, 0);
                Navigate("/Product/Textile");
              }}
              className="xl:w-1/4 lg:w-1/4 md:w-full p-4 border border-black border-opacity-80 shadow-2xl border-opacity-60 bg-blue-200 rounded-lg transform transition-transform duration-300 hover:-translate-y-1 hover:translate-y-0"
            >
              <h2 className="text-lg sm:text-xl text-black font-medium title-font mb-2">
                Textile Chemicals
              </h2>
              <p className="leading-relaxed text-gray-900 text-base mb-4">
                Textile-based chemicals include dyes, pigments, softeners,
                surfactants, and finishing agents used in fabric processing and
                production.
              </p>
              <a className="text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </button>

            <button
              onClick={() => {
                window.scrollTo(0, 0);
                Navigate("/Product/Intermediate");
              }}
              className="xl:w-1/4 lg:w-1/4 md:w-full p-4 border border-black border-opacity-80 shadow-2xl border-opacity-60 bg-gray-200 rounded-lg transform transition-transform duration-300 hover:-translate-y-1 hover:translate-y-0"
            >
              <h2 className="text-lg sm:text-xl text-black font-medium title-font mb-2">
                Intermediates
              </h2>
              <p className="leading-relaxed text-gray-900 text-base mb-4">
                Intermediates-based chemicals are compounds used as raw
                materials to produce pharmaceuticals, agrochemicals, dyes, and
                other chemicals.
              </p>
              <a className="text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </button>

            <button
              onClick={() => {
                window.scrollTo(0, 0);
                Navigate("/Product/Dyes");
              }}
              className="xl:w-1/4 lg:w-1/4 md:w-full p-4 border border-black border-opacity-80 shadow-2xl bg-blue-200 rounded-lg transform transition-transform duration-300 hover:-translate-y-1 hover:translate-y-0"
            >
              <h2 className="text-lg sm:text-xl text-black font-medium title-font mb-2">
                Dyes
              </h2>
              <p className="leading-relaxed text-gray-900 text-base mb-4">
                Dyes-based chemicals are compounds used to impart color to
                textiles, paper, and other materials in various industries.
              </p>
              <a className="text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </button>

            <button
              onClick={() => {
                window.scrollTo(0, 0);
                Navigate("/Product/Conc_Textile");
              }}
              className="xl:w-1/4 lg:w-1/4 md:w-full p-4 border border-black border-opacity-80 shadow-2xl border-opacity-60 bg-gray-200 rounded-lg transform transition-transform duration-300 hover:-translate-y-1 hover:translate-y-0"
            >
              <h2 className="text-lg sm:text-xl text-black font-medium title-font mb-2">
                Concentrated Textile Chemicals
              </h2>
              <p className="leading-relaxed text-gray-900 text-base mb-4">
                High-strength textile chemicals designed for efficient dyeing,
                printing, and finishing processes with minimal environmental
                impact.
              </p>
              <a className="text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </button>
          </div>

          {/* <button className="flex mx-auto mt-16 text-white dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 bg-indigo-500 border-0 py-2 px-8 hover:animate-hover-zoom-in focus:outline-none hover:bg-indigo-600 rounded text-lg">Learn More</button> */}
        </div>
      </div>

      {/* ######################################## Testemonial ################################################ */}

      {/* <section className="text-black  body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-500 mb-8" viewBox="0 0 975.036 975.036">
        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
      </svg>
      <p className="leading-relaxed text-lg">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. Man bun next level coloring book skateboard four loko knausgaard. Kitsch keffiyeh master cleanse direct trade indigo juice before they sold out gentrify plaid gastropub normcore XOXO 90's pickled cindigo jean shorts. Slow-carb next level shoindigoitch ethical authentic, yr scenester sriracha forage franzen organic drinking vinegar.</p>
      <span className="inline-block h-1 w-10 rounded bg-green-500 mt-8 mb-6"></span>
      <h2 className="text-white font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
      <p className="text-gray-500">Senior Product Designer</p>
    </div>
  </div>
</section>
     */}
      <section className="text-gray-600 body-font relative">
        <div className="container p-4 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Connect with Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Have questions or need assistance? We're here to help—reach out to
              us today!
            </p>
          </div>
          <form onSubmit={onSubmit}>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      for="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      for="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      for="number"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Mobile No.
                    </label>
                    <input
                      type="text"
                      id="number"
                      name="number"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      for="message"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Submit
                  </button>
                </div>
                {/* <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a class="text-indigo-500">example@email.com</a>
          <p class="leading-normal my-5">49 Smith St.
            <br/>Saint Cloud, MN 56301
          </p>
          <span class="inline-flex">
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-4 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-4 text-gray-500">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a class="ml-4 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div> */}
              </div>
              <span>{result}</span>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;
