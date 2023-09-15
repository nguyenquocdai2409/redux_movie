import React, { Component, Fragment } from "react";
import "./BookingMovie.js";
import ThongTinDatGhe from "./ThongTinDatGhe.js";
import danhSachGheData from '../data/danhSachGhe.json'
import HangGhe from "./HangGhe.js";

export default class BookingMovie extends Component {

  renderHangGhe = () => { 
    return danhSachGheData.map((hangGhe,index) => { 
      return <div key={index} >
        <HangGhe hangGhe={hangGhe} soHangGhe={index}/>
      </div>
     })
   }




  render() {
    return (
      <div
        className="bookingMovie"
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url('./img/bookingticket/bgmovie.jpg')",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.8)",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <h1 className="text-warning display-4">
                  DAT VE XEM PHIM CYBERLEARN.VN
                </h1>
                <div className="mt-3 text-light" style={{ fontSize: "15px" }}>
                  Man Hinh
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div className="screen"></div>
                  {this.renderHangGhe()}

                </div>
              </div>
              <div className="col-4 text-left">
                <h1
                  style={{ fontSize: "35px" }}
                  className="text-light display-4 mt-1"
                >
                  DANH SACH GHE BAN CHON
                </h1>
                <ThongTinDatGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
