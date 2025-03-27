package com.demo.Controllers;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.LoginService;
import com.demo.Register;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class LoginController {
	
	@Autowired
	LoginService ls;
   @PostMapping("/login")
   public Map login(@RequestBody Register r) {
	   int r1=ls.login(r.getEmail());
	   Map<String, String> m=new HashMap<>();
	   if(r1>0) {
		   m.put("success","Login Successful");
	   }
	   else {
		   m.put("failed","Try Later");
	   }
	   return m;
   }
}
