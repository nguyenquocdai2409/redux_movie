import { DAT_GHE, HUY_GHE } from "../types/BaiTapDatVeType";

const stateDefault = {
  danhSachGheDangDat: [],
};

const BaiTapDatVeReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DAT_GHE: {
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      let index = danhSachGheDangDatUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.ghe.soGhe,
      );
      if (index !== -1) {
        //khi nguoi dung click ghe dang dat da co trong mang => remove di
        danhSachGheDangDatUpdate.splice(index, 1);
      } else {
        // khi ng dung click ghe dang dat chua co trong mang => push vao mang
        danhSachGheDangDatUpdate.push(action.ghe);
      }
      //cap nhat lai state => giao dien render lai
      state.danhSachGheDangDat = danhSachGheDangDatUpdate;
      return { ...state };
    }
    case HUY_GHE: {
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      let index = danhSachGheDangDatUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.soGhe,
      );
      if (index !== -1) {
        //khi nguoi dung click ghe dang dat da co trong mang => remove di
        danhSachGheDangDatUpdate.splice(index, 1);
      }
      state.danhSachGheDangDat = danhSachGheDangDatUpdate;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default BaiTapDatVeReducer;
