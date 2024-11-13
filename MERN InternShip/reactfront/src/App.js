import { Navigate, Outlet } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";
import AppHome from "./layout/AppHome";
import EmployeeList from "./pages/EmployeeList";
import CreateEmployee from "./pages/CreateEmployee";
import UpdateEmployee from "./pages/UpdateEmployee";

// Helper function to check authentication
const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return !!token;
};

// AuthenticatedRoute component
const AuthenticatedRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
};

// UnauthenticatedRoute component
const UnauthenticatedRoute = () => {
  return !isAuthenticated() ? <Outlet /> : <Navigate to="/" />;
};

// Define the routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthenticatedRoute />,
    children: [
      {
        path: "/",
        element: <AppHome />,
        children: [
          { path: "", element: <Home /> },
          { path: "employeeList", element: <EmployeeList /> },
          { path: "createEmployee", element: <CreateEmployee /> },
          { path: "editEmployee", element: <UpdateEmployee /> }

        ]
        // children: [{ path: "employeeList", element: <EmployeeList /> }]
      }
    ],
    errorElement: <NoPage />
  },
  {
    path: "login",
    element: <UnauthenticatedRoute />,
    children: [
      {
        path: "/login",
        element: <Login />
      }
    ]
  }
]);

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/"  element={<Layout />}>
    //       <Route index element={<Home />} />
    //       {/* <Route path="blogs" element={<Blogs />} />
    //       <Route path="contact" element={<Contact />} />
    //       <Route path="*" element={<NoPage />} /> */}
    //        <Route path="*" element={<NoPage />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <RouterProvider router={router} />
  );
}

export default App;
