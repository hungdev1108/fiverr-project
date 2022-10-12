import { managerCommentServices } from "services/ManagerCommentServices";
import { SET_BINH_LUAN_THEO_MA_CONG_VIEC } from "store/types/ManagerCommentType";

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
