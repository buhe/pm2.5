/**
 * Created by buhe on 16/8/1.
 */
'use strict';

import {observable} from 'mobx';

const listStore = observable({
  cities: []
});
listStore.fetch = function () {
  this.cities = [1,2,3,4,5]
};

module.exports = listStore;
