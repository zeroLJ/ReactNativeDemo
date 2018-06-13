package com.awesomeproject.view;

import android.support.annotation.Nullable;
import android.widget.TextView;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

public class BEditTextManager extends SimpleViewManager<BEditText> {
  @Override
  public String getName() {
    return "BEditText";
  }

  @Override
  protected BEditText createViewInstance(ThemedReactContext reactContext) {
    BEditText editText = new BEditText(reactContext);
    return editText;
  }

  @ReactProp(name = "text")
  public void setText(BEditText view, @Nullable String text) {
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