import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./components/contexts/UserContext";
import { HiveProvider } from "./components/contexts/HiveContext";

import { Navigation } from "./components/common/Navigation";
import { Footer } from "./components/common/Footer";
import { Home } from "./components/Home";
import { NoSuchLink } from "./components/common/404";
import { Catalogue } from "./components/hives/Catalogue";
import { Create } from "./components/hives/Create";
import { Details } from "./components/hives/Details";
import { Notes } from "./components/hives/Notes";
import { AddNotes } from "./components/hives/AddNotes";
import { Search } from "./components/hives/Search";
import { Login } from "./components/user/Login";
import { Register } from "./components/user/Register";
import { Logout } from "./components/user/Logout";
import { DeleteHive } from "./components/hives/DeleteHive";
import { Edit } from "./components/hives/Edit";

function App() {
  return (
    <AuthProvider>
      <div>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hives/catalogue" element={<Catalogue />} />
          <Route path="/hives/search" element={<Search />} />
          <Route path="*" element={<NoSuchLink />} />
          <Route path="/users/login" element={<Login />} />
          <Route path="/users/register" element={<Register />} />
          <Route path="/hives/create" element={<Create />} />
          <Route path="/users/logout" element={<Logout />} />

          <Route
            path="/hives/details/:id"
            element={
              <HiveProvider>
                <Details />
              </HiveProvider>
            }
          />
          <Route
            path="/hives/edit/:id"
            element={
              <HiveProvider>
                <Edit />
              </HiveProvider>
            }
          />
          <Route
            path="/hives/notes/:id/view"
            element={
              <HiveProvider>
                <Notes />
              </HiveProvider>
            }
          />
          <Route
            path="/hives/notes/:id/add"
            element={
              <HiveProvider>
                <AddNotes />
              </HiveProvider>
            }
          />
          <Route
            path="/hives/remove/:id"
            element={
              <HiveProvider>
                <DeleteHive />
              </HiveProvider>
            }
          />
        </Routes>

        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
