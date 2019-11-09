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
    Je suis un terroriste<input id="chkTerrorist" type="checkbox" name="terrosrist">
</form>
<?php
print_r($_POST);
?>
<br>
<a href="form.html">Retour au formulaire</a>
<script>
    function chkTerroristClick() {
        if(chkTerrorist.checked)
        {
            alert('Attention Donald Mickey est un terrorist')
        }
    }

        chkTerrorist.addEventListener('click', chkTerroristClick)

    /* function chkTerroristClick() {
        alert('Vraiment ?')
    }
    function warning() {
        alert('Attention')
    }
    chkTerrorist.addEventListener('click', chkTerroristClick)
    chkTerrorist.addEventListener('mouseover', warning)
    */
    // Function for hello and return if person is major or not
    /*function hello(name, age) {
        if (age >= 18) {
            alert('Bonjour Monsieur ' + name)
            return true
        }
        else {
            alert('Salut '+ name)
            return false
        }
    }
    console.log('Marwan', 26)
    console.log(hello('Johnny', 18)
    console.log(hello('Benoit', 17)*/


    //chkTerrorist.addEventListener("click", hello)
    /*
    firstname = 'Bart'
    lastname = 'SAM'
    i = prompt('Quel age a ' + firstname)
    for (i = 16; i < 25; i++) {
        if (i > 10) {
            alert('Bonjour Madame ' + firstname + lastname)
        } else {
            alert('Bonjour Mademoisselle ' + firstname + lastname)
        }*/
    }
</script>
</body>
</html>