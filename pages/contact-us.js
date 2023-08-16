import ContactUs from '../components/ContactUs';
import { Footer, Navbar } from '../components';
import '../styles/globals.css';

const ContactPage = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <ContactUs />
    <Footer />
  </div>
  );

export default ContactPage;
