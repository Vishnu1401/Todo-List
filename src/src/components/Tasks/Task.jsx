import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Task() {
  const { email } = useParams();
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState(""); 
  const [editingTask, setEditingTask] = useState(null); 
  const [editedText, setEditedText] = useState(""); 
  const [userid,setUserid] =useState();

  const styles={
    main:{
      width:"70%", 
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      marginTop:"50px",
     
      margin:"50px auto"
    },
    input:{
        outline:"none",
        width:"300px",
        overflowX:"auto",
        height:"30px",
        border:"1px solid black",
        borderRadius:"10px",
        fontSize:"18px"
    },
    button:{
        background:"green",
        color:"white",

    },
    block:{
      display:"flex",
      gap:"30px",
      justifyContent:"center",
      alignItems:"center",
      marginBottom:"10px",

    },
    task:{
      width:"300px",
      fontSize:"18px",
      overflowY:"auto",
    },
    edit:{
      background:"blue",
      color:"white"
    },
    delete:{
      background:"red",
      color:"white"
    }

  }
  // Fetch tasks
  useEffect(() => {
    fetchuserid();
    fetchTasks();
    
  }, []);
 const fetchuserid=async()=>{
 try{
  const response=await axios.get(`http://localhost:8080/get-userid/${email}`);
  setUserid(response.data ? response.data : null);
 }catch (error) {
  console.error("Error fetching userid:", error);
  setUserid(null)
}
 }
  const fetchTasks = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/display-tasks/${email}`);
      setTasks(response.data.length > 0 ? response.data : []);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      setTasks([]);
    }
  };

  // Add new task
  const handleAddTask = async () => {
    //const userid=tasks.length > 0 ? tasks[0].userid : null
    if (!newTask.trim()) return;
    try {
      await axios.post("http://localhost:8080/add-task", {
        userid: userid,
        task: newTask
      });
      setNewTask("");
      fetchTasks();
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  // Delete a single task
  const handleDeleteTask = async (taskid) => {
    console.log(taskid) 
    try {
     const r= await axios.get(`http://localhost:8080/delete-tasks/${taskid}`);
      fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  // Edit a task
  const handleEditTask = (task) => {
    setEditingTask(task.taskid);
    setEditedText(task.task);
  };

  // Save edited task
  const handleSaveTask = async (taskid) => {
    try {
      await axios.put(`http://localhost:8080/update-tasks/${taskid}`, { task: editedText });
      console.log(editedText)
      setEditingTask(null);
      fetchTasks();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  // Clear all tasks
  const handleClearAll = async () => {
   const  userId=userid
    try {
      await axios.get(`http://localhost:8080/clear-all/${userId}`);
      setTasks([]);
    } catch (error) {
      console.error("Error clearing tasks:", error);
    }
  };

  return (
    <div className="task-container" style={styles.main}>
      {/* <div>{userid}</div> */}
      {/* Add Task Section */}
      <div style={styles.block} >
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
          style={styles.input}
        />
        <button onClick={handleAddTask} style={styles.button}>Create Task</button>
      </div>

      {/* Task List */}
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <div style={{ border:"1px solid black",padding:"20px",borderRadius:"10px",margin:"20px"}} >
          {tasks.map((task) => (
            <div key={task.taskid} style={styles.block} className="task-item">
              {editingTask === task.taskid ? (
                <>
                  <input
                    type="text"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                    style={styles.task}
                  />
                  <button style={styles.button} onClick={() => handleSaveTask(task.taskid)}>Save</button>
                </>
              ) : (
                <>
                  <span style={styles.task}>{task.task}</span>
                  <button style={styles.edit} onClick={() => handleEditTask(task)}>Edit</button>
                  <button style={styles.delete} onClick={() => handleDeleteTask(task.taskid)}>Delete</button>
                </>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Clear All Button */}
      {tasks.length > 0 && <button style={{marginBottom:"30px",background:"black",color:"red",fontSize:"18px"}} onClick={handleClearAll}>Clear All</button>}
    </div>
  );
}

export default Task;
