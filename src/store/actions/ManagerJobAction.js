import { managerJobServices } from "services/ManagerJobServices";
import { SET_LIST_JOB, SET_LIST_JOB_TYPE_MENU } from "store/types/ManagerJobType";

export const getJobTypeMenuAction = () => {
  return async (dispatch) => {
    try {
      const result = await managerJobServices.getJobTypeMenu();
      dispatch({
        type: SET_LIST_JOB_TYPE_MENU,
        lstJobTypeMenu: result.data.content,
      });
      //   console.log(result.data.content);
    } catch (errors) {
      console.log(errors);
    }
  };
};

export const getListJobAction = () => {
  return async (dispatch) => {
    try {
      const result = await managerJobServices.getListJob();
      dispatch({
        type: SET_LIST_JOB,
        lstJob: result.data.content,
      });
      //   console.log(result.data.content);
    } catch (errors) {
      console.log(errors);
    }
  };
};
