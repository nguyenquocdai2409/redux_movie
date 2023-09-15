import React, { Component } from "react";
import { connect } from "react-redux";
import { HUY_GHE } from "../redux/types/BaiTapDatVeType";
import { huyGheAction } from "../redux/action/BaiTapDatVeAction";

class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        <div className="mt-5">
          <button className="gheDuocChon"></button>{" "}
          <span style={{ fontSize: "30px" }} className="text-light">
            Ghe da dat
          </span>{" "}
          <br />
          <button className="gheDangChon"></button>{" "}
          <span style={{ fontSize: "30px" }} className="text-light">
            Ghe dang dat
          </span>{" "}
          <br />
          <button className="ghe"></button>{" "}
          <span style={{ fontSize: "30px" }} className="text-light">
            Ghe chua dat
          </span>
        </div>
        <div className="mt-5">
          <table class="table" border="2">
            <thead>
              <tr className="text-light" style={{ fontSize: "35px" }}>
                <th>So ghe</th>
                <th>Gia</th>
                <th></th>
              </tr>

              <tr className="text-info" style={{ fontSize: "35px" }}>
                <th>So ghe</th>
                <th>Gia</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="text-warning">
              {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                return (
                  <tr key={index}>
                    <td>{gheDangDat.soGhe}</td>
                    <td>{gheDangDat.gia.toLocaleString}</td>
                    <td>
                      <button
                        onClick={() => {
                          this.props.dispatch(huyGheAction(gheDangDat.soGhe));
                        }}
                      >
                        Huy
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <td></td>
              <td className="text-warning">Tong Tien</td>
              <td className="text-warning">
                {this.props.danhSachGheDangDat
                  .reduce((tongTien, gheDangDat, index) => {
                    return (tongTien += gheDangDat.gia);
                  }, 0)
                  .toLocaleString()}
              </td>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat,
  };
};

export default connect(mapStateToProps)(ThongTinDatGhe);
