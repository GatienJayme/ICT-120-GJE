<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Exo_Java</title>
</head>
<body>
<form action="/" method="post">
    First name:<br>
    <input type="text" name="firstname" value="Mickey"><br>
    Last name:<br>
    <input type="text" name="lastname" value="Mouse"><br><br>
    <input type="submit" value="Submit">
</form>
<?php
print_r($_POST);
?>
<br>
<a href="form.html">Retour au formulaire</a>
</body>
</html>