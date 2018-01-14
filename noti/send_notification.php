<?php
    
    require "init.php";
    
    $message=$_POST['message'];
    $path_to_fcm='https://fcm.googleapis.com/fcm/send';
    $server_key="AAAAaG2kWu4:APA91bG29RpcPgfhsrnU7yVK9vjNCjlxn9z7pfJdRnBfDlNfwQbTrUfyb41WARJl9lbSLOlhvc02OfxiTBjZfZOUe-3uE1hKrRkWphddk7k6z9we7J8pgFmuAHMLnsbliC1pGwenV4tC";
    
    $sql="select token from notify_info";
    $result=mysqli_query($conn,$sql);
    
    $row=mysqli_fetch_row($result);
    $key=$row[0];
    
    $headers=array('Authorization:key=' .$server_key,
    
                    'Content-Type:application/json');
                    
    $fields=array('to'=>$key,'notification'=>array('title'=>'INSTITUTE POST','body'=>$message));
    
    $payload=json_encode($fields);
    
    $curl_session=curl_init();
    curl_setopt($curl_session,CURLOPT_URL,$path_to_fcm);
    curl_setopt($curl_session,CURLOPT_POST,true);
    curl_setopt($curl_session,CURLOPT_HTTPHEADER,$headers);
    curl_setopt($curl_session,CURLOPT_RETURNTRANSFER,true);
    curl_setopt($curl_session,CURLOPT_SSL_VERIFYPEER,false);
    curl_setopt($curl_session,CURLOPT_IPRESOLVE,CURL_IRESOLVE_V4);
    curl_setopt($curl_session,CURLOPT_POSTFIELDS,$payload);
    
    $result=curl_exec($curl_session);
    mysqli_close($conn);
?>