package com.awesomeproject.view;

import android.support.annotation.Nullable;
import android.widget.TextView;

import com.facebook.drawee.backends.pipeline.Fresco;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.views.image.ImageResizeMode;
import com.facebook.react.views.image.ReactImageView;

public class TextViewManager extends SimpleViewManager<TextView> {
  @Override
  public String getName() {
    return "TextView";
  }

  @Override
  protected TextView createViewInstance(ThemedReactContext reactContext) {
    return new TextView(reactContext);
  }

  @ReactProp(name = "text")
  public void setText(TextView view, @Nullable String text) {
    view.setText(text);
  }

//  @ReactProp(name = "borderRadius", defaultFloat = 0f)
//  public void setBorderRadius(ReactImageView view, float borderRadius) {
//    view.setBorderRadius(borderRadius);
//  }
//
//  @ReactProp(name = ViewProps.RESIZE_MODE)
//  public void setResizeMode(ReactImageView view, @Nullable String resizeMode) {
//    view.setScaleType(ImageResizeMode.toScaleType(resizeMode));
//  }
}