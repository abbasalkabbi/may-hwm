<?php 

class User{
    public $Name;
    public $db;
    private $id;
    private $password;
    private $email;
    private $avatar;
    public function create($user,$isImage=false){
        $this->Name=$user->name;
        $this->password=$user->password;
        $this->email=$user->email;
        $this->avatar=$user->avatar;
        if($isImage == false){
            $SetUser=mysqli_query($this->db,"INSERT INTO `users` (`name`,`email`,`password`,`image`) VALUES ('$this->Name','$this->email','$this->password','$this->avatar')");
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