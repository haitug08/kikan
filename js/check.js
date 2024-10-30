// -- [ 動的に<script>要素を<head>要素に追加を行う ] -- //
// var scrptE = document.createElement("script"); // Create a 'script' element
// scrptE.setAttribute("type", "text/javascript"); // Set it's 'type' attribute
// scrptE.setAttribute("language", "JavaScript"); // Set it's 'language' attribute 
// scrptE.setAttribute("src", "js/check_user.js"); // Set it's 'src' attribute 
// scrptE.setAttribute("src", "js/check_keiy.js"); // Set it's 'src' attribute 
// scrptE.setAttribute("src", "js/check_hhkn.js"); // Set it's 'src' attribute 
// scrptE.setAttribute("src", "js/check_kkut.js"); // Set it's 'src' attribute 
// scrptE.setAttribute("src", "js/check_knsy.js"); // Set it's 'src' attribute 
// scrptE.setAttribute("src", "js/check_keiyakusha.js"); // Set it's 'src' attribute 
// document.getElementsByTagName("head")[0].appendChild(scrptE);// Now add this new element to the head tag 
// document.write("<script type='text/javascript' src='js/check_user.js'></scrpt>");
// document.write("<script type='text/javascript' src='js/check_keiy.js'></scrpt>");
// document.write("<script type='text/javascript' src='js/pbssystem.js'></scrpt>");

function checkinputdata(obj){
	var strTemp1;
	strTemp1 = obj.wsearch.value;
	if(strTemp1== ""){
		alert("検索キーワードが入力されていません");
		obj.wsearch.focus();
		return false;
    }else{
    	return true;
    }
    return true;
}
function checkinputdataB(obj){
	var strTemp1;
	var ddb;
	var dd;
	ddb = obj.smnrID;
	dd = ddb.options[obj.smnrID.selectedIndex].value;
	strTemp1 = obj.wsearch.value;
	if(strTemp1== ""){
		alert("募集人コードが入力されていません");
		obj.wsearch.focus();
		return false;
    }else if(dd==""){
		alert("講習情報が選択されていません");
		return false;
    
    }else{
  	return true;
  			obj.wsearch.focus();

    }
    return true;
		obj.wsearch.focus();
}
function checkBoxcheck() {
	var flag = 0;
	for(i=0;i<document.chkform.elements.length;i++){
//エレメントがチェックボックスの時に処理を行う
		if(document.chkform.elements[i].type=="checkbox"){
			if(document.chkform.elements[i].checked==true){
				flag = 1;
				break;
			}
		}
	}
  	if(flag!= 1){
		window.alert("加入商品にチェックを入れてください");
    	return false;
  	}
  	return true;
}

function check_login(){
	var c = document.form1.user_id.value;
	var d = document.form1.user_pass.value;
	
	if(c== ""){
		alert("IDが入力されていません");
		document.form1.user_id.focus();
		return false;
    } else if(d== ""){
    	alert("パスワードが入力されていません");
		document.form1.user_pass.focus();
		return false;
	} else {
		return true;
	}
	
	return true;
}

function checkclose(){
	var flag = 1;
	if(document.chkform != null && document.chkform.submit !=null){
		var csubmit = document.chkform.submit.value;
		if(checkcloseArray(csubmit)){
			flag = confirm("保存していない内容がありますがよろしいですか？");
			if(flag){    (window.open('','_self').opener=window).close();  return true;}else{return false;}
		}else{    (window.open('','_self').opener=window).close();  return true;}
	}else{    (window.open('','_self').opener=window).close();  return true;}
	return true;
}

function checkcloseArray(str){
	var consub = new Array("チェック","追加");
	var i;
	for(i=0;i<2;i++){
		if(str== consub[i]){return true;}else{continue;}
	}
}

function deletecheck(std,nwin){
	flag = confirm("設定データを削除してもよろしいですか？\n");
	if(flag){openwin(std,nwin);}
	else{return false;}
	return false;
}
function defaultcheck(){
	flag = confirm("設定値にセットしてもよろしいですか？\n");
	if(flag){return true;}
	else{return false;}
	return false;
}
function check(name){
	switch(name){
//
	case "corp_u":   obj  = check_corp_data(); break;
	case "user":   obj  = check_user_data(); break;
	case "user_u":   obj  = check_user_u_data(); break;
	case "user_p":   obj  = check_user_p_data(); break;
			
			
	case "keiy":   obj  = check_keiy_data();     break;
	case "keiy_n": obj  = check_n_keiy_data();   break;
	case "keiy_st":obj  = check_st_keiy_data();  break;
	case "keiy_sn":obj  = check_sn_keiy_data();  break;
	case "keiy_i": obj  = check_i_keiy_data();   break;

	case "hhkn":   obj  = check_hhkn_data();     break;
	case "hhkn_n1": obj  = check_n_hhkn_data(1);   break;
	case "hhkn_n2": obj  = check_n_hhkn_data(2);   break;
	case "hhkn_n3": obj  = check_n_hhkn_data(3);   break;
	case "hhkn_st":obj  = check_st_hhkn_data();  break;
	case "hhkn_sn":obj  = check_sn_hhkn_data();  break;
	case "hhkn_i": obj  = check_i_hhkn_data();   break;
	case "hhkn_w": obj  = check_w_hhkn_data();   break;
	case "tegaki": obj  = check_tegaki_data();   break;
	
	case "kkut":   obj  = check_kkut_data();     break;
	case "kkut_n": obj  = check_n_kkut_data();   break;
	case "kkut_st":obj  = check_st_kkut_data();  break;
	case "kkut_sn":obj  = check_sn_kkut_data();  break;
	case "kkut_i": obj  = check_i_kkut_data();   break;
	
	case "knsy":   obj  = check_knsy_m_data();   break;
	
	case "uknsy":   obj = check_knsy_u_data();   break;
	case "uknsy_n": obj = check_n_knsy_u_data(); break;
	case "uknsy_st":obj = check_st_knsy_u_data();break;
	case "uknsy_sn":obj = check_sn_knsy_u_data();break;
	case "uknsy_i": obj = check_i_knsy_u_data(); break;
	case "dair": obj = check_dair_data(); break;
	case "bsyn": obj = check_bsyn_data(); break;
	case "brch": obj = check_brch_data(); break;
	case "brch_u": obj = check_brch_data(); break;
	case "dair_u": obj = check_dair_u_data(); break;
	case "bsyn_u": obj = check_bsyn_u_data(); break;
	case "nori": obj = check_nori_data(); break;
	case "dnti": obj = check_dnti_data(); break;
	case "dnti_u": obj = check_dnti_data(); break;

		default:
			obj=eval("check_"+name+"_data();");
		break;
	}
	if(obj==false){return false;}else{return true;}
}
// -- [ javascript の本体記述 ] -- //
// 文字列一致数の検索 //
function matchNum(text,sText){
	var n = 0;
	var i = 0;
	for(i = 0; i < text.length; i++){
		i = text.indexOf(sText, i);
		if(i== -1){break;}else{n++;}
	}
	return n;// 一致数を返す
}
// カタカナチェック //
function FuriganaCheck(huri){
	var str = huri;
	if(str.match(/[^ァ-ンーヴ　（()）、・.． \s]+/)){return false;}
	return true;
}
// 郵便番号チェック //
function ZipcodeCheck(zip){
	var str = zip;	
	var value = str.split('-').join('');//  - を除去
	if(zip!="")
	{
	if(( str.length - value.length)> 1){return 1;}
	//else if(str.match(/[^0-9\-]+/)){return 2;}
	else if(value.length !=7){return 3;}
	}
	return 0;
}
// 日付のチェック //
function dayCheck(day){
	var str = day;
	var value = str.split('/').join(''); // /を除去
	var value_array = str.split('/');
	
	var y = parseInt(value_array[0]);
    var m = parseInt(value_array[1]);
    var d = parseInt(value_array[2]);
    var dt = new Date(y, m - 1, d, 0, 0, 0, 0);	
	
	if(( str.length - value.length)!=2){return 1;}
	else if(str.match(/[^0-9\/]+/)){return 2;}
	else if(( value_array[0].length!= 4)||(value_array[1].length!= 2)||(value_array[2].length!= 2)){return 4;}
	else if(m < 1 || m > 12 || d < 1 || d > 31) {return 5;}
	else if(dt.getFullYear() != y || dt.getMonth() != m - 1 || dt.getDate() != d){return 6;}
	
	return 0;
}
// 電話番号のチェック //
function TellCheck(tell){
	var str = tell;
	if(str!="なし" && str != "")
	{
		var value = str.split('-').join('');//  - を除去
		if(( str.length - value.length)> 2){return 1;}
		else if(str.match(/[^0-9\-]+/)==false){return 2;}
		//else if(!str.match(/^0\d{1,3}-\d{2,4}-\d{3,4}$/)){return 6;}
		//else if(matchNum(str, "-")!==2){return 3;}
		return 0;
	}
}
// メールアドレスのチェック //
function Mailcheck(mail){
	var str = mail;
	if(!str.match(/[!#-9A-~]+@+[a-z0-9]+.+[^.]$/)){return false;}
	return true;
}
// 半角数字のチェック //
function cechkhankakusuuji(number){
	var str = number;
	if(str.match(/[^0-9]+/)){return false;}
	return true;
}
// 半角英数字のチェック //
function cechkhankakueisuuji(number){
	var str = number;
	if(str.match(/[^0-9a-zA-z\-]+/)){return false;}
	return true;
}
function cechkhankakueisuuji_ko(number){
	var str = number;
	if(str.match(/[^0-9a-z\-]+/)){return false;}
	return true;
}

 
// チェック内容をまとめた関数 //
function Checkindex(Name,Data,Kind,Flag)
{
	// 入力チェック //
	if(Flag){
// 入力チェックの有無
		if(!Data.value){
 // 入力されているか
			alert(Name + "を入力してください\n");
			Data.focus();
			  $(Data).css('background-color', '#FBDADE');			
			return false;
		}
	}	
	// エラーチェック //	
	switch(Kind){
	case "半角数字":
	if(!cechkhankakusuuji(Data.value)){
		alert(Name + "は" + Kind + "で入力してください\n");
		Data.focus();
			  $(Data).css('background-color', '#FBDADE');			
		return false;
	}
	break;
	case "半角数字空":
	if(!cechkhankakusuuji(Data.value)){
		alert(Name + "は半角数字で入力してください\n");
		Data.focus();
			  $(Data).css('background-color', '#FBDADE');			
		return false;
	}else if(parseInt(Data.value)==0){
		alert(Name + "は整数で入力してください\n");
		Data.focus();
			  $(Data).css('background-color', '#FBDADE');			
		return false;
	}
	break;

	case "半角英数字":
		if(!cechkhankakueisuuji(Data.value)){
			alert(Name + "は" + Kind + "で入力してください\n");
			Data.focus();
			  $(Data).css('background-color', '#FBDADE');			
			return false;
		}
		break;
	case "半角英数小文字":
		if(!cechkhankakueisuuji_ko(Data.value)){
			alert(Name + "は" + Kind + "で入力してください\n");
			Data.focus();
			  $(Data).css('background-color', '#FBDADE');			
			return false;
		}
		break;			
	case "全角カタカナ":
		if(!FuriganaCheck(Data.value)){
			alert(Name + "は" + Kind + "で入力してください\n");
			Data.focus();
			  $(Data).css('background-color', '#FBDADE');			
			return false;
		}
		break;
	case "メール":
		if(!Mailcheck(Data.value)){
			alert(Name + "は正確な" + Kind + "アドレスで入力してください\n");
			Data.focus();
			  $(Data).css('background-color', '#FBDADE');			
			return false;
		}
		break;
	case "郵便番号":
		switch(ZipcodeCheck(Data.value)){
		case 0:
			break;
		case 1:
			alert(Name + "に「-」 が多すぎます。\n");
			Data.focus();
			  $(Data).css('background-color', '#FBDADE');			
			return false;
		case 2:
			alert(Name + "は半角英数字のみで入力をしてください。\n");
			Data.focus();
			  $(Data).css('background-color', '#FBDADE');			
			return false;
		case 3:
			alert(Name + "の数字の桁数は半角数字で7桁にしてください。\n");
			Data.focus();
			  $(Data).css('background-color', '#FBDADE');			
			return false;
		case 4:
			alert(Name + "には必ず「-」を入力してください。\n");
			Data.focus();
			  $(Data).css('background-color', '#FBDADE');			
			return false;
		}
		break;
	case "日付":
		if(Data.value != ""){
			switch(dayCheck(Data.value)){
			case 0:
				break;
			case 1:
				alert(Name + "に「/」は２文字含めてください。\n");
				Data.focus();
			  $(Data).css('background-color', '#FBDADE');			
				return false;
			case 2:
				alert(Name + "は半角数字と「/」で入力してください。\n");
				Data.focus();
			  $(Data).css('background-color', '#FBDADE');			
				return false;
			case 3:
				alert(Name + "は「/」を含めて10文字で入力してください。\n「2008/1/1/」の場合「2008/01/01」と入力してください。");
				Data.focus();
			  $(Data).css('background-color', '#FBDADE');			
				return false;
			case 4:
				alert(Name + "は、西暦を4文字、月を2文字、日を2文字で入力してください。\n（例：2008/05/03）");
				var data_t = Data.value.split('/');
				if(data_t[1].length != 2){data_t[1] = "0" + data_t[1];}
				if(data_t[2].length != 2){data_t[2] = "0" + data_t[2];}
				Data.value = data_t[0] + "/" + data_t[1] + "/" + data_t[2];
				Data.focus();
			  $(Data).css('background-color', '#FBDADE');			
			return false;
			case 5:
				alert(Name + "は正しい日付けではありません。");
				Data.focus();
			  $(Data).css('background-color', '#FBDADE');			
				return false;
			case 6:
				alert(Name + "は正しい日付けではありません。");
				Data.focus();
			  $(Data).css('background-color', '#FBDADE');			
				return false;
			default:
				return true;
			}
		}
		break;
	case "電話":
		switch(TellCheck(Data.value)){
		case 0:
			break;
		case 1:
			alert(Name + "に「-」 が多すぎます。\n");
			Data.focus();
			  $(Data).css('background-color', '#FBDADE');			
			return false;
		case 2:
			alert(Name + "は半角英数字のみで入力をしてください。\n");
			Data.focus();
			  $(Data).css('background-color', '#FBDADE');			
			return false;
		case 3:
			alert(Name + "は「-」2個で入力して下さい。\n");
			Data.focus();
			  $(Data).css('background-color', '#FBDADE');			
			return false;
		case 4:
			alert(Name + "の数字の桁数は半角数字で11桁にしてください。\n");
			Data.focus();
			  $(Data).css('background-color', '#FBDADE');			
			return false;
		case 5:
			alert(Name + "の数字の桁数は半角数字で10桁にしてください。\n");
			Data.focus();
			  $(Data).css('background-color', '#FBDADE');			
			return false;
		case 6:
			alert(Name + "の数字の桁数が5桁の箇所があります。\n");
			Data.focus();
			  $(Data).css('background-color', '#FBDADE');			
			return false;
		}
		break;
	case "スペース":
		if(Data.value !="" && Data.value.indexOf('　')==-1){
			alert(Name + "の姓名間に全角スペースを入力して下さい。\n");
			Data.focus();
			  $(Data).css('background-color', '#FBDADE');			
			return false;
		}else if(Data.value !="" && Data.value.indexOf(' ')> 0){
			alert(Name + "半角スペースが入力されています\n");
			Data.focus();
			  $(Data).css('background-color', '#FBDADE');			
			return false;
			
		}else if(Data.value !="" && Data.value.match(/　{2,}/)){
			alert(Name + "全角スペースが複数入力されています\n");
			Data.focus();
			  $(Data).css('background-color', '#FBDADE');			
			return false;
		}
		Data.value=Data.value.replace(/^[\s　]+|[\s　]+$/g, "");	
	
		break;
		
	case "セレクト":
		if(Data.value== ""){
			alert(Name + "のいずれかを選択して下さい。");
			return false;
		}
		break;
	case "ラジオ":
		if(!Data.value){
			alert(Name + "のいずれかを選択して下さい。");
			return false;
		}
		break;
	case "チェックボックス":
		if(Data.checked == false){
			alert(Name + "のチェック項目を選択して下さい。");
			return false
		}
		break;
	}
	return true;
}

function ckDate(datestr) {
	// 正規表現による書式チェック 
	if(!datestr.match(/^\d{4}\/\d{2}\/\d{2}$/)){
		return false;
	}
	var vYear = datestr.substr(0, 4) - 0;
 	// Javascriptは、0-11で表現
	var vMonth = datestr.substr(5, 2) - 1;
	var vDay = datestr.substr(8, 2) - 0;
	// 月,日の妥当性チェック
	if(vMonth >= 0 && vMonth <= 11 && vDay >= 1 && vDay <= 31){
		var vDt = new Date(vYear, vMonth, vDay);
		if(isNaN(vDt)){
			return false;
		}else if(vDt.getFullYear() == vYear
		 && vDt.getMonth() == vMonth
		 && vDt.getDate() == vDay){
			return true;
		}else{
			return false;
		}
	}else{
		return false;
	}
}
// エラー確認 //
// チェックの大本 //

// JavaScript Document
// -- 新規登録時 -- //
// JavaScript Document
// 新規登録時 //

function check_dair_data(){
	var obj = document.chkform;
	this.errorName     = Array();
	this.errorData     = Array();
	this.errorKind     = Array();
	this.errorFlag     = Array();
	this.errorNumber   = 11;
	

this.errorName[0]="代理店名フリ";
this.errorName[1]="代理店名";
this.errorName[2]="代理店代表名フリ";
this.errorName[3]="代理店代表名フリ";
this.errorName[4]="代理店代表名";
this.errorName[5]="代理店代表名";
this.errorName[6]="代理店筆頭者以外フリ";
this.errorName[7]="代理店筆頭者以外フリ";
this.errorName[8]="代理店筆頭者以外";
this.errorName[9]="代理店筆頭者以外";
this.errorName[10]="代理店法定代理人";
this.errorName[11]="代理店法定代理人";
this.errorName[12]="代理店商号・名称又は氏名フリ";
this.errorName[13]="代理店商号・名称又は氏名";
this.errorName[14]="代理店職種区分";
this.errorName[15]="代理店商号・名称又は氏名フリ";
this.errorName[16]="代理店商号・名称又は氏名";

this.errorName[17]="代理店代表名フリ";
this.errorName[18]="代理店代表名";

this.errorData[0]=obj.dair_furi;
this.errorData[1]=obj.dair_name;
this.errorData[2]=obj.dair_dfuri;
this.errorData[3]=obj.dair_dfuri;
this.errorData[4]=obj.dair_dname;
this.errorData[5]=obj.dair_dname;
this.errorData[6]=obj.dair_hi_furi;
this.errorData[7]=obj.dair_hi_furi;
this.errorData[8]=obj.dair_hi_name;
this.errorData[9]=obj.dair_hi_name;
this.errorData[10]=obj.dair_houteiname;
this.errorData[11]=obj.dair_houteiname;

this.errorData[12]=obj.dair_syougoufuri;
this.errorData[13]=obj.dair_syougou;

this.errorData[14]=obj.dair_kubun.options[obj.dair_kubun.selectedIndex];
;

this.errorData[15]=obj.dair_syougoufuri;
this.errorData[16]=obj.dair_syougou;

this.errorData[17]=obj.dair_dfuri;
this.errorData[18]=obj.dair_dname;

this.errorKind[0]="全角カタカナ";
this.errorKind[1]="名前";
this.errorKind[2]="全角カタカナ";
this.errorKind[3]="スペース";
this.errorKind[4]="名前";
this.errorKind[5]="スペース";
this.errorKind[6]="全角カタカナ";
this.errorKind[7]="スペース";
this.errorKind[8]="名前";
this.errorKind[9]="スペース";
this.errorKind[10]="名前";
this.errorKind[11]="スペース";
this.errorKind[12]="全角カタカナ";
this.errorKind[13]="名前";

this.errorKind[14]="セレクト";

this.errorKind[15]="スペース";
this.errorKind[16]="スペース";
this.errorKind[17]="";
this.errorKind[18]="";

this.errorFlag[0]=1;
this.errorFlag[1]=1;
this.errorFlag[2]=0;
this.errorFlag[3]=0;
this.errorFlag[4]=0;
this.errorFlag[5]=0;
this.errorFlag[6]=0;
this.errorFlag[7]=0;
this.errorFlag[8]=0;
this.errorFlag[9]=0;
this.errorFlag[10]=0;
this.errorFlag[11]=0;
this.errorFlag[12]=0;
this.errorFlag[13]=0;
this.errorFlag[14]=1;
this.errorFlag[15]=1;
this.errorFlag[16]=1;
this.errorFlag[17]=1;
this.errorFlag[18]=1;

	for(i = 0; i < 2; i++){if(!Checkindex(this.errorName[i],this.errorData[i],this.errorKind[i],this.errorFlag[i])){return false;}}

	if(obj.dair_kubun.options[obj.dair_kubun.selectedIndex].value == "2"){
		for(i = 15; i < 17; i++){if(!Checkindex(this.errorName[i],this.errorData[i],this.errorKind[i],this.errorFlag[i])){return false;}}
	}else{
	
		for(i = 17; i < 19; i++){if(!Checkindex(this.errorName[i],this.errorData[i],this.errorKind[i],this.errorFlag[i])){return false;}}
	}


	return true;
}


function check_dair_u_data(){
	var obj = document.chkform;
	this.errorName     = Array();
	this.errorData     = Array();
	this.errorKind     = Array();
	this.errorFlag     = Array();
	this.errorNumber   = 11;
	

this.errorName[0]="代理店名フリ";
this.errorName[1]="代理店名";
this.errorName[2]="代理店法定代理人";
this.errorName[3]="代理店法定代理人";
this.errorName[4]="代理店商号・名称又は氏名フリ";
this.errorName[5]="代理店商号・名称又は氏名";
this.errorName[6]="代理店職種区分";
this.errorName[15]="代理店商号・名称又は氏名フリ";
this.errorName[16]="代理店商号・名称又は氏名";


this.errorData[0]=obj.dair_furi;
this.errorData[1]=obj.dair_name;
this.errorData[2]=obj.dair_houteiname;
this.errorData[3]=obj.dair_houteiname;

this.errorData[4]=obj.dair_syougoufuri;
this.errorData[5]=obj.dair_syougou;

this.errorData[6]=obj.dair_kubun.options[obj.dair_kubun.selectedIndex];


this.errorData[15]=obj.dair_syougoufuri;
this.errorData[16]=obj.dair_syougou;


this.errorKind[0]="全角カタカナ";
this.errorKind[1]="名前";
this.errorKind[2]="名前";
this.errorKind[3]="スペース";
this.errorKind[4]="全角カタカナ";
this.errorKind[5]="名前";

this.errorKind[6]="セレクト";

this.errorKind[15]="スペース";
this.errorKind[16]="スペース";

this.errorFlag[0]=1;
this.errorFlag[1]=1;
this.errorFlag[2]=0;
this.errorFlag[3]=0;
this.errorFlag[4]=0;
this.errorFlag[5]=0;
this.errorFlag[6]=1;
this.errorFlag[15]=1;
this.errorFlag[16]=1;

	for(i = 0; i < 2; i++){if(!Checkindex(this.errorName[i],this.errorData[i],this.errorKind[i],this.errorFlag[i])){return false;}}

	//if(obj.dair_kubun.options[obj.dair_kubun.selectedIndex].value == "2"){
	//	for(i = 15; i < 17; i++){if(!Checkindex(this.errorName[i],this.errorData[i],this.errorKind[i],this.errorFlag[i])){return false;}}
	//}


	return true;
}


function check_bsyn_data(){
	var obj = document.chkform;
	this.errorName     = Array();
	this.errorData     = Array();
	this.errorKind     = Array();
	this.errorFlag     = Array();
	this.errorNumber   = 11;
	


this.errorName[0]="募集人名フリ";
this.errorName[1]="募集人名フリ";
this.errorName[2]="募集人名";
this.errorName[3]="募集人名";

this.errorName[4]="募集人旧フリ";
this.errorName[5]="募集人旧フリ";
this.errorName[6]="募集人旧氏名";
this.errorName[7]="募集人旧氏名";

this.errorData[0]=obj.bsyn_furi;
this.errorData[1]=obj.bsyn_furi;
this.errorData[2]=obj.bsyn_name;
this.errorData[3]=obj.bsyn_name;

this.errorData[4]=obj.bsyn_oldfuri;
this.errorData[5]=obj.bsyn_oldfuri;
this.errorData[6]=obj.bsyn_oldname;
this.errorData[7]=obj.bsyn_oldname;

this.errorKind[0]="全角カタカナ";
this.errorKind[1]="スペース";
this.errorKind[2]="名前";
this.errorKind[3]="スペース";

this.errorKind[4]="全角カタカナ";
this.errorKind[5]="スペース";
this.errorKind[6]="名前";
this.errorKind[7]="スペース";

this.errorFlag[0]=1;
this.errorFlag[1]=1;
this.errorFlag[2]=1;
this.errorFlag[3]=1;

this.errorFlag[4]=0;
this.errorFlag[5]=0;
this.errorFlag[6]=0;
this.errorFlag[7]=0;


	for(i = 0; i < 8; i++){if(!Checkindex(this.errorName[i],this.errorData[i],this.errorKind[i],this.errorFlag[i])){return false;}}



	return true;
}

function check_bsyn_u_data(){
	var obj = document.chkform;
	this.errorName     = Array();
	this.errorData     = Array();
	this.errorKind     = Array();
	this.errorFlag     = Array();
	this.errorNumber   = 11;
	


this.errorName[0]="募集人名フリ";
this.errorName[1]="募集人名フリ";
this.errorName[2]="募集人名";
this.errorName[3]="募集人名";

this.errorName[4]="募集人旧フリ";
this.errorName[5]="募集人旧フリ";
this.errorName[6]="募集人旧氏名";
this.errorName[7]="募集人旧氏名";

this.errorData[0]=obj.bsyn_furi;
this.errorData[1]=obj.bsyn_furi;
this.errorData[2]=obj.bsyn_name;
this.errorData[3]=obj.bsyn_name;

this.errorData[4]=obj.bsyn_oldfuri;
this.errorData[5]=obj.bsyn_oldfuri;
this.errorData[6]=obj.bsyn_oldname;
this.errorData[7]=obj.bsyn_oldname;

this.errorKind[0]="全角カタカナ";
this.errorKind[1]="スペース";
this.errorKind[2]="名前";
this.errorKind[3]="スペース";

this.errorKind[4]="全角カタカナ";
this.errorKind[5]="スペース";
this.errorKind[6]="名前";
this.errorKind[7]="スペース";

this.errorFlag[0]=1;
this.errorFlag[1]=1;
this.errorFlag[2]=1;
this.errorFlag[3]=1;

this.errorFlag[4]=0;
this.errorFlag[5]=0;
this.errorFlag[6]=0;
this.errorFlag[7]=0;


	for(i = 0; i < 8; i++){if(!Checkindex(this.errorName[i],this.errorData[i],this.errorKind[i],this.errorFlag[i])){return false;}}



	return true;
}












function check_tegaki_data(){
	var obj = document.chkform;
	this.errorName     = Array();
	this.errorData     = Array();
	this.errorKind     = Array();
	this.errorFlag     = Array();
	this.errorNumber   = 40;
	


this.errorName[0]="契約者名";
this.errorName[1]="契約者名フリガナ";
this.errorName[2]="契約者区分";
this.errorName[3]="契約者生年月日の年号";
this.errorName[4]="契約者生年月日の年";
this.errorName[5]="契約者生年月日の月";
this.errorName[6]="契約者生年月日の日";
this.errorName[7]="契約者郵便番号";
this.errorName[8]="契約者都道府県";
this.errorName[9]="契約者住所";

this.errorName[10]="被保険者名";
this.errorName[11]="被保険者名フリガナ";
this.errorName[12]="被保険者生年月日の年号";
this.errorName[13]="被保険者生年月日の年";
this.errorName[14]="被保険者生年月日の月";
this.errorName[15]="被保険者生年月日の日";
this.errorName[16]="被保険者郵便番号";
this.errorName[17]="被保険者都道府県";
this.errorName[18]="被保険者住所";

this.errorName[19]="商品選択";

this.errorName[20]="契約者名";
this.errorName[21]="契約者名フリ";
this.errorName[22]="被保険者名";
this.errorName[23]="被保険者名フリ";
this.errorName[24]="管理戸室名カナ";

this.errorName[25]="契約者電話番号";
this.errorName[26]="被保険者電話番号";

this.errorName[27]="代表者名";
this.errorName[28]="代表者名フリ";
this.errorName[29]="役職";

this.errorName[30]="契約者建物名";
this.errorName[31]="契約者号室番号";
this.errorName[32]="被保険者建物名";
this.errorName[33]="被保険者号室番号";

this.errorName[35]="申込日";
this.errorName[36]="保険開始日";
this.errorName[37]="証券番号";
this.errorName[38]="領収日";
this.errorName[39]="領収証番号";

this.errorName[40]="代理店コード";
this.errorName[41]="募集人コード";


this.errorData[35]=obj.knsy_moushikomiDate;
this.errorData[36]=obj.knsy_keiyakuDate;
this.errorData[37]=obj.knsy_syoukenNo;
this.errorData[38]=obj.knsy_ryousyuuDate;
this.errorData[39]=obj.knsy_ryousyuuNo;
this.errorData[40]=obj.dairID;
this.errorData[41]=obj.bsynID;



this.errorData[0]=obj.keiy_name;
this.errorData[1]=obj.keiy_furi;
this.errorData[2]=obj.keiy_m_kubun;
this.errorData[3]=obj.keiy_birthDate0.options[obj.keiy_birthDate0.selectedIndex];
this.errorData[4]=obj.keiy_birthDate1;
this.errorData[5]=obj.keiy_birthDate2;
this.errorData[6]=obj.keiy_birthDate3;
this.errorData[7]=obj.keiy_zipcode;
this.errorData[8]=obj.keiy_pref;
this.errorData[9]=obj.keiy_addr;
this.errorData[10]=obj.hhkn_name;
this.errorData[11]=obj.hhkn_furi;
this.errorData[12]=obj.hhkn_birthDate0.options[obj.hhkn_birthDate0.selectedIndex];
this.errorData[13]=obj.hhkn_birthDate1;
this.errorData[14]=obj.hhkn_birthDate2;
this.errorData[15]=obj.hhkn_birthDate3;
this.errorData[16]=obj.hhkn_zipcode;
this.errorData[17]=obj.hhkn_pref;
this.errorData[18]=obj.hhkn_addr;
this.errorData[19]=obj.syhn_select.options[obj.syhn_select.selectedIndex];


this.errorData[20]=obj.keiy_name;
this.errorData[21]=obj.keiy_furi;
this.errorData[22]=obj.hhkn_name;
this.errorData[23]=obj.hhkn_furi;
this.errorData[24]=obj.bild_furi;

this.errorData[25]=obj.keiy_phone;
this.errorData[26]=obj.hhkn_phone;


this.errorData[27]=obj.keiy_dname;
this.errorData[28]=obj.keiy_dfuri;
this.errorData[29]=obj.keiy_yakusyoku;

this.errorData[30]=obj.keiy_build;
this.errorData[31]=obj.keiy_goushitsu;
this.errorData[32]=obj.hhkn_build;
this.errorData[33]=obj.hhkn_goushitsu;

this.errorData[35]=obj.knsy_moushikomiDate;
this.errorData[36]=obj.knsy_keiyakuDate;
this.errorData[37]=obj.knsy_syoukenNo;
this.errorData[38]=obj.knsy_ryousyuuDate;
this.errorData[39]=obj.knsy_ryousyuuNo;
this.errorData[40]=obj.dairID;
this.errorData[41]=obj.bsynID;



this.errorKind[0]="名前";
this.errorKind[1]="全角カタカナ";
this.errorKind[2]="";
this.errorKind[3]="";
this.errorKind[4]="半角数字空";
this.errorKind[5]="半角数字空";
this.errorKind[6]="半角数字空";
this.errorKind[7]="郵便番号";
this.errorKind[8]="";
this.errorKind[9]="";
this.errorKind[10]="名前";
this.errorKind[11]="全角カタカナ";
this.errorKind[12]="";
this.errorKind[13]="半角数字空";
this.errorKind[14]="半角数字空";
this.errorKind[15]="半角数字空";
this.errorKind[16]="郵便番号";
this.errorKind[17]="";
this.errorKind[18]="";
this.errorKind[19]="";
var keiy_m_kubun = $("input[name='keiy_m_kubun']:checked").val();

if(keiy_m_kubun!=3)
{
this.errorKind[20]="スペース";
this.errorKind[21]="スペース";
}else{
this.errorKind[20]="";
this.errorKind[21]="";
}

this.errorKind[22]="スペース";
this.errorKind[23]="スペース";
this.errorKind[24]="全角カタカナ";

this.errorKind[25]="電話";
this.errorKind[26]="電話";

this.errorKind[27]="名前";
this.errorKind[28]="全角カタカナ";
this.errorKind[29]="";

this.errorKind[30]="";
this.errorKind[31]="";
this.errorKind[32]="";
this.errorKind[33]="";


this.errorKind[35]="日付";
this.errorKind[36]="日付";
this.errorKind[37]="";
this.errorKind[38]="日付";
this.errorKind[39]="";
this.errorKind[40]="";
this.errorKind[41]="";

switch(keiy_m_kubun)
{
	case "1":
		this.errorFlag[0]=1;
		this.errorFlag[1]=1;
		this.errorFlag[2]=1;
		this.errorFlag[3]=1;
		this.errorFlag[4]=1;
		this.errorFlag[5]=1;
		this.errorFlag[6]=1;
		this.errorFlag[7]=1;
		this.errorFlag[8]=1;
		this.errorFlag[9]=1;
		this.errorFlag[10]=1;
		this.errorFlag[11]=1;
		this.errorFlag[12]=1;
		this.errorFlag[13]=1;
		this.errorFlag[14]=1;
		this.errorFlag[15]=1;
		this.errorFlag[16]=1;
		this.errorFlag[17]=1;
		this.errorFlag[18]=1;
		this.errorFlag[19]=1;
		this.errorFlag[25]=1;
		this.errorFlag[26]=1;
	break;
	case "2":
		this.errorFlag[0]=1;
		this.errorFlag[1]=1;
		this.errorFlag[2]=1;
		this.errorFlag[3]=1;
		this.errorFlag[4]=1;
		this.errorFlag[5]=1;
		this.errorFlag[6]=1;
		this.errorFlag[7]=1;
		this.errorFlag[8]=1;
		this.errorFlag[9]=1;
		this.errorFlag[10]=1;
		this.errorFlag[11]=1;
		this.errorFlag[12]=1;
		this.errorFlag[13]=1;
		this.errorFlag[14]=1;
		this.errorFlag[15]=1;
		this.errorFlag[16]=1;
		this.errorFlag[17]=1;
		this.errorFlag[18]=1;
		this.errorFlag[19]=1;
		this.errorFlag[25]=1;
		this.errorFlag[26]=1;
	break;
	case "3":
		this.errorFlag[0]=1;
		this.errorFlag[1]=1;
		this.errorFlag[2]=1;
		this.errorFlag[3]=0;
		this.errorFlag[4]=0;
		this.errorFlag[5]=0;
		this.errorFlag[6]=0;
		this.errorFlag[7]=1;
		this.errorFlag[8]=1;
		this.errorFlag[9]=1;
		this.errorFlag[10]=0;
		this.errorFlag[11]=0;
		this.errorFlag[12]=0;
		this.errorFlag[13]=0;
		this.errorFlag[14]=0;
		this.errorFlag[15]=0;
		this.errorFlag[16]=1;
		this.errorFlag[17]=1;
		this.errorFlag[18]=1;
		this.errorFlag[19]=1;
		this.errorFlag[25]=1;
		this.errorFlag[26]=0;
	break;

}


this.errorFlag[20]=0;
this.errorFlag[21]=0;
this.errorFlag[22]=0;
this.errorFlag[23]=0;
this.errorFlag[24]=0;

this.errorFlag[27]=0;
this.errorFlag[28]=0;
this.errorFlag[29]=0;



this.errorFlag[30]=0;
this.errorFlag[31]=0;
this.errorFlag[32]=1;
this.errorFlag[33]=1;

this.errorFlag[35]=1;
this.errorFlag[36]=1;
this.errorFlag[37]=1;
this.errorFlag[38]=1;
this.errorFlag[39]=1;
this.errorFlag[40]=1;
this.errorFlag[41]=1;


	for(i = 0; i < 2; i++){if(!Checkindex(this.errorName[i],this.errorData[i],this.errorKind[i],this.errorFlag[i])){return false;}}

	if($("input[name='keiy_m_kubun']:checked").val() != "3"){
		for(i = 3; i < 7; i++){if(!Checkindex(this.errorName[i],this.errorData[i],this.errorKind[i],this.errorFlag[i])){return false;}}
	}else{
		for(i = 27; i < 30; i++){if(!Checkindex(this.errorName[i],this.errorData[i],this.errorKind[i],this.errorFlag[i])){return false;}}
	}


	for(i = 7; i < 27; i++){if(!Checkindex(this.errorName[i],this.errorData[i],this.errorKind[i],this.errorFlag[i])){return false;}}
	for(i = 35; i < 42; i++){if(!Checkindex(this.errorName[i],this.errorData[i],this.errorKind[i],this.errorFlag[i])){return false;}}
//	if(this.errorData[15].value!= "6"){
//		switch(this.errorData[15].value){
//		case "1":case "2":case "3":
//			for(i = 17; i < 19; i++){if(!Checkindex(this.errorName[i],this.errorData[i],this.errorKind[i],this.errorFlag[i])){return false;}}
//			break;
//		case "5":
//			for(i = 16; i < 19; i++){if(!Checkindex(this.errorName[i],this.errorData[i],this.errorKind[i],this.errorFlag[i])){return false;}}
//			break;
//		case "6":
//			break;
//		}
//	}


//var h_adult = obj.hhkn_adult.options[obj.hhkn_adult.selectedIndex];
//var h_child = obj.hhkn_child.options[obj.hhkn_child.selectedIndex];
//
//var h_ac_num = parseInt(h_adult.value)+parseInt(h_child.value);
//if(h_ac_num == 0)
//{
//		alert("入居者人数を再度確認してください。");return false;
//}


//var k_tatemono = obj.keiy_tatemono_kubun.options[obj.keiy_tatemono_kubun.selectedIndex];
//if(k_tatemono.value=="号室あり" && this.errorData[2].value!=3){
//if(!Checkindex(this.errorName[30],this.errorData[30],this.errorKind[30],this.errorFlag[30])){return false;}	
//if(!Checkindex(this.errorName[31],this.errorData[31],this.errorKind[31],this.errorFlag[31])){return false;}	
//}
if(obj.syhn_select.options[obj.syhn_select.selectedIndex]=="0,0,0"){alert("商品を選択してください。");}
this.errorData[34]=obj.bild_furi;
this.errorName[34]="管理戸室名カナ";
this.errorKind[34]="全角カタカナ";
this.errorFlag[34]=1;


var bild_touroku = obj.bild_touroku.checked;
if(bild_touroku==true)
{
if(!Checkindex(this.errorName[34],this.errorData[34],this.errorKind[34],this.errorFlag[34])){return false;}	
}

var h_tatemono = obj.hhkn_tatemono_kubun.options[obj.hhkn_tatemono_kubun.selectedIndex];
if(h_tatemono.value=="号室あり"){
if(!Checkindex(this.errorName[32],this.errorData[32],this.errorKind[32],this.errorFlag[32])){return false;}	
if(!Checkindex(this.errorName[33],this.errorData[33],this.errorKind[33],this.errorFlag[33])){return false;}	
}

var dt1 = new Date();
//var moushikomiDate = obj.knsy_moushikomiDate.value.split('/'); // /を除去
//
//var dt2 = new Date(moushikomiDate[0], moushikomiDate[1] - 1,moushikomiDate[2],23,59,59,999);
//if(dt1.getTime() > dt2.getTime()) {
//	alert("申込日を再度確認してください。\n申込日は今日の日付けと同日か、それ以降の日付で入力して下さい。");
//	return false;
//}

	if(obj.knsy_moushikomiDate.value!="")
	{
	var moushikomiDate = obj.knsy_moushikomiDate.value.split('/'); // /を除去
	var dtA = dt1.getDate();
	var dt3 = new Date(moushikomiDate[0], parseInt(moushikomiDate[1])-1,moushikomiDate[2],0,59,59,999);
	if(dtA>7)
	{
		var dt2 = new Date(dt1.getFullYear(), dt1.getMonth()-1,1);
	}else{
		var dt2 = new Date(dt1.getFullYear(), dt1.getMonth()-1,1);
	}
//		 if(dt3.getTime() < dt2.getTime()){
//			alert("申込日を再度確認してください。\n申込日は前月1日以降の日付で入力して下さい。");
//			return false;
//		}else if(dt3.getTime() > dt1.getTime()) {
//			alert("申込日を再度確認してください。\申込日は明日以降の日付は入力できません。");
//			return false;
//		}
	
	}

	if(obj.knsy_keiyakuDate.value!="")
	{
	
		if(obj.knsy_moushikomiDate.value=="")
		{
			alert("申込日を入力してください。");
			return false;
		}else{
			var moushikomiDate = obj.knsy_moushikomiDate.value.split('/'); // /を除去
			var keiyakuDate = obj.knsy_keiyakuDate.value.split('/'); // /を除去
			var dt2 = new Date(moushikomiDate[0], parseInt(moushikomiDate[1])-1,moushikomiDate[2],23,59,59,999);
			var dt3 = new Date(keiyakuDate[0], parseInt(keiyakuDate[1])-1,keiyakuDate[2],23,59,59,999);
			
			if(dt3.getTime() < dt2.getTime()) 
			{
				alert("保険開始日を再度確認してください。\n保険開始日は申込日以降の日付で入力して下さい。");
				return false;
			}
		}
	}
	
var keiy_miseinen = obj.keiy_miseinen.checked;
	
		if(obj.keiy_age.value!="" && obj.keiy_age.value!="undefined")
		{
			if(obj.keiy_age.value<20 && keiy_miseinen==false)
			{
				alert("未成年は契約できません。");
				return false;
			}else if(obj.keiy_age.valu>100){
				alert("年齢が100歳を超えています。");
				return false;
			}
		}
		return true;

}

function check_webm_data(){
	var obj = document.chkform;
	this.errorName     = Array();
	this.errorData     = Array();
	this.errorKind     = Array();
	this.errorFlag     = Array();
	this.errorNumber   = 23;
	


this.errorName[0]="顧客名";
this.errorName[1]="顧客名フリガナ";
this.errorName[2]="顧客生年月日の年";
this.errorName[3]="顧客生年月日の月";
this.errorName[4]="顧客生年月日の日";
this.errorName[5]="顧客郵便番号";
this.errorName[6]="顧客都道府県";
this.errorName[7]="顧客住所";


this.errorName[8]="顧客名";
this.errorName[9]="顧客名フリ";

this.errorName[10]="顧客電話番号";
this.errorName[11]="代理店コード";
this.errorName[12]="代理店コード";



this.errorData[0]=obj.keiy_name;
this.errorData[1]=obj.keiy_furi;
this.errorData[2]=obj.keiy_birthDate1;
this.errorData[3]=obj.keiy_birthDate2;
this.errorData[4]=obj.keiy_birthDate3;
this.errorData[5]=obj.keiy_zipcode;
this.errorData[6]=obj.keiy_pref;
this.errorData[7]=obj.keiy_addr;


this.errorData[8]=obj.keiy_name;
this.errorData[9]=obj.keiy_furi;

this.errorData[10]=obj.keiy_phone;
this.errorData[11]=obj.dairID;

this.errorKind[0]="名前";
this.errorKind[1]="全角カタカナ";
this.errorKind[2]="半角数字空";
this.errorKind[3]="半角数字空";
this.errorKind[4]="半角数字空";
this.errorKind[5]="郵便番号";
this.errorKind[6]="";
this.errorKind[7]="";
this.errorKind[8]="名前";
this.errorKind[9]="全角カタカナ";
this.errorKind[10]="半角数字空";
this.errorKind[11]="半角数字空";
this.errorKind[12]="半角数字空";
this.errorKind[13]="半角数字空";
this.errorKind[14]="";
this.errorKind[15]="";
this.errorKind[16]="";
var keiy_m_kubun=1;
this.errorKind[8]="スペース";
this.errorKind[9]="スペース";

this.errorKind[19]="スペース";
this.errorKind[20]="スペース";

this.errorKind[10]="電話";
this.errorKind[11]="";
this.errorKind[12]="";



this.errorFlag[0]=0;
this.errorFlag[1]=0;
this.errorFlag[2]=0;
this.errorFlag[3]=0;
this.errorFlag[4]=0;
this.errorFlag[5]=0;
this.errorFlag[6]=0;
this.errorFlag[7]=0;
this.errorFlag[8]=1;
this.errorFlag[9]=1;
this.errorFlag[10]=0;
this.errorFlag[11]=0;
this.errorFlag[12]=0;
this.errorFlag[13]=0;
this.errorFlag[14]=0;
this.errorFlag[15]=0;
this.errorFlag[16]=1;
this.errorFlag[17]=1;
this.errorFlag[18]=1;
this.errorFlag[19]=0;
this.errorFlag[20]=0;
this.errorFlag[21]=0;
this.errorFlag[22]=1;
this.errorFlag[24]=0;
this.errorFlag[25]=0;
this.errorFlag[26]=0;
this.errorFlag[27]=0;
this.errorFlag[28]=0;
this.errorFlag[29]=0;
this.errorFlag[30]=0;
this.errorFlag[31]=0;
this.errorFlag[32]=0;
this.errorFlag[33]=0;



	for(i = 0; i < 12; i++){if(!Checkindex(this.errorName[i],this.errorData[i],this.errorKind[i],this.errorFlag[i])){return false;}}


		return true;

}


function check_hhkn_data(){
	var obj = document.chkform;
	this.errorName     = Array();
	this.errorData     = Array();
	this.errorKind     = Array();
	this.errorFlag     = Array();
	this.errorNumber   = 23;
	


this.errorName[0]="契約者名";
this.errorName[1]="契約者名フリガナ";
this.errorName[2]="契約者生年月日の年";
this.errorName[3]="契約者生年月日の月";
this.errorName[4]="契約者生年月日の日";
this.errorName[5]="契約者郵便番号";
this.errorName[6]="契約者都道府県";
this.errorName[7]="契約者住所";

this.errorName[8]="被保険者名";
this.errorName[9]="被保険者名フリガナ";
this.errorName[10]="被保険者生年月日の年";
this.errorName[11]="被保険者生年月日の月";
this.errorName[12]="被保険者生年月日の日";
this.errorName[13]="被保険者郵便番号";
this.errorName[14]="被保険者都道府県";
this.errorName[15]="被保険者住所";

this.errorName[16]="商品選択";

this.errorName[17]="契約者名";
this.errorName[18]="契約者名フリ";
this.errorName[19]="被保険者名";
this.errorName[20]="被保険者名フリ";

this.errorName[21]="契約者電話番号";
this.errorName[22]="代理店コード";
this.errorName[23]="契約情報ID";



this.errorData[0]=obj.keiy_name;
this.errorData[1]=obj.keiy_furi;
this.errorData[2]=obj.keiy_birthDate1;
this.errorData[3]=obj.keiy_birthDate2;
this.errorData[4]=obj.keiy_birthDate3;
this.errorData[5]=obj.keiy_zipcode;
this.errorData[6]=obj.keiy_pref;
this.errorData[7]=obj.keiy_addr;
this.errorData[8]=obj.hhkn_name;
this.errorData[9]=obj.hhkn_furi;
this.errorData[10]=obj.hhkn_birthDate1;
this.errorData[11]=obj.hhkn_birthDate2;
this.errorData[12]=obj.hhkn_birthDate3;
this.errorData[13]=obj.hhkn_zipcode;
this.errorData[14]=obj.hhkn_pref;
this.errorData[15]=obj.hhkn_addr;
this.errorData[16]=obj.syhn_select.options[obj.syhn_select.selectedIndex];


this.errorData[17]=obj.keiy_name;
this.errorData[18]=obj.keiy_furi;
this.errorData[19]=obj.hhkn_name;
this.errorData[20]=obj.hhkn_furi;

this.errorData[21]=obj.keiy_phone;
this.errorData[22]=obj.dairID;

this.errorKind[0]="名前";
this.errorKind[1]="全角カタカナ";
this.errorKind[2]="半角数字空";
this.errorKind[3]="半角数字空";
this.errorKind[4]="半角数字空";
this.errorKind[5]="郵便番号";
this.errorKind[6]="";
this.errorKind[7]="";
this.errorKind[8]="名前";
this.errorKind[9]="全角カタカナ";
this.errorKind[10]="半角数字空";
this.errorKind[11]="半角数字空";
this.errorKind[12]="半角数字空";
this.errorKind[13]="郵便番号";
this.errorKind[14]="";
this.errorKind[15]="";
this.errorKind[16]="";
	var keiy_m_kubun = $("input[name='keiy_m_kubun']:checked").val();

if(keiy_m_kubun=="2")
{
this.errorKind[17]="スペース";
this.errorKind[18]="スペース";
}else{
this.errorKind[17]="";
this.errorKind[18]="";
}

this.errorKind[19]="スペース";
this.errorKind[20]="スペース";

this.errorKind[21]="電話";
this.errorKind[22]="";



this.errorFlag[0]=0;
this.errorFlag[1]=0;
this.errorFlag[2]=0;
this.errorFlag[3]=0;
this.errorFlag[4]=0;
this.errorFlag[5]=0;
this.errorFlag[6]=0;
this.errorFlag[7]=0;
this.errorFlag[8]=0;
this.errorFlag[9]=0;
this.errorFlag[10]=0;
this.errorFlag[11]=0;
this.errorFlag[12]=0;
this.errorFlag[13]=0;
this.errorFlag[14]=0;
this.errorFlag[15]=0;
this.errorFlag[16]=1;
this.errorFlag[17]=1;
this.errorFlag[18]=1;
this.errorFlag[19]=0;
this.errorFlag[20]=0;
this.errorFlag[21]=0;
this.errorFlag[22]=1;
this.errorFlag[23]=0;
this.errorFlag[24]=0;
this.errorFlag[25]=0;
this.errorFlag[26]=0;
this.errorFlag[27]=0;
this.errorFlag[28]=0;
this.errorFlag[29]=0;
this.errorFlag[30]=0;
this.errorFlag[31]=0;
this.errorFlag[32]=0;
this.errorFlag[33]=0;



	for(i = 0; i < 2; i++){if(!Checkindex(this.errorName[i],this.errorData[i],this.errorKind[i],this.errorFlag[i])){return false;}}

	if(keiy_m_kubun == "2"){
		for(i = 3; i < 7; i++){if(!Checkindex(this.errorName[i],this.errorData[i],this.errorKind[i],this.errorFlag[i])){return false;}}
	}else{
		for(i = 27; i < 30; i++){if(!Checkindex(this.errorName[i],this.errorData[i],this.errorKind[i],this.errorFlag[i])){return false;}}
	}


	for(i = 7; i < this.errorNumber; i++){if(!Checkindex(this.errorName[i],this.errorData[i],this.errorKind[i],this.errorFlag[i])){return false;}}
//	if(this.errorData[15].value!= "6"){
//		switch(this.errorData[15].value){
//		case "1":case "2":case "3":
//			for(i = 17; i < 19; i++){if(!Checkindex(this.errorName[i],this.errorData[i],this.errorKind[i],this.errorFlag[i])){return false;}}
//			break;
//		case "5":
//			for(i = 16; i < 19; i++){if(!Checkindex(this.errorName[i],this.errorData[i],this.errorKind[i],this.errorFlag[i])){return false;}}
//			break;
//		case "6":
//			break;
//		}
//	}


//var h_adult = obj.hhkn_adult.options[obj.hhkn_adult.selectedIndex];
//var h_child = obj.hhkn_child.options[obj.hhkn_child.selectedIndex];
//
//var h_ac_num = parseInt(h_adult.value)+parseInt(h_child.value);
//if(h_ac_num == 0)
//{
//		alert("入居者人数を再度確認してください。");return false;
//}


//var k_tatemono = obj.keiy_tatemono_kubun.options[obj.keiy_tatemono_kubun.selectedIndex];
//if(k_tatemono.value=="号室あり" && this.errorData[2].value!=3){
//if(!Checkindex(this.errorName[30],this.errorData[30],this.errorKind[30],this.errorFlag[30])){return false;}	
//if(!Checkindex(this.errorName[31],this.errorData[31],this.errorKind[31],this.errorFlag[31])){return false;}	
//}
//
//this.errorData[34]=obj.bild_furi;
//this.errorName[34]="管理戸室名カナ";
//this.errorKind[34]="全角カタカナ";
//this.errorFlag[34]=1;
//
//
//var bild_touroku = obj.bild_touroku.checked;
//if(bild_touroku==true)
//{
//if(!Checkindex(this.errorName[34],this.errorData[34],this.errorKind[34],this.errorFlag[34])){return false;}	
//}
//
//var h_tatemono = obj.hhkn_tatemono_kubun.options[obj.hhkn_tatemono_kubun.selectedIndex];
//if(h_tatemono.value=="号室あり"){
//if(!Checkindex(this.errorName[32],this.errorData[32],this.errorKind[32],this.errorFlag[32])){return false;}	
//if(!Checkindex(this.errorName[33],this.errorData[33],this.errorKind[33],this.errorFlag[33])){return false;}	
//}
//
//var dt1 = new Date();
////var moushikomiDate = obj.knsy_moushikomiDate.value.split('/'); // /を除去
////
////var dt2 = new Date(moushikomiDate[0], moushikomiDate[1] - 1,moushikomiDate[2],23,59,59,999);
////if(dt1.getTime() > dt2.getTime()) {
////	alert("申込日を再度確認してください。\n申込日は今日の日付けと同日か、それ以降の日付で入力して下さい。");
////	return false;
////}
//
//	if(obj.knsy_moushikomiDate.value!="")
//	{
//	var moushikomiDate = obj.knsy_moushikomiDate.value.split('/'); // /を除去
//	var dtA = dt1.getDate();
//	var dt3 = new Date(moushikomiDate[0], parseInt(moushikomiDate[1])-1,moushikomiDate[2],0,59,59,999);
//	if(dtA>7)
//	{
//		var dt2 = new Date(dt1.getFullYear(), dt1.getMonth()-1,1);
//	}else{
//		var dt2 = new Date(dt1.getFullYear(), dt1.getMonth()-1,1);
//	}
////		 if(dt3.getTime() < dt2.getTime()){
////			alert("申込日を再度確認してください。\n申込日は前月1日以降の日付で入力して下さい。");
////			return false;
////		}else if(dt3.getTime() > dt1.getTime()) {
////			alert("申込日を再度確認してください。\申込日は明日以降の日付は入力できません。");
////			return false;
////		}
//	
//	}
//
//	if(obj.knsy_keiyakuDate.value!="")
//	{
//	
//		if(obj.knsy_moushikomiDate.value=="")
//		{
//			alert("申込日を入力してください。");
//			return false;
//		}else{
//			var moushikomiDate = obj.knsy_moushikomiDate.value.split('/'); // /を除去
//			var keiyakuDate = obj.knsy_keiyakuDate.value.split('/'); // /を除去
//			var dt2 = new Date(moushikomiDate[0], parseInt(moushikomiDate[1])-1,moushikomiDate[2],23,59,59,999);
//			var dt3 = new Date(keiyakuDate[0], parseInt(keiyakuDate[1])-1,keiyakuDate[2],23,59,59,999);
//			
//			if(dt3.getTime() < dt2.getTime()) 
//			{
//				alert("保険開始日を再度確認してください。\n保険開始日は申込日以降の日付で入力して下さい。");
//				return false;
//			}
//		}
//	}
//	
//var keiy_miseinen = obj.keiy_miseinen.checked;
//	
//		if(obj.keiy_age.value!="" && obj.keiy_age.value!="undefined")
//		{
//			if(obj.keiy_age.value<20 && keiy_miseinen==false)
//			{
//				alert("未成年は契約できません。");
//				return false;
//			}else if(obj.keiy_age.valu>100){
//				alert("年齢が100歳を超えています。");
//				return false;
//			}
//		}
		return true;

}

function check_rDate(obj){
//var dt1 = new Date();
var dt = new Date();
var limitdate = obj.limitdate.value.split('-'); // /を除去
var predate = obj.predate.value.split('-'); // /を除去
var dt1 = new Date(limitdate[0], limitdate[1]-1,limitdate[2],23,59,59,999);
var dt2 = new Date(predate[0], predate[1]-1,predate[2],0,0,0,0);
if(!Checkindex("領収日",obj.knsy_ryousyuuDate,"日付",0)){return false;}else{

var ryousyuuDate = obj.knsy_ryousyuuDate.value.split('/'); // /を除去
var dt3 = new Date(ryousyuuDate[0], ryousyuuDate[1]-1,ryousyuuDate[2],0,0,0,1);

	if(dt3.getTime() > dt1.getTime()) 
	{
		alert("領収日を再度確認してください。\n領収日は保険開始日以前の日付で入力して下さい。");
		return false;
	}else if(dt3.getTime() < dt2.getTime()) {
		alert("領収日を再度確認してください。\領収日は申込日以降の日付で入力して下さい。");
		return false;

//	}else if(dt3.getTime() > dt.getTime()) {
//		alert("領収日を再度確認してください。\領収日は明日以降の日付は入力できません。");
//		return false;

	}else{
		return true;
	}
}

}




function check_w_hhkn_data(){
	var obj = document.chkform;
	this.errorName     = Array();
	this.errorData     = Array();
	this.errorKind     = Array();
	this.errorFlag     = Array();
	this.errorNumber   = 26;
	


this.errorName[0]="契約者名";
this.errorName[1]="契約者名フリガナ";
this.errorName[2]="契約者区分";
this.errorName[3]="契約者生年月日の年号";
this.errorName[4]="契約者生年月日の年";
this.errorName[5]="契約者生年月日の月";
this.errorName[6]="契約者生年月日の日";
this.errorName[7]="契約者郵便番号";
this.errorName[8]="契約者都道府県";
this.errorName[9]="契約者住所";

this.errorName[10]="被保険者名";
this.errorName[11]="被保険者名フリガナ";
this.errorName[12]="被保険者生年月日の年号";
this.errorName[13]="被保険者生年月日の年";
this.errorName[14]="被保険者生年月日の月";
this.errorName[15]="被保険者生年月日の日";
this.errorName[16]="被保険者郵便番号";
this.errorName[17]="被保険者都道府県";
this.errorName[18]="被保険者住所";

this.errorName[19]="商品選択";

this.errorName[20]="契約者名";
this.errorName[21]="契約者名フリ";
this.errorName[22]="被保険者名";
this.errorName[23]="被保険者名フリ";
//this.errorName[25]="管理戸室名カナ";
this.errorName[24]="契約者電話番号";
this.errorName[25]="被保険者電話番号";


this.errorName[27]="代表者名";
this.errorName[28]="代表者名フリ";
this.errorName[29]="役職";

this.errorName[30]="契約者建物名";
this.errorName[31]="契約者号室番号";
this.errorName[32]="被保険者建物名";
this.errorName[33]="被保険者号室番号";








this.errorData[0]=obj.keiy_name;
this.errorData[1]=obj.keiy_furi;
this.errorData[2]=obj.keiy_m_kubun;
this.errorData[3]=obj.keiy_birthDate0.options[obj.keiy_birthDate0.selectedIndex];
this.errorData[4]=obj.keiy_birthDate1;
this.errorData[5]=obj.keiy_birthDate2;
this.errorData[6]=obj.keiy_birthDate3;
this.errorData[7]=obj.keiy_zipcode;
this.errorData[8]=obj.keiy_pref;
this.errorData[9]=obj.keiy_addr;
this.errorData[10]=obj.hhkn_name;
this.errorData[11]=obj.hhkn_furi;
this.errorData[12]=obj.hhkn_birthDate0.options[obj.hhkn_birthDate0.selectedIndex];
this.errorData[13]=obj.hhkn_birthDate1;
this.errorData[14]=obj.hhkn_birthDate2;
this.errorData[15]=obj.hhkn_birthDate3;
this.errorData[16]=obj.hhkn_zipcode;
this.errorData[17]=obj.hhkn_pref;
this.errorData[18]=obj.hhkn_addr;
this.errorData[19]=obj.syhn_select.options[obj.syhn_select.selectedIndex];


this.errorData[27]=obj.keiy_dname;
this.errorData[28]=obj.keiy_dfuri;
this.errorData[29]=obj.keiy_yakusyoku;


this.errorData[20]=obj.keiy_name;
this.errorData[21]=obj.keiy_furi;
this.errorData[22]=obj.hhkn_name;
this.errorData[23]=obj.hhkn_furi;
//this.errorData[25]=obj.bild_furi;
this.errorData[24]=obj.keiy_phone;
this.errorData[25]=obj.hhkn_phone;

this.errorData[30]=obj.keiy_build;
this.errorData[31]=obj.keiy_goushitsu;
this.errorData[32]=obj.hhkn_build;
this.errorData[33]=obj.hhkn_goushitsu;



this.errorKind[0]="名前";
this.errorKind[1]="全角カタカナ";
this.errorKind[2]="";
this.errorKind[3]="";
this.errorKind[4]="半角数字空";
this.errorKind[5]="半角数字空";
this.errorKind[6]="半角数字空";
this.errorKind[7]="郵便番号";
this.errorKind[8]="";
this.errorKind[9]="";
this.errorKind[10]="名前";
this.errorKind[11]="全角カタカナ";
this.errorKind[12]="";
this.errorKind[13]="半角数字空";
this.errorKind[14]="半角数字空";
this.errorKind[15]="半角数字空";
this.errorKind[16]="郵便番号";
this.errorKind[17]="";
this.errorKind[18]="";
this.errorKind[19]="";
var keiy_m_kubun = $("input[name='keiy_m_kubun']:checked").val();

if(keiy_m_kubun!=3)
{
this.errorKind[20]="スペース";
this.errorKind[21]="スペース";
}else{
this.errorKind[20]="";
this.errorKind[21]="";
}

this.errorKind[22]="スペース";
this.errorKind[23]="スペース";
this.errorKind[24]="電話";
this.errorKind[25]="電話";

this.errorKind[27]="名前";
this.errorKind[28]="全角カタカナ";
this.errorKind[29]="";

this.errorKind[30]="";
this.errorKind[31]="";
this.errorKind[32]="";
this.errorKind[33]="";








this.errorFlag[0]=0;
this.errorFlag[1]=0;
this.errorFlag[2]=0;
this.errorFlag[3]=0;
this.errorFlag[4]=0;
this.errorFlag[5]=0;
this.errorFlag[6]=0;
this.errorFlag[7]=0;
this.errorFlag[8]=0;
this.errorFlag[9]=0;
this.errorFlag[10]=0;
this.errorFlag[11]=0;
this.errorFlag[12]=0;
this.errorFlag[13]=0;
this.errorFlag[14]=0;
this.errorFlag[15]=0;
this.errorFlag[16]=0;
this.errorFlag[17]=0;
this.errorFlag[18]=0;
this.errorFlag[19]=0;
this.errorFlag[20]=0;
this.errorFlag[21]=0;
this.errorFlag[22]=0;
this.errorFlag[23]=0;
this.errorFlag[24]=0;
this.errorFlag[25]=0;
this.errorFlag[26]=0;
this.errorFlag[27]=0;
this.errorFlag[28]=0;
this.errorFlag[29]=0;
this.errorFlag[30]=0;
this.errorFlag[31]=0;
this.errorFlag[32]=0;
this.errorFlag[33]=0;



	for(i = 0; i < 2; i++){if(!Checkindex(this.errorName[i],this.errorData[i],this.errorKind[i],this.errorFlag[i])){return false;}}

	if($("input[name='keiy_m_kubun']:checked").val() != "3"){
		for(i = 3; i < 7; i++){if(!Checkindex(this.errorName[i],this.errorData[i],this.errorKind[i],this.errorFlag[i])){return false;}}
	}else{
		for(i = 27; i < 30; i++){if(!Checkindex(this.errorName[i],this.errorData[i],this.errorKind[i],this.errorFlag[i])){return false;}}
	}


	for(i = 7; i < this.errorNumber; i++){if(!Checkindex(this.errorName[i],this.errorData[i],this.errorKind[i],this.errorFlag[i])){return false;}}
//	if(this.errorData[15].value!= "6"){
//		switch(this.errorData[15].value){
//		case "1":case "2":case "3":
//			for(i = 17; i < 19; i++){if(!Checkindex(this.errorName[i],this.errorData[i],this.errorKind[i],this.errorFlag[i])){return false;}}
//			break;
//		case "5":
//			for(i = 16; i < 19; i++){if(!Checkindex(this.errorName[i],this.errorData[i],this.errorKind[i],this.errorFlag[i])){return false;}}
//			break;
//		case "6":
//			break;
//		}
//	}

//var h_adult = obj.hhkn_adult.options[obj.hhkn_adult.selectedIndex];
//var h_child = obj.hhkn_child.options[obj.hhkn_child.selectedIndex];
//
//var h_ac_num = parseInt(h_adult.value)+parseInt(h_child.value);
//if(h_ac_num == 0)
//{
//		alert("入居者人数を再度確認してください。");return false;
//}

//var k_tatemono = obj.keiy_tatemono_kubun.options[obj.keiy_tatemono_kubun.selectedIndex];
//if(k_tatemono.value=="号室あり" && this.errorData[2].value!=3){
//if(!Checkindex(this.errorName[30],this.errorData[30],this.errorKind[30],this.errorFlag[30])){return false;}	
//if(!Checkindex(this.errorName[31],this.errorData[31],this.errorKind[31],this.errorFlag[31])){return false;}	
//}
//

var h_tatemono = obj.hhkn_tatemono_kubun.options[obj.hhkn_tatemono_kubun.selectedIndex];
if(h_tatemono.value=="号室あり"){
if(!Checkindex(this.errorName[32],this.errorData[32],this.errorKind[32],this.errorFlag[32])){return false;}	
if(!Checkindex(this.errorName[33],this.errorData[33],this.errorKind[33],this.errorFlag[33])){return false;}	
}

var dt1 = new Date();
//var moushikomiDate = obj.knsy_moushikomiDate.value.split('/'); // /を除去
//
//var dt2 = new Date(moushikomiDate[0], moushikomiDate[1] - 1,moushikomiDate[2],23,59,59,999);
//if(dt1.getTime() > dt2.getTime()) {
//	alert("申込日を再度確認してください。\n申込日は今日の日付けと同日か、それ以降の日付で入力して下さい。");
//	return false;
//}


	if(obj.knsy_moushikomiDate.value!="")
	{
	var moushikomiDate = obj.knsy_moushikomiDate.value.split('/'); // /を除去
	var dtA = dt1.getDate();
	var dt3 = new Date(moushikomiDate[0], parseInt(moushikomiDate[1])-1,moushikomiDate[2],0,59,59,999);
	if(dtA>7)
	{
		var dt2 = new Date(dt1.getFullYear(), dt1.getMonth()-1,1);
	}else{
		var dt2 = new Date(dt1.getFullYear(), dt1.getMonth()-1,1);
	}
//		 if(dt3.getTime() < dt2.getTime()){
//			alert("申込日を再度確認してください。\n申込日は前月1日以降の日付で入力して下さい。");
//			return false;
//		}else if(dt3.getTime() > dt1.getTime()) {
//			alert("申込日を再度確認してください。\申込日は明日以降の日付は入力できません。");
//			return false;
//		}
	
	}

	if(obj.knsy_keiyakuDate.value!="")
	{
	
		if(obj.knsy_moushikomiDate.value=="")
		{
			alert("申込日を入力してください。");
			return false;
		}else{
			var moushikomiDate = obj.knsy_moushikomiDate.value.split('/'); // /を除去
			var keiyakuDate = obj.knsy_keiyakuDate.value.split('/'); // /を除去
			var dt2 = new Date(moushikomiDate[0], parseInt(moushikomiDate[1])-1,moushikomiDate[2],23,59,59,999);
			var dt3 = new Date(keiyakuDate[0], parseInt(keiyakuDate[1])-1,keiyakuDate[2],23,59,59,999);
			
			if(dt3.getTime() < dt2.getTime()) 
			{
				alert("保険開始日を再度確認してください。\n保険開始日は申込日以降の日付で入力して下さい。");
				return false;
			}
		}
	}
	
var keiy_miseinen = obj.keiy_miseinen.checked;
		if(obj.keiy_age.value!="" && obj.keiy_age.value!="undefined")
		{
			if(obj.keiy_age.value<20 && keiy_miseinen==false)
			{
				alert("未成年は契約できません。");
				return false;
			}else if(obj.keiy_age.valu>100){
				alert("年齢が100歳を超えています。");
				return false;
			}
		}
	return true;
}




	
// 入力完了時 //
function check_n_hhkn_data(data){
	var obj = document.chkform;
	this.errorName     = Array();
	this.errorData     = Array();
	this.errorKind     = Array();
	this.errorFlag     = Array();
	this.errorNumber   = 26;
	


this.errorName[0]="契約者名";
this.errorName[1]="契約者名フリガナ";
this.errorName[2]="契約者区分";
this.errorName[3]="契約者生年月日の年号";
this.errorName[4]="契約者生年月日の年";
this.errorName[5]="契約者生年月日の月";
this.errorName[6]="契約者生年月日の日";
this.errorName[7]="契約者郵便番号";
this.errorName[8]="契約者都道府県";
this.errorName[9]="契約者住所";


this.errorName[12]="被保険者生年月日の年号";
this.errorName[13]="被保険者生年月日の年";
this.errorName[14]="被保険者生年月日の月";
this.errorName[15]="被保険者生年月日の日";


this.errorName[18]="被保険者住所";
this.errorName[19]="商品選択";
this.errorName[20]="契約者名";
this.errorName[21]="契約者名フリ";
//this.errorName[25]="管理戸室名カナ";
this.errorName[24]="契約者電話番号";
this.errorName[25]="被保険者電話番号";


this.errorName[27]="代表者名";
this.errorName[28]="代表者名フリ";
this.errorName[29]="役職";
this.errorName[30]="契約者建物名";
this.errorName[31]="契約者号室番号";
this.errorName[32]="被保険者建物名";
this.errorName[33]="被保険者号室番号";







this.errorData[0]=obj.keiy_name;
this.errorData[1]=obj.keiy_furi;
this.errorData[2]=obj.keiy_m_kubun;
this.errorData[3]=obj.keiy_birthDate0.options[obj.keiy_birthDate0.selectedIndex];
this.errorData[4]=obj.keiy_birthDate1;
this.errorData[5]=obj.keiy_birthDate2;
this.errorData[6]=obj.keiy_birthDate3;
this.errorData[7]=obj.keiy_zipcode;
this.errorData[8]=obj.keiy_pref;
this.errorData[9]=obj.keiy_addr;


this.errorData[12]=obj.hhkn_birthDate0.options[obj.hhkn_birthDate0.selectedIndex];
this.errorData[13]=obj.hhkn_birthDate1;
this.errorData[14]=obj.hhkn_birthDate2;
this.errorData[15]=obj.hhkn_birthDate3;


this.errorData[18]=obj.hhkn_addr;
this.errorData[19]=obj.syhn_select.options[obj.syhn_select.selectedIndex];
this.errorData[20]=obj.keiy_name;
this.errorData[21]=obj.keiy_furi;


this.errorData[24]=obj.keiy_phone;
this.errorData[25]=obj.hhkn_phone;

this.errorData[27]=obj.keiy_dname;
this.errorData[28]=obj.keiy_dfuri;
this.errorData[29]=obj.keiy_yakusyoku;

this.errorData[30]=obj.keiy_build;
this.errorData[31]=obj.keiy_goushitsu;
this.errorData[32]=obj.hhkn_build;
this.errorData[33]=obj.hhkn_goushitsu;


this.errorKind[0]="名前";
this.errorKind[1]="全角カタカナ";
this.errorKind[2]="";
this.errorKind[3]="";
this.errorKind[4]="半角数字空";
this.errorKind[5]="半角数字空";
this.errorKind[6]="半角数字空";
this.errorKind[7]="郵便番号";
this.errorKind[8]="";
this.errorKind[9]="";
this.errorKind[10]="名前";
this.errorKind[11]="全角カタカナ";
this.errorKind[12]="";
this.errorKind[13]="半角数字空";
this.errorKind[14]="半角数字空";
this.errorKind[15]="半角数字空";
this.errorKind[16]="半角数字空";
this.errorKind[17]="";
this.errorKind[18]="";
this.errorKind[19]="";
var keiy_m_kubun = $("input[name='keiy_m_kubun']:checked").val();

if(keiy_m_kubun!=3)
{
this.errorKind[20]="スペース";
this.errorKind[21]="スペース";
}else{
this.errorKind[20]="";
this.errorKind[21]="";
}

this.errorKind[22]="スペース";
this.errorKind[23]="スペース";
this.errorKind[24]="電話";
this.errorKind[25]="電話";

this.errorKind[27]="名前";
this.errorKind[28]="全角カタカナ";
this.errorKind[29]="";

this.errorKind[30]="";
this.errorKind[31]="";
this.errorKind[32]="";
this.errorKind[33]="";


this.errorFlag[0]=0;
this.errorFlag[1]=0;
this.errorFlag[2]=0;
this.errorFlag[3]=0;
this.errorFlag[4]=0;
this.errorFlag[5]=0;
this.errorFlag[6]=0;
this.errorFlag[7]=0;
this.errorFlag[8]=0;
this.errorFlag[9]=0;
this.errorFlag[10]=0;
this.errorFlag[11]=0;
this.errorFlag[12]=0;
this.errorFlag[13]=0;
this.errorFlag[14]=0;
this.errorFlag[15]=0;
this.errorFlag[16]=0;
this.errorFlag[17]=0;
this.errorFlag[18]=0;
this.errorFlag[19]=0;
this.errorFlag[20]=0;
this.errorFlag[21]=0;
this.errorFlag[22]=0;
this.errorFlag[23]=0;
this.errorFlag[24]=0;
this.errorFlag[25]=0;
this.errorFlag[26]=0;
this.errorFlag[27]=0;
this.errorFlag[28]=0;
this.errorFlag[29]=0;
this.errorFlag[30]=0;
this.errorFlag[31]=0;
this.errorFlag[32]=0;
this.errorFlag[33]=0;


this.errorData[34]=obj.hhkn_name;
this.errorName[34]="被保険者名";
this.errorKind[34]="名前";
this.errorFlag[34]=0;

this.errorData[35]=obj.hhkn_furi;
this.errorName[35]="被保険者名フリ";
this.errorKind[35]="全角カタカナ";
this.errorFlag[35]=0;



	for(i = 0; i < 2; i++){if(!Checkindex(this.errorName[i],this.errorData[i],this.errorKind[i],this.errorFlag[i])){return false;}}

	if($("input[name='keiy_m_kubun']:checked").val() != "3"){
		for(i = 3; i < 7; i++){if(!Checkindex(this.errorName[i],this.errorData[i],this.errorKind[i],this.errorFlag[i])){return false;}}
	}else{
		for(i = 27; i < 30; i++){if(!Checkindex(this.errorName[i],this.errorData[i],this.errorKind[i],this.errorFlag[i])){return false;}}
	}

	if(data==1)
	{
		for(i = 12; i < 16; i++){if(!Checkindex(this.errorName[i],this.errorData[i],this.errorKind[i],this.errorFlag[i])){return false;}}
	}


	if(data==2)
	{
if(!Checkindex(this.errorName[35],this.errorData[35],this.errorKind[35],this.errorFlag[35])){return false;}	
	}else if(data==3){
if(!Checkindex(this.errorName[34],this.errorData[34],this.errorKind[34],this.errorFlag[34])){return false;}	
}


	
	for(i = 18; i < 22; i++){if(!Checkindex(this.errorName[i],this.errorData[i],this.errorKind[i],this.errorFlag[i])){return false;}}
	for(i = 24; i < 26; i++){if(!Checkindex(this.errorName[i],this.errorData[i],this.errorKind[i],this.errorFlag[i])){return false;}}

var h_tatemono = obj.hhkn_tatemono_kubun.options[obj.hhkn_tatemono_kubun.selectedIndex];
if(h_tatemono.value=="号室あり"){
if(!Checkindex(this.errorName[32],this.errorData[32],this.errorKind[32],this.errorFlag[32])){return false;}	
if(!Checkindex(this.errorName[33],this.errorData[33],this.errorKind[33],this.errorFlag[33])){return false;}	
}

var dt1 = new Date();


	if(obj.knsy_moushikomiDate.value!="")
	{
	var moushikomiDate = obj.knsy_moushikomiDate.value.split('/'); // /を除去
	var dtA = dt1.getDate();
	var dt3 = new Date(moushikomiDate[0], parseInt(moushikomiDate[1])-1,moushikomiDate[2],0,59,59,999);
	if(dtA>7)
	{
		var dt2 = new Date(dt1.getFullYear(), dt1.getMonth()-1,1);
	}else{
		var dt2 = new Date(dt1.getFullYear(), dt1.getMonth()-1,1);
	}
//		 if(dt3.getTime() < dt2.getTime()){
//			alert("申込日を再度確認してください。\n申込日は前月1日以降の日付で入力して下さい。");
//			return false;
//		}else if(dt3.getTime() > dt1.getTime()) {
//			alert("申込日を再度確認してください。\申込日は明日以降の日付は入力できません。");
//			return false;
//		}
	
	}

	if(obj.knsy_keiyakuDate.value!="")
	{
	
		if(obj.knsy_moushikomiDate.value=="")
		{
			alert("申込日を入力してください。");
			return false;
		}else{
			var moushikomiDate = obj.knsy_moushikomiDate.value.split('/'); // /を除去
			var keiyakuDate = obj.knsy_keiyakuDate.value.split('/'); // /を除去
			var dt2 = new Date(moushikomiDate[0], parseInt(moushikomiDate[1])-1,moushikomiDate[2],23,59,59,999);
			var dt3 = new Date(keiyakuDate[0], parseInt(keiyakuDate[1])-1,keiyakuDate[2],23,59,59,999);
			
			if(dt3.getTime() < dt2.getTime()) 
			{
				alert("保険開始日を再度確認してください。\n保険開始日は申込日以降の日付で入力して下さい。");
				return false;
			}
		}
	}
	
var keiy_miseinen = obj.keiy_miseinen.checked;
		if(obj.keiy_age.value!="" && obj.keiy_age.value!="undefined")
		{
			if(obj.keiy_age.value<20 && keiy_miseinen==false)
			{
				alert("未成年は契約できません。");
				return false;
			}else if(obj.keiy_age.valu>100){
				alert("年齢が100歳を超えています。");
				return false;
			}
		}
	
	return true;
}







// 承認完了時 //
function check_st_hhkn_data(){
	var obj = document.chkform;
	this.errorName     = Array();
	this.errorData     = Array();
	this.errorKind     = Array();
	this.errorFlag     = Array();
	this.errorNumber   = 26;
	


this.errorName[0]="契約者名";
this.errorName[1]="契約者名フリ";
this.errorName[2]="契約者区分";
this.errorName[3]="契約者生年月日の年号";
this.errorName[4]="契約者生年月日の年";
this.errorName[5]="契約者生年月日の月";
this.errorName[6]="契約者生年月日の日";
this.errorName[7]="契約者郵便番号";
this.errorName[8]="契約者都道府県";
this.errorName[9]="契約者住所";

this.errorName[10]="被保険者名";
this.errorName[11]="被保険者名フリ";
this.errorName[12]="被保険者生年月日の年号";
this.errorName[13]="被保険者生年月日の年";
this.errorName[14]="被保険者生年月日の月";
this.errorName[15]="被保険者生年月日の日";
this.errorName[16]="被保険者郵便番号";
this.errorName[17]="被保険者都道府県";
this.errorName[18]="被保険者住所";

this.errorName[19]="商品選択";

this.errorName[20]="契約者名";
this.errorName[21]="契約者名フリ";
this.errorName[22]="被保険者名";
this.errorName[23]="被保険者名フリ";
this.errorName[24]="書損理由";
this.errorName[25]="書損扱承諾";

this.errorName[27]="代表者名";
this.errorName[28]="代表者名フリ";
this.errorName[29]="役職";



this.errorName[30]="契約者建物名";
this.errorName[31]="契約者号室番号";
this.errorName[32]="被保険者建物名";
this.errorName[33]="被保険者号室番号";








this.errorData[0]=obj.keiy_name;
this.errorData[1]=obj.keiy_furi;
this.errorData[2]=obj.keiy_m_kubun;
this.errorData[3]=obj.keiy_birthDate0.options[obj.keiy_birthDate0.selectedIndex];
this.errorData[4]=obj.keiy_birthDate1;
this.errorData[5]=obj.keiy_birthDate2;
this.errorData[6]=obj.keiy_birthDate3;
this.errorData[7]=obj.keiy_zipcode;
this.errorData[8]=obj.keiy_pref;
this.errorData[9]=obj.keiy_addr;
this.errorData[10]=obj.hhkn_name;
this.errorData[11]=obj.hhkn_furi;
this.errorData[12]=obj.hhkn_birthDate0.options[obj.hhkn_birthDate0.selectedIndex];
this.errorData[13]=obj.hhkn_birthDate1;
this.errorData[14]=obj.hhkn_birthDate2;
this.errorData[15]=obj.hhkn_birthDate3;
this.errorData[16]=obj.hhkn_zipcode;
this.errorData[17]=obj.hhkn_pref;
this.errorData[18]=obj.hhkn_addr;
this.errorData[19]=obj.syhn_select.options[obj.syhn_select.selectedIndex];



this.errorData[20]=obj.keiy_name;
this.errorData[21]=obj.keiy_furi;
this.errorData[22]=obj.hhkn_name;
this.errorData[23]=obj.hhkn_furi;
this.errorData[24]=obj.ryys_syoson_reason;
this.errorData[25]=document.getElementById("ryys_syoson_check");

this.errorData[27]=obj.keiy_dname;
this.errorData[28]=obj.keiy_dfuri;
this.errorData[29]=obj.keiy_yakusyoku;


this.errorData[30]=obj.keiy_build;
this.errorData[31]=obj.keiy_goushitsu;
this.errorData[32]=obj.hhkn_build;
this.errorData[33]=obj.hhkn_goushitsu;



this.errorKind[0]="名前";
this.errorKind[1]="全角カタカナ";
this.errorKind[2]="セレクト";
this.errorKind[3]="セレクト";
this.errorKind[4]="半角数字空";
this.errorKind[5]="半角数字空";
this.errorKind[6]="半角数字空";
this.errorKind[7]="郵便番号";
this.errorKind[8]="";
this.errorKind[9]="";
this.errorKind[10]="名前";
this.errorKind[11]="全角カタカナ";
this.errorKind[12]="セレクト";
this.errorKind[13]="半角数字空";
this.errorKind[14]="半角数字空";
this.errorKind[15]="半角数字空";
this.errorKind[16]="半角数字空";
this.errorKind[17]="";
this.errorKind[18]="";
this.errorKind[19]="セレクト";
var keiy_m_kubun = $("input[name='keiy_m_kubun']:checked").val();

if(keiy_m_kubun!=3)
{
this.errorKind[20]="スペース";
this.errorKind[21]="スペース";
}else{
this.errorKind[20]="";
this.errorKind[21]="";
}

this.errorKind[22]="スペース";
this.errorKind[23]="スペース";
this.errorKind[24]="";
this.errorKind[25]="";


this.errorKind[27]="名前";
this.errorKind[28]="全角カタカナ";
this.errorKind[29]="";

this.errorKind[30]="";
this.errorKind[31]="";
this.errorKind[32]="";
this.errorKind[33]="";



this.errorFlag[0]=0;
this.errorFlag[1]=0;
this.errorFlag[2]=0;
this.errorFlag[3]=0;
this.errorFlag[4]=0;
this.errorFlag[5]=0;
this.errorFlag[6]=0;
this.errorFlag[7]=0;
this.errorFlag[8]=0;
this.errorFlag[9]=0;
this.errorFlag[10]=0;
this.errorFlag[11]=0;
this.errorFlag[12]=0;
this.errorFlag[13]=0;
this.errorFlag[14]=0;
this.errorFlag[15]=0;
this.errorFlag[16]=0;
this.errorFlag[17]=0;
this.errorFlag[18]=0;
this.errorFlag[19]=0;
this.errorFlag[20]=0;
this.errorFlag[21]=0;
this.errorFlag[22]=0;
this.errorFlag[23]=0;

var ck = $("#ryys_syoson_check").prop('checked');
if(ck==true)
{
this.errorFlag[24]=1;
}else{
this.errorFlag[24]=0;
}

this.errorFlag[25]=0;
this.errorFlag[26]=0;
this.errorFlag[27]=0;
this.errorFlag[28]=0;
this.errorFlag[29]=0;
this.errorFlag[30]=0;
this.errorFlag[31]=0;
this.errorFlag[32]=0;
this.errorFlag[33]=0;




	for(i = 0; i < 2; i++){if(!Checkindex(this.errorName[i],this.errorData[i],this.errorKind[i],this.errorFlag[i])){return false;}}

	if($("input[name='keiy_m_kubun']:checked").val() != "3"){
		for(i = 3; i < 7; i++){if(!Checkindex(this.errorName[i],this.errorData[i],this.errorKind[i],this.errorFlag[i])){return false;}}
	}else{
		for(i = 27; i < 30; i++){if(!Checkindex(this.errorName[i],this.errorData[i],this.errorKind[i],this.errorFlag[i])){return false;}}
	}


	for(i = 7; i < this.errorNumber; i++){if(!Checkindex(this.errorName[i],this.errorData[i],this.errorKind[i],this.errorFlag[i])){return false;}}
//	if(this.errorData[15].value!= "6"){
//		switch(this.errorData[15].value){
//		case "1":case "2":case "3":
//			for(i = 17; i < 19; i++){if(!Checkindex(this.errorName[i],this.errorData[i],this.errorKind[i],this.errorFlag[i])){return false;}}
//			break;
//		case "5":
//			for(i = 16; i < 19; i++){if(!Checkindex(this.errorName[i],this.errorData[i],this.errorKind[i],this.errorFlag[i])){return false;}}
//			break;
//		case "6":
//			break;
//		}
//	}

//var h_adult = obj.hhkn_adult.options[obj.hhkn_adult.selectedIndex];
//var h_child = obj.hhkn_child.options[obj.hhkn_child.selectedIndex];
//
//var h_ac_num = parseInt(h_adult.value)+parseInt(h_child.value);
//if(h_ac_num == 0)
//{
//		alert("入居者人数を再度確認してください。");return false;
//}
//





var h_tatemono = obj.hhkn_tatemono_kubun.options[obj.hhkn_tatemono_kubun.selectedIndex];
if(h_tatemono.value=="号室あり"){
if(!Checkindex(this.errorName[32],this.errorData[32],this.errorKind[32],this.errorFlag[32])){return false;}	
if(!Checkindex(this.errorName[33],this.errorData[33],this.errorKind[33],this.errorFlag[33])){return false;}	
}

var dt1 = new Date();
//var moushikomiDate = obj.knsy_moushikomiDate.value.split('/'); // /を除去
//
//var dt2 = new Date(moushikomiDate[0], moushikomiDate[1] - 1,moushikomiDate[2],23,59,59,999);
//if(dt1.getTime() > dt2.getTime()) {
//	alert("申込日を再度確認してください。\n申込日は今日の日付けと同日か、それ以降の日付で入力して下さい。");
//	return false;
//}

	if(obj.knsy_moushikomiDate.value!="")
	{
	var moushikomiDate = obj.knsy_moushikomiDate.value.split('/'); // /を除去
	var dtA = dt1.getDate();
	var dt3 = new Date(moushikomiDate[0], parseInt(moushikomiDate[1])-1,moushikomiDate[2],0,59,59,999);
	if(dtA>7)
	{
		var dt2 = new Date(dt1.getFullYear(), dt1.getMonth()-1,1);
	}else{
		var dt2 = new Date(dt1.getFullYear(), dt1.getMonth()-1,1);
	}
//		 if(dt3.getTime() < dt2.getTime()){
//			alert("申込日を再度確認してください。\n申込日は前月1日以降の日付で入力して下さい。");
//			return false;
//		}else if(dt3.getTime() > dt1.getTime()) {
//			alert("申込日を再度確認してください。\申込日は明日以降の日付は入力できません。");
//			return false;
//		}
	
	}

	if(obj.knsy_keiyakuDate.value!="")
	{
	
		if(obj.knsy_moushikomiDate.value=="")
		{
			alert("申込日を入力してください。");
			return false;
		}else{
			var moushikomiDate = obj.knsy_moushikomiDate.value.split('/'); // /を除去
			var keiyakuDate = obj.knsy_keiyakuDate.value.split('/'); // /を除去
			var dt2 = new Date(moushikomiDate[0], parseInt(moushikomiDate[1])-1,moushikomiDate[2],23,59,59,999);
			var dt3 = new Date(keiyakuDate[0], parseInt(keiyakuDate[1])-1,keiyakuDate[2],23,59,59,999);
			
			if(dt3.getTime() < dt2.getTime()) 
			{
				alert("保険開始日を再度確認してください。\n保険開始日は申込日以降の日付で入力して下さい。");
				return false;
			}
		}
	}
	
var keiy_miseinen = obj.keiy_miseinen.checked;
		if(obj.keiy_age.value!="" && obj.keiy_age.value!="undefined")
		{
			if(obj.keiy_age.value<20 && keiy_miseinen==false)
			{
				alert("未成年は契約できません。");
				return false;
			}else if(obj.keiy_age.valu>100){
				alert("年齢が100歳を超えています。");
				return false;
			}
		}
	

	return true;
}





function check_bild_data(){
	var obj = document.chkform;
	this.errorName     = Array();
	this.errorData     = Array();
	this.errorKind     = Array();
	this.errorFlag     = Array();
	this.errorNumber   = 3;
	


this.errorName[0]="郵便番号";
this.errorName[1]="都道府県";
this.errorName[2]="建物名フリガナ";


this.errorData[0]=obj.bild_zipcode;
this.errorData[2]=obj.bild_build_furi;
this.errorData[1]=obj.bild_pref;


this.errorKind[0]="半角数字空";
this.errorKind[2]="全角カタカナ";
this.errorKind[1]="";

this.errorFlag[0]=1;
this.errorFlag[2]=1;
this.errorFlag[1]=1;


	for(i = 0; i < 2; i++){if(!Checkindex(this.errorName[i],this.errorData[i],this.errorKind[i],this.errorFlag[i])){return false;}}

	return true;
}


function check_dnti_data()
{
	this.errorName = Array();
	this.errorData = Array();
	this.errorKind = Array();
	this.errorFlag = Array();

	this.errorNumber   = 3;
	this.errorName[0]  = "金融機関コード";
	this.errorName[1]  = "支店コード";
	this.errorName[2]  = "口座番号";
	this.errorName[3]  = "口座名フリ";
	this.errorName[4]  = "顧客カードID";

	this.errorData[0]  = document.chkform.dnti_bankcode;
	this.errorData[1]  = document.chkform.dnti_branchcode;
	this.errorData[2]  = document.chkform.dnti_account;
	this.errorData[3]  = document.chkform.dnti_ac_furi;
	this.errorData[4]  = document.chkform.dnti_CaseNumber;


	this.errorKind[0]  = "半角数字";
	this.errorKind[1]  = "半角数字";
	this.errorKind[2]  = "半角数字";
	this.errorKind[3]  = "全角カタカナ";
	this.errorKind[4]  = "半角数字";

	this.errorFlag[0]  = 0;
	this.errorFlag[1]  = 0;
	this.errorFlag[2]  = 0;
	this.errorFlag[3]  = 0;
	this.errorFlag[4]  = 0;



	for(i = 0; i < 5; i++){if(!Checkindex(this.errorName[i],this.errorData[i],this.errorKind[i],this.errorFlag[i])){return false;}}

	return true;
}

function check_brch_data(){
	var obj = document.chkform;
	this.errorName     = Array();
	this.errorData     = Array();
	this.errorKind     = Array();
	this.errorFlag     = Array();
	this.errorNumber   = 2;
	


this.errorName[0]="店舗コード";
this.errorName[1]="店舗名";


this.errorData[0]=obj.brchID;
this.errorData[1]=obj.brch_name;


this.errorKind[0]="半角数字空";
this.errorKind[1]="";

this.errorFlag[0]=1;
this.errorFlag[1]=1;


	for(i = 0; i < 2; i++){if(!Checkindex(this.errorName[i],this.errorData[i],this.errorKind[i],this.errorFlag[i])){return false;}}

	return true;
}

function check_nori_data()
{
	this.errorName = Array();
	this.errorData = Array();
	this.errorKind = Array();
	this.errorFlag = Array();
	
	this.errorNumber   = 3;
	this.errorName[0]  = "代申会社名";
	this.errorName[1]  = "代申会社名フリガナ";
	this.errorName[2]  = "代申会社ID";

	this.errorData[0]  = document.chkform.nori_name;
	this.errorData[1]  = document.chkform.nori_furi;
	this.errorData[2]  = document.chkform.nori_noriaiID;

		
	this.errorKind[0]  = "";
	this.errorKind[1]  = "全角カタカナ";
	this.errorKind[2]  = "半角数字空";

	this.errorFlag[0]  = 1;
	this.errorFlag[1]  = 1;
	this.errorFlag[2]  = 1;

	

	for(i = 0; i < 3; i++){if(!Checkindex(this.errorName[i],this.errorData[i],this.errorKind[i],this.errorFlag[i])){return false;}}

	return true;	
}

function check_corp_data()
{
	this.errorName = Array();
	this.errorData = Array();
	this.errorKind = Array();
	this.errorFlag = Array();
	
	this.errorNumber   = 3;
	this.errorName[0]  = "会社名";
	this.errorName[1]  = "会社名フリガナ";

	this.errorData[0]  = document.chkform.corp_name;
	this.errorData[1]  = document.chkform.corp_furi;

		
	this.errorKind[0]  = "";
	this.errorKind[1]  = "全角カタカナ";

	this.errorFlag[0]  = 1;
	this.errorFlag[1]  = 1;

	

	for(i = 0; i < 2; i++){if(!Checkindex(this.errorName[i],this.errorData[i],this.errorKind[i],this.errorFlag[i])){return false;}}

	return true;	
}



function check_user_data()
{
	this.errorName = Array();
	this.errorData = Array();
	this.errorKind = Array();
	this.errorFlag = Array();
	
	this.errorNumber   = 3;
	
	this.errorName[0]  = "ユーザーコード";
	this.errorName[1]  = "ユーザーパスワード";
	this.errorName[2]  = "ユーザー名";
	this.errorName[3]  = "ユーザー名フリ";
	this.errorName[4]  = "ユーザー分類";
	this.errorName[5]  = "ユーザー郵便番号";
	this.errorName[6]  = "ユーザー都道府県";
	this.errorName[7]  = "ユーザー住所";
	this.errorName[8]  = "ユーザー建物名";
	this.errorName[9]  = "ユーザーメールアドレス";
	this.errorName[10] = "ユーザー電話番号";
	this.errorName[11] = "ユーザー会社電話";
	this.errorName[12] = "ユーザー携帯電話";		

	this.errorData[0]  = document.chkform.userID;
	this.errorData[1]  = document.chkform.user_pass;
	this.errorData[2]  = document.chkform.user_name;
	this.errorData[3]  = document.chkform.user_furi;

		
	this.errorKind[0]  = "半角英数小文字";
	this.errorKind[1]  = "半角英数小文字";
	this.errorKind[2]  = "ユーザー名";
	this.errorKind[3]  = "全角カタカナ";

	this.errorFlag[0]  = 1;
	this.errorFlag[1]  = 1;
	this.errorFlag[2]  = 1;
	this.errorFlag[3]  = 1;
	this.errorFlag[4]  = 0;
	this.errorFlag[5]  = 0;
	this.errorFlag[6]  = 0;
	this.errorFlag[7]  = 0;
	this.errorFlag[8]  = 0;
	this.errorFlag[9]  = 0;
	this.errorFlag[10] = 0;
	this.errorFlag[11] = 0;
	this.errorFlag[12] = 0;
	

	for(i = 0; i < 3; i++){if(!Checkindex(this.errorName[i],this.errorData[i],this.errorKind[i],this.errorFlag[i])){return false;}}

	return true;	
}
function check_dnti_u_data()
{
	this.errorName = Array();
	this.errorData = Array();
	this.errorKind = Array();
	this.errorFlag = Array();
	
	this.errorNumber   = 3;
	

	this.errorName[0]  = "団体名";
	this.errorName[1]  = "団体名フリ";
	this.errorName[4]  = "ユーザー分類";
	this.errorName[5]  = "ユーザー郵便番号";
	this.errorName[6]  = "ユーザー都道府県";
	this.errorName[7]  = "ユーザー住所";
	this.errorName[8]  = "ユーザー建物名";
	this.errorName[9]  = "ユーザーメールアドレス";
	this.errorName[10] = "ユーザー電話番号";
	this.errorName[11] = "ユーザー会社電話";
	this.errorName[12] = "ユーザー携帯電話";		


	this.errorData[0]  = document.chkform.dnti_name;
	this.errorData[1]  = document.chkform.dnti_furi;

		

	this.errorKind[0]  = "団体名";
	this.errorKind[1]  = "全角カタカナ";

	this.errorFlag[0]  = 1;
	this.errorFlag[1]  = 0;
	this.errorFlag[2]  = 0;
	this.errorFlag[3]  = 0;
	this.errorFlag[4]  = 0;
	this.errorFlag[5]  = 0;
	this.errorFlag[6]  = 0;
	this.errorFlag[7]  = 0;
	this.errorFlag[8]  = 0;
	this.errorFlag[9]  = 0;
	this.errorFlag[10] = 0;
	this.errorFlag[11] = 0;
	this.errorFlag[12] = 0;
	

	for(i = 0; i < 2; i++){if(!Checkindex(this.errorName[i],this.errorData[i],this.errorKind[i],this.errorFlag[i])){return false;}}

	return true;	
}
function check_user_u_data()
{
	this.errorName = Array();
	this.errorData = Array();
	this.errorKind = Array();
	this.errorFlag = Array();
	
	this.errorNumber   = 3;
	

	this.errorName[0]  = "ユーザー名";
	this.errorName[1]  = "ユーザー名フリ";
	this.errorName[4]  = "ユーザー分類";
	this.errorName[5]  = "ユーザー郵便番号";
	this.errorName[6]  = "ユーザー都道府県";
	this.errorName[7]  = "ユーザー住所";
	this.errorName[8]  = "ユーザー建物名";
	this.errorName[9]  = "ユーザーメールアドレス";
	this.errorName[10] = "ユーザー電話番号";
	this.errorName[11] = "ユーザー会社電話";
	this.errorName[12] = "ユーザー携帯電話";		


	this.errorData[0]  = document.chkform.user_name;
	this.errorData[1]  = document.chkform.user_furi;

		

	this.errorKind[0]  = "ユーザー名";
	this.errorKind[1]  = "全角カタカナ";

	this.errorFlag[0]  = 1;
	this.errorFlag[1]  = 0;
	this.errorFlag[2]  = 0;
	this.errorFlag[3]  = 0;
	this.errorFlag[4]  = 0;
	this.errorFlag[5]  = 0;
	this.errorFlag[6]  = 0;
	this.errorFlag[7]  = 0;
	this.errorFlag[8]  = 0;
	this.errorFlag[9]  = 0;
	this.errorFlag[10] = 0;
	this.errorFlag[11] = 0;
	this.errorFlag[12] = 0;
	

	for(i = 0; i < 2; i++){if(!Checkindex(this.errorName[i],this.errorData[i],this.errorKind[i],this.errorFlag[i])){return false;}}

	return true;	
}

function check_user_p_data()
{
	this.errorName = Array();
	this.errorData = Array();
	this.errorKind = Array();
	this.errorFlag = Array();
	
	this.errorNumber   = 3;
	
	this.errorName[0]  = "ユーザーパスワード";
		

	this.errorData[0]  = document.chkform.user_pass;

	this.errorKind[0]  = "半角英数小文字";


	this.errorFlag[0]  = 1;


	for(i = 0; i < 1; i++){if(!Checkindex(this.errorName[i],this.errorData[i],this.errorKind[i],this.errorFlag[i])){return false;}}

	return true;	
}

