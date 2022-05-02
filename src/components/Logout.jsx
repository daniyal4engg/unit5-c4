import { logIn } from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { store } from "../Redux/store";
export const Logout = () => {
  // Logout component, just log user out and take him to `/` homepage

  // suggestion: if you are storing anyting in redux it's a good idea to
  // empty it before loggin out. eg: order

  const isAuth = useSelector((store) => store.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  dispatch(logIn(false));
  navigate("/");
  return <></>;
};
