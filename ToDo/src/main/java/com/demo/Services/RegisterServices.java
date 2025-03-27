package com.demo.Services;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import com.demo.Register;

@Service
public class RegisterServices {
	@Autowired
	JdbcTemplate j;
	
    public int insert(Register r) {
    	
        System.out.println("Hello");
        return j.update("INSERT INTO Registration (FirstName, LastName, Email, Address, Contact, Password) " +
                "VALUES (?, ?, ?, ?, ?, ?)", 
                r.getFirstName(), r.getLastName(), r.getEmail(), 
                r.getAddress(), r.getContact(), r.getPassword());
    	
    }
    
    public List<Register> display() {
        String sql = "SELECT * FROM Registration";
        
        return j.query(sql, new RowMapper<Register>() {
            @Override
            public Register mapRow(ResultSet rs, int rowNum) throws SQLException {
                Register register = new Register();
                register.setId(rs.getLong("UserId"));
                register.setEmail(rs.getString("Email"));
                register.setFirstName(rs.getString("FirstName"));
                register.setLastName(rs.getString("LastName"));
                register.setAddress(rs.getString("Address"));
                register.setContact(rs.getLong("Contact"));
                register.setPassword(rs.getString("Password"));
                return register;
            }
        }); 
    }

}
