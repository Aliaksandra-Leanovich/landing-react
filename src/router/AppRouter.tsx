import { Navigate, Route, Routes } from "react-router-dom";
import { MainTemplate } from "../components/MainTemplate/MainTemplate";
import { Explore } from "../pages/Explore";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { routes } from "../routes";
import { useAppSelector } from "../store/hooks";
import { getUserInfo } from "../store/selectors";
import { PrivateRoute } from "../utils";

export const AppRouter = () => {
  const { isAuthorized } = useAppSelector(getUserInfo);
  return (
    <Routes>
      <Route path={routes.HOME} element={<MainTemplate />}>
        {/* <Route element={<PrivateRoute />}> */}
        <Route index element={<Home />} />
        {/* </Route> */}
        <Route path={routes.EXPLORE} element={<Explore />} />
        <Route path={routes.LOGIN} element={<Login />} />
        {/* <Route
          path={routes.LOGIN}
          element={isAuthorized ? <Navigate to={routes.HOME} /> : <Login />}
        /> */}
      </Route>
    </Routes>
  );
};
