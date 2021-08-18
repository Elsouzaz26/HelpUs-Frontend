import React from "react";
import { Link } from "react-router-dom";
import siteConfig from "../../config/site.config";
import { mainIcon,smallLogo} from "../../assets/Icons"

export default ({ collapsed }) => {
  return (
    <div className="isoLogoWrapper">
      {collapsed ? (
        <div>
          <h3>
            <Link to="/dashboard">
              {smallLogo}
              {/* <i className={siteConfig.siteIcon} /> */}
            </Link>
          </h3>
        </div>
      ) : (
        <h3>
          <Link to="/dashboard">{mainIcon}</Link>
        </h3>
      )}
    </div>
  );
};
