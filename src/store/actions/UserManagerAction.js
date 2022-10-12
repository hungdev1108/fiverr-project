import { BookingJobSuccess, RegisterSuccess } from "components/Notifications/Notifications";
import { useHistory } from "react-router-dom";
import { userManagerServices } from "services/UserManagerServices";
import { BOOKING_JOB, SET_USER_INFO, SIGNIN_ACTION, SIGNUP_ACTION } from "store/types/UserManagerType";

import { displayLoadingAction, hideLoadingAction } from "./LoadingActions";

export const SignInAction = (infoSignin, signInError) => {
  const history = useHistory();
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);

      const result = await userManagerServices.signinSystem(infoSignin);
      if (result.data.statusCode === 200) {
        dispatch({
          type: SIGNIN_ACTION,
          infoSignin: result.data.content,
        });
        dispatch(hideLoadingAction);
        history.goBack();
      }

      //   console.log("Login Action:", result);
    } catch (error) {
      dispatch(hideLoadingAction);
      signInError(error.response?.data.content);
      console.log("error", error);
    }
  };
};

export const SignUpAction = (infoSignup, registerError) => {
  return async (dispatch) => {
    try {
      const result = await userManagerServices.signupSystem(infoSignup);
      if (result.data.statusCode === 200) {
        dispatch({
          type: SIGNUP_ACTION,
          infoSignup: result.data.content,
        });
        dispatch(displayLoadingAction);
        RegisterSuccess();
        dispatch(hideLoadingAction);
      }

      //   console.log("Register Action:", result);
    } catch (error) {
      dispatch(hideLoadingAction);
      registerError(error.response?.data.content);
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
      const result = await userManagerServices.putUserInfo(id);
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

export const bookingJobAction = (infoBooking) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await userManagerServices.bookingJob(infoBooking);
      dispatch(displayLoadingAction);
      BookingJobSuccess();
      dispatch(hideLoadingAction);

      //   console.log("Register Action:", result);
    } catch (error) {
      dispatch(hideLoadingAction);
      // registerError(error.response?.data.content);
      console.log("error", error);
    }
  };
};
