import Header from "./components/header";
import {Outlet} from "react-router-dom";
import Footer from "./components/footer";
import {Toaster} from "react-hot-toast";

export default function WebLayout() {
    return (
        <div className="w-screen h-auto bg-background">
            <Toaster
                toastOptions={{
                    success: {
                        style: {
                            background: "#b60707",
                            color: "#fff",
                        },
                    },
                }}
            />
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}