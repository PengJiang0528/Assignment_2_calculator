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
			if(output){//if output has a value
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
				// output=output+this.id;
				// output= output.substr(0,output.length-1);
				output=output.replace(/,/g,'');
				document.getElementById("output-value").innerText=output.toLocaleString("en");
			}
			else{
				console.log(typeof(output));
				//output= output.substr(0,output.length-1);
				//output=output.replace(/,/g,'');
				document.getElementById("output-value").innerText=output;//.toLocaleString("en");
			}
			
		}
		else{
			output=reverseNumberFormat(output);
		}

		/*if (output.includes(".")){
			alert("asdf");
			output= output.substr(0,output.length-1);
			if(output!=NaN){ //if output is a number
			output=output+this.id;
			printOutput(output);
		}
		break;
		}
		else{
			var output=reverseNumberFormat(getOutput());
		}*/
		//var output=reverseNumberFormat(output);
		if(this.id=="."){
			console.log("b");
			output=output+this.id;
			document.getElementById("output-value").innerText=output.toLocaleString("en");
		}
		else if(output!=NaN){ //if output is a number
			//console.log(this.id);
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


/*document.onkeydown = function(event){
	var key_press = String.fromCharCode(event.keyCode);
	var key_code = event.keyCode;
	alert
}*/

document.onkeydown = function(evt) {
    evt = evt || window.event;
    var output=getOutput();
    var history=getHistory();
    if (evt.keyCode==49){
    	output=reverseNumberFormat(output)+"1";
    	printOutput(output);
    }
    if (evt.keyCode==50){
    	output=reverseNumberFormat(output)+"2";
    	printOutput(output);
    }
    if (evt.keyCode==51){
    	output=reverseNumberFormat(output)+"3";
    	printOutput(output);
    }
    if (evt.keyCode==52){
    	output=reverseNumberFormat(output)+"4";
    	printOutput(output);
    }
    if (evt.keyCode==53){
    	output=reverseNumberFormat(output)+"5";
    	printOutput(output);
    }
    if (evt.keyCode==54){
    	output=reverseNumberFormat(output)+"6";
    	printOutput(output);
    }
    if (evt.keyCode==55){
    	output=reverseNumberFormat(output)+"7";
    	printOutput(output);
    }
    if (evt.keyCode==56){
    	output=reverseNumberFormat(output)+"8";
    	printOutput(output);
    }
    if (evt.keyCode==57){
    	output=reverseNumberFormat(output)+"9";
    	printOutput(output);
    }
    if (evt.keyCode==48){
    	output=reverseNumberFormat(output)+"0";
    	printOutput(output);
    }
    if (evt.keyCode==97){
    	output=reverseNumberFormat(output)+"1";
    	printOutput(output);
    }
    if (evt.keyCode==98){
    	output=reverseNumberFormat(output)+"2";
    	printOutput(output);
    }
    if (evt.keyCode==99){
    	output=reverseNumberFormat(output)+"3";
    	printOutput(output);
    }
    if (evt.keyCode==100){
    	output=reverseNumberFormat(output)+"4";
    	printOutput(output);
    }
    if (evt.keyCode==101){
    	output=reverseNumberFormat(output)+"5";
    	printOutput(output);
    }
    if (evt.keyCode==102){
    	output=reverseNumberFormat(output)+"6";
    	printOutput(output);
    }
    if (evt.keyCode==103){
    	output=reverseNumberFormat(output)+"7";
    	printOutput(output);
    }
    if (evt.keyCode==104){
    	output=reverseNumberFormat(output)+"8";
    	printOutput(output);
    }
    if (evt.keyCode==105){
    	output=reverseNumberFormat(output)+"9";
    	printOutput(output);
    }
    if (evt.keyCode==96){
    	output=reverseNumberFormat(output)+"0";
    	printOutput(output);
    }
    if (evt.keyCode==107){
    	if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverseNumberFormat(output);
				history=history+output;
				
				history=history+"+";
				printHistory(history);
				printOutput("");
				
			}
    }
    if (evt.keyCode == 61 && evt.shiftKey){
    	if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverseNumberFormat(output);
				history=history+output;
				
				history=history+"+";
				printHistory(history);
				printOutput("");
				
			}
    }
    if (evt.keyCode==109){
    	if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverseNumberFormat(output);
				history=history+output;
				
				history=history+"-";
				printHistory(history);
				printOutput("");
				
			}
    }
    if (evt.keyCode==173){
    	if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverseNumberFormat(output);
				history=history+output;
				
				history=history+"-";
				printHistory(history);
				printOutput("");
				
			}
    }
    if (evt.keyCode==106){
    	if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverseNumberFormat(output);
				history=history+output;
				
				history=history+"*";
				printHistory(history);
				printOutput("");
				
			}
    }
    if (evt.keyCode == 56 && evt.shiftKey){
    	if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverseNumberFormat(output);
				history=history+output;
				
				history=history+"*";
				printHistory(history);
				printOutput("");
				
			}
    }
    if (evt.keyCode == 53 && evt.shiftKey){
    	if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverseNumberFormat(output);
				history=history+output;
				
				history=history+"%";
				printHistory(history);
				printOutput("");
				
			}
    }
    if (evt.keyCode==111){
    	if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverseNumberFormat(output);
				history=history+output;
				
				history=history+"/";
				printHistory(history);
				printOutput("");
				
			}
    }
    if (evt.keyCode==191){
    	if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverseNumberFormat(output);
				history=history+output;
				
				history=history+"/";
				printHistory(history);
				printOutput("");
				
			}
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