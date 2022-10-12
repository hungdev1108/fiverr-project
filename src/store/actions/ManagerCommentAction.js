import { managerCommentServices } from "services/ManagerCommentServices";
import { userManagerServices } from "services/UserManagerServices";
import { SET_BINH_LUAN_THEO_MA_CONG_VIEC } from "store/types/ManagerCommentType";
import { displayLoadingAction, hideLoadingAction } from "./LoadingActions";

export const getBinhLuanTheoMaCongViecAction = (maCongViec) => {
  return async (dispatch) => {
    try {
      const result = await managerCommentServices.getBinhLuanTheoMaCongViec(maCongViec);
      dispatch({
        type: SET_BINH_LUAN_THEO_MA_CONG_VIEC,
        danhSachBinhLuan: result.data.content,
      });
      //   console.log(result.data.content);
    } catch (errors) {
      console.log(errors);
    }
  };
};

export const postBinhLuanAction = (thongTinBinhLuan) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await userManagerServices.postBinhLuan(thongTinBinhLuan);
      dispatch(displayLoadingAction);
      dispatch(getBinhLuanTheoMaCongViecAction());
      //   console.log("Register Action:", result);
    } catch (error) {
      dispatch(hideLoadingAction);
      // registerError(error.response?.data.content);
      console.log("error", error);
    }
  };
};
