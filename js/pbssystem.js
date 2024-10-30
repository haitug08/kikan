function fullscreen(){
	var ms    = navigator.appVersion.indexOf("MSIE");
	var ie4   = (ms > 0) && (parseInt(navigator.appVersion.substring(ms + 5,ms + 6)) >= 4);
	var nesc  = navigator.appName.lastIndexOf("Netscape"); //一致した位置(0)を返す
	var nesc4 = (nesc >= 0) && (parseInt(navigator.appVersion.substring(0,2)) >= 4);
	var c     = document.form1.user_id.value;
	var d     = document.form1.user_pass.value;

	if(c == "")
	{
		alert("IDが入力されていません");
		document.form1.user_id.focus();
		return false;
    } else {
		if (d == "")
		{
			alert("パスワードが入力されていません");
			document.form1.user_pass.focus();
			return false;
		} else {
			var W = screen.availWidth;
			var H = screen.availHeight;

			if(H > 720)
			{
				H = H - 40;
			}

			//obj=window.open("about:blank","newwin","WIDTH="+screen.availWidth+",HEIGHT="+screen.availHeight+",scrollbars=1");
	
	 		obj = window.open("about:blank","newwin","scrollbars=1,titlebar=yes,menubar=no,resizable =1");
	
			//obj=window.open("about:blank","newwin2","WIDTH=1024,HEIGHT=710,scrollbars=1,titlebar=yes,menubar=0,resizable =1");
			//obj=window.open("about:blank","newwin2","WIDTH="+W+",HEIGHT="+H+",scrollbars=1,titlebar=yes,menubar=0,resizable =1");
			
			document.form1.target = "newwin";
			document.form1.method = "post";
			document.form1.action = "menu.php";
			document.form1.submit();
			
			var x = (W - 1024) / 2;
			var y = (H -  710) / 2;
			
			//obj.moveTo(x,y);
	        
	        obj.moveTo(0,0); 
			obj.resizeTo(screen.availWidth,screen.availHeight);
			window.opener = "bbb";
		}
	}
	return true;
}

function openwin(url,nwin)
{
	//var url = URLencode(url);
	var dummy = new Date().getTime();
	
	url = url+"&dummy="+dummy;
	obj = window.open(url, nwin, "scrollbars=1,titlebar=yes,menubar=no,resizable =1");
	
	var x = (screen.width-1024)/2;
	var y = (screen.height-710)/2;
	
	//obj.moveTo(x,y);
	
	obj.moveTo(0,0); 
	obj.resizeTo(screen.availWidth,screen.availHeight);
}

function postwin(url,nwin,fm) {
	var W = screen.availWidth;
	var H = screen.availHeight;
	if(H>720){H = H -40;}
	obj=window.open("about:blank","swin","WIDTH=1024,HEIGHT=710,scrollbars=1,titlebar=yes,menubar=0,resizable =no");
	//obj=window.open(url,nwin,"WIDTH="+W+",HEIGHT="+H+",scrollbars=1,titlebar=yes,menubar=0,resizable =1");
	fm.target = "swin";
	fm.method = "post";
	fm.action = url;
	//fm.submit();
	//window.opener = "nnn"; 
}

function addwin(url,nwin,fm,W,H) {
	window.name = "dadat";
	//W=screen.availWidth;H=screen.availHeight;
	//if(H>700){H = H -40;}
	//var subwin=window.open("about:blank","twin","WIDTH="+W+",HEIGHT="+H+",left=100,top=150,scrollbars=1,titlebar=no,menubar=no,resizable =yes,status=no;");
	//obj=window.open(url,nwin,"WIDTH="+W+",HEIGHT="+H+",scrollbars=1,titlebar=yes,menubar=0,resizable =1");

	var dummy = new Date().getTime();
	
	url = url+"&dummy="+dummy;
	showModalDialog(url,"newwindow","dialogWidth:"+W+"px;dialogHeight:"+H+"px;dialogTop:"+event.screenY+"px;dialogLeft:"+event.screenX+"px;status:no; help:no");

	fm.target = "_self";
	fm.method = "get";

	//fm.action = url;
	
	fm.submit();
	
	//window.opener = "nnn"; 
}

function newwin(url,nwin,fm,W,H) {
	//W=screen.availWidth;H=screen.availHeight;
	//if(H>700){H = H -40;}
	obj=window.open(url, nwin, "WIDTH="+W+",HEIGHT="+H+",left=100,top=150,scrollbars=1,titlebar=no,menubar=no,resizable =yes,status=no;");
	//obj=window.open(url,nwin,"WIDTH="+W+",HEIGHT="+H+",scrollbars=1,titlebar=yes,menubar=0,resizable =1");
	//fm.submit();
	//window.opener = "nnn"; 
}

function showwin(url,nwin,fm,W,H) 
{
	//W=screen.availWidth;H=screen.availHeight;
	//if(H>700){H = H -40;}
	//obj=window.open("about:blank","twin","WIDTH="+W+",HEIGHT="+H+",left=800,top=150,scrollbars=1,titlebar=no,menubar=no,resizable =yes,status=no;");
	//obj=window.open(url,nwin,"WIDTH="+W+",HEIGHT="+H+",scrollbars=1,titlebar=yes,menubar=0,resizable =1");
	//fm.target = "twin";
	//fm.method = "post";
	//fm.action = url;
	//fm.submit();
	//window.opener = "nnn"; 
	var dummy = new Date().getTime();
	url = url+"&dummy="+dummy;
//showModalDialog(url,"newwindow","dialogWidth:"+W+"px;dialogHeight:"+H+"px;dialogTop:"+event.screenY+"px;dialogLeft:"+event.screenX+"px;status:no; help:no");
showModalDialog(url,"newwindow","dialogWidth:"+W+"px;dialogHeight:"+H+"px;center:1;status:no; help:no");


	
}


function jikowin(url,nwin,fm,W,H) {
	//W=screen.availWidth;H=screen.availHeight;
	//if(H>700){H = H -40;}
	//obj=window.open("about:blank","twin","WIDTH="+W+",HEIGHT="+H+",left=800,top=150,scrollbars=1,titlebar=no,menubar=no,resizable =yes,status=no;");
	//obj=window.open(url,nwin,"WIDTH="+W+",HEIGHT="+H+",scrollbars=1,titlebar=yes,menubar=0,resizable =1");
	//fm.target = "twin";
	//fm.method = "post";
	//fm.action = url;
	//fm.submit();
	//window.opener = "nnn"; 
	var dummy = new Date().getTime();
	url = url+"&dummy="+dummy;
	//showModalDialog(url,"newwindow","dialogWidth:"+W+"px;dialogHeight:"+H+"px;dialogTop:"+x+";dialogLeft:"+y+";status:no; help:no");	
showModalDialog(url,"newwindow","dialogWidth:"+W+"px;dialogHeight:"+H+"px;status:no; help:no");	
location.reload()
}


function calendar(obj,Ar)
{
	var dummy = new Date().getTime();

var rtn;
//window.open("cal.php","","width=180,height=610,left=1050,top=150");
rtn=showModalDialog("cal.php?d="+dummy,"newwindow","dialogWidth:750px;dialogHeight:270px;dialogTop:"+event.screenY+"px;dialogLeft:"+event.screenX+"px;status:no; help:no");
if((typeof(rtn) == 'undefined')||(rtn == '')){

}else if(Ar == 1){

	obj.value = rtn;

}else{

	fm = document.chkform[obj];
	fm.value = rtn;
	//obj.value = rtn;
}
}

function calendar2(obj,Ar)
{
var rtn;
//window.open("cal.php","","width=180,height=610,left=1050,top=150");
rtn=showModalDialog("calmonth.php","newwindow","dialogWidth:250px;dialogHeight:270px;dialogTop:"+event.screenY+"px;dialogLeft:"+event.screenX+"px;status:no; help:no");
if((typeof(rtn) == 'undefined')||(rtn == '')){

}else if(Ar == 1){

	obj.value = rtn;

}else{

	fm = document.chkform[obj];
	fm.value = rtn;
	//obj.value = rtn;
}
}

function listsyhn(data,data2,obj2,obj3,obj4,obj5,obj6,obj7,obj8)
{
	var rtn;
	var rdata;
	var fm1;
	var fm2;
	var birth;
	var knsyNo;
	var knsyNo2;
	var nentsukiindex;
	var nentsuki;
	var moushi;
	var credit;
birth = document.chkform[data].value;
sex = document.chkform[data2].value;
hhknid = document.chkform[obj2].value;

nentsukiindex = document.chkform[obj3].selectedIndex;
nentsuki = document.chkform[obj3].options[nentsukiindex].value;

creditindex = document.chkform[obj6].selectedIndex;
creditvalue = document.chkform[obj6].options[creditindex].value;

knsyNo = document.chkform[obj4].value;
moushi = document.chkform[obj5].value;
inputmoto = obj8;



 if(nentsuki==""){
		alert("払込回数を選択してください");
		return false;
	}else if(moushi==""){
		alert("申込受付日を入力してください。");
		return false;
	}else if(creditvalue==""){
		alert("払込方法を選択してください。");
		return false;
	}else{
		
		
	
if(creditvalue==1)
{
credit = 1;
}else{
credit = 0;
}

var dummy = new Date().getTime();
	

		rtn=showModalDialog("listsyhn.php?hhkn_birthDate="+birth+"&hhkn_sex="+sex+"&knsy_syoukenNo="+knsyNo+"&knsy_muketsukeDate="+moushi+"&nentsuki="+nentsuki+"&knsy_credit="+credit+"&hhknID="+hhknid+"&inputdata="+inputmoto+"&dummy="+dummy+"","newwindow","dialogWidth:750px;dialogHeight:400px;status:no; help:no");
		
			if((typeof(rtn) == 'undefined')||(rtn == '')){
		}else{
		
			rdata = rtn.split(",");
			
			fm1 = document.chkform.syhnID;
			fm2 = document.chkform.knsy_hokenryou;
			fm3 = document.chkform.syhn_name;
			fm4 = document.chkform.syhn_select;
			fm5 = document.chkform.knsy_keiyakuDate;
			fm6 = document.chkform.knsy_keiyakuage;
			fm7 = document.chkform.knsy_nkeiyakuDate;
			fm8 = document.chkform.knsy_koukaiDate;
			fm9 = document.chkform.knsy_mankiDate;
			fm10 = document.chkform.knsy_nkeiyakuage;
			fm11 = document.chkform.knsy_koukaiage;
			fm12 = document.chkform.knsy_kigenDate;
			fm13 = document.chkform.knsy_limitover;
			
/*			fm8 = document.chkform.sykn_plan;
			fm9 = document.chkform.sykn_death;
			fm10 = document.chkform.sykn_koudo;
			fm11 = document.chkform.sykn_saigaishibou;
			fm12 = document.chkform.sykn_saigaikoudo;
			fm13 = document.chkform.sykn_shippeinyuuin;
			fm14 = document.chkform.sykn_saigainyuuin;
			fm15 = document.chkform.sykn_syujyutsu;
			fm16 = document.chkform.sykn_tokutei;
			fm17 = document.chkform.kn_input;
'".$_REQUEST['syhnID'].",".$_REQUEST['syhn_name'].",".$_REQUEST['knsy_hokenryou'].",".$_REQUEST['knsy_keiyakuage'].",".$sekininKaishi.",".$jikaiDate.",".$koukaiDate.",".$manryouDate."'			
*/			
			
			
			
			fm1.value = rdata[0];
			fm2.value = rdata[2];
			fm3.value = rdata[1];
			fm4.value = rdata[1];
			fm5.value = rdata[3];
			fm6.value = rdata[4];
			fm7.value = rdata[5];
			fm8.value = rdata[6];
			fm9.value = rdata[7];
			fm10.value = rdata[8];
			fm11.value = rdata[9];
			fm12.value = rdata[10];
			fm13.value = rdata[11];
			
/*			fm8.value = rdata[5];
			fm9.value = rdata[6];
			fm10.value = rdata[6];
			fm11.value = rdata[7];
			fm12.value = rdata[7];
			fm13.value = rdata[8];
			fm14.value = rdata[9];
			fm15.value = rdata[10];
			fm16.value = rdata[11];
*/
			
		}
	}
}

function inputkoshitsu(form,colm,zip,pref,addr,build,goushitsu,tatemonok)
{
	var rtn;
	var rdata;
	var fm1;
	var fm2;
	var fm3;
	var fm4;
	var fm5;
	//window.open("cal.php","","width=180,height=610,left=1050,top=150");
	rtn=showModalDialog("listkoshitsu.php?colm="+colm+"","newwindow","dialogWidth:850px;dialogHeight:700px;dialogTop:"+event.screenY+"px;dialogLeft:"+event.screenX+"px;status:no; help:no;resizable:yes;scroll:yes;");
	
	if((typeof(rtn) == 'undefined')||(rtn == '')){
	}else{
	
	rdata = rtn.split(",");
	
	fm1 = document.chkform[zip];
	fm2 = document.chkform[pref];
	fm3 = document.chkform[addr];
	fm4 = document.chkform[build];
	fm5 = document.chkform[tatemonok];
	
	fm1.value = rdata[0];
	fm2.value = rdata[1];
	fm3.value = rdata[2];
	fm4.value = rdata[3];
	
	for(var i=0; i < fm5.options.length; i++) {  
	  var option = fm5.options[i];  
	  if( option.value == rdata[4]){  
	   option.selected = true;  
	  }else{  
	   option.selected = false;  
	  }  
	}
	document.chkform[goushitsu].focus();
	if(document.chkform.bild_touroku!= null){document.chkform.bild_touroku.checked = false;}
	}
}

function listtori(obj,Ar)
{
var rtn;
	var dummy = new Date().getTime();

//window.open("cal.php","","width=180,height=610,left=1050,top=150");
rtn=showModalDialog("listtori.php?dummy="+dummy,"newwindow","dialogWidth:900px;dialogHeight:500px;dialogTop:"+event.screenY+"px;dialogLeft:"+event.screenX+"px;status:no; help:no;");
if((typeof(rtn) == 'undefined')||(rtn == '')){

}else if(Ar == 1){

	obj.value = rtn;

}else{
	
	rdata = rtn.split(",");

	a1 = "toriID";
	a2 = "tori_name";
	a3 = "tori_furi";
	a4 = "tori_zipcode";
	a5 = "tori_pref";
	a6 = "tori_addr";
	a7 = "tori_build";
	a8 = "tori_phone";
	a9 = "tori_fax";
	a10 = "tori_cell";
	a11 = "tori_cellmail";
	a12 = "tori_bank";
	a13 = "tori_bankcode";
	a14 = "tori_branch";
	a15 = "tori_branchcode";
	a16 = "tori_ac_syubetsu";
	a17 = "tori_account";
	a18 = "tori_ac_name";
	a19 = "tori_ac_furi";
	a20 = "tori_sex";
	a21 = "tori_birthDate";
	a210 = "tori_birthDate0";
	a211 = "tori_birthDate1";
	a212 = "tori_birthDate2";
	a213 = "tori_birthDate3";
	a22 = "tori_mail";

	fm1 = document.chkform[a1];
	fm2 = document.chkform[a2];
	fm3 = document.chkform[a3];
	fm4 = document.chkform[a4];
	fm5 = document.chkform[a5];
	fm6 = document.chkform[a6];
	fm7 = document.chkform[a7];
	fm8 = document.chkform[a8];
	fm9 = document.chkform[a9];
	fm10 = document.chkform[a10];
	fm11 = document.chkform[a11];
	fm12 = document.chkform[a12];
	fm13 = document.chkform[a13];
	fm14 = document.chkform[a14];
	fm15 = document.chkform[a15];
	fm16 = document.chkform[a16];
	fm17 = document.chkform[a17];
	fm18 = document.chkform[a18];
	fm19 = document.chkform[a19];
	fm20 = document.chkform[a20];
	fm21 = document.chkform[a21];
	fm210 = document.chkform[a210];
	fm211 = document.chkform[a211];
	fm212 = document.chkform[a212];
	fm213 = document.chkform[a213];
	fm22 = document.chkform[a22];

fm1.value = rdata[0];
	fm2.value = rdata[1];
	fm3.value = rdata[2];
	fm4.value = rdata[3];
	fm5.value = rdata[4];
	fm6.value = rdata[5];
	fm7.value = rdata[6];
	fm8.value = rdata[7];
	fm9.value = rdata[8];
	fm10.value = rdata[9];
	fm11.value = rdata[10];
	fm12.value = rdata[11];
	fm13.value = rdata[12];
	fm14.value = rdata[13];
	fm15.value = rdata[14];
	fm16.selectedIndex = rdata[15];
	fm17.value = rdata[16];
	fm18.value = rdata[17];
	fm19.value = rdata[18];
	fm20.selectedIndex = rdata[19];
	fm21.value = rdata[20];
	var birth = rdata[20].split("-");
	var birthA = parseFloat(birth[0]);
	if(birthA>1988){birthD = birthA-1988;fm210.selectedIndex=1;}else{birthD = birthA-1925;fm210.selectedIndex=2;}
	fm211.value = birthD;
	fm212.value = birth[1];
	fm213.value = birth[2];
	//if(rdata[19]){birthD = birth[0]-1988;fm210.selectedIndex=1;}else{birthD = birth[0]-1925;fm210.selectedIndex=2;}
	
	fm22.value = rdata[21];
}
}

function listdair(data,objc,obj3)
{
	var rtn;
	var fm;
	var fm2;
	var obj2 = data+"ID";
	var obj3 = data+"_name";
	var obj4 = "knsy_tesuuryou";
	var dummy = new Date().getTime();

	obj = document.chkform[obj2].value;

	//window.open("cal.php","","width=180,height=610,left=1050,top=150");
	rtn=showModalDialog("listdair.php?dummy="+dummy+"&colm="+data+"&id="+obj+"","newwindow","dialogWidth:700px;dialogHeight:750px;dialogTop:"+event.screenY+"px;dialogLeft:"+event.screenX+"px;status:no; help:no;resizable:yes;scroll:yes;");
	
	if((typeof(rtn) == 'undefined')||(rtn == '')){
	}else{
		rdata = rtn.split(",");
		fm = document.chkform[obj2];
		fm2 = document.chkform[obj3];
		fm3 = document.chkform[obj4];
		fm.value = rdata[0];
		fm2.value = rdata[1];
		fm3.value = rdata[2];
	}
}

function listdair2(data,obj)
{
	var rtn;
	var fm;
	var obj2 = data+"ID";
	var dummy = new Date().getTime();

	obj = document.chkform[obj2].value;

	//window.open("cal.php","","width=180,height=610,left=1050,top=150");
	rtn=showModalDialog("listdair2.php?dummy="+dummy+"&colm="+data+"&id="+obj+"","newwindow","dialogWidth:700px;dialogHeight:750px;dialogTop:"+event.screenY+"px;dialogLeft:"+event.screenX+"px;status:no; help:no;resizable:yes;scroll:yes;");
	
	if((typeof(rtn) == 'undefined')||(rtn == '')){
	}else{
		rdata = rtn.split(",");
		fm = document.chkform[obj2];
		fm.value = rdata[0];
	}
}

function listnoriai(obj,data)
{
	var rtn;
	var fm;
//	var obj2 = data+"_noriaiID";
	var dummy = new Date().getTime();


	//window.open("cal.php","","width=180,height=610,left=1050,top=150");
	rtn=showModalDialog("listnoriai.php?dummy="+dummy+"","newwindow","dialogWidth:700px;dialogHeight:250px;dialogTop:"+event.screenY+"px;dialogLeft:"+event.screenX+"px;status:no; help:no;resizable:yes;scroll:yes;");
	
	if((typeof(rtn) == 'undefined')||(rtn == '')){
	}else{
		rdata = rtn.split(",");
		fm = obj[data];
		fm.value = rdata[0];
	}
}

function showpaytype(data,obj)
{
	var rtn;
	var fm;

	var dummy = new Date().getTime();

	objB = $("#knsy_keiro").val();
	if(objB=="")
	{
		alert("支払方法（経路）を選択してください。");
	}

	//window.open("cal.php","","width=180,height=610,left=1050,top=150");
	rtn=showModalDialog("showpaytype.php?dummy="+dummy+"&knsy_keiro="+encodeURI(objB)+"&g=1","newwindow","dialogWidth:700px;dialogHeight:250px;dialogTop:"+event.screenY+"px;dialogLeft:"+event.screenX+"px;status:no; help:no;resizable:yes;scroll:yes;");
	
	if((typeof(rtn) == 'undefined')||(rtn == '')){
	}else{
		
		$("#webt_paytype").val(rtn);
	}
}


function listselect(data,obj)
{
	var rtn;
	var fm;
	var fm2;
	var obj2 = data+"ID";
	var objB = "dairID";
	var obj3 = data+"_name";
	var dummy = new Date().getTime();

	obj = document.chkform[obj2].value;
	if(data=="bsyn")
	{
		objD = document.chkform[objB].value;
	}else{
		objD="";	
	}
	//window.open("cal.php","","width=180,height=610,left=1050,top=150");
	rtn=showModalDialog("list.php?dummy="+dummy+"&colm="+data+"&id="+obj+"&dairID="+objD+"","newwindow","dialogWidth:700px;dialogHeight:750px;dialogTop:"+event.screenY+"px;dialogLeft:"+event.screenX+"px;status:no; help:no;resizable:yes;scroll:yes;");
	
	if((typeof(rtn) == 'undefined')||(rtn == '')){
	}else{
		rdata = rtn.split(",");
		fm = document.chkform[obj2];
		fm2 = document.chkform[obj3];
		fm.value = rdata[0];
		if(fm2){	fm2.value = rdata[1];}
	}
}



function listselectD(data,obj)
{
	var rtn;
	var fm;
	var fm2;
	var obj2 = data+"_subID";
	var objB = "dair_subID";
	var obj3 = data+"_subname";
	var dummy = new Date().getTime();

	obj = document.chkform[obj2].value;
	if(data=="bsyn")
	{
		objD = document.chkform[objB].value;
	}else{
		objD="";
	}
	//window.open("cal.php","","width=180,height=610,left=1050,top=150");
	rtn=showModalDialog("list.php?dummy="+dummy+"&colm="+data+"&id="+obj+"&dairID="+objD+"","newwindow","dialogWidth:700px;dialogHeight:750px;dialogTop:"+event.screenY+"px;dialogLeft:"+event.screenX+"px;status:no; help:no;resizable:yes;scroll:yes;");

	if((typeof(rtn) == 'undefined')||(rtn == '')){
	}else{
		rdata = rtn.split(",");
		fm = document.chkform[obj2];
		fm2 = document.chkform[obj3];
		fm.value = rdata[0];
		if(fm2){	fm2.value = rdata[1];}
	}
}


function ryousyuu(obj,obj2,obj3)
{
	var rtn;
	var dt = document.chkform.fuka_syoriDate.value;
	//window.open("cal.php","","width=180,height=610,left=1050,top=150");
	rtn=showModalDialog("r_hakkou.php?id="+obj+"&tskn_syuunouDate="+dt+"&tskn_money="+obj3+"","newwindow","dialogWidth:200px;dialogHeight:350px;dialogTop:"+event.screenY+"px;dialogLeft:"+event.screenX+"px;status:no; help:no;resizable:yes;scroll:yes;");
	
	if((typeof(rtn) == 'undefined')||(rtn == '')){
		document.chkform.fuka_ryousyuuNo.value = "";
	}else{
		document.chkform.fuka_ryousyuuNo.value = rtn;
	}
}

function sashikae(obj,obj2,obj3)
{
	var rtn;
	//var dt = document.chkform.tskn_syuunouDate.value;
	
	//window.open("cal.php","","width=180,height=610,left=1050,top=150");
	rtn=showModalDialog("r_hakkou.php?id="+obj+"&tskn_syuunouDate="+obj2+"&tskn_money="+obj3+"","newwindow","dialogWidth:200px;dialogHeight:350px;dialogTop:"+event.screenY+"px;dialogLeft:"+event.screenX+"px;status:no; help:no");
	
	if((typeof(rtn) == 'undefined')||(rtn == '')){
		document.chkform.tskn_sashikaeNo.value = "";
	}else{
		document.chkform.tskn_sashikaeNo.value = rtn;
	}
}

function listbankad(bfuri,sfuri)
{
	var rtn;
	var bfuri;
	var sfuri;
	//window.open("cal.php","","width=180,height=610,left=1050,top=150");
	rtn=showModalDialog("liststenad.php?bfuri="+bfuri+"&sfuri="+sfuri+"&ad=1","newwindow","dialogWidth:700px;dialogHeight:700px;dialogTop:"+event.screenY+"px;dialogLeft:"+event.screenX+"px;status:no; help:no;resizable:yes;scroll:yes;");
	

}

function linkbankad()
{
	var rtn;
	var bfuri;
	var sfuri;
	//window.open("cal.php","","width=180,height=610,left=1050,top=150");
	rtn=showModalDialog("listbankad.php","newwindow","dialogWidth:700px;dialogHeight:700px;dialogTop:"+event.screenY+"px;dialogLeft:"+event.screenX+"px;status:no; help:no;resizable:yes;scroll:yes;");
	

}


function listbank(data,obj1,obj2)
{

	var k;var d;
	fm2 = document.chkform[obj1];
	fm1 = document.chkform[obj2];
	if(fm1.value!=""){
		k="bankID";
	}else{
		k="";
	}
	if(fm1.value!=""){
		d=fm1.value;
	}else{
		d="";
	}
	var rtn;
	var rdata;
	var fm1;
	var fm2;
	//window.open("cal.php","","width=180,height=610,left=1050,top=150");
	rtn=showModalDialog("listbank.php?colm="+data+"&kensaku_word="+k+"&bank_code="+d+"","newwindow","dialogWidth:850px;dialogHeight:700px;dialogTop:"+event.screenY+"px;dialogLeft:"+event.screenX+"px;status:no; help:no;resizable:yes;scroll:yes;");
	
	if((typeof(rtn) == 'undefined')||(rtn == '')){
	}else{
	
	rdata = rtn.split(",");
	
	fm2 = document.chkform[obj1];
	fm1 = document.chkform[obj2];
	
	fm1.value = rdata[0];
	fm2.value = rdata[1];

	}
}


function liststen(data,obj1,obj2)
{
	var rtn;
	var rdata;
	var fm1;
	var fm2;
	var bcode;
	var k;var d;
	fm2 = document.chkform[obj1];
	fm1 = document.chkform[obj2];

	if(fm1.value!=""){
		k="stenID";
	}else{
		k="";
	}
	if(fm1.value!=""){
		d=fm1.value;
	}else{
		d="";
	}
	bcode = document.chkform[data].value;
	if(bcode==""){alert("金融機関コードが入力されていません");
	//document.form1.naiyou1.focus(); 
	return false;	
	}else{
	
		//window.open("cal.php","","width=180,height=610,left=1050,top=150");
		rtn=showModalDialog("liststen.php?bcode="+bcode+"&kensaku_word="+k+"&sten_code="+d+"","newwindow","dialogWidth:850px;dialogHeight:700px;dialogTop:"+event.screenY+"px;dialogLeft:"+event.screenX+"px;status:no; help:no;resizable:yes;scroll:yes;");
		
		if((typeof(rtn) == 'undefined')||(rtn == '')){
		}else{
		
		rdata = rtn.split(",");
		

		
		fm1.value = rdata[0];
		fm2.value = rdata[1];
	
		}
	}
}

function yuucyo(data, obj1, obj2, obj3) {
	var rtn;
	var rdata;
	var fm1;
	var fm2;
	var fm3,fm4,fm5,fm6;
	;
	var bcode=9900;
	var obj4=data+"_bankcode";
	var obj5=data+"_bank";
	var obj6=data+"_ac_syubetsu";


	//$row['stenID'] . "," . $row['sten_name']
	//window.open("cal.php","","width=180,height=610,left=1050,top=150");
	rtn = showModalDialog("yuucyo.php?colm="+data, "newwindow", "dialogWidth:550px;dialogHeight:300px;dialogTop:" + event.screenY + "px;dialogLeft:" + event.screenX + "px;status:no; help:no;resizable:yes;scroll:yes;");

	if ((typeof (rtn) == 'undefined') || (rtn == '')) {
	} else {

		rdata = rtn.split(",");

		fm1 = document.chkform[obj1];
		fm2 = document.chkform[obj2];
		fm3 = document.chkform[obj3];
		fm4 = document.chkform[obj4];
		fm5 = document.chkform[obj5];
		fm6 = document.chkform[obj6];

		fm1.value = rdata[0];
		fm2.value = rdata[0];
		fm3.value = rdata[1];
		fm4.value = bcode;
		fm5.value = "ゆうちょ銀行";
		fm6.value = "1";

	}
}


function changepass(bcode)
{
	var rtn;
	var rdata;
	var fm1;
	var fm2;
	var bcode;
		//window.open("cal.php","","width=180,height=610,left=1050,top=150");
		rtn=showModalDialog("change_pass.php?bcode="+bcode+"","newwindow","dialogWidth:700px;dialogHeight:400px;dialogTop:"+event.screenY+"px;dialogLeft:"+event.screenX+"px;status:no; help:no");
		
	
}

function inputimage(obj)
{
	var rtn;
	var fm;
	var iD
	
	iD = document.chkform.keiyID.value;
	if(iD == ""){
	alert("契約者IDを入力してください。");
	document.chkform.keiyID.focus();
	return false;
	}else{
		//window.open("cal.php","","width=180,height=610,left=1050,top=150");
		rtn=showModalDialog("inputimage.php?iD="+iD+"","newwindow","dialogWidth:700px;dialogHeight:250px;dialogTop:"+event.screenY+"px;dialogLeft:"+event.screenX+"px;status:no; help:no");
		
		if((typeof(rtn) == 'undefined')||(rtn == '')){
		}else{
		fm = document.chkform[obj];
		fm.value = rtn;
		}
	}	
}

function URLencode(str){
 // Unicode to URL encoded UTF-8
 var i, encoded_str, char_code, padded_str;
         encoded_str = "";
         for (i = 0; i < str.length; i++){
             char_code = str.charCodeAt(i);
             if (char_code == 0x20){
                // space -> "+"
                encoded_str += "+";}
             else { // else 1
                  if (((0x30 <= char_code) && (char_code <= 0x39)) || ((0x41 <= char_code) && (char_code <= 0x5a)) || ((0x61 <= char_code) && (char_code <= 0x7a))){
		     // [0-9a-z-A-Z]
                     // no escape
                     encoded_str += str.charAt(i);
                  }
		  else if ((char_code == 0x2a) || (char_code == 0x2e) || (char_code == 0x2d) || (char_code == 0x5f)) {
		     // [.-_]
                     // no escape
                     encoded_str += str.charAt(i);
		  }
                  else { // else 2
                       // for internal unicode to UTF-8
		       // Ref. http://homepage3.nifty.com/aokura/jscript/utf8.html
		       // Ref. http://homepage1.nifty.com/nomenclator/unicode/ucs_utf.htm
                       if ( char_code > 0xffff ) {
                          encoded_str += "%" + ((char_code >> 18) | 0xf0).toString(16).toUpperCase();
                          encoded_str += "%" + (((char_code >> 12) & 0x3f) | 0x80).toString(16).toUpperCase();
			  encoded_str += "%" + (((char_code >> 6) & 0x3f) | 0x80).toString(16).toUpperCase();
			  encoded_str += "%" + ((char_code & 0x3f) | 0x80).toString(16).toUpperCase();
		       }
                       else if ( char_code > 0x7ff ) {
                          encoded_str += "%" + ((char_code >> 12) | 0xe0).toString(16).toUpperCase();
			  encoded_str += "%" + (((char_code >> 6) & 0x3f) | 0x80).toString(16).toUpperCase();
			  encoded_str += "%" + ((char_code & 0x3f) | 0x80).toString(16).toUpperCase();
                       }
                       else if ( char_code > 0x7f ) {
		          encoded_str += "%" + (((char_code >> 6) & 0x1f) | 0xc0).toString(16).toUpperCase();
			  encoded_str += "%" + ((char_code & 0x3f) | 0x80).toString(16).toUpperCase();
                       }
                       else {
                          // for ascii
                          padded_str = "0" + char_code.toString(16).toUpperCase();
                          encoded_str += "%" + padded_str.substr(padded_str.length - 2, 2);
                       }
                    } // else 2
                } // else 1
        } // for
        return encoded_str;
}

SubmitCheck=false; 
function Submit(){ 
    if(!SubmitCheck){ 
        SubmitCheck=true; 
        document.Entry.submit(); 
    }else{ bottonAlert(); } 
}
 
function bottonAlert() { 
    Check = navigator.userAgent.indexOf(";"); 
    if(Check != -1 && navigator.userAgent.substring(Check+2,Check+10)=="MSIE 3.0"){ 
        alert("ボタンが２度押されましたので、再度実行してください。"); 
    }else{ alert("処理中ですのでお待ちください。"); } 
} 

function kdown(e) 
{
	var msg =""; var flg = 1;
	switch(window.event.srcElement.tagName)
	{
		case "INPUT" :if(event.srcElement.type != "text" && event.srcElement.type != "password" 
		&& event.keyCode!=9 && event.keyCode!=16 && event.keyCode!=32){return false;}else{flg=0;}break;
		case "TEXTAREA" :flg = 0;break;
		case "SELECT" :flg = 0;break;
		case "A" :flg = 2;break;
	}
	switch(event.keyCode)
	{
		case 8 :msg = "BS";break;
		//case 13 :msg = "Enter";break;
		//case 1 :if(event.shiftKey){msg = "Shift+lclick";}break;
		case 27 :msg = "Esc";break;
		case 78 :if(event.ctrlKey){msg = "Ctrl+N";}break;
		case 82 :if(event.ctrlKey){msg = "Ctrl+R";}break;										
		case 116 :msg = "F5";break;
		case 122 :msg = "F11";break;
	}
	if(event.altKey){msg = "Alt";}
	if (flg == 0 )
	{
		switch(event.keyCode)
		{
			case 8 :msg = "";break;
			//case 13 :msg = "";break;
		}
	//}else if (flg == 2 && event.keyCode==13){
		//msg = "";
	}				
    //if (window.event.srcElement.tagName == "A" && window.event.shiftKey) {
    //msg = "Shift+lclick";
	//return false;
    //}
		
	if(msg != "")
	{
		event.keyCode = 0;
		return false;
	}else{
		return true;
	}
}


document.onkeydown = kdown;


function SelecT(afile,doc,fm){
	var index = doc.selectedIndex;
	var str = doc.options[index].value;
	
	//document.form2.sid2.value = str;
	//document.form2.afile.value = afile;
	fm.target = "_self";
	fm.method = "post";
	fm.action = ""+afile+"";
	fm.submit();
}


function checkboxChecked(check,doc,fm){
var count;
nodes = document.getElementsByName(""+doc+"");
for(count = 0; count < nodes.length; count++){
nodes[count].checked = check;
}
   
}



function selectGroup(doc,prefix) {
    var regexp = new RegExp("^" + prefix + "_");
    var inputs = document.getElementsByTagName("input");

nodes = document.getElementsByName(""+doc+"");
for(count = 0; count < nodes.length; count++){
nodes[count].checked = false;
}

    for (var i = 0, l = inputs.length; i < l; i++) {
        var input = inputs[i];

        if (input.type == "checkbox" && input.id.match(regexp))
            input.checked = "checked";
    }
}


function put_date(obj)
{
	var cobj = obj.name+"Date";
	var tantou = obj.name+"name";
	
	myD       = new Date();
	
	myYear    = myD.getYear();
	myYear4   = (myYear < 2000) ? myYear+1900 : myYear;
	myMonth   = myD.getMonth() + 1;
	myDate    = myD.getDate();
	
	myMess1   = myYear4 + "/" + myMonth + "/" + myDate;
	tvalue = document.chkform.tantou.value;
	
	if(obj.checked==true)
	{
		document.chkform[cobj].value=myMess1;
		document.chkform[tantou].value=tvalue;
		if(document.chkform.knsy_fubi.checked == true){
			document.chkform.knsy_fubi.checked=false;
			document.chkform.knsy_fubiendDate.value=myMess1;
		}
		
	
	}else{
		document.chkform[cobj].value="";
		document.chkform[tantou].value="";
	}


}

function put_enddate(obj)
{
	
	var fubi = document.chkform.knsy_fubiDate;	
	var fubi2 = document.chkform.knsy_fubi;	

	var myD       = new Date();
	
	var myYear    = myD.getYear();
	var myYear4   = (myYear < 2000) ? myYear+1900 : myYear;
	var myMonth   = myD.getMonth() + 1;
	var myDate    = myD.getDate();
	var myMess1   = myYear4 + "/" + myMonth + "/" + myDate;

	var i=30 //何日後を指定
	var date=new Date();
	date.setTime(date.getTime()+(i*24*3600*1000));
	
	var y=date.getYear();
	var m=date.getMonth()+1;
	var d=date.getDate();if(y<2000){y+=1900;}

	myMess2   = y + "/" + m + "/" + d;
	
	if(obj.checked==true)
	{
			document.chkform.knsy_fubiDate.value = myMess1;
			//alert("chekc");
			//document.chkform.knsy_fubiendDate.value="";	
			//document.chkform.knsy_fubitsuuchiDate.value = myMess1;
			//document.chkform.knsy_fubitsuuchiDate.value = myMess1;
			//document.chkform.knsy_kigenDate.value = myMess1;
			//document.chkform.knsy_satei.disabled=true;
			//document.chkform.knsy_syounin.disabled=true;
			//document.chkform.knsy_kettei.disabled=true;
	
	}else{
		document.chkform.knsy_fubiendDate.value=myMess1;
			//document.chkform.knsy_fubiendDate.value=myMess1;	
			//document.chkform.knsy_fubitsuuchiDate.value = myMess1;
			//document.chkform.knsy_fubitsuuchiDate.value = myMess1;
			//document.chkform.knsy_kigenDate.value = myMess2;
			//alert("decy");
		//document.chkform.knsy_fubiendDate.value=myMess1;
	}


}


//ｸﾗｽ名で取得する関数
function getElementsByClassName(className) {
 var i, j, eltClass;
 var objAll = document.getElementsByTagName ? document.getElementsByTagName("*") : document.all;
 var objCN = new Array();
 for (i = 0; i < objAll.length; i++) {
 eltClass = objAll[i].className.split(/\s+/);
 for (j = 0; j < eltClass.length; j++) {
 if (eltClass[j] == className) {
 objCN.push(objAll[i]);
 break;
 }
 }
 }
 return objCN;
}
//ｸﾗｽ名でON/OFFを変更させる
function groupCheck(className, flg){

checkboxChecked(false,'knsy_syoukenNo[]','chkform')
 var objects = getElementsByClassName(className);
 for(var i = 0;i < objects.length;i++){
 if(objects[i].type == "checkbox"){
 objects[i].checked = flg ? "checked" : "";
 }
 }
 
 var ddt = "syhn_6";

 var objects = getElementsByClassName(ddt);
 for(var i = 0;i < objects.length;i++){
 if(objects[i].type == "checkbox"){
 objects[i].checked = flg ? "checked" : "";
 }
 }
 
}

function parentReload(){
  //window.opener.location.href = window.opener.location.href;
  window.close();
}


       

function sendprint(){
  var frm=document.chkform;
  /* テキストボックスが空でないならTRUEを返してフォーム送信 */
  if(frm.send.value =="test"){
    frm.action="test_label.php";
    frm.method="post";
    frm.encoding="application/x-www-form-urlencoded";
	frm.target = "_blank";
  }else{
    frm.action="main_std.php";
    frm.method="post";
    frm.encoding="application/x-www-form-urlencoded";
	frm.target = "_self";
  }

}



function processSubmit(){
	var wait = document.createElement("div");
	
	with(wait.style){
		textAlign = "center";
		backgroundColor = "#fff";
		filter = "alpha(opacity=80)";
		position = "absolute";
		left = "0px";
		top = "50px";
		cursor = "wait";
		width = "100%";
		zIndex = 1000;
		backgroundImage = "url(common/img/indicator.gif)";
		backgroundRepeat= "no-repeat";
		backgroundPosition = "top";
		height = Math.max(document.body.clientHeight,
			document.documentElement.clientHeight) + "px";
	}
				
	wait.innerHTML = [
		"<br/>",
		"<br/>",
		"<br/>",
		"<p>",
		"処理実行中...",
		"</p>",
	].join("");

	document.body.appendChild(wait);
}




function ageCheck(form,birth,koyomi,nen,tuki,niti,age){ //	var seireki = parseFloat(form[nen].value);
	var seireki = 0;
	var seirekiB= parseInt(form[nen].value);
	var tukiB    = parseInt(form[tuki].value);
	var nitiB    = parseInt(form[niti].value);

	var today   = new Date();
	var kotosi  = today.getFullYear();
	var kongetu = today.getMonth() + 1;
	var kyo     = today.getDate();
	var raigetsu =  new Date(kotosi,kongetu,kyo);
	var kotosiB  = raigetsu.getFullYear();
	var kongetuB = raigetsu.getMonth()+1;
	var kyoB     = raigetsu.getDate();
	//if(form[koyomi].options[1].selected){// 平成の時
	//	if(form[nen].value == "元") seireki = 1989;
	//	else seireki = seirekiB + 1988;
	//}else if(form[koyomi].options[2].selected){// 昭和のとき
	//	if(form[nen].value == "元") seireki = 1926;
	//	else seireki = seirekiB + 1925;
	//}
	if(isNaN(seirekiB) ==false && isNaN(tukiB) ==false && isNaN(nitiB) ==false)
	{
		
		if(tukiB>12){alert("月は１～１２の間で入れて下さい。");form[tuki].value="";form[tuki].focus();}
		if(nitiB>31){alert("日は１～３１の間で入れて下さい。");form[niti].value="";form[niti].focus();}
		
		if(form.elements[koyomi].type =="hidden"){
			if (form[koyomi].value=="令和"){ seireki = seirekiB + 2018 ; }
			if (form[koyomi].value=="平成"){ seireki = seirekiB + 1988 ; }
			if (form[koyomi].value=="昭和"){ seireki = seirekiB + 1925 ; }
			if (form[koyomi].value=="西暦"){ seireki = seirekiB; }
		}else{
			if(form[koyomi].options[1].selected){// 平成の時
				if(form[nen].value == "元"){ seireki = 2019; }
				else{ seireki = seirekiB + 2018; }
			}else if(form[koyomi].options[2].selected){// 平成の時
				if(form[nen].value == "元"){ seireki = 1989; }
				else{ seireki = seirekiB + 1988; }
			}else if(form[koyomi].options[3].selected){// 昭和のとき
				if(form[nen].value == "元"){ seireki = 1926; }
				else{ seireki = seirekiB + 1925; }
			}else if(form[koyomi].options[4].selected){// 昭和のとき
				seireki = seirekiB; 
			}
		}	
			
		form[birth].value= seireki + "-" + tukiB + "-" + nitiB;
		
		var di = new Date(seireki,tukiB-1,nitiB);
		if(di.getDate() != nitiB){
				alert("日が正しくありません。");
				form[niti].value="";
				form[niti].focus();
		}
		
		var man     = kotosi-seireki;
		var manB     = kotosiB-seireki;
		var fm      = form[age];
	
		if((kongetuB == tukiB) && (kyoB < nitiB))  manB= manB - 1;
		if(kongetuB < tukiB) 						manB= manB - 1;
		
		if(kongetu > tukiB) 						fm.value = man;
		if((kongetu == tukiB) && (kyo >= nitiB)) fm.value = man;
		if((kongetu == tukiB) && (kyo < nitiB))  fm.value = man - 1;
		if(kongetu < tukiB) 						fm.value = man - 1;
		
//var hhkndouitsu =  $("input[id='hhkn_douitsu']").prop('checked');
//var keiy_m_kubun = $("input[name='keiy_m_kubun']:checked").val();
//
//var keiy_miseinen =  $("input[id='keiy_miseinen']").prop('checked');

//		if((age=="keiy_age" || keiy_m_kubun==1) && manB<20 && keiy_miseinen==false)
//		{
//			alert("未成年は契約できません。");
//		}else if(manB>100){
//			alert("年齢が100歳を超えています。");
//		}
	
	}else{
		
		form[birth].value="";
		var fm      = form[age];
		fm.value = "";
	}

}

function AutoCheck(checkname) {
  document.getElementById(checkname).checked = true;
}


function Show(targetTextBox)
{
	//一部のブラウザでは見れない場合があります。必要に応じてここにブラウザ判定を入れてください。
	//form[targetTextBox].style.visibility="visible";
                //ブログで公開しているのはこちら↓
              document.getElementById(targetTextBox).style.visibility="visible";
}
function Hide(targetTextBox)
{
	//一部のブラウザでは見れない場合があります。必要に応じてここにブラウザ判定を入れてください。
	//form[targetTextBox].style.visibility="hidden";
                //ブログで公開しているのはこちら↓
              document.getElementById('targetTextBox').style.visibility="hidden";
}

function PrintPreview()
{
	if((window.ActiveXObject == null) || (document.body.insertAdjacentHTML == null)){return false;}
	var sWebBrowserCode = '<object width="0" height="0" classid="CLSID:8856F961-340A-11D0-A96B-00C04FD705A2"></object>'; 
	document.body.insertAdjacentHTML('beforeEnd', sWebBrowserCode);
	var objWebBrowser = document.body.lastChild;
	if(objWebBrowser == null){return false;}
	objWebBrowser.ExecWB(7, 1);
	document.body.removeChild(objWebBrowser);
    
    return true;
}
function opentext(settxt){
	var divid="tiptext";
	settxt = settxt.replace(/^\s+|\s+$/g, "");

if(document.all){
     d_div=document.all(divid);
     rx = event.clientX + document.body.scrollLeft +set_x;
     ry = event.clientY + document.body.scrollTop +set_y;
}else{
     d_div=document.getElementById(divid);
     rx = NNX  + set_x;
     ry = NNY + set_y;
}
if(settxt){
     d_div.style.display="block";
     d_div.style.left = rx +"px";
     d_div.style.top = ry +"px";
     d_div.innerHTML = settxt; 
}else{
     d_div.style.display="none"; 
     d_div.innerHTML = ""; 
}
}

function bc_set(obj0) {
  obj0.style.backgroundColor = "orange";
}
function bc_clr(obj0) {
  obj0.style.backgroundColor = '';
}
function bc_clrAll(obj0) {
 // obj0.style.backgroundColor = '';
 //alert();
 $("body").append("<input type='hidden' id='bc_clr'>");
var bcval = $("#bc_clr").val();

 for (i = 0; i < document.all.tags("tr").length; i++) {
   elm = document.all.tags("tr")(i);
   
if(bcval==1){elm.style.backgroundColor = "";}else{elm.style.backgroundColor = "orange";}

}
if(bcval==1){$("#bc_clr").val(0);}else{$("#bc_clr").val(1);}

}


function zipsearch()
{
  var zipcode = document.getElementById( 'zipcode' ).value;
  window.open( 'testzipcode.php?zipcode='+encodeURIComponent( zipcode ) , 'address_search', "width=800,height=500,location=no,menubar=no,toolbar=no,resizable=yes,scrollbars=yes" );
}

function set_address( obj )
{
  var target1 = document.getElementById( 'pref' );
  var target2 = document.getElementById( 'addr' );
  
  if( obj.zipcode.match( /[0-9]{5}00$/ ) )
  {
    target1.value = obj.prefecture;
    target2.value = obj.city + obj.town;
  }
  else
  {
    target1.value = obj.prefecture;
    target2.value = obj.city + obj.town;
    if( obj.street ) target2.value += obj.street ;
  }

  document.getElementById( 'zipcode' ).value = obj.zipcode;
}



 function zipsearch2()
{
  var pref = document.getElementById( 'pref' ).value;	
  var addr = document.getElementById( 'addr' ).value;
  window.open( 'testzipcode.php?word='+pref+addr , 'address_search', "width=800,height=500,location=no,menubar=no,toolbar=no,resizable=yes,scrollbars=yes" );
}

function set_address2( obj )
{

  var target1 = document.getElementById( 'pref' );
  var target2 = document.getElementById( 'addr' );
  
  if( obj.zipcode.match( /[0-9]{5}00$/ ) )
  {
    target.value = obj.prefecture + obj.city;
  }
  else
  {
    target1.value = obj.prefecture;
    target2.value = obj.city + obj.town;
    if( obj.street ) target2.value += obj.street ;
  }

  document.getElementById( 'zipcode' ).value = obj.zipcode;
}


function cellnull(obj){

if(obj.value == 0){obj.value = "";}
}
function cellzero(obj){
if(obj.value == ""){obj.value = 0;}
}

function calc_hoken(obj,val){

var money = 0;
var hokenkin = 0;
var cyouseikin = 0;
var mihokenmoney1 = 0;
var henkin = 0;
var jiko_chien_money = 0;
var sonotakin = 0;


//if(obj.jiko_hokenkin.value == "")hokenkin = 0;
//if(obj.jiko_cyouseikin.value == "")cyouseikin = 0;
//if(obj.jiko_mihokenmoney1.value == "")mihokenmoney1 = 0;
//if(obj.jiko_henkin.value == "")henkin = 0;
//if(obj.jiko_mihokenmoney2.value == "")mihokenmoney2 = 0;
//if(obj.jiko.sonotakin.value == "")sonotakin = 0;

if(!isNaN(parseInt(obj.jiko_hokenkin.value))){hokenkin = eval(obj.jiko_hokenkin.value);}
//if(!isNaN(parseInt(obj.jiko_cyouseikin.value))){cyouseikin = eval(obj.jiko_cyouseikin.value);}
if(!isNaN(parseInt(obj.jiko_mihokenmoney1.value))){mihokenmoney1 = eval(obj.jiko_mihokenmoney1.value);}
if(!isNaN(parseInt(obj.jiko_henkin.value))){henkin = eval(obj.jiko_henkin.value);}
if(!isNaN(parseInt(obj.jiko_chien_money.value))){jiko_chien_money = eval(obj.jiko_chien_money.value);}
//if(!isNaN(parseInt(obj.jiko_sonotakin.value))){sonotakin = eval(obj.jiko_sonotakin.value);}
	
//var shiharaikin = obj.jiko_shiharaikin.value

//if(hokenkin == "")hokenkin = 0;
//if(cyouseikin == "")cyouseikin = 0;
//if(mihokenmoney1 == "")mihokenmoney1 = 0;
//if(henkin == "")henkin = 0;
//if(mihokenmoney2 == "")mihokenmoney2 = 0;
//if(sonotakin == "")sonotakin = 0;
//if(shiharaikin == "")shiharaikin = 0;

	money = hokenkin+cyouseikin-mihokenmoney1+jiko_chien_money+sonotakin+henkin;
	
	obj.jiko_shiharaikin.value = money;
	if(val.value == ""){val.value = 0;}
	//alert(money);
}

function knsy_change(obj)
{

var al = new Array();

a = obj.split(",");

document.chkform.syhnID.value= a[0];
document.chkform.knsy_hokenryou.value= a[1];
document.chkform.syhn_name.value= a[2];
document.chkform.syhn_header.value= a[3];
document.chkform.syhn_age_e.value= a[4];
}

function inputName(data,a1,a2)
{
var n1 = document.chkform.keiy_furi.value;
var n2 = document.chkform.keiy_name.value;
document.chkform.knsy_ac_name.value= n2;
document.chkform.knsy_ac_furi.value= n1;
}
function inputNameH(data,a1,a2)
{
var n1 = document.chkform.hhkn_furi.value;
var n2 = document.chkform.hhkn_name.value;
document.chkform.knsy_ac_name.value= n2;
document.chkform.knsy_ac_furi.value= n1;
}

function inputCompany(data,a1)
{
var n1 = document.chkform.keiy_company.value;
document.chkform.kkut_company.value= n1;
}


function syoukenNo_change(data)
{
var n1 = document.chkform.syhn_header.value;
var ct = data.value;
var lng = ct.length;
var lng_zer,zer;
	zer = "";
	lng_zer = 13-lng;
	for(var i=0; i<lng_zer; i++){ zer +="0";};
	
	if(isNaN(ct.charAt(0))==false){
	
		data.value = n1+zer+ct;
	}
}

function toriID_change(data)
{
var n1 = "a";
var ct = data.value;
var lng = ct.length;
var lng_zer,zer;
	zer = "";
	lng_zer = 13-lng;
	for(var i=0; i<lng_zer; i++){ zer +="0";}; 
	
	if(isNaN(ct.charAt(0))==false){
	
		data.value = n1+zer+ct;
	}
}

function dairID_change(data)
{
var n1 = "b";
var ct = data.value;
var lng = ct.length;
var lng_zer,zer;
	zer = "";
	lng_zer = 13-lng;
	for(var i=0; i<lng_zer; i++){ zer +="0";}; 
	
	if(isNaN(ct.charAt(0))==false){
	
		data.value = n1+zer+ct;
	}
}

function ChangeUketori(obj,obj2)
{

document.chkform.jiko_jikoname.value=obj;
document.chkform.jiko_jikofuri.value=obj2;
}

function change_relateDate2(obj){
	var moushi = obj.knsy_moushikomiDate.value;

	if((moushi =="") || (moushi=='undefined')){
		alert("申込日が入力されていません");
		return false;
	}else{
		var birth         = document.chkform.hhkn_birthDate.value;
		var dt_birth      = birth.split("/");
		var	my_birth      = new Date(dt_birth[0],dt_birth[1]-1,dt_birth[2]); //var kaishi; //var dt_birth = birth.split("/");   // birth[0]: year, birth[1]: month, birth[2]: day
		var dt_moushikomi = moushi.split("/");
		var	my_moushikomi = new Date(dt_moushikomi[0],dt_moushikomi[1]-1,dt_moushikomi[2]);
		var my_fusei      = new Date(dt_moushikomi[0],dt_moushikomi[1]-1,dt_moushikomi[2]);
		
		my_fusei.setTime(my_fusei.getTime()+(120*24*60*60*1000));
		
		var y = String(my_fusei.getYear());
		var m = String(my_fusei.getMonth()+1);
		var d = String(my_fusei.getDate());
		
		if(y<2000){y+=1900;}
		if(m.length < 2){ m = "0" + m; }
		if(d.length < 2){ d = "0" + d; }
					
		var dt_fusei =y + "/" + m + "/" + d;
		
		obj.knsy_fuseiritsuDate.value = dt_fusei;
		if( my_moushikomi >= my_birth && my_birth <= my_fusei ){
			if(obj.syhn_add_okss){
				itemStrA = obj.syhn_add0.value;
				itemStrA2 = obj.syhn_name0.value;
				len = obj.syhn_select.options.length;
				obj.syhn_select.options[len] = new Option(itemStrA2,itemStrA);

				itemStrB = obj.syhn_add1.value;
				itemStrB2 = obj.syhn_name1.value;
				len1 = obj.syhn_select.options.length;
				obj.syhn_select.options[len1] = new Option(itemStrB2,itemStrB);
				
				itemStrC = obj.syhn_add2.value;
				itemStrC2 = obj.syhn_name2.value;
				len2 = obj.syhn_select.options.length;
				obj.syhn_select.options[len2] = new Option(itemStrC2,itemStrC);
			}
		}
	}
}


function change_kigenDate(obj){
	var moushi = obj.jiko_kanbiDate.value;

	if((moushi =="") || (moushi=='undefined')){
		return false;
	}else{
		var kanbi         = document.chkform.jiko_kanbiDate.value;
		var dt_kanbi      = kanbi.split("/");
		var	my_kanbi      = new Date(dt_kanbi[0],dt_kanbi[1]-1,dt_kanbi[2]); //var kaishi; //var dt_birth = birth.split("/");   // birth[0]: year, birth[1]: month, birth[2]: day
		var my_kigen      = new Date(dt_kanbi[0],dt_kanbi[1]-1,dt_kanbi[2]);
		my_kigen.setTime(my_kigen.getTime()+(90*24*60*60*1000));
		
		var y = String(my_kigen.getYear());
		var m = String(my_kigen.getMonth()+1);
		var d = String(my_kigen.getDate());
		
		if(y<2000){y+=1900;}
		if(m.length < 2){ m = "0" + m; }
		if(d.length < 2){ d = "0" + d; }
					
		var dt_kigen =y + "/" + m + "/" + d;
		
		obj.jiko_kigenDate.value = dt_kigen;
	}
}


function change_nissuu(obj) {

	var furikomi = obj.jiko_furikomiDate.value;
	var kanbi = obj.jiko_kanbiDate.value;

	if((furikomi =="") || (furikomi=='undefined'))
	{
		return false;
	
	}else if((kanbi =="") || (kanbi=='undefined')){
		return false;
	}else{

	var dt_kanbi      = kanbi.split("/");
	var dt_furikomi      = furikomi.split("/");
	
	var	my_kanbi      = new Date(dt_kanbi[0],dt_kanbi[1]-1,dt_kanbi[2]);
	var	my_furikomi      = new Date(dt_furikomi[0],dt_furikomi[1]-1,dt_furikomi[2]);

	var diff = my_furikomi - my_kanbi;
    var diffDay = diff / 86400000;//1日は86400000ミリ秒

	obj.jiko_k_to_s_nissuu.value = diffDay;
	}
}


function affixZero(int)
{
	int = parseInt(int,10); // 基数変換

	// 一桁の数字を二桁の数字に変換
	if (int < 10) 
	{
		int = "0" + int;
	}
	
	return parseInt(int,10);
}


function same_d_as_k()
{

var keiy_name = document.form1.keiy_name.value;
var keiy_furi = document.form1.keiy_furi.value;
var keiy_birthdate0 = document.form1.keiy_birthdate0.value;
var keiy_birthdate1 = document.form1.keiy_birthdate1.value;
var keiy_birthdate2 = document.form1.keiy_birthdate2.value;
var keiy_birthdate3 = document.form1.keiy_birthdate3.value;

	if(keiy_name != "")
	{
		document.form1.hhkn_name.value = keiy_name;
	}
	
	if(keiy_furi != "")
	{
		document.form1.hhkn_furi.value = keiy_furi;
	}
	
	if(keiy_birthdate0 != "")
	{
		document.form1.hhkn_birthdate0.value = keiy_birthdate0;
	}
	
	if(keiy_birthdate1 != "")
	{
		document.form1.hhkn_birthdate1.value = keiy_birthdate1;
	}
	
	if(keiy_birthdate2 != "")
	{
		document.form1.hhkn_birthdate2.value = keiy_birthdate2;
	}
	
	if(keiy_birthdate3 != "")
	{
		document.form1.hhkn_birthdate3.value = keiy_birthdate3;
	}


}

function change_shibou_sontoa(obj)
{
var index = obj.selectedIndex;
var str = obj.options[index].value;

	if(str==5)
	{
		document.getElementById('shibousonota').style.visibility = "visible";
	}else{
		document.getElementById('shibousonota').style.visibility = "hidden";	
	}
}

function change_sontoa(obj)
{
var index = obj.selectedIndex;
var str = obj.options[index].value;

	if(str==5)
	{
		document.getElementById('sonota').style.visibility = "visible";
	}else{
		document.getElementById('sonota').style.visibility = "hidden";	
	}
}

function change_shitei_sontoa(obj)
{
var index = obj.selectedIndex;
var str = obj.options[index].value;
	if(str==5)
	{
		document.getElementById('shiteisonota').style.visibility = "visible";
	}else{
		document.getElementById('shiteisonota').style.visibility = "hidden";	
	}
}
function change_jikobank(obj)
{
switch(obj)
{
	case 1:
		if(document.chkform.jiko_bank)document.chkform.jiko_bank.value=document.chkform.jiko_bank_kako.value;
		if(document.chkform.jiko_bankcode)document.chkform.jiko_bankcode.value=document.chkform.jiko_bankcode_kako.value;
		if(document.chkform.jiko_branch)document.chkform.jiko_branch.value=document.chkform.jiko_branch_kako.value;
		if(document.chkform.jiko_branchcode)document.chkform.jiko_branchcode.value=document.chkform.jiko_branchcode_kako.value;
		if(document.chkform.jiko_ac_syubetsu)$("#jiko_ac_syubetsu").val(document.chkform.jiko_ac_syubetsu_kako.value);
		if(document.chkform.jiko_account)document.chkform.jiko_account.value=document.chkform.jiko_account_kako.value;
		if(document.chkform.jiko_ac_name)document.chkform.jiko_ac_name.value=document.chkform.jiko_ac_name_kako.value;
		if(document.chkform.jiko_ac_furi)document.chkform.jiko_ac_furi.value=document.chkform.jiko_ac_furi_kako.value;
	
	break;	
	case 2:
		if(document.chkform.jiko_bank)document.chkform.jiko_bank.value=document.chkform.knsy_bank.value;
		if(document.chkform.jiko_bankcode)document.chkform.jiko_bankcode.value=document.chkform.knsy_bankcode.value;
		if(document.chkform.jiko_branch)document.chkform.jiko_branch.value=document.chkform.knsy_branch.value;
		if(document.chkform.jiko_branchcode)document.chkform.jiko_branchcode.value=document.chkform.knsy_branchcode.value;
		if(document.chkform.jiko_ac_syubetsu)$("#jiko_ac_syubetsu").val(document.chkform.knsy_ac_syubetsu.value);
		if(document.chkform.jiko_account)document.chkform.jiko_account.value=document.chkform.knsy_account.value;
		if(document.chkform.jiko_ac_name)document.chkform.jiko_ac_name.value=document.chkform.knsy_ac_name.value;
		if(document.chkform.jiko_ac_furi)document.chkform.jiko_ac_furi.value=document.chkform.knsy_ac_furi.value;
	break;
	case 0:
		if(document.chkform.jiko_bank)document.chkform.jiko_bank.value="";
		if(document.chkform.jiko_bankcode)document.chkform.jiko_bankcode.value="";
		if(document.chkform.jiko_branch)document.chkform.jiko_branch.value="";
		if(document.chkform.jiko_branchcode)document.chkform.jiko_branchcode.value="";
		if(document.chkform.jiko_ac_syubetsu)$("#jiko_ac_syubetsu").val("");
		if(document.chkform.jiko_account)document.chkform.jiko_account.value="";
		if(document.chkform.jiko_ac_name)document.chkform.jiko_ac_name.value="";
		if(document.chkform.jiko_ac_furi)document.chkform.jiko_ac_furi.value="";
		break;
}
	
}

function change_houkoku(obj)
{
	
		// if(document.chkform.jiko_bank)document.chkform.jiko_bank.value=document.chkform.knsy_bank.value;
		// if(document.chkform.jiko_bankcode)document.chkform.jiko_bankcode.value=document.chkform.knsy_bankcode.value;
		// if(document.chkform.jiko_branch)document.chkform.jiko_branch.value=document.chkform.knsy_branch.value;
		// if(document.chkform.jiko_branchcode)document.chkform.jiko_branchcode.value=document.chkform.knsy_branchcode.value;
		// if(document.chkform.jiko_ac_name)document.chkform.jiko_ac_name.value=document.chkform.knsy_ac_name.value;
		// if(document.chkform.jiko_ac_furi)document.chkform.jiko_ac_furi.value=document.chkform.knsy_ac_furi.value;
		// if(document.chkform.jiko_account)document.chkform.jiko_account.value=document.chkform.knsy_account.value;
		// if(document.chkform.jiko_ac_syubetsu)document.chkform.jiko_ac_syubetsu.value=document.chkform.knsy_ac_syubetsu.value;

switch(obj)
{
	case "契約者":
		document.chkform.jiko_houkoku_furi.value=document.chkform.keiy_furi.value;
		document.chkform.jiko_houkoku_name.value=document.chkform.keiy_name.value;
		if(document.chkform.jiko_zipcode)document.chkform.jiko_zipcode.value=document.chkform.keiy_zipcode.value;
		if(document.chkform.jiko_pref)document.chkform.jiko_pref.value=document.chkform.keiy_pref.value;
		if(document.chkform.jiko_addr)document.chkform.jiko_addr.value=document.chkform.keiy_addr.value;
		if(document.chkform.jiko_build)document.chkform.jiko_build.value=document.chkform.keiy_build.value;
		if(document.chkform.jiko_phone)document.chkform.jiko_phone.value=document.chkform.keiy_phone.value;
	
	break;	
	case "被保険者":
		document.chkform.jiko_houkoku_furi.value=document.chkform.hhkn_furi.value;
		document.chkform.jiko_houkoku_name.value=document.chkform.hhkn_name.value;
		if(document.chkform.jiko_zipcode)document.chkform.jiko_zipcode.value=document.chkform.hhkn_zipcode.value;
		if(document.chkform.jiko_pref)document.chkform.jiko_pref.value=document.chkform.hhkn_pref.value;
		if(document.chkform.jiko_addr)document.chkform.jiko_addr.value=document.chkform.hhkn_addr.value;
		if(document.chkform.jiko_build)document.chkform.jiko_build.value=document.chkform.hhkn_build.value;
		if(document.chkform.jiko_phone)document.chkform.jiko_phone.value=document.chkform.hhkn_phone.value;
	
	break;	
	case "代理店":
		document.chkform.jiko_houkoku_furi.value=document.chkform.dair_furi.value;
		document.chkform.jiko_houkoku_name.value=document.chkform.dair_name.value;
		if(document.chkform.jiko_zipcode)document.chkform.jiko_zipcode.value=document.chkform.dair_zipcode.value;
		if(document.chkform.jiko_pref)document.chkform.jiko_pref.value=document.chkform.dair_pref.value;
		if(document.chkform.jiko_addr)document.chkform.jiko_addr.value=document.chkform.dair_addr.value;
		if(document.chkform.jiko_build)document.chkform.jiko_build.value=document.chkform.dair_build.value;
		if(document.chkform.jiko_phone)document.chkform.jiko_phone.value=document.chkform.dair_phone.value;
	
	break;	
	default:
		document.chkform.jiko_houkoku_furi.value="";
		document.chkform.jiko_houkoku_name.value="";
		if(document.chkform.jiko_pref)document.chkform.jiko_zipcode.value="";
		if(document.chkform.jiko_zipcode)document.chkform.jiko_pref.value="";
		if(document.chkform.jiko_addr)document.chkform.jiko_addr.value="";
		if(document.chkform.jiko_build)document.chkform.jiko_build.value="";
		if(document.chkform.jiko_phone)document.chkform.jiko_phone.value="";
	
	break;	
	
}
}

function change_phone(obj,colm,data)
{
	var keiynophone = document.chkform.keiy_nophone;

	if(obj.checked == true)
	{
//		if(colm=="keiy")
//		{
//			var objSelect = document.chkform.knsy_syousyo_hakkou;
//			var m = objSelect.length;
//			var i = 0;
//			for(i=0;i<m;i++){
//			if(objSelect.options[i].value == "いいえ"){objSelect.options[i].selected = true;}else{objSelect.options[i].disabled = true;}
//			}			
//		}
		document.chkform[data].value="なし";
		
	}else{
//		if(colm=="keiy")
//		{
//			var objSelect = document.chkform.knsy_syousyo_hakkou;
//			var m = objSelect.length;
//			var i = 0;
//			for(i=0;i<m;i++){
//			objSelect.options[i].disabled = false;	
//			if(objSelect.options[i].value == "はい"){objSelect.options[i].selected = true;}
//			}			
//			
//		}
		
		document.chkform[data].value="";
	}

}

function change_syhnID(obj)
{
var index = obj.selectedIndex;
var str = obj.options[index].value;


	rdata = str.split(",");
	
	
	document.chkform.syhn_group.value = rdata[0];
	document.chkform.syhn_name.value = rdata[1];


}


function put_date(obj)
{
	var cobj = obj.name+"Date";
	var tantou = obj.name+"tantou";
	
	myD       = new Date();
	
	myYear    = myD.getFullYear();
	myYear4   = (myYear < 2000) ? myYear+1900 : myYear;
	myMonth   = myD.getMonth() + 1;
	myDate    = myD.getDate();
	
	myMess1   = myYear4 + "/" + myMonth + "/" + myDate;
	tvalue = document.chkform.tantou.value;
	
	if(obj.checked==true)
	{
		document.chkform[cobj].value=myMess1;
		document.chkform[tantou].value=tvalue;

		
	
	}else{
		document.chkform[cobj].value="";
		document.chkform[tantou].value="";
	}


}

function put_enddate(obj)
{
	
	myD       = new Date();
	
	myYear    = myD.getFullYear();
	myYear4   = (myYear < 2000) ? myYear+1900 : myYear;
	myMonth   = myD.getMonth() + 1;
	myDate    = myD.getDate();
	
	myMess1   = myYear4 + "/" + myMonth + "/" + myDate;
	
	if(obj.checked==true)
	{
			document.chkform.knsy_fubiendDate.value="";	
			//document.chkform.knsy_satei.disabled=true;
			//document.chkform.knsy_syounin.disabled=true;
			//document.chkform.knsy_kettei.disabled=true;
	
	}else{
		document.chkform.knsy_fubiendDate.value=myMess1;
	}


}

function confirm_csv(obj)
{
	var mes = obj.csvtitle.value;
 	if(window.confirm(mes+'のCSVデータをアウトプットします。違う場合は更新ボタンを押してください。'))
	{
		return true;
	}else{
		return false;
	}

}
       
function stopchange(obj)
{
	   //選択された項目番号
        var index = obj.selectedIndex;
        //表示されているテキスト
		var rtn;
		var fm;
        var str = obj.options[index].value;
        //form.text1.value = str;
		if(str=="torikeshi")
		{
				rtn=showModalDialog("stopreason.php?id=torikeshi","newwindow","dialogWidth:180px;dialogHeight:150px;dialogTop:"+event.screenY+"px;dialogLeft:"+event.screenX+"px;status:no; help:no;resizable:yes;scroll:yes;");

			if((typeof(rtn) == 'undefined')||(rtn == '')){
			}else{
			fm = document.chkform.knsy_stop_reason;
			fm.value = rtn;
			}
		
		}else{
			fm = document.chkform.knsy_stop_reason;
			fm.value = "";
			
		}

}
//1　業務廃止（保険業法第280条第1項第2号）												空欄		
//2　死亡（保険業法第280条第1項第3号）												その相続人		
//3　破産（保険業法第280条第1項第4号）												その破産管財人		
//4　合併による消滅（保険業法第280条第1項第5号）												その法人を代表する役員であった者		
//5　解散（保険業法第280条第1項第6号）												その清算人		

function haishichange(obj)
{
	   //選択された項目番号
        var index = obj.selectedIndex;
        //表示されているテキスト
		var rtn;
		var fm;
        var str = obj.options[index].value;
        //form.text1.value = str;
		fm = document.chkform.dair_kankei;
        switch(str)
        {
        	case "業務廃止":
				fm.value = "";
        	break;
        	case "死亡":
				fm.value = "その相続人";
        	break;
        	case "破産":
				fm.value = "その破産管財人";
        	break;
        	case "合併による消滅":
				fm.value = "その法人の旧代表者";
        	break;
        	case "解散":
				fm.value = "その清算人";
        	break;
        
        }

}


function rchange(obj)
{
	
var count1;
var count2;
//var doc1 = "fuka_fukaDate[]";
var doc3 = "knsy_check";
var doc4 = "knsy_ryousyuuDate[]";

//nodes1 = document.getElementsByName(""+doc1+"");
//nodes2 = document.getElementsByName(""+doc2+"");
nodes3 = document.getElementsByName(""+doc3+"");
nodes4 = document.getElementsByName(""+doc4+"");
//nodes5 = document.getElementsByName(""+doc5+"");


for(count1 = 0; count1 < nodes3.length; count1++){
	
//if(obj.fuka_fukaDate2.value !="")nodes1[count1].value = obj.fuka_fukaDate2.value;
//if(obj.fuka_syoriyoteiDate2.value !="")nodes2[count1].value = obj.fuka_syoriyoteiDate2.value;
if(obj.knsy_kkakuDate.value !="")
{
		nodes9 = doc3+count1;

	if(obj[nodes9].checked==true)
	{
		nodes4[count1].value = obj.knsy_kkakuDate.value;
	}else{
		nodes4[count1].value = "";
	}
	
}

}
}


function fukachange(obj)
{
	
var count1;
var count2;
var count3;
var count4;
var count5;
var count6;
var count7;
var count8;
var count9;

var doc1 = "fuka_fukaDate[]";
var doc2 = "fuka_syoriyoteiDate[]";
var doc3 = "fuka_syuunouDate[]";
var doc4 = "fuka_syoriDate[]";
var doc5 = "fuka_syoriway[]";
var doc6 = "fuka_money[]";
var doc7 = "fuka_zanmoney[]";
var doc8 = "fuka_reason[]";
var doc9 = "fuka_check";
var doc10 = "fuka_hokenryou[]";

nodes1 = document.getElementsByName(""+doc1+"");
nodes2 = document.getElementsByName(""+doc2+"");
nodes3 = document.getElementsByName(""+doc3+"");
nodes4 = document.getElementsByName(""+doc4+"");
nodes5 = document.getElementsByName(""+doc5+"");
nodes6 = document.getElementsByName(""+doc6+"");
nodes7 = document.getElementsByName(""+doc7+"");
nodes8 = document.getElementsByName(""+doc8+"");
nodes9 = document.getElementsByName(""+doc9+"");
nodes10 = document.getElementsByName(""+doc10+"");



for(count1 = 0; count1 < nodes3.length; count1++){
	
if(obj.fuka_fukaDate2.value !="")nodes1[count1].value = obj.fuka_fukaDate2.value;
if(obj.fuka_syoriyoteiDate2.value !="")nodes2[count1].value = obj.fuka_syoriyoteiDate2.value;
if(obj.fuka_syuunouDate2.value !="")nodes3[count1].value = obj.fuka_syuunouDate2.value;
if(obj.fuka_syoriDate2.value !="")nodes4[count1].value = obj.fuka_syoriDate2.value;
if(obj.fuka_syoriway2.value !="")nodes5[count1].value = obj.fuka_syoriway2.value;
if(obj.fuka_reason2.value !="")nodes8[count1].value = obj.fuka_reason2.value;
}

/*
for(count2 = 0; count2 < nodes2.length; count2++){
nodes2[count2].value = obj.fuka_syoriyoteiDate2.value;
}

for(count3 = 0; count3 < nodes3.length; count3++){
nodes3[count3].value = obj.fuka_syuunouDate2.value;
}

for(count4 = 0; count4 < nodes4.length; count4++){
nodes4[count4].value = obj.fuka_syoriDate2.value;
}

for(count5 = 0; count5 < nodes5.length; count5++){
nodes5[count5].value = obj.fuka_syoriway2.value;
}
for(count8 = 0; count8 < nodes8.length; count8++){
nodes8[count8].value = obj.fuka_reason2.value;
}
*/

for(count6 = 0; count6 < nodes6.length; count6++)
{
	
	//tako = obj.fuka_check2.options[obj.fuka_check2.selectedIndex].value;
    //obj.text1.value = tako;
//if(obj.fuka_check2.options[1].selected)
//{
if(obj.fuka_checkdigit.value !="")
{
if(obj.fuka_checkdigit.value==1)
{
//if(obj.fuka_checkdigit.options[obj.fuka_checkdigit.selectedIndex].value==1)
//{
	nodes9 = doc9+count6;
	obj[nodes9].checked = true;
	nodes6[count6].value = nodes10[count6].value;
	nodes7[count6].value = 0;
}else{
	
	nodes9 = doc9+count6;
	obj[nodes9].checked = false;
	nodes6[count6].value = 0;
	nodes7[count6].value = nodes10[count6].value;
	
}
}

}





	
}

function change_zokugara(obj)
{
var str = $('#hhkn_zokugara').val();
$('#hhkn_pref').prop('disabled', false);
$('#hhkn_sex').prop('disabled', false);

if( $('#hhkn_zokugara').val()=="本人")
{

	
	document.chkform.hhkn_name.value=document.chkform.keiy_name.value;
	document.chkform.hhkn_name.readOnly=true;
	document.chkform.hhkn_name.style.border="solid 0px #000000";
	document.chkform.hhkn_furi.value=document.chkform.keiy_furi.value;
	document.chkform.hhkn_furi.readOnly=true;
	document.chkform.hhkn_furi.style.border="solid 0px #000000";

	document.chkform.hhkn_birthDate1.value=document.chkform.keiy_birthDate1.value;
	document.chkform.hhkn_birthDate1.readOnly=true;
	document.chkform.hhkn_birthDate1.style.border="solid 0px #000000";

	document.chkform.hhkn_birthDate2.value=document.chkform.keiy_birthDate2.value;
	document.chkform.hhkn_birthDate2.readOnly=true;
	document.chkform.hhkn_birthDate2.style.border="solid 0px #000000";

	document.chkform.hhkn_birthDate3.value=document.chkform.keiy_birthDate3.value;
	document.chkform.hhkn_birthDate3.readOnly=true;
	document.chkform.hhkn_birthDate3.style.border="solid 0px #000000";
	
	//document.chkform.hhkn_zokugara_sonota.readOnly=true;
	//document.chkform.hhkn_zokugara_sonota.style.border="solid 0px #000000";	
	

	$('#hhkn_sex').val($('#keiy_sex').val());


	//$('#hhkn_sex option:not(:selected)').prop('disabled', true);


		$('#hhkn_pref').prop('disabled', false);

	document.chkform.hhkn_pref.value=document.chkform.keiy_pref.value;
	document.chkform.hhkn_pref.style.border="solid 0px #000000";
//	$('#hhkn_pref option:not(:selected)').prop('disabled', true);

	document.chkform.hhkn_zipcode.value=document.chkform.keiy_zipcode.value;
	document.chkform.hhkn_zipcode.readOnly=true;
	document.chkform.hhkn_zipcode.style.border="solid 0px #000000";

	document.chkform.hhkn_addr.value=document.chkform.keiy_addr.value;
	document.chkform.hhkn_addr.readOnly=true;
	document.chkform.hhkn_addr.style.border="solid 0px #000000";

	document.chkform.hhkn_build.value=document.chkform.keiy_build.value;
	document.chkform.hhkn_build.readOnly=true;
	document.chkform.hhkn_build.style.border="solid 0px #000000";
	

	document.chkform.hhkn_birthDate.value=document.chkform.keiy_birthDate.value;

	var hhkn_ageD = document.chkform.hhkn_age;
	var keiy_ageD = document.chkform.keiy_age;
	if(hhkn_ageD!="" && keiy_ageD!="")
	{
	document.chkform.hhkn_age.value=document.chkform.keiy_age.value;
	}
	
document.chkform.hhkn_phone.value=document.chkform.keiy_phone.value;
document.chkform.hhkn_phone.readOnly=true;
document.chkform.hhkn_phone.style.border="solid 0px #000000";	



}else{


	if(obj===1)
	{
		document.chkform.hhkn_name.value = "";
		document.chkform.hhkn_furi.value = "";
		
		
		if(document.chkform.hhkn_birthDate1)
		{
    	document.chkform.hhkn_birthDate1.value  = "";
		document.chkform.hhkn_birthDate2.value  = "";
		document.chkform.hhkn_birthDate3.value  = "";

		}

		document.chkform.hhkn_phone.value  = "";
		document.chkform.hhkn_pref.value  = "";
		document.chkform.hhkn_build.value  = "";
		document.chkform.hhkn_zipcode.value  = "";
		document.chkform.hhkn_addr.value  = "";
		if($('#calc_check').length){document.chkform.hhknID.value  = "";}
		
	}
		document.chkform.hhkn_name.readOnly = false;
		document.chkform.hhkn_name.style.border = "solid 1px #000000";

		document.chkform.hhkn_furi.readOnly = false;
		document.chkform.hhkn_furi.style.border = "solid 1px #000000";


//document.chkform.hhkn_sex.readOnly=false;
//		document.chkform.hhkn_birthDate0.readOnly = false;
//		document.chkform.hhkn_birthDate0.style.border = "solid 1px #000000";
//		for(var i=0; i < document.chkform.hhkn_birthDate0.options.length; i++) {  
//		  var option = document.chkform.hhkn_birthDate0.options[i];  
//		   option.disabled = false;
//		}

		if(document.chkform.hhkn_birthDate1)
		{
		document.chkform.hhkn_birthDate1.readOnly = false;
		document.chkform.hhkn_birthDate1.style.border = "solid 1px #000000";

		document.chkform.hhkn_birthDate2.readOnly = false;
		document.chkform.hhkn_birthDate2.style.border = "solid 1px #000000";

		document.chkform.hhkn_birthDate3.readOnly = false;
		document.chkform.hhkn_birthDate3.style.border = "solid 1px #000000";
		}

		document.chkform.hhkn_phone.readOnly = false;
		document.chkform.hhkn_phone.style.border = "solid 1px #000000";


	document.chkform.hhkn_pref.readOnly = false;
		document.chkform.hhkn_pref.style.border = "solid 1px #000000";

		document.chkform.hhkn_build.readOnly = false;
		document.chkform.hhkn_build.style.border = "solid 1px #000000";

	document.chkform.hhkn_zipcode.readOnly = false;
	document.chkform.hhkn_zipcode.style.border = "solid 1px #000000";

		document.chkform.hhkn_addr.readOnly = false;
		document.chkform.hhkn_addr.style.border = "solid 1px #000000";


		$('#hhkn_pref').prop('disabled', false);
		//$('#hhkn_sex').prop('disabled', false);
	$('#hhkn_sex option:not(:selected)').prop('disabled', false);	
	
}

}




$(document).ready(function () {
	$("#input").keypress(function (ev) {
		if ((ev.which && ev.which === 13) || (ev.keyCode && ev.keyCode === 13)) {
			if (window.event.srcElement.tagName == "TEXTAREA") {
				return true;
			} else {
				return false;
			}
		} else {
			return true;
		}
	});

	$(".dformat").on('blur', function (e) {
		var df=$(this).val();
		if(new RegExp(/^[0-9]{8}$/).test(df)){
			var str = $.trim(df);
			var y = str.substr(0,4);
			var m = str.substr(4,2);
			var d = str.substr(6,2);
			// obj.value = y + "/" + m + "/" + d;
			$(this).val( y + "/" + m + "/" + d);
		}
	});

	$(function(){
		$("#input").validationEngine(
			'attach', {
				promptPosition: "topLeft"//エラーメッセージ位置の指定
			}
		);
	});
	$(function(){
		$("#input_s").validationEngine(
			'attach', {
				promptPosition: "topLeft"//エラーメッセージ位置の指定
			}
		);
	});
});

$(function() {

	$("input[type=text]").on('change', function(ev) {
	//var target = $(this).attr('id');
		//console.log(target);
			  $(this).css('background-color', 'white');
		
	});

	$("#submit_btnA").on('click', function (e) {
		var checkb = $("#submit_btnA").val();
		if (checkb == "チェック") {

			var hhkn_addr = document.chkform.hhkn_addr.value;
			var han = hhkn_addr.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (s) {
				return String.fromCharCode(s.charCodeAt(0) - 0xFEE0)
			});
			var str2 = han.replace(/[^0-9^\.]/g, ""); //"123.123"
			parseInt(str2);

			var keiy_addr = document.chkform.keiy_addr.value;
			var khan = keiy_addr.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (s) {
				return String.fromCharCode(s.charCodeAt(0) - 0xFEE0)
			});
			var kstr2 = khan.replace(/[^0-9^\.]/g, ""); //"123.123"
			parseInt(kstr2);

			if (keiy_addr != "" && ((str2) == "NaN" || (str2) == "" || (str2) == null)) {
				var ret = confirm("契約者住所に番地が入っていませんがよろしいですか？");
				if (ret == true) {

					if (hhkn_addr != "" && ((kstr2) == "NaN" || (kstr2) == "" || (kstr2) == null)) {
						var kret = confirm("被保険者住所に番地が入っていませんがよろしいですか？");
						if (kret == true) {
							return true;
						} else {
							return false;
						}
					} else {
						return true;
					}
				} else {
					return false;
				}
			}

		}

	});	
	
	
});
function change_keiro(obj)
{
var knsy_keiro=$("#knsy_keiro").val();
if(knsy_keiro==="口座振替")
{
$(".bankdata").show();	
$(".creditdata").hide();
$(".dantaidata").hide();
//$("#webt_paytype").val(1);
//$('#knsy_nentsuki option[value=月払]').prop('disabled', false);
}else if(knsy_keiro==="クレジット"){
$(".bankdata").hide();
$(".dantaidata").hide();
$(".creditdata").show();
//$('#knsy_nentsuki').val("年払");
//$("#webt_paytype").val(1);
//$('#knsy_nentsuki option[value=月払]').prop('disabled', true);
}else if(knsy_keiro==="送金払"){
//$('#knsy_nentsuki option[value=月払]').prop('disabled', false);
$(".bankdata").hide();
$(".creditdata").hide();
$(".dantaidata").show();

}
}


function change_zokugara_hhkn()
{
	if(document.getElementById("hhkn_zokugara") != null)
	{
	var hhkn_zokugara=$("#hhkn_zokugara").val();
	if(hhkn_zokugara==="本人以外")
	{
	$("#hhkn_zokugara_sonota").show();	

	}else{
	$("#hhkn_zokugara_sonota").hide();	
	}
	}

}
function change_zokugara_sbou()
{


	var sbou_zokugara=$("#sbou_zokugara_cd").val();
	if(sbou_zokugara==="その他")
	{

		$("#sbou_zokugara").show();

	}else{

		$("#sbou_zokugara").hide().val($("#sbou_zokugara_cd").val());
	}

}
$(document).ready(function() {
		change_zokugara_hhkn();
		change_zokugara_sbou();

$("#hhkn_zokugara").on('change click', function (e) {
	change_zokugara_hhkn();
});
$("#sbou_zokugara_cd").on('change click', function (e) {
	change_zokugara_sbou();
});	
	
});

function change_phone_load(obj)
{

	var keiynophone = document.chkform.keiy_phone;
	
	if(keiynophone.value == "なし")
	{
			var objSelect = document.chkform.knsy_syousyo_hakkou;
			var m = objSelect.length;
			var i = 0;
			for(i=0;i<m;i++){
			if(objSelect.options[i].value == "いいえ"){objSelect.options[i].selected = true;}else{objSelect.options[i].disabled = true;}
			}			
	}

}



function confirm_label(url,target,title)
{

 	if(window.confirm(title+'のラベルを作成します。違う場合は更新ボタンを押してください。'))
	{
		openwin(url,target);
		return true;
	}else{
		return false;
	}	

}

var b_color="black";           //枠の色
var g_color="white";          //背景の色
var f_size="10";             //文字サイズ
var f_color="black";           //文字色
var set_x=20;                //オフセットX
var set_y=10;               //オフセットY
//--------------------------------------
document.write("<div ID='tiptext'STYLE='position:absolute;z-index:2;border:1px solid;padding:5px;");
document.write("border-color:"+b_color+";font-size:"+f_size+"pt;background-color:"+g_color+";");
document.write("color:"+f_color+";");
document.write("display:none'></div>");
