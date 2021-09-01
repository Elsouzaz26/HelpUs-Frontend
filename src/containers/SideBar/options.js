import React from "react";
import {
  BellOutlined,
  FileTextOutlined,
  PieChartOutlined,
  SearchOutlined,
  SettingOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Groups,stat,Volenteer,Notebook,Bell,Senior,Search, distributionIcon } from "../../assets/Icons";

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
    key: "assignedgroups/view",
    label: "Groups",
    leftIcon: Groups ,
  },

  {
    key: "blog",
    label: "Articles notebook",
    leftIcon: Notebook,
  }, 
  {
    key: "chat",
    label: "Chat with Manager",
    leftIcon: Bell,
  },
  
];

export default options;
