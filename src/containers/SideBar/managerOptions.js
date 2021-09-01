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

const managerOptions = [
  {
    key: "stats",
    label: "Stats",
    leftIcon: stat,
  },
  {
    key: "distribution/view",
    label: "Distribution",
    leftIcon: distributionIcon ,
  },
  {
    key: "groups/view",
    label: "Groups",
    leftIcon: Groups ,
  },
  {
    key: "volunteer/view",
    label: "Volenteers",
    leftIcon: Volenteer,
  },
  {
    key: "senior/view",
    label: "Seniors",
    leftIcon: Senior,
  },
  {
    key: "blog",
    label: "Articles notebook",
    leftIcon: Notebook,
  }, 
  {
    key: "chat",
    label: "Chat",
    leftIcon: Bell,
  },
  
];

export default managerOptions;
