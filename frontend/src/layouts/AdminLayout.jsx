import { Outlet } from "react-router-dom";
import Header from "../modules/admin/components/header/header";
import Navigation from "../modules/admin/components/navigation/navigation";

export default function AdminLayout() {
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header />

      <div
        style={{
          display: 'flex',
          flex: 1,          
          minHeight: 0,
          alignItems: 'stretch', 
        }}
      >
        <Navigation />

        <div style={{ flex: 1, minWidth: 0, overflow: 'auto' }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
