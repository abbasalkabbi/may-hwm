<?php 
require 'Model/Database.php';
require 'Model/UserModel.php';
$us=new User();
$us->db=$db;
$us->create($user=(object) array(
    "name"=>'localhost',
    "email"=>'root',
    "password"=>'password',
))

?>