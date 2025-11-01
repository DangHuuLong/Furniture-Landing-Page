import { useParams } from 'react-router-dom';
import FooterAddEditPage from "../../components/footer_add_edit_page";
import HeaderAddEditPage from "../../components/header_add_edit_page";

export default function CustomerInfo() {
  const { name } = useParams();

  return (
    <div
      style={{
        flex: 1,
        boxSizing: 'border-box',
        alignSelf: 'stretch',
        backgroundColor: '#F5F6FA',
        padding: '28px 40px 40px 40px',
        position: 'relative',
      }}
    >
      <HeaderAddEditPage to={'/customers'} name={`Customer: ${decodeURIComponent(name)}`} />
      {/* chỗ này bạn render info theo name */}
      <FooterAddEditPage />
    </div>
  );
}
