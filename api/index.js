const KEY = "15a49e1654662";
const CITY = "http://apicloud.mob.com/environment/citys?key=" + KEY;
const PM25 = (p0, p1) => `http://apicloud.mob.com/environment/query?province=${p0}&key=15a49e1654662&city=${p1}`;
class API{
  constructor() {
  }

  getCitiesList(){
    return fetch(CITY);
  }

  getPM25(province,city){
    return fetch(PM25(province,city))
  }
}

export default new API();
