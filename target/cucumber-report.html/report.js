$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("WeatherAPI.feature");
formatter.feature({
  "line": 1,
  "name": "Verify weather API",
  "description": "",
  "id": "verify-weather-api",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Get state code test on weather API",
  "description": "",
  "id": "verify-weather-api;get-state-code-test-on-weather-api",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user provides key \u003ckey\u003e lat \u003clat\u003e lon \u003clon\u003e as parameters",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user invokes state code service as GET",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "verify status code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "print the state code from response",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "verify-weather-api;get-state-code-test-on-weather-api;",
  "rows": [
    {
      "cells": [
        "key",
        "lat",
        "lon"
      ],
      "line": 11,
      "id": "verify-weather-api;get-state-code-test-on-weather-api;;1"
    },
    {
      "cells": [
        "a0f75544b9da4790a507dfb05e174f7e",
        "40.730610",
        "-73.935242"
      ],
      "line": 12,
      "id": "verify-weather-api;get-state-code-test-on-weather-api;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 713010700,
  "status": "passed"
});
formatter.before({
  "duration": 119800,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Get state code test on weather API",
  "description": "",
  "id": "verify-weather-api;get-state-code-test-on-weather-api;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user provides key a0f75544b9da4790a507dfb05e174f7e lat 40.730610 lon -73.935242 as parameters",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user invokes state code service as GET",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "verify status code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "print the state code from response",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "a0f75544b9da4790a507dfb05e174f7e",
      "offset": 18
    },
    {
      "val": "40.730610",
      "offset": 55
    },
    {
      "val": "-73.935242",
      "offset": 69
    }
  ],
  "location": "WeatherStepDef.user_provides_key(String,String,String)"
});
formatter.result({
  "duration": 704321899,
  "status": "passed"
});
formatter.match({
  "location": "WeatherStepDef.user_invokes_state_service()"
});
formatter.result({
  "duration": 4229639700,
  "status": "passed"
});
formatter.match({
  "location": "WeatherStepDef.verify_status_code()"
});
formatter.write("{\"data\":[{\"rh\":77,\"pod\":\"d\",\"lon\":-73.94,\"pres\":1011,\"timezone\":\"America\\/New_York\",\"ob_time\":\"2019-08-03 12:08\",\"country_code\":\"US\",\"clouds\":75,\"ts\":1564834080,\"solar_rad\":228.6,\"state_code\":\"NY\",\"city_name\":\"Long Island City\",\"wind_spd\":1.34,\"last_ob_time\":\"2019-08-03T12:08:00\",\"wind_cdir_full\":\"south-southwest\",\"wind_cdir\":\"SSW\",\"slp\":1013,\"vis\":5,\"h_angle\":-56.3,\"sunset\":\"00:09\",\"dni\":678.67,\"dewpt\":20.2,\"snow\":0,\"uv\":2.90646,\"precip\":0,\"wind_dir\":199,\"sunrise\":\"09:54\",\"ghi\":326.9,\"dhi\":78.85,\"aqi\":50,\"lat\":40.73,\"weather\":{\"icon\":\"c02d\",\"code\":\"802\",\"description\":\"Scattered clouds\"},\"datetime\":\"2019-08-03:12\",\"temp\":24.4,\"station\":\"D9152\",\"elev_angle\":22.03,\"app_temp\":25}],\"count\":1}\n");
formatter.result({
  "duration": 131587000,
  "status": "passed"
});
formatter.match({
  "location": "WeatherStepDef.print_state_code()"
});
formatter.write("The state code from the response is NY");
formatter.result({
  "duration": 12480901,
  "status": "passed"
});
formatter.after({
  "duration": 30600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Get weather test on weather API",
  "description": "",
  "id": "verify-weather-api;get-weather-test-on-weather-api",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "user provides key \u003ckey\u003e postcode \u003cpostcode\u003e as parameters",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "user invokes weather service as GET",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "verify status code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "print the utc timestamp and weather from response",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "verify-weather-api;get-weather-test-on-weather-api;",
  "rows": [
    {
      "cells": [
        "key",
        "postcode"
      ],
      "line": 22,
      "id": "verify-weather-api;get-weather-test-on-weather-api;;1"
    },
    {
      "cells": [
        "a0f75544b9da4790a507dfb05e174f7e",
        "2142"
      ],
      "line": 23,
      "id": "verify-weather-api;get-weather-test-on-weather-api;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 51901,
  "status": "passed"
});
formatter.before({
  "duration": 47300,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Get weather test on weather API",
  "description": "",
  "id": "verify-weather-api;get-weather-test-on-weather-api;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "user provides key a0f75544b9da4790a507dfb05e174f7e postcode 2142 as parameters",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "user invokes weather service as GET",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "verify status code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "print the utc timestamp and weather from response",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "a0f75544b9da4790a507dfb05e174f7e",
      "offset": 18
    },
    {
      "val": "2142",
      "offset": 60
    }
  ],
  "location": "WeatherStepDef.user_provides_key(String,String)"
});
formatter.result({
  "duration": 2388801,
  "status": "passed"
});
formatter.match({
  "location": "WeatherStepDef.user_invokes_weather_service()"
});
formatter.result({
  "duration": 1567187900,
  "status": "passed"
});
formatter.match({
  "location": "WeatherStepDef.verify_status_code()"
});
formatter.result({
  "duration": 23794800,
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c200\u003e doesn\u0027t match actual status code \u003c403\u003e.\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:80)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:74)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:60)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:235)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:247)\r\n\tat com.jayway.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:598)\r\n\tat com.jayway.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat com.jayway.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:760)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:210)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:166)\r\n\tat com.jayway.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:120)\r\n\tat com.jayway.restassured.specification.ResponseSpecification$statusCode$0.callCurrent(Unknown Source)\r\n\tat com.jayway.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:128)\r\n\tat com.jayway.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:117)\r\n\tat com.api.StepDefinitions.WeatherStepDef.verify_status_code(WeatherStepDef.java:53)\r\n\tat ✽.Then verify status code is 200(WeatherAPI.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "WeatherStepDef.print_weather_timestamp()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 24101,
  "status": "passed"
});
});