import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "lenis/dist/lenis.css";
import "./index.css";
import App from "./App.jsx";
import ActivityPage from "./components/ActivityPage.jsx";
import NewsPage from "./components/NewsPage.jsx";
import BlogsPage from "./components/BlogsPage.jsx";
import ReadBlogPage from "./components/ReadBlogPage.jsx";
import About from "./components/About.jsx";
import Page404 from "./components/Page404.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/activity" element={<ActivityPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/blogs">
                    <Route index element={<BlogsPage />} />
                    <Route path=":id" element={<ReadBlogPage />} />
                </Route>
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
