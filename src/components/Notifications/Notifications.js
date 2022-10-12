import { Modal } from "antd";

import { useHistory } from "react-router-dom";
import { TOKEN, USER_LOGIN } from "utils/settings/config";

const { confirm } = Modal;

// Modal.info
// Modal.success
// Modal.error
// Modal.warning

export const RegisterSuccess = () => {
  const history = useHistory();
  Modal.success({
    title: "ĐĂNG KÝ TÀI KHOẢN THÀNH CÔNG!",
    content: "ĐĂNG KÝ TÀI KHOẢN THÀNH CÔNG",
    onOk() {
      history.push("/signin");
    },
  });
};

export const RegisterError = (noti) => {
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

export const ConfirmLogout = () => {
  const history = useHistory();
  confirm({
    title: "THÔNG BÁO!",
    content: "BẠN CÓ MUỐN ĐĂNG XUẤT?",
    onOk() {
      localStorage.removeItem(USER_LOGIN);
      localStorage.removeItem(TOKEN);
      history.push("/home");
      window.location.reload();
    },
    onCancel() {},
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
