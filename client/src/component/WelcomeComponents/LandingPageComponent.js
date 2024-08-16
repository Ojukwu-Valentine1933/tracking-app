import eatingLady from "../../assets/woman-eating.png";
// import eatingPizza from "../../assets/eating-pizza.png";
import foodOne from "../../assets/food-one.png";
import foodTwo from "../../assets/food-two.png";
import foodThree from "../../assets/food-three.png";
import orderOne from "../../assets/order-one.png";
import orderTwo from "../../assets/order-two.png";
import orderThree from "../../assets/order-three.png";
import orderFour from "../../assets/order-four.png";
import orderFive from "../../assets/order-five.png";
import orderSix from "../../assets/order-six.png";
import mcDonalds from "../../assets/mcDonalds.png";
import papaJohns from "../../assets/papa-johns.png";
import kfc from "../../assets/kfc.png";
import texasChiken from "../../assets/Texas.png";
import burgerKing from "../../assets/burger-chicken.png";
import shaurma from "../../assets/shaurma.png";
// import smilingFriends from "../../assets/friends-laughing-using-mobiles 2.png";
import logo from "../../assets/LOGO 1.png";
import styles from "./LandingPageComponent.module.css";
import appDownload from "../../assets/app-store-badges-en 1.png";

const LandingPageComponent = () => {
  return (
    <div className="">
      <section>
        <div className={`bg-body-tertiary container  ${styles.hero_div}`}>
          <div className={`hero-intro container ${styles.hero_intro}`}>
            <div className={`${styles.hero_text}`}>
              <p style={{ fontSize: "14px", marginTop: "20px" }} className={`${styles.order}`}>
                Order Restaurant food, takeaway and groceries.
              </p>
              <h1
                style={{
                  fontSize: "54px",
                  fontWeight: "600",
                  lineHeight: "66px",
                }}
                className={`${styles.feast}`}
              >
                Feast Your Senses,{" "}
                <p
                  style={{
                    fontSize: "54px",
                    fontWeight: "600",
                    lineHeight: "66px",
                    color: "#FF8F00",
                  }}
                  className={`${styles.feast}`}
                >
                  Fast and Fresh
                </p>
              </h1>
            </div>
            <div className={`${styles.search_div}`}>
              <p style={{ fontSize: "12px" }} className={`${styles.postcode}`}>
                Enter a postcode to see what we deliver
              </p>
              <div className={`d-flex ${styles.button_div}`}>
                {" "}
                <input
                  type="search"
                  className={`${styles.search_input}`}
                  placeholder="e.g.EC4R 3TE"
                />
                <button className={`${styles.search_button}`}>Search</button>
              </div>
            </div>
          </div>
          <div className="hero-img">
            <div className={`curved-div ${styles.curved_div}`}>
              <div className={`${styles.hero_img}`}>
                <img
                  src={eatingLady}
                  className={`${styles.eating_lady}`}
                  alt=""
                />
              </div>
              <div className="scrolling-text">
                <ul
                  style={{
                    listStyle: "none",
                    fontSize: "25px",
                    fontWeight: "700",
                    color: "white",
                  }}
                >
                  <li>P</li>
                  <li>L</li>
                  <li>A</li>
                  <li>C</li>
                  <li style={{ paddingBottom: "30px" }}>E</li>
                  <li> </li>
                  <li>Y</li>
                  <li>O</li>
                  <li>U</li>
                  <li style={{ paddingBottom: "30px" }}>R</li>
                  <li> </li>
                  <li>O</li>
                  <li>R</li>
                  <li>D</li>
                  <li>E</li>
                  <li style={{ paddingBottom: "30px" }}> R</li>
                  <li> </li>
                  <li>N</li>
                  <li>O</li>
                  <li>W</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container flex flex-wrap">
        <div className={`discount_div ${styles.discount_div}`}>
          <div className={`discount_text ${styles.discount_text}`}>
            <p>Up to -40% 🎊 Order.uk exclusive deals</p>
          </div>
          <div className={`discount_button_div ${styles.discount_button_div}`}>
            <button className={`discount_button ${styles.discount_button}`}>
              Vegan
            </button>
            <button className={`discount_button ${styles.discount_button}`}>
              Sushi
            </button>
            <button className={`discount_button ${styles.discount_button}`}>
              Pizza & Fast food
            </button>
            <button className={`discount_button ${styles.discount_button}`}>
              Others
            </button>
          </div>
          <select className={`option_button ${styles.option_button}`}>
            <option className={``}>Vegan</option>
            <option>Sushi</option>
            <option>Pizza & Fast food</option>
            <option>Others</option>
          </select>
        </div>

        <div className={`container  ${styles.discountFood_div}`}>
          <div className={`row`}>
            <div className={`col-sm-4`}>
              <div
                className={`card ${styles.discountFood_img}`}
                style={{ width: "100%" }}
              >
                <img
                  src={foodThree}
                  className={`card-img-top ${styles.discount_food}`}
                  alt="..."
                />
              </div>
            </div>
            <div className={`col-sm-4`}>
              <div
                className={`card ${styles.discountFood_img}`}
                style={{ width: "100%" }}
              >
                <img
                  src={foodOne}
                  className={`card-img-top ${styles.discount_food}`}
                  alt="..."
                />
              </div>
            </div>
            <div className={`col-sm-4`}>
              <div
                className={`card ${styles.discountFood_img}`}
                style={{ width: "100%" }}
              >
                <img
                  src={foodTwo}
                  className={`card-img-top ${styles.discount_food}`}
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>

        <div className={`mt-5`}>
          <div>
            <p className={`${styles.discount_text}`}>
              Order.uk Popular Categories 🤩
            </p>
          </div>
          <div>
            <div className={`row  gap- orderedFood_div ${styles.orderedFood_div}`}>
              <div
                className={`card col-sm-2 ${styles.order_food}`}
                style={{ width: "100%" }}
              >
                <img
                  src={orderOne}
                  className={`card-img-top ${styles.orderFood_img}`}
                  alt="..."
                />
                <div className="card-body">
                  <h1
                    className={``}
                    style={{ fontSize: "12px", fontWeight: "700" }}
                  >
                    Burgers & Fast food
                  </h1>
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: "400",
                      color: "#FF8F00",
                    }}
                  >
                    21 Restaurants
                  </p>
                </div>
              </div>
              <div
                className={`card col-sm-2 ${styles.order_food}`}
                style={{ width: "100%" }}
              >
                <img
                  src={orderTwo}
                  className={`card-img-top ${styles.orderFood_img}`}
                  alt="..."
                />
                <div className="card-body">
                  <h1
                    className={``}
                    style={{ fontSize: "12px", fontWeight: "700" }}
                  >
                    Salads
                  </h1>
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: "400",
                      color: "#FF8F00",
                    }}
                  >
                    21 Restaurants
                  </p>
                </div>
              </div>
              <div
                className={`card col-sm-2 ${styles.order_food}`}
                style={{ width: "100%" }}
              >
                <img
                  src={orderThree}
                  className={`card-img-top ${styles.orderFood_img}`}
                  alt="..."
                />
                <div className="card-body">
                  <h1
                    className={``}
                    style={{ fontSize: "12px", fontWeight: "700" }}
                  >
                    Pasta & Casuals
                  </h1>
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: "400",
                      color: "#FF8F00",
                    }}
                  >
                    21 Restaurants
                  </p>
                </div>
              </div>
              <div
                className={`card col-sm-2 ${styles.order_food}`}
                style={{ width: "100%" }}
              >
                <img
                  src={orderFour}
                  className={`card-img-top ${styles.orderFood_img}`}
                  alt="..."
                />
                <div className="card-body">
                  <h1
                    className={``}
                    style={{ fontSize: "12px", fontWeight: "700" }}
                  >
                    Pizza
                  </h1>
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: "400",
                      color: "#FF8F00",
                    }}
                  >
                    21 Restaurants
                  </p>
                </div>
              </div>
              <div
                className={`card col-sm-2 ${styles.order_food}`}
                style={{ width: "100%" }}
              >
                <img
                  src={orderFive}
                  className={`card-img-top ${styles.orderFood_img}`}
                  alt="..."
                />
                <div className="card-body">
                  <h1
                    className={``}
                    style={{ fontSize: "12px", fontWeight: "700" }}
                  >
                    Breakfast
                  </h1>
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: "400",
                      color: "#FF8F00",
                    }}
                  >
                    21 Restaurants
                  </p>
                </div>
              </div>
              <div
                className={`card col-sm-2 ${styles.order_food}`}
                style={{ width: "100%" }}
              >
                <img
                  src={orderSix}
                  className={`card-img-top ${styles.orderFood_img}`}
                  alt="..."
                />
                <div className="card-body">
                  <h1
                    className={``}
                    style={{ fontSize: "12px", fontWeight: "700" }}
                  >
                    Soup
                  </h1>
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: "400",
                      color: "#FF8F00",
                    }}
                  >
                    21 Restaurants
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`container`}>
        <div className={`row ${styles.restaurantDiv}`}>
          <div className={`discount_text ${styles.discount_text}`}>
            <p>Popular Restaurants</p>
          </div>
          <div className={`col-sm-2 ${styles.restaurantLogo}`}>
            <div className="card" style={{ width: "100%" }}>
              <img src={mcDonalds} className="card-img-top" alt="..." />
            </div>
          </div>
          <div className={`col-sm-2 ${styles.restaurantLogo}`}>
            <div className="card" style={{ width: "100%" }}>
              <img src={papaJohns} className="card-img-top" alt="..." />
            </div>
          </div>
          <div className={`col-sm-2 ${styles.restaurantLogo}`}>
            <div className="card" style={{ width: "100%" }}>
              <img src={kfc} className="card-img-top" alt="..." />
            </div>
          </div>
          <div className={`col-sm-2 ${styles.restaurantLogo}`}>
            <div className="card" style={{ width: "100%" }}>
              <img src={texasChiken} className="card-img-top" alt="..." />
            </div>
          </div>
          <div className={`col-sm-2 ${styles.restaurantLogo}`}>
            <div className="card" style={{ width: "100%" }}>
              <img src={burgerKing} className="card-img-top" alt="..." />
            </div>
          </div>
          <div className={`col-sm-2 ${styles.restaurantLogo}`}>
            <div className="card" style={{ width: "100%" }}>
              <img src={shaurma} className="card-img-top" alt="..." />
            </div>
          </div>
        </div>
      </section>

      <section className={`container m-auto`}>
        <div className={`bg-body-tertiary ${styles.second_hero_div}`}>
          <div className={`d-flex justify-content-center ${styles.img_and_personalised}`}>
            <div className={`${styles.personalised_div}`}>
              <div className={`d-flex ${styles.img_text}`}>
                <div
                  className={`second-hero-logo-div ${styles.second_hero_logo_div}`}
                >
                  <img
                    src={logo}
                    className={`${styles.second_hero_logo}`}
                    alt=""
                  />
                </div>

                <span
                  className={``}
                  style={{
                    marginTop: "80px",
                    fontSize: "58px",
                    fontWeight: "800",
                    marginRight: "20px",
                  }}
                >
                  ing
                </span>
                <span
                  style={{
                    marginTop: "80px",
                    fontSize: "58px",
                    fontWeight: "800",
                  }}
                >
                  is more{" "}
                </span>
              </div>
              <div className={`${styles.personalised}`}>
                <span
                  style={{
                    color: "#FF8F00",
                    textDecoration: "underline",
                    fontSize: "40px",
                    fontWeight: "600",
                    marginRight: "10px",
                  }}
                >
                  Personalised
                </span>
                <span
                  style={{
                    color: "white",
                    fontSize: "40px",
                    fontWeight: "600",
                  }}
                >
                  & instant
                </span>
                <p className={`${styles.download_text}`}>
                  Download the Order.uk app for faster ordering
                </p>
                <div>
                  <img
                    src={appDownload}
                    className={`${styles.dowloandIcons}`}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`container`}>
        <div className={` ${styles.chef_and_dispatch_div}`}>
          <div className={`${styles.chef}`}>
            <div className={``}>
              <p className={`${styles.dispatch_chef_text_one}`}>
                Earn more with lower fees
              </p>
              <div className={`${styles.dispatch_text_div}`}>
                <p className={`${styles.dispatch_chef_text_two}`}>
                  Signup as a business
                </p>
                <h1 className={`${styles.dispatch_chef_text_three}`}>
                  Partner with us
                </h1>
                <button className={`${styles.dispatch_chef_text_btn}`}>
                  Get Started
                </button>
              </div>
            </div>
          </div>

          <div className={`${styles.dispatchRider}`}>
            <div className={``}>
              <p className={`${styles.dispatch_chef_text_one}`}>
                Avail exclusive perks
              </p>
              <div className={`${styles.dispatch_text_div}`}>
                <p className={`${styles.dispatch_chef_text_two}`}>
                  Signup as a rider
                </p>
                <h1 className={`${styles.dispatch_chef_text_three}`}>
                  Ride with us
                </h1>
                <button className={`${styles.dispatch_chef_text_btn}`}>
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default LandingPageComponent;
