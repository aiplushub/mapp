
var xhr = new XMLHttpRequest();
var skey = "1245EPhCcImdF%2FtM21AZmSt9qOI2Ks5vIs4FxC4%2BSAUfteQ6FLShUCY81a6S23GPQ9SNURGrdRpsve%2BvxQLgJQ%3D%3D"
var url = 'http://apis.data.go.kr/B551182/pharmacyInfoService/getParmacyBasisList'; /*URL*/
var queryParams = '?' + encodeURIComponent('serviceKey') + '='+skey; /*Service Key*/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /**/
queryParams += '&' + encodeURIComponent('sidoCd') + '=' + encodeURIComponent('110000'); /**/
queryParams += '&' + encodeURIComponent('sgguCd') + '=' + encodeURIComponent('110019'); /**/
queryParams += '&' + encodeURIComponent('emdongNm') + '=' + encodeURIComponent('신내동'); /**/
queryParams += '&' + encodeURIComponent('yadmNm') + '=' + encodeURIComponent('온누리건강'); /**/
queryParams += '&' + encodeURIComponent('xPos') + '=' + encodeURIComponent('127.0965441345503'); /**/
queryParams += '&' + encodeURIComponent('yPos') + '=' + encodeURIComponent('37.60765568913871'); /**/
queryParams += '&' + encodeURIComponent('radius') + '=' + encodeURIComponent('3000'); /**/
alert(url + queryParams);
xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
    }
};

xhr.send('');
