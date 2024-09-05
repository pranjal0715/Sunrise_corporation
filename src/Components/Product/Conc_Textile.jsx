import React from "react";

function Conc_Textile() {
  return (
    <div className="max-w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden mt-14 pt-4 m-4 p-4">
      {/* #################################################### PRETREATMENT CHEMICALS ################################################### */}

      <div>
        <h1 className="text-2xl md:text-4xl font-bold text-red-600 text-center pt-2 md:pt-4 gap-2 m-2">
          PRE-TREATMENT CHEMICALS
        </h1>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-blue-500 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-2 md:px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-2 md:px-6 py-3">
                  DESCRIPTION
                </th>
                <th scope="col" className="px-2 md:px-6 py-3">
                  CONCENTRATION
                </th>
                <th scope="col" className="px-2 md:px-6 py-3">
                  SUGGESTED DILUTION <br /> (Conc + Water = Standard)
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "Finozyme GPS",
                  DESCRIPTION:
                    "An alfa-amylase based enzymatic desizing agent for cotton",
                  CONCENTRATION: "NA",
                  DILUTION: "Standard",
                },
                {
                  name: "Finocon K JET Conc",
                  DESCRIPTION:
                    "High Performance, Low-foam, APEO free, wetting agent & detergent for both exhaust and continuous method especially for soft flow ",
                  CONCENTRATION: "80%",
                  DILUTION: "1+1=2",
                },
                {
                  name: "Finocon RSPL",
                  DESCRIPTION:
                    "High Performance, Low-foamg, APEO free, low-foaming wetting agent especially for continuous process.",
                  CONCENTRATION: "100% active",
                  DILUTION: "1+1=2",
                },
                {
                  name: "Finocon LTX",
                  DESCRIPTION:
                    "A powder form all-in-one pretreatment product used for cellulose fibre and its blend. it contains the integrant scouring agents penetrating agent, alkali, stabilizer etc and only caustic and hydrogen peroxide is to be added in the process.",
                  CONCENTRATION: "Powder",
                  DILUTION: "Standard",
                },
                {
                  name: "Finocon SM Conc",
                  DESCRIPTION:
                    "High Performance, APEO free, low foaming wetting agent in concentrated form",
                  CONCENTRATION: "90% active",
                  DILUTION: "1+2=3",
                },
                {
                  name: "Finocon WDR MI 14530",
                  DESCRIPTION:
                    "Wetting cum dearating agent specially for denim.",
                  CONCENTRATION: "42%",
                  DILUTION: "Standard",
                },
                {
                  name: "Finocon 4X",
                  DESCRIPTION:
                    "Versatile scouring cum stain remover for polyester and its blends",
                  CONCENTRATION: "40%",
                  DILUTION: "Standard",
                },
                {
                  name: "Finocon MA-OUS Conc",
                  DESCRIPTION:
                    "High power, low-foam mercerising wetting agent, non cresylic",
                  CONCENTRATION: "45%",
                  DILUTION: "Standard",
                },
                {
                  name: "Finocon MAOZ",
                  DESCRIPTION: "Concentrated mercerising wetting agent ",
                  CONCENTRATION: "87%",
                  DILUTION: "1+3=4",
                },
                {
                  name: "Finocon AD 80",
                  DESCRIPTION:
                    "Concentrated, anionic wetting and rewetting agent (OT Grade) ",
                  CONCENTRATION: "80%",
                  DILUTION: "1+1=2",
                },
                {
                  name: "Biotex NELA",
                  DESCRIPTION:
                    "All in one multifunctional product for pretreatment process reduces caustic dosage and process time",
                  CONCENTRATION: "40%",
                  DILUTION: "Standard",
                },
                {
                  name: "Finozyme SOIB 3000L",
                  DESCRIPTION:
                    "Concentrated bioscouring enzyme eliminated to conventional process (Dosage: 0.5 to 1 gpl)",
                  CONCENTRATION: "NA",
                  DILUTION: "Standard",
                },
                {
                  name: "Biotex LTB",
                  DESCRIPTION:
                    "Low Temperature (75°C - 80°C) wetting cum scouring agent retain fiber/yarn strength also saved peroxide and stabilizer",
                  CONCENTRATION: "40%",
                  DILUTION: "Standard",
                },
                {
                  name: "Finocon SEQ New",
                  DESCRIPTION:
                    "High Concentrated sequestering agent in powder form for calcium magnesium nd heavy metal ions, it can be used as washing of agent too",
                  CONCENTRATION: "100% Powder",
                  DILUTION: "1+4=5",
                },
                {
                  name: "Finoquest W",
                  DESCRIPTION: "Concentrated sequestering agent in liquid form",
                  CONCENTRATION: "500 PPM",
                  DILUTION: "1+4=5",
                },
                {
                  name: "Finozyme AC",
                  DESCRIPTION:
                    "Concentrated acid enzyme for Bio-polishing for cellulosic fabric and denim garments (Dosage: 0.1 to 0.4%)",
                  CONCENTRATION: "NA",
                  DILUTION: "Standard",
                },
                {
                  name: "Finozyme EN Extra/ Finozyme 25000L",
                  DESCRIPTION:
                    "A Concentrated neutral cellulase enzyme product for textile biofinishing for cellulosic fabric and denim garments",
                  CONCENTRATION: "NA",
                  DILUTION: "Standard",
                },
                {
                  name: "Finozyme PKCAT",
                  DESCRIPTION:
                    "A COncentrated catalyse (Enzyme) for peroxide neutralisation",
                  CONCENTRATION: "NA",
                  DILUTION: "1+14=15",
                },
                {
                  name: "Finocon PINKY",
                  DESCRIPTION:
                    "Potassium Permanganate neutraliser in powder form",
                  CONCENTRATION: "100%",
                  DILUTION: "1+3=4",
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
                  <td className="px-2 md:px-6 py-4">{product.DESCRIPTION}</td>
                  <td className="px-2 md:px-6 py-4">{product.CONCENTRATION}</td>
                  <td className="px-2 md:px-6 py-4">{product.DILUTION}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ################################################## DYEING CHEMICALS ########################################################## */}

      <div>
        <h1 className="text-2xl md:text-4xl font-bold text-red-600 text-center pt-2 md:pt-4 gap-2 m-2">
          DYEING CHEMICALS
        </h1>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-blue-500 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-2 md:px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-2 md:px-6 py-3">
                  DESCRIPTION
                </th>
                <th scope="col" className="px-2 md:px-6 py-3">
                  CONCENTRATION
                </th>
                <th scope="col" className="px-2 md:px-6 py-3">
                  SUGGESTED DILUTION <br /> (Conc + Water = Standard)
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "Finocon ECO 100",
                  DESCRIPTION: "An Acetic and substitute for all purpose",
                  CONCENTRATION: "600/700 Acid Value",
                  DILUTION: "Standard",
                },
                {
                  name: "Finocon CDl New",
                  DESCRIPTION:
                    "A Special leveling agent for cotton dyeing with reactive dyes",
                  CONCENTRATION: "35%",
                  DILUTION: "1+1=2",
                },
                {
                  name: "Finocon CLA 100S",
                  DESCRIPTION:
                    "Leveling and retarding agent for acrylic substrates",
                  CONCENTRATION: "30%",
                  DILUTION: "1+1=2",
                },
                {
                  name: "Finocon DALP",
                  DESCRIPTION:
                    "Dispersing and leveling agent based on migration theory for polyester dyeing with no retarding effect",
                  CONCENTRATION: "30%",
                  DILUTION: "Standard",
                },
                {
                  name: "Finocon DALP 100 Conc",
                  DESCRIPTION:
                    "Dispersing and leveling agent based on migration theory for polyester dyeing with no retarding effect",
                  CONCENTRATION: "100%",
                  DILUTION: "1+2=3",
                },
                {
                  name: "Finosil AB 100",
                  DESCRIPTION:
                    "Very effective leveling agent for dyeing of polyester and their blends with disperse dyes with retarding effect",
                  CONCENTRATION: "100%",
                  DILUTION: "1+2=3",
                },
                {
                  name: "Finolube PP",
                  DESCRIPTION:
                    "Concentrate lubricant/anticrease in powder form",
                  CONCENTRATION: "100% Powder",
                  DILUTION: "1+99=100",
                },
                {
                  name: "Finocon WS Powder",
                  DESCRIPTION:
                    "High Performance dispersing agent in powder form",
                  CONCENTRATION: "100% Powder",
                  DILUTION: "1+1=2",
                },
                {
                  name: "Biotex CT 22",
                  DESCRIPTION:
                    "A novel soaping agent for P/C Blends which eliminates the reduction clearing process and is energy saving, cost saving and also reducing ETP load by 30%",
                  CONCENTRATION: "32%",
                  DILUTION: "Standard",
                },
                {
                  name: "Finocon ADAP-100",
                  DESCRIPTION:
                    "Highly effective soda ash substitute in powder form (1/10 of soda ash) ",
                  CONCENTRATION: "100% Powder",
                  DILUTION: "Standard",
                },
                {
                  name: "Finocon RDP",
                  DESCRIPTION:
                    "An efficient dispersent and protective colloid, chelating agent for all stages in processing especially washing off agent for reactive dyed & printed fabrics, in powder form.",
                  CONCENTRATION: "100% Powder",
                  DILUTION: "Standard",
                },
                {
                  name: "Finocon 6065W",
                  DESCRIPTION:
                    "Highly effective low-temperature soaping agent for reactive dyeing",
                  CONCENTRATION: "NA",
                  DILUTION: "Standard",
                },
                {
                  name: "Finocon SSWX",
                  DESCRIPTION:
                    "Highly effective single bath soaping agent for reactive dyeing",
                  CONCENTRATION: "NA",
                  DILUTION: "Standard",
                },
                {
                  name: "Diquest SN",
                  DESCRIPTION:
                    "Unique washing off agent with protective colloid and sequestering properties",
                  CONCENTRATION: "40%",
                  DILUTION: "2+1=3",
                },
                {
                  name: "Finofix PBC Conc",
                  DESCRIPTION:
                    "Concentrated Formaldehyde base fixing agent for cotton",
                  CONCENTRATION: "60%",
                  DILUTION: "Standard",
                },
                {
                  name: "Finofix RD",
                  DESCRIPTION:
                    "A Special non formaldehyde fixing agent for dyeing especially for the turquoise shade and tone change.",
                  CONCENTRATION: "50%",
                  DILUTION: "1+1=2",
                },
                {
                  name: "Finofix NFE conc",
                  DESCRIPTION:
                    "Concentrated High Performance non formaldehyde fixing agent",
                  CONCENTRATION: "60%",
                  DILUTION: "1+2=3",
                },
                {
                  name: "Finofix NFY",
                  DESCRIPTION:
                    "A special non formaldehyde fixing agent for dyeing especially for the turquoise shade and tone change",
                  CONCENTRATION: "80%",
                  DILUTION: "1+3=4",
                },
                {
                  name: "Finofix CF Conc",
                  DESCRIPTION:
                    "A Special Chlorine fastness non-formaldehyde fixing agent",
                  CONCENTRATION: "40%",
                  DILUTION: "Standard",
                },
                {
                  name: "Finocon CRO 100",
                  DESCRIPTION:
                    "It is an advanced wet rub fastness improver for cellulosics and blends providing enhanced fastness properties",
                  CONCENTRATION: "30%",
                  DILUTION: "1+5=6",
                },
                {
                  name: "Finocon MED",
                  DESCRIPTION:
                    "Anti-back staining agent in all process of denim and garment in powder form",
                  CONCENTRATION: "100% Powder",
                  DILUTION: "Standard",
                },
                {
                  name: "Finocon ABSZ WP 40",
                  DESCRIPTION:
                    "A high performance antiback staining for denims",
                  CONCENTRATION: "40%",
                  DILUTION: "1+3=4",
                },
                {
                  name: "Biotex NAHY",
                  DESCRIPTION:
                    "Four times stronger sodium hydrosulphite substitutes in powder form",
                  CONCENTRATION: "100% Powder ",
                  DILUTION: "1+3=4",
                },
                {
                  name: "Finotreat 100P",
                  DESCRIPTION:
                    "Reduction clearing agent in acidic medium in powder form",
                  CONCENTRATION: "100% Powder",
                  DILUTION: "1+3=4",
                },
                {
                  name: "Finotreat",
                  DESCRIPTION:
                    "Reduction Clearing agent in acidic medium in liquid form ",
                  CONCENTRATION: "38%",
                  DILUTION: "Standard",
                },
                {
                  name: "Finocon CAZ Conc",
                  DESCRIPTION:
                    "A unique lubricating, anticreasing agent cum emulsifier especially for lycra",
                  CONCENTRATION: "80%",
                  DILUTION: "1+2=3",
                },
                {
                  name: "Finocon FAMK",
                  DESCRIPTION:
                    "An anti migration agent for the continuous dyeing and pad batch process",
                  CONCENTRATION: "27%",
                  DILUTION: "Standard",
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
                  <td className="px-2 md:px-6 py-4">{product.DESCRIPTION}</td>
                  <td className="px-2 md:px-6 py-4">{product.CONCENTRATION}</td>
                  <td className="px-2 md:px-6 py-4">{product.DILUTION}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ###################################################### PRINTING CHEMICALS ##################################################### */}

      <div>
        <h1 className="text-2xl md:text-4xl font-bold text-red-600 text-center pt-2 md:pt-4 gap-2 m-2">
          PRINTING CHEMICALS
        </h1>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-blue-500 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-2 md:px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-2 md:px-6 py-3">
                  DESCRIPTION
                </th>
                <th scope="col" className="px-2 md:px-6 py-3">
                  CONCENTRATION
                </th>
                <th scope="col" className="px-2 md:px-6 py-3">
                  SUGGESTED DILUTION <br /> (Conc + Water = Standard)
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "Bioprint RDT ECO",
                  DESCRIPTION: "Sodium Alginate substitute in powder form",
                  CONCENTRATION: "100%",
                  DILUTION: "Standard",
                },
                {
                  name: "Bioprint RDT",
                  DESCRIPTION:
                    "Sodium Alignate substitute in powder form suitable for viscose also",
                  CONCENTRATION: "100%",
                  DILUTION: "Standard",
                },
                {
                  name: "Finothick RDHT 2A",
                  DESCRIPTION:
                    "A combination of natural and synthetic thickener for reactive printing in paste form (Dosage 3.0 to 3.50%) ",
                  CONCENTRATION: "NA",
                  DILUTION: "Standard",
                },
                {
                  name: "Finofiix CL-DU",
                  DESCRIPTION:
                    "Economical melamine based fixed agent for pigment printing.",
                  CONCENTRATION: "60%",
                  DILUTION: "Standard",
                },
                {
                  name: "FInofix CLDU-Y",
                  DESCRIPTION:
                    "Concentrated melamine based fixing agent for pigment printing",
                  CONCENTRATION: "80%",
                  DILUTION: "Standard",
                },
                {
                  name: "Finofix CLMAG",
                  DESCRIPTION:
                    "Low formaldehyde melamine based fixing agent for pigment printing",
                  CONCENTRATION: "60%",
                  DILUTION: "Standard",
                },
                {
                  name: "Finofix CL",
                  DESCRIPTION:
                    "Effective melamine based fixing agent for pigment printing",
                  CONCENTRATION: "62%",
                  DILUTION: "Standard",
                },
                {
                  name: "Finobind AQBD",
                  DESCRIPTION:
                    "Acrylic binder for pigment printing with excellent fastness properties",
                  CONCENTRATION: "38%",
                  DILUTION: "Standard",
                },
                {
                  name: "Finogal R",
                  DESCRIPTION:
                    "A mild oxidizing agent widely used as a safeguard against the reduction of dyes in alkaline print pastes and in closed dyeing systems where reduction condition may occur. it is also sed in boiling/ scouring of coloured-border piece goods",
                  CONCENTRATION: "Powder",
                  DILUTION: "Standard",
                },

                // Add more products here
              ].map((product, index) => (
                <tr
                  key={index}
                  className="bg-white border-black dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-2 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {product.name}
                  </th>
                  <td className="px-2 md:px-6 py-4">{product.DESCRIPTION}</td>
                  <td className="px-2 md:px-6 py-4">{product.CONCENTRATION}</td>
                  <td className="px-2 md:px-6 py-4">{product.DILUTION}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ##################################################### FINISHING CHEMICALS ###################################################### */}

      <div>
        <h1 className="text-2xl md:text-4xl font-bold text-red-600 text-center pt-2 md:pt-4 gap-2 m-2">
          FINISHING CHEMICALS
        </h1>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-blue-500 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-2 md:px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-2 md:px-6 py-3">
                  DESCRIPTION
                </th>
                <th scope="col" className="px-2 md:px-6 py-3">
                  CONCENTRATION
                </th>
                <th scope="col" className="px-2 md:px-6 py-3">
                  SUGGESTED DILUTION <br /> (Conc + Water = Standard)
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "Finopret LF Plus / Finox KVEC",
                  DESCRIPTION:
                    "Low formaldehyde anti crease agent with built-in catalyst",
                  CONCENTRATION: "50%",
                  DILUTION: "Standard",
                },
                {
                  name: "Finox DMDF V V",
                  DESCRIPTION:
                    "DMDHEU based anti crease agent, without catalyst",
                  CONCENTRATION: "55%",
                  DILUTION: "Standard",
                },
                {
                  name: "Finopret ZF",
                  DESCRIPTION: "Non Formaldehyde anti crease agent (Resin)",
                  CONCENTRATION: "50%",
                  DILUTION: "Standard",
                },
                {
                  name: "Finopret ZFR",
                  DESCRIPTION:
                    "Non formaldehyde anti crease agent with catalyst (Resin)",
                  CONCENTRATION: "52%",
                  DILUTION: "Standard",
                },
                {
                  name: "Finox CS Flakes",
                  DESCRIPTION:
                    "An economical hot water soluble cationic softener in flakes form",
                  CONCENTRATION: "100%",
                  DILUTION: "1+9=10",
                },
                {
                  name: "Finox CWS Flakes",
                  DESCRIPTION:
                    "Cold water soluble cationic softener in flakes form",
                  CONCENTRATION: "100%",
                  DILUTION: "1+9=10",
                },
                {
                  name: "Finox NIS Flakes",
                  DESCRIPTION:
                    "An economical non-ionic softener in flakes form",
                  CONCENTRATION: "100%",
                  DILUTION: "1+9=10",
                },
                {
                  name: "Finox CSPL",
                  DESCRIPTION:
                    "Concentrated hydrophilic cationic softener in liquid form with excellent softness specially for terry towel",
                  CONCENTRATION: "100% Active",
                  DILUTION: "1+9=10",
                },
                {
                  name: "Bioquat 90",
                  DESCRIPTION:
                    "A concentrated cationic fatty quat-glycol softener synthesized specially to impart excellent silkiness and fluffy softness, coupled with full handle for all fibre types and can be applied by exhaust & padding.",
                  CONCENTRATION: "90%",
                  DILUTION: "1+7=8",
                },
                {
                  name: "Finox RSN-770 new",
                  DESCRIPTION:
                    "New generation concentrated micro amino silicone softener for excellent hand feel",
                  CONCENTRATION: "30%",
                  DILUTION: "1+3=4",
                },
                {
                  name: "Finox SIL Premium",
                  DESCRIPTION:
                    "High Performance micro amino silicone softener concentrated",
                  CONCENTRATION: "60%",
                  DILUTION: "1+2=3",
                },
                {
                  name: "Finox 3P",
                  DESCRIPTION:
                    "Concentrated micro amino silicone softener for excellent hand feel",
                  CONCENTRATION: "70%",
                  DILUTION: "1+2=3",
                },
                {
                  name: "Finox XLHRW VV",
                  DESCRIPTION:
                    "A unique quat based hydrophilic silicone softener which imparts superior softness and extra hydrophilicity to the substrates especially towels",
                  CONCENTRATION: "55%",
                  DILUTION: "Standard",
                },
                {
                  name: "Finox RKSM",
                  DESCRIPTION:
                    "A unique quat based hydrophilic silicone softener which imparts superior unusual powerful softness and hydrophilicity to the substrates especially towels",
                  CONCENTRATION: "50%",
                  DILUTION: "Standard",
                },
                {
                  name: "Finox LNFY Premium",
                  DESCRIPTION:
                    "Non Yellowing, Low foam cationic softener impart excellent softness",
                  CONCENTRATION: "18%%",
                  DILUTION: "Standard",
                },
                {
                  name: "Finox LUB DH",
                  DESCRIPTION:
                    "Specially yarn lubricant impart high degree of lubricancy",
                  CONCENTRATION: "25%",
                  DILUTION: "Standard",
                },
                {
                  name: "Finolube PEHID 40",
                  DESCRIPTION: "High Density polyethylene Emulsion ",
                  CONCENTRATION: "40%",
                  DILUTION: "1+3=4",
                },
                {
                  name: "Finolube PEC ECO",
                  DESCRIPTION: "Polyethylene emulsion for finish and glaze",
                  CONCENTRATION: "30%",
                  DILUTION: "Standard",
                },
                {
                  name: "Finoguard SIFX/Finoguard SI",
                  DESCRIPTION:
                    "Fluorocarbon based on concentrated water and oil repellent agent on C8 chemistry",
                  CONCENTRATION: "30%",
                  DILUTION: "1+1=2",
                },
                {
                  name: "Finoguard C6 L",
                  DESCRIPTION:
                    "Fluorocarbon based water and oil repellent agent on C6 chemistry",
                  CONCENTRATION: "30%",
                  DILUTION: "1+1=2",
                },
                {
                  name: "Finoguard Zero CP",
                  DESCRIPTION: "Non fluorocarbon water repellent agent",
                  CONCENTRATION: "25%",
                  DILUTION: "1+1=2",
                },
                {
                  name: "Finofresh 100",
                  DESCRIPTION:
                    "A Silane quat base anti microbial and anti odor finishing agent",
                  CONCENTRATION: "NA",
                  DILUTION: "Standard",
                },
                {
                  name: "Biosoft AOZ Conc",
                  DESCRIPTION:
                    "Concentrated anti ozone softener with excellent soft feel",
                  CONCENTRATION: "90%",
                  DILUTION: "Standard",
                },
                {
                  name: "Finox UV2000",
                  DESCRIPTION:
                    "Special finishing agent which enhances colour fastness to light & perspiration for cellulosic dyed with reactive & direct dye. treated fbric exhibits excelent ultravoilet absorbing properties durable to washing resulting in improved SPF ratings",
                  CONCENTRATION: "NA",
                  DILUTION: "Standard",
                },
                {
                  name: "Finolose 100",
                  DESCRIPTION:
                    "A concentrated specially softener to impar softness, antistatic, wicking & soil release finish",
                  CONCENTRATION: "100%",
                  DILUTION: "1+4=5",
                },
                {
                  name: "Bioguard SR",
                  DESCRIPTION:
                    "Fluorocarbon emulsion for soil release treatment on all fibres.",
                  CONCENTRATION: "20%",
                  DILUTION: "Standard",
                },

                // Add more products here
              ].map((product, index) => (
                <tr
                  key={index}
                  className="bg-white border-black dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-2 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {product.name}
                  </th>
                  <td className="px-2 md:px-6 py-4">{product.DESCRIPTION}</td>
                  <td className="px-2 md:px-6 py-4">{product.CONCENTRATION}</td>
                  <td className="px-2 md:px-6 py-4">{product.DILUTION}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Conc_Textile;
