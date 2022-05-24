import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../_actions/user_action";

export default function withAuth(SpecificComponent, option, adminRoute = null) {
  function AuthenticationCheck(props) {
    const history = useNavigate();
    console.log(history);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(auth()).then((response) => {
        const { isAuth, isAdmin } = response.payload;
        console.log(isAuth);

        if (!isAuth) {
          if (option) {
            history("/login");
          }
        } else {
          if (adminRoute && !isAdmin) {
            history("/");
          } else {
            if (option === false) {
              history("/");
            }
          }
        }
      });
    }, []);

    return <SpecificComponent {...props} />;
  }

  return AuthenticationCheck;
}
