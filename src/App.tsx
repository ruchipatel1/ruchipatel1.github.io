import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, ScrollRestoration } from "react-router-dom";

import { Layout } from "@/components/layout";
import { About } from "@/pages/About";
import { Contact } from "@/pages/Contact";
import { Home } from "@/pages/Home";
import { Resume } from "@/pages/Resume";
import { Work } from "@/pages/Work";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={
        <>
          <ScrollRestoration />
          <Layout />
        </>
      }
    >
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/work" element={<Work />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/contact" element={<Contact />} />
    </Route>,
  ),
);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
