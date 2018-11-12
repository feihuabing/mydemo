function $(id){
	return document.getElementById(id);
}
var arr=[11,12,13,14,15,1,1,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,8,9,9,10,10];
var gg=1;
var gx=30;
var lc=1;
function select(arrall){
	for (var i=0;i<5;i++)
	{
		var a=arr.length;
		var b=parseInt(a*Math.random());
		arrall[arrall.length]=arr[b];
		arr.splice(b,1);
	}
	return arrall;
} 
var arr1=[];
var arr2=[];
var arr3=[];
var arr4=[];
var arr5=[];
var arr6=[];
function start(){
	select(arr1);
	select(arr2);
	select(arr3);
	select(arr4);
	select(arr5);
	select(arr6);
	if(arr1[0]==8){
		$("t01").style.backgroundColor="#888";
		$("t01").style.color="white";
		$("t01").innerHTML="门";
	}
	if(arr1[1]==8){
		$("t02").style.backgroundColor="#888";
		$("t02").style.color="white";
		$("t02").innerHTML="门";
	}
	if(arr1[2]==8){
		$("t03").style.backgroundColor="#888";
		$("t03").style.color="white";
		$("t03").innerHTML="门";
	}
	if(arr1[3]==8){
		$("t04").style.backgroundColor="#888";
		$("t04").style.color="white";
		$("t04").innerHTML="门";
	}
	if(arr1[4]==8){
		$("t05").style.backgroundColor="#888";
		$("t05").style.color="white";
		$("t05").innerHTML="门";
	}
	if(arr2[0]==8){
		$("t06").style.backgroundColor="#888";
		$("t06").style.color="white";
		$("t06").innerHTML="门";
	}
	if(arr2[1]==8){
		$("t07").style.backgroundColor="#888";
		$("t07").style.color="white";
		$("t07").innerHTML="门";
	}
	if(arr2[2]==8){
		$("t08").style.backgroundColor="#888";
		$("t08").style.color="white";
		$("t08").innerHTML="门";
	}
	if(arr2[3]==8){
		$("t09").style.backgroundColor="#888";
		$("t09").style.color="white";
		$("t09").innerHTML="门";
	}
	if(arr2[4]==8){
		$("t10").style.backgroundColor="#888";
		$("t10").style.color="white";
		$("t10").innerHTML="门";
	}
	if(arr3[0]==8){
		$("t11").style.backgroundColor="#888";
		$("t11").style.color="white";
		$("t11").innerHTML="门";
	}
	if(arr3[1]==8){
		$("t12").style.backgroundColor="#888";
		$("t12").style.color="white";
		$("t12").innerHTML="门";
	}
	if(arr3[2]==8){
		$("t13").style.backgroundColor="#888";
		$("t13").style.color="white";
		$("t13").innerHTML="门";
	}
	if(arr3[3]==8){
		$("t14").style.backgroundColor="#888";
		$("t14").style.color="white";
		$("t14").innerHTML="门";
	}
	if(arr3[4]==8){
		$("t15").style.backgroundColor="#888";
		$("t15").style.color="white";
		$("t15").innerHTML="门";
	}
	if(arr4[0]==8){
		$("t16").style.backgroundColor="#888";
		$("t16").style.color="white";
		$("t16").innerHTML="门";
	}
	if(arr4[1]==8){
		$("t17").style.backgroundColor="#888";
		$("t17").style.color="white";
		$("t17").innerHTML="门";
	}
	if(arr4[2]==8){
		$("t18").style.backgroundColor="#888";
		$("t18").style.color="white";
		$("t18").innerHTML="门";
	}
	if(arr4[3]==8){
		$("t19").style.backgroundColor="#888";
		$("t19").style.color="white";
		$("t19").innerHTML="门";
	}
	if(arr4[4]==8){
		$("t20").style.backgroundColor="#888";
		$("t20").style.color="white";
		$("t20").innerHTML="门";
	}
	if(arr5[0]==8){
		$("t21").style.backgroundColor="#888";
		$("t21").style.color="white";
		$("t21").innerHTML="门";
	}
	if(arr5[1]==8){
		$("t22").style.backgroundColor="#888";
		$("t22").style.color="white";
		$("t22").innerHTML="门";
	}
	if(arr5[2]==8){
		$("t23").style.backgroundColor="#888";
		$("t23").style.color="white";
		$("t23").innerHTML="门";
	}
	if(arr5[3]==8){
		$("t24").style.backgroundColor="#888";
		$("t24").style.color="white";
		$("t24").innerHTML="门";
	}
	if(arr5[4]==8){
		$("t25").style.backgroundColor="#888";
		$("t25").style.color="white";
		$("t25").innerHTML="门";
	}
	if(arr6[0]==8){
		$("t26").style.backgroundColor="#888";
		$("t26").style.color="white";
		$("t26").innerHTML="门";
	}
	if(arr6[1]==8){
		$("t27").style.backgroundColor="#888";
		$("t27").style.color="white";
		$("t27").innerHTML="门";
	}
	if(arr6[2]==8){
		$("t28").style.backgroundColor="#888";
		$("t28").style.color="white";
		$("t28").innerHTML="门";
	}
	if(arr6[3]==8){
		$("t29").style.backgroundColor="#888";
		$("t29").style.color="white";
		$("t29").innerHTML="门";
	}
	if(arr6[4]==8){
		$("t30").style.backgroundColor="#888";
		$("t30").style.color="white";
		$("t30").innerHTML="门";
	}
}
var	guai1="<div style='font-size:12px'><div>怪1</div><div><span>血:</span><span id='gx1'>"+gx+"</span></div><div><span>攻:</span><span id='gg1'>"+gg+"</span></div></div>";
var	guai2="<div style='font-size:12px'><div>怪2</div><div><span>血:</span><span id='gx2'>"+gx+"</span></div><div><span>攻:</span><span id='gg2'>"+gg+"</span></div></div>";
var	guai3="<div style='font-size:12px'><div>怪3</div><div><span>血:</span><span id='gx3'>"+gx+"</span></div><div><span>攻:</span><span id='gg3'>"+gg+"</span></div></div>";
var	guai4="<div style='font-size:12px'><div>怪4</div><div><span>血:</span><span id='gx4'>"+gx+"</span></div><div><span>攻:</span><span id='gg4'>"+gg+"</span></div></div>";
var	guai5="<div style='font-size:12px'><div>怪5</div><div><span>血:</span><span id='gx5'>"+gx+"</span></div><div><span>攻:</span><span id='gg5'>"+gg+"</span></div></div>";
function c01(){
	if($("t02").innerHTML.length<=10&&$("t06").innerHTML.length<=10&&$("t07").innerHTML.length<=10&&($("t02").style.backgroundColor!=""||$("t06").style.backgroundColor!="")) {
		if ($("t01").style.backgroundColor == "") {
			if (arr1[0] == 11) {
				$("t01").style.backgroundColor = "black";
				$("t01").style.color = "white";
				$("t01").innerHTML = guai1;
			} else if (arr1[0] == 12) {
				$("t01").style.backgroundColor = "black";
				$("t01").style.color = "white";
				$("t01").innerHTML = guai2;
			} else if (arr1[0] == 13) {
				$("t01").style.backgroundColor = "black";
				$("t01").style.color = "white";
				$("t01").innerHTML = guai3;
			} else if (arr1[0] == 14) {
				$("t01").style.backgroundColor = "black";
				$("t01").style.color = "white";
				$("t01").innerHTML = guai4;
			} else if (arr1[0] == 15) {
				$("t01").style.backgroundColor = "black";
				$("t01").style.color = "white";
				$("t01").innerHTML = guai5;
			} else if (arr1[0] == 1) {
				$("t01").style.backgroundColor = "red";
				$("t01").innerHTML = "血瓶";
			} else if (arr1[0] == 2) {
				$("t01").style.backgroundColor = "blue";
				$("t01").innerHTML = "蓝瓶";
			} else if (arr1[0] == 3) {
				$("t01").style.backgroundColor = "#00ff00";
				$("t01").innerHTML = "装备";
			} else if (arr1[0] == 4) {
				$("t01").style.backgroundColor = "#ff00ff";
				$("t01").innerHTML = "卷轴";
			} else if (arr1[0] == 5) {
				$("t01").style.backgroundColor = "#33ffff";
				$("t01").innerHTML = "探索点";
			} else if (arr1[0] == 6) {
				$("t01").style.backgroundColor = "yellow";
				$("t01").innerHTML = "金币";
			} else if (arr1[0] == 7) {
				$("t01").style.backgroundColor = "#ff7600";
				$("t01").innerHTML = "钥匙";
			} else if (arr1[0] == 8) {
				$("t01").style.backgroundColor = "#888";
				$("t01").style.color = "white";
				$("t01").innerHTML = "门";
			} else if (arr1[0] == 9) {
				$("t01").style.backgroundColor = "orange";
				$("t01").innerHTML = "攻击力";
			} else if (arr1[0] == 10) {
				$("t01").style.backgroundColor = "purple";
				$("t01").innerHTML = "魔力";
			}
		}else {
			if ($("t01").innerHTML == "血瓶") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
				$("t01").innerHTML = "";
				$("t01").style.backgroundColor = "gray";
			}
			if ($("t01").innerHTML == "蓝瓶") {
				$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
				$("t01").innerHTML = "";
				$("t01").style.backgroundColor = "gray";
			}
			if ($("t01").innerHTML == "金币") {
				$("t01").innerHTML = "";
				$("t01").style.backgroundColor = "gray";
			}
			if ($("t01").innerHTML == "探索点") {
				$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
				$("t01").innerHTML = "";
				$("t01").style.backgroundColor = "gray";
			}
			if ($("t01").innerHTML == "攻击力") {
				$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
				$("t01").innerHTML = "";
				$("t01").style.backgroundColor = "gray";
			}
			if ($("t01").innerHTML == "魔力") {
				$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
				$("t01").innerHTML = "";
				$("t01").style.backgroundColor = "gray";
			}
			if ($("t01").innerHTML == "钥匙") {
				$("key").innerHTML = 1;
				$("t01").innerHTML = "";
				$("t01").style.backgroundColor = "gray";
			}
			if($("t01").innerHTML == "门"){
				if($("key").innerHTML == 1){
					restart();
				}
			}
			if ($("t01").innerHTML == "卷轴") {
				$("t01").innerHTML = "";
				$("t01").style.backgroundColor = "gray";
			}
			if ($("t01").innerHTML == "装备") {
				$("t01").innerHTML = "";
				$("t01").style.backgroundColor = "gray";
			} else if ($("t01").innerHTML[34] == "1") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
				$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx1").innerHTML) <= 0) {
					$("t01").innerHTML = "";
					$("t01").style.backgroundColor = "gray";
				}
			} else if ($("t01").innerHTML[34] == "2") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
				$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx2").innerHTML) <= 0) {
					$("t01").innerHTML = "";
					$("t01").style.backgroundColor = "gray";
				}
			} else if ($("t01").innerHTML[34] == "3") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
				$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx3").innerHTML) <= 0) {
					$("t01").innerHTML = "";
					$("t01").style.backgroundColor = "gray";
				}
			} else if ($("t01").innerHTML[34] == "4") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
				$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx4").innerHTML) <= 0) {
					$("t01").innerHTML = "";
					$("t01").style.backgroundColor = "gray";
				}
			} else if ($("t01").innerHTML[34] == "5") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
				$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx5").innerHTML) <= 0) {
					$("t01").innerHTML = "";
					$("t01").style.backgroundColor = "gray";
				}
			}
		}
	}
}
	
function c02(){
	if($("t01").innerHTML.length<10&&$("t03").innerHTML.length<10&&$("t06").innerHTML.length<10&&$("t07").innerHTML.length<10&&$("t08").innerHTML.length<10&&($("t01").style.backgroundColor!=""||$("t03").style.backgroundColor!=""||$("t07").style.backgroundColor!="")) {
		if ($("t02").style.backgroundColor == "") {
			if (arr1[1] == 11) {
				$("t02").style.backgroundColor = "black";
				$("t02").style.color = "white";
				$("t02").innerHTML = guai1;
			} else if (arr1[1] == 12) {
				$("t02").style.backgroundColor = "black";
				$("t02").style.color = "white";
				$("t02").innerHTML = guai2;
			} else if (arr1[1] == 13) {
				$("t02").style.backgroundColor = "black";
				$("t02").style.color = "white";
				$("t02").innerHTML = guai3;
			} else if (arr1[1] == 14) {
				$("t02").style.backgroundColor = "black";
				$("t02").style.color = "white";
				$("t02").innerHTML = guai4;
			} else if (arr1[1] == 15) {
				$("t02").style.backgroundColor = "black";
				$("t02").style.color = "white";
				$("t02").innerHTML = guai5;
			} else if (arr1[1] == 1) {
				$("t02").style.backgroundColor = "red";
				$("t02").innerHTML = "血瓶";
			} else if (arr1[1] == 2) {
				$("t02").style.backgroundColor = "blue";
				$("t02").innerHTML = "蓝瓶";
			} else if (arr1[1] == 3) {
				$("t02").style.backgroundColor = "#00ff00";
				$("t02").innerHTML = "装备";
			} else if (arr1[1] == 4) {
				$("t02").style.backgroundColor = "#ff00ff";
				$("t02").innerHTML = "卷轴";
			} else if (arr1[1] == 5) {
				$("t02").style.backgroundColor = "#33ffff";
				$("t02").innerHTML = "探索点";
			} else if (arr1[1] == 6) {
				$("t02").style.backgroundColor = "yellow";
				$("t02").innerHTML = "金币";
			} else if (arr1[1] == 7) {
				$("t02").style.backgroundColor = "#ff7600";
				$("t02").innerHTML = "钥匙";
			} else if (arr1[1] == 8) {
				$("t02").style.backgroundColor = "#888";
				$("t02").style.color = "white";
				$("t02").innerHTML = "门";
				$("t02").disable = "true";
			} else if (arr1[1] == 9) {
				$("t02").style.backgroundColor = "orange";
				$("t02").innerHTML = "攻击力";
			} else if (arr1[1] == 10) {
				$("t02").style.backgroundColor = "purple";
				$("t02").innerHTML = "魔力";
			}
		} else {
			if ($("t02").innerHTML == "血瓶") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
				$("t02").innerHTML = "";
				$("t02").style.backgroundColor = "gray";
			}
			if ($("t02").innerHTML == "蓝瓶") {
				$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
				$("t02").innerHTML = "";
				$("t02").style.backgroundColor = "gray";
			}
			if ($("t02").innerHTML == "金币") {
				$("t02").innerHTML = "";
				$("t02").style.backgroundColor = "gray";
			}
			if ($("t02").innerHTML == "探索点") {
				$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
				$("t02").innerHTML = "";
				$("t02").style.backgroundColor = "gray";
			}
			if ($("t02").innerHTML == "攻击力") {
				$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
				$("t02").innerHTML = "";
				$("t02").style.backgroundColor = "gray";
			}
			if ($("t02").innerHTML == "魔力") {
				$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
				$("t02").innerHTML = "";
				$("t02").style.backgroundColor = "gray";
			}
			if ($("t02").innerHTML == "钥匙") {
				$("key").innerHTML = 1;
				$("t02").innerHTML = "";
				$("t02").style.backgroundColor = "gray";
			}
			if ($("t02").innerHTML == "门") {
				if ($("key").innerHTML == 1) {
					restart();
				}
			}
			if ($("t02").innerHTML == "卷轴") {
				$("t02").innerHTML = "";
				$("t02").style.backgroundColor = "gray";
			}
			if ($("t02").innerHTML == "装备") {
				$("t02").innerHTML = "";
				$("t02").style.backgroundColor = "gray";
			} else if ($("t02").innerHTML[34] == "1") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
				$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx1").innerHTML) <= 0) {
					$("t02").innerHTML = "";
					$("t02").style.backgroundColor = "gray";
				}
			} else if ($("t02").innerHTML[34] == "2") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
				$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx2").innerHTML) <= 0) {
					$("t02").innerHTML = "";
					$("t02").style.backgroundColor = "gray";
				}
			} else if ($("t02").innerHTML[34] == "3") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
				$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx3").innerHTML) <= 0) {
					$("t02").innerHTML = "";
					$("t02").style.backgroundColor = "gray";
				}
			} else if ($("t02").innerHTML[34] == "4") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
				$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx4").innerHTML) <= 0) {
					$("t02").innerHTML = "";
					$("t02").style.backgroundColor = "gray";
				}
			} else if ($("t02").innerHTML[34] == "5") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
				$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx5").innerHTML) <= 0) {
					$("t02").innerHTML = "";
					$("t02").style.backgroundColor = "gray";
				}
			}
		}
	}
}
function c03(){
	if($("t02").innerHTML.length<10&&$("t04").innerHTML.length<10&&$("t07").innerHTML.length<10&&$("t09").innerHTML.length<10&&$("t08").innerHTML.length<10&&($("t02").style.backgroundColor!=""||$("t04").style.backgroundColor!=""||$("t08").style.backgroundColor!="")) {
		if ($("t03").style.backgroundColor == "") {
			if (arr1[2] == 11) {
				$("t03").style.backgroundColor = "black";
				$("t03").style.color = "white";
				$("t03").innerHTML = guai1;
			} else if (arr1[2] == 12) {
				$("t03").style.backgroundColor = "black";
				$("t03").style.color = "white";
				$("t03").innerHTML = guai2;
			} else if (arr1[2] == 13) {
				$("t03").style.backgroundColor = "black";
				$("t03").style.color = "white";
				$("t03").innerHTML = guai3;
			} else if (arr1[2] == 14) {
				$("t03").style.backgroundColor = "black";
				$("t03").style.color = "white";
				$("t03").innerHTML = guai4;
			} else if (arr1[2] == 15) {
				$("t03").style.backgroundColor = "black";
				$("t03").style.color = "white";
				$("t03").innerHTML = guai5;
			} else if (arr1[2] == 1) {
				$("t03").style.backgroundColor = "red";
				$("t03").innerHTML = "血瓶";
			} else if (arr1[2] == 2) {
				$("t03").style.backgroundColor = "blue";
				$("t03").innerHTML = "蓝瓶";
			} else if (arr1[2] == 3) {
				$("t03").style.backgroundColor = "#00ff00";
				$("t03").innerHTML = "装备";
			} else if (arr1[2] == 4) {
				$("t03").style.backgroundColor = "#ff00ff";
				$("t03").innerHTML = "卷轴";
			} else if (arr1[2] == 5) {
				$("t03").style.backgroundColor = "#33ffff";
				$("t03").innerHTML = "探索点";
			} else if (arr1[2] == 6) {
				$("t03").style.backgroundColor = "yellow";
				$("t03").innerHTML = "金币";
			} else if (arr1[2] == 7) {
				$("t03").style.backgroundColor = "#ff7600";
				$("t03").innerHTML = "钥匙";
			} else if (arr1[2] == 8) {
				$("t03").style.backgroundColor = "#888";
				$("t03").style.color = "white";
				$("t03").innerHTML = "门";
				$("t03").disable = "true";
			} else if (arr1[2] == 9) {
				$("t03").style.backgroundColor = "orange";
				$("t03").innerHTML = "攻击力";
			} else if (arr1[2] == 10) {
				$("t03").style.backgroundColor = "purple";
				$("t03").innerHTML = "魔力";
			}
		} else {
			if ($("t03").innerHTML == "血瓶") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
				$("t03").innerHTML = "";
				$("t03").style.backgroundColor = "gray";
			}
			if ($("t03").innerHTML == "蓝瓶") {
				$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
				$("t03").innerHTML = "";
				$("t03").style.backgroundColor = "gray";
			}
			if ($("t03").innerHTML == "金币") {
				$("t03").innerHTML = "";
				$("t03").style.backgroundColor = "gray";
			}
			if ($("t03").innerHTML == "探索点") {
				$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
				$("t03").innerHTML = "";
				$("t03").style.backgroundColor = "gray";
			}
			if ($("t03").innerHTML == "攻击力") {
				$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
				$("t03").innerHTML = "";
				$("t03").style.backgroundColor = "gray";
			}
			if ($("t03").innerHTML == "魔力") {
				$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
				$("t03").innerHTML = "";
				$("t03").style.backgroundColor = "gray";
			}
			if ($("t03").innerHTML == "钥匙") {
				$("key").innerHTML = 1;
				$("t03").innerHTML = "";
				$("t03").style.backgroundColor = "gray";
			}
			if ($("t03").innerHTML == "门") {
				if ($("key").innerHTML == 1) {
					restart();
				}
			}
			if ($("t03").innerHTML == "卷轴") {
				$("t03").innerHTML = "";
				$("t03").style.backgroundColor = "gray";
			}
			if ($("t03").innerHTML == "装备") {
				$("t03").innerHTML = "";
				$("t03").style.backgroundColor = "gray";
			} else if ($("t03").innerHTML[34] == "1") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
				$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx1").innerHTML) <= 0) {
					$("t03").innerHTML = "";
					$("t03").style.backgroundColor = "gray";
				}
			} else if ($("t03").innerHTML[34] == "2") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
				$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx2").innerHTML) <= 0) {
					$("t03").innerHTML = "";
					$("t03").style.backgroundColor = "gray";
				}
			} else if ($("t03").innerHTML[34] == "3") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
				$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx3").innerHTML) <= 0) {
					$("t03").innerHTML = "";
					$("t03").style.backgroundColor = "gray";
				}
			} else if ($("t03").innerHTML[34] == "4") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
				$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx4").innerHTML) <= 0) {
					$("t03").innerHTML = "";
					$("t03").style.backgroundColor = "gray";
				}
			} else if ($("t03").innerHTML[34] == "5") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
				$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx5").innerHTML) <= 0) {
					$("t03").innerHTML = "";
					$("t03").style.backgroundColor = "gray";
				}
			}
		}
	}
}
function c04(){
	if($("t03").innerHTML.length<10&&$("t05").innerHTML.length<10&&$("t10").innerHTML.length<10&&$("t09").innerHTML.length<10&&$("t08").innerHTML.length<10&&($("t03").style.backgroundColor!=""||$("t05").style.backgroundColor!=""||$("t09").style.backgroundColor!="")) {
		if ($("t04").style.backgroundColor == "") {
			if (arr1[3] == 11) {
				$("t04").style.backgroundColor = "black";
				$("t04").style.color = "white";
				$("t04").innerHTML = guai1;
			} else if (arr1[3] == 12) {
				$("t04").style.backgroundColor = "black";
				$("t04").style.color = "white";
				$("t04").innerHTML = guai2;
			} else if (arr1[3] == 13) {
				$("t04").style.backgroundColor = "black";
				$("t04").style.color = "white";
				$("t04").innerHTML = guai3;
			} else if (arr1[3] == 14) {
				$("t04").style.backgroundColor = "black";
				$("t04").style.color = "white";
				$("t04").innerHTML = guai4;
			} else if (arr1[3] == 15) {
				$("t04").style.backgroundColor = "black";
				$("t04").style.color = "white";
				$("t04").innerHTML = guai5;
			} else if (arr1[3] == 1) {
				$("t04").style.backgroundColor = "red";
				$("t04").innerHTML = "血瓶";
			} else if (arr1[3] == 2) {
				$("t04").style.backgroundColor = "blue";
				$("t04").innerHTML = "蓝瓶";
			} else if (arr1[3] == 3) {
				$("t04").style.backgroundColor = "#00ff00";
				$("t04").innerHTML = "装备";
			} else if (arr1[3] == 4) {
				$("t04").style.backgroundColor = "#ff00ff";
				$("t04").innerHTML = "卷轴";
			} else if (arr1[3] == 5) {
				$("t04").style.backgroundColor = "#33ffff";
				$("t04").innerHTML = "探索点";
			} else if (arr1[3] == 6) {
				$("t04").style.backgroundColor = "yellow";
				$("t04").innerHTML = "金币";
			} else if (arr1[3] == 7) {
				$("t04").style.backgroundColor = "#ff7600";
				$("t04").innerHTML = "钥匙";
			} else if (arr1[3] == 8) {
				$("t04").style.backgroundColor = "#888";
				$("t04").style.color = "white";
				$("t04").innerHTML = "门";
				$("t04").disable = "true";
			} else if (arr1[3] == 9) {
				$("t04").style.backgroundColor = "orange";
				$("t04").innerHTML = "攻击力";
			} else if (arr1[3] == 10) {
				$("t04").style.backgroundColor = "purple";
				$("t04").innerHTML = "魔力";
			}
		} else {
			if ($("t04").innerHTML == "血瓶") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
				$("t04").innerHTML = "";
				$("t04").style.backgroundColor = "gray";
			}
			if ($("t04").innerHTML == "蓝瓶") {
				$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
				$("t04").innerHTML = "";
				$("t04").style.backgroundColor = "gray";
			}
			if ($("t04").innerHTML == "金币") {
				$("t04").innerHTML = "";
				$("t04").style.backgroundColor = "gray";
			}
			if ($("t04").innerHTML == "探索点") {
				$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
				$("t04").innerHTML = "";
				$("t04").style.backgroundColor = "gray";
			}
			if ($("t04").innerHTML == "攻击力") {
				$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
				$("t04").innerHTML = "";
				$("t04").style.backgroundColor = "gray";
			}
			if ($("t04").innerHTML == "魔力") {
				$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
				$("t04").innerHTML = "";
				$("t04").style.backgroundColor = "gray";
			}
			if ($("t04").innerHTML == "钥匙") {
				$("key").innerHTML = 1;
				$("t04").innerHTML = "";
				$("t04").style.backgroundColor = "gray";
			}
			if ($("t04").innerHTML == "门") {
				if ($("key").innerHTML == 1) {
					restart();
				}
			}
			if ($("t04").innerHTML == "卷轴") {
				$("t04").innerHTML = "";
				$("t04").style.backgroundColor = "gray";
			}
			if ($("t04").innerHTML == "装备") {
				$("t04").innerHTML = "";
				$("t04").style.backgroundColor = "gray";
			} else if ($("t04").innerHTML[34] == "1") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
				$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx1").innerHTML) <= 0) {
					$("t04").innerHTML = "";
					$("t04").style.backgroundColor = "gray";
				}
			} else if ($("t04").innerHTML[34] == "2") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
				$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx2").innerHTML) <= 0) {
					$("t04").innerHTML = "";
					$("t04").style.backgroundColor = "gray";
				}
			} else if ($("t04").innerHTML[34] == "3") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
				$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx3").innerHTML) <= 0) {
					$("t04").innerHTML = "";
					$("t04").style.backgroundColor = "gray";
				}
			} else if ($("t04").innerHTML[34] == "4") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
				$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx4").innerHTML) <= 0) {
					$("t04").innerHTML = "";
					$("t04").style.backgroundColor = "gray";
				}
			} else if ($("t04").innerHTML[34] == "5") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
				$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx5").innerHTML) <= 0) {
					$("t04").innerHTML = "";
					$("t04").style.backgroundColor = "gray";
				}
			}
		}
	}
}
function c05(){
	if($("t04").innerHTML.length<10&&$("t09").innerHTML.length<10&&$("t10").innerHTML.length<10&&($("t04").style.backgroundColor!=""||$("t10").style.backgroundColor!="")) {
		if ($("t05").style.backgroundColor == "") {
			if (arr1[4] == 11) {
				$("t05").style.backgroundColor = "black";
				$("t05").style.color = "white";
				$("t05").innerHTML = guai1;
			} else if (arr1[4] == 12) {
				$("t05").style.backgroundColor = "black";
				$("t05").style.color = "white";
				$("t05").innerHTML = guai2;
			} else if (arr1[4] == 13) {
				$("t05").style.backgroundColor = "black";
				$("t05").style.color = "white";
				$("t05").innerHTML = guai3;
			} else if (arr1[4] == 14) {
				$("t05").style.backgroundColor = "black";
				$("t05").style.color = "white";
				$("t05").innerHTML = guai4;
			} else if (arr1[4] == 15) {
				$("t05").style.backgroundColor = "black";
				$("t05").style.color = "white";
				$("t05").innerHTML = guai5;
			} else if (arr1[4] == 1) {
				$("t05").style.backgroundColor = "red";
				$("t05").innerHTML = "血瓶";
			} else if (arr1[4] == 2) {
				$("t05").style.backgroundColor = "blue";
				$("t05").innerHTML = "蓝瓶";
			} else if (arr1[4] == 3) {
				$("t05").style.backgroundColor = "#00ff00";
				$("t05").innerHTML = "装备";
			} else if (arr1[4] == 4) {
				$("t05").style.backgroundColor = "#ff00ff";
				$("t05").innerHTML = "卷轴";
			} else if (arr1[4] == 5) {
				$("t05").style.backgroundColor = "#33ffff";
				$("t05").innerHTML = "探索点";
			} else if (arr1[4] == 6) {
				$("t05").style.backgroundColor = "yellow";
				$("t05").innerHTML = "金币";
			} else if (arr1[4] == 7) {
				$("t05").style.backgroundColor = "#ff7600";
				$("t05").innerHTML = "钥匙";
			} else if (arr1[4] == 8) {
				$("t05").style.backgroundColor = "#888";
				$("t05").style.color = "white";
				$("t05").innerHTML = "门";
				$("t05").disable = "true";
			} else if (arr1[4] == 9) {
				$("t05").style.backgroundColor = "orange";
				$("t05").innerHTML = "攻击力";
			} else if (arr1[4] == 10) {
				$("t05").style.backgroundColor = "purple";
				$("t05").innerHTML = "魔力";
			}
		} else {
			if ($("t05").innerHTML == "血瓶") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
				$("t05").innerHTML = "";
				$("t05").style.backgroundColor = "gray";
			}
			if ($("t05").innerHTML == "蓝瓶") {
				$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
				$("t05").innerHTML = "";
				$("t05").style.backgroundColor = "gray";
			}
			if ($("t05").innerHTML == "金币") {
				$("t05").innerHTML = "";
				$("t05").style.backgroundColor = "gray";
			}
			if ($("t05").innerHTML == "探索点") {
				$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
				$("t05").innerHTML = "";
				$("t05").style.backgroundColor = "gray";
			}
			if ($("t05").innerHTML == "攻击力") {
				$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
				$("t05").innerHTML = "";
				$("t05").style.backgroundColor = "gray";
			}
			if ($("t05").innerHTML == "魔力") {
				$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
				$("t05").innerHTML = "";
				$("t05").style.backgroundColor = "gray";
			}
			if ($("t05").innerHTML == "钥匙") {
				$("key").innerHTML = 1;
				$("t05").innerHTML = "";
				$("t05").style.backgroundColor = "gray";
			}
			if ($("t05").innerHTML == "门") {
				if ($("key").innerHTML == 1) {
					restart();
				}
			}
			if ($("t05").innerHTML == "卷轴") {
				$("t05").innerHTML = "";
				$("t05").style.backgroundColor = "gray";
			}
			if ($("t05").innerHTML == "装备") {
				$("t05").innerHTML = "";
				$("t05").style.backgroundColor = "gray";
			} else if ($("t05").innerHTML[34] == "1") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
				$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx1").innerHTML) <= 0) {
					$("t05").innerHTML = "";
					$("t05").style.backgroundColor = "gray";
				}
			} else if ($("t05").innerHTML[34] == "2") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
				$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx2").innerHTML) <= 0) {
					$("t05").innerHTML = "";
					$("t05").style.backgroundColor = "gray";
				}
			} else if ($("t05").innerHTML[34] == "3") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
				$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx3").innerHTML) <= 0) {
					$("t05").innerHTML = "";
					$("t05").style.backgroundColor = "gray";
				}
			} else if ($("t05").innerHTML[34] == "4") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
				$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx4").innerHTML) <= 0) {
					$("t05").innerHTML = "";
					$("t05").style.backgroundColor = "gray";
				}
			} else if ($("t05").innerHTML[34] == "5") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
				$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx5").innerHTML) <= 0) {
					$("t05").innerHTML = "";
					$("t05").style.backgroundColor = "gray";
				}
			}
		}
	}
}
function c06(){
	if($("t01").innerHTML.length<10&&$("t02").innerHTML.length<10&&$("t07").innerHTML.length<10&&$("t11").innerHTML.length<10&&$("t12").innerHTML.length<10&&($("t01").style.backgroundColor!=""||$("t07").style.backgroundColor!=""||$("t11").style.backgroundColor!="")) {
		if ($("t06").style.backgroundColor == "") {
			if (arr2[0] == 11) {
				$("t06").style.backgroundColor = "black";
				$("t06").style.color = "white";
				$("t06").innerHTML = guai1;
			} else if (arr2[0] == 12) {
				$("t06").style.backgroundColor = "black";
				$("t06").style.color = "white";
				$("t06").innerHTML = guai2;
			} else if (arr2[0] == 13) {
				$("t06").style.backgroundColor = "black";
				$("t06").style.color = "white";
				$("t06").innerHTML = guai3;
			} else if (arr2[0] == 14) {
				$("t06").style.backgroundColor = "black";
				$("t06").style.color = "white";
				$("t06").innerHTML = guai4;
			} else if (arr2[0] == 15) {
				$("t06").style.backgroundColor = "black";
				$("t06").style.color = "white";
				$("t06").innerHTML = guai5;
			} else if (arr2[0] == 1) {
				$("t06").style.backgroundColor = "red";
				$("t06").innerHTML = "血瓶";
			} else if (arr2[0] == 2) {
				$("t06").style.backgroundColor = "blue";
				$("t06").innerHTML = "蓝瓶";
			} else if (arr2[0] == 3) {
				$("t06").style.backgroundColor = "#00ff00";
				$("t06").innerHTML = "装备";
			} else if (arr2[0] == 4) {
				$("t06").style.backgroundColor = "#ff00ff";
				$("t06").innerHTML = "卷轴";
			} else if (arr2[0] == 5) {
				$("t06").style.backgroundColor = "#33ffff";
				$("t06").innerHTML = "探索点";
			} else if (arr2[0] == 6) {
				$("t06").style.backgroundColor = "yellow";
				$("t06").innerHTML = "金币";
			} else if (arr2[0] == 7) {
				$("t06").style.backgroundColor = "#ff7600";
				$("t06").innerHTML = "钥匙";
			} else if (arr2[0] == 8) {
				$("t06").style.backgroundColor = "#888";
				$("t06").style.color = "white";
				$("t06").innerHTML = "门";
				$("t06").disable = "true";
			} else if (arr2[0] == 9) {
				$("t06").style.backgroundColor = "orange";
				$("t06").innerHTML = "攻击力";
			} else if (arr2[0] == 10) {
				$("t06").style.backgroundColor = "purple";
				$("t06").innerHTML = "魔力";
			}
		} else {
			if ($("t06").innerHTML == "血瓶") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
				$("t06").innerHTML = "";
				$("t06").style.backgroundColor = "gray";
			}
			if ($("t06").innerHTML == "蓝瓶") {
				$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
				$("t06").innerHTML = "";
				$("t06").style.backgroundColor = "gray";
			}
			if ($("t06").innerHTML == "金币") {
				$("t06").innerHTML = "";
				$("t06").style.backgroundColor = "gray";
			}
			if ($("t06").innerHTML == "探索点") {
				$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
				$("t06").innerHTML = "";
				$("t06").style.backgroundColor = "gray";
			}
			if ($("t06").innerHTML == "攻击力") {
				$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
				$("t06").innerHTML = "";
				$("t06").style.backgroundColor = "gray";
			}
			if ($("t06").innerHTML == "魔力") {
				$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
				$("t06").innerHTML = "";
				$("t06").style.backgroundColor = "gray";
			}
			if ($("t06").innerHTML == "钥匙") {
				$("key").innerHTML = 1;
				$("t06").innerHTML = "";
				$("t06").style.backgroundColor = "gray";
			}
			if ($("t06").innerHTML == "门") {
				if ($("key").innerHTML == 1) {
					restart();
				}
			}
			if ($("t06").innerHTML == "卷轴") {
				$("t06").innerHTML = "";
				$("t06").style.backgroundColor = "gray";
			}
			if ($("t06").innerHTML == "装备") {
				$("t06").innerHTML = "";
				$("t06").style.backgroundColor = "gray";
			} else if ($("t06").innerHTML[34] == "1") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
				$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx1").innerHTML) <= 0) {
					$("t06").innerHTML = "";
					$("t06").style.backgroundColor = "gray";
				}
			} else if ($("t06").innerHTML[34] == "2") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
				$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx2").innerHTML) <= 0) {
					$("t06").innerHTML = "";
					$("t06").style.backgroundColor = "gray";
				}
			} else if ($("t06").innerHTML[34] == "3") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
				$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx3").innerHTML) <= 0) {
					$("t06").innerHTML = "";
					$("t06").style.backgroundColor = "gray";
				}
			} else if ($("t06").innerHTML[34] == "4") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
				$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx4").innerHTML) <= 0) {
					$("t06").innerHTML = "";
					$("t06").style.backgroundColor = "gray";
				}
			} else if ($("t06").innerHTML[34] == "5") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
				$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx5").innerHTML) <= 0) {
					$("t06").innerHTML = "";
					$("t06").style.backgroundColor = "gray";
				}
			}
		}
	}
}
function c07(){
	if($("t01").innerHTML.length<10&&$("t02").innerHTML.length<10&&$("t03").innerHTML.length<10&&$("t06").innerHTML.length<10&&$("t08").innerHTML.length<10&&$("t11").innerHTML.length<10&&$("t12").innerHTML.length<10&&$("t13").innerHTML.length<10&&($("t02").style.backgroundColor!=""||$("t06").style.backgroundColor!=""||$("t08").style.backgroundColor!=""||$("t12").style.backgroundColor!="")) {
		if ($("t07").style.backgroundColor == "") {
			if (arr2[1] == 11) {
				$("t07").style.backgroundColor = "black";
				$("t07").style.color = "white";
				$("t07").innerHTML = guai1;
			} else if (arr2[1] == 12) {
				$("t07").style.backgroundColor = "black";
				$("t07").style.color = "white";
				$("t07").innerHTML = guai2;
			} else if (arr2[1] == 13) {
				$("t07").style.backgroundColor = "black";
				$("t07").style.color = "white";
				$("t07").innerHTML = guai3;
			} else if (arr2[1] == 14) {
				$("t07").style.backgroundColor = "black";
				$("t07").style.color = "white";
				$("t07").innerHTML = guai4;
			} else if (arr2[1] == 15) {
				$("t07").style.backgroundColor = "black";
				$("t07").style.color = "white";
				$("t07").innerHTML = guai5;
			} else if (arr2[1] == 1) {
				$("t07").style.backgroundColor = "red";
				$("t07").innerHTML = "血瓶";
			} else if (arr2[1] == 2) {
				$("t07").style.backgroundColor = "blue";
				$("t07").innerHTML = "蓝瓶";
			} else if (arr2[1] == 3) {
				$("t07").style.backgroundColor = "#00ff00";
				$("t07").innerHTML = "装备";
			} else if (arr2[1] == 4) {
				$("t07").style.backgroundColor = "#ff00ff";
				$("t07").innerHTML = "卷轴";
			} else if (arr2[1] == 5) {
				$("t07").style.backgroundColor = "#33ffff";
				$("t07").innerHTML = "探索点";
			} else if (arr2[1] == 6) {
				$("t07").style.backgroundColor = "yellow";
				$("t07").innerHTML = "金币";
			} else if (arr2[1] == 7) {
				$("t07").style.backgroundColor = "#ff7600";
				$("t07").innerHTML = "钥匙";
			} else if (arr2[1] == 8) {
				$("t07").style.backgroundColor = "#888";
				$("t07").style.color = "white";
				$("t07").innerHTML = "门";
				$("t07").disable = "true";
			} else if (arr2[1] == 9) {
				$("t07").style.backgroundColor = "orange";
				$("t07").innerHTML = "攻击力";
			} else if (arr2[1] == 10) {
				$("t07").style.backgroundColor = "purple";
				$("t07").innerHTML = "魔力";
			}
		} else {
			if ($("t07").innerHTML == "血瓶") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
				$("t07").innerHTML = "";
				$("t07").style.backgroundColor = "gray";
			}
			if ($("t07").innerHTML == "蓝瓶") {
				$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
				$("t07").innerHTML = "";
				$("t07").style.backgroundColor = "gray";
			}
			if ($("t07").innerHTML == "金币") {
				$("t07").innerHTML = "";
				$("t07").style.backgroundColor = "gray";
			}
			if ($("t07").innerHTML == "探索点") {
				$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
				$("t07").innerHTML = "";
				$("t07").style.backgroundColor = "gray";
			}
			if ($("t07").innerHTML == "攻击力") {
				$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
				$("t07").innerHTML = "";
				$("t07").style.backgroundColor = "gray";
			}
			if ($("t07").innerHTML == "魔力") {
				$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
				$("t07").innerHTML = "";
				$("t07").style.backgroundColor = "gray";
			}
			if ($("t07").innerHTML == "钥匙") {
				$("key").innerHTML = 1;
				$("t07").innerHTML = "";
				$("t07").style.backgroundColor = "gray";
			}
			if ($("t07").innerHTML == "门") {
				if ($("key").innerHTML == 1) {
					restart();
				}
			}
			if ($("t07").innerHTML == "卷轴") {
				$("t07").innerHTML = "";
				$("t07").style.backgroundColor = "gray";
			}
			if ($("t07").innerHTML == "装备") {
				$("t07").innerHTML = "";
				$("t07").style.backgroundColor = "gray";
			} else if ($("t07").innerHTML[34] == "1") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
				$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx1").innerHTML) <= 0) {
					$("t07").innerHTML = "";
					$("t07").style.backgroundColor = "gray";
				}
			} else if ($("t07").innerHTML[34] == "2") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
				$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx2").innerHTML) <= 0) {
					$("t07").innerHTML = "";
					$("t07").style.backgroundColor = "gray";
				}
			} else if ($("t07").innerHTML[34] == "3") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
				$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx3").innerHTML) <= 0) {
					$("t07").innerHTML = "";
					$("t07").style.backgroundColor = "gray";
				}
			} else if ($("t07").innerHTML[34] == "4") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
				$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx4").innerHTML) <= 0) {
					$("t07").innerHTML = "";
					$("t07").style.backgroundColor = "gray";
				}
			} else if ($("t07").innerHTML[34] == "5") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
				$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx5").innerHTML) <= 0) {
					$("t07").innerHTML = "";
					$("t07").style.backgroundColor = "gray";
				}
			}
		}
	}
}
function c08(){
	if($("t04").innerHTML.length<10&&$("t02").innerHTML.length<10&&$("t03").innerHTML.length<10&&$("t07").innerHTML.length<10&&$("t09").innerHTML.length<10&&$("t14").innerHTML.length<10&&$("t12").innerHTML.length<10&&$("t13").innerHTML.length<10&&($("t03").style.backgroundColor!=""||$("t07").style.backgroundColor!=""||$("t09").style.backgroundColor!=""||$("t13").style.backgroundColor!="")) {
		if ($("t08").style.backgroundColor == "") {
			if (arr2[2] == 11) {
				$("t08").style.backgroundColor = "black";
				$("t08").style.color = "white";
				$("t08").innerHTML = guai1;
			} else if (arr2[2] == 12) {
				$("t08").style.backgroundColor = "black";
				$("t08").style.color = "white";
				$("t08").innerHTML = guai2;
			} else if (arr2[2] == 13) {
				$("t08").style.backgroundColor = "black";
				$("t08").style.color = "white";
				$("t08").innerHTML = guai3;
			} else if (arr2[2] == 14) {
				$("t08").style.backgroundColor = "black";
				$("t08").style.color = "white";
				$("t08").innerHTML = guai4;
			} else if (arr2[2] == 15) {
				$("t08").style.backgroundColor = "black";
				$("t08").style.color = "white";
				$("t08").innerHTML = guai5;
			} else if (arr2[2] == 1) {
				$("t08").style.backgroundColor = "red";
				$("t08").innerHTML = "血瓶";
			} else if (arr2[2] == 2) {
				$("t08").style.backgroundColor = "blue";
				$("t08").innerHTML = "蓝瓶";
			} else if (arr2[2] == 3) {
				$("t08").style.backgroundColor = "#00ff00";
				$("t08").innerHTML = "装备";
			} else if (arr2[2] == 4) {
				$("t08").style.backgroundColor = "#ff00ff";
				$("t08").innerHTML = "卷轴";
			} else if (arr2[2] == 5) {
				$("t08").style.backgroundColor = "#33ffff";
				$("t08").innerHTML = "探索点";
			} else if (arr2[2] == 6) {
				$("t08").style.backgroundColor = "yellow";
				$("t08").innerHTML = "金币";
			} else if (arr2[2] == 7) {
				$("t08").style.backgroundColor = "#ff7600";
				$("t08").innerHTML = "钥匙";
			} else if (arr2[2] == 8) {
				$("t08").style.backgroundColor = "#888";
				$("t08").style.color = "white";
				$("t08").innerHTML = "门";
				$("t08").disable = "true";
			} else if (arr2[2] == 9) {
				$("t08").style.backgroundColor = "orange";
				$("t08").innerHTML = "攻击力";
			} else if (arr2[2] == 10) {
				$("t08").style.backgroundColor = "purple";
				$("t08").innerHTML = "魔力";
			}
		} else {
			if ($("t08").innerHTML == "血瓶") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
				$("t08").innerHTML = "";
				$("t08").style.backgroundColor = "gray";
			}
			if ($("t08").innerHTML == "蓝瓶") {
				$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
				$("t08").innerHTML = "";
				$("t08").style.backgroundColor = "gray";
			}
			if ($("t08").innerHTML == "金币") {
				$("t08").innerHTML = "";
				$("t08").style.backgroundColor = "gray";
			}
			if ($("t08").innerHTML == "探索点") {
				$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
				$("t08").innerHTML = "";
				$("t08").style.backgroundColor = "gray";
			}
			if ($("t08").innerHTML == "攻击力") {
				$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
				$("t08").innerHTML = "";
				$("t08").style.backgroundColor = "gray";
			}
			if ($("t08").innerHTML == "魔力") {
				$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
				$("t08").innerHTML = "";
				$("t08").style.backgroundColor = "gray";
			}
			if ($("t08").innerHTML == "钥匙") {
				$("key").innerHTML = 1;
				$("t08").innerHTML = "";
				$("t08").style.backgroundColor = "gray";
			}
			if ($("t08").innerHTML == "卷轴") {
				$("t08").innerHTML = "";
				$("t08").style.backgroundColor = "gray";
			}
			if ($("t08").innerHTML == "门") {
				if ($("key").innerHTML == 1) {
					restart();
				}
			}
			if ($("t08").innerHTML == "装备") {
				$("t08").innerHTML = "";
				$("t08").style.backgroundColor = "gray";
			} else if ($("t08").innerHTML[34] == "1") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
				$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx1").innerHTML) <= 0) {
					$("t08").innerHTML = "";
					$("t08").style.backgroundColor = "gray";
				}
			} else if ($("t08").innerHTML[34] == "2") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
				$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx2").innerHTML) <= 0) {
					$("t08").innerHTML = "";
					$("t08").style.backgroundColor = "gray";
				}
			} else if ($("t08").innerHTML[34] == "3") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
				$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx3").innerHTML) <= 0) {
					$("t08").innerHTML = "";
					$("t08").style.backgroundColor = "gray";
				}
			} else if ($("t08").innerHTML[34] == "4") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
				$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx4").innerHTML) <= 0) {
					$("t08").innerHTML = "";
					$("t08").style.backgroundColor = "gray";
				}
			} else if ($("t08").innerHTML[34] == "5") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
				$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx5").innerHTML) <= 0) {
					$("t08").innerHTML = "";
					$("t08").style.backgroundColor = "gray";
				}
			}
		}
	}
}
function c09(){
	if($("t03").innerHTML.length<10&&$("t04").innerHTML.length<10&&$("t05").innerHTML.length<10&&$("t08").innerHTML.length<10&&$("t10").innerHTML.length<10&&$("t13").innerHTML.length<10&&$("t14").innerHTML.length<10&&$("t15").innerHTML.length<10&&($("t04").style.backgroundColor!=""||$("t08").style.backgroundColor!=""||$("t10").style.backgroundColor!=""||$("t14").style.backgroundColor!="")) {
		if ($("t09").style.backgroundColor == "") {
			if (arr2[3] == 11) {
				$("t09").style.backgroundColor = "black";
				$("t09").style.color = "white";
				$("t09").innerHTML = guai1;
			} else if (arr2[3] == 12) {
				$("t09").style.backgroundColor = "black";
				$("t09").style.color = "white";
				$("t09").innerHTML = guai2;
			} else if (arr2[3] == 13) {
				$("t09").style.backgroundColor = "black";
				$("t09").style.color = "white";
				$("t09").innerHTML = guai3;
			} else if (arr2[3] == 14) {
				$("t09").style.backgroundColor = "black";
				$("t09").style.color = "white";
				$("t09").innerHTML = guai4;
			} else if (arr2[3] == 15) {
				$("t09").style.backgroundColor = "black";
				$("t09").style.color = "white";
				$("t09").innerHTML = guai5;
			} else if (arr2[3] == 1) {
				$("t09").style.backgroundColor = "red";
				$("t09").innerHTML = "血瓶";
			} else if (arr2[3] == 2) {
				$("t09").style.backgroundColor = "blue";
				$("t09").innerHTML = "蓝瓶";
			} else if (arr2[3] == 3) {
				$("t09").style.backgroundColor = "#00ff00";
				$("t09").innerHTML = "装备";
			} else if (arr2[3] == 4) {
				$("t09").style.backgroundColor = "#ff00ff";
				$("t09").innerHTML = "卷轴";
			} else if (arr2[3] == 5) {
				$("t09").style.backgroundColor = "#33ffff";
				$("t09").innerHTML = "探索点";
			} else if (arr2[3] == 6) {
				$("t09").style.backgroundColor = "yellow";
				$("t09").innerHTML = "金币";
			} else if (arr2[3] == 7) {
				$("t09").style.backgroundColor = "#ff7600";
				$("t09").innerHTML = "钥匙";
			} else if (arr2[3] == 8) {
				$("t09").style.backgroundColor = "#888";
				$("t09").style.color = "white";
				$("t09").innerHTML = "门";
				$("t09").disable = "true";
			} else if (arr2[3] == 9) {
				$("t09").style.backgroundColor = "orange";
				$("t09").innerHTML = "攻击力";
			} else if (arr2[3] == 10) {
				$("t09").style.backgroundColor = "purple";
				$("t09").innerHTML = "魔力";
			}
		} else {
			if ($("t09").innerHTML == "血瓶") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
				$("t09").innerHTML = "";
				$("t09").style.backgroundColor = "gray";
			}
			if ($("t09").innerHTML == "蓝瓶") {
				$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
				$("t09").innerHTML = "";
				$("t09").style.backgroundColor = "gray";
			}
			if ($("t09").innerHTML == "金币") {
				$("t09").innerHTML = "";
				$("t09").style.backgroundColor = "gray";
			}
			if ($("t09").innerHTML == "探索点") {
				$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
				$("t09").innerHTML = "";
				$("t09").style.backgroundColor = "gray";
			}
			if ($("t09").innerHTML == "攻击力") {
				$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
				$("t09").innerHTML = "";
				$("t09").style.backgroundColor = "gray";
			}
			if ($("t09").innerHTML == "魔力") {
				$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
				$("t09").innerHTML = "";
				$("t09").style.backgroundColor = "gray";
			}
			if ($("t09").innerHTML == "钥匙") {
				$("key").innerHTML = 1;
				$("t09").innerHTML = "";
				$("t09").style.backgroundColor = "gray";
			}
			if ($("t09").innerHTML == "门") {
				if ($("key").innerHTML == 1) {
					restart();
				}
			}
			if ($("t09").innerHTML == "卷轴") {
				$("t09").innerHTML = "";
				$("t09").style.backgroundColor = "gray";
			}
			if ($("t09").innerHTML == "装备") {
				$("t09").innerHTML = "";
				$("t09").style.backgroundColor = "gray";
			} else if ($("t09").innerHTML[34] == "1") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
				$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx1").innerHTML) <= 0) {
					$("t09").innerHTML = "";
					$("t09").style.backgroundColor = "gray";
				}
			} else if ($("t09").innerHTML[34] == "2") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
				$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx2").innerHTML) <= 0) {
					$("t09").innerHTML = "";
					$("t09").style.backgroundColor = "gray";
				}
			} else if ($("t09").innerHTML[34] == "3") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
				$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx3").innerHTML) <= 0) {
					$("t09").innerHTML = "";
					$("t09").style.backgroundColor = "gray";
				}
			} else if ($("t09").innerHTML[34] == "4") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
				$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx4").innerHTML) <= 0) {
					$("t09").innerHTML = "";
					$("t09").style.backgroundColor = "gray";
				}
			} else if ($("t09").innerHTML[34] == "5") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
				$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx5").innerHTML) <= 0) {
					$("t09").innerHTML = "";
					$("t09").style.backgroundColor = "gray";
				}
			}
		}
	}
}
function c10(){
	if($("t04").innerHTML.length<10&&$("t05").innerHTML.length<10&&$("t09").innerHTML.length<10&&$("t14").innerHTML.length<10&&$("t15").innerHTML.length<10&&($("t05").style.backgroundColor!=""||$("t09").style.backgroundColor!=""||$("t15").style.backgroundColor!="")) {
		if ($("t10").style.backgroundColor == "") {
			if (arr2[4] == 11) {
				$("t10").style.backgroundColor = "black";
				$("t10").style.color = "white";
				$("t10").innerHTML = guai1;
			} else if (arr2[4] == 12) {
				$("t10").style.backgroundColor = "black";
				$("t10").style.color = "white";
				$("t10").innerHTML = guai2;
			} else if (arr2[4] == 13) {
				$("t10").style.backgroundColor = "black";
				$("t10").style.color = "white";
				$("t10").innerHTML = guai3;
			} else if (arr2[4] == 14) {
				$("t10").style.backgroundColor = "black";
				$("t10").style.color = "white";
				$("t10").innerHTML = guai4;
			} else if (arr2[4] == 15) {
				$("t10").style.backgroundColor = "black";
				$("t10").style.color = "white";
				$("t10").innerHTML = guai5;
			} else if (arr2[4] == 1) {
				$("t10").style.backgroundColor = "red";
				$("t10").innerHTML = "血瓶";
			} else if (arr2[4] == 2) {
				$("t10").style.backgroundColor = "blue";
				$("t10").innerHTML = "蓝瓶";
			} else if (arr2[4] == 3) {
				$("t10").style.backgroundColor = "#00ff00";
				$("t10").innerHTML = "装备";
			} else if (arr2[4] == 4) {
				$("t10").style.backgroundColor = "#ff00ff";
				$("t10").innerHTML = "卷轴";
			} else if (arr2[4] == 5) {
				$("t10").style.backgroundColor = "#33ffff";
				$("t10").innerHTML = "探索点";
			} else if (arr2[4] == 6) {
				$("t10").style.backgroundColor = "yellow";
				$("t10").innerHTML = "金币";
			} else if (arr2[4] == 7) {
				$("t10").style.backgroundColor = "#ff7600";
				$("t10").innerHTML = "钥匙";
			} else if (arr2[4] == 8) {
				$("t10").style.backgroundColor = "#888";
				$("t10").style.color = "white";
				$("t10").innerHTML = "门";
				$("t10").disable = "true";
			} else if (arr2[4] == 9) {
				$("t10").style.backgroundColor = "orange";
				$("t10").innerHTML = "攻击力";
			} else if (arr2[4] == 10) {
				$("t10").style.backgroundColor = "purple";
				$("t10").innerHTML = "魔力";
			}
		} else {
			if ($("t10").innerHTML == "血瓶") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
				$("t10").innerHTML = "";
				$("t10").style.backgroundColor = "gray";
			}
			if ($("t10").innerHTML == "蓝瓶") {
				$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
				$("t10").innerHTML = "";
				$("t10").style.backgroundColor = "gray";
			}
			if ($("t10").innerHTML == "金币") {
				$("t10").innerHTML = "";
				$("t10").style.backgroundColor = "gray";
			}
			if ($("t10").innerHTML == "探索点") {
				$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
				$("t10").innerHTML = "";
				$("t10").style.backgroundColor = "gray";
			}
			if ($("t10").innerHTML == "攻击力") {
				$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
				$("t10").innerHTML = "";
				$("t10").style.backgroundColor = "gray";
			}
			if ($("t10").innerHTML == "魔力") {
				$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
				$("t10").innerHTML = "";
				$("t10").style.backgroundColor = "gray";
			}
			if ($("t10").innerHTML == "门") {
				if ($("key").innerHTML == 1) {
					restart();
				}
			}
			if ($("t10").innerHTML == "钥匙") {
				$("key").innerHTML = 1;
				$("t10").innerHTML = "";
				$("t10").style.backgroundColor = "gray";
			}
			if ($("t10").innerHTML == "卷轴") {
				$("t10").innerHTML = "";
				$("t10").style.backgroundColor = "gray";
			}
			if ($("t10").innerHTML == "装备") {
				$("t10").innerHTML = "";
				$("t10").style.backgroundColor = "gray";
			} else if ($("t10").innerHTML[34] == "1") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
				$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx1").innerHTML) <= 0) {
					$("t10").innerHTML = "";
					$("t10").style.backgroundColor = "gray";
				}
			} else if ($("t10").innerHTML[34] == "2") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
				$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx2").innerHTML) <= 0) {
					$("t10").innerHTML = "";
					$("t10").style.backgroundColor = "gray";
				}
			} else if ($("t10").innerHTML[34] == "3") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
				$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx3").innerHTML) <= 0) {
					$("t10").innerHTML = "";
					$("t10").style.backgroundColor = "gray";
				}
			} else if ($("t10").innerHTML[34] == "4") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
				$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx4").innerHTML) <= 0) {
					$("t10").innerHTML = "";
					$("t10").style.backgroundColor = "gray";
				}
			} else if ($("t10").innerHTML[34] == "5") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
				$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx5").innerHTML) <= 0) {
					$("t10").innerHTML = "";
					$("t10").style.backgroundColor = "gray";
				}
			}
		}
	}
}
function c11(){
	if($("t06").innerHTML.length<10&&$("t07").innerHTML.length<10&&$("t12").innerHTML.length<10&&$("t16").innerHTML.length<10&&$("t17").innerHTML.length<10&&($("t06").style.backgroundColor!=""||$("t12").style.backgroundColor!=""||$("t16").style.backgroundColor!="")) {
		if ($("t11").style.backgroundColor == "") {
			if (arr3[0] == 11) {
				$("t11").style.backgroundColor = "black";
				$("t11").style.color = "white";
				$("t11").innerHTML = guai1;
			} else if (arr3[0] == 12) {
				$("t11").style.backgroundColor = "black";
				$("t11").style.color = "white";
				$("t11").innerHTML = guai2;
			} else if (arr3[0] == 13) {
				$("t11").style.backgroundColor = "black";
				$("t11").style.color = "white";
				$("t11").innerHTML = guai3;
			} else if (arr3[0] == 14) {
				$("t11").style.backgroundColor = "black";
				$("t11").style.color = "white";
				$("t11").innerHTML = guai4;
			} else if (arr3[0] == 15) {
				$("t11").style.backgroundColor = "black";
				$("t11").style.color = "white";
				$("t11").innerHTML = guai5;
			} else if (arr3[0] == 1) {
				$("t11").style.backgroundColor = "red";
				$("t11").innerHTML = "血瓶";
			} else if (arr3[0] == 2) {
				$("t11").style.backgroundColor = "blue";
				$("t11").innerHTML = "蓝瓶";
			} else if (arr3[0] == 3) {
				$("t11").style.backgroundColor = "#00ff00";
				$("t11").innerHTML = "装备";
			} else if (arr3[0] == 4) {
				$("t11").style.backgroundColor = "#ff00ff";
				$("t11").innerHTML = "卷轴";
			} else if (arr3[0] == 5) {
				$("t11").style.backgroundColor = "#33ffff";
				$("t11").innerHTML = "探索点";
			} else if (arr3[0] == 6) {
				$("t11").style.backgroundColor = "yellow";
				$("t11").innerHTML = "金币";
			} else if (arr3[0] == 7) {
				$("t11").style.backgroundColor = "#ff7600";
				$("t11").innerHTML = "钥匙";
			} else if (arr3[0] == 8) {
				$("t11").style.backgroundColor = "#888";
				$("t11").style.color = "white";
				$("t11").innerHTML = "门";
				$("t11").disable = "true";
			} else if (arr3[0] == 9) {
				$("t11").style.backgroundColor = "orange";
				$("t11").innerHTML = "攻击力";
			} else if (arr3[0] == 10) {
				$("t11").style.backgroundColor = "purple";
				$("t11").innerHTML = "魔力";
			}
		} else {
			if ($("t11").innerHTML == "血瓶") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
				$("t11").innerHTML = "";
				$("t11").style.backgroundColor = "gray";
			}
			if ($("t11").innerHTML == "蓝瓶") {
				$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
				$("t11").innerHTML = "";
				$("t11").style.backgroundColor = "gray";
			}
			if ($("t11").innerHTML == "金币") {
				$("t11").innerHTML = "";
				$("t11").style.backgroundColor = "gray";
			}
			if ($("t11").innerHTML == "探索点") {
				$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
				$("t11").innerHTML = "";
				$("t11").style.backgroundColor = "gray";
			}
			if ($("t11").innerHTML == "攻击力") {
				$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
				$("t11").innerHTML = "";
				$("t11").style.backgroundColor = "gray";
			}
			if ($("t11").innerHTML == "魔力") {
				$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
				$("t11").innerHTML = "";
				$("t11").style.backgroundColor = "gray";
			}
			if ($("t11").innerHTML == "钥匙") {
				$("key").innerHTML = 1;
				$("t11").innerHTML = "";
				$("t11").style.backgroundColor = "gray";
			}
			if ($("t11").innerHTML == "门") {
				if ($("key").innerHTML == 1) {
					restart();
				}
			}
			if ($("t11").innerHTML == "卷轴") {
				$("t11").innerHTML = "";
				$("t11").style.backgroundColor = "gray";
			}
			if ($("t11").innerHTML == "装备") {
				$("t11").innerHTML = "";
				$("t11").style.backgroundColor = "gray";
			} else if ($("t11").innerHTML[34] == "1") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
				$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx1").innerHTML) <= 0) {
					$("t11").innerHTML = "";
					$("t11").style.backgroundColor = "gray";
				}
			} else if ($("t11").innerHTML[34] == "2") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
				$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx2").innerHTML) <= 0) {
					$("t11").innerHTML = "";
					$("t11").style.backgroundColor = "gray";
				}
			} else if ($("t11").innerHTML[34] == "3") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
				$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx3").innerHTML) <= 0) {
					$("t11").innerHTML = "";
					$("t11").style.backgroundColor = "gray";
				}
			} else if ($("t11").innerHTML[34] == "4") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
				$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx4").innerHTML) <= 0) {
					$("t11").innerHTML = "";
					$("t11").style.backgroundColor = "gray";
				}
			} else if ($("t11").innerHTML[34] == "5") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
				$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx5").innerHTML) <= 0) {
					$("t11").innerHTML = "";
					$("t11").style.backgroundColor = "gray";
				}
			}
		}
	}
}
function c12(){
	if($("t06").innerHTML.length<10&&$("t07").innerHTML.length<10&&$("t08").innerHTML.length<10&&$("t11").innerHTML.length<10&&$("t13").innerHTML.length<10&&$("t16").innerHTML.length<10&&$("t17").innerHTML.length<10&&$("t18").innerHTML.length<10&&($("t07").style.backgroundColor!=""||$("t11").style.backgroundColor!=""||$("t13").style.backgroundColor!=""||$("t17").style.backgroundColor!="")) {
		if ($("t12").style.backgroundColor == "") {
			if (arr3[1] == 11) {
				$("t12").style.backgroundColor = "black";
				$("t12").style.color = "white";
				$("t12").innerHTML = guai1;
			} else if (arr3[1] == 12) {
				$("t12").style.backgroundColor = "black";
				$("t12").style.color = "white";
				$("t12").innerHTML = guai2;
			} else if (arr3[1] == 13) {
				$("t12").style.backgroundColor = "black";
				$("t12").style.color = "white";
				$("t12").innerHTML = guai3;
			} else if (arr3[1] == 14) {
				$("t12").style.backgroundColor = "black";
				$("t12").style.color = "white";
				$("t12").innerHTML = guai4;
			} else if (arr3[1] == 15) {
				$("t12").style.backgroundColor = "black";
				$("t12").style.color = "white";
				$("t12").innerHTML = guai5;
			} else if (arr3[1] == 1) {
				$("t12").style.backgroundColor = "red";
				$("t12").innerHTML = "血瓶";
			} else if (arr3[1] == 2) {
				$("t12").style.backgroundColor = "blue";
				$("t12").innerHTML = "蓝瓶";
			} else if (arr3[1] == 3) {
				$("t12").style.backgroundColor = "#00ff00";
				$("t12").innerHTML = "装备";
			} else if (arr3[1] == 4) {
				$("t12").style.backgroundColor = "#ff00ff";
				$("t12").innerHTML = "卷轴";
			} else if (arr3[1] == 5) {
				$("t12").style.backgroundColor = "#33ffff";
				$("t12").innerHTML = "探索点";
			} else if (arr3[1] == 6) {
				$("t12").style.backgroundColor = "yellow";
				$("t12").innerHTML = "金币";
			} else if (arr3[1] == 7) {
				$("t12").style.backgroundColor = "#ff7600";
				$("t12").innerHTML = "钥匙";
			} else if (arr3[1] == 8) {
				$("t12").style.backgroundColor = "#888";
				$("t12").style.color = "white";
				$("t12").innerHTML = "门";
				$("t12").disable = "true";
			} else if (arr3[1] == 9) {
				$("t12").style.backgroundColor = "orange";
				$("t12").innerHTML = "攻击力";
			} else if (arr3[1] == 10) {
				$("t12").style.backgroundColor = "purple";
				$("t12").innerHTML = "魔力";
			}
		} else {
			if ($("t12").innerHTML == "血瓶") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
				$("t12").innerHTML = "";
				$("t12").style.backgroundColor = "gray";
			}
			if ($("t12").innerHTML == "蓝瓶") {
				$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
				$("t12").innerHTML = "";
				$("t12").style.backgroundColor = "gray";
			}
			if ($("t12").innerHTML == "金币") {
				$("t12").innerHTML = "";
				$("t12").style.backgroundColor = "gray";
			}
			if ($("t12").innerHTML == "探索点") {
				$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
				$("t12").innerHTML = "";
				$("t12").style.backgroundColor = "gray";
			}
			if ($("t12").innerHTML == "攻击力") {
				$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
				$("t12").innerHTML = "";
				$("t12").style.backgroundColor = "gray";
			}
			if ($("t12").innerHTML == "魔力") {
				$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
				$("t12").innerHTML = "";
				$("t12").style.backgroundColor = "gray";
			}
			if ($("t12").innerHTML == "钥匙") {
				$("key").innerHTML = 1;
				$("t12").innerHTML = "";
				$("t12").style.backgroundColor = "gray";
			}
			if ($("t12").innerHTML == "门") {
				if ($("key").innerHTML == 1) {
					restart();
				}
			}
			if ($("t12").innerHTML == "卷轴") {
				$("t12").innerHTML = "";
				$("t12").style.backgroundColor = "gray";
			}
			if ($("t12").innerHTML == "装备") {
				$("t12").innerHTML = "";
				$("t12").style.backgroundColor = "gray";
			} else if ($("t12").innerHTML[34] == "1") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
				$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx1").innerHTML) <= 0) {
					$("t12").innerHTML = "";
					$("t12").style.backgroundColor = "gray";
				}
			} else if ($("t12").innerHTML[34] == "2") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
				$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx2").innerHTML) <= 0) {
					$("t12").innerHTML = "";
					$("t12").style.backgroundColor = "gray";
				}
			} else if ($("t12").innerHTML[34] == "3") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
				$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx3").innerHTML) <= 0) {
					$("t12").innerHTML = "";
					$("t12").style.backgroundColor = "gray";
				}
			} else if ($("t12").innerHTML[34] == "4") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
				$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx4").innerHTML) <= 0) {
					$("t12").innerHTML = "";
					$("t12").style.backgroundColor = "gray";
				}
			} else if ($("t12").innerHTML[34] == "5") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
				$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx5").innerHTML) <= 0) {
					$("t12").innerHTML = "";
					$("t12").style.backgroundColor = "gray";
				}
			}
		}
	}
}
function c13(){
	if($("t07").innerHTML.length<10&&$("t08").innerHTML.length<10&&$("t09").innerHTML.length<10&&$("t12").innerHTML.length<10&&$("t14").innerHTML.length<10&&$("t17").innerHTML.length<10&&$("t18").innerHTML.length<10&&$("t19").innerHTML.length<10&&($("t08").style.backgroundColor!=""||$("t12").style.backgroundColor!=""||$("t14").style.backgroundColor!=""||$("t18").style.backgroundColor!="")) {
		if ($("t13").style.backgroundColor == "") {
			if (arr3[2] == 11) {
				$("t13").style.backgroundColor = "black";
				$("t13").style.color = "white";
				$("t13").innerHTML = guai1;
			} else if (arr3[2] == 12) {
				$("t13").style.backgroundColor = "black";
				$("t13").style.color = "white";
				$("t13").innerHTML = guai2;
			} else if (arr3[2] == 13) {
				$("t13").style.backgroundColor = "black";
				$("t13").style.color = "white";
				$("t13").innerHTML = guai3;
			} else if (arr3[2] == 14) {
				$("t13").style.backgroundColor = "black";
				$("t13").style.color = "white";
				$("t13").innerHTML = guai4;
			} else if (arr3[2] == 15) {
				$("t13").style.backgroundColor = "black";
				$("t13").style.color = "white";
				$("t13").innerHTML = guai5;
			} else if (arr3[2] == 1) {
				$("t13").style.backgroundColor = "red";
				$("t13").innerHTML = "血瓶";
			} else if (arr3[2] == 2) {
				$("t13").style.backgroundColor = "blue";
				$("t13").innerHTML = "蓝瓶";
			} else if (arr3[2] == 3) {
				$("t13").style.backgroundColor = "#00ff00";
				$("t13").innerHTML = "装备";
			} else if (arr3[2] == 4) {
				$("t13").style.backgroundColor = "#ff00ff";
				$("t13").innerHTML = "卷轴";
			} else if (arr3[2] == 5) {
				$("t13").style.backgroundColor = "#33ffff";
				$("t13").innerHTML = "探索点";
			} else if (arr3[2] == 6) {
				$("t13").style.backgroundColor = "yellow";
				$("t13").innerHTML = "金币";
			} else if (arr3[2] == 7) {
				$("t13").style.backgroundColor = "#ff7600";
				$("t13").innerHTML = "钥匙";
			} else if (arr3[2] == 8) {
				$("t13").style.backgroundColor = "#888";
				$("t13").style.color = "white";
				$("t13").innerHTML = "门";
				$("t13").disable = "true";
			} else if (arr3[2] == 9) {
				$("t13").style.backgroundColor = "orange";
				$("t13").innerHTML = "攻击力";
			} else if (arr3[2] == 10) {
				$("t13").style.backgroundColor = "purple";
				$("t13").innerHTML = "魔力";
			}
		} else {
			if ($("t13").innerHTML == "血瓶") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
				$("t13").innerHTML = "";
				$("t13").style.backgroundColor = "gray";
			}
			if ($("t13").innerHTML == "蓝瓶") {
				$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
				$("t13").innerHTML = "";
				$("t13").style.backgroundColor = "gray";
			}
			if ($("t13").innerHTML == "金币") {
				$("t13").innerHTML = "";
				$("t13").style.backgroundColor = "gray";
			}
			if ($("t13").innerHTML == "探索点") {
				$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
				$("t13").innerHTML = "";
				$("t13").style.backgroundColor = "gray";
			}
			if ($("t13").innerHTML == "攻击力") {
				$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
				$("t13").innerHTML = "";
				$("t13").style.backgroundColor = "gray";
			}
			if ($("t13").innerHTML == "魔力") {
				$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
				$("t13").innerHTML = "";
				$("t13").style.backgroundColor = "gray";
			}
			if ($("t13").innerHTML == "钥匙") {
				$("key").innerHTML = 1;
				$("t13").innerHTML = "";
				$("t13").style.backgroundColor = "gray";
			}
			if ($("t13").innerHTML == "门") {
				if ($("key").innerHTML == 1) {
					restart();
				}
			}
			if ($("t13").innerHTML == "卷轴") {
				$("t13").innerHTML = "";
				$("t13").style.backgroundColor = "gray";
			}
			if ($("t13").innerHTML == "装备") {
				$("t13").innerHTML = "";
				$("t13").style.backgroundColor = "gray";
			} else if ($("t13").innerHTML[34] == "1") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
				$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx1").innerHTML) <= 0) {
					$("t13").innerHTML = "";
					$("t13").style.backgroundColor = "gray";
				}
			} else if ($("t13").innerHTML[34] == "2") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
				$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx2").innerHTML) <= 0) {
					$("t13").innerHTML = "";
					$("t13").style.backgroundColor = "gray";
				}
			} else if ($("t13").innerHTML[34] == "3") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
				$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx3").innerHTML) <= 0) {
					$("t13").innerHTML = "";
					$("t13").style.backgroundColor = "gray";
				}
			} else if ($("t13").innerHTML[34] == "4") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
				$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx4").innerHTML) <= 0) {
					$("t13").innerHTML = "";
					$("t13").style.backgroundColor = "gray";
				}
			} else if ($("t13").innerHTML[34] == "5") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
				$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx5").innerHTML) <= 0) {
					$("t13").innerHTML = "";
					$("t13").style.backgroundColor = "gray";
				}
			}
		}
	}
}
function c14(){
	if($("t08").innerHTML.length<10&&$("t09").innerHTML.length<10&&$("t10").innerHTML.length<10&&$("t13").innerHTML.length<10&&$("t15").innerHTML.length<10&&$("t18").innerHTML.length<10&&$("t19").innerHTML.length<10&&$("t20").innerHTML.length<10&&($("t09").style.backgroundColor!=""||$("t13").style.backgroundColor!=""||$("t15").style.backgroundColor!=""||$("t19").style.backgroundColor!="")) {
		if ($("t14").style.backgroundColor == "") {
			if (arr3[3] == 11) {
				$("t14").style.backgroundColor = "black";
				$("t14").style.color = "white";
				$("t14").innerHTML = guai1;
			} else if (arr3[3] == 12) {
				$("t14").style.backgroundColor = "black";
				$("t14").style.color = "white";
				$("t14").innerHTML = guai2;
			} else if (arr3[3] == 13) {
				$("t14").style.backgroundColor = "black";
				$("t14").style.color = "white";
				$("t14").innerHTML = guai3;
			} else if (arr3[3] == 14) {
				$("t14").style.backgroundColor = "black";
				$("t14").style.color = "white";
				$("t14").innerHTML = guai4;
			} else if (arr3[3] == 15) {
				$("t14").style.backgroundColor = "black";
				$("t14").style.color = "white";
				$("t14").innerHTML = guai5;
			} else if (arr3[3] == 1) {
				$("t14").style.backgroundColor = "red";
				$("t14").innerHTML = "血瓶";
			} else if (arr3[3] == 2) {
				$("t14").style.backgroundColor = "blue";
				$("t14").innerHTML = "蓝瓶";
			} else if (arr3[3] == 3) {
				$("t14").style.backgroundColor = "#00ff00";
				$("t14").innerHTML = "装备";
			} else if (arr3[3] == 4) {
				$("t14").style.backgroundColor = "#ff00ff";
				$("t14").innerHTML = "卷轴";
			} else if (arr3[3] == 5) {
				$("t14").style.backgroundColor = "#33ffff";
				$("t14").innerHTML = "探索点";
			} else if (arr3[3] == 6) {
				$("t14").style.backgroundColor = "yellow";
				$("t14").innerHTML = "金币";
			} else if (arr3[3] == 7) {
				$("t14").style.backgroundColor = "#ff7600";
				$("t14").innerHTML = "钥匙";
			} else if (arr3[3] == 8) {
				$("t14").style.backgroundColor = "#888";
				$("t14").style.color = "white";
				$("t14").innerHTML = "门";
				$("t14").disable = "true";
			} else if (arr3[3] == 9) {
				$("t14").style.backgroundColor = "orange";
				$("t14").innerHTML = "攻击力";
			} else if (arr3[3] == 10) {
				$("t14").style.backgroundColor = "purple";
				$("t14").innerHTML = "魔力";
			}
		} else {
			if ($("t14").innerHTML == "血瓶") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
				$("t14").innerHTML = "";
				$("t14").style.backgroundColor = "gray";
			}
			if ($("t14").innerHTML == "蓝瓶") {
				$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
				$("t14").innerHTML = "";
				$("t14").style.backgroundColor = "gray";
			}
			if ($("t14").innerHTML == "金币") {
				$("t14").innerHTML = "";
				$("t14").style.backgroundColor = "gray";
			}
			if ($("t14").innerHTML == "探索点") {
				$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
				$("t14").innerHTML = "";
				$("t14").style.backgroundColor = "gray";
			}
			if ($("t14").innerHTML == "攻击力") {
				$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
				$("t14").innerHTML = "";
				$("t14").style.backgroundColor = "gray";
			}
			if ($("t14").innerHTML == "魔力") {
				$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
				$("t14").innerHTML = "";
				$("t14").style.backgroundColor = "gray";
			}
			if ($("t14").innerHTML == "钥匙") {
				$("key").innerHTML = 1;
				$("t14").innerHTML = "";
				$("t14").style.backgroundColor = "gray";
			}
			if ($("t14").innerHTML == "门") {
				if ($("key").innerHTML == 1) {
					restart();
				}
			}
			if ($("t14").innerHTML == "卷轴") {
				$("t14").innerHTML = "";
				$("t14").style.backgroundColor = "gray";
			}
			if ($("t14").innerHTML == "装备") {
				$("t14").innerHTML = "";
				$("t14").style.backgroundColor = "gray";
			} else if ($("t14").innerHTML[34] == "1") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
				$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx1").innerHTML) <= 0) {
					$("t14").innerHTML = "";
					$("t14").style.backgroundColor = "gray";
				}
			} else if ($("t14").innerHTML[34] == "2") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
				$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx2").innerHTML) <= 0) {
					$("t14").innerHTML = "";
					$("t14").style.backgroundColor = "gray";
				}
			} else if ($("t14").innerHTML[34] == "3") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
				$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx3").innerHTML) <= 0) {
					$("t14").innerHTML = "";
					$("t14").style.backgroundColor = "gray";
				}
			} else if ($("t14").innerHTML[34] == "4") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
				$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx4").innerHTML) <= 0) {
					$("t14").innerHTML = "";
					$("t14").style.backgroundColor = "gray";
				}
			} else if ($("t14").innerHTML[34] == "5") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
				$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx5").innerHTML) <= 0) {
					$("t14").innerHTML = "";
					$("t14").style.backgroundColor = "gray";
				}
			}
		}
	}
}
function c15(){
	if($("t09").innerHTML.length<10&&$("t10").innerHTML.length<10&&$("t14").innerHTML.length<10&&$("t19").innerHTML.length<10&&$("t20").innerHTML.length<10&&($("t10").style.backgroundColor!=""||$("t14").style.backgroundColor!=""||$("t20").style.backgroundColor!="")) {
		if ($("t15").style.backgroundColor == "") {
			if (arr3[4] == 11) {
				$("t15").style.backgroundColor = "black";
				$("t15").style.color = "white";
				$("t15").innerHTML = guai1;
			} else if (arr3[4] == 12) {
				$("t15").style.backgroundColor = "black";
				$("t15").style.color = "white";
				$("t15").innerHTML = guai2;
			} else if (arr3[4] == 13) {
				$("t15").style.backgroundColor = "black";
				$("t15").style.color = "white";
				$("t15").innerHTML = guai3;
			} else if (arr3[4] == 14) {
				$("t15").style.backgroundColor = "black";
				$("t15").style.color = "white";
				$("t15").innerHTML = guai4;
			} else if (arr3[4] == 15) {
				$("t15").style.backgroundColor = "black";
				$("t15").style.color = "white";
				$("t15").innerHTML = guai5;
			} else if (arr3[4] == 1) {
				$("t15").style.backgroundColor = "red";
				$("t15").innerHTML = "血瓶";
			} else if (arr3[4] == 2) {
				$("t15").style.backgroundColor = "blue";
				$("t15").innerHTML = "蓝瓶";
			} else if (arr3[4] == 3) {
				$("t15").style.backgroundColor = "#00ff00";
				$("t15").innerHTML = "装备";
			} else if (arr3[4] == 4) {
				$("t15").style.backgroundColor = "#ff00ff";
				$("t15").innerHTML = "卷轴";
			} else if (arr3[4] == 5) {
				$("t15").style.backgroundColor = "#33ffff";
				$("t15").innerHTML = "探索点";
			} else if (arr3[4] == 6) {
				$("t15").style.backgroundColor = "yellow";
				$("t15").innerHTML = "金币";
			} else if (arr3[4] == 7) {
				$("t15").style.backgroundColor = "#ff7600";
				$("t15").innerHTML = "钥匙";
			} else if (arr3[4] == 8) {
				$("t15").style.backgroundColor = "#888";
				$("t15").style.color = "white";
				$("t15").innerHTML = "门";
				$("t15").disable = "true";
			} else if (arr3[4] == 9) {
				$("t15").style.backgroundColor = "orange";
				$("t15").innerHTML = "攻击力";
			} else if (arr3[4] == 10) {
				$("t15").style.backgroundColor = "purple";
				$("t15").innerHTML = "魔力";
			}
		} else {
			if ($("t15").innerHTML == "血瓶") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
				$("t15").innerHTML = "";
				$("t15").style.backgroundColor = "gray";
			}
			if ($("t15").innerHTML == "蓝瓶") {
				$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
				$("t15").innerHTML = "";
				$("t15").style.backgroundColor = "gray";
			}
			if ($("t15").innerHTML == "金币") {
				$("t15").innerHTML = "";
				$("t15").style.backgroundColor = "gray";
			}
			if ($("t15").innerHTML == "探索点") {
				$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
				$("t15").innerHTML = "";
				$("t15").style.backgroundColor = "gray";
			}
			if ($("t15").innerHTML == "攻击力") {
				$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
				$("t15").innerHTML = "";
				$("t15").style.backgroundColor = "gray";
			}
			if ($("t15").innerHTML == "魔力") {
				$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
				$("t15").innerHTML = "";
				$("t15").style.backgroundColor = "gray";
			}
			if ($("t15").innerHTML == "钥匙") {
				$("key").innerHTML = 1;
				$("t15").innerHTML = "";
				$("t15").style.backgroundColor = "gray";
			}
			if ($("t15").innerHTML == "门") {
				if ($("key").innerHTML == 1) {
					restart();
				}
			}
			if ($("t15").innerHTML == "卷轴") {
				$("t15").innerHTML = "";
				$("t15").style.backgroundColor = "gray";
			}
			if ($("t15").innerHTML == "装备") {
				$("t15").innerHTML = "";
				$("t15").style.backgroundColor = "gray";
			} else if ($("t15").innerHTML[34] == "1") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
				$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx1").innerHTML) <= 0) {
					$("t15").innerHTML = "";
					$("t15").style.backgroundColor = "gray";
				}
			} else if ($("t15").innerHTML[34] == "2") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
				$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx2").innerHTML) <= 0) {
					$("t15").innerHTML = "";
					$("t15").style.backgroundColor = "gray";
				}
			} else if ($("t15").innerHTML[34] == "3") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
				$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx3").innerHTML) <= 0) {
					$("t15").innerHTML = "";
					$("t15").style.backgroundColor = "gray";
				}
			} else if ($("t15").innerHTML[34] == "4") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
				$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx4").innerHTML) <= 0) {
					$("t15").innerHTML = "";
					$("t15").style.backgroundColor = "gray";
				}
			} else if ($("t15").innerHTML[34] == "5") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
				$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx5").innerHTML) <= 0) {
					$("t15").innerHTML = "";
					$("t15").style.backgroundColor = "gray";
				}
			}
		}
	}
}
function c16(){
	if($("t11").innerHTML.length<10&&$("t12").innerHTML.length<10&&$("t17").innerHTML.length<10&&$("t21").innerHTML.length<10&&$("t22").innerHTML.length<10&&($("t11").style.backgroundColor!=""||$("t17").style.backgroundColor!=""||$("t21").style.backgroundColor!="")) {
			if ($("t16").style.backgroundColor == "") {
				if (arr4[0] == 11) {
					$("t16").style.backgroundColor = "black";
					$("t16").style.color = "white";
					$("t16").innerHTML = guai1;
				} else if (arr4[0] == 12) {
					$("t16").style.backgroundColor = "black";
					$("t16").style.color = "white";
					$("t16").innerHTML = guai2;
				} else if (arr4[0] == 13) {
					$("t16").style.backgroundColor = "black";
					$("t16").style.color = "white";
					$("t16").innerHTML = guai3;
				} else if (arr4[0] == 14) {
					$("t16").style.backgroundColor = "black";
					$("t16").style.color = "white";
					$("t16").innerHTML = guai4;
				} else if (arr4[0] == 15) {
					$("t16").style.backgroundColor = "black";
					$("t16").style.color = "white";
					$("t16").innerHTML = guai5;
				} else if (arr4[0] == 1) {
					$("t16").style.backgroundColor = "red";
					$("t16").innerHTML = "血瓶";
				} else if (arr4[0] == 2) {
					$("t16").style.backgroundColor = "blue";
					$("t16").innerHTML = "蓝瓶";
				} else if (arr4[0] == 3) {
					$("t16").style.backgroundColor = "#00ff00";
					$("t16").innerHTML = "装备";
				} else if (arr4[0] == 4) {
					$("t16").style.backgroundColor = "#ff00ff";
					$("t16").innerHTML = "卷轴";
				} else if (arr4[0] == 5) {
					$("t16").style.backgroundColor = "#33ffff";
					$("t16").innerHTML = "探索点";
				} else if (arr4[0] == 6) {
					$("t16").style.backgroundColor = "yellow";
					$("t16").innerHTML = "金币";
				} else if (arr4[0] == 7) {
					$("t16").style.backgroundColor = "#ff7600";
					$("t16").innerHTML = "钥匙";
				} else if (arr4[0] == 8) {
					$("t16").style.backgroundColor = "#888";
					$("t16").style.color = "white";
					$("t16").innerHTML = "门";
					$("t16").disable = "true";
				} else if (arr4[0] == 9) {
					$("t16").style.backgroundColor = "orange";
					$("t16").innerHTML = "攻击力";
				} else if (arr4[0] == 10) {
					$("t16").style.backgroundColor = "purple";
					$("t16").innerHTML = "魔力";
				}
			} else {
				if ($("t16").innerHTML == "血瓶") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
					$("t16").innerHTML = "";
					$("t16").style.backgroundColor = "gray";
				}
				if ($("t16").innerHTML == "蓝瓶") {
					$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
					$("t16").innerHTML = "";
					$("t16").style.backgroundColor = "gray";
				}
				if ($("t16").innerHTML == "金币") {
					$("t16").innerHTML = "";
					$("t16").style.backgroundColor = "gray";
				}
				if ($("t16").innerHTML == "探索点") {
					$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
					$("t16").innerHTML = "";
					$("t16").style.backgroundColor = "gray";
				}
				if ($("t16").innerHTML == "攻击力") {
					$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
					$("t16").innerHTML = "";
					$("t16").style.backgroundColor = "gray";
				}
				if ($("t16").innerHTML == "魔力") {
					$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
					$("t16").innerHTML = "";
					$("t16").style.backgroundColor = "gray";
				}
				if ($("t16").innerHTML == "钥匙") {
					$("key").innerHTML = 1;
					$("t16").innerHTML = "";
					$("t16").style.backgroundColor = "gray";
				}
				if ($("t16").innerHTML == "门") {
					if ($("key").innerHTML == 1) {
						restart();
					}
				}
				if ($("t16").innerHTML == "卷轴") {
					$("t16").innerHTML = "";
					$("t16").style.backgroundColor = "gray";
				}
				if ($("t16").innerHTML == "装备") {
					$("t16").innerHTML = "";
					$("t16").style.backgroundColor = "gray";
				} else if ($("t16").innerHTML[34] == "1") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
					$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx1").innerHTML) <= 0) {
						$("t16").innerHTML = "";
						$("t16").style.backgroundColor = "gray";
					}
				} else if ($("t16").innerHTML[34] == "2") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
					$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx2").innerHTML) <= 0) {
						$("t16").innerHTML = "";
						$("t16").style.backgroundColor = "gray";
					}
				} else if ($("t16").innerHTML[34] == "3") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
					$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx3").innerHTML) <= 0) {
						$("t16").innerHTML = "";
						$("t16").style.backgroundColor = "gray";
					}
				} else if ($("t16").innerHTML[34] == "4") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
					$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx4").innerHTML) <= 0) {
						$("t16").innerHTML = "";
						$("t16").style.backgroundColor = "gray";
					}
				} else if ($("t16").innerHTML[34] == "5") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
					$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx5").innerHTML) <= 0) {
						$("t16").innerHTML = "";
						$("t16").style.backgroundColor = "gray";
					}
				}
			}

	}
}
function c17(){
	if($("t11").innerHTML.length<10&&$("t12").innerHTML.length<10&&$("t13").innerHTML.length<10&&$("t16").innerHTML.length<10&&$("t18").innerHTML.length<10&&$("t21").innerHTML.length<10&&$("t22").innerHTML.length<10&&$("t23").innerHTML.length<10&&($("t12").style.backgroundColor!=""||$("t16").style.backgroundColor!=""||$("t18").style.backgroundColor!=""||$("t22").style.backgroundColor!="")) {
		if ($("t17").style.backgroundColor == "") {
			if (arr4[1] == 11) {
				$("t17").style.backgroundColor = "black";
				$("t17").style.color = "white";
				$("t17").innerHTML = guai1;
			} else if (arr4[1] == 12) {
				$("t17").style.backgroundColor = "black";
				$("t17").style.color = "white";
				$("t17").innerHTML = guai2;
			} else if (arr4[1] == 13) {
				$("t17").style.backgroundColor = "black";
				$("t17").style.color = "white";
				$("t17").innerHTML = guai3;
			} else if (arr4[1] == 14) {
				$("t17").style.backgroundColor = "black";
				$("t17").style.color = "white";
				$("t17").innerHTML = guai4;
			} else if (arr4[1] == 15) {
				$("t17").style.backgroundColor = "black";
				$("t17").style.color = "white";
				$("t17").innerHTML = guai5;
			} else if (arr4[1] == 1) {
				$("t17").style.backgroundColor = "red";
				$("t17").innerHTML = "血瓶";
			} else if (arr4[1] == 2) {
				$("t17").style.backgroundColor = "blue";
				$("t17").innerHTML = "蓝瓶";
			} else if (arr4[1] == 3) {
				$("t17").style.backgroundColor = "#00ff00";
				$("t17").innerHTML = "装备";
			} else if (arr4[1] == 4) {
				$("t17").style.backgroundColor = "#ff00ff";
				$("t17").innerHTML = "卷轴";
			} else if (arr4[1] == 5) {
				$("t17").style.backgroundColor = "#33ffff";
				$("t17").innerHTML = "探索点";
			} else if (arr4[1] == 6) {
				$("t17").style.backgroundColor = "yellow";
				$("t17").innerHTML = "金币";
			} else if (arr4[1] == 7) {
				$("t17").style.backgroundColor = "#ff7600";
				$("t17").innerHTML = "钥匙";
			} else if (arr4[1] == 8) {
				$("t17").style.backgroundColor = "#888";
				$("t17").style.color = "white";
				$("t17").innerHTML = "门";
				$("t17").disable = "true";
			} else if (arr4[1] == 9) {
				$("t17").style.backgroundColor = "orange";
				$("t17").innerHTML = "攻击力";
			} else if (arr4[1] == 10) {
				$("t17").style.backgroundColor = "purple";
				$("t17").innerHTML = "魔力";
			}
		} else {
			if ($("t17").innerHTML == "血瓶") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
				$("t17").innerHTML = "";
				$("t17").style.backgroundColor = "gray";
			}
			if ($("t17").innerHTML == "蓝瓶") {
				$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
				$("t17").innerHTML = "";
				$("t17").style.backgroundColor = "gray";
			}
			if ($("t17").innerHTML == "金币") {
				$("t17").innerHTML = "";
				$("t17").style.backgroundColor = "gray";
			}
			if ($("t17").innerHTML == "探索点") {
				$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
				$("t17").innerHTML = "";
				$("t17").style.backgroundColor = "gray";
			}
			if ($("t17").innerHTML == "攻击力") {
				$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
				$("t17").innerHTML = "";
				$("t17").style.backgroundColor = "gray";
			}
			if ($("t17").innerHTML == "魔力") {
				$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
				$("t17").innerHTML = "";
				$("t17").style.backgroundColor = "gray";
			}
			if ($("t17").innerHTML == "钥匙") {
				$("key").innerHTML = 1;
				$("t17").innerHTML = "";
				$("t17").style.backgroundColor = "gray";
			}
			if ($("t17").innerHTML == "门") {
				if ($("key").innerHTML == 1) {
					restart();
				}
			}
			if ($("t17").innerHTML == "卷轴") {
				$("t17").innerHTML = "";
				$("t17").style.backgroundColor = "gray";
			}
			if ($("t17").innerHTML == "装备") {
				$("t17").innerHTML = "";
				$("t17").style.backgroundColor = "gray";
			} else if ($("t17").innerHTML[34] == "1") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
				$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx1").innerHTML) <= 0) {
					$("t17").innerHTML = "";
					$("t17").style.backgroundColor = "gray";
				}
			} else if ($("t17").innerHTML[34] == "2") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
				$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx2").innerHTML) <= 0) {
					$("t17").innerHTML = "";
					$("t17").style.backgroundColor = "gray";
				}
			} else if ($("t17").innerHTML[34] == "3") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
				$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx3").innerHTML) <= 0) {
					$("t17").innerHTML = "";
					$("t17").style.backgroundColor = "gray";
				}
			} else if ($("t17").innerHTML[34] == "4") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
				$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx4").innerHTML) <= 0) {
					$("t17").innerHTML = "";
					$("t17").style.backgroundColor = "gray";
				}
			} else if ($("t17").innerHTML[34] == "5") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
				$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx5").innerHTML) <= 0) {
					$("t17").innerHTML = "";
					$("t17").style.backgroundColor = "gray";
				}
			}
		}
	}
}
function c18(){
	if($("t12").innerHTML.length<10&&$("t13").innerHTML.length<10&&$("t14").innerHTML.length<10&&$("t17").innerHTML.length<10&&$("t19").innerHTML.length<10&&$("t22").innerHTML.length<10&&$("t23").innerHTML.length<10&&$("t24").innerHTML.length<10&&($("t13").style.backgroundColor!=""||$("t17").style.backgroundColor!=""||$("t19").style.backgroundColor!=""||$("t23").style.backgroundColor!="")) {
		if ($("t18").style.backgroundColor == "") {
			if (arr4[2] == 11) {
				$("t18").style.backgroundColor = "black";
				$("t18").style.color = "white";
				$("t18").innerHTML = guai1;
			} else if (arr4[2] == 12) {
				$("t18").style.backgroundColor = "black";
				$("t18").style.color = "white";
				$("t18").innerHTML = guai2;
			} else if (arr4[2] == 13) {
				$("t18").style.backgroundColor = "black";
				$("t18").style.color = "white";
				$("t18").innerHTML = guai3;
			} else if (arr4[2] == 14) {
				$("t18").style.backgroundColor = "black";
				$("t18").style.color = "white";
				$("t18").innerHTML = guai4;
			} else if (arr4[2] == 15) {
				$("t18").style.backgroundColor = "black";
				$("t18").style.color = "white";
				$("t18").innerHTML = guai5;
			} else if (arr4[2] == 1) {
				$("t18").style.backgroundColor = "red";
				$("t18").innerHTML = "血瓶";
			} else if (arr4[2] == 2) {
				$("t18").style.backgroundColor = "blue";
				$("t18").innerHTML = "蓝瓶";
			} else if (arr4[2] == 3) {
				$("t18").style.backgroundColor = "#00ff00";
				$("t18").innerHTML = "装备";
			} else if (arr4[2] == 4) {
				$("t18").style.backgroundColor = "#ff00ff";
				$("t18").innerHTML = "卷轴";
			} else if (arr4[2] == 5) {
				$("t18").style.backgroundColor = "#33ffff";
				$("t18").innerHTML = "探索点";
			} else if (arr4[2] == 6) {
				$("t18").style.backgroundColor = "yellow";
				$("t18").innerHTML = "金币";
			} else if (arr4[2] == 7) {
				$("t18").style.backgroundColor = "#ff7600";
				$("t18").innerHTML = "钥匙";
			} else if (arr4[2] == 8) {
				$("t18").style.backgroundColor = "#888";
				$("t18").style.color = "white";
				$("t18").innerHTML = "门";
				$("t18").disable = "true";
			} else if (arr4[2] == 9) {
				$("t18").style.backgroundColor = "orange";
				$("t18").innerHTML = "攻击力";
			} else if (arr4[2] == 10) {
				$("t18").style.backgroundColor = "purple";
				$("t18").innerHTML = "魔力";
			}
		} else {
			if ($("t18").innerHTML == "血瓶") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
				$("t18").innerHTML = "";
				$("t18").style.backgroundColor = "gray";
			}
			if ($("t18").innerHTML == "蓝瓶") {
				$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
				$("t18").innerHTML = "";
				$("t18").style.backgroundColor = "gray";
			}
			if ($("t18").innerHTML == "金币") {
				$("t18").innerHTML = "";
				$("t18").style.backgroundColor = "gray";
			}
			if ($("t18").innerHTML == "探索点") {
				$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
				$("t18").innerHTML = "";
				$("t18").style.backgroundColor = "gray";
			}
			if ($("t18").innerHTML == "攻击力") {
				$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
				$("t18").innerHTML = "";
				$("t18").style.backgroundColor = "gray";
			}
			if ($("t18").innerHTML == "魔力") {
				$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
				$("t18").innerHTML = "";
				$("t18").style.backgroundColor = "gray";
			}
			if ($("t18").innerHTML == "钥匙") {
				$("key").innerHTML = 1;
				$("t18").innerHTML = "";
				$("t18").style.backgroundColor = "gray";
			}
			if ($("t18").innerHTML == "门") {
				if ($("key").innerHTML == 1) {
					restart();
				}
			}
			if ($("t18").innerHTML == "卷轴") {
				$("t18").innerHTML = "";
				$("t18").style.backgroundColor = "gray";
			}
			if ($("t18").innerHTML == "装备") {
				$("t18").innerHTML = "";
				$("t18").style.backgroundColor = "gray";
			} else if ($("t18").innerHTML[34] == "1") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
				$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx1").innerHTML) <= 0) {
					$("t18").innerHTML = "";
					$("t18").style.backgroundColor = "gray";
				}
			} else if ($("t18").innerHTML[34] == "2") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
				$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx2").innerHTML) <= 0) {
					$("t18").innerHTML = "";
					$("t18").style.backgroundColor = "gray";
				}
			} else if ($("t18").innerHTML[34] == "3") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
				$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx3").innerHTML) <= 0) {
					$("t18").innerHTML = "";
					$("t18").style.backgroundColor = "gray";
				}
			} else if ($("t18").innerHTML[34] == "4") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
				$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx4").innerHTML) <= 0) {
					$("t18").innerHTML = "";
					$("t18").style.backgroundColor = "gray";
				}
			} else if ($("t18").innerHTML[34] == "5") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
				$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx5").innerHTML) <= 0) {
					$("t18").innerHTML = "";
					$("t18").style.backgroundColor = "gray";
				}
			}
		}
	}
}
function c19(){
	if($("t13").innerHTML.length<10&&$("t14").innerHTML.length<10&&$("t15").innerHTML.length<10&&$("t18").innerHTML.length<10&&$("t20").innerHTML.length<10&&$("t23").innerHTML.length<10&&$("t24").innerHTML.length<10&&$("t25").innerHTML.length<10&&($("t14").style.backgroundColor!=""||$("t18").style.backgroundColor!=""||$("t20").style.backgroundColor!=""||$("t24").style.backgroundColor!="")) {
		if ($("t19").style.backgroundColor == "") {
			if (arr4[3] == 11) {
				$("t19").style.backgroundColor = "black";
				$("t19").style.color = "white";
				$("t19").innerHTML = guai1;
			} else if (arr4[3] == 12) {
				$("t19").style.backgroundColor = "black";
				$("t19").style.color = "white";
				$("t19").innerHTML = guai2;
			} else if (arr4[3] == 13) {
				$("t19").style.backgroundColor = "black";
				$("t19").style.color = "white";
				$("t19").innerHTML = guai3;
			} else if (arr4[3] == 14) {
				$("t19").style.backgroundColor = "black";
				$("t19").style.color = "white";
				$("t19").innerHTML = guai4;
			} else if (arr4[3] == 15) {
				$("t19").style.backgroundColor = "black";
				$("t19").style.color = "white";
				$("t19").innerHTML = guai5;
			} else if (arr4[3] == 1) {
				$("t19").style.backgroundColor = "red";
				$("t19").innerHTML = "血瓶";
			} else if (arr4[3] == 2) {
				$("t19").style.backgroundColor = "blue";
				$("t19").innerHTML = "蓝瓶";
			} else if (arr4[3] == 3) {
				$("t19").style.backgroundColor = "#00ff00";
				$("t19").innerHTML = "装备";
			} else if (arr4[3] == 4) {
				$("t19").style.backgroundColor = "#ff00ff";
				$("t19").innerHTML = "卷轴";
			} else if (arr4[3] == 5) {
				$("t19").style.backgroundColor = "#33ffff";
				$("t19").innerHTML = "探索点";
			} else if (arr4[3] == 6) {
				$("t19").style.backgroundColor = "yellow";
				$("t19").innerHTML = "金币";
			} else if (arr4[3] == 7) {
				$("t19").style.backgroundColor = "#ff7600";
				$("t19").innerHTML = "钥匙";
			} else if (arr4[3] == 8) {
				$("t19").style.backgroundColor = "#888";
				$("t19").style.color = "white";
				$("t19").innerHTML = "门";
				$("t19").disable = "true";
			} else if (arr4[3] == 9) {
				$("t19").style.backgroundColor = "orange";
				$("t19").innerHTML = "攻击力";
			} else if (arr4[3] == 10) {
				$("t19").style.backgroundColor = "purple";
				$("t19").innerHTML = "魔力";
			}
		} else {
			if ($("t19").innerHTML == "血瓶") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
				$("t19").innerHTML = "";
				$("t19").style.backgroundColor = "gray";
			}
			if ($("t19").innerHTML == "蓝瓶") {
				$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
				$("t19").innerHTML = "";
				$("t19").style.backgroundColor = "gray";
			}
			if ($("t19").innerHTML == "金币") {
				$("t19").innerHTML = "";
				$("t19").style.backgroundColor = "gray";
			}
			if ($("t19").innerHTML == "探索点") {
				$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
				$("t19").innerHTML = "";
				$("t19").style.backgroundColor = "gray";
			}
			if ($("t19").innerHTML == "攻击力") {
				$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
				$("t19").innerHTML = "";
				$("t19").style.backgroundColor = "gray";
			}
			if ($("t19").innerHTML == "魔力") {
				$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
				$("t19").innerHTML = "";
				$("t19").style.backgroundColor = "gray";
			}
			if ($("t19").innerHTML == "钥匙") {
				$("key").innerHTML = 1;
				$("t19").innerHTML = "";
				$("t19").style.backgroundColor = "gray";
			}
			if ($("t19").innerHTML == "门") {
				if ($("key").innerHTML == 1) {
					restart();
				}
			}
			if ($("t19").innerHTML == "卷轴") {
				$("t19").innerHTML = "";
				$("t19").style.backgroundColor = "gray";
			}
			if ($("t19").innerHTML == "装备") {
				$("t19").innerHTML = "";
				$("t19").style.backgroundColor = "gray";
			} else if ($("t19").innerHTML[34] == "1") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
				$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx1").innerHTML) <= 0) {
					$("t19").innerHTML = "";
					$("t19").style.backgroundColor = "gray";
				}
			} else if ($("t19").innerHTML[34] == "2") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
				$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx2").innerHTML) <= 0) {
					$("t19").innerHTML = "";
					$("t19").style.backgroundColor = "gray";
				}
			} else if ($("t19").innerHTML[34] == "3") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
				$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx3").innerHTML) <= 0) {
					$("t19").innerHTML = "";
					$("t19").style.backgroundColor = "gray";
				}
			} else if ($("t19").innerHTML[34] == "4") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
				$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx4").innerHTML) <= 0) {
					$("t19").innerHTML = "";
					$("t19").style.backgroundColor = "gray";
				}
			} else if ($("t19").innerHTML[34] == "5") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
				$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx5").innerHTML) <= 0) {
					$("t19").innerHTML = "";
					$("t19").style.backgroundColor = "gray";
				}
			}
		}
	}
}
function c20(){
	if($("t14").innerHTML.length<10&&$("t15").innerHTML.length<10&&$("t19").innerHTML.length<10&&$("t24").innerHTML.length<10&&$("t25").innerHTML.length<10&&($("t15").style.backgroundColor!=""||$("t21").style.backgroundColor!=""||$("t25").style.backgroundColor!="")) {
		if ($("t20").style.backgroundColor == "") {
			if (arr4[4] == 11) {
				$("t20").style.backgroundColor = "black";
				$("t20").style.color = "white";
				$("t20").innerHTML = guai1;
			} else if (arr4[4] == 12) {
				$("t20").style.backgroundColor = "black";
				$("t20").style.color = "white";
				$("t20").innerHTML = guai2;
			} else if (arr4[4] == 13) {
				$("t20").style.backgroundColor = "black";
				$("t20").style.color = "white";
				$("t20").innerHTML = guai3;
			} else if (arr4[4] == 14) {
				$("t20").style.backgroundColor = "black";
				$("t20").style.color = "white";
				$("t20").innerHTML = guai4;
			} else if (arr4[4] == 15) {
				$("t20").style.backgroundColor = "black";
				$("t20").style.color = "white";
				$("t20").innerHTML = guai5;
			} else if (arr4[4] == 1) {
				$("t20").style.backgroundColor = "red";
				$("t20").innerHTML = "血瓶";
			} else if (arr4[4] == 2) {
				$("t20").style.backgroundColor = "blue";
				$("t20").innerHTML = "蓝瓶";
			} else if (arr4[4] == 3) {
				$("t20").style.backgroundColor = "#00ff00";
				$("t20").innerHTML = "装备";
			} else if (arr4[4] == 4) {
				$("t20").style.backgroundColor = "#ff00ff";
				$("t20").innerHTML = "卷轴";
			} else if (arr4[4] == 5) {
				$("t20").style.backgroundColor = "#33ffff";
				$("t20").innerHTML = "探索点";
			} else if (arr4[4] == 6) {
				$("t20").style.backgroundColor = "yellow";
				$("t20").innerHTML = "金币";
			} else if (arr4[4] == 7) {
				$("t20").style.backgroundColor = "#ff7600";
				$("t20").innerHTML = "钥匙";
			} else if (arr4[4] == 8) {
				$("t20").style.backgroundColor = "#888";
				$("t20").style.color = "white";
				$("t20").innerHTML = "门";
				$("t20").disable = "true";
			} else if (arr4[4] == 9) {
				$("t20").style.backgroundColor = "orange";
				$("t20").innerHTML = "攻击力";
			} else if (arr4[4] == 10) {
				$("t20").style.backgroundColor = "purple";
				$("t20").innerHTML = "魔力";
			}
		} else {
			if ($("t20").innerHTML == "血瓶") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
				$("t20").innerHTML = "";
				$("t20").style.backgroundColor = "gray";
			}
			if ($("t20").innerHTML == "蓝瓶") {
				$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
				$("t20").innerHTML = "";
				$("t20").style.backgroundColor = "gray";
			}
			if ($("t20").innerHTML == "金币") {
				$("t20").innerHTML = "";
				$("t20").style.backgroundColor = "gray";
			}
			if ($("t20").innerHTML == "探索点") {
				$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
				$("t20").innerHTML = "";
				$("t20").style.backgroundColor = "gray";
			}
			if ($("t20").innerHTML == "攻击力") {
				$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
				$("t20").innerHTML = "";
				$("t20").style.backgroundColor = "gray";
			}
			if ($("t20").innerHTML == "魔力") {
				$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
				$("t20").innerHTML = "";
				$("t20").style.backgroundColor = "gray";
			}
			if ($("t20").innerHTML == "钥匙") {
				$("key").innerHTML = 1;
				$("t20").innerHTML = "";
				$("t20").style.backgroundColor = "gray";
			}
			if ($("t20").innerHTML == "门") {
				if ($("key").innerHTML == 1) {
					restart();
				}
			}
			if ($("t20").innerHTML == "卷轴") {
				$("t20").innerHTML = "";
				$("t20").style.backgroundColor = "gray";
			}
			if ($("t20").innerHTML == "装备") {
				$("t20").innerHTML = "";
				$("t20").style.backgroundColor = "gray";
			} else if ($("t20").innerHTML[34] == "1") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
				$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx1").innerHTML) <= 0) {
					$("t20").innerHTML = "";
					$("t20").style.backgroundColor = "gray";
				}
			} else if ($("t20").innerHTML[34] == "2") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
				$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx2").innerHTML) <= 0) {
					$("t20").innerHTML = "";
					$("t20").style.backgroundColor = "gray";
				}
			} else if ($("t20").innerHTML[34] == "3") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
				$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx3").innerHTML) <= 0) {
					$("t20").innerHTML = "";
					$("t20").style.backgroundColor = "gray";
				}
			} else if ($("t20").innerHTML[34] == "4") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
				$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx4").innerHTML) <= 0) {
					$("t20").innerHTML = "";
					$("t20").style.backgroundColor = "gray";
				}
			} else if ($("t20").innerHTML[34] == "5") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
				$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx5").innerHTML) <= 0) {
					$("t20").innerHTML = "";
					$("t20").style.backgroundColor = "gray";
				}
			}
		}
	}
}
function c21(){
	if($("t16").innerHTML.length<10&&$("t17").innerHTML.length<10&&$("t22").innerHTML.length<10&&$("t26").innerHTML.length<10&&$("t27").innerHTML.length<10&&($("t16").style.backgroundColor!=""||$("t22").style.backgroundColor!=""||$("t26").style.backgroundColor!="")) {
		if ($("t21").style.backgroundColor == "") {
			if (arr5[0] == 11) {
				$("t21").style.backgroundColor = "black";
				$("t21").style.color = "white";
				$("t21").innerHTML = guai1;
			} else if (arr5[0] == 12) {
				$("t21").style.backgroundColor = "black";
				$("t21").style.color = "white";
				$("t21").innerHTML = guai2;
			} else if (arr5[0] == 13) {
				$("t21").style.backgroundColor = "black";
				$("t21").style.color = "white";
				$("t21").innerHTML = guai3;
			} else if (arr5[0] == 14) {
				$("t21").style.backgroundColor = "black";
				$("t21").style.color = "white";
				$("t21").innerHTML = guai4;
			} else if (arr5[0] == 15) {
				$("t21").style.backgroundColor = "black";
				$("t21").style.color = "white";
				$("t21").innerHTML = guai5;
			} else if (arr5[0] == 1) {
				$("t21").style.backgroundColor = "red";
				$("t21").innerHTML = "血瓶";
			} else if (arr5[0] == 2) {
				$("t21").style.backgroundColor = "blue";
				$("t21").innerHTML = "蓝瓶";
			} else if (arr5[0] == 3) {
				$("t21").style.backgroundColor = "#00ff00";
				$("t21").innerHTML = "装备";
			} else if (arr5[0] == 4) {
				$("t21").style.backgroundColor = "#ff00ff";
				$("t21").innerHTML = "卷轴";
			} else if (arr5[0] == 5) {
				$("t21").style.backgroundColor = "#33ffff";
				$("t21").innerHTML = "探索点";
			} else if (arr5[0] == 6) {
				$("t21").style.backgroundColor = "yellow";
				$("t21").innerHTML = "金币";
			} else if (arr5[0] == 7) {
				$("t21").style.backgroundColor = "#ff7600";
				$("t21").innerHTML = "钥匙";
			} else if (arr5[0] == 8) {
				$("t21").style.backgroundColor = "#888";
				$("t21").style.color = "white";
				$("t21").innerHTML = "门";
				$("t21").disable = "true";
			} else if (arr5[0] == 9) {
				$("t21").style.backgroundColor = "orange";
				$("t21").innerHTML = "攻击力";
			} else if (arr5[0] == 10) {
				$("t21").style.backgroundColor = "purple";
				$("t21").innerHTML = "魔力";
			}
		} else {
			if ($("t21").innerHTML == "血瓶") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
				$("t21").innerHTML = "";
				$("t21").style.backgroundColor = "gray";
			}
			if ($("t21").innerHTML == "蓝瓶") {
				$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
				$("t21").innerHTML = "";
				$("t21").style.backgroundColor = "gray";
			}
			if ($("t21").innerHTML == "金币") {
				$("t21").innerHTML = "";
				$("t21").style.backgroundColor = "gray";
			}
			if ($("t21").innerHTML == "探索点") {
				$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
				$("t21").innerHTML = "";
				$("t21").style.backgroundColor = "gray";
			}
			if ($("t21").innerHTML == "攻击力") {
				$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
				$("t21").innerHTML = "";
				$("t21").style.backgroundColor = "gray";
			}
			if ($("t21").innerHTML == "魔力") {
				$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
				$("t21").innerHTML = "";
				$("t21").style.backgroundColor = "gray";
			}
			if ($("t21").innerHTML == "钥匙") {
				$("key").innerHTML = 1;
				$("t21").innerHTML = "";
				$("t21").style.backgroundColor = "gray";
			}
			if ($("t21").innerHTML == "门") {
				if ($("key").innerHTML == 1) {
					restart();
				}
			}
			if ($("t21").innerHTML == "卷轴") {
				$("t21").innerHTML = "";
				$("t21").style.backgroundColor = "gray";
			}
			if ($("t21").innerHTML == "装备") {
				$("t21").innerHTML = "";
				$("t21").style.backgroundColor = "gray";
			} else if ($("t21").innerHTML[34] == "1") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
				$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx1").innerHTML) <= 0) {
					$("t21").innerHTML = "";
					$("t21").style.backgroundColor = "gray";
				}
			} else if ($("t21").innerHTML[34] == "2") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
				$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx2").innerHTML) <= 0) {
					$("t21").innerHTML = "";
					$("t21").style.backgroundColor = "gray";
				}
			} else if ($("t21").innerHTML[34] == "3") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
				$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx3").innerHTML) <= 0) {
					$("t21").innerHTML = "";
					$("t21").style.backgroundColor = "gray";
				}
			} else if ($("t21").innerHTML[34] == "4") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
				$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx4").innerHTML) <= 0) {
					$("t21").innerHTML = "";
					$("t21").style.backgroundColor = "gray";
				}
			} else if ($("t21").innerHTML[34] == "5") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
				$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx5").innerHTML) <= 0) {
					$("t21").innerHTML = "";
					$("t21").style.backgroundColor = "gray";
				}
			}
		}
	}
}
function c22(){
	if($("t16").innerHTML.length<10&&$("t17").innerHTML.length<10&&$("t18").innerHTML.length<10&&$("t21").innerHTML.length<10&&$("t23").innerHTML.length<10&&$("t26").innerHTML.length<10&&$("t27").innerHTML.length<10&&$("t28").innerHTML.length<10&&($("t17").style.backgroundColor!=""||$("t21").style.backgroundColor!=""||$("t23").style.backgroundColor!=""||$("t27").style.backgroundColor!="")) {
		if ($("t22").style.backgroundColor == "") {
			if (arr5[1] == 11) {
				$("t22").style.backgroundColor = "black";
				$("t22").style.color = "white";
				$("t22").innerHTML = guai1;
			} else if (arr5[1] == 12) {
				$("t22").style.backgroundColor = "black";
				$("t22").style.color = "white";
				$("t22").innerHTML = guai2;
			} else if (arr5[1] == 13) {
				$("t22").style.backgroundColor = "black";
				$("t22").style.color = "white";
				$("t22").innerHTML = guai3;
			} else if (arr5[1] == 14) {
				$("t22").style.backgroundColor = "black";
				$("t22").style.color = "white";
				$("t22").innerHTML = guai4;
			} else if (arr5[1] == 15) {
				$("t22").style.backgroundColor = "black";
				$("t22").style.color = "white";
				$("t22").innerHTML = guai5;
			} else if (arr5[1] == 1) {
				$("t22").style.backgroundColor = "red";
				$("t22").innerHTML = "血瓶";
			} else if (arr5[1] == 2) {
				$("t22").style.backgroundColor = "blue";
				$("t22").innerHTML = "蓝瓶";
			} else if (arr5[1] == 3) {
				$("t22").style.backgroundColor = "#00ff00";
				$("t22").innerHTML = "装备";
			} else if (arr5[1] == 4) {
				$("t22").style.backgroundColor = "#ff00ff";
				$("t22").innerHTML = "卷轴";
			} else if (arr5[1] == 5) {
				$("t22").style.backgroundColor = "#33ffff";
				$("t22").innerHTML = "探索点";
			} else if (arr5[1] == 6) {
				$("t22").style.backgroundColor = "yellow";
				$("t22").innerHTML = "金币";
			} else if (arr5[1] == 7) {
				$("t22").style.backgroundColor = "#ff7600";
				$("t22").innerHTML = "钥匙";
			} else if (arr5[1] == 8) {
				$("t22").style.backgroundColor = "#888";
				$("t22").style.color = "white";
				$("t22").innerHTML = "门";
				$("t22").disable = "true";
			} else if (arr5[1] == 9) {
				$("t22").style.backgroundColor = "orange";
				$("t22").innerHTML = "攻击力";
			} else if (arr5[1] == 10) {
				$("t22").style.backgroundColor = "purple";
				$("t22").innerHTML = "魔力";
			}
		} else {
			if ($("t22").innerHTML == "血瓶") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
				$("t22").innerHTML = "";
				$("t22").style.backgroundColor = "gray";
			}
			if ($("t22").innerHTML == "蓝瓶") {
				$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
				$("t22").innerHTML = "";
				$("t22").style.backgroundColor = "gray";
			}
			if ($("t22").innerHTML == "金币") {
				$("t22").innerHTML = "";
				$("t22").style.backgroundColor = "gray";
			}
			if ($("t22").innerHTML == "门") {
				if ($("key").innerHTML == 1) {
					restart();
				}
			}
			if ($("t22").innerHTML == "探索点") {
				$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
				$("t22").innerHTML = "";
				$("t22").style.backgroundColor = "gray";
			}
			if ($("t22").innerHTML == "攻击力") {
				$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
				$("t22").innerHTML = "";
				$("t22").style.backgroundColor = "gray";
			}
			if ($("t22").innerHTML == "魔力") {
				$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
				$("t22").innerHTML = "";
				$("t22").style.backgroundColor = "gray";
			}
			if ($("t22").innerHTML == "钥匙") {
				$("key").innerHTML = 1;
				$("t22").innerHTML = "";
				$("t22").style.backgroundColor = "gray";
			}
			if ($("t22").innerHTML == "卷轴") {
				$("t22").innerHTML = "";
				$("t22").style.backgroundColor = "gray";
			}
			if ($("t22").innerHTML == "装备") {
				$("t22").innerHTML = "";
				$("t22").style.backgroundColor = "gray";
			} else if ($("t22").innerHTML[34] == "1") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
				$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx1").innerHTML) <= 0) {
					$("t22").innerHTML = "";
					$("t22").style.backgroundColor = "gray";
				}
			} else if ($("t22").innerHTML[34] == "2") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
				$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx2").innerHTML) <= 0) {
					$("t22").innerHTML = "";
					$("t22").style.backgroundColor = "gray";
				}
			} else if ($("t22").innerHTML[34] == "3") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
				$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx3").innerHTML) <= 0) {
					$("t22").innerHTML = "";
					$("t22").style.backgroundColor = "gray";
				}
			} else if ($("t22").innerHTML[34] == "4") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
				$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx4").innerHTML) <= 0) {
					$("t22").innerHTML = "";
					$("t22").style.backgroundColor = "gray";
				}
			} else if ($("t22").innerHTML[34] == "5") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
				$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx5").innerHTML) <= 0) {
					$("t22").innerHTML = "";
					$("t22").style.backgroundColor = "gray";
				}
			}
		}
	}
}
function c23(){
	if($("t17").innerHTML.length<10&&$("t18").innerHTML.length<10&&$("t19").innerHTML.length<10&&$("t22").innerHTML.length<10&&$("t24").innerHTML.length<10&&$("t27").innerHTML.length<10&&$("t28").innerHTML.length<10&&$("t29").innerHTML.length<10&&($("t18").style.backgroundColor!=""||$("t22").style.backgroundColor!=""||$("t24").style.backgroundColor!=""||$("t28").style.backgroundColor!="")) {
		if ($("t23").style.backgroundColor == "") {
			if (arr5[2] == 11) {
				$("t23").style.backgroundColor = "black";
				$("t23").style.color = "white";
				$("t23").innerHTML = guai1;
			} else if (arr5[2] == 12) {
				$("t23").style.backgroundColor = "black";
				$("t23").style.color = "white";
				$("t23").innerHTML = guai2;
			} else if (arr5[2] == 13) {
				$("t23").style.backgroundColor = "black";
				$("t23").style.color = "white";
				$("t23").innerHTML = guai3;
			} else if (arr5[2] == 14) {
				$("t23").style.backgroundColor = "black";
				$("t23").style.color = "white";
				$("t23").innerHTML = guai4;
			} else if (arr5[2] == 15) {
				$("t23").style.backgroundColor = "black";
				$("t23").style.color = "white";
				$("t23").innerHTML = guai5;
			} else if (arr5[2] == 1) {
				$("t23").style.backgroundColor = "red";
				$("t23").innerHTML = "血瓶";
			} else if (arr5[2] == 2) {
				$("t23").style.backgroundColor = "blue";
				$("t23").innerHTML = "蓝瓶";
			} else if (arr5[2] == 3) {
				$("t23").style.backgroundColor = "#00ff00";
				$("t23").innerHTML = "装备";
			} else if (arr5[2] == 4) {
				$("t23").style.backgroundColor = "#ff00ff";
				$("t23").innerHTML = "卷轴";
			} else if (arr5[2] == 5) {
				$("t23").style.backgroundColor = "#33ffff";
				$("t23").innerHTML = "探索点";
			} else if (arr5[2] == 6) {
				$("t23").style.backgroundColor = "yellow";
				$("t23").innerHTML = "金币";
			} else if (arr5[2] == 7) {
				$("t23").style.backgroundColor = "#ff7600";
				$("t23").innerHTML = "钥匙";
			} else if (arr5[2] == 8) {
				$("t23").style.backgroundColor = "#888";
				$("t23").style.color = "white";
				$("t23").innerHTML = "门";
				$("t23").disable = "true";
			} else if (arr5[2] == 9) {
				$("t23").style.backgroundColor = "orange";
				$("t23").innerHTML = "攻击力";
			} else if (arr5[2] == 10) {
				$("t23").style.backgroundColor = "purple";
				$("t23").innerHTML = "魔力";
			}
		} else {
			if ($("t23").innerHTML == "血瓶") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
				$("t23").innerHTML = "";
				$("t23").style.backgroundColor = "gray";
			}
			if ($("t23").innerHTML == "蓝瓶") {
				$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
				$("t23").innerHTML = "";
				$("t23").style.backgroundColor = "gray";
			}
			if ($("t23").innerHTML == "金币") {
				$("t23").innerHTML = "";
				$("t23").style.backgroundColor = "gray";
			}
			if ($("t23").innerHTML == "探索点") {
				$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
				$("t23").innerHTML = "";
				$("t23").style.backgroundColor = "gray";
			}
			if ($("t23").innerHTML == "攻击力") {
				$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
				$("t23").innerHTML = "";
				$("t23").style.backgroundColor = "gray";
			}
			if ($("t23").innerHTML == "魔力") {
				$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
				$("t23").innerHTML = "";
				$("t23").style.backgroundColor = "gray";
			}
			if ($("t23").innerHTML == "钥匙") {
				$("key").innerHTML = 1;
				$("t23").innerHTML = "";
				$("t23").style.backgroundColor = "gray";
			}
			if ($("t23").innerHTML == "门") {
				if ($("key").innerHTML == 1) {
					restart();
				}
			}
			if ($("t23").innerHTML == "卷轴") {
				$("t23").innerHTML = "";
				$("t23").style.backgroundColor = "gray";
			}
			if ($("t23").innerHTML == "装备") {
				$("t23").innerHTML = "";
				$("t23").style.backgroundColor = "gray";
			} else if ($("t23").innerHTML[34] == "1") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
				$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx1").innerHTML) <= 0) {
					$("t23").innerHTML = "";
					$("t23").style.backgroundColor = "gray";
				}
			} else if ($("t23").innerHTML[34] == "2") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
				$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx2").innerHTML) <= 0) {
					$("t23").innerHTML = "";
					$("t23").style.backgroundColor = "gray";
				}
			} else if ($("t23").innerHTML[34] == "3") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
				$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx3").innerHTML) <= 0) {
					$("t23").innerHTML = "";
					$("t23").style.backgroundColor = "gray";
				}
			} else if ($("t23").innerHTML[34] == "4") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
				$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx4").innerHTML) <= 0) {
					$("t23").innerHTML = "";
					$("t23").style.backgroundColor = "gray";
				}
			} else if ($("t23").innerHTML[34] == "5") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
				$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx5").innerHTML) <= 0) {
					$("t23").innerHTML = "";
					$("t23").style.backgroundColor = "gray";
				}
			}
		}
	}
}
function c24(){
	if($("t20").innerHTML.length<10&&$("t18").innerHTML.length<10&&$("t19").innerHTML.length<10&&$("t23").innerHTML.length<10&&$("t25").innerHTML.length<10&&$("t30").innerHTML.length<10&&$("t28").innerHTML.length<10&&$("t29").innerHTML.length<10&&($("t19").style.backgroundColor!=""||$("t23").style.backgroundColor!=""||$("t25").style.backgroundColor!=""||$("t29").style.backgroundColor!="")) {
			if ($("t24").style.backgroundColor == "") {
				if (arr5[3] == 11) {
					$("t24").style.backgroundColor = "black";
					$("t24").style.color = "white";
					$("t24").innerHTML = guai1;
				} else if (arr5[3] == 12) {
					$("t24").style.backgroundColor = "black";
					$("t24").style.color = "white";
					$("t24").innerHTML = guai2;
				} else if (arr5[3] == 13) {
					$("t24").style.backgroundColor = "black";
					$("t24").style.color = "white";
					$("t24").innerHTML = guai3;
				} else if (arr5[3] == 14) {
					$("t24").style.backgroundColor = "black";
					$("t24").style.color = "white";
					$("t24").innerHTML = guai4;
				} else if (arr5[3] == 15) {
					$("t24").style.backgroundColor = "black";
					$("t24").style.color = "white";
					$("t24").innerHTML = guai5;
				} else if (arr5[3] == 1) {
					$("t24").style.backgroundColor = "red";
					$("t24").innerHTML = "血瓶";
				} else if (arr5[3] == 2) {
					$("t24").style.backgroundColor = "blue";
					$("t24").innerHTML = "蓝瓶";
				} else if (arr5[3] == 3) {
					$("t24").style.backgroundColor = "#00ff00";
					$("t24").innerHTML = "装备";
				} else if (arr5[3] == 4) {
					$("t24").style.backgroundColor = "#ff00ff";
					$("t24").innerHTML = "卷轴";
				} else if (arr5[3] == 5) {
					$("t24").style.backgroundColor = "#33ffff";
					$("t24").innerHTML = "探索点";
				} else if (arr5[3] == 6) {
					$("t24").style.backgroundColor = "yellow";
					$("t24").innerHTML = "金币";
				} else if (arr5[3] == 7) {
					$("t24").style.backgroundColor = "#ff7600";
					$("t24").innerHTML = "钥匙";
				} else if (arr5[3] == 8) {
					$("t24").style.backgroundColor = "#888";
					$("t24").style.color = "white";
					$("t24").innerHTML = "门";
					$("t24").disable = "true";
				} else if (arr5[3] == 9) {
					$("t24").style.backgroundColor = "orange";
					$("t24").innerHTML = "攻击力";
				} else if (arr5[3] == 10) {
					$("t24").style.backgroundColor = "purple";
					$("t24").innerHTML = "魔力";
				}
			} else {
				if ($("t24").innerHTML == "血瓶") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
					$("t24").innerHTML = "";
					$("t24").style.backgroundColor = "gray";
				}
				if ($("t24").innerHTML == "蓝瓶") {
					$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
					$("t24").innerHTML = "";
					$("t24").style.backgroundColor = "gray";
				}
				if ($("t24").innerHTML == "金币") {
					$("t24").innerHTML = "";
					$("t24").style.backgroundColor = "gray";
				}
				if ($("t24").innerHTML == "探索点") {
					$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
					$("t24").innerHTML = "";
					$("t24").style.backgroundColor = "gray";
				}
				if ($("t24").innerHTML == "攻击力") {
					$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
					$("t24").innerHTML = "";
					$("t24").style.backgroundColor = "gray";
				}
				if ($("t24").innerHTML == "魔力") {
					$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
					$("t24").innerHTML = "";
					$("t24").style.backgroundColor = "gray";
				}
				if ($("t24").innerHTML == "钥匙") {
					$("key").innerHTML = 1;
					$("t24").innerHTML = "";
					$("t24").style.backgroundColor = "gray";
				}
				if ($("t24").innerHTML == "门") {
					if ($("key").innerHTML == 1) {
						restart();
					}
				}
				if ($("t24").innerHTML == "卷轴") {
					$("t24").innerHTML = "";
					$("t24").style.backgroundColor = "gray";
				}
				if ($("t24").innerHTML == "装备") {
					$("t24").innerHTML = "";
					$("t24").style.backgroundColor = "gray";
				} else if ($("t24").innerHTML[34] == "1") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
					$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx1").innerHTML) <= 0) {
						$("t24").innerHTML = "";
						$("t24").style.backgroundColor = "gray";
					}
				} else if ($("t24").innerHTML[34] == "2") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
					$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx2").innerHTML) <= 0) {
						$("t24").innerHTML = "";
						$("t24").style.backgroundColor = "gray";
					}
				} else if ($("t24").innerHTML[34] == "3") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
					$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx3").innerHTML) <= 0) {
						$("t24").innerHTML = "";
						$("t24").style.backgroundColor = "gray";
					}
				} else if ($("t24").innerHTML[34] == "4") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
					$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx4").innerHTML) <= 0) {
						$("t24").innerHTML = "";
						$("t24").style.backgroundColor = "gray";
					}
				} else if ($("t24").innerHTML[34] == "5") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
					$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx5").innerHTML) <= 0) {
						$("t24").innerHTML = "";
						$("t24").style.backgroundColor = "gray";
					}
				}
			}
		}
}
function c25(){
	if($("t19").innerHTML.length<10&&$("t20").innerHTML.length<10&&$("t24").innerHTML.length<10&&$("t29").innerHTML.length<10&&$("t30").innerHTML.length<10&&($("t15").style.backgroundColor!=""||$("t24").style.backgroundColor!=""||$("t30").style.backgroundColor!="")) {
		if ($("t25").style.backgroundColor == "") {
			if (arr5[4] == 11) {
				$("t25").style.backgroundColor = "black";
				$("t25").style.color = "white";
				$("t25").innerHTML = guai1;
			} else if (arr5[4] == 12) {
				$("t25").style.backgroundColor = "black";
				$("t25").style.color = "white";
				$("t25").innerHTML = guai2;
			} else if (arr5[4] == 13) {
				$("t25").style.backgroundColor = "black";
				$("t25").style.color = "white";
				$("t25").innerHTML = guai3;
			} else if (arr5[4] == 14) {
				$("t25").style.backgroundColor = "black";
				$("t25").style.color = "white";
				$("t25").innerHTML = guai4;
			} else if (arr5[4] == 15) {
				$("t25").style.backgroundColor = "black";
				$("t25").style.color = "white";
				$("t25").innerHTML = guai5;
			} else if (arr5[4] == 1) {
				$("t25").style.backgroundColor = "red";
				$("t25").innerHTML = "血瓶";
			} else if (arr5[4] == 2) {
				$("t25").style.backgroundColor = "blue";
				$("t25").innerHTML = "蓝瓶";
			} else if (arr5[4] == 3) {
				$("t25").style.backgroundColor = "#00ff00";
				$("t25").innerHTML = "装备";
			} else if (arr5[4] == 4) {
				$("t25").style.backgroundColor = "#ff00ff";
				$("t25").innerHTML = "卷轴";
			} else if (arr5[4] == 5) {
				$("t25").style.backgroundColor = "#33ffff";
				$("t25").innerHTML = "探索点";
			} else if (arr5[4] == 6) {
				$("t25").style.backgroundColor = "yellow";
				$("t25").innerHTML = "金币";
			} else if (arr5[4] == 7) {
				$("t25").style.backgroundColor = "#ff7600";
				$("t25").innerHTML = "钥匙";
			} else if (arr5[4] == 8) {
				$("t25").style.backgroundColor = "#888";
				$("t25").style.color = "white";
				$("t25").innerHTML = "门";
				$("t25").disable = "true";
			} else if (arr5[4] == 9) {
				$("t25").style.backgroundColor = "orange";
				$("t25").innerHTML = "攻击力";
			} else if (arr5[4] == 10) {
				$("t25").style.backgroundColor = "purple";
				$("t25").innerHTML = "魔力";
			}
		} else {
			if ($("t25").innerHTML == "血瓶") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
				$("t25").innerHTML = "";
				$("t25").style.backgroundColor = "gray";
			}
			if ($("t25").innerHTML == "蓝瓶") {
				$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
				$("t25").innerHTML = "";
				$("t25").style.backgroundColor = "gray";
			}
			if ($("t25").innerHTML == "金币") {
				$("t25").innerHTML = "";
				$("t25").style.backgroundColor = "gray";
			}
			if ($("t25").innerHTML == "探索点") {
				$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
				$("t25").innerHTML = "";
				$("t25").style.backgroundColor = "gray";
			}
			if ($("t25").innerHTML == "攻击力") {
				$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
				$("t25").innerHTML = "";
				$("t25").style.backgroundColor = "gray";
			}
			if ($("t25").innerHTML == "魔力") {
				$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
				$("t25").innerHTML = "";
				$("t25").style.backgroundColor = "gray";
			}
			if ($("t25").innerHTML == "钥匙") {
				$("key").innerHTML = 1;
				$("t25").innerHTML = "";
				$("t25").style.backgroundColor = "gray";
			}
			if ($("t25").innerHTML == "门") {
				if ($("key").innerHTML == 1) {
					restart();
				}
			}
			if ($("t25").innerHTML == "卷轴") {
				$("t25").innerHTML = "";
				$("t25").style.backgroundColor = "gray";
			}
			if ($("t25").innerHTML == "装备") {
				$("t25").innerHTML = "";
				$("t25").style.backgroundColor = "gray";
			} else if ($("t25").innerHTML[34] == "1") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
				$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx1").innerHTML) <= 0) {
					$("t25").innerHTML = "";
					$("t25").style.backgroundColor = "gray";
				}
			} else if ($("t25").innerHTML[34] == "2") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
				$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx2").innerHTML) <= 0) {
					$("t25").innerHTML = "";
					$("t25").style.backgroundColor = "gray";
				}
			} else if ($("t25").innerHTML[34] == "3") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
				$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx3").innerHTML) <= 0) {
					$("t25").innerHTML = "";
					$("t25").style.backgroundColor = "gray";
				}
			} else if ($("t25").innerHTML[34] == "4") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
				$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx4").innerHTML) <= 0) {
					$("t25").innerHTML = "";
					$("t25").style.backgroundColor = "gray";
				}
			} else if ($("t25").innerHTML[34] == "5") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
				$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx5").innerHTML) <= 0) {
					$("t25").innerHTML = "";
					$("t25").style.backgroundColor = "gray";
				}
			}
		}
	}
}
function c26(){
	if($("t21").innerHTML.length<10&&$("t22").innerHTML.length<10&&$("t27").innerHTML.length<10&&($("t21").style.backgroundColor!=""||$("t26").style.backgroundColor!="")) {
		if ($("t26").style.backgroundColor == "") {
			if (arr6[0] == 11) {
				$("t26").style.backgroundColor = "black";
				$("t26").style.color = "white";
				$("t26").innerHTML = guai1;
			} else if (arr6[0] == 12) {
				$("t26").style.backgroundColor = "black";
				$("t26").style.color = "white";
				$("t26").innerHTML = guai2;
			} else if (arr6[0] == 13) {
				$("t26").style.backgroundColor = "black";
				$("t26").style.color = "white";
				$("t26").innerHTML = guai3;
			} else if (arr6[0] == 14) {
				$("t26").style.backgroundColor = "black";
				$("t26").style.color = "white";
				$("t26").innerHTML = guai4;
			} else if (arr6[0] == 15) {
				$("t26").style.backgroundColor = "black";
				$("t26").style.color = "white";
				$("t26").innerHTML = guai5;
			} else if (arr6[0] == 1) {
				$("t26").style.backgroundColor = "red";
				$("t26").innerHTML = "血瓶";
			} else if (arr6[0] == 2) {
				$("t26").style.backgroundColor = "blue";
				$("t26").innerHTML = "蓝瓶";
			} else if (arr6[0] == 3) {
				$("t26").style.backgroundColor = "#00ff00";
				$("t26").innerHTML = "装备";
			} else if (arr6[0] == 4) {
				$("t26").style.backgroundColor = "#ff00ff";
				$("t26").innerHTML = "卷轴";
			} else if (arr6[0] == 5) {
				$("t26").style.backgroundColor = "#33ffff";
				$("t26").innerHTML = "探索点";
			} else if (arr6[0] == 6) {
				$("t26").style.backgroundColor = "yellow";
				$("t26").innerHTML = "金币";
			} else if (arr6[0] == 7) {
				$("t26").style.backgroundColor = "#ff7600";
				$("t26").innerHTML = "钥匙";
			} else if (arr6[0] == 8) {
				$("t26").style.backgroundColor = "#888";
				$("t26").style.color = "white";
				$("t26").innerHTML = "门";
				$("t26").disable = "true";
			} else if (arr6[0] == 9) {
				$("t26").style.backgroundColor = "orange";
				$("t26").innerHTML = "攻击力";
			} else if (arr6[0] == 10) {
				$("t26").style.backgroundColor = "purple";
				$("t26").innerHTML = "魔力";
			}
		} else {
			if ($("t26").innerHTML == "血瓶") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
				$("t26").innerHTML = "";
				$("t26").style.backgroundColor = "gray";
			}
			if ($("t26").innerHTML == "蓝瓶") {
				$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
				$("t26").innerHTML = "";
				$("t26").style.backgroundColor = "gray";
			}
			if ($("t26").innerHTML == "金币") {
				$("t26").innerHTML = "";
				$("t26").style.backgroundColor = "gray";
			}
			if ($("t26").innerHTML == "探索点") {
				$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
				$("t26").innerHTML = "";
				$("t26").style.backgroundColor = "gray";
			}
			if ($("t26").innerHTML == "攻击力") {
				$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
				$("t26").innerHTML = "";
				$("t26").style.backgroundColor = "gray";
			}
			if ($("t26").innerHTML == "魔力") {
				$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
				$("t26").innerHTML = "";
				$("t26").style.backgroundColor = "gray";
			}
			if ($("t26").innerHTML == "钥匙") {
				$("key").innerHTML = 1;
				$("t26").innerHTML = "";
				$("t26").style.backgroundColor = "gray";
			}
			if ($("t26").innerHTML == "门") {
				if ($("key").innerHTML == 1) {
					restart();
				}
			}
			if ($("t26").innerHTML == "卷轴") {
				$("t26").innerHTML = "";
				$("t26").style.backgroundColor = "gray";
			}
			if ($("t26").innerHTML == "装备") {
				$("t26").innerHTML = "";
				$("t26").style.backgroundColor = "gray";
			} else if ($("t26").innerHTML[34] == "1") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
				$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx1").innerHTML) <= 0) {
					$("t26").innerHTML = "";
					$("t26").style.backgroundColor = "gray";
				}
			} else if ($("t26").innerHTML[34] == "2") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
				$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx2").innerHTML) <= 0) {
					$("t26").innerHTML = "";
					$("t26").style.backgroundColor = "gray";
				}
			} else if ($("t26").innerHTML[34] == "3") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
				$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx3").innerHTML) <= 0) {
					$("t26").innerHTML = "";
					$("t26").style.backgroundColor = "gray";
				}
			} else if ($("t26").innerHTML[34] == "4") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
				$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx4").innerHTML) <= 0) {
					$("t26").innerHTML = "";
					$("t26").style.backgroundColor = "gray";
				}
			} else if ($("t26").innerHTML[34] == "5") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
				$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx5").innerHTML) <= 0) {
					$("t26").innerHTML = "";
					$("t26").style.backgroundColor = "gray";
				}
			}
		}
	}
}
function c27(){
	if($("t21").innerHTML.length<10&&$("t22").innerHTML.length<10&&$("t23").innerHTML.length<10&&$("t26").innerHTML.length<10&&$("t28").innerHTML.length<10&&($("t22").style.backgroundColor!=""||$("t26").style.backgroundColor!=""||$("t28").style.backgroundColor!="")) {
		if ($("t27").style.backgroundColor == "") {
			if (arr6[1] == 11) {
				$("t27").style.backgroundColor = "black";
				$("t27").style.color = "white";
				$("t27").innerHTML = guai1;
			} else if (arr6[1] == 12) {
				$("t27").style.backgroundColor = "black";
				$("t27").style.color = "white";
				$("t27").innerHTML = guai2;
			} else if (arr6[1] == 13) {
				$("t27").style.backgroundColor = "black";
				$("t27").style.color = "white";
				$("t27").innerHTML = guai3;
			} else if (arr6[1] == 14) {
				$("t27").style.backgroundColor = "black";
				$("t27").style.color = "white";
				$("t27").innerHTML = guai4;
			} else if (arr6[1] == 15) {
				$("t27").style.backgroundColor = "black";
				$("t27").style.color = "white";
				$("t27").innerHTML = guai5;
			} else if (arr6[1] == 1) {
				$("t27").style.backgroundColor = "red";
				$("t27").innerHTML = "血瓶";
			} else if (arr6[1] == 2) {
				$("t27").style.backgroundColor = "blue";
				$("t27").innerHTML = "蓝瓶";
			} else if (arr6[1] == 3) {
				$("t27").style.backgroundColor = "#00ff00";
				$("t27").innerHTML = "装备";
			} else if (arr6[1] == 4) {
				$("t27").style.backgroundColor = "#ff00ff";
				$("t27").innerHTML = "卷轴";
			} else if (arr6[1] == 5) {
				$("t27").style.backgroundColor = "#33ffff";
				$("t27").innerHTML = "探索点";
			} else if (arr6[1] == 6) {
				$("t27").style.backgroundColor = "yellow";
				$("t27").innerHTML = "金币";
			} else if (arr6[1] == 7) {
				$("t27").style.backgroundColor = "#ff7600";
				$("t27").innerHTML = "钥匙";
			} else if (arr6[1] == 8) {
				$("t27").style.backgroundColor = "#888";
				$("t27").style.color = "white";
				$("t27").innerHTML = "门";
				$("t27").disable = "true";
			} else if (arr6[1] == 9) {
				$("t27").style.backgroundColor = "orange";
				$("t27").innerHTML = "攻击力";
			} else if (arr6[1] == 10) {
				$("t27").style.backgroundColor = "purple";
				$("t27").innerHTML = "魔力";
			}
		} else {
			if ($("t27").innerHTML == "血瓶") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
				$("t27").innerHTML = "";
				$("t27").style.backgroundColor = "gray";
			}
			if ($("t27").innerHTML == "蓝瓶") {
				$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
				$("t27").innerHTML = "";
				$("t27").style.backgroundColor = "gray";
			}
			if ($("t27").innerHTML == "金币") {
				$("t27").innerHTML = "";
				$("t27").style.backgroundColor = "gray";
			}
			if ($("t27").innerHTML == "探索点") {
				$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
				$("t27").innerHTML = "";
				$("t27").style.backgroundColor = "gray";
			}
			if ($("t27").innerHTML == "攻击力") {
				$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
				$("t27").innerHTML = "";
				$("t27").style.backgroundColor = "gray";
			}
			if ($("t27").innerHTML == "魔力") {
				$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
				$("t27").innerHTML = "";
				$("t27").style.backgroundColor = "gray";
			}
			if ($("t27").innerHTML == "钥匙") {
				$("key").innerHTML = 1;
				$("t27").innerHTML = "";
				$("t27").style.backgroundColor = "gray";
			}
			if ($("t27").innerHTML == "门") {
				if ($("key").innerHTML == 1) {
					restart();
				}
			}
			if ($("t27").innerHTML == "卷轴") {
				$("t27").innerHTML = "";
				$("t27").style.backgroundColor = "gray";
			}
			if ($("t27").innerHTML == "装备") {
				$("t27").innerHTML = "";
				$("t27").style.backgroundColor = "gray";
			} else if ($("t27").innerHTML[34] == "1") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
				$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx1").innerHTML) <= 0) {
					$("t27").innerHTML = "";
					$("t27").style.backgroundColor = "gray";
				}
			} else if ($("t27").innerHTML[34] == "2") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
				$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx2").innerHTML) <= 0) {
					$("t27").innerHTML = "";
					$("t27").style.backgroundColor = "gray";
				}
			} else if ($("t27").innerHTML[34] == "3") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
				$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx3").innerHTML) <= 0) {
					$("t27").innerHTML = "";
					$("t27").style.backgroundColor = "gray";
				}
			} else if ($("t27").innerHTML[34] == "4") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
				$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx4").innerHTML) <= 0) {
					$("t27").innerHTML = "";
					$("t27").style.backgroundColor = "gray";
				}
			} else if ($("t27").innerHTML[34] == "5") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
				$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx5").innerHTML) <= 0) {
					$("t27").innerHTML = "";
					$("t27").style.backgroundColor = "gray";
				}
			}
		}
	}
}
function c28(){
	if($("t22").innerHTML.length<10&&$("t23").innerHTML.length<10&&$("t24").innerHTML.length<10&&$("t27").innerHTML.length<10&&$("t29").innerHTML.length<10&&($("t23").style.backgroundColor!=""||$("t27").style.backgroundColor!=""||$("t29").style.backgroundColor!="")) {
		if ($("t28").style.backgroundColor == "") {
			if (arr6[2] == 11) {
				$("t28").style.backgroundColor = "black";
				$("t28").style.color = "white";
				$("t28").innerHTML = guai1;
			} else if (arr6[2] == 12) {
				$("t28").style.backgroundColor = "black";
				$("t28").style.color = "white";
				$("t28").innerHTML = guai2;
			} else if (arr6[2] == 13) {
				$("t28").style.backgroundColor = "black";
				$("t28").style.color = "white";
				$("t28").innerHTML = guai3;
			} else if (arr6[2] == 14) {
				$("t28").style.backgroundColor = "black";
				$("t28").style.color = "white";
				$("t28").innerHTML = guai4;
			} else if (arr6[2] == 15) {
				$("t28").style.backgroundColor = "black";
				$("t28").style.color = "white";
				$("t28").innerHTML = guai5;
			} else if (arr6[2] == 1) {
				$("t28").style.backgroundColor = "red";
				$("t28").innerHTML = "血瓶";
			} else if (arr6[2] == 2) {
				$("t28").style.backgroundColor = "blue";
				$("t28").innerHTML = "蓝瓶";
			} else if (arr6[2] == 3) {
				$("t28").style.backgroundColor = "#00ff00";
				$("t28").innerHTML = "装备";
			} else if (arr6[2] == 4) {
				$("t28").style.backgroundColor = "#ff00ff";
				$("t28").innerHTML = "卷轴";
			} else if (arr6[2] == 5) {
				$("t28").style.backgroundColor = "#33ffff";
				$("t28").innerHTML = "探索点";
			} else if (arr6[2] == 6) {
				$("t28").style.backgroundColor = "yellow";
				$("t28").innerHTML = "金币";
			} else if (arr6[2] == 7) {
				$("t28").style.backgroundColor = "#ff7600";
				$("t28").innerHTML = "钥匙";
			} else if (arr6[2] == 8) {
				$("t28").style.backgroundColor = "#888";
				$("t28").style.color = "white";
				$("t28").innerHTML = "门";
				$("t28").disable = "true";
			} else if (arr6[2] == 9) {
				$("t28").style.backgroundColor = "orange";
				$("t28").innerHTML = "攻击力";
			} else if (arr6[2] == 10) {
				$("t28").style.backgroundColor = "purple";
				$("t28").innerHTML = "魔力";
			}
		} else {
			if ($("t28").innerHTML == "血瓶") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
				$("t28").innerHTML = "";
				$("t28").style.backgroundColor = "gray";
			}
			if ($("t28").innerHTML == "蓝瓶") {
				$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
				$("t28").innerHTML = "";
				$("t28").style.backgroundColor = "gray";
			}
			if ($("t28").innerHTML == "金币") {
				$("t28").innerHTML = "";
				$("t28").style.backgroundColor = "gray";
			}
			if ($("t28").innerHTML == "探索点") {
				$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
				$("t28").innerHTML = "";
				$("t28").style.backgroundColor = "gray";
			}
			if ($("t28").innerHTML == "攻击力") {
				$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
				$("t28").innerHTML = "";
				$("t28").style.backgroundColor = "gray";
			}
			if ($("t28").innerHTML == "魔力") {
				$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
				$("t28").innerHTML = "";
				$("t28").style.backgroundColor = "gray";
			}
			if ($("t28").innerHTML == "钥匙") {
				$("key").innerHTML = 1;
				$("t28").innerHTML = "";
				$("t28").style.backgroundColor = "gray";
			}
			if ($("t28").innerHTML == "门") {
				if ($("key").innerHTML == 1) {
					restart();
				}
			}
			if ($("t28").innerHTML == "卷轴") {
				$("t28").innerHTML = "";
				$("t28").style.backgroundColor = "gray";
			}
			if ($("t28").innerHTML == "装备") {
				$("t28").innerHTML = "";
				$("t28").style.backgroundColor = "gray";
			} else if ($("t28").innerHTML[34] == "1") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
				$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx1").innerHTML) <= 0) {
					$("t28").innerHTML = "";
					$("t28").style.backgroundColor = "gray";
				}
			} else if ($("t28").innerHTML[34] == "2") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
				$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx2").innerHTML) <= 0) {
					$("t28").innerHTML = "";
					$("t28").style.backgroundColor = "gray";
				}
			} else if ($("t28").innerHTML[34] == "3") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
				$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx3").innerHTML) <= 0) {
					$("t28").innerHTML = "";
					$("t28").style.backgroundColor = "gray";
				}
			} else if ($("t28").innerHTML[34] == "4") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
				$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx4").innerHTML) <= 0) {
					$("t28").innerHTML = "";
					$("t28").style.backgroundColor = "gray";
				}
			} else if ($("t28").innerHTML[34] == "5") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
				$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx5").innerHTML) <= 0) {
					$("t28").innerHTML = "";
					$("t28").style.backgroundColor = "gray";
				}
			}
		}
	}
}
function c29(){
	if($("t23").innerHTML.length<10&&$("t24").innerHTML.length<10&&$("t25").innerHTML.length<10&&$("t28").innerHTML.length<10&&$("t30").innerHTML.length<10&&($("t24").style.backgroundColor!=""||$("t28").style.backgroundColor!=""||$("t30").style.backgroundColor!="")) {
		if ($("t29").style.backgroundColor == "") {
			if (arr6[3] == 11) {
				$("t29").style.backgroundColor = "black";
				$("t29").style.color = "white";
				$("t29").innerHTML = guai1;
			} else if (arr6[3] == 12) {
				$("t29").style.backgroundColor = "black";
				$("t29").style.color = "white";
				$("t29").innerHTML = guai2;
			} else if (arr6[3] == 13) {
				$("t29").style.backgroundColor = "black";
				$("t29").style.color = "white";
				$("t29").innerHTML = guai3;
			} else if (arr6[3] == 14) {
				$("t29").style.backgroundColor = "black";
				$("t29").style.color = "white";
				$("t29").innerHTML = guai4;
			} else if (arr6[3] == 15) {
				$("t29").style.backgroundColor = "black";
				$("t29").style.color = "white";
				$("t29").innerHTML = guai5;
			} else if (arr6[3] == 1) {
				$("t29").style.backgroundColor = "red";
				$("t29").innerHTML = "血瓶";
			} else if (arr6[3] == 2) {
				$("t29").style.backgroundColor = "blue";
				$("t29").innerHTML = "蓝瓶";
			} else if (arr6[3] == 3) {
				$("t29").style.backgroundColor = "#00ff00";
				$("t29").innerHTML = "装备";
			} else if (arr6[3] == 4) {
				$("t29").style.backgroundColor = "#ff00ff";
				$("t29").innerHTML = "卷轴";
			} else if (arr6[3] == 5) {
				$("t29").style.backgroundColor = "#33ffff";
				$("t29").innerHTML = "探索点";
			} else if (arr6[3] == 6) {
				$("t29").style.backgroundColor = "yellow";
				$("t29").innerHTML = "金币";
			} else if (arr6[3] == 7) {
				$("t29").style.backgroundColor = "#ff7600";
				$("t29").innerHTML = "钥匙";
			} else if (arr6[3] == 8) {
				$("t29").style.backgroundColor = "#888";
				$("t29").style.color = "white";
				$("t29").innerHTML = "门";
				$("t29").disable = "true";
			} else if (arr6[3] == 9) {
				$("t29").style.backgroundColor = "orange";
				$("t29").innerHTML = "攻击力";
			} else if (arr6[3] == 10) {
				$("t29").style.backgroundColor = "purple";
				$("t29").innerHTML = "魔力";
			}
		} else {
			if ($("t29").innerHTML == "血瓶") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
				$("t29").innerHTML = "";
				$("t29").style.backgroundColor = "gray";
			}
			if ($("t29").innerHTML == "蓝瓶") {
				$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
				$("t29").innerHTML = "";
				$("t29").style.backgroundColor = "gray";
			}
			if ($("t29").innerHTML == "金币") {
				$("t29").innerHTML = "";
				$("t29").style.backgroundColor = "gray";
			}
			if ($("t29").innerHTML == "探索点") {
				$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
				$("t29").innerHTML = "";
				$("t29").style.backgroundColor = "gray";
			}
			if ($("t29").innerHTML == "攻击力") {
				$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
				$("t29").innerHTML = "";
				$("t29").style.backgroundColor = "gray";
			}
			if ($("t29").innerHTML == "魔力") {
				$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
				$("t29").innerHTML = "";
				$("t29").style.backgroundColor = "gray";
			}
			if ($("t29").innerHTML == "钥匙") {
				$("key").innerHTML = 1;
				$("t29").innerHTML = "";
				$("t29").style.backgroundColor = "gray";
			}
			if ($("t29").innerHTML == "门") {
				if ($("key").innerHTML == 1) {
					restart();
				}
			}
			if ($("t29").innerHTML == "卷轴") {
				$("t29").innerHTML = "";
				$("t29").style.backgroundColor = "gray";
			}
			if ($("t29").innerHTML == "装备") {
				$("t29").innerHTML = "";
				$("t29").style.backgroundColor = "gray";
			} else if ($("t29").innerHTML[34] == "1") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
				$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx1").innerHTML) <= 0) {
					$("t29").innerHTML = "";
					$("t29").style.backgroundColor = "gray";
				}
			} else if ($("t29").innerHTML[34] == "2") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
				$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx2").innerHTML) <= 0) {
					$("t29").innerHTML = "";
					$("t29").style.backgroundColor = "gray";
				}
			} else if ($("t29").innerHTML[34] == "3") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
				$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx3").innerHTML) <= 0) {
					$("t29").innerHTML = "";
					$("t29").style.backgroundColor = "gray";
				}
			} else if ($("t29").innerHTML[34] == "4") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
				$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx4").innerHTML) <= 0) {
					$("t29").innerHTML = "";
					$("t29").style.backgroundColor = "gray";
				}
			} else if ($("t29").innerHTML[34] == "5") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
				$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx5").innerHTML) <= 0) {
					$("t29").innerHTML = "";
					$("t29").style.backgroundColor = "gray";
				}
			}
		}
	}
}
function c30(){
	if($("t24").innerHTML.length<10&&$("t25").innerHTML.length<10&&$("t29").innerHTML.length<10&&($("t25").style.backgroundColor!=""||$("t29").style.backgroundColor!="")) {
		if ($("t30").style.backgroundColor == "") {
			if (arr6[4] == 11) {
				$("t30").style.backgroundColor = "black";
				$("t30").style.color = "white";
				$("t30").innerHTML = guai1;
			} else if (arr6[4] == 12) {
				$("t30").style.backgroundColor = "black";
				$("t30").style.color = "white";
				$("t30").innerHTML = guai2;
			} else if (arr6[4] == 13) {
				$("t30").style.backgroundColor = "black";
				$("t30").style.color = "white";
				$("t30").innerHTML = guai3;
			} else if (arr6[4] == 14) {
				$("t30").style.backgroundColor = "black";
				$("t30").style.color = "white";
				$("t30").innerHTML = guai4;
			} else if (arr6[4] == 15) {
				$("t30").style.backgroundColor = "black";
				$("t30").style.color = "white";
				$("t30").innerHTML = guai5;
			} else if (arr6[4] == 1) {
				$("t30").style.backgroundColor = "red";
				$("t30").innerHTML = "血瓶";
			} else if (arr6[4] == 2) {
				$("t30").style.backgroundColor = "blue";
				$("t30").innerHTML = "蓝瓶";
			} else if (arr6[4] == 3) {
				$("t30").style.backgroundColor = "#00ff00";
				$("t30").innerHTML = "装备";
			} else if (arr6[4] == 4) {
				$("t30").style.backgroundColor = "#ff00ff";
				$("t30").innerHTML = "卷轴";
			} else if (arr6[4] == 5) {
				$("t30").style.backgroundColor = "#33ffff";
				$("t30").innerHTML = "探索点";
			} else if (arr6[4] == 6) {
				$("t30").style.backgroundColor = "yellow";
				$("t30").innerHTML = "金币";
			} else if (arr6[4] == 7) {
				$("t30").style.backgroundColor = "#ff7600";
				$("t30").innerHTML = "钥匙";
			} else if (arr6[4] == 8) {
				$("t30").style.backgroundColor = "#888";
				$("t30").style.color = "white";
				$("t30").innerHTML = "门";
				$("t30").disable = "true";
			} else if (arr6[4] == 9) {
				$("t30").style.backgroundColor = "orange";
				$("t30").innerHTML = "攻击力";
			} else if (arr6[4] == 10) {
				$("t30").style.backgroundColor = "purple";
				$("t30").innerHTML = "魔力";
			}
		} else {
			if ($("t30").innerHTML == "血瓶") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
				$("t30").innerHTML = "";
				$("t30").style.backgroundColor = "gray";
			}
			if ($("t30").innerHTML == "蓝瓶") {
				$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
				$("t30").innerHTML = "";
				$("t30").style.backgroundColor = "gray";
			}
			if ($("t30").innerHTML == "金币") {
				$("t30").innerHTML = "";
				$("t30").style.backgroundColor = "gray";
			}
			if ($("t30").innerHTML == "探索点") {
				$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
				$("t30").innerHTML = "";
				$("t30").style.backgroundColor = "gray";
			}
			if ($("t30").innerHTML == "攻击力") {
				$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
				$("t30").innerHTML = "";
				$("t30").style.backgroundColor = "gray";
			}
			if ($("t30").innerHTML == "魔力") {
				$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
				$("t30").innerHTML = "";
				$("t30").style.backgroundColor = "gray";
			}
			if ($("t30").innerHTML == "钥匙") {
				$("key").innerHTML = 1;
				$("t30").innerHTML = "";
				$("t30").style.backgroundColor = "gray";
			}
			if ($("t30").innerHTML == "门") {
				if ($("key").innerHTML == 1) {
					restart();
				}
			}
			if ($("t30").innerHTML == "卷轴") {
				$("t30").innerHTML = "";
				$("t30").style.backgroundColor = "gray";
			}
			if ($("t30").innerHTML == "装备") {
				$("t30").innerHTML = "";
				$("t30").style.backgroundColor = "gray";
			} else if ($("t30").innerHTML[34] == "1") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
				$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx1").innerHTML) <= 0) {
					$("t30").innerHTML = "";
					$("t30").style.backgroundColor = "gray";
				}
			} else if ($("t30").innerHTML[34] == "2") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
				$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx2").innerHTML) <= 0) {
					$("t30").innerHTML = "";
					$("t30").style.backgroundColor = "gray";
				}
			} else if ($("t30").innerHTML[34] == "3") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
				$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx3").innerHTML) <= 0) {
					$("t30").innerHTML = "";
					$("t30").style.backgroundColor = "gray";
				}
			} else if ($("t30").innerHTML[34] == "4") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
				$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx4").innerHTML) <= 0) {
					$("t30").innerHTML = "";
					$("t30").style.backgroundColor = "gray";
				}
			} else if ($("t30").innerHTML[34] == "5") {
				$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
				$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
				if (parseInt($("gx5").innerHTML) <= 0) {
					$("t30").innerHTML = "";
					$("t30").style.backgroundColor = "gray";
				}
			}
		}
	}
}
function restart(){
	$("key").innerHTML=0;
	$("t01").innerHTML="";
	$("t01").style.backgroundColor="";
	$("t01").style.color="black";
	$("t02").innerHTML="";
	$("t02").style.backgroundColor="";
	$("t02").style.color="black";
	$("t03").innerHTML="";
	$("t03").style.backgroundColor="";
	$("t03").style.color="black";
	$("t04").innerHTML="";
	$("t04").style.backgroundColor="";
	$("t04").style.color="black";
	$("t05").innerHTML="";
	$("t05").style.backgroundColor="";
	$("t05").style.color="black";
	$("t06").innerHTML="";
	$("t06").style.backgroundColor="";
	$("t06").style.color="black";
	$("t07").innerHTML="";
	$("t07").style.backgroundColor="";
	$("t07").style.color="black";
	$("t08").innerHTML="";
	$("t08").style.backgroundColor="";
	$("t08").style.color="black";
	$("t09").innerHTML="";
	$("t09").style.backgroundColor="";
	$("t09").style.color="black";
	$("t10").innerHTML="";
	$("t10").style.backgroundColor="";
	$("t10").style.color="black";
	$("t11").innerHTML="";
	$("t11").style.backgroundColor="";
	$("t11").style.color="black";
	$("t12").innerHTML="";
	$("t12").style.backgroundColor="";
	$("t12").style.color="black";
	$("t13").innerHTML="";
	$("t13").style.backgroundColor="";
	$("t13").style.color="black";
	$("t14").innerHTML="";
	$("t14").style.backgroundColor="";
	$("t14").style.color="black";
	$("t15").innerHTML="";
	$("t15").style.backgroundColor="";
	$("t15").style.color="black";
	$("t16").innerHTML="";
	$("t16").style.backgroundColor="";
	$("t16").style.color="black";
	$("t17").innerHTML="";
	$("t17").style.backgroundColor="";
	$("t17").style.color="black";
	$("t18").innerHTML="";
	$("t18").style.backgroundColor="";
	$("t18").style.color="black";
	$("t19").innerHTML="";
	$("t19").style.backgroundColor="";
	$("t19").style.color="black";
	$("t20").innerHTML="";
	$("t20").style.backgroundColor="";
	$("t20").style.color="black";
	$("t21").innerHTML="";
	$("t21").style.backgroundColor="";
	$("t21").style.color="black";
	$("t22").innerHTML="";
	$("t22").style.backgroundColor="";
	$("t22").style.color="black";
	$("t23").innerHTML="";
	$("t23").style.backgroundColor="";
	$("t23").style.color="black";
	$("t24").innerHTML="";
	$("t24").style.backgroundColor="";
	$("t24").style.color="black";
	$("t25").innerHTML="";
	$("t25").style.backgroundColor="";
	$("t25").style.color="black";
	$("t26").innerHTML="";
	$("t26").style.backgroundColor="";
	$("t26").style.color="black";
	$("t27").innerHTML="";
	$("t27").style.backgroundColor="";
	$("t27").style.color="black";
	$("t28").innerHTML="";
	$("t28").style.backgroundColor="";
	$("t28").style.color="black";
	$("t29").innerHTML="";
	$("t29").style.backgroundColor="";
	$("t29").style.color="black";
	$("t30").innerHTML="";
	$("t30").style.backgroundColor="";
	$("t30").style.color="black";
	console.log(1);
	arr=[11,12,13,14,15,1,1,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,8,9,9,10,10];
	gg=gg+1;
	gx=gx+5;
	console.log(gx);
	function select(arrall){
		for (var i=0;i<5;i++)
		{
			var a=arr.length;
			var b=parseInt(a*Math.random());
			arrall[arrall.length]=arr[b];
			arr.splice(b,1);
		}
		return arrall;
	}
	arr1=[];
	arr2=[];
	arr3=[];
	arr4=[];
	arr5=[];
	arr6=[];
	(function(){
		select(arr1);
		select(arr2);
		select(arr3);
		select(arr4);
		select(arr5);
		select(arr6);
	if(arr1[0]==8){
		$("t01").style.backgroundColor="#888";
		$("t01").style.color="white";
		$("t01").innerHTML="门";
	}
	if(arr1[1]==8){
		$("t02").style.backgroundColor="#888";
		$("t02").style.color="white";
		$("t02").innerHTML="门";
	}
	if(arr1[2]==8){
		$("t03").style.backgroundColor="#888";
		$("t03").style.color="white";
		$("t03").innerHTML="门";
	}
	if(arr1[3]==8){
		$("t04").style.backgroundColor="#888";
		$("t04").style.color="white";
		$("t04").innerHTML="门";
	}
	if(arr1[4]==8){
		$("t05").style.backgroundColor="#888";
		$("t05").style.color="white";
		$("t05").innerHTML="门";
	}
	if(arr2[0]==8){
		$("t06").style.backgroundColor="#888";
		$("t06").style.color="white";
		$("t06").innerHTML="门";
	}
	if(arr2[1]==8){
		$("t07").style.backgroundColor="#888";
		$("t07").style.color="white";
		$("t07").innerHTML="门";
	}
	if(arr2[2]==8){
		$("t08").style.backgroundColor="#888";
		$("t08").style.color="white";
		$("t08").innerHTML="门";
	}
	if(arr2[3]==8){
		$("t09").style.backgroundColor="#888";
		$("t09").style.color="white";
		$("t09").innerHTML="门";
	}
	if(arr2[4]==8){
		$("t10").style.backgroundColor="#888";
		$("t10").style.color="white";
		$("t10").innerHTML="门";
	}
	if(arr3[0]==8){
		$("t11").style.backgroundColor="#888";
		$("t11").style.color="white";
		$("t11").innerHTML="门";
	}
	if(arr3[1]==8){
		$("t12").style.backgroundColor="#888";
		$("t12").style.color="white";
		$("t12").innerHTML="门";
	}
	if(arr3[2]==8){
		$("t13").style.backgroundColor="#888";
		$("t13").style.color="white";
		$("t13").innerHTML="门";
	}
	if(arr3[3]==8){
		$("t14").style.backgroundColor="#888";
		$("t14").style.color="white";
		$("t14").innerHTML="门";
	}
	if(arr3[4]==8){
		$("t15").style.backgroundColor="#888";
		$("t15").style.color="white";
		$("t15").innerHTML="门";
	}
	if(arr4[0]==8){
		$("t16").style.backgroundColor="#888";
		$("t16").style.color="white";
		$("t16").innerHTML="门";
	}
	if(arr4[1]==8){
		$("t17").style.backgroundColor="#888";
		$("t17").style.color="white";
		$("t17").innerHTML="门";
	}
	if(arr4[2]==8){
		$("t18").style.backgroundColor="#888";
		$("t18").style.color="white";
		$("t18").innerHTML="门";
	}
	if(arr4[3]==8){
		$("t19").style.backgroundColor="#888";
		$("t19").style.color="white";
		$("t19").innerHTML="门";
	}
	if(arr4[4]==8){
		$("t20").style.backgroundColor="#888";
		$("t20").style.color="white";
		$("t20").innerHTML="门";
	}
	if(arr5[0]==8){
		$("t21").style.backgroundColor="#888";
		$("t21").style.color="white";
		$("t21").innerHTML="门";
	}
	if(arr5[1]==8){
		$("t22").style.backgroundColor="#888";
		$("t22").style.color="white";
		$("t22").innerHTML="门";
	}
	if(arr5[2]==8){
		$("t23").style.backgroundColor="#888";
		$("t23").style.color="white";
		$("t23").innerHTML="门";
	}
	if(arr5[3]==8){
		$("t24").style.backgroundColor="#888";
		$("t24").style.color="white";
		$("t24").innerHTML="门";
	}
	if(arr5[4]==8){
		$("t25").style.backgroundColor="#888";
		$("t25").style.color="white";
		$("t25").innerHTML="门";
	}
	if(arr6[0]==8){
		$("t26").style.backgroundColor="#888";
		$("t26").style.color="white";
		$("t26").innerHTML="门";
	}
	if(arr6[1]==8){
		$("t27").style.backgroundColor="#888";
		$("t27").style.color="white";
		$("t27").innerHTML="门";
	}
	if(arr6[2]==8){
		$("t28").style.backgroundColor="#888";
		$("t28").style.color="white";
		$("t28").innerHTML="门";
	}
	if(arr6[3]==8){
		$("t29").style.backgroundColor="#888";
		$("t29").style.color="white";
		$("t29").innerHTML="门";
	}
	if(arr6[4]==8){
		$("t30").style.backgroundColor="#888";
		$("t30").style.color="white";
		$("t30").innerHTML="门";
	}
	})();
	guai1="<div style='font-size:12px'><div>怪1</div><div><span>血:</span><span id='gx1'>"+gx+"</span></div><div><span>攻:</span><span id='gg1'>"+gg+"</span></div></div>";
	guai2="<div style='font-size:12px'><div>怪2</div><div><span>血:</span><span id='gx2'>"+gx+"</span></div><div><span>攻:</span><span id='gg2'>"+gg+"</span></div></div>";
	guai3="<div style='font-size:12px'><div>怪3</div><div><span>血:</span><span id='gx3'>"+gx+"</span></div><div><span>攻:</span><span id='gg3'>"+gg+"</span></div></div>";
	guai4="<div style='font-size:12px'><div>怪4</div><div><span>血:</span><span id='gx4'>"+gx+"</span></div><div><span>攻:</span><span id='gg4'>"+gg+"</span></div></div>";
	guai5="<div style='font-size:12px'><div>怪5</div><div><span>血:</span><span id='gx5'>"+gx+"</span></div><div><span>攻:</span><span id='gg5'>"+gg+"</span></div></div>";
	lc+=1;
	$("loucen").innerHTML=lc;
	/*var	guai1="<div style='font-size:12px'><div>怪1</div><div><span>血:</span><span id='gx1'>"+gx+"</span></div><div><span>攻:</span><span id='gg1'>"+gg+"</span></div></div>";
	var	guai2="<div style='font-size:12px'><div>怪2</div><div><span>血:</span><span id='gx2'>"+gx+"</span></div><div><span>攻:</span><span id='gg2'>"+gg+"</span></div></div>";
	var	guai3="<div style='font-size:12px'><div>怪3</div><div><span>血:</span><span id='gx3'>"+gx+"</span></div><div><span>攻:</span><span id='gg3'>"+gg+"</span></div></div>";
	var	guai4="<div style='font-size:12px'><div>怪4</div><div><span>血:</span><span id='gx4'>"+gx+"</span></div><div><span>攻:</span><span id='gg4'>"+gg+"</span></div></div>";
	var	guai5="<div style='font-size:12px'><div>怪5</div><div><span>血:</span><span id='gx5'>"+gx+"</span></div><div><span>攻:</span><span id='gg5'>"+gg+"</span></div></div>";
	function c01(){
		if($("t02").innerHTML.length<=10&&$("t06").innerHTML.length<=10&&$("t07").innerHTML.length<=10&&($("t02").style.backgroundColor!=""||$("t06").style.backgroundColor!="")) {
			if ($("t01").style.backgroundColor == "") {
				if (arr1[0] == 11) {
					$("t01").style.backgroundColor = "black";
					$("t01").style.color = "white";
					$("t01").innerHTML = guai1;
				} else if (arr1[0] == 12) {
					$("t01").style.backgroundColor = "black";
					$("t01").style.color = "white";
					$("t01").innerHTML = guai2;
				} else if (arr1[0] == 13) {
					$("t01").style.backgroundColor = "black";
					$("t01").style.color = "white";
					$("t01").innerHTML = guai3;
				} else if (arr1[0] == 14) {
					$("t01").style.backgroundColor = "black";
					$("t01").style.color = "white";
					$("t01").innerHTML = guai4;
				} else if (arr1[0] == 15) {
					$("t01").style.backgroundColor = "black";
					$("t01").style.color = "white";
					$("t01").innerHTML = guai5;
				} else if (arr1[0] == 1) {
					$("t01").style.backgroundColor = "red";
					$("t01").innerHTML = "血瓶";
				} else if (arr1[0] == 2) {
					$("t01").style.backgroundColor = "blue";
					$("t01").innerHTML = "蓝瓶";
				} else if (arr1[0] == 3) {
					$("t01").style.backgroundColor = "#00ff00";
					$("t01").innerHTML = "装备";
				} else if (arr1[0] == 4) {
					$("t01").style.backgroundColor = "#ff00ff";
					$("t01").innerHTML = "卷轴";
				} else if (arr1[0] == 5) {
					$("t01").style.backgroundColor = "#33ffff";
					$("t01").innerHTML = "探索点";
				} else if (arr1[0] == 6) {
					$("t01").style.backgroundColor = "yellow";
					$("t01").innerHTML = "金币";
				} else if (arr1[0] == 7) {
					$("t01").style.backgroundColor = "#ff7600";
					$("t01").innerHTML = "钥匙";
				} else if (arr1[0] == 8) {
					$("t01").style.backgroundColor = "#888";
					$("t01").style.color = "white";
					$("t01").innerHTML = "门";
				} else if (arr1[0] == 9) {
					$("t01").style.backgroundColor = "orange";
					$("t01").innerHTML = "攻击力";
				} else if (arr1[0] == 10) {
					$("t01").style.backgroundColor = "purple";
					$("t01").innerHTML = "魔力";
				}
			}else {
				if ($("t01").innerHTML == "血瓶") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
					$("t01").innerHTML = "";
					$("t01").style.backgroundColor = "gray";
				}
				if ($("t01").innerHTML == "蓝瓶") {
					$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
					$("t01").innerHTML = "";
					$("t01").style.backgroundColor = "gray";
				}
				if ($("t01").innerHTML == "金币") {
					$("t01").innerHTML = "";
					$("t01").style.backgroundColor = "gray";
				}
				if ($("t01").innerHTML == "探索点") {
					$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
					$("t01").innerHTML = "";
					$("t01").style.backgroundColor = "gray";
				}
				if ($("t01").innerHTML == "攻击力") {
					$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
					$("t01").innerHTML = "";
					$("t01").style.backgroundColor = "gray";
				}
				if ($("t01").innerHTML == "魔力") {
					$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
					$("t01").innerHTML = "";
					$("t01").style.backgroundColor = "gray";
				}
				if ($("t01").innerHTML == "钥匙") {
					$("key").innerHTML = 1;
					$("t01").innerHTML = "";
					$("t01").style.backgroundColor = "gray";
				}
				if($("t01").innerHTML == "门"){
					if($("key").innerHTML == 1){
						restart();
					}
				}
				if ($("t01").innerHTML == "卷轴") {
					$("t01").innerHTML = "";
					$("t01").style.backgroundColor = "gray";
				}
				if ($("t01").innerHTML == "装备") {
					$("t01").innerHTML = "";
					$("t01").style.backgroundColor = "gray";
				} else if ($("t01").innerHTML[34] == "1") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
					$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx1").innerHTML) <= 0) {
						$("t01").innerHTML = "";
						$("t01").style.backgroundColor = "gray";
					}
				} else if ($("t01").innerHTML[34] == "2") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
					$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx2").innerHTML) <= 0) {
						$("t01").innerHTML = "";
						$("t01").style.backgroundColor = "gray";
					}
				} else if ($("t01").innerHTML[34] == "3") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
					$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx3").innerHTML) <= 0) {
						$("t01").innerHTML = "";
						$("t01").style.backgroundColor = "gray";
					}
				} else if ($("t01").innerHTML[34] == "4") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
					$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx4").innerHTML) <= 0) {
						$("t01").innerHTML = "";
						$("t01").style.backgroundColor = "gray";
					}
				} else if ($("t01").innerHTML[34] == "5") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
					$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx5").innerHTML) <= 0) {
						$("t01").innerHTML = "";
						$("t01").style.backgroundColor = "gray";
					}
				}
			}
		}
	}

	function c02(){
		if($("t01").innerHTML.length<10&&$("t03").innerHTML.length<10&&$("t06").innerHTML.length<10&&$("t07").innerHTML.length<10&&$("t08").innerHTML.length<10&&($("t01").style.backgroundColor!=""||$("t03").style.backgroundColor!=""||$("t07").style.backgroundColor!="")) {
			if ($("t02").style.backgroundColor == "") {
				if (arr1[1] == 11) {
					$("t02").style.backgroundColor = "black";
					$("t02").style.color = "white";
					$("t02").innerHTML = guai1;
				} else if (arr1[1] == 12) {
					$("t02").style.backgroundColor = "black";
					$("t02").style.color = "white";
					$("t02").innerHTML = guai2;
				} else if (arr1[1] == 13) {
					$("t02").style.backgroundColor = "black";
					$("t02").style.color = "white";
					$("t02").innerHTML = guai3;
				} else if (arr1[1] == 14) {
					$("t02").style.backgroundColor = "black";
					$("t02").style.color = "white";
					$("t02").innerHTML = guai4;
				} else if (arr1[1] == 15) {
					$("t02").style.backgroundColor = "black";
					$("t02").style.color = "white";
					$("t02").innerHTML = guai5;
				} else if (arr1[1] == 1) {
					$("t02").style.backgroundColor = "red";
					$("t02").innerHTML = "血瓶";
				} else if (arr1[1] == 2) {
					$("t02").style.backgroundColor = "blue";
					$("t02").innerHTML = "蓝瓶";
				} else if (arr1[1] == 3) {
					$("t02").style.backgroundColor = "#00ff00";
					$("t02").innerHTML = "装备";
				} else if (arr1[1] == 4) {
					$("t02").style.backgroundColor = "#ff00ff";
					$("t02").innerHTML = "卷轴";
				} else if (arr1[1] == 5) {
					$("t02").style.backgroundColor = "#33ffff";
					$("t02").innerHTML = "探索点";
				} else if (arr1[1] == 6) {
					$("t02").style.backgroundColor = "yellow";
					$("t02").innerHTML = "金币";
				} else if (arr1[1] == 7) {
					$("t02").style.backgroundColor = "#ff7600";
					$("t02").innerHTML = "钥匙";
				} else if (arr1[1] == 8) {
					$("t02").style.backgroundColor = "#888";
					$("t02").style.color = "white";
					$("t02").innerHTML = "门";
					$("t02").disable = "true";
				} else if (arr1[1] == 9) {
					$("t02").style.backgroundColor = "orange";
					$("t02").innerHTML = "攻击力";
				} else if (arr1[1] == 10) {
					$("t02").style.backgroundColor = "purple";
					$("t02").innerHTML = "魔力";
				}
			} else {
				if ($("t02").innerHTML == "血瓶") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
					$("t02").innerHTML = "";
					$("t02").style.backgroundColor = "gray";
				}
				if ($("t02").innerHTML == "蓝瓶") {
					$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
					$("t02").innerHTML = "";
					$("t02").style.backgroundColor = "gray";
				}
				if ($("t02").innerHTML == "金币") {
					$("t02").innerHTML = "";
					$("t02").style.backgroundColor = "gray";
				}
				if ($("t02").innerHTML == "探索点") {
					$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
					$("t02").innerHTML = "";
					$("t02").style.backgroundColor = "gray";
				}
				if ($("t02").innerHTML == "攻击力") {
					$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
					$("t02").innerHTML = "";
					$("t02").style.backgroundColor = "gray";
				}
				if ($("t02").innerHTML == "魔力") {
					$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
					$("t02").innerHTML = "";
					$("t02").style.backgroundColor = "gray";
				}
				if ($("t02").innerHTML == "钥匙") {
					$("key").innerHTML = 1;
					$("t02").innerHTML = "";
					$("t02").style.backgroundColor = "gray";
				}
				if ($("t02").innerHTML == "门") {
					if ($("key").innerHTML == 1) {
						restart();
					}
				}
				if ($("t02").innerHTML == "卷轴") {
					$("t02").innerHTML = "";
					$("t02").style.backgroundColor = "gray";
				}
				if ($("t02").innerHTML == "装备") {
					$("t02").innerHTML = "";
					$("t02").style.backgroundColor = "gray";
				} else if ($("t02").innerHTML[34] == "1") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
					$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx1").innerHTML) <= 0) {
						$("t02").innerHTML = "";
						$("t02").style.backgroundColor = "gray";
					}
				} else if ($("t02").innerHTML[34] == "2") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
					$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx2").innerHTML) <= 0) {
						$("t02").innerHTML = "";
						$("t02").style.backgroundColor = "gray";
					}
				} else if ($("t02").innerHTML[34] == "3") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
					$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx3").innerHTML) <= 0) {
						$("t02").innerHTML = "";
						$("t02").style.backgroundColor = "gray";
					}
				} else if ($("t02").innerHTML[34] == "4") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
					$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx4").innerHTML) <= 0) {
						$("t02").innerHTML = "";
						$("t02").style.backgroundColor = "gray";
					}
				} else if ($("t02").innerHTML[34] == "5") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
					$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx5").innerHTML) <= 0) {
						$("t02").innerHTML = "";
						$("t02").style.backgroundColor = "gray";
					}
				}
			}
		}
	}
	function c03(){
		if($("t02").innerHTML.length<10&&$("t04").innerHTML.length<10&&$("t07").innerHTML.length<10&&$("t09").innerHTML.length<10&&$("t08").innerHTML.length<10&&($("t02").style.backgroundColor!=""||$("t04").style.backgroundColor!=""||$("t08").style.backgroundColor!="")) {
			if ($("t03").style.backgroundColor == "") {
				if (arr1[2] == 11) {
					$("t03").style.backgroundColor = "black";
					$("t03").style.color = "white";
					$("t03").innerHTML = guai1;
				} else if (arr1[2] == 12) {
					$("t03").style.backgroundColor = "black";
					$("t03").style.color = "white";
					$("t03").innerHTML = guai2;
				} else if (arr1[2] == 13) {
					$("t03").style.backgroundColor = "black";
					$("t03").style.color = "white";
					$("t03").innerHTML = guai3;
				} else if (arr1[2] == 14) {
					$("t03").style.backgroundColor = "black";
					$("t03").style.color = "white";
					$("t03").innerHTML = guai4;
				} else if (arr1[2] == 15) {
					$("t03").style.backgroundColor = "black";
					$("t03").style.color = "white";
					$("t03").innerHTML = guai5;
				} else if (arr1[2] == 1) {
					$("t03").style.backgroundColor = "red";
					$("t03").innerHTML = "血瓶";
				} else if (arr1[2] == 2) {
					$("t03").style.backgroundColor = "blue";
					$("t03").innerHTML = "蓝瓶";
				} else if (arr1[2] == 3) {
					$("t03").style.backgroundColor = "#00ff00";
					$("t03").innerHTML = "装备";
				} else if (arr1[2] == 4) {
					$("t03").style.backgroundColor = "#ff00ff";
					$("t03").innerHTML = "卷轴";
				} else if (arr1[2] == 5) {
					$("t03").style.backgroundColor = "#33ffff";
					$("t03").innerHTML = "探索点";
				} else if (arr1[2] == 6) {
					$("t03").style.backgroundColor = "yellow";
					$("t03").innerHTML = "金币";
				} else if (arr1[2] == 7) {
					$("t03").style.backgroundColor = "#ff7600";
					$("t03").innerHTML = "钥匙";
				} else if (arr1[2] == 8) {
					$("t03").style.backgroundColor = "#888";
					$("t03").style.color = "white";
					$("t03").innerHTML = "门";
					$("t03").disable = "true";
				} else if (arr1[2] == 9) {
					$("t03").style.backgroundColor = "orange";
					$("t03").innerHTML = "攻击力";
				} else if (arr1[2] == 10) {
					$("t03").style.backgroundColor = "purple";
					$("t03").innerHTML = "魔力";
				}
			} else {
				if ($("t03").innerHTML == "血瓶") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
					$("t03").innerHTML = "";
					$("t03").style.backgroundColor = "gray";
				}
				if ($("t03").innerHTML == "蓝瓶") {
					$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
					$("t03").innerHTML = "";
					$("t03").style.backgroundColor = "gray";
				}
				if ($("t03").innerHTML == "金币") {
					$("t03").innerHTML = "";
					$("t03").style.backgroundColor = "gray";
				}
				if ($("t03").innerHTML == "探索点") {
					$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
					$("t03").innerHTML = "";
					$("t03").style.backgroundColor = "gray";
				}
				if ($("t03").innerHTML == "攻击力") {
					$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
					$("t03").innerHTML = "";
					$("t03").style.backgroundColor = "gray";
				}
				if ($("t03").innerHTML == "魔力") {
					$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
					$("t03").innerHTML = "";
					$("t03").style.backgroundColor = "gray";
				}
				if ($("t03").innerHTML == "钥匙") {
					$("key").innerHTML = 1;
					$("t03").innerHTML = "";
					$("t03").style.backgroundColor = "gray";
				}
				if ($("t03").innerHTML == "门") {
					if ($("key").innerHTML == 1) {
						restart();
					}
				}
				if ($("t03").innerHTML == "卷轴") {
					$("t03").innerHTML = "";
					$("t03").style.backgroundColor = "gray";
				}
				if ($("t03").innerHTML == "装备") {
					$("t03").innerHTML = "";
					$("t03").style.backgroundColor = "gray";
				} else if ($("t03").innerHTML[34] == "1") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
					$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx1").innerHTML) <= 0) {
						$("t03").innerHTML = "";
						$("t03").style.backgroundColor = "gray";
					}
				} else if ($("t03").innerHTML[34] == "2") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
					$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx2").innerHTML) <= 0) {
						$("t03").innerHTML = "";
						$("t03").style.backgroundColor = "gray";
					}
				} else if ($("t03").innerHTML[34] == "3") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
					$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx3").innerHTML) <= 0) {
						$("t03").innerHTML = "";
						$("t03").style.backgroundColor = "gray";
					}
				} else if ($("t03").innerHTML[34] == "4") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
					$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx4").innerHTML) <= 0) {
						$("t03").innerHTML = "";
						$("t03").style.backgroundColor = "gray";
					}
				} else if ($("t03").innerHTML[34] == "5") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
					$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx5").innerHTML) <= 0) {
						$("t03").innerHTML = "";
						$("t03").style.backgroundColor = "gray";
					}
				}
			}
		}
	}
	function c04(){
		if($("t03").innerHTML.length<10&&$("t05").innerHTML.length<10&&$("t10").innerHTML.length<10&&$("t09").innerHTML.length<10&&$("t08").innerHTML.length<10&&($("t03").style.backgroundColor!=""||$("t05").style.backgroundColor!=""||$("t09").style.backgroundColor!="")) {
			if ($("t04").style.backgroundColor == "") {
				if (arr1[3] == 11) {
					$("t04").style.backgroundColor = "black";
					$("t04").style.color = "white";
					$("t04").innerHTML = guai1;
				} else if (arr1[3] == 12) {
					$("t04").style.backgroundColor = "black";
					$("t04").style.color = "white";
					$("t04").innerHTML = guai2;
				} else if (arr1[3] == 13) {
					$("t04").style.backgroundColor = "black";
					$("t04").style.color = "white";
					$("t04").innerHTML = guai3;
				} else if (arr1[3] == 14) {
					$("t04").style.backgroundColor = "black";
					$("t04").style.color = "white";
					$("t04").innerHTML = guai4;
				} else if (arr1[3] == 15) {
					$("t04").style.backgroundColor = "black";
					$("t04").style.color = "white";
					$("t04").innerHTML = guai5;
				} else if (arr1[3] == 1) {
					$("t04").style.backgroundColor = "red";
					$("t04").innerHTML = "血瓶";
				} else if (arr1[3] == 2) {
					$("t04").style.backgroundColor = "blue";
					$("t04").innerHTML = "蓝瓶";
				} else if (arr1[3] == 3) {
					$("t04").style.backgroundColor = "#00ff00";
					$("t04").innerHTML = "装备";
				} else if (arr1[3] == 4) {
					$("t04").style.backgroundColor = "#ff00ff";
					$("t04").innerHTML = "卷轴";
				} else if (arr1[3] == 5) {
					$("t04").style.backgroundColor = "#33ffff";
					$("t04").innerHTML = "探索点";
				} else if (arr1[3] == 6) {
					$("t04").style.backgroundColor = "yellow";
					$("t04").innerHTML = "金币";
				} else if (arr1[3] == 7) {
					$("t04").style.backgroundColor = "#ff7600";
					$("t04").innerHTML = "钥匙";
				} else if (arr1[3] == 8) {
					$("t04").style.backgroundColor = "#888";
					$("t04").style.color = "white";
					$("t04").innerHTML = "门";
					$("t04").disable = "true";
				} else if (arr1[3] == 9) {
					$("t04").style.backgroundColor = "orange";
					$("t04").innerHTML = "攻击力";
				} else if (arr1[3] == 10) {
					$("t04").style.backgroundColor = "purple";
					$("t04").innerHTML = "魔力";
				}
			} else {
				if ($("t04").innerHTML == "血瓶") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
					$("t04").innerHTML = "";
					$("t04").style.backgroundColor = "gray";
				}
				if ($("t04").innerHTML == "蓝瓶") {
					$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
					$("t04").innerHTML = "";
					$("t04").style.backgroundColor = "gray";
				}
				if ($("t04").innerHTML == "金币") {
					$("t04").innerHTML = "";
					$("t04").style.backgroundColor = "gray";
				}
				if ($("t04").innerHTML == "探索点") {
					$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
					$("t04").innerHTML = "";
					$("t04").style.backgroundColor = "gray";
				}
				if ($("t04").innerHTML == "攻击力") {
					$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
					$("t04").innerHTML = "";
					$("t04").style.backgroundColor = "gray";
				}
				if ($("t04").innerHTML == "魔力") {
					$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
					$("t04").innerHTML = "";
					$("t04").style.backgroundColor = "gray";
				}
				if ($("t04").innerHTML == "钥匙") {
					$("key").innerHTML = 1;
					$("t04").innerHTML = "";
					$("t04").style.backgroundColor = "gray";
				}
				if ($("t04").innerHTML == "门") {
					if ($("key").innerHTML == 1) {
						restart();
					}
				}
				if ($("t04").innerHTML == "卷轴") {
					$("t04").innerHTML = "";
					$("t04").style.backgroundColor = "gray";
				}
				if ($("t04").innerHTML == "装备") {
					$("t04").innerHTML = "";
					$("t04").style.backgroundColor = "gray";
				} else if ($("t04").innerHTML[34] == "1") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
					$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx1").innerHTML) <= 0) {
						$("t04").innerHTML = "";
						$("t04").style.backgroundColor = "gray";
					}
				} else if ($("t04").innerHTML[34] == "2") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
					$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx2").innerHTML) <= 0) {
						$("t04").innerHTML = "";
						$("t04").style.backgroundColor = "gray";
					}
				} else if ($("t04").innerHTML[34] == "3") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
					$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx3").innerHTML) <= 0) {
						$("t04").innerHTML = "";
						$("t04").style.backgroundColor = "gray";
					}
				} else if ($("t04").innerHTML[34] == "4") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
					$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx4").innerHTML) <= 0) {
						$("t04").innerHTML = "";
						$("t04").style.backgroundColor = "gray";
					}
				} else if ($("t04").innerHTML[34] == "5") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
					$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx5").innerHTML) <= 0) {
						$("t04").innerHTML = "";
						$("t04").style.backgroundColor = "gray";
					}
				}
			}
		}
	}
	function c05(){
		if($("t04").innerHTML.length<10&&$("t09").innerHTML.length<10&&$("t10").innerHTML.length<10&&($("t04").style.backgroundColor!=""||$("t10").style.backgroundColor!="")) {
			if ($("t05").style.backgroundColor == "") {
				if (arr1[4] == 11) {
					$("t05").style.backgroundColor = "black";
					$("t05").style.color = "white";
					$("t05").innerHTML = guai1;
				} else if (arr1[4] == 12) {
					$("t05").style.backgroundColor = "black";
					$("t05").style.color = "white";
					$("t05").innerHTML = guai2;
				} else if (arr1[4] == 13) {
					$("t05").style.backgroundColor = "black";
					$("t05").style.color = "white";
					$("t05").innerHTML = guai3;
				} else if (arr1[4] == 14) {
					$("t05").style.backgroundColor = "black";
					$("t05").style.color = "white";
					$("t05").innerHTML = guai4;
				} else if (arr1[4] == 15) {
					$("t05").style.backgroundColor = "black";
					$("t05").style.color = "white";
					$("t05").innerHTML = guai5;
				} else if (arr1[4] == 1) {
					$("t05").style.backgroundColor = "red";
					$("t05").innerHTML = "血瓶";
				} else if (arr1[4] == 2) {
					$("t05").style.backgroundColor = "blue";
					$("t05").innerHTML = "蓝瓶";
				} else if (arr1[4] == 3) {
					$("t05").style.backgroundColor = "#00ff00";
					$("t05").innerHTML = "装备";
				} else if (arr1[4] == 4) {
					$("t05").style.backgroundColor = "#ff00ff";
					$("t05").innerHTML = "卷轴";
				} else if (arr1[4] == 5) {
					$("t05").style.backgroundColor = "#33ffff";
					$("t05").innerHTML = "探索点";
				} else if (arr1[4] == 6) {
					$("t05").style.backgroundColor = "yellow";
					$("t05").innerHTML = "金币";
				} else if (arr1[4] == 7) {
					$("t05").style.backgroundColor = "#ff7600";
					$("t05").innerHTML = "钥匙";
				} else if (arr1[4] == 8) {
					$("t05").style.backgroundColor = "#888";
					$("t05").style.color = "white";
					$("t05").innerHTML = "门";
					$("t05").disable = "true";
				} else if (arr1[4] == 9) {
					$("t05").style.backgroundColor = "orange";
					$("t05").innerHTML = "攻击力";
				} else if (arr1[4] == 10) {
					$("t05").style.backgroundColor = "purple";
					$("t05").innerHTML = "魔力";
				}
			} else {
				if ($("t05").innerHTML == "血瓶") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
					$("t05").innerHTML = "";
					$("t05").style.backgroundColor = "gray";
				}
				if ($("t05").innerHTML == "蓝瓶") {
					$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
					$("t05").innerHTML = "";
					$("t05").style.backgroundColor = "gray";
				}
				if ($("t05").innerHTML == "金币") {
					$("t05").innerHTML = "";
					$("t05").style.backgroundColor = "gray";
				}
				if ($("t05").innerHTML == "探索点") {
					$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
					$("t05").innerHTML = "";
					$("t05").style.backgroundColor = "gray";
				}
				if ($("t05").innerHTML == "攻击力") {
					$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
					$("t05").innerHTML = "";
					$("t05").style.backgroundColor = "gray";
				}
				if ($("t05").innerHTML == "魔力") {
					$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
					$("t05").innerHTML = "";
					$("t05").style.backgroundColor = "gray";
				}
				if ($("t05").innerHTML == "钥匙") {
					$("key").innerHTML = 1;
					$("t05").innerHTML = "";
					$("t05").style.backgroundColor = "gray";
				}
				if ($("t05").innerHTML == "门") {
					if ($("key").innerHTML == 1) {
						restart();
					}
				}
				if ($("t05").innerHTML == "卷轴") {
					$("t05").innerHTML = "";
					$("t05").style.backgroundColor = "gray";
				}
				if ($("t05").innerHTML == "装备") {
					$("t05").innerHTML = "";
					$("t05").style.backgroundColor = "gray";
				} else if ($("t05").innerHTML[34] == "1") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
					$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx1").innerHTML) <= 0) {
						$("t05").innerHTML = "";
						$("t05").style.backgroundColor = "gray";
					}
				} else if ($("t05").innerHTML[34] == "2") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
					$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx2").innerHTML) <= 0) {
						$("t05").innerHTML = "";
						$("t05").style.backgroundColor = "gray";
					}
				} else if ($("t05").innerHTML[34] == "3") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
					$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx3").innerHTML) <= 0) {
						$("t05").innerHTML = "";
						$("t05").style.backgroundColor = "gray";
					}
				} else if ($("t05").innerHTML[34] == "4") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
					$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx4").innerHTML) <= 0) {
						$("t05").innerHTML = "";
						$("t05").style.backgroundColor = "gray";
					}
				} else if ($("t05").innerHTML[34] == "5") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
					$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx5").innerHTML) <= 0) {
						$("t05").innerHTML = "";
						$("t05").style.backgroundColor = "gray";
					}
				}
			}
		}
	}
	function c06(){
		if($("t01").innerHTML.length<10&&$("t02").innerHTML.length<10&&$("t07").innerHTML.length<10&&$("t11").innerHTML.length<10&&$("t12").innerHTML.length<10&&($("t01").style.backgroundColor!=""||$("t07").style.backgroundColor!=""||$("t11").style.backgroundColor!="")) {
			if ($("t06").style.backgroundColor == "") {
				if (arr2[0] == 11) {
					$("t06").style.backgroundColor = "black";
					$("t06").style.color = "white";
					$("t06").innerHTML = guai1;
				} else if (arr2[0] == 12) {
					$("t06").style.backgroundColor = "black";
					$("t06").style.color = "white";
					$("t06").innerHTML = guai2;
				} else if (arr2[0] == 13) {
					$("t06").style.backgroundColor = "black";
					$("t06").style.color = "white";
					$("t06").innerHTML = guai3;
				} else if (arr2[0] == 14) {
					$("t06").style.backgroundColor = "black";
					$("t06").style.color = "white";
					$("t06").innerHTML = guai4;
				} else if (arr2[0] == 15) {
					$("t06").style.backgroundColor = "black";
					$("t06").style.color = "white";
					$("t06").innerHTML = guai5;
				} else if (arr2[0] == 1) {
					$("t06").style.backgroundColor = "red";
					$("t06").innerHTML = "血瓶";
				} else if (arr2[0] == 2) {
					$("t06").style.backgroundColor = "blue";
					$("t06").innerHTML = "蓝瓶";
				} else if (arr2[0] == 3) {
					$("t06").style.backgroundColor = "#00ff00";
					$("t06").innerHTML = "装备";
				} else if (arr2[0] == 4) {
					$("t06").style.backgroundColor = "#ff00ff";
					$("t06").innerHTML = "卷轴";
				} else if (arr2[0] == 5) {
					$("t06").style.backgroundColor = "#33ffff";
					$("t06").innerHTML = "探索点";
				} else if (arr2[0] == 6) {
					$("t06").style.backgroundColor = "yellow";
					$("t06").innerHTML = "金币";
				} else if (arr2[0] == 7) {
					$("t06").style.backgroundColor = "#ff7600";
					$("t06").innerHTML = "钥匙";
				} else if (arr2[0] == 8) {
					$("t06").style.backgroundColor = "#888";
					$("t06").style.color = "white";
					$("t06").innerHTML = "门";
					$("t06").disable = "true";
				} else if (arr2[0] == 9) {
					$("t06").style.backgroundColor = "orange";
					$("t06").innerHTML = "攻击力";
				} else if (arr2[0] == 10) {
					$("t06").style.backgroundColor = "purple";
					$("t06").innerHTML = "魔力";
				}
			} else {
				if ($("t06").innerHTML == "血瓶") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
					$("t06").innerHTML = "";
					$("t06").style.backgroundColor = "gray";
				}
				if ($("t06").innerHTML == "蓝瓶") {
					$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
					$("t06").innerHTML = "";
					$("t06").style.backgroundColor = "gray";
				}
				if ($("t06").innerHTML == "金币") {
					$("t06").innerHTML = "";
					$("t06").style.backgroundColor = "gray";
				}
				if ($("t06").innerHTML == "探索点") {
					$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
					$("t06").innerHTML = "";
					$("t06").style.backgroundColor = "gray";
				}
				if ($("t06").innerHTML == "攻击力") {
					$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
					$("t06").innerHTML = "";
					$("t06").style.backgroundColor = "gray";
				}
				if ($("t06").innerHTML == "魔力") {
					$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
					$("t06").innerHTML = "";
					$("t06").style.backgroundColor = "gray";
				}
				if ($("t06").innerHTML == "钥匙") {
					$("key").innerHTML = 1;
					$("t06").innerHTML = "";
					$("t06").style.backgroundColor = "gray";
				}
				if ($("t06").innerHTML == "门") {
					if ($("key").innerHTML == 1) {
						restart();
					}
				}
				if ($("t06").innerHTML == "卷轴") {
					$("t06").innerHTML = "";
					$("t06").style.backgroundColor = "gray";
				}
				if ($("t06").innerHTML == "装备") {
					$("t06").innerHTML = "";
					$("t06").style.backgroundColor = "gray";
				} else if ($("t06").innerHTML[34] == "1") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
					$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx1").innerHTML) <= 0) {
						$("t06").innerHTML = "";
						$("t06").style.backgroundColor = "gray";
					}
				} else if ($("t06").innerHTML[34] == "2") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
					$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx2").innerHTML) <= 0) {
						$("t06").innerHTML = "";
						$("t06").style.backgroundColor = "gray";
					}
				} else if ($("t06").innerHTML[34] == "3") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
					$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx3").innerHTML) <= 0) {
						$("t06").innerHTML = "";
						$("t06").style.backgroundColor = "gray";
					}
				} else if ($("t06").innerHTML[34] == "4") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
					$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx4").innerHTML) <= 0) {
						$("t06").innerHTML = "";
						$("t06").style.backgroundColor = "gray";
					}
				} else if ($("t06").innerHTML[34] == "5") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
					$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx5").innerHTML) <= 0) {
						$("t06").innerHTML = "";
						$("t06").style.backgroundColor = "gray";
					}
				}
			}
		}
	}
	function c07(){
		if($("t01").innerHTML.length<10&&$("t02").innerHTML.length<10&&$("t03").innerHTML.length<10&&$("t06").innerHTML.length<10&&$("t08").innerHTML.length<10&&$("t11").innerHTML.length<10&&$("t12").innerHTML.length<10&&$("t13").innerHTML.length<10&&($("t02").style.backgroundColor!=""||$("t06").style.backgroundColor!=""||$("t08").style.backgroundColor!=""||$("t12").style.backgroundColor!="")) {
			if ($("t07").style.backgroundColor == "") {
				if (arr2[1] == 11) {
					$("t07").style.backgroundColor = "black";
					$("t07").style.color = "white";
					$("t07").innerHTML = guai1;
				} else if (arr2[1] == 12) {
					$("t07").style.backgroundColor = "black";
					$("t07").style.color = "white";
					$("t07").innerHTML = guai2;
				} else if (arr2[1] == 13) {
					$("t07").style.backgroundColor = "black";
					$("t07").style.color = "white";
					$("t07").innerHTML = guai3;
				} else if (arr2[1] == 14) {
					$("t07").style.backgroundColor = "black";
					$("t07").style.color = "white";
					$("t07").innerHTML = guai4;
				} else if (arr2[1] == 15) {
					$("t07").style.backgroundColor = "black";
					$("t07").style.color = "white";
					$("t07").innerHTML = guai5;
				} else if (arr2[1] == 1) {
					$("t07").style.backgroundColor = "red";
					$("t07").innerHTML = "血瓶";
				} else if (arr2[1] == 2) {
					$("t07").style.backgroundColor = "blue";
					$("t07").innerHTML = "蓝瓶";
				} else if (arr2[1] == 3) {
					$("t07").style.backgroundColor = "#00ff00";
					$("t07").innerHTML = "装备";
				} else if (arr2[1] == 4) {
					$("t07").style.backgroundColor = "#ff00ff";
					$("t07").innerHTML = "卷轴";
				} else if (arr2[1] == 5) {
					$("t07").style.backgroundColor = "#33ffff";
					$("t07").innerHTML = "探索点";
				} else if (arr2[1] == 6) {
					$("t07").style.backgroundColor = "yellow";
					$("t07").innerHTML = "金币";
				} else if (arr2[1] == 7) {
					$("t07").style.backgroundColor = "#ff7600";
					$("t07").innerHTML = "钥匙";
				} else if (arr2[1] == 8) {
					$("t07").style.backgroundColor = "#888";
					$("t07").style.color = "white";
					$("t07").innerHTML = "门";
					$("t07").disable = "true";
				} else if (arr2[1] == 9) {
					$("t07").style.backgroundColor = "orange";
					$("t07").innerHTML = "攻击力";
				} else if (arr2[1] == 10) {
					$("t07").style.backgroundColor = "purple";
					$("t07").innerHTML = "魔力";
				}
			} else {
				if ($("t07").innerHTML == "血瓶") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
					$("t07").innerHTML = "";
					$("t07").style.backgroundColor = "gray";
				}
				if ($("t07").innerHTML == "蓝瓶") {
					$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
					$("t07").innerHTML = "";
					$("t07").style.backgroundColor = "gray";
				}
				if ($("t07").innerHTML == "金币") {
					$("t07").innerHTML = "";
					$("t07").style.backgroundColor = "gray";
				}
				if ($("t07").innerHTML == "探索点") {
					$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
					$("t07").innerHTML = "";
					$("t07").style.backgroundColor = "gray";
				}
				if ($("t07").innerHTML == "攻击力") {
					$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
					$("t07").innerHTML = "";
					$("t07").style.backgroundColor = "gray";
				}
				if ($("t07").innerHTML == "魔力") {
					$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
					$("t07").innerHTML = "";
					$("t07").style.backgroundColor = "gray";
				}
				if ($("t07").innerHTML == "钥匙") {
					$("key").innerHTML = 1;
					$("t07").innerHTML = "";
					$("t07").style.backgroundColor = "gray";
				}
				if ($("t07").innerHTML == "门") {
					if ($("key").innerHTML == 1) {
						restart();
					}
				}
				if ($("t07").innerHTML == "卷轴") {
					$("t07").innerHTML = "";
					$("t07").style.backgroundColor = "gray";
				}
				if ($("t07").innerHTML == "装备") {
					$("t07").innerHTML = "";
					$("t07").style.backgroundColor = "gray";
				} else if ($("t07").innerHTML[34] == "1") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
					$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx1").innerHTML) <= 0) {
						$("t07").innerHTML = "";
						$("t07").style.backgroundColor = "gray";
					}
				} else if ($("t07").innerHTML[34] == "2") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
					$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx2").innerHTML) <= 0) {
						$("t07").innerHTML = "";
						$("t07").style.backgroundColor = "gray";
					}
				} else if ($("t07").innerHTML[34] == "3") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
					$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx3").innerHTML) <= 0) {
						$("t07").innerHTML = "";
						$("t07").style.backgroundColor = "gray";
					}
				} else if ($("t07").innerHTML[34] == "4") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
					$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx4").innerHTML) <= 0) {
						$("t07").innerHTML = "";
						$("t07").style.backgroundColor = "gray";
					}
				} else if ($("t07").innerHTML[34] == "5") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
					$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx5").innerHTML) <= 0) {
						$("t07").innerHTML = "";
						$("t07").style.backgroundColor = "gray";
					}
				}
			}
		}
	}
	function c08(){
		if($("t04").innerHTML.length<10&&$("t02").innerHTML.length<10&&$("t03").innerHTML.length<10&&$("t07").innerHTML.length<10&&$("t09").innerHTML.length<10&&$("t14").innerHTML.length<10&&$("t12").innerHTML.length<10&&$("t13").innerHTML.length<10&&($("t03").style.backgroundColor!=""||$("t07").style.backgroundColor!=""||$("t09").style.backgroundColor!=""||$("t13").style.backgroundColor!="")) {
			if ($("t08").style.backgroundColor == "") {
				if (arr2[2] == 11) {
					$("t08").style.backgroundColor = "black";
					$("t08").style.color = "white";
					$("t08").innerHTML = guai1;
				} else if (arr2[2] == 12) {
					$("t08").style.backgroundColor = "black";
					$("t08").style.color = "white";
					$("t08").innerHTML = guai2;
				} else if (arr2[2] == 13) {
					$("t08").style.backgroundColor = "black";
					$("t08").style.color = "white";
					$("t08").innerHTML = guai3;
				} else if (arr2[2] == 14) {
					$("t08").style.backgroundColor = "black";
					$("t08").style.color = "white";
					$("t08").innerHTML = guai4;
				} else if (arr2[2] == 15) {
					$("t08").style.backgroundColor = "black";
					$("t08").style.color = "white";
					$("t08").innerHTML = guai5;
				} else if (arr2[2] == 1) {
					$("t08").style.backgroundColor = "red";
					$("t08").innerHTML = "血瓶";
				} else if (arr2[2] == 2) {
					$("t08").style.backgroundColor = "blue";
					$("t08").innerHTML = "蓝瓶";
				} else if (arr2[2] == 3) {
					$("t08").style.backgroundColor = "#00ff00";
					$("t08").innerHTML = "装备";
				} else if (arr2[2] == 4) {
					$("t08").style.backgroundColor = "#ff00ff";
					$("t08").innerHTML = "卷轴";
				} else if (arr2[2] == 5) {
					$("t08").style.backgroundColor = "#33ffff";
					$("t08").innerHTML = "探索点";
				} else if (arr2[2] == 6) {
					$("t08").style.backgroundColor = "yellow";
					$("t08").innerHTML = "金币";
				} else if (arr2[2] == 7) {
					$("t08").style.backgroundColor = "#ff7600";
					$("t08").innerHTML = "钥匙";
				} else if (arr2[2] == 8) {
					$("t08").style.backgroundColor = "#888";
					$("t08").style.color = "white";
					$("t08").innerHTML = "门";
					$("t08").disable = "true";
				} else if (arr2[2] == 9) {
					$("t08").style.backgroundColor = "orange";
					$("t08").innerHTML = "攻击力";
				} else if (arr2[2] == 10) {
					$("t08").style.backgroundColor = "purple";
					$("t08").innerHTML = "魔力";
				}
			} else {
				if ($("t08").innerHTML == "血瓶") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
					$("t08").innerHTML = "";
					$("t08").style.backgroundColor = "gray";
				}
				if ($("t08").innerHTML == "蓝瓶") {
					$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
					$("t08").innerHTML = "";
					$("t08").style.backgroundColor = "gray";
				}
				if ($("t08").innerHTML == "金币") {
					$("t08").innerHTML = "";
					$("t08").style.backgroundColor = "gray";
				}
				if ($("t08").innerHTML == "探索点") {
					$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
					$("t08").innerHTML = "";
					$("t08").style.backgroundColor = "gray";
				}
				if ($("t08").innerHTML == "攻击力") {
					$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
					$("t08").innerHTML = "";
					$("t08").style.backgroundColor = "gray";
				}
				if ($("t08").innerHTML == "魔力") {
					$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
					$("t08").innerHTML = "";
					$("t08").style.backgroundColor = "gray";
				}
				if ($("t08").innerHTML == "钥匙") {
					$("key").innerHTML = 1;
					$("t08").innerHTML = "";
					$("t08").style.backgroundColor = "gray";
				}
				if ($("t08").innerHTML == "卷轴") {
					$("t08").innerHTML = "";
					$("t08").style.backgroundColor = "gray";
				}
				if ($("t08").innerHTML == "门") {
					if ($("key").innerHTML == 1) {
						restart();
					}
				}
				if ($("t08").innerHTML == "装备") {
					$("t08").innerHTML = "";
					$("t08").style.backgroundColor = "gray";
				} else if ($("t08").innerHTML[34] == "1") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
					$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx1").innerHTML) <= 0) {
						$("t08").innerHTML = "";
						$("t08").style.backgroundColor = "gray";
					}
				} else if ($("t08").innerHTML[34] == "2") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
					$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx2").innerHTML) <= 0) {
						$("t08").innerHTML = "";
						$("t08").style.backgroundColor = "gray";
					}
				} else if ($("t08").innerHTML[34] == "3") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
					$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx3").innerHTML) <= 0) {
						$("t08").innerHTML = "";
						$("t08").style.backgroundColor = "gray";
					}
				} else if ($("t08").innerHTML[34] == "4") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
					$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx4").innerHTML) <= 0) {
						$("t08").innerHTML = "";
						$("t08").style.backgroundColor = "gray";
					}
				} else if ($("t08").innerHTML[34] == "5") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
					$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx5").innerHTML) <= 0) {
						$("t08").innerHTML = "";
						$("t08").style.backgroundColor = "gray";
					}
				}
			}
		}
	}
	function c09(){
		if($("t03").innerHTML.length<10&&$("t04").innerHTML.length<10&&$("t05").innerHTML.length<10&&$("t08").innerHTML.length<10&&$("t10").innerHTML.length<10&&$("t13").innerHTML.length<10&&$("t14").innerHTML.length<10&&$("t15").innerHTML.length<10&&($("t04").style.backgroundColor!=""||$("t08").style.backgroundColor!=""||$("t10").style.backgroundColor!=""||$("t14").style.backgroundColor!="")) {
			if ($("t09").style.backgroundColor == "") {
				if (arr2[3] == 11) {
					$("t09").style.backgroundColor = "black";
					$("t09").style.color = "white";
					$("t09").innerHTML = guai1;
				} else if (arr2[3] == 12) {
					$("t09").style.backgroundColor = "black";
					$("t09").style.color = "white";
					$("t09").innerHTML = guai2;
				} else if (arr2[3] == 13) {
					$("t09").style.backgroundColor = "black";
					$("t09").style.color = "white";
					$("t09").innerHTML = guai3;
				} else if (arr2[3] == 14) {
					$("t09").style.backgroundColor = "black";
					$("t09").style.color = "white";
					$("t09").innerHTML = guai4;
				} else if (arr2[3] == 15) {
					$("t09").style.backgroundColor = "black";
					$("t09").style.color = "white";
					$("t09").innerHTML = guai5;
				} else if (arr2[3] == 1) {
					$("t09").style.backgroundColor = "red";
					$("t09").innerHTML = "血瓶";
				} else if (arr2[3] == 2) {
					$("t09").style.backgroundColor = "blue";
					$("t09").innerHTML = "蓝瓶";
				} else if (arr2[3] == 3) {
					$("t09").style.backgroundColor = "#00ff00";
					$("t09").innerHTML = "装备";
				} else if (arr2[3] == 4) {
					$("t09").style.backgroundColor = "#ff00ff";
					$("t09").innerHTML = "卷轴";
				} else if (arr2[3] == 5) {
					$("t09").style.backgroundColor = "#33ffff";
					$("t09").innerHTML = "探索点";
				} else if (arr2[3] == 6) {
					$("t09").style.backgroundColor = "yellow";
					$("t09").innerHTML = "金币";
				} else if (arr2[3] == 7) {
					$("t09").style.backgroundColor = "#ff7600";
					$("t09").innerHTML = "钥匙";
				} else if (arr2[3] == 8) {
					$("t09").style.backgroundColor = "#888";
					$("t09").style.color = "white";
					$("t09").innerHTML = "门";
					$("t09").disable = "true";
				} else if (arr2[3] == 9) {
					$("t09").style.backgroundColor = "orange";
					$("t09").innerHTML = "攻击力";
				} else if (arr2[3] == 10) {
					$("t09").style.backgroundColor = "purple";
					$("t09").innerHTML = "魔力";
				}
			} else {
				if ($("t09").innerHTML == "血瓶") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
					$("t09").innerHTML = "";
					$("t09").style.backgroundColor = "gray";
				}
				if ($("t09").innerHTML == "蓝瓶") {
					$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
					$("t09").innerHTML = "";
					$("t09").style.backgroundColor = "gray";
				}
				if ($("t09").innerHTML == "金币") {
					$("t09").innerHTML = "";
					$("t09").style.backgroundColor = "gray";
				}
				if ($("t09").innerHTML == "探索点") {
					$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
					$("t09").innerHTML = "";
					$("t09").style.backgroundColor = "gray";
				}
				if ($("t09").innerHTML == "攻击力") {
					$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
					$("t09").innerHTML = "";
					$("t09").style.backgroundColor = "gray";
				}
				if ($("t09").innerHTML == "魔力") {
					$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
					$("t09").innerHTML = "";
					$("t09").style.backgroundColor = "gray";
				}
				if ($("t09").innerHTML == "钥匙") {
					$("key").innerHTML = 1;
					$("t09").innerHTML = "";
					$("t09").style.backgroundColor = "gray";
				}
				if ($("t09").innerHTML == "门") {
					if ($("key").innerHTML == 1) {
						restart();
					}
				}
				if ($("t09").innerHTML == "卷轴") {
					$("t09").innerHTML = "";
					$("t09").style.backgroundColor = "gray";
				}
				if ($("t09").innerHTML == "装备") {
					$("t09").innerHTML = "";
					$("t09").style.backgroundColor = "gray";
				} else if ($("t09").innerHTML[34] == "1") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
					$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx1").innerHTML) <= 0) {
						$("t09").innerHTML = "";
						$("t09").style.backgroundColor = "gray";
					}
				} else if ($("t09").innerHTML[34] == "2") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
					$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx2").innerHTML) <= 0) {
						$("t09").innerHTML = "";
						$("t09").style.backgroundColor = "gray";
					}
				} else if ($("t09").innerHTML[34] == "3") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
					$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx3").innerHTML) <= 0) {
						$("t09").innerHTML = "";
						$("t09").style.backgroundColor = "gray";
					}
				} else if ($("t09").innerHTML[34] == "4") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
					$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx4").innerHTML) <= 0) {
						$("t09").innerHTML = "";
						$("t09").style.backgroundColor = "gray";
					}
				} else if ($("t09").innerHTML[34] == "5") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
					$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx5").innerHTML) <= 0) {
						$("t09").innerHTML = "";
						$("t09").style.backgroundColor = "gray";
					}
				}
			}
		}
	}
	function c10(){
		if($("t04").innerHTML.length<10&&$("t05").innerHTML.length<10&&$("t09").innerHTML.length<10&&$("t14").innerHTML.length<10&&$("t15").innerHTML.length<10&&($("t05").style.backgroundColor!=""||$("t09").style.backgroundColor!=""||$("t15").style.backgroundColor!="")) {
			if ($("t10").style.backgroundColor == "") {
				if (arr2[4] == 11) {
					$("t10").style.backgroundColor = "black";
					$("t10").style.color = "white";
					$("t10").innerHTML = guai1;
				} else if (arr2[4] == 12) {
					$("t10").style.backgroundColor = "black";
					$("t10").style.color = "white";
					$("t10").innerHTML = guai2;
				} else if (arr2[4] == 13) {
					$("t10").style.backgroundColor = "black";
					$("t10").style.color = "white";
					$("t10").innerHTML = guai3;
				} else if (arr2[4] == 14) {
					$("t10").style.backgroundColor = "black";
					$("t10").style.color = "white";
					$("t10").innerHTML = guai4;
				} else if (arr2[4] == 15) {
					$("t10").style.backgroundColor = "black";
					$("t10").style.color = "white";
					$("t10").innerHTML = guai5;
				} else if (arr2[4] == 1) {
					$("t10").style.backgroundColor = "red";
					$("t10").innerHTML = "血瓶";
				} else if (arr2[4] == 2) {
					$("t10").style.backgroundColor = "blue";
					$("t10").innerHTML = "蓝瓶";
				} else if (arr2[4] == 3) {
					$("t10").style.backgroundColor = "#00ff00";
					$("t10").innerHTML = "装备";
				} else if (arr2[4] == 4) {
					$("t10").style.backgroundColor = "#ff00ff";
					$("t10").innerHTML = "卷轴";
				} else if (arr2[4] == 5) {
					$("t10").style.backgroundColor = "#33ffff";
					$("t10").innerHTML = "探索点";
				} else if (arr2[4] == 6) {
					$("t10").style.backgroundColor = "yellow";
					$("t10").innerHTML = "金币";
				} else if (arr2[4] == 7) {
					$("t10").style.backgroundColor = "#ff7600";
					$("t10").innerHTML = "钥匙";
				} else if (arr2[4] == 8) {
					$("t10").style.backgroundColor = "#888";
					$("t10").style.color = "white";
					$("t10").innerHTML = "门";
					$("t10").disable = "true";
				} else if (arr2[4] == 9) {
					$("t10").style.backgroundColor = "orange";
					$("t10").innerHTML = "攻击力";
				} else if (arr2[4] == 10) {
					$("t10").style.backgroundColor = "purple";
					$("t10").innerHTML = "魔力";
				}
			} else {
				if ($("t10").innerHTML == "血瓶") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
					$("t10").innerHTML = "";
					$("t10").style.backgroundColor = "gray";
				}
				if ($("t10").innerHTML == "蓝瓶") {
					$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
					$("t10").innerHTML = "";
					$("t10").style.backgroundColor = "gray";
				}
				if ($("t10").innerHTML == "金币") {
					$("t10").innerHTML = "";
					$("t10").style.backgroundColor = "gray";
				}
				if ($("t10").innerHTML == "探索点") {
					$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
					$("t10").innerHTML = "";
					$("t10").style.backgroundColor = "gray";
				}
				if ($("t10").innerHTML == "攻击力") {
					$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
					$("t10").innerHTML = "";
					$("t10").style.backgroundColor = "gray";
				}
				if ($("t10").innerHTML == "魔力") {
					$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
					$("t10").innerHTML = "";
					$("t10").style.backgroundColor = "gray";
				}
				if ($("t10").innerHTML == "门") {
					if ($("key").innerHTML == 1) {
						restart();
					}
				}
				if ($("t10").innerHTML == "钥匙") {
					$("key").innerHTML = 1;
					$("t10").innerHTML = "";
					$("t10").style.backgroundColor = "gray";
				}
				if ($("t10").innerHTML == "卷轴") {
					$("t10").innerHTML = "";
					$("t10").style.backgroundColor = "gray";
				}
				if ($("t10").innerHTML == "装备") {
					$("t10").innerHTML = "";
					$("t10").style.backgroundColor = "gray";
				} else if ($("t10").innerHTML[34] == "1") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
					$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx1").innerHTML) <= 0) {
						$("t10").innerHTML = "";
						$("t10").style.backgroundColor = "gray";
					}
				} else if ($("t10").innerHTML[34] == "2") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
					$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx2").innerHTML) <= 0) {
						$("t10").innerHTML = "";
						$("t10").style.backgroundColor = "gray";
					}
				} else if ($("t10").innerHTML[34] == "3") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
					$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx3").innerHTML) <= 0) {
						$("t10").innerHTML = "";
						$("t10").style.backgroundColor = "gray";
					}
				} else if ($("t10").innerHTML[34] == "4") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
					$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx4").innerHTML) <= 0) {
						$("t10").innerHTML = "";
						$("t10").style.backgroundColor = "gray";
					}
				} else if ($("t10").innerHTML[34] == "5") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
					$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx5").innerHTML) <= 0) {
						$("t10").innerHTML = "";
						$("t10").style.backgroundColor = "gray";
					}
				}
			}
		}
	}
	function c11(){
		if($("t06").innerHTML.length<10&&$("t07").innerHTML.length<10&&$("t12").innerHTML.length<10&&$("t16").innerHTML.length<10&&$("t17").innerHTML.length<10&&($("t06").style.backgroundColor!=""||$("t12").style.backgroundColor!=""||$("t16").style.backgroundColor!="")) {
			if ($("t11").style.backgroundColor == "") {
				if (arr3[0] == 11) {
					$("t11").style.backgroundColor = "black";
					$("t11").style.color = "white";
					$("t11").innerHTML = guai1;
				} else if (arr3[0] == 12) {
					$("t11").style.backgroundColor = "black";
					$("t11").style.color = "white";
					$("t11").innerHTML = guai2;
				} else if (arr3[0] == 13) {
					$("t11").style.backgroundColor = "black";
					$("t11").style.color = "white";
					$("t11").innerHTML = guai3;
				} else if (arr3[0] == 14) {
					$("t11").style.backgroundColor = "black";
					$("t11").style.color = "white";
					$("t11").innerHTML = guai4;
				} else if (arr3[0] == 15) {
					$("t11").style.backgroundColor = "black";
					$("t11").style.color = "white";
					$("t11").innerHTML = guai5;
				} else if (arr3[0] == 1) {
					$("t11").style.backgroundColor = "red";
					$("t11").innerHTML = "血瓶";
				} else if (arr3[0] == 2) {
					$("t11").style.backgroundColor = "blue";
					$("t11").innerHTML = "蓝瓶";
				} else if (arr3[0] == 3) {
					$("t11").style.backgroundColor = "#00ff00";
					$("t11").innerHTML = "装备";
				} else if (arr3[0] == 4) {
					$("t11").style.backgroundColor = "#ff00ff";
					$("t11").innerHTML = "卷轴";
				} else if (arr3[0] == 5) {
					$("t11").style.backgroundColor = "#33ffff";
					$("t11").innerHTML = "探索点";
				} else if (arr3[0] == 6) {
					$("t11").style.backgroundColor = "yellow";
					$("t11").innerHTML = "金币";
				} else if (arr3[0] == 7) {
					$("t11").style.backgroundColor = "#ff7600";
					$("t11").innerHTML = "钥匙";
				} else if (arr3[0] == 8) {
					$("t11").style.backgroundColor = "#888";
					$("t11").style.color = "white";
					$("t11").innerHTML = "门";
					$("t11").disable = "true";
				} else if (arr3[0] == 9) {
					$("t11").style.backgroundColor = "orange";
					$("t11").innerHTML = "攻击力";
				} else if (arr3[0] == 10) {
					$("t11").style.backgroundColor = "purple";
					$("t11").innerHTML = "魔力";
				}
			} else {
				if ($("t11").innerHTML == "血瓶") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
					$("t11").innerHTML = "";
					$("t11").style.backgroundColor = "gray";
				}
				if ($("t11").innerHTML == "蓝瓶") {
					$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
					$("t11").innerHTML = "";
					$("t11").style.backgroundColor = "gray";
				}
				if ($("t11").innerHTML == "金币") {
					$("t11").innerHTML = "";
					$("t11").style.backgroundColor = "gray";
				}
				if ($("t11").innerHTML == "探索点") {
					$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
					$("t11").innerHTML = "";
					$("t11").style.backgroundColor = "gray";
				}
				if ($("t11").innerHTML == "攻击力") {
					$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
					$("t11").innerHTML = "";
					$("t11").style.backgroundColor = "gray";
				}
				if ($("t11").innerHTML == "魔力") {
					$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
					$("t11").innerHTML = "";
					$("t11").style.backgroundColor = "gray";
				}
				if ($("t11").innerHTML == "钥匙") {
					$("key").innerHTML = 1;
					$("t11").innerHTML = "";
					$("t11").style.backgroundColor = "gray";
				}
				if ($("t11").innerHTML == "门") {
					if ($("key").innerHTML == 1) {
						restart();
					}
				}
				if ($("t11").innerHTML == "卷轴") {
					$("t11").innerHTML = "";
					$("t11").style.backgroundColor = "gray";
				}
				if ($("t11").innerHTML == "装备") {
					$("t11").innerHTML = "";
					$("t11").style.backgroundColor = "gray";
				} else if ($("t11").innerHTML[34] == "1") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
					$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx1").innerHTML) <= 0) {
						$("t11").innerHTML = "";
						$("t11").style.backgroundColor = "gray";
					}
				} else if ($("t11").innerHTML[34] == "2") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
					$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx2").innerHTML) <= 0) {
						$("t11").innerHTML = "";
						$("t11").style.backgroundColor = "gray";
					}
				} else if ($("t11").innerHTML[34] == "3") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
					$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx3").innerHTML) <= 0) {
						$("t11").innerHTML = "";
						$("t11").style.backgroundColor = "gray";
					}
				} else if ($("t11").innerHTML[34] == "4") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
					$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx4").innerHTML) <= 0) {
						$("t11").innerHTML = "";
						$("t11").style.backgroundColor = "gray";
					}
				} else if ($("t11").innerHTML[34] == "5") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
					$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx5").innerHTML) <= 0) {
						$("t11").innerHTML = "";
						$("t11").style.backgroundColor = "gray";
					}
				}
			}
		}
	}
	function c12(){
		if($("t06").innerHTML.length<10&&$("t07").innerHTML.length<10&&$("t08").innerHTML.length<10&&$("t11").innerHTML.length<10&&$("t13").innerHTML.length<10&&$("t16").innerHTML.length<10&&$("t17").innerHTML.length<10&&$("t18").innerHTML.length<10&&($("t07").style.backgroundColor!=""||$("t11").style.backgroundColor!=""||$("t13").style.backgroundColor!=""||$("t17").style.backgroundColor!="")) {
			if ($("t12").style.backgroundColor == "") {
				if (arr3[1] == 11) {
					$("t12").style.backgroundColor = "black";
					$("t12").style.color = "white";
					$("t12").innerHTML = guai1;
				} else if (arr3[1] == 12) {
					$("t12").style.backgroundColor = "black";
					$("t12").style.color = "white";
					$("t12").innerHTML = guai2;
				} else if (arr3[1] == 13) {
					$("t12").style.backgroundColor = "black";
					$("t12").style.color = "white";
					$("t12").innerHTML = guai3;
				} else if (arr3[1] == 14) {
					$("t12").style.backgroundColor = "black";
					$("t12").style.color = "white";
					$("t12").innerHTML = guai4;
				} else if (arr3[1] == 15) {
					$("t12").style.backgroundColor = "black";
					$("t12").style.color = "white";
					$("t12").innerHTML = guai5;
				} else if (arr3[1] == 1) {
					$("t12").style.backgroundColor = "red";
					$("t12").innerHTML = "血瓶";
				} else if (arr3[1] == 2) {
					$("t12").style.backgroundColor = "blue";
					$("t12").innerHTML = "蓝瓶";
				} else if (arr3[1] == 3) {
					$("t12").style.backgroundColor = "#00ff00";
					$("t12").innerHTML = "装备";
				} else if (arr3[1] == 4) {
					$("t12").style.backgroundColor = "#ff00ff";
					$("t12").innerHTML = "卷轴";
				} else if (arr3[1] == 5) {
					$("t12").style.backgroundColor = "#33ffff";
					$("t12").innerHTML = "探索点";
				} else if (arr3[1] == 6) {
					$("t12").style.backgroundColor = "yellow";
					$("t12").innerHTML = "金币";
				} else if (arr3[1] == 7) {
					$("t12").style.backgroundColor = "#ff7600";
					$("t12").innerHTML = "钥匙";
				} else if (arr3[1] == 8) {
					$("t12").style.backgroundColor = "#888";
					$("t12").style.color = "white";
					$("t12").innerHTML = "门";
					$("t12").disable = "true";
				} else if (arr3[1] == 9) {
					$("t12").style.backgroundColor = "orange";
					$("t12").innerHTML = "攻击力";
				} else if (arr3[1] == 10) {
					$("t12").style.backgroundColor = "purple";
					$("t12").innerHTML = "魔力";
				}
			} else {
				if ($("t12").innerHTML == "血瓶") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
					$("t12").innerHTML = "";
					$("t12").style.backgroundColor = "gray";
				}
				if ($("t12").innerHTML == "蓝瓶") {
					$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
					$("t12").innerHTML = "";
					$("t12").style.backgroundColor = "gray";
				}
				if ($("t12").innerHTML == "金币") {
					$("t12").innerHTML = "";
					$("t12").style.backgroundColor = "gray";
				}
				if ($("t12").innerHTML == "探索点") {
					$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
					$("t12").innerHTML = "";
					$("t12").style.backgroundColor = "gray";
				}
				if ($("t12").innerHTML == "攻击力") {
					$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
					$("t12").innerHTML = "";
					$("t12").style.backgroundColor = "gray";
				}
				if ($("t12").innerHTML == "魔力") {
					$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
					$("t12").innerHTML = "";
					$("t12").style.backgroundColor = "gray";
				}
				if ($("t12").innerHTML == "钥匙") {
					$("key").innerHTML = 1;
					$("t12").innerHTML = "";
					$("t12").style.backgroundColor = "gray";
				}
				if ($("t12").innerHTML == "门") {
					if ($("key").innerHTML == 1) {
						restart();
					}
				}
				if ($("t12").innerHTML == "卷轴") {
					$("t12").innerHTML = "";
					$("t12").style.backgroundColor = "gray";
				}
				if ($("t12").innerHTML == "装备") {
					$("t12").innerHTML = "";
					$("t12").style.backgroundColor = "gray";
				} else if ($("t12").innerHTML[34] == "1") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
					$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx1").innerHTML) <= 0) {
						$("t12").innerHTML = "";
						$("t12").style.backgroundColor = "gray";
					}
				} else if ($("t12").innerHTML[34] == "2") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
					$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx2").innerHTML) <= 0) {
						$("t12").innerHTML = "";
						$("t12").style.backgroundColor = "gray";
					}
				} else if ($("t12").innerHTML[34] == "3") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
					$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx3").innerHTML) <= 0) {
						$("t12").innerHTML = "";
						$("t12").style.backgroundColor = "gray";
					}
				} else if ($("t12").innerHTML[34] == "4") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
					$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx4").innerHTML) <= 0) {
						$("t12").innerHTML = "";
						$("t12").style.backgroundColor = "gray";
					}
				} else if ($("t12").innerHTML[34] == "5") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
					$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx5").innerHTML) <= 0) {
						$("t12").innerHTML = "";
						$("t12").style.backgroundColor = "gray";
					}
				}
			}
		}
	}
	function c13(){
		if($("t07").innerHTML.length<10&&$("t08").innerHTML.length<10&&$("t09").innerHTML.length<10&&$("t12").innerHTML.length<10&&$("t14").innerHTML.length<10&&$("t17").innerHTML.length<10&&$("t18").innerHTML.length<10&&$("t19").innerHTML.length<10&&($("t08").style.backgroundColor!=""||$("t12").style.backgroundColor!=""||$("t14").style.backgroundColor!=""||$("t18").style.backgroundColor!="")) {
			if ($("t13").style.backgroundColor == "") {
				if (arr3[2] == 11) {
					$("t13").style.backgroundColor = "black";
					$("t13").style.color = "white";
					$("t13").innerHTML = guai1;
				} else if (arr3[2] == 12) {
					$("t13").style.backgroundColor = "black";
					$("t13").style.color = "white";
					$("t13").innerHTML = guai2;
				} else if (arr3[2] == 13) {
					$("t13").style.backgroundColor = "black";
					$("t13").style.color = "white";
					$("t13").innerHTML = guai3;
				} else if (arr3[2] == 14) {
					$("t13").style.backgroundColor = "black";
					$("t13").style.color = "white";
					$("t13").innerHTML = guai4;
				} else if (arr3[2] == 15) {
					$("t13").style.backgroundColor = "black";
					$("t13").style.color = "white";
					$("t13").innerHTML = guai5;
				} else if (arr3[2] == 1) {
					$("t13").style.backgroundColor = "red";
					$("t13").innerHTML = "血瓶";
				} else if (arr3[2] == 2) {
					$("t13").style.backgroundColor = "blue";
					$("t13").innerHTML = "蓝瓶";
				} else if (arr3[2] == 3) {
					$("t13").style.backgroundColor = "#00ff00";
					$("t13").innerHTML = "装备";
				} else if (arr3[2] == 4) {
					$("t13").style.backgroundColor = "#ff00ff";
					$("t13").innerHTML = "卷轴";
				} else if (arr3[2] == 5) {
					$("t13").style.backgroundColor = "#33ffff";
					$("t13").innerHTML = "探索点";
				} else if (arr3[2] == 6) {
					$("t13").style.backgroundColor = "yellow";
					$("t13").innerHTML = "金币";
				} else if (arr3[2] == 7) {
					$("t13").style.backgroundColor = "#ff7600";
					$("t13").innerHTML = "钥匙";
				} else if (arr3[2] == 8) {
					$("t13").style.backgroundColor = "#888";
					$("t13").style.color = "white";
					$("t13").innerHTML = "门";
					$("t13").disable = "true";
				} else if (arr3[2] == 9) {
					$("t13").style.backgroundColor = "orange";
					$("t13").innerHTML = "攻击力";
				} else if (arr3[2] == 10) {
					$("t13").style.backgroundColor = "purple";
					$("t13").innerHTML = "魔力";
				}
			} else {
				if ($("t13").innerHTML == "血瓶") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
					$("t13").innerHTML = "";
					$("t13").style.backgroundColor = "gray";
				}
				if ($("t13").innerHTML == "蓝瓶") {
					$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
					$("t13").innerHTML = "";
					$("t13").style.backgroundColor = "gray";
				}
				if ($("t13").innerHTML == "金币") {
					$("t13").innerHTML = "";
					$("t13").style.backgroundColor = "gray";
				}
				if ($("t13").innerHTML == "探索点") {
					$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
					$("t13").innerHTML = "";
					$("t13").style.backgroundColor = "gray";
				}
				if ($("t13").innerHTML == "攻击力") {
					$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
					$("t13").innerHTML = "";
					$("t13").style.backgroundColor = "gray";
				}
				if ($("t13").innerHTML == "魔力") {
					$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
					$("t13").innerHTML = "";
					$("t13").style.backgroundColor = "gray";
				}
				if ($("t13").innerHTML == "钥匙") {
					$("key").innerHTML = 1;
					$("t13").innerHTML = "";
					$("t13").style.backgroundColor = "gray";
				}
				if ($("t13").innerHTML == "门") {
					if ($("key").innerHTML == 1) {
						restart();
					}
				}
				if ($("t13").innerHTML == "卷轴") {
					$("t13").innerHTML = "";
					$("t13").style.backgroundColor = "gray";
				}
				if ($("t13").innerHTML == "装备") {
					$("t13").innerHTML = "";
					$("t13").style.backgroundColor = "gray";
				} else if ($("t13").innerHTML[34] == "1") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
					$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx1").innerHTML) <= 0) {
						$("t13").innerHTML = "";
						$("t13").style.backgroundColor = "gray";
					}
				} else if ($("t13").innerHTML[34] == "2") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
					$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx2").innerHTML) <= 0) {
						$("t13").innerHTML = "";
						$("t13").style.backgroundColor = "gray";
					}
				} else if ($("t13").innerHTML[34] == "3") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
					$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx3").innerHTML) <= 0) {
						$("t13").innerHTML = "";
						$("t13").style.backgroundColor = "gray";
					}
				} else if ($("t13").innerHTML[34] == "4") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
					$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx4").innerHTML) <= 0) {
						$("t13").innerHTML = "";
						$("t13").style.backgroundColor = "gray";
					}
				} else if ($("t13").innerHTML[34] == "5") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
					$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx5").innerHTML) <= 0) {
						$("t13").innerHTML = "";
						$("t13").style.backgroundColor = "gray";
					}
				}
			}
		}
	}
	function c14(){
		if($("t08").innerHTML.length<10&&$("t09").innerHTML.length<10&&$("t10").innerHTML.length<10&&$("t13").innerHTML.length<10&&$("t15").innerHTML.length<10&&$("t18").innerHTML.length<10&&$("t19").innerHTML.length<10&&$("t20").innerHTML.length<10&&($("t09").style.backgroundColor!=""||$("t13").style.backgroundColor!=""||$("t15").style.backgroundColor!=""||$("t19").style.backgroundColor!="")) {
			if ($("t14").style.backgroundColor == "") {
				if (arr3[3] == 11) {
					$("t14").style.backgroundColor = "black";
					$("t14").style.color = "white";
					$("t14").innerHTML = guai1;
				} else if (arr3[3] == 12) {
					$("t14").style.backgroundColor = "black";
					$("t14").style.color = "white";
					$("t14").innerHTML = guai2;
				} else if (arr3[3] == 13) {
					$("t14").style.backgroundColor = "black";
					$("t14").style.color = "white";
					$("t14").innerHTML = guai3;
				} else if (arr3[3] == 14) {
					$("t14").style.backgroundColor = "black";
					$("t14").style.color = "white";
					$("t14").innerHTML = guai4;
				} else if (arr3[3] == 15) {
					$("t14").style.backgroundColor = "black";
					$("t14").style.color = "white";
					$("t14").innerHTML = guai5;
				} else if (arr3[3] == 1) {
					$("t14").style.backgroundColor = "red";
					$("t14").innerHTML = "血瓶";
				} else if (arr3[3] == 2) {
					$("t14").style.backgroundColor = "blue";
					$("t14").innerHTML = "蓝瓶";
				} else if (arr3[3] == 3) {
					$("t14").style.backgroundColor = "#00ff00";
					$("t14").innerHTML = "装备";
				} else if (arr3[3] == 4) {
					$("t14").style.backgroundColor = "#ff00ff";
					$("t14").innerHTML = "卷轴";
				} else if (arr3[3] == 5) {
					$("t14").style.backgroundColor = "#33ffff";
					$("t14").innerHTML = "探索点";
				} else if (arr3[3] == 6) {
					$("t14").style.backgroundColor = "yellow";
					$("t14").innerHTML = "金币";
				} else if (arr3[3] == 7) {
					$("t14").style.backgroundColor = "#ff7600";
					$("t14").innerHTML = "钥匙";
				} else if (arr3[3] == 8) {
					$("t14").style.backgroundColor = "#888";
					$("t14").style.color = "white";
					$("t14").innerHTML = "门";
					$("t14").disable = "true";
				} else if (arr3[3] == 9) {
					$("t14").style.backgroundColor = "orange";
					$("t14").innerHTML = "攻击力";
				} else if (arr3[3] == 10) {
					$("t14").style.backgroundColor = "purple";
					$("t14").innerHTML = "魔力";
				}
			} else {
				if ($("t14").innerHTML == "血瓶") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
					$("t14").innerHTML = "";
					$("t14").style.backgroundColor = "gray";
				}
				if ($("t14").innerHTML == "蓝瓶") {
					$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
					$("t14").innerHTML = "";
					$("t14").style.backgroundColor = "gray";
				}
				if ($("t14").innerHTML == "金币") {
					$("t14").innerHTML = "";
					$("t14").style.backgroundColor = "gray";
				}
				if ($("t14").innerHTML == "探索点") {
					$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
					$("t14").innerHTML = "";
					$("t14").style.backgroundColor = "gray";
				}
				if ($("t14").innerHTML == "攻击力") {
					$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
					$("t14").innerHTML = "";
					$("t14").style.backgroundColor = "gray";
				}
				if ($("t14").innerHTML == "魔力") {
					$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
					$("t14").innerHTML = "";
					$("t14").style.backgroundColor = "gray";
				}
				if ($("t14").innerHTML == "钥匙") {
					$("key").innerHTML = 1;
					$("t14").innerHTML = "";
					$("t14").style.backgroundColor = "gray";
				}
				if ($("t14").innerHTML == "门") {
					if ($("key").innerHTML == 1) {
						restart();
					}
				}
				if ($("t14").innerHTML == "卷轴") {
					$("t14").innerHTML = "";
					$("t14").style.backgroundColor = "gray";
				}
				if ($("t14").innerHTML == "装备") {
					$("t14").innerHTML = "";
					$("t14").style.backgroundColor = "gray";
				} else if ($("t14").innerHTML[34] == "1") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
					$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx1").innerHTML) <= 0) {
						$("t14").innerHTML = "";
						$("t14").style.backgroundColor = "gray";
					}
				} else if ($("t14").innerHTML[34] == "2") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
					$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx2").innerHTML) <= 0) {
						$("t14").innerHTML = "";
						$("t14").style.backgroundColor = "gray";
					}
				} else if ($("t14").innerHTML[34] == "3") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
					$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx3").innerHTML) <= 0) {
						$("t14").innerHTML = "";
						$("t14").style.backgroundColor = "gray";
					}
				} else if ($("t14").innerHTML[34] == "4") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
					$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx4").innerHTML) <= 0) {
						$("t14").innerHTML = "";
						$("t14").style.backgroundColor = "gray";
					}
				} else if ($("t14").innerHTML[34] == "5") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
					$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx5").innerHTML) <= 0) {
						$("t14").innerHTML = "";
						$("t14").style.backgroundColor = "gray";
					}
				}
			}
		}
	}
	function c15(){
		if($("t09").innerHTML.length<10&&$("t10").innerHTML.length<10&&$("t14").innerHTML.length<10&&$("t19").innerHTML.length<10&&$("t20").innerHTML.length<10&&($("t10").style.backgroundColor!=""||$("t14").style.backgroundColor!=""||$("t20").style.backgroundColor!="")) {
			if ($("t15").style.backgroundColor == "") {
				if (arr3[4] == 11) {
					$("t15").style.backgroundColor = "black";
					$("t15").style.color = "white";
					$("t15").innerHTML = guai1;
				} else if (arr3[4] == 12) {
					$("t15").style.backgroundColor = "black";
					$("t15").style.color = "white";
					$("t15").innerHTML = guai2;
				} else if (arr3[4] == 13) {
					$("t15").style.backgroundColor = "black";
					$("t15").style.color = "white";
					$("t15").innerHTML = guai3;
				} else if (arr3[4] == 14) {
					$("t15").style.backgroundColor = "black";
					$("t15").style.color = "white";
					$("t15").innerHTML = guai4;
				} else if (arr3[4] == 15) {
					$("t15").style.backgroundColor = "black";
					$("t15").style.color = "white";
					$("t15").innerHTML = guai5;
				} else if (arr3[4] == 1) {
					$("t15").style.backgroundColor = "red";
					$("t15").innerHTML = "血瓶";
				} else if (arr3[4] == 2) {
					$("t15").style.backgroundColor = "blue";
					$("t15").innerHTML = "蓝瓶";
				} else if (arr3[4] == 3) {
					$("t15").style.backgroundColor = "#00ff00";
					$("t15").innerHTML = "装备";
				} else if (arr3[4] == 4) {
					$("t15").style.backgroundColor = "#ff00ff";
					$("t15").innerHTML = "卷轴";
				} else if (arr3[4] == 5) {
					$("t15").style.backgroundColor = "#33ffff";
					$("t15").innerHTML = "探索点";
				} else if (arr3[4] == 6) {
					$("t15").style.backgroundColor = "yellow";
					$("t15").innerHTML = "金币";
				} else if (arr3[4] == 7) {
					$("t15").style.backgroundColor = "#ff7600";
					$("t15").innerHTML = "钥匙";
				} else if (arr3[4] == 8) {
					$("t15").style.backgroundColor = "#888";
					$("t15").style.color = "white";
					$("t15").innerHTML = "门";
					$("t15").disable = "true";
				} else if (arr3[4] == 9) {
					$("t15").style.backgroundColor = "orange";
					$("t15").innerHTML = "攻击力";
				} else if (arr3[4] == 10) {
					$("t15").style.backgroundColor = "purple";
					$("t15").innerHTML = "魔力";
				}
			} else {
				if ($("t15").innerHTML == "血瓶") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
					$("t15").innerHTML = "";
					$("t15").style.backgroundColor = "gray";
				}
				if ($("t15").innerHTML == "蓝瓶") {
					$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
					$("t15").innerHTML = "";
					$("t15").style.backgroundColor = "gray";
				}
				if ($("t15").innerHTML == "金币") {
					$("t15").innerHTML = "";
					$("t15").style.backgroundColor = "gray";
				}
				if ($("t15").innerHTML == "探索点") {
					$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
					$("t15").innerHTML = "";
					$("t15").style.backgroundColor = "gray";
				}
				if ($("t15").innerHTML == "攻击力") {
					$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
					$("t15").innerHTML = "";
					$("t15").style.backgroundColor = "gray";
				}
				if ($("t15").innerHTML == "魔力") {
					$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
					$("t15").innerHTML = "";
					$("t15").style.backgroundColor = "gray";
				}
				if ($("t15").innerHTML == "钥匙") {
					$("key").innerHTML = 1;
					$("t15").innerHTML = "";
					$("t15").style.backgroundColor = "gray";
				}
				if ($("t15").innerHTML == "门") {
					if ($("key").innerHTML == 1) {
						restart();
					}
				}
				if ($("t15").innerHTML == "卷轴") {
					$("t15").innerHTML = "";
					$("t15").style.backgroundColor = "gray";
				}
				if ($("t15").innerHTML == "装备") {
					$("t15").innerHTML = "";
					$("t15").style.backgroundColor = "gray";
				} else if ($("t15").innerHTML[34] == "1") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
					$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx1").innerHTML) <= 0) {
						$("t15").innerHTML = "";
						$("t15").style.backgroundColor = "gray";
					}
				} else if ($("t15").innerHTML[34] == "2") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
					$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx2").innerHTML) <= 0) {
						$("t15").innerHTML = "";
						$("t15").style.backgroundColor = "gray";
					}
				} else if ($("t15").innerHTML[34] == "3") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
					$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx3").innerHTML) <= 0) {
						$("t15").innerHTML = "";
						$("t15").style.backgroundColor = "gray";
					}
				} else if ($("t15").innerHTML[34] == "4") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
					$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx4").innerHTML) <= 0) {
						$("t15").innerHTML = "";
						$("t15").style.backgroundColor = "gray";
					}
				} else if ($("t15").innerHTML[34] == "5") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
					$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx5").innerHTML) <= 0) {
						$("t15").innerHTML = "";
						$("t15").style.backgroundColor = "gray";
					}
				}
			}
		}
	}
	function c16(){
		if($("t11").innerHTML.length<10&&$("t12").innerHTML.length<10&&$("t17").innerHTML.length<10&&$("t21").innerHTML.length<10&&$("t22").innerHTML.length<10&&($("t11").style.backgroundColor!=""||$("t17").style.backgroundColor!=""||$("t21").style.backgroundColor!="")) {
			if ($("t16").style.backgroundColor == "") {
				if (arr4[0] == 11) {
					$("t16").style.backgroundColor = "black";
					$("t16").style.color = "white";
					$("t16").innerHTML = guai1;
				} else if (arr4[0] == 12) {
					$("t16").style.backgroundColor = "black";
					$("t16").style.color = "white";
					$("t16").innerHTML = guai2;
				} else if (arr4[0] == 13) {
					$("t16").style.backgroundColor = "black";
					$("t16").style.color = "white";
					$("t16").innerHTML = guai3;
				} else if (arr4[0] == 14) {
					$("t16").style.backgroundColor = "black";
					$("t16").style.color = "white";
					$("t16").innerHTML = guai4;
				} else if (arr4[0] == 15) {
					$("t16").style.backgroundColor = "black";
					$("t16").style.color = "white";
					$("t16").innerHTML = guai5;
				} else if (arr4[0] == 1) {
					$("t16").style.backgroundColor = "red";
					$("t16").innerHTML = "血瓶";
				} else if (arr4[0] == 2) {
					$("t16").style.backgroundColor = "blue";
					$("t16").innerHTML = "蓝瓶";
				} else if (arr4[0] == 3) {
					$("t16").style.backgroundColor = "#00ff00";
					$("t16").innerHTML = "装备";
				} else if (arr4[0] == 4) {
					$("t16").style.backgroundColor = "#ff00ff";
					$("t16").innerHTML = "卷轴";
				} else if (arr4[0] == 5) {
					$("t16").style.backgroundColor = "#33ffff";
					$("t16").innerHTML = "探索点";
				} else if (arr4[0] == 6) {
					$("t16").style.backgroundColor = "yellow";
					$("t16").innerHTML = "金币";
				} else if (arr4[0] == 7) {
					$("t16").style.backgroundColor = "#ff7600";
					$("t16").innerHTML = "钥匙";
				} else if (arr4[0] == 8) {
					$("t16").style.backgroundColor = "#888";
					$("t16").style.color = "white";
					$("t16").innerHTML = "门";
					$("t16").disable = "true";
				} else if (arr4[0] == 9) {
					$("t16").style.backgroundColor = "orange";
					$("t16").innerHTML = "攻击力";
				} else if (arr4[0] == 10) {
					$("t16").style.backgroundColor = "purple";
					$("t16").innerHTML = "魔力";
				}
			} else {
				if ($("t16").innerHTML == "血瓶") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
					$("t16").innerHTML = "";
					$("t16").style.backgroundColor = "gray";
				}
				if ($("t16").innerHTML == "蓝瓶") {
					$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
					$("t16").innerHTML = "";
					$("t16").style.backgroundColor = "gray";
				}
				if ($("t16").innerHTML == "金币") {
					$("t16").innerHTML = "";
					$("t16").style.backgroundColor = "gray";
				}
				if ($("t16").innerHTML == "探索点") {
					$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
					$("t16").innerHTML = "";
					$("t16").style.backgroundColor = "gray";
				}
				if ($("t16").innerHTML == "攻击力") {
					$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
					$("t16").innerHTML = "";
					$("t16").style.backgroundColor = "gray";
				}
				if ($("t16").innerHTML == "魔力") {
					$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
					$("t16").innerHTML = "";
					$("t16").style.backgroundColor = "gray";
				}
				if ($("t16").innerHTML == "钥匙") {
					$("key").innerHTML = 1;
					$("t16").innerHTML = "";
					$("t16").style.backgroundColor = "gray";
				}
				if ($("t16").innerHTML == "门") {
					if ($("key").innerHTML == 1) {
						restart();
					}
				}
				if ($("t16").innerHTML == "卷轴") {
					$("t16").innerHTML = "";
					$("t16").style.backgroundColor = "gray";
				}
				if ($("t16").innerHTML == "装备") {
					$("t16").innerHTML = "";
					$("t16").style.backgroundColor = "gray";
				} else if ($("t16").innerHTML[34] == "1") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
					$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx1").innerHTML) <= 0) {
						$("t16").innerHTML = "";
						$("t16").style.backgroundColor = "gray";
					}
				} else if ($("t16").innerHTML[34] == "2") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
					$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx2").innerHTML) <= 0) {
						$("t16").innerHTML = "";
						$("t16").style.backgroundColor = "gray";
					}
				} else if ($("t16").innerHTML[34] == "3") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
					$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx3").innerHTML) <= 0) {
						$("t16").innerHTML = "";
						$("t16").style.backgroundColor = "gray";
					}
				} else if ($("t16").innerHTML[34] == "4") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
					$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx4").innerHTML) <= 0) {
						$("t16").innerHTML = "";
						$("t16").style.backgroundColor = "gray";
					}
				} else if ($("t16").innerHTML[34] == "5") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
					$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx5").innerHTML) <= 0) {
						$("t16").innerHTML = "";
						$("t16").style.backgroundColor = "gray";
					}
				}
			}

		}
	}
	function c17(){
		if($("t11").innerHTML.length<10&&$("t12").innerHTML.length<10&&$("t13").innerHTML.length<10&&$("t16").innerHTML.length<10&&$("t18").innerHTML.length<10&&$("t21").innerHTML.length<10&&$("t22").innerHTML.length<10&&$("t23").innerHTML.length<10&&($("t12").style.backgroundColor!=""||$("t16").style.backgroundColor!=""||$("t18").style.backgroundColor!=""||$("t22").style.backgroundColor!="")) {
			if ($("t17").style.backgroundColor == "") {
				if (arr4[1] == 11) {
					$("t17").style.backgroundColor = "black";
					$("t17").style.color = "white";
					$("t17").innerHTML = guai1;
				} else if (arr4[1] == 12) {
					$("t17").style.backgroundColor = "black";
					$("t17").style.color = "white";
					$("t17").innerHTML = guai2;
				} else if (arr4[1] == 13) {
					$("t17").style.backgroundColor = "black";
					$("t17").style.color = "white";
					$("t17").innerHTML = guai3;
				} else if (arr4[1] == 14) {
					$("t17").style.backgroundColor = "black";
					$("t17").style.color = "white";
					$("t17").innerHTML = guai4;
				} else if (arr4[1] == 15) {
					$("t17").style.backgroundColor = "black";
					$("t17").style.color = "white";
					$("t17").innerHTML = guai5;
				} else if (arr4[1] == 1) {
					$("t17").style.backgroundColor = "red";
					$("t17").innerHTML = "血瓶";
				} else if (arr4[1] == 2) {
					$("t17").style.backgroundColor = "blue";
					$("t17").innerHTML = "蓝瓶";
				} else if (arr4[1] == 3) {
					$("t17").style.backgroundColor = "#00ff00";
					$("t17").innerHTML = "装备";
				} else if (arr4[1] == 4) {
					$("t17").style.backgroundColor = "#ff00ff";
					$("t17").innerHTML = "卷轴";
				} else if (arr4[1] == 5) {
					$("t17").style.backgroundColor = "#33ffff";
					$("t17").innerHTML = "探索点";
				} else if (arr4[1] == 6) {
					$("t17").style.backgroundColor = "yellow";
					$("t17").innerHTML = "金币";
				} else if (arr4[1] == 7) {
					$("t17").style.backgroundColor = "#ff7600";
					$("t17").innerHTML = "钥匙";
				} else if (arr4[1] == 8) {
					$("t17").style.backgroundColor = "#888";
					$("t17").style.color = "white";
					$("t17").innerHTML = "门";
					$("t17").disable = "true";
				} else if (arr4[1] == 9) {
					$("t17").style.backgroundColor = "orange";
					$("t17").innerHTML = "攻击力";
				} else if (arr4[1] == 10) {
					$("t17").style.backgroundColor = "purple";
					$("t17").innerHTML = "魔力";
				}
			} else {
				if ($("t17").innerHTML == "血瓶") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
					$("t17").innerHTML = "";
					$("t17").style.backgroundColor = "gray";
				}
				if ($("t17").innerHTML == "蓝瓶") {
					$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
					$("t17").innerHTML = "";
					$("t17").style.backgroundColor = "gray";
				}
				if ($("t17").innerHTML == "金币") {
					$("t17").innerHTML = "";
					$("t17").style.backgroundColor = "gray";
				}
				if ($("t17").innerHTML == "探索点") {
					$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
					$("t17").innerHTML = "";
					$("t17").style.backgroundColor = "gray";
				}
				if ($("t17").innerHTML == "攻击力") {
					$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
					$("t17").innerHTML = "";
					$("t17").style.backgroundColor = "gray";
				}
				if ($("t17").innerHTML == "魔力") {
					$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
					$("t17").innerHTML = "";
					$("t17").style.backgroundColor = "gray";
				}
				if ($("t17").innerHTML == "钥匙") {
					$("key").innerHTML = 1;
					$("t17").innerHTML = "";
					$("t17").style.backgroundColor = "gray";
				}
				if ($("t17").innerHTML == "门") {
					if ($("key").innerHTML == 1) {
						restart();
					}
				}
				if ($("t17").innerHTML == "卷轴") {
					$("t17").innerHTML = "";
					$("t17").style.backgroundColor = "gray";
				}
				if ($("t17").innerHTML == "装备") {
					$("t17").innerHTML = "";
					$("t17").style.backgroundColor = "gray";
				} else if ($("t17").innerHTML[34] == "1") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
					$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx1").innerHTML) <= 0) {
						$("t17").innerHTML = "";
						$("t17").style.backgroundColor = "gray";
					}
				} else if ($("t17").innerHTML[34] == "2") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
					$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx2").innerHTML) <= 0) {
						$("t17").innerHTML = "";
						$("t17").style.backgroundColor = "gray";
					}
				} else if ($("t17").innerHTML[34] == "3") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
					$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx3").innerHTML) <= 0) {
						$("t17").innerHTML = "";
						$("t17").style.backgroundColor = "gray";
					}
				} else if ($("t17").innerHTML[34] == "4") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
					$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx4").innerHTML) <= 0) {
						$("t17").innerHTML = "";
						$("t17").style.backgroundColor = "gray";
					}
				} else if ($("t17").innerHTML[34] == "5") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
					$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx5").innerHTML) <= 0) {
						$("t17").innerHTML = "";
						$("t17").style.backgroundColor = "gray";
					}
				}
			}
		}
	}
	function c18(){
		if($("t12").innerHTML.length<10&&$("t13").innerHTML.length<10&&$("t14").innerHTML.length<10&&$("t17").innerHTML.length<10&&$("t19").innerHTML.length<10&&$("t22").innerHTML.length<10&&$("t23").innerHTML.length<10&&$("t24").innerHTML.length<10&&($("t13").style.backgroundColor!=""||$("t17").style.backgroundColor!=""||$("t19").style.backgroundColor!=""||$("t23").style.backgroundColor!="")) {
			if ($("t18").style.backgroundColor == "") {
				if (arr4[2] == 11) {
					$("t18").style.backgroundColor = "black";
					$("t18").style.color = "white";
					$("t18").innerHTML = guai1;
				} else if (arr4[2] == 12) {
					$("t18").style.backgroundColor = "black";
					$("t18").style.color = "white";
					$("t18").innerHTML = guai2;
				} else if (arr4[2] == 13) {
					$("t18").style.backgroundColor = "black";
					$("t18").style.color = "white";
					$("t18").innerHTML = guai3;
				} else if (arr4[2] == 14) {
					$("t18").style.backgroundColor = "black";
					$("t18").style.color = "white";
					$("t18").innerHTML = guai4;
				} else if (arr4[2] == 15) {
					$("t18").style.backgroundColor = "black";
					$("t18").style.color = "white";
					$("t18").innerHTML = guai5;
				} else if (arr4[2] == 1) {
					$("t18").style.backgroundColor = "red";
					$("t18").innerHTML = "血瓶";
				} else if (arr4[2] == 2) {
					$("t18").style.backgroundColor = "blue";
					$("t18").innerHTML = "蓝瓶";
				} else if (arr4[2] == 3) {
					$("t18").style.backgroundColor = "#00ff00";
					$("t18").innerHTML = "装备";
				} else if (arr4[2] == 4) {
					$("t18").style.backgroundColor = "#ff00ff";
					$("t18").innerHTML = "卷轴";
				} else if (arr4[2] == 5) {
					$("t18").style.backgroundColor = "#33ffff";
					$("t18").innerHTML = "探索点";
				} else if (arr4[2] == 6) {
					$("t18").style.backgroundColor = "yellow";
					$("t18").innerHTML = "金币";
				} else if (arr4[2] == 7) {
					$("t18").style.backgroundColor = "#ff7600";
					$("t18").innerHTML = "钥匙";
				} else if (arr4[2] == 8) {
					$("t18").style.backgroundColor = "#888";
					$("t18").style.color = "white";
					$("t18").innerHTML = "门";
					$("t18").disable = "true";
				} else if (arr4[2] == 9) {
					$("t18").style.backgroundColor = "orange";
					$("t18").innerHTML = "攻击力";
				} else if (arr4[2] == 10) {
					$("t18").style.backgroundColor = "purple";
					$("t18").innerHTML = "魔力";
				}
			} else {
				if ($("t18").innerHTML == "血瓶") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
					$("t18").innerHTML = "";
					$("t18").style.backgroundColor = "gray";
				}
				if ($("t18").innerHTML == "蓝瓶") {
					$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
					$("t18").innerHTML = "";
					$("t18").style.backgroundColor = "gray";
				}
				if ($("t18").innerHTML == "金币") {
					$("t18").innerHTML = "";
					$("t18").style.backgroundColor = "gray";
				}
				if ($("t18").innerHTML == "探索点") {
					$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
					$("t18").innerHTML = "";
					$("t18").style.backgroundColor = "gray";
				}
				if ($("t18").innerHTML == "攻击力") {
					$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
					$("t18").innerHTML = "";
					$("t18").style.backgroundColor = "gray";
				}
				if ($("t18").innerHTML == "魔力") {
					$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
					$("t18").innerHTML = "";
					$("t18").style.backgroundColor = "gray";
				}
				if ($("t18").innerHTML == "钥匙") {
					$("key").innerHTML = 1;
					$("t18").innerHTML = "";
					$("t18").style.backgroundColor = "gray";
				}
				if ($("t18").innerHTML == "门") {
					if ($("key").innerHTML == 1) {
						restart();
					}
				}
				if ($("t18").innerHTML == "卷轴") {
					$("t18").innerHTML = "";
					$("t18").style.backgroundColor = "gray";
				}
				if ($("t18").innerHTML == "装备") {
					$("t18").innerHTML = "";
					$("t18").style.backgroundColor = "gray";
				} else if ($("t18").innerHTML[34] == "1") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
					$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx1").innerHTML) <= 0) {
						$("t18").innerHTML = "";
						$("t18").style.backgroundColor = "gray";
					}
				} else if ($("t18").innerHTML[34] == "2") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
					$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx2").innerHTML) <= 0) {
						$("t18").innerHTML = "";
						$("t18").style.backgroundColor = "gray";
					}
				} else if ($("t18").innerHTML[34] == "3") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
					$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx3").innerHTML) <= 0) {
						$("t18").innerHTML = "";
						$("t18").style.backgroundColor = "gray";
					}
				} else if ($("t18").innerHTML[34] == "4") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
					$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx4").innerHTML) <= 0) {
						$("t18").innerHTML = "";
						$("t18").style.backgroundColor = "gray";
					}
				} else if ($("t18").innerHTML[34] == "5") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
					$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx5").innerHTML) <= 0) {
						$("t18").innerHTML = "";
						$("t18").style.backgroundColor = "gray";
					}
				}
			}
		}
	}
	function c19(){
		if($("t13").innerHTML.length<10&&$("t14").innerHTML.length<10&&$("t15").innerHTML.length<10&&$("t18").innerHTML.length<10&&$("t20").innerHTML.length<10&&$("t23").innerHTML.length<10&&$("t24").innerHTML.length<10&&$("t25").innerHTML.length<10&&($("t14").style.backgroundColor!=""||$("t18").style.backgroundColor!=""||$("t20").style.backgroundColor!=""||$("t24").style.backgroundColor!="")) {
			if ($("t19").style.backgroundColor == "") {
				if (arr4[3] == 11) {
					$("t19").style.backgroundColor = "black";
					$("t19").style.color = "white";
					$("t19").innerHTML = guai1;
				} else if (arr4[3] == 12) {
					$("t19").style.backgroundColor = "black";
					$("t19").style.color = "white";
					$("t19").innerHTML = guai2;
				} else if (arr4[3] == 13) {
					$("t19").style.backgroundColor = "black";
					$("t19").style.color = "white";
					$("t19").innerHTML = guai3;
				} else if (arr4[3] == 14) {
					$("t19").style.backgroundColor = "black";
					$("t19").style.color = "white";
					$("t19").innerHTML = guai4;
				} else if (arr4[3] == 15) {
					$("t19").style.backgroundColor = "black";
					$("t19").style.color = "white";
					$("t19").innerHTML = guai5;
				} else if (arr4[3] == 1) {
					$("t19").style.backgroundColor = "red";
					$("t19").innerHTML = "血瓶";
				} else if (arr4[3] == 2) {
					$("t19").style.backgroundColor = "blue";
					$("t19").innerHTML = "蓝瓶";
				} else if (arr4[3] == 3) {
					$("t19").style.backgroundColor = "#00ff00";
					$("t19").innerHTML = "装备";
				} else if (arr4[3] == 4) {
					$("t19").style.backgroundColor = "#ff00ff";
					$("t19").innerHTML = "卷轴";
				} else if (arr4[3] == 5) {
					$("t19").style.backgroundColor = "#33ffff";
					$("t19").innerHTML = "探索点";
				} else if (arr4[3] == 6) {
					$("t19").style.backgroundColor = "yellow";
					$("t19").innerHTML = "金币";
				} else if (arr4[3] == 7) {
					$("t19").style.backgroundColor = "#ff7600";
					$("t19").innerHTML = "钥匙";
				} else if (arr4[3] == 8) {
					$("t19").style.backgroundColor = "#888";
					$("t19").style.color = "white";
					$("t19").innerHTML = "门";
					$("t19").disable = "true";
				} else if (arr4[3] == 9) {
					$("t19").style.backgroundColor = "orange";
					$("t19").innerHTML = "攻击力";
				} else if (arr4[3] == 10) {
					$("t19").style.backgroundColor = "purple";
					$("t19").innerHTML = "魔力";
				}
			} else {
				if ($("t19").innerHTML == "血瓶") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
					$("t19").innerHTML = "";
					$("t19").style.backgroundColor = "gray";
				}
				if ($("t19").innerHTML == "蓝瓶") {
					$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
					$("t19").innerHTML = "";
					$("t19").style.backgroundColor = "gray";
				}
				if ($("t19").innerHTML == "金币") {
					$("t19").innerHTML = "";
					$("t19").style.backgroundColor = "gray";
				}
				if ($("t19").innerHTML == "探索点") {
					$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
					$("t19").innerHTML = "";
					$("t19").style.backgroundColor = "gray";
				}
				if ($("t19").innerHTML == "攻击力") {
					$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
					$("t19").innerHTML = "";
					$("t19").style.backgroundColor = "gray";
				}
				if ($("t19").innerHTML == "魔力") {
					$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
					$("t19").innerHTML = "";
					$("t19").style.backgroundColor = "gray";
				}
				if ($("t19").innerHTML == "钥匙") {
					$("key").innerHTML = 1;
					$("t19").innerHTML = "";
					$("t19").style.backgroundColor = "gray";
				}
				if ($("t19").innerHTML == "门") {
					if ($("key").innerHTML == 1) {
						restart();
					}
				}
				if ($("t19").innerHTML == "卷轴") {
					$("t19").innerHTML = "";
					$("t19").style.backgroundColor = "gray";
				}
				if ($("t19").innerHTML == "装备") {
					$("t19").innerHTML = "";
					$("t19").style.backgroundColor = "gray";
				} else if ($("t19").innerHTML[34] == "1") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
					$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx1").innerHTML) <= 0) {
						$("t19").innerHTML = "";
						$("t19").style.backgroundColor = "gray";
					}
				} else if ($("t19").innerHTML[34] == "2") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
					$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx2").innerHTML) <= 0) {
						$("t19").innerHTML = "";
						$("t19").style.backgroundColor = "gray";
					}
				} else if ($("t19").innerHTML[34] == "3") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
					$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx3").innerHTML) <= 0) {
						$("t19").innerHTML = "";
						$("t19").style.backgroundColor = "gray";
					}
				} else if ($("t19").innerHTML[34] == "4") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
					$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx4").innerHTML) <= 0) {
						$("t19").innerHTML = "";
						$("t19").style.backgroundColor = "gray";
					}
				} else if ($("t19").innerHTML[34] == "5") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
					$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx5").innerHTML) <= 0) {
						$("t19").innerHTML = "";
						$("t19").style.backgroundColor = "gray";
					}
				}
			}
		}
	}
	function c20(){
		if($("t14").innerHTML.length<10&&$("t15").innerHTML.length<10&&$("t19").innerHTML.length<10&&$("t24").innerHTML.length<10&&$("t25").innerHTML.length<10&&($("t15").style.backgroundColor!=""||$("t21").style.backgroundColor!=""||$("t25").style.backgroundColor!="")) {
			if ($("t20").style.backgroundColor == "") {
				if (arr4[4] == 11) {
					$("t20").style.backgroundColor = "black";
					$("t20").style.color = "white";
					$("t20").innerHTML = guai1;
				} else if (arr4[4] == 12) {
					$("t20").style.backgroundColor = "black";
					$("t20").style.color = "white";
					$("t20").innerHTML = guai2;
				} else if (arr4[4] == 13) {
					$("t20").style.backgroundColor = "black";
					$("t20").style.color = "white";
					$("t20").innerHTML = guai3;
				} else if (arr4[4] == 14) {
					$("t20").style.backgroundColor = "black";
					$("t20").style.color = "white";
					$("t20").innerHTML = guai4;
				} else if (arr4[4] == 15) {
					$("t20").style.backgroundColor = "black";
					$("t20").style.color = "white";
					$("t20").innerHTML = guai5;
				} else if (arr4[4] == 1) {
					$("t20").style.backgroundColor = "red";
					$("t20").innerHTML = "血瓶";
				} else if (arr4[4] == 2) {
					$("t20").style.backgroundColor = "blue";
					$("t20").innerHTML = "蓝瓶";
				} else if (arr4[4] == 3) {
					$("t20").style.backgroundColor = "#00ff00";
					$("t20").innerHTML = "装备";
				} else if (arr4[4] == 4) {
					$("t20").style.backgroundColor = "#ff00ff";
					$("t20").innerHTML = "卷轴";
				} else if (arr4[4] == 5) {
					$("t20").style.backgroundColor = "#33ffff";
					$("t20").innerHTML = "探索点";
				} else if (arr4[4] == 6) {
					$("t20").style.backgroundColor = "yellow";
					$("t20").innerHTML = "金币";
				} else if (arr4[4] == 7) {
					$("t20").style.backgroundColor = "#ff7600";
					$("t20").innerHTML = "钥匙";
				} else if (arr4[4] == 8) {
					$("t20").style.backgroundColor = "#888";
					$("t20").style.color = "white";
					$("t20").innerHTML = "门";
					$("t20").disable = "true";
				} else if (arr4[4] == 9) {
					$("t20").style.backgroundColor = "orange";
					$("t20").innerHTML = "攻击力";
				} else if (arr4[4] == 10) {
					$("t20").style.backgroundColor = "purple";
					$("t20").innerHTML = "魔力";
				}
			} else {
				if ($("t20").innerHTML == "血瓶") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
					$("t20").innerHTML = "";
					$("t20").style.backgroundColor = "gray";
				}
				if ($("t20").innerHTML == "蓝瓶") {
					$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
					$("t20").innerHTML = "";
					$("t20").style.backgroundColor = "gray";
				}
				if ($("t20").innerHTML == "金币") {
					$("t20").innerHTML = "";
					$("t20").style.backgroundColor = "gray";
				}
				if ($("t20").innerHTML == "探索点") {
					$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
					$("t20").innerHTML = "";
					$("t20").style.backgroundColor = "gray";
				}
				if ($("t20").innerHTML == "攻击力") {
					$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
					$("t20").innerHTML = "";
					$("t20").style.backgroundColor = "gray";
				}
				if ($("t20").innerHTML == "魔力") {
					$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
					$("t20").innerHTML = "";
					$("t20").style.backgroundColor = "gray";
				}
				if ($("t20").innerHTML == "钥匙") {
					$("key").innerHTML = 1;
					$("t20").innerHTML = "";
					$("t20").style.backgroundColor = "gray";
				}
				if ($("t20").innerHTML == "门") {
					if ($("key").innerHTML == 1) {
						restart();
					}
				}
				if ($("t20").innerHTML == "卷轴") {
					$("t20").innerHTML = "";
					$("t20").style.backgroundColor = "gray";
				}
				if ($("t20").innerHTML == "装备") {
					$("t20").innerHTML = "";
					$("t20").style.backgroundColor = "gray";
				} else if ($("t20").innerHTML[34] == "1") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
					$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx1").innerHTML) <= 0) {
						$("t20").innerHTML = "";
						$("t20").style.backgroundColor = "gray";
					}
				} else if ($("t20").innerHTML[34] == "2") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
					$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx2").innerHTML) <= 0) {
						$("t20").innerHTML = "";
						$("t20").style.backgroundColor = "gray";
					}
				} else if ($("t20").innerHTML[34] == "3") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
					$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx3").innerHTML) <= 0) {
						$("t20").innerHTML = "";
						$("t20").style.backgroundColor = "gray";
					}
				} else if ($("t20").innerHTML[34] == "4") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
					$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx4").innerHTML) <= 0) {
						$("t20").innerHTML = "";
						$("t20").style.backgroundColor = "gray";
					}
				} else if ($("t20").innerHTML[34] == "5") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
					$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx5").innerHTML) <= 0) {
						$("t20").innerHTML = "";
						$("t20").style.backgroundColor = "gray";
					}
				}
			}
		}
	}
	function c21(){
		if($("t16").innerHTML.length<10&&$("t17").innerHTML.length<10&&$("t22").innerHTML.length<10&&$("t26").innerHTML.length<10&&$("t27").innerHTML.length<10&&($("t16").style.backgroundColor!=""||$("t22").style.backgroundColor!=""||$("t26").style.backgroundColor!="")) {
			if ($("t21").style.backgroundColor == "") {
				if (arr5[0] == 11) {
					$("t21").style.backgroundColor = "black";
					$("t21").style.color = "white";
					$("t21").innerHTML = guai1;
				} else if (arr5[0] == 12) {
					$("t21").style.backgroundColor = "black";
					$("t21").style.color = "white";
					$("t21").innerHTML = guai2;
				} else if (arr5[0] == 13) {
					$("t21").style.backgroundColor = "black";
					$("t21").style.color = "white";
					$("t21").innerHTML = guai3;
				} else if (arr5[0] == 14) {
					$("t21").style.backgroundColor = "black";
					$("t21").style.color = "white";
					$("t21").innerHTML = guai4;
				} else if (arr5[0] == 15) {
					$("t21").style.backgroundColor = "black";
					$("t21").style.color = "white";
					$("t21").innerHTML = guai5;
				} else if (arr5[0] == 1) {
					$("t21").style.backgroundColor = "red";
					$("t21").innerHTML = "血瓶";
				} else if (arr5[0] == 2) {
					$("t21").style.backgroundColor = "blue";
					$("t21").innerHTML = "蓝瓶";
				} else if (arr5[0] == 3) {
					$("t21").style.backgroundColor = "#00ff00";
					$("t21").innerHTML = "装备";
				} else if (arr5[0] == 4) {
					$("t21").style.backgroundColor = "#ff00ff";
					$("t21").innerHTML = "卷轴";
				} else if (arr5[0] == 5) {
					$("t21").style.backgroundColor = "#33ffff";
					$("t21").innerHTML = "探索点";
				} else if (arr5[0] == 6) {
					$("t21").style.backgroundColor = "yellow";
					$("t21").innerHTML = "金币";
				} else if (arr5[0] == 7) {
					$("t21").style.backgroundColor = "#ff7600";
					$("t21").innerHTML = "钥匙";
				} else if (arr5[0] == 8) {
					$("t21").style.backgroundColor = "#888";
					$("t21").style.color = "white";
					$("t21").innerHTML = "门";
					$("t21").disable = "true";
				} else if (arr5[0] == 9) {
					$("t21").style.backgroundColor = "orange";
					$("t21").innerHTML = "攻击力";
				} else if (arr5[0] == 10) {
					$("t21").style.backgroundColor = "purple";
					$("t21").innerHTML = "魔力";
				}
			} else {
				if ($("t21").innerHTML == "血瓶") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
					$("t21").innerHTML = "";
					$("t21").style.backgroundColor = "gray";
				}
				if ($("t21").innerHTML == "蓝瓶") {
					$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
					$("t21").innerHTML = "";
					$("t21").style.backgroundColor = "gray";
				}
				if ($("t21").innerHTML == "金币") {
					$("t21").innerHTML = "";
					$("t21").style.backgroundColor = "gray";
				}
				if ($("t21").innerHTML == "探索点") {
					$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
					$("t21").innerHTML = "";
					$("t21").style.backgroundColor = "gray";
				}
				if ($("t21").innerHTML == "攻击力") {
					$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
					$("t21").innerHTML = "";
					$("t21").style.backgroundColor = "gray";
				}
				if ($("t21").innerHTML == "魔力") {
					$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
					$("t21").innerHTML = "";
					$("t21").style.backgroundColor = "gray";
				}
				if ($("t21").innerHTML == "钥匙") {
					$("key").innerHTML = 1;
					$("t21").innerHTML = "";
					$("t21").style.backgroundColor = "gray";
				}
				if ($("t21").innerHTML == "门") {
					if ($("key").innerHTML == 1) {
						restart();
					}
				}
				if ($("t21").innerHTML == "卷轴") {
					$("t21").innerHTML = "";
					$("t21").style.backgroundColor = "gray";
				}
				if ($("t21").innerHTML == "装备") {
					$("t21").innerHTML = "";
					$("t21").style.backgroundColor = "gray";
				} else if ($("t21").innerHTML[34] == "1") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
					$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx1").innerHTML) <= 0) {
						$("t21").innerHTML = "";
						$("t21").style.backgroundColor = "gray";
					}
				} else if ($("t21").innerHTML[34] == "2") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
					$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx2").innerHTML) <= 0) {
						$("t21").innerHTML = "";
						$("t21").style.backgroundColor = "gray";
					}
				} else if ($("t21").innerHTML[34] == "3") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
					$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx3").innerHTML) <= 0) {
						$("t21").innerHTML = "";
						$("t21").style.backgroundColor = "gray";
					}
				} else if ($("t21").innerHTML[34] == "4") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
					$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx4").innerHTML) <= 0) {
						$("t21").innerHTML = "";
						$("t21").style.backgroundColor = "gray";
					}
				} else if ($("t21").innerHTML[34] == "5") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
					$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx5").innerHTML) <= 0) {
						$("t21").innerHTML = "";
						$("t21").style.backgroundColor = "gray";
					}
				}
			}
		}
	}
	function c22(){
		if($("t16").innerHTML.length<10&&$("t17").innerHTML.length<10&&$("t18").innerHTML.length<10&&$("t21").innerHTML.length<10&&$("t23").innerHTML.length<10&&$("t26").innerHTML.length<10&&$("t27").innerHTML.length<10&&$("t28").innerHTML.length<10&&($("t17").style.backgroundColor!=""||$("t21").style.backgroundColor!=""||$("t23").style.backgroundColor!=""||$("t27").style.backgroundColor!="")) {
			if ($("t22").style.backgroundColor == "") {
				if (arr5[1] == 11) {
					$("t22").style.backgroundColor = "black";
					$("t22").style.color = "white";
					$("t22").innerHTML = guai1;
				} else if (arr5[1] == 12) {
					$("t22").style.backgroundColor = "black";
					$("t22").style.color = "white";
					$("t22").innerHTML = guai2;
				} else if (arr5[1] == 13) {
					$("t22").style.backgroundColor = "black";
					$("t22").style.color = "white";
					$("t22").innerHTML = guai3;
				} else if (arr5[1] == 14) {
					$("t22").style.backgroundColor = "black";
					$("t22").style.color = "white";
					$("t22").innerHTML = guai4;
				} else if (arr5[1] == 15) {
					$("t22").style.backgroundColor = "black";
					$("t22").style.color = "white";
					$("t22").innerHTML = guai5;
				} else if (arr5[1] == 1) {
					$("t22").style.backgroundColor = "red";
					$("t22").innerHTML = "血瓶";
				} else if (arr5[1] == 2) {
					$("t22").style.backgroundColor = "blue";
					$("t22").innerHTML = "蓝瓶";
				} else if (arr5[1] == 3) {
					$("t22").style.backgroundColor = "#00ff00";
					$("t22").innerHTML = "装备";
				} else if (arr5[1] == 4) {
					$("t22").style.backgroundColor = "#ff00ff";
					$("t22").innerHTML = "卷轴";
				} else if (arr5[1] == 5) {
					$("t22").style.backgroundColor = "#33ffff";
					$("t22").innerHTML = "探索点";
				} else if (arr5[1] == 6) {
					$("t22").style.backgroundColor = "yellow";
					$("t22").innerHTML = "金币";
				} else if (arr5[1] == 7) {
					$("t22").style.backgroundColor = "#ff7600";
					$("t22").innerHTML = "钥匙";
				} else if (arr5[1] == 8) {
					$("t22").style.backgroundColor = "#888";
					$("t22").style.color = "white";
					$("t22").innerHTML = "门";
					$("t22").disable = "true";
				} else if (arr5[1] == 9) {
					$("t22").style.backgroundColor = "orange";
					$("t22").innerHTML = "攻击力";
				} else if (arr5[1] == 10) {
					$("t22").style.backgroundColor = "purple";
					$("t22").innerHTML = "魔力";
				}
			} else {
				if ($("t22").innerHTML == "血瓶") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
					$("t22").innerHTML = "";
					$("t22").style.backgroundColor = "gray";
				}
				if ($("t22").innerHTML == "蓝瓶") {
					$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
					$("t22").innerHTML = "";
					$("t22").style.backgroundColor = "gray";
				}
				if ($("t22").innerHTML == "金币") {
					$("t22").innerHTML = "";
					$("t22").style.backgroundColor = "gray";
				}
				if ($("t22").innerHTML == "门") {
					if ($("key").innerHTML == 1) {
						restart();
					}
				}
				if ($("t22").innerHTML == "探索点") {
					$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
					$("t22").innerHTML = "";
					$("t22").style.backgroundColor = "gray";
				}
				if ($("t22").innerHTML == "攻击力") {
					$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
					$("t22").innerHTML = "";
					$("t22").style.backgroundColor = "gray";
				}
				if ($("t22").innerHTML == "魔力") {
					$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
					$("t22").innerHTML = "";
					$("t22").style.backgroundColor = "gray";
				}
				if ($("t22").innerHTML == "钥匙") {
					$("key").innerHTML = 1;
					$("t22").innerHTML = "";
					$("t22").style.backgroundColor = "gray";
				}
				if ($("t22").innerHTML == "卷轴") {
					$("t22").innerHTML = "";
					$("t22").style.backgroundColor = "gray";
				}
				if ($("t22").innerHTML == "装备") {
					$("t22").innerHTML = "";
					$("t22").style.backgroundColor = "gray";
				} else if ($("t22").innerHTML[34] == "1") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
					$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx1").innerHTML) <= 0) {
						$("t22").innerHTML = "";
						$("t22").style.backgroundColor = "gray";
					}
				} else if ($("t22").innerHTML[34] == "2") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
					$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx2").innerHTML) <= 0) {
						$("t22").innerHTML = "";
						$("t22").style.backgroundColor = "gray";
					}
				} else if ($("t22").innerHTML[34] == "3") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
					$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx3").innerHTML) <= 0) {
						$("t22").innerHTML = "";
						$("t22").style.backgroundColor = "gray";
					}
				} else if ($("t22").innerHTML[34] == "4") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
					$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx4").innerHTML) <= 0) {
						$("t22").innerHTML = "";
						$("t22").style.backgroundColor = "gray";
					}
				} else if ($("t22").innerHTML[34] == "5") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
					$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx5").innerHTML) <= 0) {
						$("t22").innerHTML = "";
						$("t22").style.backgroundColor = "gray";
					}
				}
			}
		}
	}
	function c23(){
		if($("t17").innerHTML.length<10&&$("t18").innerHTML.length<10&&$("t19").innerHTML.length<10&&$("t22").innerHTML.length<10&&$("t24").innerHTML.length<10&&$("t27").innerHTML.length<10&&$("t28").innerHTML.length<10&&$("t29").innerHTML.length<10&&($("t18").style.backgroundColor!=""||$("t22").style.backgroundColor!=""||$("t24").style.backgroundColor!=""||$("t28").style.backgroundColor!="")) {
			if ($("t23").style.backgroundColor == "") {
				if (arr5[2] == 11) {
					$("t23").style.backgroundColor = "black";
					$("t23").style.color = "white";
					$("t23").innerHTML = guai1;
				} else if (arr5[2] == 12) {
					$("t23").style.backgroundColor = "black";
					$("t23").style.color = "white";
					$("t23").innerHTML = guai2;
				} else if (arr5[2] == 13) {
					$("t23").style.backgroundColor = "black";
					$("t23").style.color = "white";
					$("t23").innerHTML = guai3;
				} else if (arr5[2] == 14) {
					$("t23").style.backgroundColor = "black";
					$("t23").style.color = "white";
					$("t23").innerHTML = guai4;
				} else if (arr5[2] == 15) {
					$("t23").style.backgroundColor = "black";
					$("t23").style.color = "white";
					$("t23").innerHTML = guai5;
				} else if (arr5[2] == 1) {
					$("t23").style.backgroundColor = "red";
					$("t23").innerHTML = "血瓶";
				} else if (arr5[2] == 2) {
					$("t23").style.backgroundColor = "blue";
					$("t23").innerHTML = "蓝瓶";
				} else if (arr5[2] == 3) {
					$("t23").style.backgroundColor = "#00ff00";
					$("t23").innerHTML = "装备";
				} else if (arr5[2] == 4) {
					$("t23").style.backgroundColor = "#ff00ff";
					$("t23").innerHTML = "卷轴";
				} else if (arr5[2] == 5) {
					$("t23").style.backgroundColor = "#33ffff";
					$("t23").innerHTML = "探索点";
				} else if (arr5[2] == 6) {
					$("t23").style.backgroundColor = "yellow";
					$("t23").innerHTML = "金币";
				} else if (arr5[2] == 7) {
					$("t23").style.backgroundColor = "#ff7600";
					$("t23").innerHTML = "钥匙";
				} else if (arr5[2] == 8) {
					$("t23").style.backgroundColor = "#888";
					$("t23").style.color = "white";
					$("t23").innerHTML = "门";
					$("t23").disable = "true";
				} else if (arr5[2] == 9) {
					$("t23").style.backgroundColor = "orange";
					$("t23").innerHTML = "攻击力";
				} else if (arr5[2] == 10) {
					$("t23").style.backgroundColor = "purple";
					$("t23").innerHTML = "魔力";
				}
			} else {
				if ($("t23").innerHTML == "血瓶") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
					$("t23").innerHTML = "";
					$("t23").style.backgroundColor = "gray";
				}
				if ($("t23").innerHTML == "蓝瓶") {
					$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
					$("t23").innerHTML = "";
					$("t23").style.backgroundColor = "gray";
				}
				if ($("t23").innerHTML == "金币") {
					$("t23").innerHTML = "";
					$("t23").style.backgroundColor = "gray";
				}
				if ($("t23").innerHTML == "探索点") {
					$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
					$("t23").innerHTML = "";
					$("t23").style.backgroundColor = "gray";
				}
				if ($("t23").innerHTML == "攻击力") {
					$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
					$("t23").innerHTML = "";
					$("t23").style.backgroundColor = "gray";
				}
				if ($("t23").innerHTML == "魔力") {
					$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
					$("t23").innerHTML = "";
					$("t23").style.backgroundColor = "gray";
				}
				if ($("t23").innerHTML == "钥匙") {
					$("key").innerHTML = 1;
					$("t23").innerHTML = "";
					$("t23").style.backgroundColor = "gray";
				}
				if ($("t23").innerHTML == "门") {
					if ($("key").innerHTML == 1) {
						restart();
					}
				}
				if ($("t23").innerHTML == "卷轴") {
					$("t23").innerHTML = "";
					$("t23").style.backgroundColor = "gray";
				}
				if ($("t23").innerHTML == "装备") {
					$("t23").innerHTML = "";
					$("t23").style.backgroundColor = "gray";
				} else if ($("t23").innerHTML[34] == "1") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
					$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx1").innerHTML) <= 0) {
						$("t23").innerHTML = "";
						$("t23").style.backgroundColor = "gray";
					}
				} else if ($("t23").innerHTML[34] == "2") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
					$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx2").innerHTML) <= 0) {
						$("t23").innerHTML = "";
						$("t23").style.backgroundColor = "gray";
					}
				} else if ($("t23").innerHTML[34] == "3") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
					$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx3").innerHTML) <= 0) {
						$("t23").innerHTML = "";
						$("t23").style.backgroundColor = "gray";
					}
				} else if ($("t23").innerHTML[34] == "4") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
					$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx4").innerHTML) <= 0) {
						$("t23").innerHTML = "";
						$("t23").style.backgroundColor = "gray";
					}
				} else if ($("t23").innerHTML[34] == "5") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
					$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx5").innerHTML) <= 0) {
						$("t23").innerHTML = "";
						$("t23").style.backgroundColor = "gray";
					}
				}
			}
		}
	}
	function c24(){
		if($("t20").innerHTML.length<10&&$("t18").innerHTML.length<10&&$("t19").innerHTML.length<10&&$("t23").innerHTML.length<10&&$("t25").innerHTML.length<10&&$("t30").innerHTML.length<10&&$("t28").innerHTML.length<10&&$("t29").innerHTML.length<10&&($("t19").style.backgroundColor!=""||$("t23").style.backgroundColor!=""||$("t25").style.backgroundColor!=""||$("t29").style.backgroundColor!="")) {
			if ($("t24").style.backgroundColor == "") {
				if (arr5[3] == 11) {
					$("t24").style.backgroundColor = "black";
					$("t24").style.color = "white";
					$("t24").innerHTML = guai1;
				} else if (arr5[3] == 12) {
					$("t24").style.backgroundColor = "black";
					$("t24").style.color = "white";
					$("t24").innerHTML = guai2;
				} else if (arr5[3] == 13) {
					$("t24").style.backgroundColor = "black";
					$("t24").style.color = "white";
					$("t24").innerHTML = guai3;
				} else if (arr5[3] == 14) {
					$("t24").style.backgroundColor = "black";
					$("t24").style.color = "white";
					$("t24").innerHTML = guai4;
				} else if (arr5[3] == 15) {
					$("t24").style.backgroundColor = "black";
					$("t24").style.color = "white";
					$("t24").innerHTML = guai5;
				} else if (arr5[3] == 1) {
					$("t24").style.backgroundColor = "red";
					$("t24").innerHTML = "血瓶";
				} else if (arr5[3] == 2) {
					$("t24").style.backgroundColor = "blue";
					$("t24").innerHTML = "蓝瓶";
				} else if (arr5[3] == 3) {
					$("t24").style.backgroundColor = "#00ff00";
					$("t24").innerHTML = "装备";
				} else if (arr5[3] == 4) {
					$("t24").style.backgroundColor = "#ff00ff";
					$("t24").innerHTML = "卷轴";
				} else if (arr5[3] == 5) {
					$("t24").style.backgroundColor = "#33ffff";
					$("t24").innerHTML = "探索点";
				} else if (arr5[3] == 6) {
					$("t24").style.backgroundColor = "yellow";
					$("t24").innerHTML = "金币";
				} else if (arr5[3] == 7) {
					$("t24").style.backgroundColor = "#ff7600";
					$("t24").innerHTML = "钥匙";
				} else if (arr5[3] == 8) {
					$("t24").style.backgroundColor = "#888";
					$("t24").style.color = "white";
					$("t24").innerHTML = "门";
					$("t24").disable = "true";
				} else if (arr5[3] == 9) {
					$("t24").style.backgroundColor = "orange";
					$("t24").innerHTML = "攻击力";
				} else if (arr5[3] == 10) {
					$("t24").style.backgroundColor = "purple";
					$("t24").innerHTML = "魔力";
				}
			} else {
				if ($("t24").innerHTML == "血瓶") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
					$("t24").innerHTML = "";
					$("t24").style.backgroundColor = "gray";
				}
				if ($("t24").innerHTML == "蓝瓶") {
					$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
					$("t24").innerHTML = "";
					$("t24").style.backgroundColor = "gray";
				}
				if ($("t24").innerHTML == "金币") {
					$("t24").innerHTML = "";
					$("t24").style.backgroundColor = "gray";
				}
				if ($("t24").innerHTML == "探索点") {
					$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
					$("t24").innerHTML = "";
					$("t24").style.backgroundColor = "gray";
				}
				if ($("t24").innerHTML == "攻击力") {
					$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
					$("t24").innerHTML = "";
					$("t24").style.backgroundColor = "gray";
				}
				if ($("t24").innerHTML == "魔力") {
					$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
					$("t24").innerHTML = "";
					$("t24").style.backgroundColor = "gray";
				}
				if ($("t24").innerHTML == "钥匙") {
					$("key").innerHTML = 1;
					$("t24").innerHTML = "";
					$("t24").style.backgroundColor = "gray";
				}
				if ($("t24").innerHTML == "门") {
					if ($("key").innerHTML == 1) {
						restart();
					}
				}
				if ($("t24").innerHTML == "卷轴") {
					$("t24").innerHTML = "";
					$("t24").style.backgroundColor = "gray";
				}
				if ($("t24").innerHTML == "装备") {
					$("t24").innerHTML = "";
					$("t24").style.backgroundColor = "gray";
				} else if ($("t24").innerHTML[34] == "1") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
					$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx1").innerHTML) <= 0) {
						$("t24").innerHTML = "";
						$("t24").style.backgroundColor = "gray";
					}
				} else if ($("t24").innerHTML[34] == "2") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
					$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx2").innerHTML) <= 0) {
						$("t24").innerHTML = "";
						$("t24").style.backgroundColor = "gray";
					}
				} else if ($("t24").innerHTML[34] == "3") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
					$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx3").innerHTML) <= 0) {
						$("t24").innerHTML = "";
						$("t24").style.backgroundColor = "gray";
					}
				} else if ($("t24").innerHTML[34] == "4") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
					$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx4").innerHTML) <= 0) {
						$("t24").innerHTML = "";
						$("t24").style.backgroundColor = "gray";
					}
				} else if ($("t24").innerHTML[34] == "5") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
					$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx5").innerHTML) <= 0) {
						$("t24").innerHTML = "";
						$("t24").style.backgroundColor = "gray";
					}
				}
			}
		}
	}
	function c25(){
		if($("t19").innerHTML.length<10&&$("t20").innerHTML.length<10&&$("t24").innerHTML.length<10&&$("t29").innerHTML.length<10&&$("t30").innerHTML.length<10&&($("t15").style.backgroundColor!=""||$("t24").style.backgroundColor!=""||$("t30").style.backgroundColor!="")) {
			if ($("t25").style.backgroundColor == "") {
				if (arr5[4] == 11) {
					$("t25").style.backgroundColor = "black";
					$("t25").style.color = "white";
					$("t25").innerHTML = guai1;
				} else if (arr5[4] == 12) {
					$("t25").style.backgroundColor = "black";
					$("t25").style.color = "white";
					$("t25").innerHTML = guai2;
				} else if (arr5[4] == 13) {
					$("t25").style.backgroundColor = "black";
					$("t25").style.color = "white";
					$("t25").innerHTML = guai3;
				} else if (arr5[4] == 14) {
					$("t25").style.backgroundColor = "black";
					$("t25").style.color = "white";
					$("t25").innerHTML = guai4;
				} else if (arr5[4] == 15) {
					$("t25").style.backgroundColor = "black";
					$("t25").style.color = "white";
					$("t25").innerHTML = guai5;
				} else if (arr5[4] == 1) {
					$("t25").style.backgroundColor = "red";
					$("t25").innerHTML = "血瓶";
				} else if (arr5[4] == 2) {
					$("t25").style.backgroundColor = "blue";
					$("t25").innerHTML = "蓝瓶";
				} else if (arr5[4] == 3) {
					$("t25").style.backgroundColor = "#00ff00";
					$("t25").innerHTML = "装备";
				} else if (arr5[4] == 4) {
					$("t25").style.backgroundColor = "#ff00ff";
					$("t25").innerHTML = "卷轴";
				} else if (arr5[4] == 5) {
					$("t25").style.backgroundColor = "#33ffff";
					$("t25").innerHTML = "探索点";
				} else if (arr5[4] == 6) {
					$("t25").style.backgroundColor = "yellow";
					$("t25").innerHTML = "金币";
				} else if (arr5[4] == 7) {
					$("t25").style.backgroundColor = "#ff7600";
					$("t25").innerHTML = "钥匙";
				} else if (arr5[4] == 8) {
					$("t25").style.backgroundColor = "#888";
					$("t25").style.color = "white";
					$("t25").innerHTML = "门";
					$("t25").disable = "true";
				} else if (arr5[4] == 9) {
					$("t25").style.backgroundColor = "orange";
					$("t25").innerHTML = "攻击力";
				} else if (arr5[4] == 10) {
					$("t25").style.backgroundColor = "purple";
					$("t25").innerHTML = "魔力";
				}
			} else {
				if ($("t25").innerHTML == "血瓶") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
					$("t25").innerHTML = "";
					$("t25").style.backgroundColor = "gray";
				}
				if ($("t25").innerHTML == "蓝瓶") {
					$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
					$("t25").innerHTML = "";
					$("t25").style.backgroundColor = "gray";
				}
				if ($("t25").innerHTML == "金币") {
					$("t25").innerHTML = "";
					$("t25").style.backgroundColor = "gray";
				}
				if ($("t25").innerHTML == "探索点") {
					$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
					$("t25").innerHTML = "";
					$("t25").style.backgroundColor = "gray";
				}
				if ($("t25").innerHTML == "攻击力") {
					$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
					$("t25").innerHTML = "";
					$("t25").style.backgroundColor = "gray";
				}
				if ($("t25").innerHTML == "魔力") {
					$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
					$("t25").innerHTML = "";
					$("t25").style.backgroundColor = "gray";
				}
				if ($("t25").innerHTML == "钥匙") {
					$("key").innerHTML = 1;
					$("t25").innerHTML = "";
					$("t25").style.backgroundColor = "gray";
				}
				if ($("t25").innerHTML == "门") {
					if ($("key").innerHTML == 1) {
						restart();
					}
				}
				if ($("t25").innerHTML == "卷轴") {
					$("t25").innerHTML = "";
					$("t25").style.backgroundColor = "gray";
				}
				if ($("t25").innerHTML == "装备") {
					$("t25").innerHTML = "";
					$("t25").style.backgroundColor = "gray";
				} else if ($("t25").innerHTML[34] == "1") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
					$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx1").innerHTML) <= 0) {
						$("t25").innerHTML = "";
						$("t25").style.backgroundColor = "gray";
					}
				} else if ($("t25").innerHTML[34] == "2") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
					$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx2").innerHTML) <= 0) {
						$("t25").innerHTML = "";
						$("t25").style.backgroundColor = "gray";
					}
				} else if ($("t25").innerHTML[34] == "3") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
					$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx3").innerHTML) <= 0) {
						$("t25").innerHTML = "";
						$("t25").style.backgroundColor = "gray";
					}
				} else if ($("t25").innerHTML[34] == "4") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
					$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx4").innerHTML) <= 0) {
						$("t25").innerHTML = "";
						$("t25").style.backgroundColor = "gray";
					}
				} else if ($("t25").innerHTML[34] == "5") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
					$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx5").innerHTML) <= 0) {
						$("t25").innerHTML = "";
						$("t25").style.backgroundColor = "gray";
					}
				}
			}
		}
	}
	function c26(){
		if($("t21").innerHTML.length<10&&$("t22").innerHTML.length<10&&$("t27").innerHTML.length<10&&($("t21").style.backgroundColor!=""||$("t26").style.backgroundColor!="")) {
			if ($("t26").style.backgroundColor == "") {
				if (arr6[0] == 11) {
					$("t26").style.backgroundColor = "black";
					$("t26").style.color = "white";
					$("t26").innerHTML = guai1;
				} else if (arr6[0] == 12) {
					$("t26").style.backgroundColor = "black";
					$("t26").style.color = "white";
					$("t26").innerHTML = guai2;
				} else if (arr6[0] == 13) {
					$("t26").style.backgroundColor = "black";
					$("t26").style.color = "white";
					$("t26").innerHTML = guai3;
				} else if (arr6[0] == 14) {
					$("t26").style.backgroundColor = "black";
					$("t26").style.color = "white";
					$("t26").innerHTML = guai4;
				} else if (arr6[0] == 15) {
					$("t26").style.backgroundColor = "black";
					$("t26").style.color = "white";
					$("t26").innerHTML = guai5;
				} else if (arr6[0] == 1) {
					$("t26").style.backgroundColor = "red";
					$("t26").innerHTML = "血瓶";
				} else if (arr6[0] == 2) {
					$("t26").style.backgroundColor = "blue";
					$("t26").innerHTML = "蓝瓶";
				} else if (arr6[0] == 3) {
					$("t26").style.backgroundColor = "#00ff00";
					$("t26").innerHTML = "装备";
				} else if (arr6[0] == 4) {
					$("t26").style.backgroundColor = "#ff00ff";
					$("t26").innerHTML = "卷轴";
				} else if (arr6[0] == 5) {
					$("t26").style.backgroundColor = "#33ffff";
					$("t26").innerHTML = "探索点";
				} else if (arr6[0] == 6) {
					$("t26").style.backgroundColor = "yellow";
					$("t26").innerHTML = "金币";
				} else if (arr6[0] == 7) {
					$("t26").style.backgroundColor = "#ff7600";
					$("t26").innerHTML = "钥匙";
				} else if (arr6[0] == 8) {
					$("t26").style.backgroundColor = "#888";
					$("t26").style.color = "white";
					$("t26").innerHTML = "门";
					$("t26").disable = "true";
				} else if (arr6[0] == 9) {
					$("t26").style.backgroundColor = "orange";
					$("t26").innerHTML = "攻击力";
				} else if (arr6[0] == 10) {
					$("t26").style.backgroundColor = "purple";
					$("t26").innerHTML = "魔力";
				}
			} else {
				if ($("t26").innerHTML == "血瓶") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
					$("t26").innerHTML = "";
					$("t26").style.backgroundColor = "gray";
				}
				if ($("t26").innerHTML == "蓝瓶") {
					$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
					$("t26").innerHTML = "";
					$("t26").style.backgroundColor = "gray";
				}
				if ($("t26").innerHTML == "金币") {
					$("t26").innerHTML = "";
					$("t26").style.backgroundColor = "gray";
				}
				if ($("t26").innerHTML == "探索点") {
					$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
					$("t26").innerHTML = "";
					$("t26").style.backgroundColor = "gray";
				}
				if ($("t26").innerHTML == "攻击力") {
					$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
					$("t26").innerHTML = "";
					$("t26").style.backgroundColor = "gray";
				}
				if ($("t26").innerHTML == "魔力") {
					$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
					$("t26").innerHTML = "";
					$("t26").style.backgroundColor = "gray";
				}
				if ($("t26").innerHTML == "钥匙") {
					$("key").innerHTML = 1;
					$("t26").innerHTML = "";
					$("t26").style.backgroundColor = "gray";
				}
				if ($("t26").innerHTML == "门") {
					if ($("key").innerHTML == 1) {
						restart();
					}
				}
				if ($("t26").innerHTML == "卷轴") {
					$("t26").innerHTML = "";
					$("t26").style.backgroundColor = "gray";
				}
				if ($("t26").innerHTML == "装备") {
					$("t26").innerHTML = "";
					$("t26").style.backgroundColor = "gray";
				} else if ($("t26").innerHTML[34] == "1") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
					$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx1").innerHTML) <= 0) {
						$("t26").innerHTML = "";
						$("t26").style.backgroundColor = "gray";
					}
				} else if ($("t26").innerHTML[34] == "2") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
					$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx2").innerHTML) <= 0) {
						$("t26").innerHTML = "";
						$("t26").style.backgroundColor = "gray";
					}
				} else if ($("t26").innerHTML[34] == "3") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
					$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx3").innerHTML) <= 0) {
						$("t26").innerHTML = "";
						$("t26").style.backgroundColor = "gray";
					}
				} else if ($("t26").innerHTML[34] == "4") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
					$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx4").innerHTML) <= 0) {
						$("t26").innerHTML = "";
						$("t26").style.backgroundColor = "gray";
					}
				} else if ($("t26").innerHTML[34] == "5") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
					$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx5").innerHTML) <= 0) {
						$("t26").innerHTML = "";
						$("t26").style.backgroundColor = "gray";
					}
				}
			}
		}
	}
	function c27(){
		if($("t21").innerHTML.length<10&&$("t22").innerHTML.length<10&&$("t23").innerHTML.length<10&&$("t26").innerHTML.length<10&&$("t28").innerHTML.length<10&&($("t22").style.backgroundColor!=""||$("t26").style.backgroundColor!=""||$("t28").style.backgroundColor!="")) {
			if ($("t27").style.backgroundColor == "") {
				if (arr6[1] == 11) {
					$("t27").style.backgroundColor = "black";
					$("t27").style.color = "white";
					$("t27").innerHTML = guai1;
				} else if (arr6[1] == 12) {
					$("t27").style.backgroundColor = "black";
					$("t27").style.color = "white";
					$("t27").innerHTML = guai2;
				} else if (arr6[1] == 13) {
					$("t27").style.backgroundColor = "black";
					$("t27").style.color = "white";
					$("t27").innerHTML = guai3;
				} else if (arr6[1] == 14) {
					$("t27").style.backgroundColor = "black";
					$("t27").style.color = "white";
					$("t27").innerHTML = guai4;
				} else if (arr6[1] == 15) {
					$("t27").style.backgroundColor = "black";
					$("t27").style.color = "white";
					$("t27").innerHTML = guai5;
				} else if (arr6[1] == 1) {
					$("t27").style.backgroundColor = "red";
					$("t27").innerHTML = "血瓶";
				} else if (arr6[1] == 2) {
					$("t27").style.backgroundColor = "blue";
					$("t27").innerHTML = "蓝瓶";
				} else if (arr6[1] == 3) {
					$("t27").style.backgroundColor = "#00ff00";
					$("t27").innerHTML = "装备";
				} else if (arr6[1] == 4) {
					$("t27").style.backgroundColor = "#ff00ff";
					$("t27").innerHTML = "卷轴";
				} else if (arr6[1] == 5) {
					$("t27").style.backgroundColor = "#33ffff";
					$("t27").innerHTML = "探索点";
				} else if (arr6[1] == 6) {
					$("t27").style.backgroundColor = "yellow";
					$("t27").innerHTML = "金币";
				} else if (arr6[1] == 7) {
					$("t27").style.backgroundColor = "#ff7600";
					$("t27").innerHTML = "钥匙";
				} else if (arr6[1] == 8) {
					$("t27").style.backgroundColor = "#888";
					$("t27").style.color = "white";
					$("t27").innerHTML = "门";
					$("t27").disable = "true";
				} else if (arr6[1] == 9) {
					$("t27").style.backgroundColor = "orange";
					$("t27").innerHTML = "攻击力";
				} else if (arr6[1] == 10) {
					$("t27").style.backgroundColor = "purple";
					$("t27").innerHTML = "魔力";
				}
			} else {
				if ($("t27").innerHTML == "血瓶") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
					$("t27").innerHTML = "";
					$("t27").style.backgroundColor = "gray";
				}
				if ($("t27").innerHTML == "蓝瓶") {
					$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
					$("t27").innerHTML = "";
					$("t27").style.backgroundColor = "gray";
				}
				if ($("t27").innerHTML == "金币") {
					$("t27").innerHTML = "";
					$("t27").style.backgroundColor = "gray";
				}
				if ($("t27").innerHTML == "探索点") {
					$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
					$("t27").innerHTML = "";
					$("t27").style.backgroundColor = "gray";
				}
				if ($("t27").innerHTML == "攻击力") {
					$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
					$("t27").innerHTML = "";
					$("t27").style.backgroundColor = "gray";
				}
				if ($("t27").innerHTML == "魔力") {
					$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
					$("t27").innerHTML = "";
					$("t27").style.backgroundColor = "gray";
				}
				if ($("t27").innerHTML == "钥匙") {
					$("key").innerHTML = 1;
					$("t27").innerHTML = "";
					$("t27").style.backgroundColor = "gray";
				}
				if ($("t27").innerHTML == "门") {
					if ($("key").innerHTML == 1) {
						restart();
					}
				}
				if ($("t27").innerHTML == "卷轴") {
					$("t27").innerHTML = "";
					$("t27").style.backgroundColor = "gray";
				}
				if ($("t27").innerHTML == "装备") {
					$("t27").innerHTML = "";
					$("t27").style.backgroundColor = "gray";
				} else if ($("t27").innerHTML[34] == "1") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
					$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx1").innerHTML) <= 0) {
						$("t27").innerHTML = "";
						$("t27").style.backgroundColor = "gray";
					}
				} else if ($("t27").innerHTML[34] == "2") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
					$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx2").innerHTML) <= 0) {
						$("t27").innerHTML = "";
						$("t27").style.backgroundColor = "gray";
					}
				} else if ($("t27").innerHTML[34] == "3") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
					$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx3").innerHTML) <= 0) {
						$("t27").innerHTML = "";
						$("t27").style.backgroundColor = "gray";
					}
				} else if ($("t27").innerHTML[34] == "4") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
					$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx4").innerHTML) <= 0) {
						$("t27").innerHTML = "";
						$("t27").style.backgroundColor = "gray";
					}
				} else if ($("t27").innerHTML[34] == "5") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
					$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx5").innerHTML) <= 0) {
						$("t27").innerHTML = "";
						$("t27").style.backgroundColor = "gray";
					}
				}
			}
		}
	}
	function c28(){
		if($("t22").innerHTML.length<10&&$("t23").innerHTML.length<10&&$("t24").innerHTML.length<10&&$("t27").innerHTML.length<10&&$("t29").innerHTML.length<10&&($("t23").style.backgroundColor!=""||$("t27").style.backgroundColor!=""||$("t29").style.backgroundColor!="")) {
			if ($("t28").style.backgroundColor == "") {
				if (arr6[2] == 11) {
					$("t28").style.backgroundColor = "black";
					$("t28").style.color = "white";
					$("t28").innerHTML = guai1;
				} else if (arr6[2] == 12) {
					$("t28").style.backgroundColor = "black";
					$("t28").style.color = "white";
					$("t28").innerHTML = guai2;
				} else if (arr6[2] == 13) {
					$("t28").style.backgroundColor = "black";
					$("t28").style.color = "white";
					$("t28").innerHTML = guai3;
				} else if (arr6[2] == 14) {
					$("t28").style.backgroundColor = "black";
					$("t28").style.color = "white";
					$("t28").innerHTML = guai4;
				} else if (arr6[2] == 15) {
					$("t28").style.backgroundColor = "black";
					$("t28").style.color = "white";
					$("t28").innerHTML = guai5;
				} else if (arr6[2] == 1) {
					$("t28").style.backgroundColor = "red";
					$("t28").innerHTML = "血瓶";
				} else if (arr6[2] == 2) {
					$("t28").style.backgroundColor = "blue";
					$("t28").innerHTML = "蓝瓶";
				} else if (arr6[2] == 3) {
					$("t28").style.backgroundColor = "#00ff00";
					$("t28").innerHTML = "装备";
				} else if (arr6[2] == 4) {
					$("t28").style.backgroundColor = "#ff00ff";
					$("t28").innerHTML = "卷轴";
				} else if (arr6[2] == 5) {
					$("t28").style.backgroundColor = "#33ffff";
					$("t28").innerHTML = "探索点";
				} else if (arr6[2] == 6) {
					$("t28").style.backgroundColor = "yellow";
					$("t28").innerHTML = "金币";
				} else if (arr6[2] == 7) {
					$("t28").style.backgroundColor = "#ff7600";
					$("t28").innerHTML = "钥匙";
				} else if (arr6[2] == 8) {
					$("t28").style.backgroundColor = "#888";
					$("t28").style.color = "white";
					$("t28").innerHTML = "门";
					$("t28").disable = "true";
				} else if (arr6[2] == 9) {
					$("t28").style.backgroundColor = "orange";
					$("t28").innerHTML = "攻击力";
				} else if (arr6[2] == 10) {
					$("t28").style.backgroundColor = "purple";
					$("t28").innerHTML = "魔力";
				}
			} else {
				if ($("t28").innerHTML == "血瓶") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
					$("t28").innerHTML = "";
					$("t28").style.backgroundColor = "gray";
				}
				if ($("t28").innerHTML == "蓝瓶") {
					$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
					$("t28").innerHTML = "";
					$("t28").style.backgroundColor = "gray";
				}
				if ($("t28").innerHTML == "金币") {
					$("t28").innerHTML = "";
					$("t28").style.backgroundColor = "gray";
				}
				if ($("t28").innerHTML == "探索点") {
					$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
					$("t28").innerHTML = "";
					$("t28").style.backgroundColor = "gray";
				}
				if ($("t28").innerHTML == "攻击力") {
					$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
					$("t28").innerHTML = "";
					$("t28").style.backgroundColor = "gray";
				}
				if ($("t28").innerHTML == "魔力") {
					$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
					$("t28").innerHTML = "";
					$("t28").style.backgroundColor = "gray";
				}
				if ($("t28").innerHTML == "钥匙") {
					$("key").innerHTML = 1;
					$("t28").innerHTML = "";
					$("t28").style.backgroundColor = "gray";
				}
				if ($("t28").innerHTML == "门") {
					if ($("key").innerHTML == 1) {
						restart();
					}
				}
				if ($("t28").innerHTML == "卷轴") {
					$("t28").innerHTML = "";
					$("t28").style.backgroundColor = "gray";
				}
				if ($("t28").innerHTML == "装备") {
					$("t28").innerHTML = "";
					$("t28").style.backgroundColor = "gray";
				} else if ($("t28").innerHTML[34] == "1") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
					$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx1").innerHTML) <= 0) {
						$("t28").innerHTML = "";
						$("t28").style.backgroundColor = "gray";
					}
				} else if ($("t28").innerHTML[34] == "2") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
					$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx2").innerHTML) <= 0) {
						$("t28").innerHTML = "";
						$("t28").style.backgroundColor = "gray";
					}
				} else if ($("t28").innerHTML[34] == "3") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
					$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx3").innerHTML) <= 0) {
						$("t28").innerHTML = "";
						$("t28").style.backgroundColor = "gray";
					}
				} else if ($("t28").innerHTML[34] == "4") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
					$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx4").innerHTML) <= 0) {
						$("t28").innerHTML = "";
						$("t28").style.backgroundColor = "gray";
					}
				} else if ($("t28").innerHTML[34] == "5") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
					$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx5").innerHTML) <= 0) {
						$("t28").innerHTML = "";
						$("t28").style.backgroundColor = "gray";
					}
				}
			}
		}
	}
	function c29(){
		if($("t23").innerHTML.length<10&&$("t24").innerHTML.length<10&&$("t25").innerHTML.length<10&&$("t28").innerHTML.length<10&&$("t30").innerHTML.length<10&&($("t24").style.backgroundColor!=""||$("t28").style.backgroundColor!=""||$("t30").style.backgroundColor!="")) {
			if ($("t29").style.backgroundColor == "") {
				if (arr6[3] == 11) {
					$("t29").style.backgroundColor = "black";
					$("t29").style.color = "white";
					$("t29").innerHTML = guai1;
				} else if (arr6[3] == 12) {
					$("t29").style.backgroundColor = "black";
					$("t29").style.color = "white";
					$("t29").innerHTML = guai2;
				} else if (arr6[3] == 13) {
					$("t29").style.backgroundColor = "black";
					$("t29").style.color = "white";
					$("t29").innerHTML = guai3;
				} else if (arr6[3] == 14) {
					$("t29").style.backgroundColor = "black";
					$("t29").style.color = "white";
					$("t29").innerHTML = guai4;
				} else if (arr6[3] == 15) {
					$("t29").style.backgroundColor = "black";
					$("t29").style.color = "white";
					$("t29").innerHTML = guai5;
				} else if (arr6[3] == 1) {
					$("t29").style.backgroundColor = "red";
					$("t29").innerHTML = "血瓶";
				} else if (arr6[3] == 2) {
					$("t29").style.backgroundColor = "blue";
					$("t29").innerHTML = "蓝瓶";
				} else if (arr6[3] == 3) {
					$("t29").style.backgroundColor = "#00ff00";
					$("t29").innerHTML = "装备";
				} else if (arr6[3] == 4) {
					$("t29").style.backgroundColor = "#ff00ff";
					$("t29").innerHTML = "卷轴";
				} else if (arr6[3] == 5) {
					$("t29").style.backgroundColor = "#33ffff";
					$("t29").innerHTML = "探索点";
				} else if (arr6[3] == 6) {
					$("t29").style.backgroundColor = "yellow";
					$("t29").innerHTML = "金币";
				} else if (arr6[3] == 7) {
					$("t29").style.backgroundColor = "#ff7600";
					$("t29").innerHTML = "钥匙";
				} else if (arr6[3] == 8) {
					$("t29").style.backgroundColor = "#888";
					$("t29").style.color = "white";
					$("t29").innerHTML = "门";
					$("t29").disable = "true";
				} else if (arr6[3] == 9) {
					$("t29").style.backgroundColor = "orange";
					$("t29").innerHTML = "攻击力";
				} else if (arr6[3] == 10) {
					$("t29").style.backgroundColor = "purple";
					$("t29").innerHTML = "魔力";
				}
			} else {
				if ($("t29").innerHTML == "血瓶") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
					$("t29").innerHTML = "";
					$("t29").style.backgroundColor = "gray";
				}
				if ($("t29").innerHTML == "蓝瓶") {
					$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
					$("t29").innerHTML = "";
					$("t29").style.backgroundColor = "gray";
				}
				if ($("t29").innerHTML == "金币") {
					$("t29").innerHTML = "";
					$("t29").style.backgroundColor = "gray";
				}
				if ($("t29").innerHTML == "探索点") {
					$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
					$("t29").innerHTML = "";
					$("t29").style.backgroundColor = "gray";
				}
				if ($("t29").innerHTML == "攻击力") {
					$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
					$("t29").innerHTML = "";
					$("t29").style.backgroundColor = "gray";
				}
				if ($("t29").innerHTML == "魔力") {
					$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
					$("t29").innerHTML = "";
					$("t29").style.backgroundColor = "gray";
				}
				if ($("t29").innerHTML == "钥匙") {
					$("key").innerHTML = 1;
					$("t29").innerHTML = "";
					$("t29").style.backgroundColor = "gray";
				}
				if ($("t29").innerHTML == "门") {
					if ($("key").innerHTML == 1) {
						restart();
					}
				}
				if ($("t29").innerHTML == "卷轴") {
					$("t29").innerHTML = "";
					$("t29").style.backgroundColor = "gray";
				}
				if ($("t29").innerHTML == "装备") {
					$("t29").innerHTML = "";
					$("t29").style.backgroundColor = "gray";
				} else if ($("t29").innerHTML[34] == "1") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
					$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx1").innerHTML) <= 0) {
						$("t29").innerHTML = "";
						$("t29").style.backgroundColor = "gray";
					}
				} else if ($("t29").innerHTML[34] == "2") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
					$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx2").innerHTML) <= 0) {
						$("t29").innerHTML = "";
						$("t29").style.backgroundColor = "gray";
					}
				} else if ($("t29").innerHTML[34] == "3") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
					$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx3").innerHTML) <= 0) {
						$("t29").innerHTML = "";
						$("t29").style.backgroundColor = "gray";
					}
				} else if ($("t29").innerHTML[34] == "4") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
					$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx4").innerHTML) <= 0) {
						$("t29").innerHTML = "";
						$("t29").style.backgroundColor = "gray";
					}
				} else if ($("t29").innerHTML[34] == "5") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
					$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx5").innerHTML) <= 0) {
						$("t29").innerHTML = "";
						$("t29").style.backgroundColor = "gray";
					}
				}
			}
		}
	}
	function c30(){
		if($("t24").innerHTML.length<10&&$("t25").innerHTML.length<10&&$("t29").innerHTML.length<10&&($("t25").style.backgroundColor!=""||$("t29").style.backgroundColor!="")) {
			if ($("t30").style.backgroundColor == "") {
				if (arr6[4] == 11) {
					$("t30").style.backgroundColor = "black";
					$("t30").style.color = "white";
					$("t30").innerHTML = guai1;
				} else if (arr6[4] == 12) {
					$("t30").style.backgroundColor = "black";
					$("t30").style.color = "white";
					$("t30").innerHTML = guai2;
				} else if (arr6[4] == 13) {
					$("t30").style.backgroundColor = "black";
					$("t30").style.color = "white";
					$("t30").innerHTML = guai3;
				} else if (arr6[4] == 14) {
					$("t30").style.backgroundColor = "black";
					$("t30").style.color = "white";
					$("t30").innerHTML = guai4;
				} else if (arr6[4] == 15) {
					$("t30").style.backgroundColor = "black";
					$("t30").style.color = "white";
					$("t30").innerHTML = guai5;
				} else if (arr6[4] == 1) {
					$("t30").style.backgroundColor = "red";
					$("t30").innerHTML = "血瓶";
				} else if (arr6[4] == 2) {
					$("t30").style.backgroundColor = "blue";
					$("t30").innerHTML = "蓝瓶";
				} else if (arr6[4] == 3) {
					$("t30").style.backgroundColor = "#00ff00";
					$("t30").innerHTML = "装备";
				} else if (arr6[4] == 4) {
					$("t30").style.backgroundColor = "#ff00ff";
					$("t30").innerHTML = "卷轴";
				} else if (arr6[4] == 5) {
					$("t30").style.backgroundColor = "#33ffff";
					$("t30").innerHTML = "探索点";
				} else if (arr6[4] == 6) {
					$("t30").style.backgroundColor = "yellow";
					$("t30").innerHTML = "金币";
				} else if (arr6[4] == 7) {
					$("t30").style.backgroundColor = "#ff7600";
					$("t30").innerHTML = "钥匙";
				} else if (arr6[4] == 8) {
					$("t30").style.backgroundColor = "#888";
					$("t30").style.color = "white";
					$("t30").innerHTML = "门";
					$("t30").disable = "true";
				} else if (arr6[4] == 9) {
					$("t30").style.backgroundColor = "orange";
					$("t30").innerHTML = "攻击力";
				} else if (arr6[4] == 10) {
					$("t30").style.backgroundColor = "purple";
					$("t30").innerHTML = "魔力";
				}
			} else {
				if ($("t30").innerHTML == "血瓶") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) + 20;
					$("t30").innerHTML = "";
					$("t30").style.backgroundColor = "gray";
				}
				if ($("t30").innerHTML == "蓝瓶") {
					$("lan").innerHTML = parseInt($("lan").innerHTML) + 20;
					$("t30").innerHTML = "";
					$("t30").style.backgroundColor = "gray";
				}
				if ($("t30").innerHTML == "金币") {
					$("t30").innerHTML = "";
					$("t30").style.backgroundColor = "gray";
				}
				if ($("t30").innerHTML == "探索点") {
					$("tsd").innerHTML = parseInt($("tsd").innerHTML) + 20;
					$("t30").innerHTML = "";
					$("t30").style.backgroundColor = "gray";
				}
				if ($("t30").innerHTML == "攻击力") {
					$("gong").innerHTML = parseInt($("gong").innerHTML) + 1;
					$("t30").innerHTML = "";
					$("t30").style.backgroundColor = "gray";
				}
				if ($("t30").innerHTML == "魔力") {
					$("mo").innerHTML = parseInt($("mo").innerHTML) + 1;
					$("t30").innerHTML = "";
					$("t30").style.backgroundColor = "gray";
				}
				if ($("t30").innerHTML == "钥匙") {
					$("key").innerHTML = 1;
					$("t30").innerHTML = "";
					$("t30").style.backgroundColor = "gray";
				}
				if ($("t30").innerHTML == "门") {
					if ($("key").innerHTML == 1) {
						restart();
					}
				}
				if ($("t30").innerHTML == "卷轴") {
					$("t30").innerHTML = "";
					$("t30").style.backgroundColor = "gray";
				}
				if ($("t30").innerHTML == "装备") {
					$("t30").innerHTML = "";
					$("t30").style.backgroundColor = "gray";
				} else if ($("t30").innerHTML[34] == "1") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg1").innerHTML;
					$("gx1").innerHTML = parseInt($("gx1").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx1").innerHTML) <= 0) {
						$("t30").innerHTML = "";
						$("t30").style.backgroundColor = "gray";
					}
				} else if ($("t30").innerHTML[34] == "2") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg2").innerHTML;
					$("gx2").innerHTML = parseInt($("gx2").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx2").innerHTML) <= 0) {
						$("t30").innerHTML = "";
						$("t30").style.backgroundColor = "gray";
					}
				} else if ($("t30").innerHTML[34] == "3") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg3").innerHTML;
					$("gx3").innerHTML = parseInt($("gx3").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx3").innerHTML) <= 0) {
						$("t30").innerHTML = "";
						$("t30").style.backgroundColor = "gray";
					}
				} else if ($("t30").innerHTML[34] == "4") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg4").innerHTML;
					$("gx4").innerHTML = parseInt($("gx4").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx4").innerHTML) <= 0) {
						$("t30").innerHTML = "";
						$("t30").style.backgroundColor = "gray";
					}
				} else if ($("t30").innerHTML[34] == "5") {
					$("xue").innerHTML = parseInt($("xue").innerHTML) - $("gg5").innerHTML;
					$("gx5").innerHTML = parseInt($("gx5").innerHTML) - parseInt($("gong").innerHTML);
					if (parseInt($("gx5").innerHTML) <= 0) {
						$("t30").innerHTML = "";
						$("t30").style.backgroundColor = "gray";
					}
				}
			}
		}
	}*/
}
