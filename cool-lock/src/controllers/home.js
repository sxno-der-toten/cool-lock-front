import Nav from '../views/nav';
import CardView from '../views/Card_User';
import JoinView from '../views/JoinView';
import CreateView from '../views/CreateView';
// import axios from 'axios';

class Home {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.run();
  }

  render() {
    // axios.get("localhost/user/1").then(user=> console.log(user)).catch(err=> console.error(err))

    const html = `
      ${Nav()}
      <div class="fond">
      <img src='https://stationf.co/img/flatmates/carousell1.jpg'>
      <div class='colos'>
      ${JoinView()}
      ${CreateView()}
      </div>
      </div>

      <div class='para'>
      <p class="taches">- TÂCHES -</p>
      </div>

      <div class='container-cards'>
      ${CardView()}
      ${CardView()}
      ${CardView()}
      ${CardView()}
      </div>
    `;
    this.el.innerHTML = html;
  }

  run() {
    this.render();
  }
}

export default Home;
