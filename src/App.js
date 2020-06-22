import React from "react";
import Header from "./components/header";
import AboutMe from "./components/aboutme";
import Resume from "./components/resume";
/*import Portfolio from './components/portfolio/portfolio';
import Testimonials from  './components/testimonials/testimonials';*/
import Contact from "./components/contact";
import Footer from "./components/footer";
import data from "./data";

function App() {
  return (
    <div className="App">
      <Header data={data} />
      <AboutMe data={data} />
      <Resume data={data} />
      {/*<Portfolio data={data}/>
        <Testimonials data={data}/>*/}
      <Contact data={data} />
      <Footer data={data} />
    </div>
  );
}

export default App;
