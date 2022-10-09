import produce from "immer";
import {
  SET_CHI_TIET_LOAI_CONG_VIEC,
  SET_CONG_VIEC_CHI_TIET,
  SET_CONG_VIEC_THEO_CHI_TIET_LOAI,
  SET_DANH_SACH_CONG_VIEC_THEO_TEN,
  SET_LIST_JOB_TYPE_MENU,
} from "store/types/ManagerJobType";

const stateDefault = {
  menuLoaiCongViec: [],
  chiTietLoaiCongViec: [],
  danhSachCongViec: [],
  congViecChiTiet: [],
};

export const ManagerJobReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_LIST_JOB_TYPE_MENU: {
      const nextState = produce(state, (draft) => {
        draft.menuLoaiCongViec = action.menuLoaiCongViec;
      });
      return nextState;
    }

    case SET_CHI_TIET_LOAI_CONG_VIEC: {
      const nextState = produce(state, (draft) => {
        draft.chiTietLoaiCongViec = action.chiTietLoaiCongViec;
      });
      return nextState;
    }

    case SET_CONG_VIEC_THEO_CHI_TIET_LOAI: {
      const nextState = produce(state, (draft) => {
        draft.danhSachCongViec = action.danhSachCongViec;
      });
      return nextState;
    }

    case SET_CONG_VIEC_CHI_TIET: {
      const nextState = produce(state, (draft) => {
        draft.congViecChiTiet = action.congViecChiTiet;
      });
      return nextState;
    }

    case SET_DANH_SACH_CONG_VIEC_THEO_TEN: {
      const nextState = produce(state, (draft) => {
        draft.danhSachCongViec = action.danhSachCongViec;
      });
      return nextState;
    }

    default: {
      return { ...state };
    }
  }
};
