import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { useState } from "react";
import { MiddlePara } from "../../components/MiddlePara/MiddlePara";
import ChatBot from "../../components/ChatBot/ChatBot";

export const WeGrow = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [flowers, isflowers] = useState(true);
  const toggleHidden = () => {
    setIsHidden(!isHidden);
    isflowers(!flowers);
  };
  return (
    <>
      <Navbar whatwegrow="true" />
      <div
        className="vegetablespage"
        style={{ marginTop: "100px", marginBottom: "50px" }}
        hidden={isHidden}
      >
        <div className="bg_">
          <section
            className="heading"
            style={{
              height: "600px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1
              className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-[50px] leading-tight anim"
              style={{
                fontWeight: "bolder",
                fontFamily: "Quattrocento Sans, sans-serif",
                margin: "auto",
                width: "60vw",
              }}
            >
              Cultivated Harvest: Our Grown Vegetables
            </h1>
            <button className="growbut" onClick={toggleHidden}>
              Flowers
            </button>
          </section>
        </div>
        <div className="crops flex flex-wrap justify-around">
          <div className="cell">
            <a href="#tomato" className="cell">
              <img
                src="https://www.svgrepo.com/show/120941/tomato.svg"
                className="vegie flex-auto p-4 m-2 w-[80px]"
              />
              <p className="vegt">Tomato</p>
            </a>
          </div>
          <div className="cell">
            <a href="#lettuce" className="cell">
              <img
                src="https://www.svgrepo.com/show/475202/lettuce.svg"
                className="vegie flex-auto p-4 m-2 w-[80px]"
              />
              <p className="vegt">Lettuce</p>
            </a>
          </div>
          <div className="cell">
            <a href="#radish" className="cell">
              <img
                src="https://www.svgrepo.com/show/280775/radish.svg"
                className="vegie flex-auto p-4 m-2 w-[80px]"
              />
              <p className="vegt">Radish</p>
            </a>
          </div>
          <div className="cell">
            <a href="#spinach" className="cell">
              <img
                src="https://www.svgrepo.com/show/312451/leafy-green.svg"
                className="vegie flex-auto p-4 m-2 w-[80px]"
              />
              <p className="vegt">Spinach</p>
            </a>
          </div>
          <div className="cell">
            {" "}
            <a href="#strawberry" className="cell">
              <img
                src="https://www.svgrepo.com/show/530214/strawberry.svg"
                className="vegie flex-auto p-4 m-2 w-[80px]"
              />
              <p className="vegt">Strawberry</p>
            </a>
          </div>
        </div>
        <hr className="line" id="tomato" />
        {/*  */}

        <div style={{ marginTop: "70px" }}></div>
        <MiddlePara heading="Tomato" />
        <div className="main flex flex-col md:flex-row">
          <div className="w-[90vw] md:w-[55%]">
            <p
              className="textmain invest__description"
              style={{ fontFamily: "Quattrocento Sans, sans-serif" }}
            >
              Hydroponic growers generally don't pick green tomatoes and store
              them in a cool room.Instead, they let the tomatoes ripen on the
              vine for flavor, sweetness, and juiciness<br></br>
              <br></br>
              <span className="invest__description">&#x2022; Nutrients: </span>
              Tomatoes need high levels of nitrogen, phosphorus, and potassium.
              <br></br>
              <br></br>
              <span className="invest__description">&#x2022; pH: </span>{" "}
              Tomatoes thrive in a pH of around 5.8 to 6.3.<br></br>
              <br></br>
              <span className="invest__description">&#x2022; EC: </span> EC
              levels should be maintained between 2.0 to 3.5 milliMhos.
              <br></br>
              <br></br>
              <span className="invest__description">
                &#x2022; Support:{" "}
              </span>{" "}
              Tomato plants need support to grow, so you will likely need a
              trellis.<br></br>
              <br></br>
              <span className="invest__description">
                &#x2022; Lighting:{" "}
              </span>{" "}
              Tomato plants love light and can grow to be large and produce a
              lot of fruit. They are day neutral, so they don't require a
              specific duration of light to produce flowers and fruit.<br></br>
              <br></br>
              <span className="invest__description">
                &#x2022; Ventilation:{" "}
              </span>{" "}
              Hydroponic gardens require grow lights and ventilation to help
              plants grow. The moisture from nutrients and water can create a
              humid environment, so proper ventilation is required so your
              plants don't smother or wilt.<br></br>
              <br></br>
              <span className="invest__description">
                &#x2022; Fertilizer:{" "}
              </span>{" "}
              Hydroponically grown plants need special fertilizer to grow and
              thrive. These water-soluble fertilizers are fed directly onto the
              plant's roots.<br></br>
              <br></br>
              <span className="invest__description">
                &#x2022; Pruning:{" "}
              </span>{" "}
              Pruning is crucial for tomato production, as it ensures proper
              utilization of energy in growth of fruits and the main stem.
            </p>
          </div>
          <div className="right mt-10 md:mt-0">
            <img
              src="https://i.ibb.co/jvpxKhf/tomatoesmain.jpg"
              className="mainright md:w-[50%]"
            />
          </div>
        </div>
        <hr className="line" id="lettuce" />
        {/*  */}
        <div style={{ marginTop: "70px" }}></div>
        <MiddlePara heading="Lettuce" />
        <div className="main flex flex-col-reverse md:flex-row">
          <div className="right mt-10 md:mt-0">
            <img
              src="https://i.ibb.co/rZnQ0FY/lettucemain.jpg"
              className="mainright md:w-[50%]"
            />
          </div>
          <div className="left">
            <p
              className="textmain"
              style={{ fontFamily: "Quattrocento Sans, sans-serif" }}
            >
              Lettuce is a popular choice for hydroponic gardeners because it
              requires little space and attention. Here are some requirements
              for growing lettuce hydroponically:<br></br>
              <br></br>
              <span className="invest__description">
                &#x2022; Growing medium:{" "}
              </span>
              Lettuce roots grow directly in water, so a medium is needed to
              support the seedlings and roots as the plant grows.<br></br>
              <br></br>
              <span className="invest__description">
                &#x2022; Nutrients:{" "}
              </span>{" "}
              Lettuce needs high-quality nutrient solutions to thrive. A
              nutrient solution can be made by mixing purified water and
              hydroponic nutrients. Lettuce needs nitrogen for leaf growth.
              Plants also need calcium to prevent burned or wilted leaves.
              <br></br>
              <br></br>
              <span className="invest__description">&#x2022; pH: </span> Most
              hydroponic lettuces grow best at a pH between 5.5 and 6.0.
              <br></br>
              <br></br>
              <span className="invest__description">&#x2022; Light: </span>{" "}
              Lettuce needs enough light for photosynthesis, the process by
              which plants use light to develop. A grow light or a sunny
              windowsill can help plants grow evenly and stay compact.<br></br>
              <br></br>
              <span className="invest__description">
                &#x2022; Stirring:{" "}
              </span>{" "}
              Once the seedling is about two inches tall, the water should be
              given a nutrient solution.<br></br>
              <br></br>
              <span className="invest__description">
                &#x2022; Airflow:{" "}
              </span>{" "}
              Airflow is important for preventing pests like spider mites and
              aphids.
              <br></br>
              <br></br>
            </p>
          </div>
        </div>
        <hr className="line" id="radish" />
        <div style={{ marginTop: "70px" }}></div>
        <MiddlePara heading="Radish" />
        <div className="main flex flex-col md:flex-row">
          <div className="left">
            <p
              className="textmain"
              style={{ fontFamily: "Quattrocento Sans, sans-serif" }}
            >
              Radishes require specific environmental conditions to grow
              successfully. Here are some requirements for growing radishes
              hydroponically:<br></br>
              <br></br>
              <br></br>
              <span className="invest__description">&#x2022; Light: </span>
              Provide 12–16 hours of LED grow light per day.<br></br>
              <br></br>
              <span className="invest__description">
                &#x2022; Humidity:{" "}
              </span>{" "}
              Maintain a relative humidity of around 60–70%.<br></br>
              <br></br>
              <span className="invest__description">
                &#x2022; Nutrient solution:{" "}
              </span>{" "}
              Radishes thrive in a solution with a pH level of 6.0–7.0. Check
              the pH and electrical conductivity of the nutrient solution at
              least 2–3 times a week.<br></br>
              <br></br>
              <span className="invest__description">&#x2022; Water: </span>
              Radishes don't need a lot of nitrogen, but they do like potassium
              and phosphorus.
              <br></br>
              <br></br>
            </p>
          </div>
          <div className="right mt-10 md:mt-0">
            <img
              src="https://i.ibb.co/51sTgYX/radishmain.jpg"
              className="mainright md:w-[50%]"
            />
          </div>
        </div>
        <hr className="line" id="spinach" />
        <div style={{ marginTop: "70px" }}></div>
        <MiddlePara heading="Spinach" />
        <div className="main flex flex-col-reverse md:flex-row">
          <div className="right mt-10 md:mt-0">
            <img
              src="https://i.ibb.co/fCDFYsG/spinachmain.jpg"
              className="mainright md:w-[50%]"
            />
          </div>
          <div className="left">
            <p
              className="textmain"
              style={{ fontFamily: "Quattrocento Sans, sans-serif" }}
            >
              Spinach is a leafy green that can grow well in hydroponic systems.
              Here are some requirements for growing spinach hydroponically:
              <br></br>
              <br></br>
              <span className="invest__description">
                &#x2022; pH tolerance:{" "}
              </span>
              5.8–7.0, ideal 5.8–6.0<br></br>
              <br></br>
              <span className="invest__description">&#x2022; Light:</span> Blue
              light preferred, works well with fluorescent grow lights<br></br>
              <br></br>
              <span className="invest__description">
                &#x2022; Time to grow:
              </span>{" "}
              30–45 days <br></br>
              <br></br>
              <span className="invest__description">&#x2022; Fertilizer: </span>
              Nitrogen-rich fertilizer applied before planting, and then every
              two to three weeks after<br></br>
              <br></br>
              <span className="invest__description">&#x2022; Planting: </span>
              Spinach can be planted directly with seeds or with seedling
              transplants. In hydroponic systems, it's best to transplant
              seedlings.<br></br>
              <br></br>
              <span className="invest__description">
                &#x2022; Growth medium:{" "}
              </span>{" "}
              Spinach and other leafy greens have small root systems that don't
              require a large volume of growing medium.
              <br></br>
              <br></br>
            </p>
          </div>
        </div>
        <hr className="line" id="strawberry" />
        <div style={{ marginTop: "70px" }}></div>
        <MiddlePara heading="Strawberry" />
        <div className="main flex flex-col md:flex-row">
          <div className="left">
            <p
              className="textmain"
              style={{ fontFamily: "Quattrocento Sans, sans-serif" }}
            >
              Strawberries can be grown in other areas as well with the use of
              the hydroponic method of farming. With a little bit of homework
              and some planning, you can make a healthy profit from your
              strawberry crop.<br></br>
              <br></br>
              <span className="invest__description">
                &#x2022; Water Quality & pH Levels:{" "}
              </span>{" "}
              Use a pH meter to make sure your water is between 5.8 and 6.2. If
              you extend below or above this range, you’ll run into nutrient
              issues, and your plants will suffer.<br></br>
              <br></br>
              <span className="invest__description">
                &#x2022; Growing Medium:{" "}
              </span>
              There are plenty of hydroponic growing mediums you can choose
              from, and they all pretty much do the same thing. But, we
              recommend sticking with something easy and readily-available, like
              coco coir.<br></br>
              <br></br>
              <span className="invest__description">
                &#x2022; Nutrient Solution:{" "}
              </span>
              Your strawberries need an ample supply of nitrogen, potassium, and
              phosphorous, along with secondary nutrients and micronutrients.
              <br></br>
              <br></br>
              <span className="invest__description">&#x2022; Pruning: </span>
              Strawberry runners are leafless stems that extend out of the
              plant, sometimes with a new plant forming at the tip. Clip these
              off as close to the base of the plant as you can. If a plantlet
              has formed at the runner’s tip, you can use it for propagation!
              <br></br>
              <br></br>
              <span className="invest__description">
                &#x2022; Lighting:{" "}
              </span>{" "}
              From a lighting standpoint, you need to make sure your
              strawberries get between 8-12 hours of light per day. <br></br>
              <br></br>
            </p>
          </div>
          <div className="right mt-10 md:mt-0">
            <img
              src="https://i.ibb.co/RYwY6kg/strawberrymain.jpg"
              className="mainright md:w-[50%]"
            />
          </div>
        </div>
        <div style={{ marginBottom: "100px" }}></div>

        <Footer />
        <ChatBot />
      </div>

      <div
        className="flowerspage"
        style={{ marginTop: "100px", marginBottom: "50px" }}
        hidden={flowers}
      >
        <div className="bg bgflowers">
          <section
            className="heading"
            style={{
              height: "600px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1
              className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-[50px] leading-tight anim"
              style={{
                fontWeight: "bolder",
                fontFamily: "Quattrocento Sans, sans-serif",
                margin: "auto",
                width: "60vw",
              }}
            >
              Blossoms Cultivated: Our Grown Flowers
            </h1>
            <button className="growbut butf" onClick={toggleHidden}>
              Vegetables
            </button>
          </section>
        </div>
        <div className="crops flex flex-wrap justify-around">
          <div className="cell">
            <a href="#orchid" className="cell">
              <img
                src="https://www.svgrepo.com/show/36446/orchid.svg"
                className="vegie flex-auto p-4 m-2 w-[80px]"
              />
              <p className="vegt">Orchid</p>
            </a>
          </div>
          <div className="cell">
            <a href="#daisy" className="cell">
              <img
                src="https://www.svgrepo.com/show/9997/daisy.svg"
                className="vegie flex-auto p-4 m-2 w-[80px]"
              />
              <p className="vegt">Diasy</p>
            </a>
          </div>
          <div className="cell">
            <a href="#gerbera" className="cell">
              <img
                src="https://www.svgrepo.com/show/16728/gerbera.svg"
                className="vegie flex-auto p-4 m-2 w-[80px]"
              />
              <p className="vegt">Gerbera</p>
            </a>
          </div>
          <div className="cell">
            <a href="#carnation" className="cell">
              <img
                src="https://www.svgrepo.com/show/131750/carnation.svg"
                className="vegie flex-auto p-4 m-2 w-[80px]"
              />
              <p className="vegt">Carnation</p>
            </a>
          </div>
          <div className="cell">
            {" "}
            <a href="#rose" className="cell">
              <img
                src="https://www.svgrepo.com/show/84393/rose.svg"
                className="vegie flex-auto p-4 m-2 w-[80px]"
              />
              <p className="vegt">Rose</p>
            </a>
          </div>
        </div>
        <hr className="line" id="orchid" />
        <div style={{ marginTop: "70px" }}></div>
        <MiddlePara heading="Orchid" />
        <div className="main flex flex-col md:flex-row">
          <div className="left">
            <p
              className="textmain"
              style={{ fontFamily: "Quattrocento Sans, sans-serif" }}
            >
              Hydroponics means growing without soil. There are many types of
              hydroponic systems on the market, but most are complicated to use
              and expensive to buy. Here are some requirements for growing
              orchids hydroponically:<br></br>
              <br></br>
              <span className="inside">&#x2022; Container: </span> The container
              should have three to four drainage holes on the side and a
              reservoir of nutrient-rich water at the bottom. The container
              doesn't need to be very deep, but curved sides can help support
              the plant.<br></br>
              <br></br>
              <span className="inside">
                &#x2022; Fresh air and air circulation:{" "}
              </span>{" "}
              Orchids need a good amount of fresh air and air circulation,
              especially when grown under high-intensity lighting.<br></br>
              <br></br>
              <span className="inside">&#x2022; Nutrition: </span> Orchids use
              up more nutrition due to their increased growth rate, so you must
              feed them more often. A high-quality hydroponic nutrient will
              suffice.<br></br>
              <br></br>
              <span className="inside">&#x2022; Growing medium: </span> The
              growing medium should provide good air circulation and allow water
              to drain quickly.<br></br>
              <br></br>
              <span className="inside">&#x2022; Humidity: </span> Most tropical
              orchids prefer humidity levels of 60 to 80 percent.<br></br>
              <br></br>
              <span className="inside">&#x2022; Ventilation: </span> Hydroponic
              gardens require grow lights and ventilation to help plants grow.
              The moisture from nutrients and water can create a humid
              environment, so proper ventilation is required so your plants
              don't smother or wilt.<br></br>
              <br></br>
              <span className="inside">&#x2022; Light: </span> South- and
              east-facing windows are usually the best spot for orchids.
              <br></br>
              <br></br>
            </p>
          </div>
          <div className="right mt-10 md:mt-0">
            <img
              src="https://images.pexels.com/photos/2750067/pexels-photo-2750067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="mainright md:w-[50%]"
            />
          </div>
        </div>
        <hr className="line" id="daisy" />
        <div style={{ marginTop: "70px" }}></div>
        <MiddlePara heading="Daisy" />
        <div className="main flex flex-col-reverse md:flex-row">
          <div className="right mt-10 md:mt-0">
            <img
              src="https://images.pexels.com/photos/2694578/pexels-photo-2694578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="mainright md:w-[50%]"
            />
          </div>
          <div className="left">
            <p
              className="textmain"
              style={{ fontFamily: "Quattrocento Sans, sans-serif" }}
            >
              By carefully managing these factors, you can create an optimal
              environment for daisies to grow successfully in a hydroponic
              system. Adjustments may be necessary based on the specific needs
              of the daisy variety you are cultivating.<br></br>
              <br></br>
              <span className="inside">&#x2022; pH Level: </span>Maintain the pH
              level of the nutrient solution in the range of 5.8 to 6.5. This
              ensures that essential nutrients are available for absorption by
              the plant roots.
              <br></br>
              <br></br>
              <span className="inside">&#x2022; Nutrients: </span> Use a
              balanced hydroponic nutrient solution that contains essential
              macronutrients (nitrogen, phosphorus, potassium) and
              micronutrients (iron, manganese, zinc, etc.). Follow the
              manufacturer's recommendations for dilution and application.
              <br></br>
              <br></br>
              <span className="inside">&#x2022; Growing Medium: </span> If you
              are using a hydroponic system that requires a growing medium,
              choose an inert and sterile medium such as coconut coir or
              rockwool. This provides support for the plants while allowing the
              nutrient solution to flow freely.<br></br>
              <br></br>
              <span className="inside">&#x2022; Light: </span> Provide adequate
              lighting for the daisy plants. Daisies typically require at least
              12-16 hours of light per day. High-quality LED grow lights with
              the right spectrum for plant growth are often used in hydroponic
              setups.<br></br>
              <br></br>
              <span className="inside">&#x2022; Pruning: </span>Depending on the
              variety of daisy, consider pruning and training the plants to
              encourage bushier growth and better flower production.<br></br>
              <br></br>
            </p>
          </div>
        </div>
        <hr className="line" id="gerbera" />
        <div style={{ marginTop: "70px" }}></div>
        <MiddlePara heading="Gerbera" />
        <div className="main flex flex-col md:flex-row">
          <div className="left">
            <p
              className="textmain"
              style={{ fontFamily: "Quattrocento Sans, sans-serif" }}
            >
              By paying attention to these requirements and making necessary
              adjustments based on the specific needs of gerberas, you can
              successfully grow them using a hydroponic system.<br></br>
              <br></br>
              <br></br>
              <span className="inside">&#x2022; Light: </span>Provide adequate
              lighting for gerbera plants. They typically require at least 12-16
              hours of light per day. High-quality LED grow lights with the
              appropriate spectrum for flowering plants are commonly used in
              hydroponic setups.<br></br>
              <br></br>
              <span className="inside">&#x2022; Humidity: </span> Keep the
              humidity levels between 40% and 60%. Gerberas are susceptible to
              powdery mildew, so avoiding high humidity is essential.<br></br>
              <br></br>
              <span className="inside">&#x2022; Nutrient solution: </span> Use a
              balanced hydroponic nutrient solution with essential macro and
              micronutrients. Gerberas have specific nutrient requirements, so
              it's crucial to follow the manufacturer's recommendations for
              dilution and application.<br></br>
              <br></br>
              <span className="inside">&#x2022; pH Level: </span>Maintain the pH
              level of the nutrient solution in the range of 5.8 to 6.5.
              Gerberas prefer a slightly acidic to neutral pH for optimal
              nutrient uptake.
              <br></br>
              <br></br>
              <span className="inside">&#x2022; Growing Medium: </span>Gerberas
              can be grown hydroponically without a traditional growing medium.
              However, if a medium is used, choose an inert and sterile option
              such as coconut coir or rockwool.
              <br></br>
              <br></br>
            </p>
          </div>
          <div className="right mt-10 md:mt-0">
            <img
              src="https://images.pexels.com/photos/4022207/pexels-photo-4022207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="mainright md:w-[50%]"
            />
          </div>
        </div>
        <hr className="line" id="carnation" />
        <div style={{ marginTop: "70px" }}></div>
        <MiddlePara heading="Carnation" />
        <div className="main flex flex-col-reverse md:flex-row">
          <div className="right mt-10 md:mt-0">
            <img
              src="https://images.pexels.com/photos/4622995/pexels-photo-4622995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="mainright md:w-[50%]"
            />
          </div>
          <div className="left">
            <p
              className="textmain"
              style={{ fontFamily: "Quattrocento Sans, sans-serif" }}
            >
              Growing carnations using hydroponics involves creating an
              environment that meets the specific needs of these flowering
              plants. Here are the key requirements for successfully growing
              carnations with hydroponics:<br></br>
              <br></br>
              <span className="inside">&#x2022; pH tolerance: </span>Maintain
              the pH level of the nutrient solution in the range of 6.0 to 6.5.
              Carnations prefer slightly acidic to neutral conditions for
              optimal nutrient uptake.<br></br>
              <br></br>
              <span className="inside">&#x2022; Light:</span> Provide sufficient
              lighting for carnation plants. They typically require at least
              12-16 hours of light per day. High-quality LED grow lights with
              the appropriate spectrum for flowering plants are commonly used in
              hydroponic setups.<br></br>
              <br></br>
              <span className="inside">&#x2022; Pruning:</span> Prune the plants
              to encourage bushier growth and remove spent flowers regularly.
              This helps redirect energy into new growth and additional flower
              production.<br></br>
              <br></br>
              <span className="inside">&#x2022; Humidity: </span>Keep the
              humidity levels between 40% and 60%. Carnations are susceptible to
              fungal diseases, so maintaining proper humidity levels is crucial.
              <br></br>
              <br></br>
              <span className="inside">&#x2022; Planting: </span>Spinach can be
              planted directly with seeds or with seedling transplants. In
              hydroponic systems, it's best to transplant seedlings.<br></br>
              <br></br>
              <span className="inside">&#x2022; Growth medium: </span>{" "}
              Carnations can be grown hydroponically without a traditional
              growing medium. However, if a medium is used, choose an inert and
              sterile option such as coconut coir or rockwool.
              <br></br>
              <br></br>
            </p>
          </div>
        </div>
        <hr className="line" id="rose" />
        <div style={{ marginTop: "70px" }}></div>
        <MiddlePara heading="Rose" />
        <div className="main flex flex-col md:flex-row">
          <div className="left">
            <p
              className="textmain"
              style={{ fontFamily: "Quattrocento Sans, sans-serif" }}
            >
              Growing roses using hydroponics involves providing the right
              conditions for the plants to thrive without soil. Here are the key
              requirements for successfully growing roses with hydroponics.
              <br></br>
              <br></br>
              <span className="inside">&#x2022; pH Levels: </span>Maintain the
              pH level of the nutrient solution in the range of 6.0 to 6.5.
              Roses generally prefer slightly acidic to neutral conditions for
              optimal nutrient absorption.<br></br>
              <br></br>
              <span className="inside">&#x2022; Growing Medium: </span>Roses can
              be grown hydroponically without a traditional growing medium.
              However, if a medium is used, choose an inert and sterile option
              such as coconut coir or rockwool.<br></br>
              <br></br>
              <span className="inside">&#x2022; Nutrient Solution: </span>Use a
              balanced hydroponic nutrient solution with the essential macro and
              micronutrients. Roses have specific nutrient requirements, so
              follow the manufacturer's recommendations for dilution and
              application.<br></br>
              <br></br>
              <span className="inside">&#x2022; Pruning: </span>Prune the roses
              to encourage bushier growth and remove spent flowers regularly.
              This helps redirect energy into new growth and additional flower
              production.<br></br>
              <br></br>
              <span className="inside">&#x2022; Lighting: </span>Provide
              sufficient lighting for rose plants. Roses typically require at
              least 6-8 hours of direct sunlight or the equivalent in artificial
              lighting per day. High-quality LED grow lights with a spectrum
              suitable for flowering plants are commonly used in hydroponic
              setups.<br></br>
              <br></br>
            </p>
          </div>
          <div className="right mt-10 md:mt-0">
            <img
              src="https://images.pexels.com/photos/3782745/pexels-photo-3782745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="mainright md:w-[50%]"
            />
          </div>
        </div>
        <div style={{ marginBottom: "100px" }}></div>
        <Footer />
        <ChatBot />
      </div>
    </>
  );
};
