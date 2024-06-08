import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

type CardProps = {
  title: string;
  description?: string;
  time: string;
  price: string;
};

const Card: React.FC<CardProps> = ({ title, description, time, price }) => {
  return (
    <div className="w-72 p-4 bg-background rounded-lg shadow-md flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold mb-4 text-left">{title}</h3>
        <p className="text-black">{description}</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="space-x-1">
          <FontAwesomeIcon icon={faClock} />
          <span className="text-black">{time}</span>
        </div>
        <span className="text-black text-wrap text-end">{price}</span>
      </div>
    </div>
  );
};

export default Card;
