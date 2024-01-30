import React from "react";
import Icons from "assets/icons";

interface FilterBarProps {
  onFilterChange: (filters: {
    title?: string;
    name?: string;
    type?: string;
    level?: string;
    nation?: string;
  }) => void;
  types: string[];
  levels: string[];
  nations: string[];
}

const FilterBar: React.FC<FilterBarProps> = ({
  onFilterChange,
  types,
  levels,
  nations,
}) => {
  return (
    <div className="filter-bar">
      <div>
        <input
          className="filter-bar__input"
          placeholder="Search by title"
          onChange={(e) => onFilterChange({ title: e.target.value })}
        />
        <select
          className="filter-bar__select"
          onChange={(e) => onFilterChange({ type: e.target.value })}
          defaultValue=""
        >
          <option value="">All Types</option>
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <select
          className="filter-bar__select"
          onChange={(e) =>
            onFilterChange({ level: e.target.value || undefined })
          }
          defaultValue=""
        >
          <option value="">All Levels</option>
          {levels.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>
        <select
          className="filter-bar__select"
          onChange={(e) => onFilterChange({ nation: e.target.value })}
          defaultValue=""
        >
          <option value="">All Nations</option>
          {nations.map((nation) => (
            <option key={nation} value={nation}>
              {nation}
            </option>
          ))}
        </select>
      </div>
      <div>
        <img src={Icons.ships} alt="ships-logo" />
      </div>
    </div>
  );
};

export default FilterBar;
