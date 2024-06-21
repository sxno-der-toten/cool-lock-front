import LoginView from '../views/LoginView';

class Login {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.run();
  }

  render() {
    const html = `
    ${LoginView()}
    `;
    this.el.innerHTML = html;
  }

  run() {
    this.render();
  }
}

export default Login;
