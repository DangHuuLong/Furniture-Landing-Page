import CustomerGrowth from "./customer_growth";
import FullWidthReports from "./full_width_reports";
import Header from "./header";

export default function ReportsPage(){
  return (
    <div style={{
      width: '100%',
      height: '100%',
      backgroundColor: '#F5F6FA',
      padding: 28
    }}>
      <Header />
      <div style={{
        marginTop: 28,
        display: 'flex',
        flexDirection: 'column',
        gap: 30
      }}>
        <CustomerGrowth />
        <FullWidthReports />
      </div>
    </div>
  )
}