import produce from "immer";
import { SET_BINH_LUAN_THEO_MA_CONG_VIEC } from "store/types/ManagerCommentType";

const stateDefault = {
  danhSachBinhLuan: [],
};

export const ManagerCommentReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_BINH_LUAN_THEO_MA_CONG_VIEC: {
      const nextState = produce(state, (draft) => {
        draft.danhSachBinhLuan = action.danhSachBinhLuan;
      });
      return nextState;
    }

    default: {
      return { ...state };
    }
  }
};
