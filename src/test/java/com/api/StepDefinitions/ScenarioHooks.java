package com.api.StepDefinitions;

import com.jayway.restassured.RestAssured;
import cucumber.api.java.After;
import cucumber.api.java.Before;
 
public class ScenarioHooks {
	
	@Before
    public void beforeScenario(){
		        String port = System.getProperty("server.port");
		        if (port == null) {
		            RestAssured.port = Integer.valueOf(8080);
		        }
		        else{
		            RestAssured.port = Integer.valueOf(port);
		        }

		        String baseHost = System.getProperty("server.host");
		        if(baseHost==null){
		            baseHost = "https://api.weatherbit.io/v2.0/current";
		        }
		        RestAssured.baseURI = baseHost;

    }	
	
	@After
    public void afterScenario(){
    }
}