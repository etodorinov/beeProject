import { Routes, Route } from "react-router-dom";

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
import { AuthProvider } from "./components/contexts/UserContext";
import { DeleteHive } from "./components/hives/DeleteHive";

function App() {
  return (
    <AuthProvider>
      <div>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hives/catalogue" element={<Catalogue />} />
          <Route path="/users/login" element={<Login />} />
          <Route path="/users/register" element={<Register />} />
          <Route path="/hives/search" element={<Search />} />
          <Route path="/hives/create" element={<Create />} />
          <Route path="/hives/details/:id" element={<Details />} />
          <Route path="/hives/notes/:id" element={<Notes />} />
          <Route path="/hives/add-note/:id" element={<AddNotes />} />
          <Route path="/hives/remove/:id" element={<DeleteHive />} />
          <Route path="/users/logout" element={<Logout />} />
          <Route path="*" element={<NoSuchLink />} />
        </Routes>

        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
