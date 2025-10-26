import { ChevronDown } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
export default function OrdersChart({data}){
  return (
    <div style={{
      height: 470,
      borderRadius: 6,
      backgroundColor: 'white',
      flex: 4,
      padding: 28
    }}>
      {/**Row 1 */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 700,
          fontSize: 16,
          color: 'rgba(19,21,35,1)',
        }}>Orders Over Time</p>

        <div style={{
          display: 'flex',
          gap: 4
        }}>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 400,
            fontSize: 14,
            color: '#5A607F',
          }}>Last 12 Hours</p>
          <ChevronDown size={24} color='#7E84A3'/>
        </div>
      </div>

      {/**Row 2 */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-end',
        marginTop: 24
      }}>
        <div>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 700,
            fontSize: 20,
            color: 'rgba(19,21,35,1)',
          }}>645</p>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 400,
            fontSize: 14,
            color: '#5A607F',
          }}>Orders on May 22</p>
        </div>
        <div style={{marginLeft: 40}}>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 700,
            fontSize: 20,
            color: 'rgba(19,21,35,1)',
          }}>472</p>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 400,
            fontSize: 14,
            color: '#5A607F',
          }}>Orders on May 21</p>
        </div>
        <div style={{
          marginLeft: 'auto',
          display: 'flex',
          alignItems: 'flex-end',
          gap: 8
        }}>
          <div style={{
            width: 12,
            height: 12,
            borderRadius: 2,
            backgroundColor: '#D9E1EC'
          }}></div>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 400,
            fontSize: 14,
            color: '#5A607F',
          }}>May 21</p>
        </div>
        <div style={{
          marginLeft: 22,
          display: 'flex',
          alignItems: 'flex-end',
          gap: 8
        }}>
          <div style={{
            width: 12,
            height: 12,
            borderRadius: 2,
            backgroundColor: '#1E5EFF'
          }}></div>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 400,
            fontSize: 14,
            color: '#5A607F',
          }}>May 22</p>
        </div>
      </div>

      {/**Row 3 */}
      <div style={{
        marginTop: 28,
        position: "relative",
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 28,
          paddingTop: 14
        }}>
          {/**Dash line */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20
          }}>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 12,
              color: '#A1A7C4',
            }}>50</p>
            <div style={{
              width: '100%',
              borderTop: '1px dashed #E6E9F4',
            }}
            ></div>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20
          }}>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 12,
              color: '#A1A7C4',
            }}>40</p>
            <div style={{
              width: '100%',
              borderTop: '1px dashed #E6E9F4',
            }}
            ></div>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20
          }}>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 12,
              color: '#A1A7C4',
            }}>30</p>
            <div style={{
              width: '100%',
              borderTop: '1px dashed #E6E9F4',
            }}
            ></div>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20
          }}>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 12,
              color: '#A1A7C4',
            }}>20</p>
            <div style={{
              width: '100%',
              borderTop: '1px dashed #E6E9F4',
            }}
            ></div>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20
          }}>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 12,
              color: '#A1A7C4',
            }}>10</p>
            <div style={{
              width: '100%',
              borderTop: '1px dashed #E6E9F4',
            }}
            ></div>
          </div>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          marginTop: 22
        }}>
          {Array.from({ length: 12 }, (_, i) => (
            <p key={i} style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 12,
              color: '#A1A7C4',
            }}>{i + 1}am</p>
          ))}
        </div>
      </div>
    </div>
  )
}