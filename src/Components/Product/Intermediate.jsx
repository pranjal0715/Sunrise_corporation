import React from "react";

function Intermediate() {
  return (
    <div className="max-w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden mt-14 pt-4 m-4 p-4">
      <div>
        <h1 className="text-2xl md:text-4xl font-bold text-red-600 text-center pt-2 md:pt-4 gap-2 m-2">
          Chlorination Process
        </h1>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-blue-500 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-2 md:px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-2 md:px-6 py-3">
                  CAS No.
                </th>
                <th scope="col" className="px-2 md:px-6 py-3">
                  Purity
                </th>
                <th scope="col" className="px-2 md:px-6 py-3">
                  Packing Size
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "Chlorinated Paraffin",
                  CAS: "63449-39-8",
                  Purity: "52.00 / 62.00",
                  Packing: "SO Container/MS-SS Tanker/250 Kgs MS-HDPE Drum",
                },
                {
                  name: "Mono Chloro Benzene",
                  CAS: "108-90-7",
                  Purity: "99.95",
                  Packing: "ISO Container/MS-SS Tanker/MS-HDPE Drum",
                },
                {
                  name: "Orthor Dichloro Benzene",
                  CAS: "95-50-1",
                  Purity: "99.50/99.80",
                  Packing:
                    "ISO Container/250 Kgs GI and HDPE Drum / Road Tanker",
                },
                {
                  name: "Para Dichloro Benzene",
                  CAS: "106-46-7",
                  Purity: "99.80/99.90",
                  Packing: "20-50 Kgs HDPE BAG with Liner",
                },
                {
                  name: "1-2-4 Tri Chloro Benzene",
                  CAS: "81-61-6",
                  Purity: "99.50",
                  Packing: "Tanker Load/300 Kgs.GI Drum",
                },
                {
                  name: "Thinoyl Chloride",
                  CAS: "7719-09-7",
                  Purity: "99.60",
                  Packing:
                    "300 Kgs. Zink Coated MS Drum/ Road Tanker / ISO Tank",
                },
                {
                  name: "Calcium Chloride Liquid",
                  CAS: "10043-52-4",
                  Purity: "35.00",
                  Packing: "Road Tanker Load",
                },
                {
                  name: "Calcium Chloride Granules",
                  CAS: "10043-52-4",
                  Purity: "94-96",
                  Packing: "1000 Kgs. Jumbo BAG/ 25-30 kgs. HDPE Bag",
                },
                {
                  name: "Calcium Chloride Fused",
                  CAS: "10043-52-4",
                  Purity: "72-75",
                  Packing: "1000 Kgs. Jumbo BAG/ 25-30 kgs. HDPE Bag",
                },
                {
                  name: "Calcium Chloride Powder",
                  CAS: "10043-52-4",
                  Purity: "94-96",
                  Packing: "1000 Kgs. Jumbo BAG/ 25-30 kgs. HDPE Bag",
                },
                {
                  name: "HCL -32% -34% 35%",
                  CAS: "76.47 - 01-0",
                  Purity: "--",
                  Packing: "250 Kgs HDPE Drum/ Road Tanker /ISO Tank",
                },
                {
                  name: "HCL Virgin(Caustic)",
                  CAS: "767-01-0",
                  Purity: "32.00",
                  Packing: "250 Kgs HDPE Drum/ Road Tanker /ISO Tank",
                },
                {
                  name: "Meta Dichloro Benzene-70%",
                  CAS: "63697-17-6",
                  Purity: "--",
                  Packing: "HDPE / MS Drum / MS Tanker",
                },
                {
                  name: "Sodium Hypochlorite ",
                  CAS: "7661-52-9/7778-54-3",
                  Purity: "30 GPL",
                  Packing: "Tanker Load",
                },
                // Add more products here
              ].map((product, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-2 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {product.name}
                  </th>
                  <td className="px-2 md:px-6 py-4">{product.CAS}</td>
                  <td className="px-2 md:px-6 py-4">{product.Purity}</td>
                  <td className="px-2 md:px-6 py-4">{product.Packing}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>


      <div>
        <h1 className="text-2xl md:text-4xl font-bold text-red-600 text-center pt-2 md:pt-4 gap-2 m-2">
          Nitration Process
        </h1>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-blue-500 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-2 md:px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-2 md:px-6 py-3">
                  CAS No.
                </th>
                <th scope="col" className="px-2 md:px-6 py-3">
                  Purity
                </th>
                <th scope="col" className="px-2 md:px-6 py-3">
                  Packing Size
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "Nitro Benzene",
                  CAS: "98-95-3",
                  Purity: "99.80",
                  Packing: "ISO Tank/250 Kgs HDPE Drum/Tanker",
                },
                {
                  name: "Para Nitro Chloro Benzene",
                  CAS: "100-00-5",
                  Purity: "99.50",
                  Packing: "50 Kgs HDPE Bag with Liner, Jacketed Coil Tanker",
                },
                {
                  name: "Ortho Nitro Chloro Benzene",
                  CAS: "88-73-3",
                  Purity: "99.85",
                  Packing:
                    "ISO Container/250 Kgs MS Drum / Jacketed Coil Tanker",
                },
                {
                  name: "Meta Nitro Chloro Benzene",
                  CAS: "121-73-3",
                  Purity: "99.90",
                  Packing: "Jacketed Coil Tanker",
                },
                {
                  name: "Ortho Nitro Toluene",
                  CAS: "88-72-2",
                  Purity: "99.50",
                  Packing: "Tanker Load/225 Kgs.GI Drum",
                },
                {
                  name: "Para Nitro Toluene",
                  CAS: "99-99-0",
                  Purity: "99.50",
                  Packing:
                    "22/50 Kgs. HDPE Bag. Jacketed Coil Tanker",
                },
                {
                  name: "Meta Nitro Toluene",
                  CAS: "108-44-1",
                  Purity: "99.50",
                  Packing: "225 Kgs. HDPE Bag. Jacketed Coil Tanker",
                },
                {
                  name: "2 Ethylhexyl Nitrate",
                  CAS: "27247-96-7",
                  Purity: "99.50",
                  Packing: "ISO Tank/ Tanker, 190 Kgs MS Drum",
                },
                {
                  name: "2:4 Di Nitro Chloro Benzene",
                  CAS: "97-00-7",
                  Purity: "99.00",
                  Packing: "50 Kgs HDPE Bag/ISO Container/600 Kgs Jumbo Bag",
                },
                {
                  name: "2:5 Di Chloro Nitro Benzene",
                  CAS: "89-61-2",
                  Purity: "99.60",
                  Packing: "50 Kgs HDPE Bag With Liner",
                },
                {
                  name: "2:3 Di Chloro Nitro benzene",
                  CAS: "3209-22-1",
                  Purity: "82.00",
                  Packing: "Tanker/ISO Tank",
                },
                {
                  name: "3:4 Di Chloro Nitro Benzene",
                  CAS: "99-54-7",
                  Purity: "99.60",
                  Packing: "300 Kgs MS Drum, Jacketed Coil Tanker",
                },
                
                // Add more products here
              ].map((product, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-2 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {product.name}
                  </th>
                  <td className="px-2 md:px-6 py-4">{product.CAS}</td>
                  <td className="px-2 md:px-6 py-4">{product.Purity}</td>
                  <td className="px-2 md:px-6 py-4">{product.Packing}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h1 className="text-2xl md:text-4xl font-bold text-red-600 text-center pt-2 md:pt-4 m-2">
          Ammonolysis Process
        </h1>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-blue-500 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-2 md:px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-2 md:px-6 py-3">
                  CAS No.
                </th>
                <th scope="col" className="px-2 md:px-6 py-3">
                  Purity
                </th>
                <th scope="col" className="px-2 md:px-6 py-3">
                  Packing Size
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "Para Nitro Aniline",
                  CAS: "101-01-6",
                  Purity: "99.50",
                  Packing: "50 Kgs HDPE Bag With Liner",
                },
                {
                  name: "Ortho Nitro Aniline",
                  CAS: "88-74-4",
                  Purity: "98.00",
                  Packing: "50 Kgs HDPE Bag with Liner",
                },
                
                
                // Add more products here
              ].map((product, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-2 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {product.name}
                  </th>
                  <td className="px-2 md:px-6 py-4">{product.CAS}</td>
                  <td className="px-2 md:px-6 py-4">{product.Purity}</td>
                  <td className="px-2 md:px-6 py-4">{product.Packing}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Intermediate;
