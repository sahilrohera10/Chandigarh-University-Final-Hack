import { Carousel } from "antd";
import React from "react";
import banners1 from "../banners1.jpg";
import banners2 from "../bannersss.jpg";
import banners3 from "../banners2.jpg";
const contentStyle = {
  height: "460px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default function Images() {
  return (
    <div>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>
            {" "}
            <img
              style={{ width: "100%", height: "460px" }}
              src={banners1}
              alt=""
            />{" "}
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            {" "}
            <img
              style={{ width: "100%", height: "460px" }}
              src={banners2}
              alt=""
            />{" "}
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            {" "}
            <img
              style={{ width: "100%", height: "460px" }}
              src={banners3}
              alt=""
            />{" "}
          </h3>
        </div>
      </Carousel>
    </div>
  );
}
