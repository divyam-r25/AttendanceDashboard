import React, { useState, useEffect } from "react";
import FilterControls from "./FilterControls";
import StudentList from "./StudentList";

function AttendanceDashboard() {
  const [students, setStudents] = useState([]);
  const [filterType, setFilterType] = useState("all");
  const [showLowAttendance, setShowLowAttendance] = useState(false);
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [sortByAttendance, setSortByAttendance] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        const updated = data.map((s) => ({
          ...s,
          attendance: Math.floor(Math.random() * 101),
          status: Math.random() > 0.5 ? "present" : "absent", // NEW
        }));
        setStudents(updated);
        setLoading(false);
      });
  }, []);

  
  const toggleStatus = (id) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id
          ? {
              ...student,
              status:
                student.status === "present" ? "absent" : "present",
            }
          : student
      )
    );
  };


  let processedStudents = students.filter((student) => {
    if (filterType === "present" && student.status !== "present")
      return false;

    if (filterType === "absent" && student.status !== "absent")
      return false;

    if (showLowAttendance && student.attendance >= 75) return false;

    return true;
  });

 
  if (sortByAttendance) {
    processedStudents = [...processedStudents].sort(
      (a, b) => b.attendance - a.attendance
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6">

      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Student Attendance Dashboard 🎓
      </h1>

      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-5xl mx-auto">

        <FilterControls
          filterType={filterType}
          setFilterType={setFilterType}
          showLowAttendance={showLowAttendance}
          setShowLowAttendance={setShowLowAttendance}
          sortByAttendance={sortByAttendance}
          setSortByAttendance={setSortByAttendance}
        />

        {loading ? (
          <div className="text-center py-10 text-gray-500">
            Loading...
          </div>
        ) : (
          <StudentList
            students={processedStudents}
            selectedStudentId={selectedStudentId}
            onRowSelect={setSelectedStudentId}
            onToggleStatus={toggleStatus} // NEW
          />
        )}

      </div>
    </div>
  );
}

export default AttendanceDashboard;