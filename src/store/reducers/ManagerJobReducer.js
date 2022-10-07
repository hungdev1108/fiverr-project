import { SET_LIST_JOB, SET_LIST_JOB_TYPE_MENU } from "store/types/ManagerJobType";

const stateDefault = {
  lstJobTypeMenu: [],
  lstJob: [],
};

export const ManagerJobReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_LIST_JOB_TYPE_MENU: {
      state.lstJobTypeMenu = action.lstJobTypeMenu;
      return { ...state };
    }

    case SET_LIST_JOB: {
      state.lstJob = action.lstJob;
      return { ...state };
    }

    default: {
      return { ...state };
    }
  }
};
