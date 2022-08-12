import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./components/contexts/UserContext";
import { HiveProvider } from "./components/contexts/HiveContext";

import { Register } from "./components/user/Register";
import { Login } from "./components/user/Login";
import { Logout } from "./components/user/Logout";
import { Navigation } from "./components/common/Navigation";
import { Footer } from "./components/common/Footer";
import { NotLoggedInGuard } from "./components/common/NotLoggedInGuard";
import { LoggedInGuard } from "./components/common/LoggedInGuard";
import { Home } from "./components/Home";
import { Catalogue } from "./components/hives/Catalogue";
import { Details } from "./components/hives/Details";
import { Create } from "./components/hives/Create";
import { Search } from "./components/hives/Search";
import { DeleteHive } from "./components/hives/DeleteHive";
import { Edit } from "./components/hives/Edit";
import { NoSuchLink } from "./components/common/404";
import { Notes } from "./components/notes/Notes";
import { AddNotes } from "./components/notes/AddNotes";

function App() {
  return (
    <AuthProvider>
      <HiveProvider>
        <div>
          <Navigation />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hives/catalogue" element={<Catalogue />} />
            <Route path="/hives/details/:id" element={<Details />} />
            <Route path="/hives/search" element={<Search />} />
            <Route path="/notes/:id/view" element={<Notes />} />
            <Route path="*" element={<NoSuchLink />} />

            <Route
              path="/users/login"
              element={
                <LoggedInGuard>
                  <Login />
                </LoggedInGuard>
              }
            />

            <Route
              path="/users/register"
              element={
                <LoggedInGuard>
                  <Register />
                </LoggedInGuard>
              }
            />

            <Route
              path="/users/logout"
              element={
                <NotLoggedInGuard>
                  <Logout />
                </NotLoggedInGuard>
              }
            />
            <Route
              path="/hives/create"
              element={
                <NotLoggedInGuard>
                  RouteGuard <Create />
                </NotLoggedInGuard>
              }
            />
            <Route
              path="/hives/edit/:id"
              element={
                <NotLoggedInGuard>
                  <Edit />
                </NotLoggedInGuard>
              }
            />

            <Route
              path="/hives/remove/:id"
              element={
                <NotLoggedInGuard>
                  <DeleteHive />
                </NotLoggedInGuard>
              }
            />
            <Route
              path="/notes/:id/add"
              element={
                <NotLoggedInGuard>
                  <AddNotes />
                </NotLoggedInGuard>
              }
            />
          </Routes>

          <Footer />
        </div>
      </HiveProvider>
    </AuthProvider>
  );
}

export default App;
