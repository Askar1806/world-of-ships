import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_SHIPS } from "../graphql/queries";
import ShipCard from "./ShipCard";
import ShipDetailsModal from "./ShipDetailsModal";
import FilterBar from "./FilterBar";
import { Ship } from "types/types";
import Container from "./Container";

const ShipsComponent = () => {
  const { loading, error, data } = useQuery(GET_SHIPS);
  const [selectedShip, setSelectedShip] = useState<Ship | null>(null);
  const [filters, setFilters] = useState({ title: "", nation: "", type: "", level: "" });

  interface Filters {
    title?: string;
    nation?: string;
    type?: string;
    levels?: string;
  }

  const handleFilterChange = (newFilters: Filters) => {
    setFilters(prevFilters => ({ ...prevFilters, ...newFilters }));
  };

  const handleShipSelect = (ship: Ship) => {
    setSelectedShip(ship);
  };

  const filteredShips = data?.vehicles.filter((ship: Ship) => {
    const filterByTitle = filters.title ? ship.title.toLowerCase().includes(filters.title.toLowerCase()) : true;
    const filterByNation = filters.nation ? ship.nation.title === filters.nation : true;
    const filterByType = filters.type ? ship.type.title === filters.type : true;
    const filterByLevel = filters.level ? ship.level.toString() === filters.level : true;
  
    return filterByTitle && filterByNation && filterByType && filterByLevel;
  });

  return (
    <div>
      <FilterBar
        onFilterChange={handleFilterChange}
        nations={["U.S.A.", "Japan", "Germany", "U.S.S.R.", "U.K.", "France", "Pan-Asia", "Italy", "Commonwealth", "Pan-America", "Europe", "The Netherlands", "Spain"]}
        types={["Destroyer", "Cruiser", "Battleship", "Submarine", "Aircraft Carrier"]}
        levels={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
      />
      <Container>
        {loading && <p>Loading...</p>}
        {error && <p>Error! {error.message}</p>}
        <div className="card-container">
          {filteredShips &&
            filteredShips.map((ship: Ship) => (
              <ShipCard
                title={ship.title}
                description={ship.description}
                imageUrl={ship.icons.large}
                level={ship.level}
                type={ship.type.title}
                nation={ship.nation.title}
                onClick={() => handleShipSelect(ship)}
              />
            ))}
          {selectedShip && (
            <ShipDetailsModal
              isOpen={!!selectedShip}
              onClose={() => setSelectedShip(null)}
              ship={selectedShip}
            />
          )}
        </div>
      </Container>
    </div>
  );
};

export default ShipsComponent;
