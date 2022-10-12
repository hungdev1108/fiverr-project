import { BOOKING_JOB, SET_USER_INFO, SIGNIN_ACTION } from "store/types/UserManagerType";
import { TOKEN, USER_LOGIN } from "utils/settings/config";

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
  userSignin: user,
  infoUser: {},
  bookingJob: [],
};

export const UserManagerReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SIGNIN_ACTION: {
      const { infoSignin } = action;
      localStorage.setItem(USER_LOGIN, JSON.stringify(infoSignin));
      localStorage.setItem(TOKEN, infoSignin.accessToken);
      return { ...state, userSignin: infoSignin };
    }
    case BOOKING_JOB: {
      state.bookingJob = action.bookingJob;
      return { ...state };
    }

    case SET_USER_INFO: {
      state.infoUser = action.infoUser;
      return { ...state };
    }

    default: {
      return { ...state };
    }
  }
};
