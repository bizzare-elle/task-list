import { Route, Routes, BrowserRouter } from "react-router-dom";
import RootLayout from "./components/layouts/RootLayout";
import Upcoming from "./components/pages/Upcoming";
import Calendar from "./components/pages/Calendar";
import Tasks from "./components/pages/Tasks";
import Settings from "./components/pages/Settings";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<h1>No Page Available</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
