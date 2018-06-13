package com.awesomeproject.view;

import android.content.Context;
import android.graphics.Rect;
import android.widget.EditText;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.RCTEventEmitter;

/**
 * Created by UBP on 2018/6/12.
 */

public class BEditText extends EditText {
    public BEditText(Context context) {
        super(context);
    }

    @Override
    protected void onTextChanged(CharSequence text, int start, int lengthBefore, int lengthAfter) {
        super.onTextChanged(text, start, lengthBefore, lengthAfter);
        WritableMap event = Arguments.createMap();
        event.putInt("flag", 1); //用于区分动作类型
        event.putString("text", text.toString());//返回给js的参数
        ReactContext reactContext = (ReactContext)getContext();
        reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
                getId(),
                "topChange",
                event);
    }

    @Override
    protected void onFocusChanged(boolean focused, int direction, Rect previouslyFocusedRect) {
        super.onFocusChanged(focused, direction, previouslyFocusedRect);
        WritableMap event = Arguments.createMap();
        event.putInt("flag", 2); //用于区分动作类型
        event.putBoolean("focused",focused);//返回给js的参数
        ReactContext reactContext = (ReactContext)getContext();
        reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
                getId(),
                "topChange",
                event);
    }
}
