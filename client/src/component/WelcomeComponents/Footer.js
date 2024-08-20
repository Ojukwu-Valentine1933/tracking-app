import styles from "./Footer.module.css";
import logo from "../../assets/LOGO 1.png";
import downloadIcon from "../../assets/app-store-badges-en 1.png";
import facebook from "../../assets/Facebook.png";
import instagram from "../../assets/Instagram.png";
import tiktok from "../../assets/TikTok.png";
import snapchat from "../../assets/Snapchat.png";
const Footer = () => {
  return (
    <div className={`${styles.footer}`}>
      <div className={`container`}>
        <div className={`${styles.logo_div}`}>
          <img src={logo} alt="Logo" className={`${styles.logo}`} />
          <img
            src={downloadIcon}
            alt="download"
            className={`${styles.dowloandIcons}`}
          />
          <div>
            <p>Company # 490039-445, Registered with House of companies.</p>
          </div>
        </div>
        <h5>Get Exclusive Deals in your Inbox</h5>
        <div className={`${styles.input_div}`}>
          <input
            type="text"
            placeholder="Enter your email"
            className={`${styles.search_input}`}
          />
          <button className={`${styles.search_button}`}>Subscribe</button>
        </div>
        <p className={`${styles.span}`}>
          we wont spam, read our <a href="email-policy">email policy</a>
        </p>

        <div className={`${styles.social_icon_div}`}>
          <img src={facebook} alt="icon" className={`${styles.social_icon}`} />
          <img src={instagram} alt="icon" className={`${styles.social_icon}`} />
          <img src={tiktok} alt="icon" className={`${styles.social_icon}`} />
          <img src={snapchat} alt="icon" className={`${styles.social_icon}`} />
        </div>

        <div className={`${styles.footerList}`}>
          <h5>Legal Pages</h5>
          <ol>
            <li>Terms and Conditions</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Mordern Slavery Management</li>
          </ol>

          <h5>Important Links</h5>
          <ol>
            <li>Get help</li>
            <li>Add your restaurant</li>
            <li>Sign up to Deliver</li>
            <li>Create a business account</li>
          </ol>
        </div>
      </div>
      <div className={`${styles.copyrightDiv}`}>
<p>Order.uk Copyright 2024, All Rights Reserved.</p>
</div>
    </div>
  );
};
export default Footer;