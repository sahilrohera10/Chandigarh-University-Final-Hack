import React, { useEffect } from "react";
// import AddProduct from "../Components/AddProduct";
import Category from "../Components/Category";
import ContactUs from "../Components/ContactUs";
import Footer from "../Components/Footer";
import Forum from "../Components/Forum";
import ImgCarousal from "../Components/ImgCarousal";
import NavBar from "../Components/NavBar";
import Partners from "../Components/Partners";
import { Link } from "react-router-dom";
import newbanner from "../newbanner.jpeg";
import Images from "../Components/Images";

export default function MainPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* <NavBar /> */}
      <br />
      <br />
      <br />
      <br />
      {/* <AddProduct /> */}
      {/* <br />
      <br /> */}
      {/* <Banner /> */}
      {/* <div>
        <img
          style={{ width: "100%", padding: "20px" }}
          src={newbanner}
          alt="pic"
        />
      </div> */}
      {/* <ImgCarousal /> */}
      <Images />
      <Forum />
      {/* <Link to="addProduct">
        <button
          style={{
            position: "fixed",
            zIndex: "100",
            top: "90%",
            right: "2%",
            color: "white",
            background: "black",
            opacity: "0.9",
            width: "100px",
            height: "50px",
            borderRadius: "20px",
          }}
        >
          {" "}
          Sell{" "}
        </button>
      </Link> */}

      <Category />
      <Partners />
      <ContactUs />
      <br />
      <br />
      {/* <Footer /> */}
    </div>
  );
}
