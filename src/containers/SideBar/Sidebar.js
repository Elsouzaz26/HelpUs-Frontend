import React from "react";
import { useDispatch, useSelector } from "react-redux";
import clone from "clone";
import { Layout } from "antd";
import options from "./options";
import managerOptions from "./managerOptions";
import Scrollbars from "../../components/utility/customScrollBar";
import Menu from "../../components/uielements/menu";
import appActions from "../../redux/app/actions";
import Logo from "../../components/utility/logo";
import SidebarWrapper from "./Sidebar.styles";
import SidebarMenu from "./SidebarMenu";
import Sitelogo from "../../assets/images/HelpUs.jpg"
import { userSelector } from "../../redux/user";
const { Sider } = Layout;

const {
  toggleOpenDrawer,
  changeOpenKeys,
  changeCurrent,
  toggleCollapsed,
} = appActions;

export default function Sidebar() {
  const dispatch = useDispatch();
  const {
    view,
    openKeys,
    collapsed,
    openDrawer,
    current,
    height,
  } = useSelector((state) => state.App);

  const {user} = useSelector(userSelector)

  console.log(user)
  const customizedTheme = useSelector(
    (state) => state.ThemeSwitcher.sidebarTheme
  );

  function handleClick(e) {
    dispatch(changeCurrent([e.key]));
    if (view === "MobileView") {
      setTimeout(() => {
        dispatch(toggleCollapsed());
        // dispatch(toggleOpenDrawer());
      }, 100);
    }
  }
  function onOpenChange(newOpenKeys) {
    const latestOpenKey = newOpenKeys.find(
      (key) => !(openKeys.indexOf(key) > -1)
    );
    const latestCloseKey = openKeys.find(
      (key) => !(newOpenKeys.indexOf(key) > -1)
    );
    let nextOpenKeys = [];
    if (latestOpenKey) {
      nextOpenKeys = getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }
    if (latestCloseKey) {
      nextOpenKeys = getAncestorKeys(latestCloseKey);
    }
    dispatch(changeOpenKeys(nextOpenKeys));
  }
  const getAncestorKeys = (key) => {
    const map = {
      sub3: ["sub2"],
    };
    return map[key] || [];
  };

  const isCollapsed = clone(collapsed) && !clone(openDrawer);
  const mode = isCollapsed === true ? "vertical" : "inline";

 

  const onMouseEnter = (event) => {
    if (collapsed && openDrawer === false) {
      dispatch(toggleOpenDrawer());
    }
    return;
  };
 
  const onMouseLeave = () => {
    if (collapsed && openDrawer === true) {
      dispatch(toggleOpenDrawer());
    }
    return;
  };
  const styling = {
    backgroundColor: customizedTheme.backgroundColor,
  };
  const submenuStyle = {
    backgroundColor: "rgba(0,0,0,0.3)",
    color: customizedTheme.textColor,
  };
  const submenuColor = {
    color: customizedTheme.textColor,
  };
  return (
    <SidebarWrapper>
      <Sider
        trigger={null}
        collapsible={true}
        collapsed={isCollapsed}
        width={240}
        className="isomorphicSidebar"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={styling}
        
      >
        <Logo collapsed={isCollapsed}  />
       
        <Scrollbars style={{ height: height - 70 }}>
          <Menu
            onClick={handleClick}
            theme="dark"
            className="isoDashboardMenu"
            mode={mode}
            openKeys={isCollapsed ? [] : openKeys}
            selectedKeys={current}
            onOpenChange={onOpenChange}
          >

            {
              user.role == "manager" ? 
              managerOptions.map((singleOption) => (
                <SidebarMenu
                  key={singleOption.key}
                  submenuStyle={submenuStyle}
                  submenuColor={submenuColor}
                  singleOption={singleOption}
                />
              ))
              : 
              options.map((singleOption) => (
                <SidebarMenu
                  key={singleOption.key}
                  submenuStyle={submenuStyle}
                  submenuColor={submenuColor}
                  singleOption={singleOption}
                />
              ))
            }

            
          </Menu>
        </Scrollbars>
      </Sider>
    </SidebarWrapper>
  );
}
