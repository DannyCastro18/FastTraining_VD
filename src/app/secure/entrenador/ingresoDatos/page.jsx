import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import RegistroDatos from "@/app/secure/datos/page"

export default function plan () {
    return (
        <div className="flex">
        <Header />
        <Sidebar />
        <RegistroDatos />
        </div>
    );
};