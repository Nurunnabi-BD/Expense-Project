function FilterExpenses({ onSelectCategory }) {
  return (
    <>
      <div className="sel overflow-x-auto rounded-box border border-base-content/5 bg-base-100 m-auto p-4 mt-10 w-3/4">
        <select
          className="select select-primary"
          onChange={(e) => onSelectCategory(e.target.value)}
        >
          <option value={""}>All</option>
          <option value={"Business"}>Business</option>
          <option value={"Personal"}>Personal</option>
          <option value={"Tour"}>Tour</option>
        </select>
      </div>
    </>
  );
}
export default FilterExpenses;
