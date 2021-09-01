import React, {useEffect, useState} from "react";
import TopbarUser from "../../../Topbar/TopbarUser";
import { NotebookWrapper } from "./Notebook.styles";
import { Pin } from "../../../../assets/Icons";
import { Groups } from "../../../../service/Groups";
import {Blogs} from "../../../../service/Blogs";
import { Toast } from "../../../../service/Toast";
function Notebook() {


  const [groups, setGroups] = useState([]);
  const [ groupId, setGroupId] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [indexes, setIndexes] = React.useState([]);
  const [newBlog, setNewBlog] = useState("");

  useEffect(() => {
    getGroups()
    getBlogs() 
  }, [])


  const getGroups = () => {
    Groups.getGroups().then(res => {
      setGroups(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  const getBlogs = () => {
    Blogs.getBlogs().then(res => {
      console.log(res.data);
      setBlogs(res.data)
    }).catch(err => {
      console.log(err)
    })
  }

  

  const saveBlog = () => {
    console.log(newBlog)
    Blogs.saveBlog({content: newBlog, groupId: groupId}).then(res => {
      setGroupId("")
      setNewBlog("")
      getBlogs()
      Toast.fire("success" , "Blog Saved Successfuly");
    })
    .catch(err => {
      Toast.fire("error", "Error in saving blog")
    })

  }


  return (
    <NotebookWrapper>
      <div className="container-fluid">
        <div className=" clearfix mt-0 mb-2">
          <span className=" float-left col-6">
            {" "}
            <h4>Blogs</h4>{" "}
           
          </span>
          <span className="text-right">
            {" "}
            <TopbarUser />
          </span>
        </div>
        <div className="">
          <div>
            <h6>
              Here you can see all notes realted to a group, group leaders can
              watch but are not allowed to edit.<br></br>
              Only Manager can edit or add notes.<br></br>
              Each note have to be related to a group.
            </h6>
          </div>
        </div>
        <div className="row p-md-4 mt-5 maindiv">
        {
          blogs &&
          blogs.map(blog => {
return <div className="col-md-3 mb-5 m-2 colsmall" style={{position:""}}>
           <textarea
             className="p-5 font-weight-bold note "
             rows="8"
             cols="10"
             value={blog.content}
             disabled
           ></textarea>
           <div className="pin" style={{left:"-20px"}} >{Pin}</div>
  </div>
          })
        }
       </div> 
      </div>
    </NotebookWrapper>
  );
}

export default Notebook;
