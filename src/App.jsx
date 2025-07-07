import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Head from "./Head";
import Header from "./Header";
import SpecialitySection from "./Items";
import DoctorConsultation from "./Doctor";
import SymptomSection from "./Symptom";
import About from "./About";
import Login from "./Login";
import Signup from "./Signup";
import Contact from "./Contact";
import Footer from "./Footer";
import Services from "./Service";
import RegistrationPopup from "./Registrationpopup";



function App() {
  return (
    <>
      <Navbar />
      <RegistrationPopup />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <SpecialitySection />
              <SymptomSection />
              <Head />
              <DoctorConsultation />
              <Footer />

            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />

      </Routes>

    </>
  );
}

export default App;
