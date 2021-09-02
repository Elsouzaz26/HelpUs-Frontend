import React from "react";
import { Link } from "react-router-dom";
import siteConfig from "../../config/site.config";
import { mainIcon,smallLogo} from "../../assets/Icons"
import {userSelector} from '../../redux/user';
import { useSelector } from "react-redux";

export default ({ collapsed }) => {
  const user = useSelector(userSelector);
  console.log(user);
  return (
    <div className="isoLogoWrapper">
      {collapsed ? (
        <div>
          <h3>
            <Link to={user.user.role === 'manager' ? '/manager-home' : '/volenteer-home'}>
              {smallLogo}
              {/* <i className={siteConfig.siteIcon} /> */}
            </Link>
          </h3>
        </div>
      ) : (
        <h3>
          <Link to={user.user.role === 'manager' ? '/manager-home' : '/volenteer-home'}>{mainIcon}</Link>
        </h3>
      )}
    </div>
  );
};
