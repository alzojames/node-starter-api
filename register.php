<?php
    session_start(); //Starts session.

    ?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="CSS/register.css" rel="stylesheet">
        
    
    </head>
    <body>
        <h1 id ="title">Create Account</h1>

    <form action="POST">

        <label class="heading">First Name*</label>
        <input type="text" placeholder="Enter First Name" name="first" class="textbox" required ><br>


        <label class="heading">Last Name*</label>
        <input type="text" placeholder="Enter Last Name" name="last" class="textbox" required> <br>
        
        <label class="heading">Username*</label>
        <input type="text" placeholder="Enter Username" name="user" class="textbox" required>  <br>

        <label class="heading">Password*</label>
        <input type="password" placeholder="Enter Password" name="pass" class="textbox" required><br>
        
       
        <label class="heading">Address*</label>
        <input type="text" placeholder="Enter Address" name="address1" required><br>
        <input type="text" placeholder="Enter City, State, Zipcode" name="address2" required>
        
       
        
       
        
        
    </form>

    </body>
</html>