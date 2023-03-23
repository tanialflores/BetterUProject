
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function ({ children }) {
   
    return (
        <div className="Guest">
            <Header />
                {children}
            <Footer />
        </div>
    );
}
