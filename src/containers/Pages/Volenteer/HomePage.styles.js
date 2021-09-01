import styled from "styled-components";
import { palette } from "styled-theme";
import WithDirection from "../../../library/helpers/rtl";


const VolenteerHomepageWrapper = styled.div`
@media screen and (min-width: 768px) {
  .img1 {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 25%;
    margin-top:-15px
  }
}
.img2 {
  margin-left: auto;
  margin-right: auto;
  width: 30%;
}

.btnStyle {
  border: 1px solid grey;
  width: 100%;
  margin-top: 5px;
}


card:hover {
  background:red
}

.imgDIV {
  margin: auto;
  width: 70%;
  border: 1px solid green;
  padding: 2px;
}
   
`;

export default WithDirection(VolenteerHomepageWrapper);
