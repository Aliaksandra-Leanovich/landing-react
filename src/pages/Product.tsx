import React from "react";

type ContainerAppProps = {
  CounterAppOne: React.LazyExoticComponent<React.ComponentType<{}>>;
  CounterAppTwo: React.LazyExoticComponent<React.ComponentType<{}>>;
};

export const Product = ({
  CounterAppOne,
  CounterAppTwo,
}: ContainerAppProps) => {
  return (
    <div>
      <CounterAppOne />
      <CounterAppTwo />
    </div>
  );
};
