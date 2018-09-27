package com.nizamirn;

import android.view.KeyEvent; // <--- import
import com.github.kevinejohn.keyevent.KeyEventModule; // <--- import


import com.facebook.react.ReactActivity;





// // import android.content.Context;
// // import android.content.Intent;
// // import android.media.MediaPlayer;
// import android.os.Bundle;
// // import android.os.Message;
// // import android.os.RemoteException;
// import android.os.Vibrator;
// // import android.view.View;
// // import android.view.View.OnClickListener;
// // import android.widget.Button;
// // import android.widget.EditText;
// // import android.widget.TextView;
// import android.widget.Toast;

// // import com.smartdevice.aidl.ICallBack;
// import com.smartdevice.aidl.IZKCService;
// // import com.smartdevice.aidltestdemo.scan.ClientConfig;
// // import com.smartdevice.aidltestdemo.scan.ScanSetActivity;
// // import com.zkc.baseLibrary.MessageType;

// import android.content.Context;
// import android.os.Message;
// // import com.smartdevice.aidltestdemo.common.MessageCenter;
// import android.view.inputmethod.InputMethodManager;

// import android.os.Handler;
// import com.zkc.baseLibrary.ZkcManager;







public class MainActivity extends ReactActivity {
    

    // @Override
    // public void onCreate(@Nullable Bundle savedInstanceState, @Nullable PersistableBundle persistentState) {
    //     super.onCreate(savedInstanceState, persistentState);
        
    // }

    

    @Override  // <--- Add this method if you want to react to keyDown
      public boolean onKeyDown(int keyCode, KeyEvent event) {

        // A. Prevent multiple events on long button press
        //    In the default behavior multiple events are fired if a button
        //    is pressed for a while. You can prevent this behavior if you
        //    forward only the first event:
        //        if (event.getRepeatCount() == 0) {
        //            KeyEventModule.getInstance().onKeyDownEvent(keyCode, event);
        //        }
        //
        // B. If multiple Events shall be fired when the button is pressed
        //    for a while use this code:
        //        KeyEventModule.getInstance().onKeyDownEvent(keyCode, event);
        //
        // Using B.

        KeyEventModule.getInstance().onKeyDownEvent(keyCode, event);

        // There are 2 ways this can be done:
        //  1.  Override the default keyboard event behavior
        //    super.onKeyDown(keyCode, event);
        //    return true;

        //  2.  Keep default keyboard event behavior
        //    return super.onKeyDown(keyCode, event);

        // Using method #1 without blocking multiple
        super.onKeyDown(keyCode, event);
        return true;
      }

      @Override  // <--- Add this method if you want to react to keyUp
      public boolean onKeyUp(int keyCode, KeyEvent event) {
        KeyEventModule.getInstance().onKeyUpEvent(keyCode, event);

        // There are 2 ways this can be done:
        //  1.  Override the default keyboard event behavior
        //    super.onKeyUp(keyCode, event);
        //    return true;

        //  2.  Keep default keyboard event behavior
        //    return super.onKeyUp(keyCode, event);

        // Using method #1
        super.onKeyUp(keyCode, event);
        return true;
      }

      @Override
      public boolean onKeyMultiple(int keyCode, int repeatCount, KeyEvent event) {
          KeyEventModule.getInstance().onKeyMultipleEvent(keyCode, repeatCount, event);
          return super.onKeyMultiple(keyCode, repeatCount, event);
      }
    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */



    @Override
    protected String getMainComponentName() {
        return "nizamiRN";
    }



    // @Override
    // protected void onDestroy() {
    //   //销毁接口管理者对象
    //   ZkcManager.getInstance().onDestroy();
    //   super.onDestroy();
    // }
}
