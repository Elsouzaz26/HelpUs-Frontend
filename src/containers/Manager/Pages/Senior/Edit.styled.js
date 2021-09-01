import styled from "styled-components";

const EditWrapper=styled.div`
.bgColForm:focus {
    background: white!important;
  }

  .labels {
    font-weight: 25px;
font-size: 14px;
color: #373A3C!important
}
.autoInput {
  width:100%;
  height:2.3rem;
  border: 1px solid rgba(204, 204, 204, 1);
  border-radius: 2rem!important
  padding:10px!important
  background:transparent!important
}

.autoInput:focus {
  outline: none;
  border: 1px solid rgba(204, 204, 204, 1);
  background: white!important;
  box-shadow: 0 0 0 3px #a3ccfa;
}



  .round {
    width: 80%;
    
    border-radius: 15px;
    border: 0px white solid;
    
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
    background:; 
}

.search {
    position: relative;
    width: 190px;
    height: 30px;
    border:none!important
    
}
`;

export {EditWrapper}