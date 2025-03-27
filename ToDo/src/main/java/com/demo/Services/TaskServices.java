package com.demo.Services;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import com.demo.Task;

@Service
public class TaskServices {
    @Autowired
    private JdbcTemplate jj;
   
    public List<Task> displayTasks(String email) {
        String sql = "SELECT * FROM Task WHERE UserId = (select UserId from Registration where Email=?)";
    
        return jj.query(sql, new Object[]{email}, new RowMapper<Task>() {
            @Override
            public Task mapRow(ResultSet rs, int rowNum) throws SQLException {
                Task task = new Task();
                task.setTaskid(rs.getInt("taskid"));  
                task.setTask(rs.getString("task"));
                task.setUserid(rs.getInt("UserId"));
                return task;
            }
        }); 
    }

    public int addTask(Task t) {
        return jj.update("INSERT INTO Task(UserId, task) VALUES (?, ?)", 
                t.getUserid(), t.getTask());
    }
    
    public int updateTask(Task t) {
    	return jj.update("update Task set Task=? where taskId=?",t.getTask(),t.getTaskid());
  
    }

	public int deleteTask(int t) {
		return jj.update("delete from Task where taskId=?",t);

	}

	public int clearAll(int userId) {
		// TODO Auto-generated method stub
		return jj.update("delete from Task where UserId=?", userId);
	}

	public int getUserID(String email) {
	    String sql = "SELECT userId FROM Registration WHERE Email=?";
	    return jj.queryForObject(sql, new Object[]{email}, Integer.class);
	
	}
}
