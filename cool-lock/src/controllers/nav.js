class Nav {
  constructor(params) {
    this.el = document.querySelector('.hamburger');
    this.params = params;
    this.run();
  }

  render() {
    const html = `
          ${Nav()}
        `;
    this.el.innerHTML = html;
  }

  run() {
    this.render();
  }
}

export default Nav;
