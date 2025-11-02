import FastFilter from "./fast_filter";
import Header from "./header";
import TableCoupons from "./table_coupons";
import Tools from "./tools";

export default function CouponsPage(){
  const fastFilter = ['All Coupons', 'Active Coupons', 'Expired Coupons']
  const headers = ['Coupon Name', 'Usage', 'Status', 'Date']
  const datas = [
    {
      couponName: {
        name: 'Summer discount 10% off',
        subdes: 'Summer2020',
        type: 'discount',
      },
      usage: 15,
      status: 'active',
      date: {
        from: 'May 5, 2020',
        to: 'May 15, 2020',
      },
    },
    {
      couponName: {
        name: 'Free shipping on all items',
        subdes: 'Shipfreetomee15',
        type: 'shipping',
      },
      usage: 42,
      status: 'active',
      date: {
        from: 'May 5, 2020',
        to: 'May 15, 2020',
      },
    },
    {
      couponName: {
        name: 'Discount for women clothes 5%',
        subdes: 'Womenclothing5',
        type: 'discount',
      },
      usage: 12,
      status: 'active',
      date: {
        from: 'April 12, 2020',
        to: 'April 20, 2020',
      },
    },
    {
      couponName: {
        name: 'Summer discount 10% off',
        subdes: 'Summer2020',
        type: 'discount',
      },
      usage: 8,
      status: 'active',
      date: {
        from: 'April 12, 2020',
        to: 'April 20, 2020',
      },
    },
    {
      couponName: {
        name: 'Free shipping on all items',
        subdes: 'Shipfreetomee15',
        type: 'shipping',
      },
      usage: 18,
      status: 'active',
      date: {
        from: 'April 12, 2020',
        to: 'April 20, 2020',
      },
    },
    {
      couponName: {
        name: 'Discount for women clothes 10%',
        subdes: 'Womenclothing5',
        type: 'discount',
      },
      usage: 57,
      status: 'active',
      date: {
        from: 'Feb 14, 2020',
        to: 'Feb 20, 2020',
      },
    },
    {
      couponName: {
        name: 'Summer discount 15% off',
        subdes: 'Summer2020',
        type: 'discount',
      },
      usage: 16,
      status: 'active',
      date: {
        from: 'Feb 14, 2020',
        to: 'Feb 20, 2020',
      },
    },
    {
      couponName: {
        name: 'Free shipping on all items',
        subdes: 'Shipfreetomee15',
        type: 'shipping',
      },
      usage: 15,
      status: 'expired',
      date: {
        from: 'Feb 14, 2020',
        to: 'Feb 20, 2020',
      },
    },
    {
      couponName: {
        name: 'Discount for women clothes 10%',
        subdes: 'Womenclothing5',
        type: 'discount',
      },
      usage: 12,
      status: 'expired',
      date: {
        from: 'Feb 14, 2020',
        to: 'Feb 20, 2020',
      },
    },
    {
      couponName: {
        name: 'Discount for women clothes 5%',
        subdes: 'Womenclothing5',
        type: 'discount',
      },
      usage: 76,
      status: 'expired',
      date: {
        from: 'Feb 14, 2020',
        to: 'Feb 20, 2020',
      },
    },
    {
      couponName: {
        name: 'New Year Mega Sale 20% Off',
        subdes: 'NY2021',
        type: 'discount',
      },
      usage: 23,
      status: 'active',
      date: {
        from: 'Dec 25, 2020',
        to: 'Jan 5, 2021',
      },
    },
    {
      couponName: {
        name: 'Free Shipping for Orders Above $50',
        subdes: 'FREESHIP50',
        type: 'shipping',
      },
      usage: 34,
      status: 'active',
      date: {
        from: 'Jan 10, 2021',
        to: 'Jan 20, 2021',
      },
    },
    {
      couponName: {
        name: 'Valentine Special 15% Off',
        subdes: 'LOVE15',
        type: 'discount',
      },
      usage: 46,
      status: 'expired',
      date: {
        from: 'Feb 1, 2021',
        to: 'Feb 14, 2021',
      },
    },
    {
      couponName: {
        name: 'Spring Fashion 25% Off',
        subdes: 'SPRING25',
        type: 'discount',
      },
      usage: 29,
      status: 'active',
      date: {
        from: 'Mar 10, 2021',
        to: 'Mar 25, 2021',
      },
    },
    {
      couponName: {
        name: 'Mother’s Day Free Shipping',
        subdes: 'MOMSHIP',
        type: 'shipping',
      },
      usage: 17,
      status: 'active',
      date: {
        from: 'May 1, 2021',
        to: 'May 10, 2021',
      },
    },
    {
      couponName: {
        name: 'Back to School 10% Discount',
        subdes: 'SCHOOL10',
        type: 'discount',
      },
      usage: 53,
      status: 'expired',
      date: {
        from: 'Aug 10, 2021',
        to: 'Aug 30, 2021',
      },
    },
    {
      couponName: {
        name: 'Black Friday 50% Off',
        subdes: 'BLACKFRI50',
        type: 'discount',
      },
      usage: 68,
      status: 'active',
      date: {
        from: 'Nov 25, 2021',
        to: 'Nov 30, 2021',
      },
    },
    {
      couponName: {
        name: 'Cyber Monday Free Shipping',
        subdes: 'CYBERSHIP',
        type: 'shipping',
      },
      usage: 40,
      status: 'active',
      date: {
        from: 'Nov 29, 2021',
        to: 'Dec 5, 2021',
      },
    },
    {
      couponName: {
        name: 'Winter Clearance 30% Off',
        subdes: 'WINTER30',
        type: 'discount',
      },
      usage: 22,
      status: 'expired',
      date: {
        from: 'Dec 15, 2021',
        to: 'Dec 31, 2021',
      },
    },
    {
      couponName: {
        name: 'Summer Free Shipping',
        subdes: 'HOTSHIP',
        type: 'shipping',
      },
      usage: 36,
      status: 'active',
      date: {
        from: 'Jun 10, 2021',
        to: 'Jun 30, 2021',
      },
    },
  ];

  return (
    <div style={{
      width: '100%',
      height: '100%',
      backgroundColor: '#F5F6FA',
      padding: 28
    }}>
      <Header />
      <div style={{
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 6,
        marginTop: 28,
        padding: 28
      }}>
        <FastFilter fastFilter={fastFilter}/>
        <Tools />
        <TableCoupons headers={headers} datas={datas}/>
      </div>
    </div> 
  )
}