package com.awesomeproject;

import com.awesomeproject.module.ToastModule;
import com.awesomeproject.view.CircleManager;
import com.awesomeproject.view.BEditTextManager;
import com.awesomeproject.view.TextViewManager;
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class AnExampleReactPackage implements ReactPackage {


//  @Override
//  public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
//    return Collections.emptyList();
//  }

    //注册View
    @Override
    public List<ViewManager> createViewManagers(
            ReactApplicationContext reactContext) {
        return Arrays.<ViewManager>asList(
                new TextViewManager(),
                new CircleManager(),
                new BEditTextManager()
        );
    }

  //注册模块
  @Override
  public List<NativeModule> createNativeModules(
          ReactApplicationContext reactContext) {
    List<NativeModule> modules = new ArrayList<>();

    modules.add(new ToastModule(reactContext));

    return modules;
  }


}