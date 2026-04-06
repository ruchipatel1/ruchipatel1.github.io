import { BrowserRouter, Route, Routes, ScrollRestoration } from "react-router-dom";

import { Layout } from "@/components/layout";
import { About } from "@/pages/About";
import { Contact } from "@/pages/Contact";
import { Home } from "@/pages/Home";
import { Resume } from "@/pages/Resume";
import { Work } from "@/pages/Work";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollRestoration />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
