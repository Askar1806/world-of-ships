import React from "react";
import { Ship } from "types/types";

interface ShipDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  ship: Ship;
}

const ShipDetailsModal: React.FC<ShipDetailsModalProps> = ({
  isOpen,
  onClose,
  ship,
}) => {
  return (
    <div className={`modal-overlay ${isOpen ? "open" : ""}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-content__close-button" onClick={onClose}>
          ✖
        </button>
        <h2 className="modal-content__title">{ship.title}</h2>
        <p className="modal-content__text">{ship.description}</p>
        <p className="modal-content__text">Type: {ship.type.title}</p>
        <p className="modal-content__text">Nation: {ship.nation.title}</p>
        <p className="modal-content__text">Level: {ship.level}</p>
      </div>
    </div>
  );
};

export default ShipDetailsModal;
