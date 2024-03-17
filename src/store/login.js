import { makeAutoObservable } from 'mobx';

class LoginStore {
  constructor() {
    makeAutoObservable(this);
  }
}
const loginStore = new LoginStore();
export default loginStore;
