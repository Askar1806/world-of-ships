import React from 'react';

interface ShipCardProps {
  title: string;
  description: string;
  imageUrl: string;
  level: number;
  type: string;
  nation: string;
  onClick: () => void;
}

const ShipCard: React.FC<ShipCardProps> = ({ title, imageUrl, level, type, nation, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={imageUrl} alt={`Image of ${title}`} className="card__image" />
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        <p className="card__detail">Level: {level}</p>
        <p className="card__detail">Type: {type}</p>
        <p className="card__detail">Nation: {nation}</p>
      </div>
    </div>
  );
};

export default ShipCard;
