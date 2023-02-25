import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeStore } from './Context/Theme';
import Content from './Page/Content';
import Home from './Page/Home';
import Layout from './Page/Layout';
const App = () => {
  return (
    <ThemeStore>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/content" element={<Content />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeStore>
  );
};

export default App;
