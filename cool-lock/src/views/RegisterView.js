const RegisterView = () => `
<section class="registersect">
  <div class="register-container">
    <h2>S'inscrire</h2>
    <form id="register-form">
      <label for="nom">Nom:</label>
      <input type="text" id="nom" name="name" required>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
      
      <label for="password">Mot de passe:</label>
      <input type="password" id="password" name="password" required>

      <label for="confirm_password">Confirmer le mot de passe:</label>
      <input type="password" id="confirm_password" name="confirm_password" required>
      
      <a class='submit' href='/'>OK</a>
    </form>
  </div>
</section>
`;

export default RegisterView;
