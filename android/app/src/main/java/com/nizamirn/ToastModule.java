package com.nizamirn;

import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.LifecycleEventListener;

import java.util.Map;
import java.util.HashMap;

import com.smartdevice.aidl.IZKCService;
import com.smartdevice.aidl.ICallBack;
import com.nizamirn.common.MessageType;
import com.nizamirn.common.MessageCenter;
import com.nizamirn.scan.ClientConfig;
import com.nizamirn.util.ExecutorFactory;


import android.app.Activity;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.ServiceConnection;
import android.content.BroadcastReceiver;
import android.os.Bundle;
import android.os.IBinder;
import android.os.RemoteException;
import android.os.Message;
import android.os.Handler;
import android.os.Looper;
import android.os.AsyncTask;
import android.os.Vibrator;
import android.util.Log;
import android.view.inputmethod.InputMethodManager;
import android.text.TextUtils;
// import com.zkc.baseLibrary.ZkcManager;

import android.media.MediaPlayer;





public class ToastModule extends ReactContextBaseJavaModule implements LifecycleEventListener {

  private static final String DURATION_SHORT_KEY = "SHORT";
  private static final String DURATION_LONG_KEY = "LONG";
  // private Handler mhanlder;
  // public IZKCService mIzkcService = null;

    public static IZKCService mIzkcService;
    public static int module_flag = 4;
    public boolean bindSuccessFlag = false;
    public String text = "";
    private String firstCodeStr = "";
    private Handler mhanlder;
    int send = 0,receiver=0;
    public static int DEVICE_MODEL = 0;
    private boolean runFlag = true;
    RemoteControlReceiver screenStatusReceiver = null;
    Vibrator vibrator;
    private boolean beginToReceiverData = true;
    MediaPlayer player;

    public Callback cb = null;


    ICallBack.Stub mCallback = new ICallBack.Stub() {

        @Override
        public void onReturnValue(byte[] buffer, int size)
                throws RemoteException {
            Log.e("client", "Callback Started");
            if(beginToReceiverData){
                beginToReceiverData = false;
                return;
            }
            String codeStr = new String(buffer, 0, size);
            if(ClientConfig.getBoolean(ClientConfig.SCAN_REPEAT)){
                if(firstCodeStr.equals(codeStr)){
                    vibrator.vibrate(100);
                }
            }
            if(ClientConfig.getBoolean(ClientConfig.APPEND_RINGTONE)){
                player.start();
            }
            if(ClientConfig.getBoolean(ClientConfig.APPEND_VIBRATE)){
                vibrator.vibrate(100);
            }
            Log.e("client", codeStr);
            if(cb != null) {
                cb.invoke(codeStr);
                cb = null;
            }
//            player.start();
//            firstCodeStr = codeStr;
//            //发送到外部接收
//            Intent intentBroadcast = new Intent();
//            intentBroadcast.setAction("com.zkc.scancode");
//            intentBroadcast.putExtra("code", codeStr);
//            getReactApplicationContext().sendBroadcast(intentBroadcast);
//            text += codeStr;
//            int startIndex = text.indexOf("{");
//            int endIndex = text.indexOf("}");
//            String keyStr = "";
//            if (startIndex > -1 && endIndex > -1 && endIndex - startIndex < 5) {
//                keyStr = text.substring(startIndex + 1, endIndex);
//                text = text.substring(0, text.indexOf("{"));
//            }

//      if (!keyStr.equals("")) {
//        text += "\r\n";
//      }

//            if(DEVICE_MODEL!=3504||DEVICE_MODEL!=3503){
//                text += "\r\n";
//            }
//
//            if(!TextUtils.isEmpty(text)){
////                mHandler.sendEmptyMessage(1);
//
//            }

        }
    };

//    Handler mHandler = new Handler(new Handler.Callback() {
//
//        @Override
//        public boolean handleMessage(Message msg) {
//            Log.e("client", "Handler started");
//            switch (msg.what) {
//                case 0:
//                    Log.e("client", "scan set started");
//                    initScanSet();
//                    // btn_scan.setEnabled(true);
//                    break;
//                case 1:
//                    Log.e("client", text);
//                    break;
//                case 2:
//                    // tv_send.setText("S:"+ ++send);
//                    break;
//                default:
//                    Log.e("client", "Default handler");
//                    break;
//            }
//            return false;
//        }
//    });


    private ServiceConnection mServiceConn = new ServiceConnection() {
        @Override
        public void onServiceDisconnected(ComponentName name) {
            Log.e("client", "onServiceDisconnected");
            mIzkcService = null;
            bindSuccessFlag = false;
        }

        @Override
        public void onServiceConnected(ComponentName name, IBinder service) {
            Log.e("client", "onServiceConnected1");
            mIzkcService = IZKCService.Stub.asInterface(service);

            if(mIzkcService!=null){
                try {
                    DEVICE_MODEL = mIzkcService.getDeviceModel();
                    mIzkcService.setModuleFlag(module_flag);
                    if(module_flag==3){
                        mIzkcService.openBackLight(1);
                    }
                    Log.e("client", mIzkcService.getDeviceModel()+"");
                } catch (RemoteException e) {
                    e.printStackTrace();
                }
                bindSuccessFlag = true;
                Log.e("client", "sended message on service");

//                mHandler.obtainMessage(0).sendToTarget();
//                mHandler.sendEmptyMessage(0);
            }
        }
    };

    public void bindServices() {
//    Intent intent = new Intent("com.zkc.aidl.pc701");
        Intent intent = new Intent("com.zkc.aidl.all");
        //设置当前应用的包名
        intent.setPackage("com.smartdevice.aidl");
        Log.e("client", "Binding service...");
        this.getReactApplicationContext().bindService(intent, mServiceConn, Context.BIND_AUTO_CREATE);
    }
    public void unbindService() {
        this.getReactApplicationContext().unbindService(mServiceConn);
    }

    void initScanSet(){
        if(mIzkcService!=null){
            try {
                mIzkcService.openScan(true);
                mIzkcService.dataAppendEnter(ClientConfig.getBoolean(ClientConfig.DATA_APPEND_ENTER));
                Log.e("client", "AAA Init scan set");
               
            } catch (RemoteException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
        }
    }





    public ToastModule(ReactApplicationContext reactContext) {
        super(reactContext);

        reactContext.addLifecycleEventListener(this);
    
      



        Log.e("client", "MainApplication started");
        // MessageCenter.getInstance().addHandler(mHandler);
        player = MediaPlayer.create(this.getReactApplicationContext(), R.raw.scan);
//      player.start();
        vibrator = (Vibrator)this.getReactApplicationContext().getSystemService(Context.VIBRATOR_SERVICE);
        // ZkcManager.getInstance().onCreate(reactContext, mhanlder);
        bindServices();


       screenStatusReceiver = new RemoteControlReceiver();
        IntentFilter screenStatusIF = new IntentFilter();
       screenStatusIF.addAction(Intent.ACTION_SCREEN_ON);
       screenStatusIF.addAction(Intent.ACTION_SCREEN_OFF);
       screenStatusIF.addAction(Intent.ACTION_SHUTDOWN);
       screenStatusIF.addAction("com.zkc.keycode");
       reactContext.registerReceiver(screenStatusReceiver, screenStatusIF);
        ExecutorFactory.executeThread(new Runnable() {

            @Override
            public void run() {
                Log.e("client", "Thread factory started");
                while (runFlag) {
                    if (bindSuccessFlag) {

                        // 注册回调接口
                        try {
                             mIzkcService.registerCallBack("Scanner", mCallback);
                            // 关闭线程
                            runFlag = false;
                            initScanSet();
                            Log.e("client", "sended message");
                        } catch (RemoteException e) {
                            // TODO Auto-generated catch block
                            runFlag = false;
                            e.printStackTrace();
                        }
                    }
                }


            }
        });

  }

  // public void onStart(final Node node) {
  //     Looper.prepare(); 
  // }
//  private Handler getHandler(){


//    return mHandler;
//  }





  // @Override
  protected void handleStateMessage(Message message) {
    // super.handleStateMessage(message); no need 
    // switch (message.what){
    //   //服务绑定成功 service bind success
    //   case MessageType.BaiscMessage.SEVICE_BIND_SUCCESS:
    //     Log.e("client", "AIDL service bind success");
    //     registerCallbackAndInitScan();
    //     break;
    //   //服务绑定失败 service bind fail
    //   case MessageType.BaiscMessage.SEVICE_BIND_FAIL:
    //     Log.e("client", "AIDL service bind fail");
    //     break;
    //   case MessageType.BaiscMessage.SCAN_RESULT_GET_SUCCESS:
    //     Log.e("client", (String) message.obj);
    //     // tv_receiver.setText("R:"+ et_code.getText().length());
    //     break;
    // }
  }


  

  //BaseActivity

  // protected Handler getHandler() {
  //   if (mhanlder == null) {
  //     mhanlder = new Handler() {
  //       public void handleMessage(Message msg) {
  //         handleStateMessage(msg);
  //       }
  //     };
  //   }
  //   return mhanlder;
  // }

  

  // protected void sendMessage(Message message) {
  //   getHandler().sendMessage(message);
  // }

  // protected void sendMessage(int what, Object obj) {
  //   Message message = new Message();
  //   message.what = what;
  //   message.obj = obj;
  //   getHandler().sendMessage(message);
  // }

  // protected void sendEmptyMessage(int what) {
  //   getHandler().sendEmptyMessage(what);
  // }


 int count = 0;
 public class RemoteControlReceiver extends BroadcastReceiver {

   private static final String TAG = "RemoteControlReceiver";
   @Override
   public void onReceive(Context context, Intent intent) {
     String action = intent.getAction();
     beginToReceiverData = false;
     Log.i(TAG, "System message " + action);
     if(action.equals("com.zkc.keycode")) {
//       if(count++>0){
//         count = 0;
//         int keyValue = intent.getIntExtra("keyvalue", 0);
//         Log.i(TAG, "KEY VALUE:"+keyValue);
//         if (keyValue == 136 || keyValue == 135 || keyValue == 131) {
//           Log.i(TAG, "Scan key down.........");
//           try {
//             mIzkcService.scan();
////             mHandler.sendEmptyMessage(2);
//           } catch (RemoteException e) {
//             // TODO Auto-generated catch block
//             e.printStackTrace();
//           }
//         }
//       }
     } else if (action.equals("android.intent.action.SCREEN_ON")) {
       Log.i(TAG, "Power off,Close scan modules power.........");
       if(mIzkcService!=null){
         beginToReceiverData = true;
         try {
           if(mIzkcService!=null)
             mIzkcService.openScan(true);
         } catch (RemoteException e) {
           // TODO Auto-generated catch block
           e.printStackTrace();
         }
       }
     } else if (action.equals("android.intent.action.SCREEN_OFF")) {
       Log.i(TAG, "ACTION_SCREEN_OFF,Close scan modules power.........");
       try {
         if(mIzkcService!=null)
           mIzkcService.openScan(false);
       } catch (RemoteException e) {
         // TODO Auto-generated catch block
         e.printStackTrace();
       }
     } else if (action.equals("android.intent.action.ACTION_SHUTDOWN")) {
       Log.i(TAG, "ACTION_SCREEN_ON,Open scan modules power.........");
       try {
         if(mIzkcService!=null)
           mIzkcService.openScan(false);
       } catch (RemoteException e) {
         // TODO Auto-generated catch block
         e.printStackTrace();
       }
     }
   }
 }

  /////


  

  @Override
  public String getName() {
    return "ToastExample";
  }

  @ReactMethod
  public void show(String message, int duration) {
      Log.e("client", "scan command");
      beginToReceiverData = false;
      try {
          mIzkcService.scan();
      } catch (RemoteException e) {
//        Log.e("client", e.getMessage());
          e.printStackTrace();
      }


  }

    @ReactMethod
    public void scan(Callback callback) {
        cb = callback;
        Log.e("client", "scan command");
        beginToReceiverData = false;
        try {
            mIzkcService.scan();
        } catch (RemoteException e) {
//        Log.e("client", e.getMessage());
            e.printStackTrace();
        }


    }

  @Override
  public Map<String, Object> getConstants() {
    final Map<String, Object> constants = new HashMap<>();
    constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
    constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
    return constants;
  }


  @Override
  public void onHostResume() {
      Log.e("client", "Host Resume");
  }

  @Override
  public void onHostPause() {

     Log.e("client", "Host Pause");
      beginToReceiverData = true;
  }

  @Override
  public void onHostDestroy() {
     Log.e("client", "Host Destroyed");
    try {
     mIzkcService.unregisterCallBack("Scanner", mCallback);
     unbindService();
    } catch (RemoteException e) {
     e.printStackTrace();
    }
    getReactApplicationContext().unregisterReceiver(screenStatusReceiver);
//        super.onDestroy();
  }



  // @Override
  //   protected void onDestroy() {
  //     //销毁接口管理者对象
  //     ZkcManager.getInstance().onDestroy();
  //     super.onDestroy();
  //   }

}