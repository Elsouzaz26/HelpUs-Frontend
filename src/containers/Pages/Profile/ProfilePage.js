import React, { useEffect } from "react";
import "bootstrap4-toggle";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "../../SideBar/Sidebar";
import Topbar from "../../Topbar/Topbar";
import useWindowSize from "../../../library/hooks/useWindowSize";
import { Layout } from "antd";
import appActions from "../../../redux/app/actions";
import { ProfileGlobalStyle, ProfileContainer } from "./ProfilePage.styles";
const { Content } = Layout;
const { toggleAll } = appActions;
const styles = {
  layout: { flexDirection: "row", overflowX: "hidden" },
  content: {
    padding: "70px 0 0",
    flexShrink: "0",
    background: "#f1f3f6",
    position: "relative",
  },
};
const ProfilePage = () => {
  const dispatch = useDispatch();
  const appHeight = useSelector((state) => state.App.height);
  const { width, height } = useWindowSize();

  useEffect(() => {
    dispatch(toggleAll(width, height));
  }, [width, height, dispatch]);

  return (
    <ProfileContainer>
      <ProfileGlobalStyle />
      <Layout style={{ height: height }}>
        <Topbar />
        <Layout style={styles.layout}>
          <Sidebar />
          <Content>
            <div className="container ml-10 mt-10 w-95">
              <div className="content">
                <h3 className="mt-2">
                  <b>Profile</b>
                </h3>
                <form class="md-mt-2">
                  <label className="fs">
                    <b>Full Name</b> <span className="star">*</span>
                  </label>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=" Rohit"
                      required
                    ></input>
                  </div>

                  <label className="fs">
                    <b>Username</b> <span className="star">*</span>
                  </label>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Rohit@98169"
                    ></input>
                  </div>

                  <label className="fs">
                    <b>Language</b> <span className="star">*</span>
                  </label>
                  <select className="form-control">
                    <option>English</option>
                    <option>Hindi</option>
                    <option>Erangel</option>
                    <option>chinese</option>
                    <option>Punjabi</option>
                    <option>Telgu</option>
                  </select>

                  <label className="fs">
                    <b>Email</b> <span className="star">*</span>
                  </label>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="example@gmail.com"
                    ></input>
                  </div>

                  <label className="fs">
                    <b>Password</b> <span className="star">*</span>
                  </label>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Password"
                    ></input>
                  </div>
                  <div>
                    <a href="/changepassword">
                      <b className="change">Change Password</b>
                    </a>
                  </div>
                  <label className="swicth fs">
                    <b>Viewer Type</b>
                  </label>
                  {/* <input
                    id="chkToggle1"
                    type="checkbox"
                    data-toggle="toggle"
                    checked
                  ></input> */}
                  <br></br>
                  <div>
                    <button type="submit" className="btn btn-primary w-5">
                      Save
                    </button>
                    <a
                      type="button"
                      href="/#"
                      className="btn btn-secondary ml-3 w-5"
                    >
                      Cancel
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </ProfileContainer>
  );
};

export default ProfilePage;
