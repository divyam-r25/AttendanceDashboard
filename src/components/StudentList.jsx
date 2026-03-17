import React from "react";
import StudentRow from "./StudentRow";

function StudentList({ students, selectedStudentId, onRowSelect }) {

  if (students.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">
        No students match the filter
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow border overflow-hidden">

      <div className="grid grid-cols-3 bg-gray-50 p-4 text-sm font-semibold text-gray-600 border-b">
        <div>Name</div>
        <div className="text-center">Attendance</div>
        <div className="text-right">Status</div>
      </div>

      {students.map((student) => (
        <StudentRow
          key={student.id}
          student={student}
          isSelected={student.id === selectedStudentId}
          onSelect={onRowSelect}
        />
      ))}

    </div>
  );
}

export default StudentList;