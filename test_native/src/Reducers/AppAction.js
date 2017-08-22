const APIURL = 'https://swapi.co/api/';
const PEOPLE = APIURL + 'people/';
const PLANETS = APIURL + 'planets/';
import Utility from'./Utility';

export function handleLogin (data, cl = function(){}) {
	getAPIDataJSON(PEOPLE, function(responseBody){
		if (typeof responseBody  == 'object') {
    		let res = responseBody.results;
    		let r = filterData(res, data);
    		cl(Object.keys(r).length > 0);
    	}
    	else cl(0);
	});
}

export function getPlanetList (cl = function(){}) {
	getAPIDataJSON(PLANETS, function(res){
		res = res.results;
		res = Utility.sortArray(res, 'name');
		cl(res);
	});
}


const getAPIDataJSON = function(url, cl = function(){}){
	return fetch(url, {
	    method: 'get'
	})
    .then(response => {
    	let responseBody = response._bodyText;
    	if (typeof responseBody == 'string' && isJson(responseBody)) {
    		responseBody = JSON.parse(responseBody);
    		cl(responseBody);
    	}
    	else {
    		cl(0);
    	}
    });
}

const filterData = function (apiObj = {}, data = {}) {
	let retData = {};
	for (let i in apiObj) {
		let emp = apiObj[i];
		if (emp.name.toLowerCase() == data.email.toLowerCase() && emp.birth_year.trim() == data.password.trim()) {
			retData = emp;
			break;
		}
	}
	return retData;
}
const isJson = function (str) {
  try {
      JSON.parse(str);
  } catch (e) {
      return false;
  }
  return true;
}