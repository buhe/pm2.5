const KEY = "15a49e1654662";
const CITY = "http://apicloud.mob.com/environment/citys?key=" + KEY;

class API{
  constructor() {
  }

  getCitiesList(){
    return fetch(CITY);
  }
}

export default new API();
