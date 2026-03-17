import React from "react";

function FilterControls({
  filterType,
  setFilterType,
  showLowAttendance,
  setShowLowAttendance,
  sortByAttendance,
  setSortByAttendance,
}) {

  const buttonClass = (type) =>
    `px-4 py-2 rounded-lg font-medium transition ${
      filterType === type
        ? "bg-blue-600 text-white shadow"
        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
    }`;

  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">

      <div className="flex gap-2">
        <button
          onClick={() => setFilterType("all")}
          className={buttonClass("all")}
        >
          All
        </button>

        <button
          onClick={() => setFilterType("present")}
          className={buttonClass("present")}
        >
          Present
        </button>

        <button
          onClick={() => setFilterType("absent")}
          className={buttonClass("absent")}
        >
          Absent
        </button>
      </div>

      <div className="flex items-center gap-4">

        <label className="flex items-center gap-2 text-gray-700">
          <input
            type="checkbox"
            checked={showLowAttendance}
            onChange={() => setShowLowAttendance((prev) => !prev)}
            className="accent-red-500"
          />
          Show &lt;75% Attendance
        </label>

        <button
          onClick={() => setSortByAttendance((prev) => !prev)}
          className="px-4 py-2 border rounded-lg hover:bg-gray-100"
        >
          Sort by %
        </button>

      </div>
    </div>
  );
}

export default FilterControls;