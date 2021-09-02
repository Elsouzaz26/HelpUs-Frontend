import styled from "styled-components";

const StatWrapper=styled.div`
.labels {
    font-weight: normal;
font-size: 16px;
color: #373A3C!important
}

.left-side {
    width: 400px
}

.right-side {
    width: calc(100%  - 400px)
}

.col-50 {
    display: inline-grid;
    width: 50%
}

.scrollbar-hidden::-webkit-scrollbar {
    display: none;
  }

  .scrollbar-hidden {
    -ms-overflow-style: none;
    scrollbar-width: none; 
  }
`

export {StatWrapper}