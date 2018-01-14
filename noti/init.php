<?php

$host="localhost";
$db_user="pyplynco_ogcs";
$db_password="amarjeet@530";
$db_name="pyplynco_notification";


$conn=mysqli_connect($host,$db_user,$db_password,$db_name);


if($conn)
{
    echo "success";
}

else{
    echo "nope got an error";
}
?>