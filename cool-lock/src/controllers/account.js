import AccountView from '../views/AccountView';

class Account {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.run();
  }

  render() {
    const html = `
    <div class='background'>
      ${AccountView()}
    `;
    this.el.innerHTML = html;
  }

  run() {
    this.render();
  }
}

export default Account;
