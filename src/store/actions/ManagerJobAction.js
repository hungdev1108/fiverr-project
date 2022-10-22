import { managerJobServices } from "services/ManagerJobServices";
import {
  SET_CHI_TIET_LOAI_CONG_VIEC,
  SET_CONG_VIEC_CHI_TIET,
  SET_CONG_VIEC_THEO_CHI_TIET_LOAI,
  SET_DANH_SACH_CONG_VIEC_THEO_TEN,
  SET_LIST_JOB_TYPE_MENU,
} from "store/types/ManagerJobType";
import { displayLoadingAction, hideLoadingAction } from "./LoadingActions";

export const getJobTypeMenuAction = () => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await managerJobServices.getJobTypeMenu();
      dispatch({
        type: SET_LIST_JOB_TYPE_MENU,
        menuLoaiCongViec: result.data.content,
      });
      dispatch(hideLoadingAction);
      //   console.log(result.data.content);
    } catch (errors) {
      dispatch(hideLoadingAction);
      console.log(errors);
    }
  };
};

export const getChiTietLoaiCongViecAction = (id) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await managerJobServices.getChiTietLoaiCongViec(id);
      dispatch({
        type: SET_CHI_TIET_LOAI_CONG_VIEC,
        chiTietLoaiCongViec: result.data.content,
      });
      //   console.log(result.data.content);
      dispatch(hideLoadingAction);
    } catch (errors) {
      dispatch(hideLoadingAction);
      console.log(errors);
    }
  };
};

export const getCongViecTheoChiTietLoaiAction = (id) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await managerJobServices.getCongViecTheoChiTietLoai(id);
      dispatch({
        type: SET_CONG_VIEC_THEO_CHI_TIET_LOAI,
        danhSachCongViec: result.data.content,
      });
      //   console.log(result.data.content);
      dispatch(hideLoadingAction);
    } catch (errors) {
      dispatch(hideLoadingAction);
      console.log(errors);
    }
  };
};

export const getCongViecChiTietAction = (id) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await managerJobServices.getCongViecChiTiet(id);
      dispatch({
        type: SET_CONG_VIEC_CHI_TIET,
        congViecChiTiet: result.data.content,
      });
      //   console.log(result.data.content);
      dispatch(hideLoadingAction);
    } catch (errors) {
      dispatch(hideLoadingAction);
      console.log(errors);
    }
  };
};

export const getDanhSachCongViecTheoTenAction = (tenCongViec) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await managerJobServices.getDanhSachCongViecTheoTen(tenCongViec);
      dispatch({
        type: SET_DANH_SACH_CONG_VIEC_THEO_TEN,
        danhSachCongViec: result.data.content,
      });
      //   console.log(result.data.content);
      dispatch(hideLoadingAction);
    } catch (errors) {
      dispatch(hideLoadingAction);
      console.log(errors);
    }
  };
};
