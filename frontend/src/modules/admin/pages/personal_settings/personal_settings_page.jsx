import HeaderAddEditPage from "../../components/header_add_edit_page";
import FooterAddEditPage from '../../components/footer_add_edit_page'
import FastFilter from '../coupons/fast_filter'
import { Outlet, useNavigate } from "react-router-dom";
export default function PersonalSettingsPage(){
  const fastfilter = ['Profile', 'Notifications', 'Accounts', 'Security']
  const navigate = useNavigate();                 
  const navFunc = (option) => {
    const path = option.toLowerCase();
    navigate(`/personal-settings/${path}`);
  }
  return (
    <div style={{
      width: '100%',
      height: '100%',
      backgroundColor: '#F5F6FA',
      padding: 28
    }}>
      <HeaderAddEditPage back={false} name={'Settings'}/>
      <div style={{
        width: '100%',
        padding: 28,
        borderRadius: 6,
        boxShadow: '0px 1px 4px 0px rgba(21, 34, 50, 0.08)',
        backgroundColor: 'white',
        marginTop: 28
      }}>
        <FastFilter fastFilter={fastfilter} color={'#4944E6'} navFunc={navFunc}/>
        <Outlet />
      </div>
      <FooterAddEditPage />

    </div>
  )
}