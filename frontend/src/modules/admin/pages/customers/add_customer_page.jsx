import HeaderAddEditPage from "../../components/header_add_edit_page"
import FooterAddEditPage from '../../components/footer_add_edit_page';
import { useOutletContext } from 'react-router-dom'
import { ChevronDown } from "lucide-react";
import Input from "../../components/input";
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
      <div style={{
        width: '100%',
        borderRadius: 6,
        backgroundColor: 'white',
        padding: 28,
        marginTop: 28
      }}>
        {/**Customer Information */}
        <div style={{

        }}>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 700,
            fontSize: 16,
            color: '#131523',
          }}>Customer Information</p>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 400,
            fontSize: 14,
            color: '#5A607F',
            marginTop: 4
          }}>Most important information about the customer</p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr', 
            gap: 24,          
            marginTop: 24              
          }}>
            <Input label={'First Name'} inputHeight={40} />
            <Input label={'Last Name'} inputHeight={40} />
            <Input label={'Email Address'} inputHeight={40} />
            <Input label={'Phone Number'} inputHeight={40} />
          </div>
        </div>
        <div style={{
          height: 1,
          width: '100%',
          backgroundColor: '#E6E9F4',
          marginTop: 40
        }}></div>
        {/**Customer Address */}
        <div style={{
          marginTop: 28
        }}>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 700,
            fontSize: 16,
            color: '#131523',
          }}>Customer Address</p>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 400,
            fontSize: 14,
            color: '#5A607F',
            marginTop: 4
          }}>Shipping address information</p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 24,
            marginTop: 24
          }}>
            <Input label={'Address'} inputHeight={40} />
            <Input label={'Apartment'} inputHeight={40} />
            <Input label={'City'} inputHeight={40} />
            <div style={{
              display: 'flex',
              gap: 24
            }}>
              <Input label={'Country'} placeHolder={'Choose'} Icon={ChevronDown} inputHeight={40} />
              <Input label={'Postal Code'} inputHeight={40} />
            </div>
            <Input label={'Phone'} inputHeight={40} />
          </div>
        </div>
        <div style={{
          height: 1,
          width: '100%',
          backgroundColor: '#E6E9F4',
          marginTop: 40
        }}></div>
        {/**Customer Notes */}
        <div style={{
          marginTop: 28
        }}>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 700,
            fontSize: 16,
            color: '#131523',
          }}>Customer Notes</p>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 400,
            fontSize: 14,
            color: '#5A607F',
            marginTop: 4
          }}>Add notes about customer</p>
          <div style={{
            marginTop: 24
          }}>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 14,
              color: '#5A607F',
            }}>Notes</p>
            <textarea
              placeholder='Add notes about customer'
              style={{
                height: 72,
                width: '100%',
                border: '1px solid #D9E1EC',
                padding: '12px 16px',
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 400,
                fontSize: 16,
                color: '#A1A7C4',
                borderRadius: 4,
                marginTop: 4,
                outline: 'none'
              }} />
          </div>
        </div>
      </div>
      <FooterAddEditPage to={"/customers"} saveFunction={setImportData} />
    </div>
    
  )
}