package com.demo.Services;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.Task;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class TaskController {
	
	
	@Autowired
	TaskServices ts;
	
	
	@PostMapping("/add-task")
	public Map addTask(@RequestBody Task t) {
		int result= ts.addTask(t);
		Map<String, String > m=new HashMap<>();
		if(result>0) {
			 m.put("1","Inserted task");
		}
		else {
			 m.put("2","Not inserted");
		}
		return m;
		
	}
	   @GetMapping("/display-tasks/{Email}")
	   public List displayTasks(@PathVariable String Email) {
		   return ts.displayTasks(Email);
	   }

       @PutMapping("/update-tasks/{taskId}")
       public int updateTask(@RequestBody Task t, @PathVariable int taskId) {
    	   t.setTaskid(taskId);
    	   return ts.updateTask(t);
       }
       
       @GetMapping("/delete-tasks/{taskId}")
       public int deleteTasks(@PathVariable int taskId) {
    	  
    	   return ts.deleteTask(taskId);
       }
       
       @GetMapping("/clear-all/{userId}")
       public int clearAll(@PathVariable int userId) {
    	   return ts.clearAll(userId);
       } 
       
       @GetMapping("get-userid/{email}")
       public int getUserId(@PathVariable String email) {
           return ts.getUserID(email);
       }
       
}
