
import Tabla  from "@/components/Tabla";
import Sidebar from "@/components/Sidebar";

export default function Dashboard() {
    return (
        <div className="flex">
        
        <Sidebar />
        <Tabla />
        </div>
    );
}