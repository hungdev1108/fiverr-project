import {
  BookingJobSuccess,
  deleteHiredJobSuccess,
  SignUpError,
} from "components/Notifications/Notifications";
import { userManagerServices } from "services/UserManagerServices";
import { BOOKING_JOB, SET_USER_INFO, SIGNIN_ACTION, SIGNUP_ACTION } from "store/types/UserManagerType";
import { InfoBooking } from "_core/models/InfoBooking";
import { displayLoadingAction, hideLoadingAction } from "./LoadingActions";

export const SignInAction = (infoSignin, signInError, history) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);

      const result = await userManagerServices.signinSystem(infoSignin);
      if (result.data.statusCode === 200) {
        dispatch({
          type: SIGNIN_ACTION,
          infoSignin: result.data.content,
        });
        history.goBack();
        // console.log(infoSignin);
      }

      //   console.log("Login Action:", result);
    } catch (error) {
      dispatch(hideLoadingAction);
      signInError(error.response?.data.content);
      console.log("error", error);
    }
  };
};

export const SignUpAction = (infoSignup, SignUpSuccess, history) => {
  return async (dispatch) => {
    try {
      const result = await userManagerServices.signupSystem(infoSignup);
      if (result.data.statusCode === 200) {
        dispatch({
          type: SIGNUP_ACTION,
          infoSignup: result.data.content,
        });
        SignUpSuccess(history);
      }

      //   console.log("Register Action:", result);
    } catch (error) {
      dispatch(hideLoadingAction);
      SignUpError(error.response?.data.content);
      console.log("error", error);
    }
  };
};

export const getUserInfoAction = (id) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await userManagerServices.getUserInfo(id);
      dispatch({
        type: SET_USER_INFO,
        infoUser: result.data.content,
      });
      //   console.log(result.data.content);
      dispatch(hideLoadingAction);
    } catch (errors) {
      dispatch(hideLoadingAction);
      console.log(errors);
    }
  };
};

export const putUserInfoAction = (id) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      await userManagerServices.putUserInfo(id);
      //   console.log(result.data.content);
      dispatch(hideLoadingAction);
    } catch (errors) {
      dispatch(hideLoadingAction);
      console.log(errors);
    }
  };
};

export const getHireJobListAction = () => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await userManagerServices.getHireJobList();
      dispatch({
        type: BOOKING_JOB,
        bookingJob: result.data.content,
      });
      //   console.log(result.data.content);
      dispatch(hideLoadingAction);
    } catch (errors) {
      dispatch(hideLoadingAction);
      console.log(errors);
    }
  };
};

export const bookingJobAction = (infoBooking = new InfoBooking()) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await userManagerServices.bookingJob(infoBooking);
      console.log(result);

      dispatch(displayLoadingAction);
      BookingJobSuccess();
      dispatch(hideLoadingAction);
    } catch (error) {
      dispatch(hideLoadingAction);
      // registerError(error.response?.data.content);
      console.log("error", error);
    }
  };
};

export const deleteHireJobAction = (id) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      await userManagerServices.deleteHireJob(id);
      dispatch(displayLoadingAction);
      deleteHiredJobSuccess();
      dispatch(hideLoadingAction);
      dispatch(getHireJobListAction())
    } catch (error) {
      // registerError(error.response?.data.content);
      console.log("error", error);
    }
  };
};
