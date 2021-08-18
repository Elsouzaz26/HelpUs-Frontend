import React from "react";
import {
  BellOutlined,
  FileTextOutlined,
  PieChartOutlined,
  SearchOutlined,
  SettingOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Groups } from "../../assets/Icons";

const subMenuExample = {
  key: "Manage",
  label: "Manage",
  leftIcon: <SettingOutlined />,
  children: [
    {
      key: "customer",
      label: "Customer",
    },

    {
      key: "machines",
      label: "Machines",
    },
    {
      key: "topic",
      label: "Topic",
    },
    {
      key: "parameter",
      label: "Parameter",
    },
    {
      key: "message",
      label: "Message",
    },
    {
      key: "broker",
      label: "Broker",
    },
    {
      key: "payments",
      label: "Payments",
    },
    {
      key: "invoices",
      label: "Invoices",
    },
    {
      key: "loginprocess",
      label: "Login Process",
    },
  ],
};


const options = [
  {
    key: "",
    label: "Stats",
    leftIcon: <PieChartOutlined />,
  },
  {
    key: "",
    label: "Groups",
    leftIcon: Groups ,
  },
  {
    key: "",
    label: "Volenteers",
    leftIcon: <UnorderedListOutlined />,
  },
  {
    key: "",
    label: "Seniors",
    leftIcon: <UnorderedListOutlined />,
  },
  {
    key: "",
    label: "Articles notebook",
    leftIcon: <FileTextOutlined />,
  },
  {
    key: "",
    label: "Maps view",
    leftIcon: <SearchOutlined />,
  },
  {
    key: "",
    label: "Chat with manager",
    leftIcon:<BellOutlined/>,
  },
  
];

export default options;
