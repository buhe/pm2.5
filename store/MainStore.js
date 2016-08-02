/**
 * Created by buhe on 16/8/1.
 */
'use strict';

import {observable,autorun,asMap} from 'mobx';
import API from '../api';

const listStore = observable({
  allCities:[],
  cities: [{p:'辽宁',c:'沈阳'},{p:'北京',c:'北京'}],
  aqi:observable(asMap({}))
});
listStore.fetch = function () {
  //this.cities = [1,2,3,4,5]
  API.getCitiesList()
      .then((response) => response.json())
      .then((json) =>{
        let allCities = json['result'];
        listStore.allCities = allCities;
      })
      .catch((error) => {
        console.warn(error);
      })
};

listStore.getCitiesList = function(){
  this.cities.push({p:this.cities.length,c:this.cities.length * 2});
  return this.cities;
};

listStore.fetch = function () {
  //this.cities = [1,2,3,4,5]
  API.getCitiesList()
      .then((response) => response.json())
      .then((json) =>{
        let cities = json['result'];
        listStore.cities = cities;
      })
      .catch((error) => {
        console.warn(error);
      })
};

autorun(function() {
  console.log("Completed %d of %d items",
      listStore.aqi,
      listStore.cities
  );
});

listStore.fetchCurrentPM25 = function () {
  //listStore.aqi.set("沈阳",100);
  this.cities.forEach((city) =>{
    listStore.fetchPM25(city);
  });
};

listStore.fetchPM25 = function (city) {
  //this.cities = [1,2,3,4,5]
  API.getPM25(city.p,city.c)
      .then((response) => response.json())
      .then((json) =>{
        let aqi = json['result'];
        listStore.aqi.set(city.c,aqi[0]['aqi']);
      })
      .catch((error) => {
        console.warn(error);
      })
};

module.exports = listStore;
