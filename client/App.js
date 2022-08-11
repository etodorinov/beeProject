import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./components/contexts/UserContext";
import { HiveProvider } from "./components/contexts/HiveContext";

import { Register } from "./components/user/Register";
import { Login } from "./components/user/Login";
import { Logout } from "./components/user/Logout";
import { Navigation } from "./components/common/Navigation";
import { Footer } from "./components/common/Footer";
import { RouteGuard } from "./components/common/RouteGuard";
import { Home } from "./components/Home";
import { Catalogue } from "./components/hives/Catalogue";
import { Details } from "./components/hives/Details";
import { Create } from "./components/hives/Create";
import { Notes } from "./components/hives/Notes";
import { AddNotes } from "./components/hives/AddNotes";
import { Search } from "./components/hives/Search";
import { DeleteHive } from "./components/hives/DeleteHive";
import { Edit } from "./components/hives/Edit";
import { NoSuchLink } from "./components/common/404";

function App() {
  return (
    <AuthProvider>
      <HiveProvider>
        <div>
          <Navigation />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users/login" element={<Login />} />
            <Route path="/users/register" element={<Register />} />
            <Route path="/hives/catalogue" element={<Catalogue />} />
            <Route path="/hives/details/:id" element={<Details />} />
            <Route path="/hives/search" element={<Search />} />
            <Route path="/notes/:id/view" element={<Notes />} />
            <Route path="*" element={<NoSuchLink />} />

            <Route element={<RouteGuard />}>
              <Route path="/users/logout" element={<Logout />} />
              <Route path="/hives/create" element={<Create />} />
              <Route path="/hives/edit/:id" element={<Edit />} />
              <Route path="/hives/remove/:id" element={<DeleteHive />} />
              <Route path="/notes/:id/add" element={<AddNotes />} />
            </Route>
          </Routes>

          <Footer />
        </div>
      </HiveProvider>
    </AuthProvider>
  );
}

export default App;
