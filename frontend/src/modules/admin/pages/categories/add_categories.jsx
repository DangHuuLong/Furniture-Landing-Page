import HeaderSubPage from "../../components/header_add_edit_page";

export default function AddCategories({category}){
  return (
    <div style={{
      width: '100%',
      height: '100%',
      backgroundColor: '#F5F6FA',
      padding: '30px 40px 40px 40px'
    }}>
      <HeaderSubPage to={'/categories'} name={category}/>
    </div>
  )
}