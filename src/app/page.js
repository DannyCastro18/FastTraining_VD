// import BarraAdmin from "@/components/BarraAdmin";
// import ScheduleForm from "@/components/Tabla";
// import PlayerForm from "./secure/datos/page";
// import Datos from "./secure/datos/layout";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/header";

export default function Page() {
   return (
   <div className="p-4 h-screen">
     {/* <BarraAdmin /> */}
      {/* <ScheduleForm/> */}
      {/* <PlayerForm /> */}
       {/* <Datos />  */}
      <Header />
      <Sidebar />
    </div>
  )
}

// import LoginPage from "../app/auth/login/page";

// export default function Home() {
//   return <LoginPage />;
// }