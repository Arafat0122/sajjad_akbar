import { Outlet } from "react-router-dom";
import Navbar from "../Common/Navbar/Navbar";
import Footer from "../Common/Footer/Footer";
import WhatsappButton from "../Common/WhatsappButton/WhatsappButton";


const Root = () => {
    return (
        <div className="bg-white">
            <Navbar />
            <div>
                <WhatsappButton />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;