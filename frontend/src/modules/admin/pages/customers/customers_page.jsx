import HeaderSubPage from "../../components/header_sub_page"
import { ChevronDown, Search, PenLine, Trash } from 'lucide-react';
import TableCustomers from "./table_customers";
import EmptyStates from "../../components/empty_states";

export default function CustomersPage(){
  const fastFilter = ['All Customers', 'New Customers', 'From Europe', 'Returning Customers']
  const headerTable = ['Name', 'Location', 'Orders', 'Spent']
  // const dataTable = [
  //   [{ name: "John Doe" }, "USA", 32, 1250.5],
  //   [{ name: "Emma Watson" }, "UK", 21, 980.75],
  //   [{ name: "Minh Tran" }, "Vietnam", 18, 745.0],
  //   [{ name: "Liam Smith" }, "Canada", 27, 1630.25],
  //   [{ name: "Sophia Lee" }, "Singapore", 19, 1120.0],
  //   [{ name: "David Kim" }, "Korea", 15, 890.0],
  //   [{ name: "Ava Brown" }, "Australia", 25, 1455.2],
  //   [{ name: "Noah Wilson" }, "USA", 12, 670.4],
  //   [{ name: "Olivia Garcia" }, "Spain", 28, 990.8],
  //   [{ name: "Ethan Johnson" }, "Canada", 23, 1280.5],
  //   [{ name: "Isabella Martinez" }, "Mexico", 17, 1145.0],
  //   [{ name: "Lucas Nguyen" }, "Vietnam", 30, 705.3],
  //   [{ name: "Mia Chen" }, "China", 16, 1320.7],
  //   [{ name: "Mason Patel" }, "India", 19, 890.6],
  //   [{ name: "Amelia Scott" }, "UK", 14, 1010.9],
  //   [{ name: "James Anderson" }, "USA", 26, 1560.3],
  //   [{ name: "Charlotte Thomas" }, "France", 13, 1240.4],
  //   [{ name: "Henry Rodriguez" }, "Spain", 11, 820.5],
  //   [{ name: "Ella Nguyen" }, "Vietnam", 22, 970.9],
  //   [{ name: "Alexander Clark" }, "USA", 29, 1680.2],
  //   [{ name: "Emily Lewis" }, "Canada", 17, 990.3],
  //   [{ name: "Benjamin Walker" }, "Australia", 24, 730.8],
  //   [{ name: "Harper Young" }, "UK", 28, 1105.1],
  //   [{ name: "Daniel Hall" }, "Ireland", 15, 875.0],
  //   [{ name: "Grace Allen" }, "USA", 27, 1045.5],
  //   [{ name: "William Adams" }, "Germany", 20, 1500.0],
  //   [{ name: "Chloe Wright" }, "France", 18, 955.6],
  //   [{ name: "Jack Harris" }, "USA", 31, 1220.3],
  //   [{ name: "Scarlett Baker" }, "Australia", 25, 765.4],
  //   [{ name: "Evelyn Rivera" }, "Mexico", 19, 1190.9],
  // ];

  const dataTable = []
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column', 
      flex: 1,
      boxSizing: 'border-box',
      alignSelf: 'stretch',
      backgroundColor: '#F5F6FA',
      padding: '28px 40px 40px 40px',
      position: 'relative'
    }}>
      {dataTable.length ? 
        <>
          <HeaderSubPage headerTitle={'Customers'} addButtonTitle={'Customer'} to={'/customers/addcustomer'} exportButton={true} />
          <div style={{
            width: '100%',
            backgroundColor: 'white',
            borderRadius: 6,
            marginTop: 28,
            padding: 28
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 24,
              marginBottom: 36
            }}>
              {fastFilter.map((option, i) => {
                return <p key={i} style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 400,
                  fontSize: 16,
                  color: '#5A607F',
                }}>
                  {option}
                </p>
              })}
            </div>
            {/**Tool */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <div style={{
                display: 'flex'
              }}>
                {/**Filter */}
                <div style={{ position: "relative", width: 180 }}>
                  <input
                    type="text"
                    placeholder="Filter"
                    aria-label="Filter"
                    style={{
                      height: 40,
                      width: "100%",
                      backgroundColor: "white",
                      border: "1px solid #D9E1EC",
                      borderRadius: 6,
                      paddingLeft: 16,
                      paddingRight: 36,
                      fontFamily: '"Poppins", sans-serif',
                      fontWeight: 400,
                      fontSize: 16,
                      color: "#A1A7C4",
                      outline: "none",
                    }}
                  />
                  <ChevronDown
                    size={20}
                    color="#7E84A3"
                    style={{
                      position: "absolute",
                      right: 10,
                      top: "50%",
                      transform: "translateY(-50%)",
                      pointerEvents: "none",
                    }}
                  />
                </div>

                {/**Search */}
                <div style={{ position: "relative", width: 360, marginLeft: 12 }}>
                  <input
                    type="text"
                    placeholder="Search..."
                    aria-label="Search..."
                    style={{
                      height: 40,
                      width: "100%",
                      backgroundColor: "white",
                      border: "1px solid #D9E1EC",
                      borderRadius: 6,
                      paddingLeft: 36,
                      paddingRight: 16,
                      fontFamily: '"Poppins", sans-serif',
                      fontWeight: 400,
                      fontSize: 16,
                      color: "#A1A7C4",
                      outline: "none",
                    }}
                  />
                  <Search
                    size={20}
                    color="#7E84A3"
                    style={{
                      position: "absolute",
                      left: 10,
                      top: "50%",
                      transform: "translateY(-50%)",
                      pointerEvents: "none",
                    }}
                  />
                </div>
              </div>

              <div style={{
                display: 'flex',
                gap: 12
              }}>
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: 4,
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #D7DBEC',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <PenLine size={24} color='#1E5EFF' />
                </div>
                <button style={{
                  width: 40,
                  height: 40,
                  borderRadius: 4,
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #D7DBEC',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
                  onClick={() => setDeleteItems(true)}>
                  <Trash size={24} color='#1E5EFF' />
                </button>
              </div>
            </div>
            {/**Table */}
            <TableCustomers headers={headerTable} datas={dataTable} />
          </div>
        </> : <EmptyStates namePage={'Customers'} 
                imagePath={'customers.png'}
                title={'Add First Customer'}
                content={'Having a customer list helps to know your audience better. Manage your customers in one place and target your audinece better.'}
                btn={'Add Customer'}/>}
    </div>
  )
}