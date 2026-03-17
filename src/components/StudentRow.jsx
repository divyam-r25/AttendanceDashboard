import React from "react";

function StudentRow({ student, isSelected, onSelect }) {

  const isGood = student.attendance >= 75;

  return (
    <div
      onClick={() => onSelect(student.id)}
      className={`grid grid-cols-3 items-center p-4 cursor-pointer transition
          border-b hover:bg-gray-50
          ${isSelected ? "bg-blue-50 border-l-4 border-blue-500" : ""}`}
    >

      <div className="font-medium text-gray-900">
        {student.name}
      </div>

      <div
        className={`text-center font-bold text-lg ${isGood ? "text-green-600" : "text-red-600"
          }`}
      >
        {student.attendance}%
      </div>

      <div className="text-right">
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold
          ${isGood
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
            }`}
        >
          {isGood ? "Good" : "Low"}
        </span>
      </div>

    </div>
  );
}

export default StudentRow;