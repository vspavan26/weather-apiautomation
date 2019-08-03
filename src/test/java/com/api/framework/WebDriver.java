//package com.api.framework;
//
//import io.appium.java_client.AppiumDriver;
//import io.appium.java_client.android.AndroidDriver;
//import io.appium.java_client.android.AndroidElement;
//import io.appium.java_client.ios.IOSDriver;
//import io.appium.java_client.remote.AndroidMobileCapabilityType;
//import io.appium.java_client.remote.MobileCapabilityType;
//import org.openqa.selenium.remote.DesiredCapabilities;
//import java.io.FileReader;
//import java.net.URL;
//import java.util.concurrent.TimeUnit;
//import org.json.simple.JSONObject;
//import org.json.simple.parser.JSONParser;
//
//public class WebDriver
//{
//	String deviceID = null;
//    String os = null;
//    String deviceName = null;
//    String packageName = null;
//    String activityName = null;
//    AppiumDriver<AndroidElement> driver = null;
//
//	public WebDriver(String configFile)
//	{
//		JSONParser parser = new JSONParser();		 
//        try {
// 
//            Object obj = parser.parse(new FileReader(configFile)); 
//            JSONObject jsonObject = (JSONObject) obj; 
//           
//            deviceID = (String) jsonObject.get("deviceID");
//            os = (String) jsonObject.get("os");
//            deviceName = (String) jsonObject.get("deviceName");
//            packageName = (String) jsonObject.get("packageName");
//            activityName = (String) jsonObject.get("activityName");
//        }catch(Exception e) {
//        	System.out.println(e.getMessage());
//        }	
//	}
//	
//	@SuppressWarnings({ "unchecked", "rawtypes" })
//	public AppiumDriver createDriver()
//	{
//		try
//		{
//			DesiredCapabilities capabilities = new DesiredCapabilities();
//			capabilities.setCapability(MobileCapabilityType.DEVICE_NAME, "deviceName");
//			capabilities.setCapability(MobileCapabilityType.UDID, deviceID);
//			capabilities.setCapability(MobileCapabilityType.NEW_COMMAND_TIMEOUT, 60 * 30);
//			capabilities.setCapability(MobileCapabilityType.NO_RESET, true);
//			capabilities.setCapability(MobileCapabilityType.FULL_RESET, false);
//			capabilities.setCapability(MobileCapabilityType.APP, new java.io.File( "." ).getCanonicalPath() + "\\src\\test\\java\\com\\mobile\\appium\\resources\\twitter.apk");        
//			capabilities.setCapability(AndroidMobileCapabilityType.APP_PACKAGE, packageName);
//			capabilities.setCapability(AndroidMobileCapabilityType.APP_ACTIVITY, activityName);
//			String port = "4723";
//			URL serverAddress = new URL("http://localhost:" + port + "/wd/hub");
//			if (os.toLowerCase().equals("android"))					
//					driver = new AndroidDriver(serverAddress , capabilities);			
//			else if (os.toLowerCase().equals("ios"))				
//				driver = new IOSDriver(serverAddress , capabilities);	
//			driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
//			
//		}catch(Exception e) {
//			System.out.println(e.getMessage());
//			e.printStackTrace();
//		}
//		return driver;
//	}
//	
//	@SuppressWarnings("rawtypes")
//	public void killDriver()
//	{
//		((AndroidDriver)driver).closeApp();
//		((AndroidDriver)driver).quit(); 
//	}
//}