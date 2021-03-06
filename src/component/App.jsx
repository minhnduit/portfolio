import React from 'react';
import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import About from "./About/About.jsx";
import Contact from "./Contact/Contact.jsx";
import Experience from "./Experience/Experience.jsx";
import Nav from "./Nav/Nav.jsx";
import Portfolio from "./Portfolio/Portfolio.jsx";
import Career from "./Career/Career.jsx";

function App() {
    return (<div>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Portfolio />
    <Career />
    <Contact />
    <Footer />
    </div>)
}

export default App;