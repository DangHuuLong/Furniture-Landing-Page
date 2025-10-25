import { Outlet } from "react-router-dom";
import Header from "../modules/admin/components/header/header";
import Navigation from "../modules/admin/components/navigation/navigation";

export default function AdminLayout() {
  return (
    <>
      <Header/>
      <div style={{display:'flex'}}>
        <Navigation/>
        <Outlet />
      </div>
    </>
  )
}