import styled from "styled-components";
import { palette } from "styled-theme";

const ViewWrapper = styled.div`
.undertext {
  color: #C5C7CD;
  font-weight: lighter;
  font-size: 12px;
}
 .rname {
   color: #252733;
   font-size: 600;
 }

 .align {
   display : flex;
   flex-direction: column;
 }

 .headCol {
   color: #9FA2B4
 }

 .pillbutton {
  background-color: #ddd;
  border: none;
  color: black;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 16px;
}

.badgecol {
  
 
}

  .btnSettings {
    border: 1px solid #2196f3;
    border-radius: 16px;
    margin-right: 5px;
    background-color: white;
    color: #2196f3;
  }

  .active {
    background-color: #2196f3 !important;
    color: white !important;
  }

  select {
    background: rgba(196, 196, 196, 0.15);
  }

  .btnOpt {
    border-radius: 3px;
    margin-right: 5px;
    background-color: #e0e0e0;
    color: ##757575;
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
    color: #000000;
  }

  .graphBlock {
    position: absolute;
    width: 460px;
    top: 16px;
    background: #ffffff;
    border-radius: 15px;
  }

  .font-25 {
    font-size: 25px;
  }

  .custom-text-right {
    text-align: right;

    @media (max-width: 991px) {
      text-align: left !important;
    }
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
  .c {
    color: #989696;
  }
  .heading {
    font-weight: 500;
    font-size: 24px;
    line-height: 21px;
    letter-spacing: 0.1px;
    color: #000000;
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
  .c {
    color: #989696;
  }
`;

export { ViewWrapper };
