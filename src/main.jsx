import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import SignInPage from "./pages/signin";
import SignUpPage from "./pages/signup";
import UpdateCourse from "./pages/updatecourse";
import UpdateProfilePage from "./pages/updateprofile";
import Dashboard from "./pages/dashboard";
import PracticePage from "./pages/practicepage";
import QuestionPage from "./pages/questionspage";
import StudyMaterialPage from "./pages/studymaterial";
import StudyResourcePage from "./pages/studyresourcepage";
import AssignmentPage from "./pages/AssignmentPage";
import Homepage from "./pages/homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/signin",
    element: <SignInPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/updatecourse",
    element: <UpdateCourse />,
  },
  {
    path: "/updateprofile",
    element: <UpdateProfilePage />,
  },
  {
    path: "/examprep",
    element: <PracticePage />,
  },
  {
    path: "/practicequestions",
    element: <QuestionPage />,
  },
  {
    path: "/studyMaterial",
    element: <StudyMaterialPage />,
  },
  {
    path: "/studyResource",
    element: <StudyResourcePage />,
  },
  {
    path: "/assignments",
    element: <AssignmentPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  
  

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
