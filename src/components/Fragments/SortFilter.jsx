import Select from "../Elements/Select";
import SearchBar from "../Elements/SearchBar";
import React from "react";

export default function SortFilter(prop) {
  const sortValues = ["Date Asc", "Date Desc", "Title Asc", "Title Desc"];
  const filterValues = ["All", "Personal", "Work", "Ideas", "Finance"];
  const { sortFilter } = prop;
  const [search, setSearch] = React.useState("");
  const [sort, setSort] = React.useState(sortValues[0]);
  const [filter, setFilter] = React.useState(filterValues[0]);

  function handleSearch(e) {
    setSearch(e.target.value);
  }
  function handleSort(e) {
    setSort(e.target.value);
  }
  function handleFilter(e) {
    setFilter(e.target.value);
  }
  React.useEffect(() => {
    sortFilter({ search, sort, filter });
  }, [search, sort, filter]);

  return (
    <div className="flex px-3 gap-4">
      <SearchBar onChange={handleSearch} />
      <Select values={sortValues} onChange={handleSort} />
      <Select values={filterValues} onChange={handleFilter} />
    </div>
  );
}
