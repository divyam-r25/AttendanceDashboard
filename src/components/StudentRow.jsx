import React from "react";

function StudentRow({ student, isSelected, onSelect, onToggleStatus }) {
  const isGood = student.attendance >= 75;

  return (
    <div
      className={`grid grid-cols-4 items-center p-4 cursor-pointer transition border-b hover:bg-gray-50
      ${isSelected ? "bg-blue-50 border-l-4 border-blue-500" : ""}`}
    >

      <div onClick={() => onSelect(student.id)} className="font-medium">
        {student.name}
      </div>

      <div
        onClick={() => onSelect(student.id)}
        className={`text-center font-bold ${
          isGood ? "text-green-600" : "text-red-600"
        }`}
      >
        {student.attendance}%
      </div>

      <div className="text-center">
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold
          ${
            student.status === "present"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {student.status}
        </span>
      </div>

      <div className="text-right">
        <button
          onClick={() => onToggleStatus(student.id)}
          className="px-3 py-1 text-xs rounded-lg bg-blue-500 text-white hover:bg-blue-600"
        >
          Toggle
        </button>
      </div>

    </div>
  );
}

export default StudentRow;