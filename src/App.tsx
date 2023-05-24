import React from 'react';
import {Routes, Route} from "react-router-dom";
import RoutesApp from "./routes/RoutesApp";
import Home from "./components/home/Home";

import Header from "./components/header/Header";
import Goods from './components/goods/Goods';
import Footer from "./components/footer/Footer";

import './styles/app.css';

function App() {
  return (
    <div className="app">
        <Header />

        <main className={'app-main'}>
            <div className={'app-container'}>
                <Routes>
                    <Route path="/" element={<Home />}>
                        {
                            RoutesApp.get().map((route) => {
                                return (
                                    <Route key={route.path}
                                           path={route.path}
                                           element={route.element}
                                    />
                                )
                            })
                        }

                        <Route path="*" element={<Home />} />
                    </Route>
                </Routes>
            </div>
        </main>

        <Footer />
    </div>
  );
}

export default App;