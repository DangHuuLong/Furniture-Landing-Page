import HeaderSubPage from "../../components/header_sub_page"

export default function CustomersPage(){
  return (
    <div style={{
      flex: 1,
      boxSizing: 'border-box',
      alignSelf: 'stretch',
      backgroundColor: '#F5F6FA',
      padding: '28px 40px 40px 40px',
      position: 'relative'
    }}>
      <HeaderSubPage headerTitle={'Customers'} addButtonTitle={'Customer'} exportButton={true}/>
    </div>
  )
}