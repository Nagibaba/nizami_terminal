package com.nizamirn;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.github.kevinejohn.keyevent.KeyEventPackage;
//import com.reactlibrary.RNPdaScanLibraryPackage;
//import com.github.kevinejohn.keyevent.KeyEventPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;
import android.util.Log;






public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new KeyEventPackage(),
            // new RNPdaScanLibraryPackage(),
          new CustomToastPackage()
//          new KeyEventPackage()
          // new RNTerminalLibraryPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
    
  }

  

}
