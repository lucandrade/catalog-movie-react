import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

class AppStore extends EventEmitter {
  constructor() {
    super();
    this.page = null;
    this.snackbar = {};
  }

  getPage() {
    return this.page;
  }

  getSnackBar() {
    return this.snackbar;
  }

  changePage(page) {
    this.page = page;
    this.emit('pagechange', page)
  }

  showSnackbar(snackbar) {
    this.snackbar = snackbar;
    this.emit('snackbar');
  }

  handleActions(action) {
    switch(action.type) {
      case 'CHANGE_PAGE':
        this.changePage(action.page);
        break;
      case 'SHOW_SNACKBAR':
        this.showSnackbar(action.snackbar);
        break;
    }
  }
}

const appStore = new AppStore;
dispatcher.register(appStore.handleActions.bind(appStore));

window.appStore = appStore;

export default appStore;