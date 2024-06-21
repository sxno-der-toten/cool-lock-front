const AccountView = () => `
<section class="accountsect">
  <div class="account-container">
    <h2>Modifier le compte</h2>
    <form action="/submit_account_update" method="post">
      <label for="nom">Nom:</label>
      <input type="text" id="nom" name="nom" required>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
      
      <label for="password">Mot de passe:</label>
      <input type="password" id="password" name="password" required>

      <label for="confirm_password">Confirmer le mot de passe:</label>
      <input type="password" id="confirm_password" name="confirm_password" required>
      
      <a class='submit' href='/'>Mettre à jour</a>
      <button type="button" onclick="history.back()">Retour</button>
    </form>
  </div>
</section>
`;

export default AccountView;
