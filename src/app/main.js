class MainController {
  constructor() {
    this.teste = "asalkdjflksadfjldsak"
    this.myData = [
      {
        "firstName": "Cox",
        "lastName": "Carney",
        "company": "Enormo",
        "employed": true
      },
      {
        "firstName": "Lorraine",
        "lastName": "Wise",
        "company": "Comveyer",
        "employed": false
      },
      {
        "firstName": "Nancy",
        "lastName": "Waters",
        "company": "Fuelton",
        "employed": false
      }
    ];
  }
}


export const main = {
  template: require('./main.html'),
  controller: MainController
};
