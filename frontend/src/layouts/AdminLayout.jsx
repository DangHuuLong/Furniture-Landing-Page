import { Outlet } from "react-router-dom";
import Header from "../modules/admin/components/header/header";
import Navigation from "../modules/admin/components/navigation/navigation";
import { useState } from "react";
import DeleteItems from "../modules/admin/notifications/delete_items";
import Export from "../modules/admin/notifications/export";

export default function AdminLayout() {
  const [deleteItems, setDeleteItems] = useState(false)
  const [exportData, setExportData] = useState(false)
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}
    >
      {deleteItems && (
        <DeleteItems
          open={deleteItems}
          onClose={() => setDeleteItems(false)}
        />
      )}
      {exportData && (
        <Export 
          open={exportData}
          onClose={()=>setExportData(false)}
        />
      )}

      <div
        style={{
          display: 'flex',
          flex: 1,          
          minHeight: 0,
          alignItems: 'stretch', 
        }}
      >
        <Navigation />

        <div style={{
          flex: 1,
          minWidth: 0,
          minHeight: 0,
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <Outlet context={{ setDeleteItems, setExportData }} />
        </div>
      </div>
    </div>
  );
}
