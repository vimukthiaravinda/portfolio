import 'react';
import Navbar from "./components/navbar/navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import About from "./components/about/about.jsx";
import Skills from "./components/skills/skills.jsx";
import Mywork from "./components/mywork/mywork.jsx";
import Contact from "./components/contact/contact.jsx";
import Footer from "./components/footer/footer.jsx";


const App = () => {
    return (
        <div className="App">
            <Navbar/>
            <Hero/>
            <About/>
            <Skills/>
            <Mywork/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default App;