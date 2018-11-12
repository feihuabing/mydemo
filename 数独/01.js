function marr(){
	var arr0=[];
	var arr=[1,2,3,4,5,6,7,8,9];
	for(i=0;i<9;i++){
		var a=arr.length*Math.random()
		arr0[i]=arr[parseInt(a)]
		arr.splice(parseInt(a),1);
	}
	return arr0;
}

module.exports.marr=marr;