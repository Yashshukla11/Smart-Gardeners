import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
let navigate = useNavigate(); 
const routeChange = () =>{ 
  let path = `newPath`; 
  navigate(path);
}
export const Grow = () => {
 
  return (
    <>
      <Navbar whatwegrow="true" />
      
        <div className="bg"> 
          <section className="heading">
            
            <h1 className="k">The most common and successfully grown crops through hydroponics in India are :</h1>
            <button className = "growbut">Vegetables</button>
            </section>
       
        </div>
        <div className="crops">
          <div className = "cell"><a href="#tomato" class = "cell"><img src="https://www.svgrepo.com/show/120941/tomato.svg" className="vegie" /><p className="vegt">Tomato</p></a></div>
          <div className = "cell"><a href="#lettuce"class = "cell"><img src="https://www.svgrepo.com/show/475202/lettuce.svg" className="vegie" /><p className="vegt">Lettuce</p></a></div>
          <div className = "cell"><a href="#radish" class = "cell"><img src="https://www.svgrepo.com/show/280775/radish.svg" className="vegie" /><p className="vegt">Radish</p></a></div>
          <div className = "cell"><a href="#spinach"class = "cell"><img src="https://www.svgrepo.com/show/312451/leafy-green.svg" className="vegie" /><p className="vegt">Spinach</p></a></div>
          <div className = "cell"> <a href="#strawberry" class = "cell"><img src="https://www.svgrepo.com/show/530214/strawberry.svg" className="vegie" /><p className="vegt">Strawberry</p></a></div>
          
        </div>
        <hr className="line" id="tomato" />
        <h1 className="cropheadings">TOMATO</h1>
        <div className="main">
          <div className="left"><p className="textmain">
            Hydroponic growers generally don't pick green tomatoes and store them in a cool room.Instead, they let the tomatoes ripen on the vine for flavor, sweetness, and juiciness<br></br><br></br>
              <span className="inside">&#x2022; Nutrients: </span> Tomatoes need high levels of nitrogen, phosphorus, and potassium.<br></br>
              <span className="inside">&#x2022; pH: </span> Tomatoes thrive in a pH of around 5.8 to 6.3.<br></br>
              <span className="inside">&#x2022; EC: </span> EC levels should be maintained between 2.0 to 3.5 milliMhos.<br></br>
              <span className="inside">&#x2022; Support: </span> Tomato plants need support to grow, so you will likely need a trellis.<br></br>
              <span className="inside">&#x2022; Lighting: </span> Tomato plants love light and can grow to be large and produce a lot of fruit. They are day neutral, so they don't require a specific duration of light to produce flowers and fruit.<br></br>
              <span className="inside">&#x2022; Ventilation:  </span> Hydroponic gardens require grow lights and ventilation to help plants grow. The moisture from nutrients and water can create a humid environment, so proper ventilation is required so your plants don't smother or wilt.<br></br>
              <span className="inside">&#x2022; Fertilizer: </span> Hydroponically grown plants need special fertilizer to grow and thrive. These water-soluble fertilizers are fed directly onto the plant's roots.<br></br>
              <span className="inside">&#x2022; Pruning: </span> Pruning is crucial for tomato production, as it ensures proper utilization of energy in growth of fruits and the main stem.</p></div>
          <div className="right"><img src="https://i.ibb.co/jvpxKhf/tomatoesmain.jpg" className="mainright" /></div>
        </div>
        <hr className="line" id="lettuce" />
        <h1 className="cropheadings">LETTUCE</h1>
        <div className="main">
          <div className="right"><img src="https://i.ibb.co/rZnQ0FY/lettucemain.jpg" className="mainright" /></div>
          <div className="left"><p className="textmain">
          Lettuce is a popular choice for hydroponic gardeners because it requires little space and attention. Here are some requirements for growing lettuce hydroponically:<br></br><br></br>
              <span className="inside">&#x2022; Growing medium:  </span>Lettuce roots grow directly in water, so a medium is needed to support the seedlings and roots as the plant grows.<br></br>
              <span className="inside">&#x2022; Nutrients:  </span> Lettuce needs high-quality nutrient solutions to thrive. A nutrient solution can be made by mixing purified water and hydroponic nutrients. Lettuce needs nitrogen for leaf growth. Plants also need calcium to prevent burned or wilted leaves.<br></br>
              <span className="inside">&#x2022; pH: </span> Most hydroponic lettuces grow best at a pH between 5.5 and 6.0.<br></br>
              <span className="inside">&#x2022; Light:  </span>  Lettuce needs enough light for photosynthesis, the process by which plants use light to develop. A grow light or a sunny windowsill can help plants grow evenly and stay compact.<br></br>
              <span className="inside">&#x2022; Stirring: </span> Once the seedling is about two inches tall, the water should be given a nutrient solution.<br></br>
              <span className="inside">&#x2022; Airflow:  </span>  Airflow is important for preventing pests like spider mites and aphids.<br></br>
              </p></div>
        </div>
        <hr className="line" id="radish" />
        <h1 className="cropheadings">RADISH</h1>
        <div className="main">
          <div className="left"><p className="textmain">
          Radishes require specific environmental conditions to grow successfully. Here are some requirements for growing radishes hydroponically:<br></br><br></br><br></br>
              <span className="inside">&#x2022; Light: </span>Provide 12–16 hours of LED grow light per day.<br></br>
              <span className="inside">&#x2022; Humidity: </span> Maintain a relative humidity of around 60–70%.<br></br>
              <span className="inside">&#x2022; Nutrient solution: </span> Radishes thrive in a solution with a pH level of 6.0–7.0. Check the pH and electrical conductivity of the nutrient solution at least 2–3 times a week.<br></br>
              <span className="inside">&#x2022; Water: </span>Radishes don't need a lot of nitrogen, but they do like potassium and phosphorus. 
<br></br>
              </p></div>
          <div className="right"><img src="https://i.ibb.co/51sTgYX/radishmain.jpg" className="mainright" /></div>
        </div>
        <hr className="line" id="spinach" />
        <h1 className="cropheadings">SPINACH</h1>
        <div className="main">
          <div className="right"><img src="https://i.ibb.co/fCDFYsG/spinachmain.jpg" className="mainright" /></div>
          <div className="left"><p className="textmain">
          Spinach is a leafy green that can grow well in hydroponic systems. Here are some requirements for growing spinach hydroponically:<br></br><br></br>
              <span className="inside">&#x2022; pH tolerance: </span>5.8–7.0, ideal 5.8–6.0<br></br>
              <span className="inside">&#x2022; Light:</span> Blue light preferred, works well with fluorescent grow lights<br></br>
              <span className="inside">&#x2022; Time to grow:</span> 30–45 days <br></br>
              <span className="inside">&#x2022; Fertilizer: </span>Nitrogen-rich fertilizer applied before planting, and then every two to three weeks after<br></br>
              <span className="inside">&#x2022; Planting: </span>Spinach can be planted directly with seeds or with seedling transplants. In hydroponic systems, it's best to transplant seedlings.<br></br>
              <span className="inside">&#x2022; Growth medium:  </span> Spinach and other leafy greens have small root systems that don't require a large volume of growing medium. 
<br></br></p></div>
        </div>
        <hr className="line" id="strawberry" />
        <h1 className="cropheadings">STRAWBERRY</h1>
        <div className="main">
          <div className="left"><p className="textmain">
          Strawberries can be grown in other areas as well with the use of the hydroponic method of farming. With a little bit of homework and some planning, you can make a healthy profit from your strawberry crop.<br></br><br></br>
              <span className="inside">&#x2022; Water Quality & pH Levels: </span>  Use a pH meter to make sure your water is between 5.8 and 6.2. If you extend below or above this range, you’ll run into nutrient issues, and your plants will suffer.<br></br>
              <span className="inside">&#x2022; Growing Medium: </span>There are plenty of hydroponic growing mediums you can choose from, and they all pretty much do the same thing. But, we recommend sticking with something easy and readily-available, like coco coir.<br></br>
              <span className="inside">&#x2022; Nutrient Solution: </span>Your strawberries need an ample supply of nitrogen, potassium, and phosphorous, along with secondary nutrients and micronutrients.<br></br>
              <span className="inside">&#x2022; Pruning: </span>Strawberry runners are leafless stems that extend out of the plant, sometimes with a new plant forming at the tip. Clip these off as close to the base of the plant as you can. If a plantlet has formed at the runner’s tip, you can use it for propagation!<br></br>
              <span className="inside">&#x2022; Lighting: </span> From a lighting standpoint, you need to make sure your strawberries get between 8-12 hours of light per day. <br></br>
              </p></div>
          <div className="right"><img src="https://i.ibb.co/RYwY6kg/strawberrymain.jpg" className="mainright" /></div>
        </div>
     


      <Footer />
    </>
  );
};
