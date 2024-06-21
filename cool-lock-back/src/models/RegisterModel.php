<?php

namespace App\Models;

class RegisterModel {
    private $db;

    public function __construct($database) {
        $this->db = $database;
    }

    public function registerUser($nom, $email, $password) {
        $hashedPassword = password_hash($password, PASSWORD_BCRYPT);

        $sql = "INSERT INTO users (nom, email, password) VALUES (:nom, :email, :password)";
        $stmt = $this->db->prepare($sql);
        $stmt->bindParam(':nom', $nom);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':password', $hashedPassword);

        return $stmt->execute();
    }
}
?>
