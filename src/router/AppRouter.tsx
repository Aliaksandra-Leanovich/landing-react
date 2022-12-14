import { Route, Routes } from "react-router-dom";
import { MainTemplate } from "../components/MainTemplate/MainTemplate";
import { Explore } from "../pages/Explore";
import { Home } from "../pages/Home";
import { routes } from "../routes";
import { useAppSelector } from "../store/hooks";
import { getUserInfo } from "../store/selectors";

export const AppRouter = () => {
  const { isAuthorized } = useAppSelector(getUserInfo);
  return (
    <Routes>
      <Route path={routes.HOME} element={<MainTemplate />}>
        <Route index element={<Home />} />

        <Route path={routes.EXPLORE} element={<Explore />} />
      </Route>
    </Routes>
  );
};
