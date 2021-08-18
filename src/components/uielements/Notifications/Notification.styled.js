import styled from "styled-components";
import bImg from "../../../assets/images/vector.png";
const NotificationPageWrapper = styled.div`
  .btnSettings {
    border: 1px solid #2196f3;
    border-radius: 36px;
    margin-right: 5px;
    background-color: white;
    color: #2196f3;
  }
  .active {
    background-color: #2196f3 !important;
    color: white !important;
  }
  .card {
    width: 72rem;
    border-radius: 8px !important;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
    padding: 0px !important;
  }
  .fs {
    color: #989696;
  }
  select {
    background-image: url(${bImg});
    background-repeat: no-repeat;
    background-size: 16px;
    background-position: 95% 50%;
    background-color: #c4c4c426;
    cursor: pointer;
  }

  .dataTable {
    overflow: auto;
  }
  .wei2 {
    background-color: rgba(33, 150, 243, 0.1);
    color: #2196f3;
    width: 82px;
    border-radius: 10px;
    padding-left: 10px;
  }
  .wei {
    font-weight: normal;
    color: #000000;
  }
  .btn-outline-primary {
    border-radius: 50px;
    padding-left: 23px;
    padding-right: 23px;
  }
  .wei1 {
    font-weight: bolder;
    color: #6d6b6b;
  }
  .btnOpt {
    border-radius: 3px;
    margin-right: 5px;
    background-color: #e0e0e0;
    color: ##757575;
    margin-top: 25px;
    width: 100px;
  }

  .btnSettings:hover {
    background-color: #2196f3;
    color: white;
  }

  .bgColorStyle {
    background-color: white;
  }

  .btnOpt:hover {
    background-color: #2196f3;
    color: white;
  }
  .theadStyle {
    background-color: rgba(196, 196, 196, 0.15);
  }
  .heading {
    font-weight: 500;
    font-size: 24px;
    line-height: 21px;
    letter-spacing: 0.1px;
  }
  .h6 {
    font-color: #000000 !important;
    font-family: "Roboto";
    font-weight: 400px !important;
  }
  .ant-tag {
    border: 0px;
    border-radius: 25px;
  }

  .graphBlock {
    position: absolute;
    width: 460px;
    height: 400px;
    top: 16px;
    background: #ffffff;
    border-radius: 15px;
  }

  .font-25 {
    font-size: 25px;
  }

  .bg-custom-light {
    background: #e3f2fd;
    border-radius: 3px;
  }

  .nav {
    display: inline-flex;
  }
  .nav-tabs .nav-item {
    margin-bottom: -1px;
    background: #e9e9e9;
    border-radius: 5px;
    margin-left: 10px;
  }
  .nav-pills .nav-link {
    color: #989696;
  }
  .nav-link.active {
    color: white;
  }
`;

export default NotificationPageWrapper;
