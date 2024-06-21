const LoginView = () => `
<section class="loginsect">
  <div class="login-container">
    <h2>Connexion</h2>
    <form action="/submit_login" method="post">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
      
      <label for="password">Mot de passe:</label>
      <input type="password" id="password" name="password" required>
      
      <input type="submit" value="Se connecter">
    </form>
  </div>
  </section>
`;

export default LoginView;
