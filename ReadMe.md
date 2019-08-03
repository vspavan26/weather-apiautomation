What does this test do(This test runs on Android only - But framework has been developed for both iPhone and Android)?

1. Installs the twitter lite app(if not installed already - app present within the folder at appium/src/test/java/com/mobile/appium/resources)
2. Verifies whether twitter logo is present on the landing page; asserts if not present
3. Clicks on login button
4. Verifies whether username element is present on the landing page; asserts if not present


Softwares needed to run this mobile auomation test:

1. Maven 3.5.4
2. Java 1.8.0_171
3. Appium 1.8.1
4. Android SDK

I have successfully run this test case with the above software and the versions mentioned above on Samsung S8 plus.


How to run this test

1. Open command prompt and start the appium server (Use 'appium' command to start the server)
2. Connect the android device to the laptop using a cable
3. Use "adb devices" to check the connectivity test
4. The device udid would be displayed from Step #3, please pick up this id and set it as deviceid in config.txt(appium/src/test/java/com/mobile/appium/resources/config.txt
5. Use command "mvn clean install" to run the test. 

Please reach out to me for any questions. Thanks.