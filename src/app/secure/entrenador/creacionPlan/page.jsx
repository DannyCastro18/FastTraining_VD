import EntrenamientoForm from '@/app/auth/entrenamiento/page';
import Header from "@/components/header";
import Sidebar from "@/components/Sidebar";

export default function sesionesEntrenamiento() {
    return (
        <div>
            <Header />
            <Sidebar />
            <EntrenamientoForm />
        </div>
        
    )
};