package com.awesomeproject.view;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.util.Log;
import android.view.View;

/**
 * 圆形组件组件基础类
 */
public class CircleView extends View {
    private final String TAG = "CircleView";
    private Paint mPaint; // 画笔
    public CircleView(Context context) {
        super(context);
        mPaint = new Paint();
    }
    @Override
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);
        canvas.drawCircle(100, 100, 100, mPaint); // 画一个半径为100px的圆
        Log.d(TAG, "绘图");
    }
}