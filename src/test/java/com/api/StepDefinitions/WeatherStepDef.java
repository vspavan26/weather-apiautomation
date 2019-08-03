package com.api.StepDefinitions;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.testng.Assert;
import com.jayway.restassured.RestAssured;
import com.jayway.restassured.response.Response;
import com.jayway.restassured.specification.RequestSpecification;

import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class WeatherStepDef {
	
	static RequestSpecification request;
	private Response response;
	private Scenario scenarioStepDef;
	String responseAsString;
	String timestamp_utc;
	String weather;
	
	 @Before
	  public void before(Scenario scenario) {
	    this.scenarioStepDef = scenario;
	  }
	
	@Given("^user provides key (.*) lat (.*) lon (.*) as parameters$")
    public void user_provides_key(String key, String latitude, String longitude)  {
		request = RestAssured.given().params("key",key).params("lat",latitude).params("lon",longitude);
    }
	
	@Given("^user provides key (.*) postcode (.*) as parameters$")
    public void user_provides_key(String key, String postcode)  {
		request = RestAssured.given().params("key",key).params("postal_code",postcode);
    }
	
	@When("^user invokes state code service as GET$")
    public void user_invokes_state_service()  {
		response = request.when().get("https://api.weatherbit.io/v2.0/current");
    }
	
	@When("^user invokes weather service as GET$")
    public void user_invokes_weather_service()  {
		response = request.when().get("https://api.weatherbit.io/v2.0/forecast/3hourly");
    }
	
	@Then("^verify status code is 200$")
    public void verify_status_code()  {
		response.then().statusCode(200);
		scenarioStepDef.write(response.asString());
    }
	
	@Then("^print the state code from response$")
    public void print_state_code() throws JSONException  {
		responseAsString = response.asString();
		scenarioStepDef.write("The state code from the response is " + getStateCodeFromResponse(responseAsString));
    }
	
	@Then("^print the utc timestamp and weather from response$")
    public void print_weather_timestamp() throws JSONException  {
		responseAsString = response.asString();
		getWeatherAndTimeStampFromResponse(responseAsString);
		scenarioStepDef.write("The weather from the response is " + weather);
		scenarioStepDef.write("The timestamp_utc from the response is " + timestamp_utc);
    }
	
	private String getStateCodeFromResponse(String responseString) throws JSONException {
		 final JSONObject obj = new JSONObject(responseString);
		    final JSONArray data = obj.getJSONArray("data");
		    return data.getJSONObject(0).getString("state_code");
	}
	
	private void getWeatherAndTimeStampFromResponse(String responseString) throws JSONException {
		 final JSONObject obj = new JSONObject(responseString);
		    final JSONArray data = obj.getJSONArray("data");
		     timestamp_utc = data.getJSONObject(0).getString("timestamp_utc");
		     weather = data.getJSONObject(0).getString("weather");
	}
	
	
}