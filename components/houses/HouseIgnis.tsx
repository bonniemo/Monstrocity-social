import React from "react";
import HouseCard from "./HouseCard";

const HouseIgnis = () => {
  return (
    <HouseCard
      specialty="Fire, passion, and bold adventures."
      traits="Energetic, fearless, and creative."
      motto="Fuel the flames of courage."
      notableMembers={[
        "Ignatius Flameheart",
        "Pyra Emberglow",
        "Zephyr Skywhisper",
      ]}
      funFact="Known for their fiery personalities, members of Ignis often host explosive parties (literally!)."
      description="House Ignis burns with the intensity of fire, fueled by passion and courage. Its members are bold explorers, inventors, and adventurers who light up every room they enter. Ignis monsters are known for their vibrant creativity and daring exploits, making them unforgettable."
    />
  );
};

export default HouseIgnis;
