import { useLocation } from 'react-router-dom';
import FooterAddEditPage from "../../components/footer_add_edit_page";
import HeaderAddEditPage from "../../components/header_add_edit_page";
import Info from './info';
import CustomerOrders from './customer_orders';

export default function CustomerInfoPage() {
  const { state } = useLocation();
  const name = state?.name
  const location = state?.location
  const orders = state?.name
  return (
    <div
      style={{
        flex: 1,
        boxSizing: 'border-box',
        alignSelf: 'stretch',
        backgroundColor: '#F5F6FA',
        padding: '28px 40px 40px 40px',
        position: 'relative',
      }}
    >
      <HeaderAddEditPage to={'/customers'} name={`Customer: ${decodeURIComponent(name)}`} />
      
      <div style={{
        marginTop: 28,
        width: '100%',
        display: 'flex',
        gap: 30
      }}>
        {/**Left */}
        <div style={{
          flex: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 30
        }}>
          <Info name={name} location={location} orders={orders}/>
          <CustomerOrders />
        </div>
        {/**Right */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 30
        }}></div>
      </div>

      <FooterAddEditPage />
    </div>
  );
}
