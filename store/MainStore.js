/**
 * Created by buhe on 16/8/1.
 */
'use strict';

import {observable} from 'mobx';
import API from '../api';

const listStore = observable({
  cities: []
});
listStore.fetch = function () {
  //this.cities = [1,2,3,4,5]
  let self = this;
  API.getCitiesList()
      .then((response) => response.json())
      .then((json) =>{
        let cities = json['result'];
        self.cities = cities;
      })
      .catch((error) => {
        console.warn(error);
      })
};

module.exports = listStore;
