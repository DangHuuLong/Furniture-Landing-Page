import HeaderAddEditPage from "../../components/header_add_edit_page";

export default function PersonalSettingsPage(){
  return (
    <div style={{
      width: '100%',
      height: '100%',
      backgroundColor: '#F5F6FA',
      padding: 28
    }}>
      <HeaderAddEditPage back={false} name={'Settings'}/>
    </div>
  )
}