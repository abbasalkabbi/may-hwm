<?php 
class db {
    private $DB_HOST; 
    private $DB_USERNAME; 
    private $DB_PASSWORD; 
    private $DB_DATABASE_NAME; 
    private $DATABASE; 

    public function Set($DataBase){
        $this->DB_HOST=$DataBase->Host;
        $this->DB_USERNAME=$DataBase->User;
        $this->DB_PASSWORD=$DataBase->Password;
        $this->DB_DATABASE_NAME=$DataBase->Name;
    }
    public function connect(){
     // Create connection
        $conn = mysqli_connect($this->DB_HOST,$this->DB_USERNAME, $this->DB_PASSWORD,$this->DB_DATABASE_NAME);
        
        // Check connection
        if (!$conn) {
            die("Connection failed: " . mysqli_connect_error());
        }
        echo "Connected successfully";
        return $this->DATABASE=$conn;
    }
    public function get(){
        return $this->DATABASE;
    }

}
$run = new db();
$run->Set((object) array(
    "Host"=>'localhost',
    "User"=>'root',
    "Password"=>'',
    "Name"=>'may-hwm',
));
$db =$run->connect(); 
?>