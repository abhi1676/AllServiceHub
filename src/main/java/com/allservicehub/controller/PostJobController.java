package com.allservicehub.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.allservicehub.model.PostJob;
import com.allservicehub.service.PostJobService;

@RestController
@CrossOrigin("*")
public class PostJobController {
	
	@Autowired
	private PostJobService postJobService;
	
	@PostMapping(value= {"/postjob"})
	public String addjob(@RequestBody PostJob postJob) {
		postJobService.add(postJob);
		return "success";
	}
	
	@GetMapping(value= {"/postjob"})
	public List<PostJob> getJob(){
		return postJobService.getAll();
	}

	@DeleteMapping(value= {"/postjob/{id}"})
	public String jobDel(@PathVariable int id) {
		postJobService.removeById(id);
		return "success";
	}
	
}
