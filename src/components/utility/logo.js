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
            <Link to="/manager-home">
              {smallLogo}
              {/* <i className={siteConfig.siteIcon} /> */}
            </Link>
          </h3>
        </div>
      ) : (
        <h3>
          <Link to="/manager-home">{mainIcon}</Link>
        </h3>
      )}
    </div>
  );
};
