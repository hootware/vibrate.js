/**
 * Copyright (C) 2012 by Hootware Ltd.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */

(function(){
	
	//Initialise
	window.vibrate = {
		
		/**
		 * Is supported
		 * 
		 * @return boolean
		 */
		isSupported: function(){
			return navigator.vibrate !== undefined || navigator.mozVibrate !== undefined || navigator.webkitVibrate !== undefined;
		},
		
		/** 
		 * Start vibrating
		 * 
		 * @param milliseconds The time. If left blank then 10 seconds
		 * 
		 * @return void
		 */
		start: function(milliseconds) {
			dispatch(milliseconds);
		},
		
		/** 
		 * Stop vibrating
		 * 
		 * @return void
		 */
		stop: function() {
			dispatch([]);
		},
		
		/** 
		 * Vibrate the morse code for a string of text
		 * 
		 * @return void
		 */
		morse: function(string) {
			//Get the pattern for the string
			var vibes = getMorseCode(string);
			dispatch(vibes);
		}
	};
	
	/**
	 * Private methods and variables
	 */
	
	/** 
	 * Get the W3C spec vibrate class
	 * 
	 * @return void
	 */
	function dispatch(data) {
		if (navigator.vibrate) {
			navigator.vibrate(data);
		} else if (navigator.mozVibrate) {
			navigator.mozVibrate(data);
		} else if (navigator.webkitVibrate) {
			navigator.webkitVibrate(data);
		}
	}
	
	/** 
	 * Get the W3C spec vibrate class
	 * 
	 * @return void
	 */
	function getMorseCode(string) {
		//Loop through each letter
		var vibes = [];
		for(var i=0; i< string.length; i++) {
			var letterVibe = morseLetters[string.charAt(i).toString().toUpperCase()];
			if (string.charAt(i) == ' ') {
				vibes.push(0)
				vibes.push(space);
			} else if (letterVibe !== undefined) {
				letterVibe.forEach(function(vibe) {
					vibes.push(vibe);
					vibes.push(gap);
				});
			}
		}
		
		return vibes;
		
	}
	
	/**
	 * Morse code letter
	 */	
	var dot = 80;
	var dash = 300;
	var gap = 100;
	var space = 300;
	var morseLetters = {
		"A": [dot, dash],
		"B": [dash, dot, dot, dot],
		"C": [dash, dot, dash, dot],
		"D": [dash, dot, dot],
		"E": [dot],
		"F": [dot, dot, dash, dot],
		"G": [dash, dash, dot],
		"H": [dot, dot, dot, dot],
		"I": [dot, dot],
		"J": [dot, dash, dash, dash],
		"K": [dash, dot, dash],
		"L": [dot, dash, dot, dot],
		"M": [dash, dash],
		"N": [dash, dot],
		"O": [dash, dash, dash],
		"P": [dot, dash, dash, dot],
		"Q": [dash, dash, dot, dash],
		"R": [dot, dash, dot],
		"S": [dot, dot, dot],
		"T": [dash],
		"U": [dot, dot, dash],
		"V": [dot, dot, dot, dash],
		"W": [dot, dash, dash],
		"X": [dash, dot, dot, dash],
		"Y": [dash, dot, dash, dash],
		"Z": [dash, dash, dot, dot],
		"0": [dash, dash, dash, dash, dash],
		"1": [dot, dash, dash, dash, dash],
		"2": [dot, dot, dash, dash, dash],
		"3": [dot, dot, dot, dash, dash],
		"4": [dot, dot, dot, dot, dash],
		"5": [dot, dot, dot, dot, dot],
		"6": [dash, dot, dot, dot, dot],
		"7": [dash, dash, dot, dot, dot],
		"8": [dash, dash, dash, dot, dot],
		"9": [dash, dash, dash, dash, dot],
		".": [dot, dash, dot, dash, dot, dash], 
		",": [dash, dash, dot, dot, dash, dash],
		":": [dash, dash, dash, dot, dot, dot],
		"?": [dot, dot, dash, dash, dot, dot],
		"'": [dot, dash, dash, dash, dash, dot],
		"-": [dash, dot, dot, dot, dot, dash], 
		"/": [dash, dot, dot, dash, dot],
		"(": [dash, dot, dash, dash, dot, dash],
		")": [dash, dot, dash, dash, dot, dash],
		"\"": [dot, dash, dot, dot, dash, dot]
	};
	
})();