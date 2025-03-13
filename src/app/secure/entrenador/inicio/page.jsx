import Header from "@/components/Header";
import Tabla  from "@/components/Tabla";
import Sidebar from "@/components/Sidebar";

export default function Dashboard() {
    return (
        <div className="flex">
        <Header />
        <Sidebar />
        <Tabla />
        </div>
    );
}