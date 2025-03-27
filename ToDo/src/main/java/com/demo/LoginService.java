package com.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

@Service
public class LoginService {
	@Autowired
      JdbcTemplate j;
	
	public int login(String r1) {
		 String sql = "SELECT COUNT(*) FROM Registration WHERE email = ?";
		 int count = j.queryForObject(sql, Integer.class, r1);  
		 return count;
	}
}
