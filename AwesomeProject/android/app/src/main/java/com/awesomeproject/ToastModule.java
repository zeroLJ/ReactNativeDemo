package com.awesomeproject;

import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.HashMap;
import java.util.Map;
import java.util.Timer;
import java.util.TimerTask;

/**
 * Created by UBP on 2018/6/11.
 */

public class ToastModule extends ReactContextBaseJavaModule {
    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";

    public ToastModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
        constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
        return constants;
    }

    @ReactMethod
    public void show(String message, int duration) {
        Toast.makeText(getReactApplicationContext(), message, duration).show();
    }

    @ReactMethod
    public void show(
            String message,
            int duration,
            Callback errorCallback,
            final Callback successCallback) {
        Toast.makeText(getReactApplicationContext(), message, duration).show();
        if (duration == Toast.LENGTH_SHORT){
            new Timer().schedule(new TimerTask() {
                @Override
                public void run() {
                    successCallback.invoke("short");
                }
            },3000);
//            successCallback.invoke("short");
        }else {
            errorCallback.invoke("long");
        }
    }

    @Override
    public String getName() {
        return "ToastExample";
    }
}
