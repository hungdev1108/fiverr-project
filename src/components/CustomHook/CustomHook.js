import { useHistory } from "react-router-dom";

export const BackToHome = () => {
  const history = useHistory();
  history.goBack();
};
