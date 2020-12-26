package com.music;

import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.zoontek.rnbootsplash.RNBootSplash;

public class MainActivity extends ReactActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    RNBootSplash.init(R.drawable.background_splash, MainActivity.this);
  }

  @Override
  protected String getMainComponentName() {
    return "music";
  }
}
