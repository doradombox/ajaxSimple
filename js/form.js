'use strict'

var ajaxObj = {

};

var xmlHttpRequest = new XMLHttpRequest();//新建XMLHttpRequest对象

function success(text) {
    var textarea = document.getElementById('text-response');
    textarea.value = text;
}

function fial(code) {
    var textarea = document.getElementById('text-response');
    textarea.value = text;
}

xmlHttpRequest.onreadystatechange = function () {
    if (xmlHttpRequest.readyState == 4) {
        if (xmlHttpRequest.status == 200) {
            return success(xmlHttpRequest.responseText);
        } else {
            return fail(xmlHttpRequest.responseText);
        }
    } else {

    }
}

xmlHttpRequest.open("getString", "http://localhost:9091/Service/ServiceHello?name=");


var soap = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:q0="http://ws.luowg.com/" xmlns: xsd = "http://www.w3.org/2001/XMLSchema" xmlns: xsi = "http://www.w3.org/2001/XMLSchema-instance" > ' +' <soapenv:Body> <q0:sayHello><name>' + name + '</name>  </q0:sayHello> </soapenv:Body> 		</soapenv: Envelope > ';
//打开连接
xhr.open('POST', wsUrl, true);

//重新设置请求头
xhr.setRequestHeader("Content-Type", "text/xml;charset=UTF-8");

//设置回调函数
xhr.onreadystatechange = _back;

//发送请求
xhr.send(soap);
			}	
function _back() {
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            //alert('调用Webservice成功了');
            var ret = xhr.responseXML;
            var msg = ret.getElementsByTagName('return')[0];
            document.getElementById('showInfo').innerHTML = msg.text;
            //alert(msg.text);
        }
    }
}


function refreshPrice(data) {
    var p = document.getElementById('test-jsonp');
    p.innerHTML = '当前价格：' +
        data['0000001'].name + '：' +
        data['0000001'].price + '；' +
        data['1399001'].name + '：' +
        data['1399001'].price;
}

function getPrice() {
    var js = document.createElement('script');
    var head = document.getElementsByTagName('head')[0];
    js.src = 'http://localhost:9091/Service/ServiceHello?wsdl';
    head.appendChild(js);
}
