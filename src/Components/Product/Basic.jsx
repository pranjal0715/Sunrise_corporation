import React from "react";

function Basic() {
  return (
    <div className="md:mx-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden m-20 p-4">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-blue-500 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {[
            {
              name: "Green Acid",
              description: "--",
            },
            {
              name: "Acetic Acid (Glacial) GNFC",
              description: "--",
            },
            {
              name: "Acetic Acid (DILUTE)",
              description: "--",
            },
            {
              name: "Hydrochloric Acid",
              description: "--",
            },
            {
              name: "Technical Grade Urea (GNFC/GSFC)",
              description: "--",
            },
            {
              name: "Formic Acid 85%",
              description: "--",
            },
            {
              name: "Flamguard CP",
              description: "--",
            },
            {
              name: "Maize Starch",
              description: "--",
            },
            {
              name: "Oxalic Acid",
              description: "--",
            },
            {
              name: "Sodium Sulphate",
              description: "--",
            },
            {
              name: "Sodium Hydrosulphite",
              description: "--",
            },
            {
              name: "Sodium Sulphite",
              description: "--",
            },
            {
              name: "Sodium Bi Sulphite",
              description: "--",
            },
            {
              name: "Sodium Meta Sulphite",
              description: "--",
            },
            {
              name: "Sodium Nitrite",
              description: "--",
            },
            {
              name: "Sodium Nitrate",
              description: "--",
            },
            {
              name: "Caustic Soda Lye/Flakes",
              description: "--",
            },
            {
              name: "Sulphuric Acid-98% ",
              description: "--",
            },
            {
              name: "Sodium Acetate ",
              description: "--",
            },
            {
              name: "Olieum-23%,65%",
              description: "--",
            },
            {
              name: "Tartric Acid",
              description: "--",
            },
            {
              name: "Citric Acid",
              description: "--",
            },
            {
              name: "Industrial Salt",
              description: "--",
            },
            {
              name: "Ethyl Acetate",
              description: "--",
            },
            {
              name: "Toulene",
              description: "--",
            },
            {
              name: "Sodium Meta BI Sulphite",
              description: "--",
            },
            {
              name: "Soda Ash",
              description: "--",
            },
            

            // Add more products here
          ].map((product, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {product.name}
              </th>
              <td className="px-6 py-4">{product.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Basic;
