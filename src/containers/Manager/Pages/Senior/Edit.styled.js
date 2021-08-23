import styled from "styled-components";

const EditWrapper=styled.div`
.bgColForm:focus {
    background: white!important;
  }





  .round {
    width: 80%;
    
    border-radius: 15px;
    border: 1px #000 solid;
    
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
}

.corner {
    position: absolute;
    top: 3px;
    left: 5px;
    height: 20px;
    width: 20px;
    z-index: 10;
    border-radius: 10px;
    border: none;
    background:; /* Set the bg image here. with "no-repeat" */
}

.search {
    position: relative;
    width: 190px;
    height: 30px;
    
}
`;

export {EditWrapper}