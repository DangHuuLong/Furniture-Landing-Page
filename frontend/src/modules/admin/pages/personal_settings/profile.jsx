import { ChevronDown } from 'lucide-react'
import Input from '../../components/input'
export default function Profile(){
  return (
    <div>
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 700,
        fontSize: 16,
        color: '#131523',
        marginTop: 28
      }}>Profile Details</p>
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 400,
        fontSize: 14,
        color: '#5A607F',
        marginTop: 4
      }}>Enter your profile information</p>
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 400,
        fontSize: 14,
        color: '#5A607F',
        marginTop: 24
      }}>Profile Image</p>
      <div style={{
        width: '100%',
        height: 128,
        borderRadius: 4,
        border: '1px dashed #A1A7C4',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 12
        }}>
          <div style={{
            width: 102,
            height: 40,
            borderRadius: 4,
            border: '1px solid #D7DBEC',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 16,
              color: '#1E5EFF',
            }}>Add File</p>
          </div>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 400,
            fontSize: 14,
            color: '#5A607F',
          }}>Or drag and drop files</p>
        </div>
      </div>
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
      <div style={{
        width: '100%',
        height: 1,
        backgroundColor: '#E6E9F4',
        marginTop: 40
      }}></div>
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 700,
        fontSize: 16,
        color: '#131523',
        marginTop: 28
      }}>Regional Settings</p>
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 400,
        fontSize: 14,
        color: '#5A607F',
        marginTop: 4
      }}>Set your language and timezone</p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 24,
        marginTop: 24
      }}>
        <Input label={'Language'} inputHeight={40} placeHolder={'English'} Icon={ChevronDown} />
        <Input label={'Timezone'} inputHeight={40} placeHolder={'GMT +02:00'} Icon={ChevronDown} />
      </div>
    </div>
  )
}