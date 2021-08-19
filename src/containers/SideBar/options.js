import React from "react";
import {
  BellOutlined,
  FileTextOutlined,
  PieChartOutlined,
  SearchOutlined,
  SettingOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Groups,stat,Volenteer,Notebook,Bell,Senior,Search } from "../../assets/Icons";

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
    leftIcon: stat,
  },
  {
    key: "",
    label: "Groups",
    leftIcon: Groups ,
  },
  {
    key: "",
    label: "Volenteers",
    leftIcon: Volenteer,
  },
  {
    key: "",
    label: "Seniors",
    leftIcon: Senior,
  },
  {
    key: "",
    label: "Articles notebook",
    leftIcon: Notebook,
  },
  {
    key: "",
    label: "Maps view",
    leftIcon: Search,
  },
  {
    key: "",
    label: "Chat with manager",
    leftIcon: Bell,
  },
  
];

export default options;
