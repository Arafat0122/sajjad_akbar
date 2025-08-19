import { Outlet } from "react-router-dom";
import Navbar from "../Common/Navbar/Navbar";
import Footer from "../Common/Footer/Footer";
import WhatsappButton from "../Common/WhatsappButton/WhatsappButton";


const Root = () => {
    return (
        <div className="bg-white">
            <Navbar />
            <div className="pt-16">
                <WhatsappButton />
                <Outlet />
            </div>
            <div className="h-[0.5px] w-full mx-auto mb-0 bg-gradient-to-r from-[#D4AF37] via-[#E8C97E] to-[#D4AF37] rounded-full shadow-[0_0_20px_#D4AF3770]"></div>
            <Footer />
        </div>
    );
};

export default Root;