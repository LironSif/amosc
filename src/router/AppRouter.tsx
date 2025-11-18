import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { ServicesPage } from "../pages/ServicesPage";
import { ProjectsPage } from "../pages/ProjectsPage";
import { TeamPage } from "../pages/TeamPage";
import { ContactPage } from "../pages/ContactPage";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}
