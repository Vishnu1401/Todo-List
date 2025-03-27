package com.demo.Controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.Register;
import com.demo.Services.RegisterServices;
import com.demo.Services.TaskServices;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class RegisterController {
	@Autowired
	RegisterServices rs;

   @PostMapping("/register")
   public Map register(@RequestBody Register e) {
	   int result=rs.insert(e);
	   Map<String,String> m=new HashMap<>();
	   if(result>0) {
		 m.put("success","Inserted Successfully");
	   }
	   else {
		   m.put("e","Insertion Failed");
	   }
	   return m;
   }
//   public ResponseEntity<Map<String, String>> register(@RequestBody Register e) {
//       int result = rs.insert(e);
//       Map<String, String> response = new HashMap<>();
//       System.out.println("Insert");
//       if (result > 0) {
//           response.put("status", "success");
//           response.put("message", "Inserted Successfully");
//           return ResponseEntity.status(HttpStatus.CREATED).body(response);
//       } else {
//           response.put("status", "failure");
//           response.put("message", "Insertion Failed");
//           return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
//       }
//   }
   
   @GetMapping("/fetch")
   public List display() {
	   return rs.display();
   }

}
