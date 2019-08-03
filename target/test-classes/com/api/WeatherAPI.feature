Feature: Verify weather API

  @Smoke
  Scenario Outline: Get state code test on weather API
    Given user provides key <key> lat <lat> lon <lon> as parameters
    When user invokes state code service as GET
    Then verify status code is 200
    Then print the state code from response

    Examples: 
      | key                              | lat       | lon        |
      | a0f75544b9da4790a507dfb05e174f7e | 40.730610 | -73.935242 |

  @Smoke
  Scenario Outline: Get weather test on weather API
    Given user provides key <key> postcode <postcode> as parameters
    When user invokes weather service as GET
    Then verify status code is 200
    Then print the utc timestamp and weather from response

    Examples: 
      | key                              | postcode |
      | a0f75544b9da4790a507dfb05e174f7e |     2142 |
