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
        }));
        setStudents(updated);
        setLoading(false);
      });
  }, []);

  // 👉 Stats calculation
  const total = students.length;
  const present = students.filter((s) => s.attendance >= 75).length;
  const absent = total - present;
  const low = students.filter((s) => s.attendance < 75).length;

  // 👉 Filtering
  let processedStudents = students.filter((student) => {
    const isPresent = student.attendance >= 75;

    if (filterType === "present" && !isPresent) return false;
    if (filterType === "absent" && isPresent) return false;
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

      {/* HEADER */}
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Student Attendance Dashboard 🎓
      </h1>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500 text-sm">Total Students</p>
          <h2 className="text-2xl font-bold">{total}</h2>
        </div>

        <div className="bg-green-100 p-4 rounded-xl shadow">
          <p className="text-green-700 text-sm">Present</p>
          <h2 className="text-2xl font-bold text-green-800">{present}</h2>
        </div>

        <div className="bg-red-100 p-4 rounded-xl shadow">
          <p className="text-red-700 text-sm">Absent</p>
          <h2 className="text-2xl font-bold text-red-800">{absent}</h2>
        </div>

        <div className="bg-yellow-100 p-4 rounded-xl shadow">
          <p className="text-yellow-700 text-sm">Low Attendance</p>
          <h2 className="text-2xl font-bold text-yellow-800">{low}</h2>
        </div>

      </div>

      {/* MAIN CARD */}
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
          />
        )}

      </div>
    </div>
  );
}

export default AttendanceDashboard;