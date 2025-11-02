import Input from '../../components/input'
import CouponType from './coupon_type'
import { Banknote, Handbag, Truck, Tag, Calendar, ChevronDown } from 'lucide-react';
export default function CouponInformation(){
  const types = [
    {
      Icon: Banknote,
      name: 'Fixed Discount'
    },
    {
      Icon: Handbag,
      name: 'Percentage Discount'
    },
    {
      Icon: Truck,
      name: 'Fixed Discount'
    },
    {
      Icon: Tag,
      name: 'Price Discount'
    },
  ]
  return (
    <div style={{
      marginTop: 30,
      width: '100%',
      borderRadius: 6,
      backgroundColor: 'white',
      padding: 28
    }}>
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 700,
        fontSize: 16,
        color: "#131523",
      }}>Coupon Information</p>
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 400,
        fontSize: 14,
        color: "#5A607F",
        marginTop: 4
      }}>Code will be used by users in checkout</p>
      <div style={{
        display: 'flex',
        gap: 24,
        marginTop: 24
      }}>
        <Input label={'Coupon Code'} placeHolder={'Shipfree20'} inputHeight={40} />
        <Input label={'Coupon Name'} placeHolder={'Free Shipping'} inputHeight={40} />
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
        color: "#131523",
        marginTop: 28
      }}>Coupon Type</p>
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 400,
        fontSize: 14,
        color: "#5A607F",
        marginTop: 4
      }}>Type of coupon you want to create</p>
      <CouponType types={types}/>
      <div style={{
        width: '100%',
        marginTop: 24,
        display: 'flex',
        gap: 24
      }}>
        <div style={{
          flex: 1,
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 24
          }}>
            <Input label={'Discount Value'} placeHolder={'Amount'} inputHeight={40} />
            <Input label={'Duration'} placeHolder={'Set Duration'} inputHeight={40} Icon={Calendar}/>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginTop: 12
          }}>
            <input type='checkbox' style={{
              width: 20,
              height: 20,
              borderRadius: 4,
              cursor: 'pointer',
              border: '1px solid #D7DBEC'
            }}></input>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 16,
              color: "#131523",
            }}>Don't set duration</p>
          </div>
        </div>
        <div style={{
          flex: 1,
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 24
          }}>
            <Input label={'Applies to'} placeHolder={'Choose'} inputHeight={40} Icon={ChevronDown}/>
            <Input label={'Usage Limits'} placeHolder={'Amount of uses'} inputHeight={40}/>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginTop: 12
          }}>
            <input type='checkbox' style={{
              width: 20,
              height: 20,
              borderRadius: 4,
              cursor: 'pointer',
              border: '1px solid #D7DBEC'
            }}></input>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 16,
              color: "#131523",
            }}>Don't limit amout of uses</p>
          </div>
        </div>
      </div>
    </div>
  )
}