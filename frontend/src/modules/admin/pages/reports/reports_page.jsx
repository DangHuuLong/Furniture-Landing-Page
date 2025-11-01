import CustomerGrowth from "./customer_growth";
import FullWidthReports from "./full_width_reports";
import ProgressCard from "./progress_card";
import Header from "./header";
import LineChartCard from "./line_chart_card";
import Demographics from "./demographics";
import VisitsByDevice from "./visits_by_device";
import OnlineSessions from "./online_sessions";

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
        <div style={{
          display: 'flex',
          gap: 30
        }}>
          <div style={{
            display: 'flex',
            gap: 30,
            flex: 1
          }}>
            <ProgressCard title={'Sales Goal'} percent={75} color={'#FFC700'} datas={[
              { 
                title: 'Sold for',
                value: '$15.000'
              },
              {
                title: 'Month goal',
                value: '$20.000'
              },
              {
                title: 'Left',
                value: '$5.000'
              }]}/>

            <ProgressCard title={'Conversion Rate'} percent={25} color={'#1FD286'} datas={[
              {
                title: 'Cart',
                value: '35%'
              },
              {
                title: 'Checkout',
                value: '29%'
              },
              {
                title: 'Purchase',
                value: '25%'
              }]} />
          </div>
          <LineChartCard />
        </div>
        <div style={{
          display: 'flex',
          gap: 30
        }}>
          <Demographics />
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            gap: 30
          }}>
            <VisitsByDevice />
            <OnlineSessions />
          </div>
        </div>
      </div>
    </div>
  )
}