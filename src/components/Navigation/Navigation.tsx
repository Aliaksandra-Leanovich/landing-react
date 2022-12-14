import { useState } from "react";
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
  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(true);
  };
  const closeModal = () => {
    setShow(false);
  };

  return (
    <ContainerSC>
      {config.map((item, index) => (
        <LinkSC href={item.href} key={index}>
          {item.title}
        </LinkSC>
      ))}
      <Modal show={show} handleClose={closeModal}>
        <LoginForm />
      </Modal>
      <ButtonSC onClick={showModal}>Log in</ButtonSC>
    </ContainerSC>
  );
};
