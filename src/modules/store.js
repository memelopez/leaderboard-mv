// /scr/modules/store

export default class Store {
  // gets tasks from storage and returns an array of objects
  static getGameKey() {
    let gameKey;
    if (localStorage.getItem('gameKey') !== null) {
      gameKey = JSON.parse(localStorage.getItem('gameKey'));
    }
    return gameKey;
  }

  static setGameKey(key) {
    localStorage.setItem('gameKey', JSON.stringify(key));
  }
}