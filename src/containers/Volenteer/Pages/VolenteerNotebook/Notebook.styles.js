import styled from "styled-components";

const NotebookWrapper=styled.div`
textarea {
	border: none;
	resize: none;
	background-color: #FEF0C0;
    width:100%
    
}

.overlay {
	width: 200px;
	height: 400px;
	background-color: red;
	
	top:20px;
	left:20px;
  }
  
  .originalDiv {
	width: 100px;
	height: 100px;
	background-color: blue;

  }

.maindiv {
	z-index: ;
	position:relative;
}
.note {

}

.pin {
	z-index: ;
	position:absolute;

	top:-40px
	

}
 .colsmall {

 }

textarea:focus {
	outline: none;
}
`

export {NotebookWrapper}