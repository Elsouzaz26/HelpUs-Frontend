import styled from "styled-components";
import bImg from "../../assets/images/newvector.png";
const UserWrapper = styled.div`
  .pd {
    padding-left: 25px;
    padding-right: 25px;
    border-radius: 40px;
  }
  .float-right1 {
    margin-left: 40px;
    font-size: 20px;
    margin-top: 5px;
  }
  .fs {
    color: #ed5151;
  }
  .font-25 {
    font-size: 25px;
  }
  .inputT {
    border: none;
    background-color: rgba(196, 196, 196, 0.2);
  }
  .bg-custom-light {
    background: #e3f2fd;
    border-radius: 3px;
  }
  .bradius {
    border-radius: 25px;
    border: none;
  }
  .bg1 {
    background-color: rgba(196, 196, 196, 0.5);
  }
  label {
    color: #000000;
  }
  select {
    background-image: url(${bImg});
    background-repeat: no-repeat;
    background-size: 16px;
    background-position: 95% 50%;
    background-color: #c4c4c426;
    cursor: pointer;
  }
`;

export default UserWrapper;
