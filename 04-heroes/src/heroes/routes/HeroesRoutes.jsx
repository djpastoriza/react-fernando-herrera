// @flow
import * as React from "react";
import { Navbar } from "../../ui/components/Navbar";
import { MarvelPage, DcPage, SearchPage, HeroPage } from "../pages";
import { Route, Routes, Navigate } from "react-router-dom";


export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/marvel" element={<MarvelPage />} />
          <Route path="/dc" element={<DcPage />} />

          <Route path="/search" element={<SearchPage />} />
          <Route path="/hero/:id" element={<HeroPage />} />

          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};
