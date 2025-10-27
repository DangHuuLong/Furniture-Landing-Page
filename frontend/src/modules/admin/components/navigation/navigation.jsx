import NavItem from "./nav_item";
import {
  Home, List, Tag, Folder, Users, BarChart3, Star, MessageSquare,
  HelpCircle, Ribbon, Inbox, Settings, User
} from "lucide-react";
import banner from "/src/modules/admin/components/navigation/images/Banner.png";

export default function Navigation() {
  return (
    <div
      style={{
        width: 250,
        alignSelf: 'stretch',
        backgroundColor: 'rgba(30,39,83,1)',
        boxSizing: 'border-box',
        paddingTop: '16px'
      }}
    >
      <NavItem Icon={Home} title="Dashboard" to="/dashboard" />
      <NavItem Icon={List} title="Orders" to="/orders" count={16} />
      <NavItem Icon={Tag} title="Products" to="/products" />
      <NavItem Icon={Folder} title="Categories" to="/admin/categories" />
      <NavItem Icon={Users} title="Customers" to="/admin/customers" />
      <NavItem Icon={BarChart3} title="Reports" to="/admin/reports" />
      <NavItem Icon={Star} title="Coupons" to="/admin/coupons" />
      <NavItem Icon={MessageSquare} title="Inbox" to="/admin/inbox" />
      
      <p style={{
        marginTop: 28,
        marginLeft: 32,
        marginBottom: 12,
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 400,
        fontSize: 12,
        color: 'white'
      }}>Other Information</p>
      <NavItem Icon={HelpCircle} title="Knowledge Base" to="/admin/knowledge-base" />
      <NavItem Icon={Ribbon} title="Product Updates" to="/admin/product-updates" />

      <p style={{
        marginTop: 28,
        marginLeft: 32,
        marginBottom: 12,
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 400,
        fontSize: 12,
        color: 'white'
      }}>Settings</p>
      <NavItem Icon={User} title="Personal Settings" to="/admin/settings/personal" />
      <NavItem Icon={Settings} title="Global Settings" to="/admin/settings/global" />

      <div style={{
        backgroundImage: `url(${banner})`,
        backgroundRepeat: "no-repeat",
        marginTop: 232,
        marginLeft: 22,
        marginRight: 10,
        marginBottom: 54,
        padding: 24
      }}>
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 700,
          fontSize: 16,
          color: 'white'
        }}>Grow Business</p>
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 400,
          fontSize: 14,
          color: 'white',
          textWrap: 'wrap',
          marginTop: 4,
          marginBottom: 12
        }}>Explore our marketing solutions</p>
        <div style={{
          width: 112,
          height: 36,
          borderRadius:4,
          backgroundColor: 'rgba(217, 228, 255,1)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 400,
            fontSize: 14,
            color: 'rgba(30,94,255,1)',
          }}>Read More</p>
        </div>
      </div>
    </div>
  )
}
