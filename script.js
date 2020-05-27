function getHistory(){
	return document.getElementById("history-value").innerText;
}
function printHistory(num){
	document.getElementById("history-value").innerText=num;
}
function getOutput(){
	return document.getElementById("output-value").innerText;
}
function printOutput(num){
	if(num==""){
		document.getElementById("output-value").innerText=num;
	}
	else{
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}	
}
function getFormattedNumber(num){
	if(num=="-"){
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="clear"){
			printHistory("");
			printOutput("");
		}
		else if(this.id=="backspace"){
			var output=reverseNumberFormat(getOutput()).toString();
			if(output){
				output= output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		else{
			var output=getOutput();
			var history=getHistory();
			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverseNumberFormat(output);
				history=history+output;
				if(this.id=="="){
					var result=eval(history);
					if(history.includes("/0")==true && history.includes("/0.")==false){
						printOutput("");
						printHistory("");
						alert("Cannot divided by 0, where did you learn your math?")
					}
					else if(Number(result)>1000000000000){
						printOutput("");
						printHistory("");
						alert("Bro, the number is toooooooo big!!!!!!");
					}
					else{
					printOutput(result);
					printHistory("");
					}
				}
				else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
				}
			}
		}
		
	});
}
var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=getOutput();
		if (output.includes(".")){
			
			if(output[output.length-1]=="."){
				output=output.replace(/,/g,'');
				document.getElementById("output-value").innerText=output.toLocaleString("en");
			}
			else{
				console.log(typeof(output));
				document.getElementById("output-value").innerText=output;
			}
			
		}
		else{
			output=reverseNumberFormat(output);
		}
		if(this.id=="."){
			if (getOutput().includes(".")){

			}
			else{
			output=output+this.id;
			document.getElementById("output-value").innerText=output.toLocaleString("en");
			}
			
		}
		else if(output!=NaN){
			console.log(output);
			if(output=="0"){
				output=this.id;
			}
			else{
				output=output+this.id;
			}
			
			output=output.replace(/,/g,'');
			document.getElementById("output-value").innerText=output.toLocaleString("en");
		}
		
	});
}
function printkeys(num){
	var output=getOutput();
    var history=getHistory();
	output=reverseNumberFormat(output)+num;
    printOutput(output);
}
function pressOperators(num){
	if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverseNumberFormat(output);
				history=history+output;
				
				history=history+num;
				printHistory(history);
				printOutput("");
				
			}
}
document.onkeydown = function(evt) {
    evt = evt || window.event;
    var output=getOutput();
    var history=getHistory();
    if (evt.keyCode==49){
    	printkeys("1");
    }
    if (evt.keyCode==50){
    	
    	printkeys("2");
    }
    if (evt.keyCode==51){
    	printkeys("3");
    }
    if (evt.keyCode==52){
    	printkeys("4");
    }
    if (evt.keyCode==53){
    	printkeys("5");
    }
    if (evt.keyCode==54){
    	printkeys("6");
    }
    if (evt.keyCode==55){
    	printkeys("7");
    }
    if (evt.keyCode==56){
    	printkeys("8");
    }
    if (evt.keyCode==57){
    	printkeys("9");
    }
    if (evt.keyCode==48){
    	printkeys("0");
    }
    if (evt.keyCode==97){
    	printkeys("1");
    }
    if (evt.keyCode==98){
    	printkeys("2");
    }
    if (evt.keyCode==99){
    	printkeys("3");
    }
    if (evt.keyCode==100){
    	printkeys("4");
    }
    if (evt.keyCode==101){
    	printkeys("5");
    }
    if (evt.keyCode==102){
    	printkeys("6");
    }
    if (evt.keyCode==103){
    	printkeys("7");
    }
    if (evt.keyCode==104){
    	printkeys("8");
    }
    if (evt.keyCode==105){
    	printkeys("9");
    }
    if (evt.keyCode==96){
    	printkeys("0");
    }
    if (evt.keyCode==107){
    	pressOperators("+");
    }
    if (evt.keyCode == 61 && evt.shiftKey){
    	pressOperators("+");
    }
    if (evt.keyCode==109){
    	pressOperators("-");
    }
    if (evt.keyCode==173){
    	pressOperators("-");
    }
    if (evt.keyCode==106){
    	pressOperators("*");
    }
    if (evt.keyCode == 56 && evt.shiftKey){
    	pressOperators("*");
    }
    if (evt.keyCode == 53 && evt.shiftKey){
    	pressOperators("%");
    }
    if (evt.keyCode==111){
    	pressOperators("/");
    }
    if (evt.keyCode==191){
    	pressOperators("/");
    }
    if (evt.keyCode==8){
    	var output=reverseNumberFormat(getOutput()).toString();
			if(output){//if output has a value
				output= output.substr(0,output.length-1);
				printOutput(output);
			}
    }
    
    if (evt.keyCode==13){
    	if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverseNumberFormat(output);
				history=history+output;
				
				var result=eval(history);
					if(Number(result)>1000000000000){
						printOutput("");
						printHistory("");
						alert("Bro, the number is toooooooo big!!!!!!");
					}
					else{
					printOutput(result);
					printHistory("");
					}
			}
    }
    if (evt.keyCode==67){
    	printHistory("");
		printOutput("");
    }
    if (reverseNumberFormat(output)>1000000000000){
    	printOutput("");
		printHistory("");
		alert("Bro, the number is toooooooo big!!!!!!");
    }
};