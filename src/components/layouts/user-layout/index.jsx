import {
  Link,
  // NavLink,
  Outlet,
  // useLocation,
  //   useNavigate,
} from "react-router-dom";

import { Layout,  theme } from "antd";

import BackgroudImage from "../../../assets/images/background.jpg";
import SiteLogoImage from "../../../assets/images/site-logo.png";

const { Header, Content, Footer } = Layout;


import "./style.scss";
const UserLayout = () => {
  const {
    token: { borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 100
        }}
      >
        <div className="demo-logo">
          <Link to="/" className="site__logo__link">
            <img src={SiteLogoImage} alt="Site Logo" />
          </Link>
        </div>
        {/* <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[location.pathname]}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
            justifyContent: "end",
          }}
        /> */}
      </Header>
      <Content
        style={{
          backgroundImage: `url(${BackgroudImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
          padding: "0 0",
        }}
      >
        <div
          style={{
            minHeight: "83vh",
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
          backgroundColor: "#001529",
          color: "aliceblue",
        }}
      >
        Learning center ©{new Date().getFullYear()} Maked by Juniors Team
      </Footer>
    </Layout>
  );
};

export default UserLayout;
