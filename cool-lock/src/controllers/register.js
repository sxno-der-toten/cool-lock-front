import axios from 'axios';
import RegisterView from '../views/RegisterView';

class Register {
  constructor() {
    this.el = document.querySelector('#root');
    this.run();
  }

  render() {
    return `
      <div class='fond-reg-container'>
        <div class='register-form'>
          ${RegisterView()}
        </div>
      </div>
    `;
  }

  getDataForm() {
    const formRegister = document.querySelector('#register-form');
    formRegister.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(formRegister);
      const data = {
        firstname: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password')
      };
      this.sendData(data);
    });
  }

  sendData(data) {
    axios.post('http://127.0.0.1:9090/user/register', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  run() {
    this.el.innerHTML = this.render();
    this.getDataForm();
  }
}

export default Register;
