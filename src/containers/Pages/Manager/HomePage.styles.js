import styled from "styled-components";
import { palette } from "styled-theme";
import WithDirection from "../../../library/helpers/rtl";


const HomepageWrapper = styled.div`
@media screen and (min-width: 768px) {
  .img1 {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 30%;
    margin-top:-90px
  }
}

card:hover {
  background:red
}
   
`;

export default WithDirection(HomepageWrapper);
