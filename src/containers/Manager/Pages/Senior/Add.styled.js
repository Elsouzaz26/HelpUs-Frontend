import styled from "styled-components";

const AddWrapper=styled.div`
.bgColForm:focus {
    background: white!important;
  }

.autoInput {
    width:100%;
    height:2.3rem;
    border: 1px solid rgba(204, 204, 204, 1);
    border-radius: .16rem!important
    padding:10px!important
}

.autoInput:focus {
    outline: none;
    border: 1px solid rgba(204, 204, 204, 1);
   
    box-shadow: 0 0 0 3px #a3ccfa;
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

.labels {
    font-weight: normal;
font-size: 16px;
color: #373A3C!important
}
`;

export {AddWrapper}