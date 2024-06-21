<?php

require 'vendor/autoload.php';

use App\Router;
use App\Controllers\User;

new Router([
  'user/:id' => User::class,
  'user/:register' => User::class
]);
