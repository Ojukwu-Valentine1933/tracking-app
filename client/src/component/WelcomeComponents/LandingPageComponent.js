import eatingNoddles from "../../assets/woman-eating.png";
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
import logo from "../../assets/LOGO 1.png";
import styles from "./LandingPageComponent.module.css";
import appDownload from "../../assets/app-store-badges-en 1.png";
import smilingCouple from "../../assets/smiling_couple.png";
import orderRingBell from "../../assets/oder-ring-bell.png";
import trackProgress from "../../assets/track-progress.png";
import getYourOrder from "../../assets/get-your-order.png";
const LandingPageComponent = () => {
  return (
    <div className="">
      <section>
        <div className={`bg-body-tertiary container  ${styles.hero_div}`}>
          <div className={`hero-intro container ${styles.hero_intro}`}>
            <div className={`${styles.hero_text}`}>
              <p
                style={{ fontSize: "14px", marginTop: "20px" }}
                className={`${styles.order}`}
              >
                Order Restaurant food, takeaway and groceries.
              </p>
              <h1
                style={{
                  fontSize: "54px",
                  fontWeight: "600",
                }}
                className={`${styles.feast}`}
              >
                Feast Your Senses,{" "}
              </h1>
              <h1
                style={{
                  fontSize: "54px",
                  fontWeight: "600",
                  color: "#FF8F00",
                }}
                className={`${styles.feast}`}
              >
                Fast and Fresh
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
              <div className={`${styles.eating_noddles}`}>
                <img src={eatingNoddles} alt="lady eating noodles" />
              </div>
              <div className={`${styles.marquee_container}`}>
                <ul
                  style={{
                    listStyle: "none",
                    fontSize: "25px",
                    fontWeight: "700",
                    color: "white",
                  }}
                  className={`${styles.marquee_content}`}
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
                  <li>R</li>
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
      </section>

      <section className={`container`}>
        <div className={`mt-5`}>
          <div>
            <p className={`${styles.discount_text}`}>
              Order.uk Popular Categories 🤩
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6 col-sm-6 col-md-6 col-lg-2 mb-4">
              <div className={`card`}>
                <img
                  src={orderOne}
                  className={`card-img-top ${styles.card_img}`}
                  alt=""
                />
                <div className="card-body">
                  <h5 className={`card-title ${styles.card_title}`}>
                    Burgers & Chops
                  </h5>
                  <p className={`card-text ${styles.card_text}`}>
                    21 Restaurants
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-2 mb-4">
              <div className={`card`}>
                <img
                  src={orderTwo}
                  className={`card-img-top`}
                  alt=""
                />
                <div className="card-body">
                  <h5 className={`card-title ${styles.card_title}`}>Salads</h5>
                  <p className={`card-text ${styles.card_text}`}>
                    32 Restaurants
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-2 mb-4">
              <div className={`card`}>
                <img
                  src={orderThree}
                  className={`card-img-top`}
                  alt=""
                />
                <div className="card-body">
                  <h5 className={`card-title ${styles.card_title}`}>
                    Pasta & Casuals
                  </h5>
                  <p className={`card-text ${styles.card_text}`}>
                    4 Restaurants
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-2 mb-4">
              <div className={`card`}>
                <img
                  src={orderFour}
                  className={`card-img-top`}
                  alt=""
                />
                <div className="card-body">
                  <h5 className={`card-title ${styles.card_title}`}>Pizza</h5>
                  <p className={`card-text ${styles.card_text}`}>
                    32 Restaurants
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-2 mb-4">
              <div className={`card`}>
                <img
                  src={orderFive}
                  className={`card-img-top`}
                  alt=""
                />
                <div className="card-body">
                  <h5 className={`card-title ${styles.card_title}`}>
                    Breakfast
                  </h5>
                  <p className={`card-text ${styles.card_text}`}>
                    4 Restaurants
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-2 mb-4">
              <div className={`card`}>
                <img
                  src={orderSix}
                  className={`card-img-top`}
                  alt="Card Image/"
                />
                <div className="card-body">
                  <h5 className={`card-title ${styles.card_title}`}>Soups</h5>
                  <p className={`card-text ${styles.card_text}`}>
                    32 Restaurants
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`container mt-5`}>
        <div className="container">
          <h1 className={`${styles.restaurantText}`}>Popular Restaurants</h1>
          <div className="row">
            <div className="col-6 col-sm-6 col-md-6 col-lg-2 mb-4">
              <div className={`card`}>
                <img
                  src={mcDonalds}
                  className="card-img-top"
                  alt=""
                />
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-2 mb-4">
              <div className={`card`}>
                <img
                  src={papaJohns}
                  className="card-img-top"
                  alt=""
                />
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-2 mb-4">
              <div className={`card`}>
                <img src={kfc} className="card-img-top" alt="" />
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-2 mb-4">
              <div className={`card`}>
                <img
                  src={texasChiken}
                  className="card-img-top"
                  alt=""
                />
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-2 mb-4">
              <div className={`card`}>
                <img
                  src={burgerKing}
                  className="card-img-top"
                  alt=""
                />
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-2 mb-4">
              <div className={`card`}>
                <img src={shaurma} className="card-img-top" alt="" />
              </div>
            </div>
          </div>
        </div>
        ;
      </section>

      <section className={`container m-auto`}>
        <div className={`bg-body-tertiary ${styles.second_hero_div}`}>
          <div className={`${styles.app_and_image}`}>
            <div className={`couple_image ${styles.couple_image}`}>
              <img src={smilingCouple} className={`${styles.smilingCouple}`} alt="" />
            </div>


            <div className={`app_marketing ${styles.app_marketing}`}>
            <div className={`${styles.logo_and_text}`}>
            <img src={logo} className={`${styles.second_hero_logo}`} alt=""/>
            <span className={``}>ing is more</span>
            </div>
            <div className={`${styles.personalised_container}`}>
            <div className={`${styles.personalised_and_instant}`}>
              <span className={`${styles.span_one}`}>Personalised</span> <span> & Instant</span>
              <p>Download the Order.uk app for faster ordering</p>
              <img src={appDownload} className={`${styles.download_icon}`} alt=""/>
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
            <div className={`${styles.dispatch_content}`}>
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

      <section className={`container`}>
        <div className={`${styles.AboutUs_section_div}`}>
          <h1>Know More About Us!</h1>
          <button className={`${styles.AboutUs_section_button}`}>
            How does Order.UK work?
          </button>
          <button className={`${styles.AboutUs_section_button}`}>
            What payment methods are accepted?
          </button>
          <button className={`${styles.AboutUs_section_button}`}>
            Can I track my order in real-time?
          </button>
          <button className={`${styles.AboutUs_section_button}`}>
            Are there any special discounts orpromotions available?
          </button>
          <button className={`${styles.AboutUs_section_button}`}>
            Is Order.UK available in my area?
          </button>
        </div>

        <div className={`container`}>
          <div className={`container ${styles.All_to_do_div}`}>
            <div
              className={`card ${styles.All_to_do_cards}`}
              style={{ width: "18rem;" }}
            >
              <h5 className="card-title">Place an Order!</h5>
              <div className={`${styles.All_to_do_cards_img_div}`}>
                <img src={orderRingBell} className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <p className="card-text">
                  Place order through ourwebsite or Mobile app
                </p>
              </div>
            </div>{" "}
            <div
              className={`card ${styles.All_to_do_cards}`}
              style={{ width: "18rem;" }}
            >
              <h5 className="card-title">Track Progress</h5>
              <div className={`${styles.All_to_do_cards_img_div}`}>
                <img src={trackProgress} className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <p className="card-text">
                  Your can track your orderstatus with delivery time
                </p>
              </div>
            </div>{" "}
            <div
              className={`card ${styles.All_to_do_cards}`}
              style={{ width: "18rem;" }}
            >
              <h5 className="card-title">Get your Order!</h5>
              <div className={`${styles.All_to_do_cards_img_div}`}>
                <img src={getYourOrder} className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <p className="card-text">
                  Receive your order at alighting fast speed!
                </p>
              </div>
            </div>
            <p
              className={`text-white text-center`}
              style={{ fontSize: "12px", marginTop: "30px" }}
            >
              Order.UK simplifies the food ordering process. Browse through our
              diverse menu, select your favorite dishes, and proceed to
              checkout. Your delicious meal will be on its way to your doorstep
              in no time!
            </p>
          </div>
          <div className={`${styles.statiscs}`}>
            <div>
              <p className={`${styles.statiscs_numbers}`}>546+</p>
              <p className={`${styles.statiscs_text}`}>Registered Riders</p>
            </div>
            <div className={`${styles.hr_div}`}>
              <hr />
            </div>
            <div>
              <p className={`${styles.statiscs_numbers}`}>789,900+</p>
              <p className={`${styles.statiscs_text}`}>Orders Delivered</p>
              <div className={`${styles.hr_div}`}>
                <hr />
              </div>
            </div>
            <div>
              <p className={`${styles.statiscs_numbers}`}>690+</p>
              <p className={`${styles.statiscs_text}`}>Registered Partnered</p>
              <div className={`${styles.hr_div}`}>
                <hr />
              </div>
            </div>
            <div>
              <p className={`${styles.statiscs_numbers}`}>17,457+</p>
              <p className={`${styles.statiscs_text}`}>Food items</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default LandingPageComponent;
