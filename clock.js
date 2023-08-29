var x=0;
	var secs=0;
	function printmsg(){
		document.getElementById("txt").innerHTML=secs+"seconds";
	}
	function start(){
		x=window.setInterval(printmsg,1000);
	}
	function stop(){
	window.clearInterval(x);
		}

function clock(){
		var hours=document.getElementById("hours");
		var mins=document.getElementById("minutes"); //getting the tags
		var secs=document.getElementById("seconds");
		
		var h=new Date().getHours();
		var m=new Date().getMinutes(); //assigning the data from the web browser
		var s=new Date().getSeconds();
		
		hours.innerHTML=h;
		mins.innerHTML=m;
		secs.innerHTML=s;
		
			}
			
		var interval =setInterval(clock,1000);

