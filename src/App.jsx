import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Tasks from "./components/Tasks/Tasks";
import { GlobalProvider } from "./context/GlobalState";
import EditTask from "./components/Tasks/EditTask/EditTask";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <Routes>
            <Route path="/" element={<Tasks />} />
            <Route path="/task/:_id" element={<EditTask />} />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
