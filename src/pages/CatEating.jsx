import React from "react";
import Transitions from "../components/Transitions";
import GoBackArrow from "../components/GoBackArrow";

const CatEating = () => {
  return (
    <Transitions>
      <GoBackArrow />
      <h2 className="mt-5 text-center" style={{ color: "green" }}>
        CAT EATING
      </h2>
    </Transitions>
  );
};

export default CatEating;
