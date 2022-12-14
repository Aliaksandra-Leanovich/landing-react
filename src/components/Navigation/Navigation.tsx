import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonVariants, LinkVariants } from "../../enums";
import { routes } from "../../routes";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getUserInfo } from "../../store/selectors";
import { unsetUser } from "../../store/slices/userSlice";
import { Button } from "../Button";
import { Link } from "../Link";
import { LoginForm } from "../LoginForm";
import { Modal } from "../Modal/Modal";
import { ButtonSC, ContainerSC, LinkSC } from "./style";

const config = [
  {
    href: "#product",
    title: "Product",
  },
  {
    href: "#services",
    title: "Services",
  },

  {
    href: "#blog",
    title: "About",
  },
];

export const Navigation = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isAuthorized } = useAppSelector(getUserInfo);

  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(true);
  };
  const closeModal = () => {
    setShow(false);
  };

  const handleLogout = () => {
    dispatch(unsetUser());
    navigate(routes.HOME);
  };

  return (
    <ContainerSC>
      {config.map((item, index) => (
        <LinkSC href={item.href} key={index}>
          {item.title}
        </LinkSC>
      ))}
      <Modal show={show} handleClose={closeModal}>
        <LoginForm setShow={setShow} />
      </Modal>
      <>
        {isAuthorized ? (
          <>
            <Link to={routes.USERS} variant={LinkVariants.primaryGreenLarge}>
              Users
            </Link>
            <Button
              variant={ButtonVariants.primaryWhiteSmall}
              type="button"
              handleClick={handleLogout}
            >
              Log out
            </Button>
          </>
        ) : (
          <ButtonSC onClick={showModal}>Log in</ButtonSC>
        )}
      </>
    </ContainerSC>
  );
};
