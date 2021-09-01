import React from "react";
import { DeploymentUnitOutlined } from "@ant-design/icons";
import  {LetterIcon} from "../assets/Icons"

export default {
  siteName: "Help us Elsa",
  siteIcon: <LetterIcon />,
  footerText: `HelpUs @ ${new Date().getFullYear()} Created Help us, Inc`,
  enableAnimatedRoute: false,
  // Remote server:
  // apiUrl: "https://helpus-elsa.herokuapp.com",
  // socketUrl: "https://helpus-elsa.herokuapp.com",
  // Local Dev
  apiUrl: "http://localhost:8000",
  socketUrl: "http://localhost:8000",
};
