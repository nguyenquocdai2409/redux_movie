import { combineReducers } from "redux";
import BaiTapDatVeReducer from "./BaiTapDatVeReducer";

export let rootReducer = combineReducers({
  BaiTapDatVeReducer: BaiTapDatVeReducer,
});
