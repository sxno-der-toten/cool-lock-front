<?php

namespace App\Controllers;

use App\Models\RegisterModel;

class Register {
    private $model;

    public function __construct($database) {
        $this->model = new RegisterModel($database);
    }

    public function submitRegister() {
        header('Content-Type: application/json');

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $nom = trim($_POST['nom']);
            $email = trim($_POST['email']);
            $password = trim($_POST['password']);
            $confirmPassword = trim($_POST['confirm_password']);

            if ($password !== $confirmPassword) {
                echo json_encode(['error' => 'Les mots de passe ne correspondent pas.']);
                return;
            }

            $result = $this->model->registerUser($nom, $email, $password);

            if ($result) {
                echo json_encode(['success' => 'Inscription réussie.']);
            } else {
                echo json_encode(['error' => 'Erreur lors de l\'inscription.']);
            }
        } else {
            echo json_encode(['error' => 'Requête invalide.']);
        }
    }
}
