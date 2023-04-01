
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function ({ children }) {
    const auth = localStorage.getItem('auth')
    return (
        <div className="Guest">
            <Header auth={auth}/>
                {children}
            <Footer />
        </div>
    );
}
