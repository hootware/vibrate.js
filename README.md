# Vibrate.js

A simple library that gives easy to use methods of using the W3C Vibration API.

##Compatible browsers

At the moment it seems only Firefox beta for Android supports the Vibration API

https://market.android.com/details?id=org.mozilla.firefox_beta&hl=en

##Download

https://raw.github.com/hootware/vibrate.js/master/vibrate.js


##Contributors

Ollie Parsley - http://twitter.com/motionjs


##Future plans

* Haptic feedback (attach to the key press event)
* Support the Gamepad API "rumble" feature when released
* Any suggestions you have, place in the issues please :)

##Usage

### Start
Start a vibration for a number of milliseconds

    window.vibrate.start(<milliseconds>);

Example

    //Vibrate for 2 seconds
    window.vibrate.start(2000);

### Stop
Stop any vibrations

    window.vibrate.start(<milliseconds>);

### Morse code
Create morse code in vibrations from a string

    window.vibrate.morse(<string>);

Example
	
	//Vibrate SOS in morse code
    window.vibrate.morse('sos');
