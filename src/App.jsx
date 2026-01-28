import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProjectDetail from "./components/ProjectDetail";
import "swiper/css";
import "swiper/css/free-mode";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/:slug" element={<ProjectDetail />} />
            </Routes>
        </Router>
    );
};

export default App;
