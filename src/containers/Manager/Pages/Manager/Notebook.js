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
      console.log(res.data)
      setBlogs(res.data)

    }).catch(err => {
      console.log(err)
    })
  }

  

  const saveBlog = () => {
    Blogs.saveBlog({content: newBlog, groupId: groupId}).then(res => {
      setGroupId("")
      setNewBlog("")
      
      Toast.fire("success", "saving blog successfully")

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
            <h4>Manager Interface</h4>{" "}
            <h4>
              {" "}
            
              <a  className="btn btn-primary badge badge-pill badge-primary" type="button" data-toggle="modal" data-target="#myModal">Add new note</a>
            </h4>
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
              Each note have to be realted to a group
            </h6>
          </div>
        </div>
        <div className="row p-md-4 mt-5 maindiv">
       
        {
          blogs.map(index => {
return <div className="col-md-3 mb-5 m-2 colsmall" style={{position:""}}>
           <textarea
             className="p-5 font-weight-bold note "
             rows="8"
             cols="10"
             value={index.content}
          
           ></textarea>
           <div className="pin" style={{left:"-20px"}} >{Pin}</div>
  </div>
          })
        }
 
        
        {
          indexes.map(index => {
return <div className="col-md-3 mb-5 m-2 colsmall" style={{position:""}}>
           <textarea
             className="p-5 font-weight-bold note "
             rows="8"
             cols="10"
             placeholder="Type to add a note..."
             onKeyDown={(e) => setNewBlog(e.target.value) }
             onBlur={saveBlog}
           ></textarea>
           <div className="pin" style={{left:"-20px"}} >{Pin}</div>
  </div>
          })
        }
 
       </div> 
      </div>

  
<div className="modal" id="myModal">
  <div className="modal-dialog">
    <div className="modal-content">

      <div className="modal-header">
        <h4 className="modal-title">Groups</h4>
        <button type="button" className="close" data-dismiss="modal">&times;</button>
      </div>

      <div className="modal-body">
      <form >
      <div class="custom-control custom-radio">
        <label>Group list</label>
      <select name="groups" className="custom-select" onChange={(e) => {
        if(e.target.value !== "") {
          setGroupId(e.target.value)  
        }

        setIndexes([...indexes, 1])

      }}>
            <option value="">Choose Group</option>
            {groups.map(group => {
              return <option value={group._id}>{group._id}</option>
            })}
        </select>
        </div>
        <div class="custom-control mt-3">
        <button type="button" class="btn btn-danger" data-dismiss="modal">set Group</button>
            
        </div>
      </form>
      </div>

    </div>
  </div>
</div>
    </NotebookWrapper>
  );
}

export default Notebook;
