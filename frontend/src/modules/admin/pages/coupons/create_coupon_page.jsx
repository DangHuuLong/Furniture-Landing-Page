import HeaderAddEditPage from "../../components/header_add_edit_page";

export default function CreateCouponPage(){
  return (
    <div style={{
      width: '100%',
      height: '100%',
      backgroundColor: '#F5F6FA',
      padding: 28
    }}>
      <HeaderAddEditPage to={'/coupons'} name={'Create Coupon'} /> 
    </div>
  )
}