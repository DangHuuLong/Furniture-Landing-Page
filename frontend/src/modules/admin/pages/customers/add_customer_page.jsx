import HeaderAddEditPage from "../../components/header_add_edit_page"
import FooterAddEditPage from '../../components/footer_add_edit_page';
import { useOutletContext } from 'react-router-dom'
export default function AddCustomerPage(){

  const { setImportData } = useOutletContext()
  return (
    <div style={{
      width: '100%',
      height: '100%',
      backgroundColor: '#F5F6FA',
      padding: '30px 40px 40px 40px',
    }}> 
      <HeaderAddEditPage to={'/customers'} name={'Add Customer'} saveFunction={setImportData} />
      <FooterAddEditPage to={"/customers"} saveFunction={setImportData} />
    </div>
    
  )
}