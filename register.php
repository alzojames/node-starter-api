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
    <h1 id="title">Create Account</h1>
    <div>


        <form action="POST" class="form">

            <!-- <label class="heading">First Name*</label>
        <input type="text"  name="first" class="textbox" required><br>


        <label class="heading">Last Name*</label>
        <input type="text"  name="last" class="textbox" required> <br>

        <label class="heading">Username*</label>
        <input type="text"  name="user" class="textbox" required> <br>

        <label class="heading">Password*</label>
        <input type="password"  name="pass" class="textbox" required><br>


        <label class="heading">Zipcode*</label>
        <input type="text"  name="address1" required><br> -->
            <!-- <input type="text" placeholder="Enter City, State, Zipcode" name="address2" required> -->

            <!-- <input type="submit" value="Submit"> -->
            <label for="firstname">First Name*</label>
            <input type="text" id="fname" name="firstname" required><br>

            <label for="lastname">Last Name*</label>
            <input type="text" id="lname" name="lastname"  required><br>

            <label for="email">Email*</label>
            <input type="email" name="email" id="email" required><br>

            <label for="country">Zipcode*</label>
            <input type="text" name="zipcode" id="zipcode" required><br>

            <input type="submit" value="Submit">






        </form>
    </div>
</body>

</html>