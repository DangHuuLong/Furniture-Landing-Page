import { Settings, DollarSign } from "lucide-react"
import StatCard from "../../components/stat_card"
import BarStatCard from "../../components/bar_stat_card"
import OrdersChart from "./orders_chart"
import Last7DaysSales from "./last_7_days_sales"

export default function DashBorad() {
  return (
    <div style={{
      flex: 1,  
      padding: '20px 40px 36px 40px',
      backgroundColor: 'rgba(255, 246, 244)',
      boxSizing: 'border-box',
      alignSelf: 'stretch',
    }}>
      {/**Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 700,
          fontSize: 24,
          color: 'rgba(19,21,35,1)',
        }}>Dashboard</p>
        <div style={{
          height: 40,
          paddingInline: 25,
          borderRadius: 4,
          border: '1px solid rgba(215, 219, 236)',
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 4
        }}>
          <Settings size={24} color="rgba(30,94,255,1) "/>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 400,
            fontSize: 16,
            color: 'rgba(30,94,255,1)',
          }}>Manage</p>
        </div>
      </div>

      {/** */}
      <div style={{
        display: 'flex',
        marginTop: 24,
        gap: 16
      }}>
        <StatCard Icon={DollarSign} total={"$10.54"} title={"Total Revenue"} percent={22.45} increase={true}/>
        <StatCard Icon={DollarSign} total={"1,056"} title={"Orders"} percent={15.34} increase={true} />
        <BarStatCard total={5.420} title={"Unique Visits"} percent={10.24} increase={false} bars={[20, 30, 45, 50, 30, 40]} />
        <BarStatCard total={1.650} title={"New Users"} percent={15.34} increase={false} bars={[20, 40, 45, 30, 50, 35]} />
        <BarStatCard total={9.653} title={"Existing Users"} percent={22.45} increase={false} bars={[20, 30, 50, 40, 45, 35]} />
      </div>

      {/** */}
      <div style={{
        display: 'flex',
        marginTop: 24,
        gap: 30
      }}>
        <OrdersChart />
        <Last7DaysSales />
      </div>
    </div>
  )
}