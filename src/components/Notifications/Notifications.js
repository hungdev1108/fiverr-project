import { Modal } from "antd";
import { useHistory } from "react-router-dom";
import { deleteHireJobAction } from "store/actions/UserManagerAction";

import { TOKEN, USER_LOGIN } from "utils/settings/config";

const { confirm } = Modal;

// Modal.info
// Modal.success
// Modal.error
// Modal.warning

export const SignUpSuccess = (history) => {
  Modal.success({
    title: "ĐĂNG KÝ TÀI KHOẢN THÀNH CÔNG!",
    content: "ĐĂNG KÝ TÀI KHOẢN THÀNH CÔNG",
    onOk() {
      history.push(`/signin`);
    },
  });
};

export const SignUpError = (noti) => {
  Modal.error({
    title: "ĐĂNG KÝ TÀI KHOẢN KHÔNG THÀNH CÔNG!",
    content: noti,
    onOk() {},
  });
};

export const signInError = (noti) => {
  Modal.error({
    title: "ĐĂNG NHẬP KHÔNG THÀNH CÔNG!",
    content: noti,
    onOk() {},
  });
};

export const ConfirmSignOut = (history) => {
  confirm({
    title: "THÔNG BÁO!",
    content: "BẠN CÓ MUỐN ĐĂNG XUẤT?",
    onOk() {
      localStorage.removeItem(USER_LOGIN);
      localStorage.removeItem(TOKEN);
      history.push("/");
      window.location.reload();
    },
    onCancel() {},
  });
};

export const ConfirmDeleteHiredJob = (id, dispatch) => {
  confirm({
    title: "THÔNG BÁO!",
    content: "BẠN CÓ MUỐN XOÁ CÔNG VIỆC ĐÃ THUÊ?",
    onOk() {
      dispatch(deleteHireJobAction(id))
    },
    onCancel() {},
  });
};

export const deleteHiredJobSuccess = () => {
  Modal.success({
    title: "XOÁ CÔNG VIỆC THÀNH CÔNG!",
    content: "xOÁ CÔNG VIỆC THÀNH CÔNG!",
    onOk() {
    },
  });
};

export const BookingJobSuccess = () => {
  Modal.success({
    title: "ĐĂNG KÝ TÀI KHOẢN THÀNH CÔNG!",
    content: "ĐĂNG KÝ TÀI KHOẢN THÀNH CÔNG",
    onOk() {
      window.location.reload();
    },
  });
};
