import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Layout } from "antd";
import useWindowSize from "../../library/hooks/useWindowSize";
import appActions from "../../redux/app/actions";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import siteConfig from "../../config/site.config";
import Sidebar from "../SideBar/Sidebar";
import Topbar from "../Topbar/Topbar";
import DashboardRoutes from "./DashboardRoutes";
// import TopbarUser from  "../TopbarUser"

import { DashboardContainer, DashboardGlobalStyles } from "./Dashboard.styles";

const { Content, Footer } = Layout;
const { toggleAll } = appActions;

const styles = {
  layout: { flexDirection: "row", overflowX: "hidden" },
  content: {
    padding: "15px 0 0",
    flexShrink: "0",
    background: "#f1f3f6",
    position: "relative",
    paddingLeft: "1.8%",
    paddingRight: "1.8%"
  },
  footer: {
    background: "#ffffff",
    textAlign: "center",
    borderTop: "1px solid #ededed",
  },
};

export default function Dashboard() {
  const dispatch = useDispatch();
  const appHeight = useSelector((state) => state.App.height);
  const { width, height } = useWindowSize();

  useEffect(() => {
    dispatch(toggleAll(width, height));
  }, [width, height, dispatch]);

  return (
    <DashboardContainer>
      <DashboardGlobalStyles />
      <Layout style={{ height: height }}>
      {/* <Topbar/> */}
      <Sidebar />
     
              <Layout style={styles.layout}>
         
          <Layout
            className="isoContentMainLayout"
            style={{
              height: appHeight,
            }}
          >
            <Content className="isomorphicContent" style={styles.content}>
              <DashboardRoutes />
            </Content>
            <Footer style={styles.footer}>{siteConfig.footerText}</Footer>
          </Layout>
        </Layout>
        {/* <ThemeSwitcher /> */}
      </Layout>
    </DashboardContainer>
  );
}
