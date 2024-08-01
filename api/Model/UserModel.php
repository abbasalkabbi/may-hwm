<?php 

class User{
    public $Name;
    public $db;
    private $id;
    private $password;
    private $email;
    public function create($user,$isImage=false){
        $this->Name=$user->name;
        $this->password=$user->password;
        $this->email=$user->email;
        if($isImage == false){
            $SetUser=mysqli_query($this->db,"INSERT INTO `users` (`name`,`email`,`password`) VALUES ('$this->Name','$this->email','$this->password')");
        }
        return true;
    }
    public function Get($id=null,$name=null){
        if($id != null){
            return true;
        }
        if($name != null){
            return true;
        }
        return false;
    }
    public function Edit(){
        return true;
    }
    public function Delete($id=null){
        return true;
    }
}
?>