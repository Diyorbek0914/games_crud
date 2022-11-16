import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./AuthProvider";
import CreateRoute from "./pages/Create";
import DetailRoute from "./pages/Detail";
import ListRoute from "./pages/List";
import UpdateRoute from "./pages/Update";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListRoute />} />
          <Route path="/games/create" element={<CreateRoute />} />
          <Route path="/Detail/:id" element={<DetailRoute />} />
          <Route path="/games/update/:id" element={<UpdateRoute />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
