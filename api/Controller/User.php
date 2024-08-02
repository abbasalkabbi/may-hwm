<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require '../Model/Database.php';
require '../Model/UserModel.php';
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

 //  img upload
function upload_img($DIR){
    // if there image
    $file_chunks = explode(";base64,", $_POST['avatar']);
    $fileType_img = explode("image/", $file_chunks[0]);
    $image_type = $fileType_img[1];
    $base64Img = base64_decode($file_chunks[1]);
    $name_img= uniqid() . '.'.$image_type;
    $file = $DIR . $name_img;
    file_put_contents($file, $base64Img);
    return $name_img;
}// End img upload
if(isset($_GET['q'])){
    $q=$_GET['q'];
    switch ($q) {
        case 'create':
            // get data
            $name=$_POST['name'];
            $email=$_POST['email'];
            $password=$_POST['password'];
            // $avatar=$_POST['avatar'];
             // if Not empty
            if(!empty($name) && !empty($email) && !empty($password) ){
                  // check name
                    if(strlen($name) <7){
                        echo json_encode(['status'=>false,"message" => "($name) is  Short"]);
                    }else{
                            // email 
                            if(filter_var($email,FILTER_VALIDATE_EMAIL)){
                                $email_check=mysqli_query($db,"SELECT * FROM users WHERE email = '{$email}'");
                                if(mysqli_num_rows($email_check) >0){
                                        // if email is not new
                                    echo json_encode(['status'=>false,"message" => "($email) is  login"]);
                        }else{
                            //  email is not login
                            // check password
                            if(strlen($password) <7){
                                //
                                echo json_encode(['status'=>false,"message" => "password is  Short"]);
                            }else{
                                // password more then 7 leters
                                //check avatar 
                                if(empty($avatar)){
                                    //  no avatar
                                    $user=new User();
                                    $user->db=$db;
                                    $user->create(
                                        (object) array(
                                                "name"=>$name,
                                                "email"=>$email,
                                                "password"=>$password,
                                                "avatar"=>'avatar.png',
                                                )
                                        );
                                }
                            }
                        }
                                }else{
                                    echo json_encode(['status'=>false,"message" => "email is not cerrtect"]);
                                }

                        }
            }else{
                if(empty($name)){
                    echo json_encode(['status'=>false,"message" => "Name is  empty"]);
                }
                if(empty($email)){
                    echo json_encode(['status'=>false,"message" => "email is  empty"]);
                }
                if(empty($password)){
                    echo json_encode(['status'=>false,"message" => "password is  empty"]);
                }
            }
            break;
        case 1:
            echo "i equals 1";
            break;
        case 2:
            echo "i equals 2";
            break;
    }
}
?>