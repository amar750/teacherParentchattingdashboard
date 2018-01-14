<?php

// require "init.php";
// $email=$_POST['email'];
$token=$_POST['token'];

$con=new mysqli('localhost','pyplynco_ogcs','amarjeet@530','pyplynco_notification');

$stmt=$con->prepare("INSERT INTO info (token) VALUES (?)");
$stmt->bind_param("s", $token);
$response=array();

if($stmt->execute()){
    $response['error']=false;
    $response['message']='token stored successfully';
    
}
else{
    
    $response['error']=true;
    $response['message']=$stmt->error;
    
}

echo json_encode($response);
// $sql="insert into notify_info values ('".$token."');";
// mysqli_query($conn,$sql);

// mysqli_close($conn);
    
    
?>