import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  //   useNavigate,
} from "react-router-dom";

import { Layout, Menu, theme } from "antd";

import BackgroudImage from "../../../assets/images/background.jpg";
import SiteLogoImage from "../../../assets/images/site-logo.png";

const { Header, Content, Footer } = Layout;
const items = [
  {
    key: "",
    label: <NavLink to="/">Bosh sahifa</NavLink>,
  },
  {
    key: "/about",
    label: <NavLink to="/about">Haqida</NavLink>,
  },
  {
    key: "/contact",
    label: <NavLink to="/contact">{`Bog'lanish`}</NavLink>,
  },
  {
    key: "/login",
    label: <NavLink to="/login">Kirish</NavLink>,
  },
  {
    key: "/register",
    label: <NavLink to="/register">{`Ro'yhatdan o'tish`}</NavLink>,
  },
];

import "./style.scss";
const UserLayout = () => {
  //   const navigate = useNavigate();
  const location = useLocation();
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
        }}
      >
        <div className="demo-logo">
          <Link to="/" className="site__logo__link">
            <img src={SiteLogoImage} alt="Site Logo" />
          </Link>
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[location.pathname]}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
            justifyContent: "end",
          }}
        />
      </Header>
      <Content
        style={{
          backgroundImage: `url(${BackgroudImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
          padding: "0 48px",
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
