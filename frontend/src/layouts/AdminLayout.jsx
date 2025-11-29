import { Outlet } from "react-router-dom";
import Header from "../modules/admin/components/header/header";
import Navigation from "../modules/admin/components/navigation/navigation";
import { useState } from "react";
import DeleteItems from "../modules/admin/notifications/delete_items";
import Export from "../modules/admin/notifications/export";
import Import from "../modules/admin/notifications/import";
import AddCategory from "../modules/admin/notifications/add_category";

export default function AdminLayout() {
  const [deleteItems, setDeleteItems] = useState(false);
  const [deleteCount, setDeleteCount] = useState(0);      
  const [deleteHandler, setDeleteHandler] = useState(null); 

  const [exportData, setExportData] = useState(false);
  const [importData, setImportData] = useState(false);
  const [addCategory, setAddCategory] = useState(false);

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
          count={deleteCount}             
          onConfirm={deleteHandler}        
        />
      )}

      {exportData && (
        <Export
          open={exportData}
          onClose={() => setExportData(false)}
        />
      )}

      {importData && (
        <Import
          open={importData}
          onClose={() => setImportData(false)}
        />
      )}

      {addCategory && (
        <AddCategory
          open={addCategory}
          onClose={() => setAddCategory(false)}
        />
      )}

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

        <div style={{
          flex: 1,
          minWidth: 0,
          minHeight: 0,
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <Outlet
            context={{
              setDeleteItems,
              setDeleteCount,        
              setDeleteHandler,      
              setExportData,
              setImportData,
              setAddCategory,
            }}
          />
        </div>
      </div>
    </div>
  );
}
