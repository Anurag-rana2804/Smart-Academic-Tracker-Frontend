import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

/* ✅ Admin Pages */
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CreateUser from "./pages/admin/CreateUser";
import CreateStudent from "./pages/admin/CreateStudent";
import CreateFaculty from "./pages/admin/CreateFaculty";
import ManageUsers from "./pages/admin/ManageUsers";
import StudentList from "./pages/admin/manage/StudentList";
import FacultyList from "./pages/admin/manage/FacultyList";
import EditUser from "./pages/admin/EditUser";
import ManageForms from "./pages/admin/ManageForms";
import ManageIssues from "./pages/admin/ManageIssues";
import StudentProfile from "./pages/admin/StudentProfile";
import SystemSettings from "./pages/admin/SystemSettings";
import Announcements from "./pages/admin/Announcements";
import RolePermissions from "./pages/admin/RolePermissions";
import FacultyProfile from "./pages/admin/FacultyProfile";


/* ✅ Faculty Pages */
import FacultyLayout from "./pages/faculty/FacultyLayout";
import FacultyDashboard from "./pages/faculty/Dashboard";
import UploadMarks from "./pages/faculty/UploadMarks";
import ViewRecords from "./pages/faculty/ViewRecords";
import RiskReport from "./pages/faculty/RiskReport";
import FacultyAnnouncements from "./pages/faculty/Announcements";
import AIAnalytics from "./pages/faculty/AIAnalytics";

/* ✅ Student Pages */
import StudentLayout from "./pages/student/StudentLayout";
import AdmitCard from "./pages/student/AdmitCard";
import Forms from "./pages/student/Forms";
import Issues from "./pages/student/Issues";
import Training from "./pages/student/Training";
import Calendar from "./pages/student/Calendar";
import Payment from "./pages/student/Payment";
import Dashboard from "./pages/student/Dashboard";
import Attendance from "./pages/student/Attendance";
import Results from "./pages/student/Results";
import ChangePassword from "./pages/student/ChangePassword";
import Feedback from "./pages/student/Feedback";
import Timetable from "./pages/student/Timetable";
import StudentAnnouncements from "./pages/student/Announcements";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* ✅ Admin Panel Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path="Admindashboard" element={<AdminDashboard />} />
          <Route path="create-user" element={<CreateUser />} />
          <Route path="create-student" element={<CreateStudent />} />
          <Route path="create-faculty" element={<CreateFaculty />} />
          <Route path="manage-users" element={<ManageUsers />} />
          <Route path="student-list" element={<StudentList />} />
          <Route path="faculty-list" element={<FacultyList />} />
          <Route path="edit-user/:id" element={<EditUser />} />
          <Route path="manage-forms" element={<ManageForms />} />
          <Route path="manage-issues" element={<ManageIssues />} />
          <Route path="student-profile/:id" element={<StudentProfile />} />
          <Route path="faculty-profile/:id" element={<FacultyProfile />} />
          <Route path="system-settings" element={<SystemSettings />} />
          <Route path="announcements" element={<Announcements />} />
          <Route path="permissions" element={<RolePermissions />} />

          
        </Route>


        {/* ✅ Faculty Panel Routes */}
        <Route
          path="/faculty"
          element={
            <ProtectedRoute role="faculty">
              <FacultyLayout />
            </ProtectedRoute>
          }
        >
          <Route path="upload" element={<UploadMarks />} />
          <Route path="records" element={<ViewRecords />} />
          <Route path="risk-report" element={<RiskReport />} />
          <Route path="announcements" element={<FacultyAnnouncements />} />
          <Route path="analytics" element={<AIAnalytics />} />
          <Route path="dashboard" element={<FacultyDashboard />} />
          
        </Route>


        {/* ================= STUDENT PANEL ROUTES ================= */}
        <Route
          path="/student"
          element={
            <ProtectedRoute role="student">
              <StudentLayout />
            </ProtectedRoute>
          }
        >
          {/* Dashboard */}
          <Route path="dashboard" element={<Dashboard />} />

          {/* Attendance */}
          <Route path="attendance" element={<Attendance />} />

          {/* Admit Card */}
          <Route path="admit-card" element={<AdmitCard />} />

          {/* Forms */}
          <Route path="forms" element={<Forms />} />

          {/* Results */}
          <Route path="results" element={<Results />} />

          {/* Raise Issue */}
          <Route path="issue" element={<Issues />} />

          {/* Training */}
          <Route path="training" element={<Training />} />

          {/* Calendar */}
          <Route path="calendar" element={<Calendar />} />

          {/* Payment */}
          <Route path="payment" element={<Payment />} />

          {/* Settings */}
          <Route path="change-password" element={<ChangePassword />} />

          {/* Feedback */}
          <Route path="feedback" element={<Feedback />} />

          {/* Timetable */}
          <Route path="timetable" element={<Timetable />} />
        </Route>

        {/* ================= STUDENT ANNOUNCEMENTS ================= */}
        <Route path="announcements" element={<StudentAnnouncements />} />
      </Routes>
    </BrowserRouter>
  );
}
