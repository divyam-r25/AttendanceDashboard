# 🎓 Student Attendance Dashboard

This is a simple React-based dashboard that helps visualize and manage student attendance.
I built this project to practice **React concepts like state management, filtering, and component design**.

---

## Features

* 📡 Fetches student data from an API
* 📊 Displays attendance percentage for each student
* 🎯 Filter students by:

  * All
  * Present
  * Absent
* ⚠️ Toggle to show students with **less than 75% attendance**
* 🔄 Sort students based on attendance percentage
* ✅ Manually mark students as **Present / Absent**
* 🎨 Color-coded UI:

  * Green → Good attendance
  * Red → Low attendance
* 🖱️ Click on a student row to highlight it

---

##  Tech Stack

* **React (Functional Components)**
* **useState & useEffect hooks**
* **Tailwind CSS**
* **Fetch API**

---

##  What I Learned

While building this project, I got hands-on experience with:

* Managing state using `useState`
* Handling side effects using `useEffect`
* Component-based architecture
* Passing data using props
* Filtering and sorting data
* Conditional rendering
* Updating state immutably

---

## 📂 Project Structure

```bash
src/
 ├── components/
 │   ├── AttendanceDashboard.jsx
 │   ├── FilterControls.jsx
 │   ├── StudentList.jsx
 │   └── StudentRow.jsx
 ├── App.jsx
 └── index.css
```

---

## ⚙️ Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repo-name.git
```

2. Navigate into the project:

```bash
cd your-repo-name
```

3. Install dependencies:

```bash
npm install
```

4. Run the project:

```bash
npm run dev
```

---

##  Notes

* The attendance percentage is randomly generated.
* The present/absent status can be toggled manually.
* Filtering is based on the current state of each student.

---

##  Future Improvements

* Add search functionality 🔍
* Add charts for analytics 📊
* Add backend for real data storage
* Add authentication

---

