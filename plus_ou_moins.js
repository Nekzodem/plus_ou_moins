function devine(min, max)
{
     var nb = min + (max-min+1)*Math.random();
     return Math.floor(nb);
}

var nb = devine(1, 100);
var cpt = 0;
var essai;
var msg = "Veuillez tenter votre chance";

do
{
    essai = prompt(msg);
    cpt++;
    if(essai > nb)
        msg = "Raté le numéro est inferieur";
    else
        msg = "Raté le numéro est supérieur";
}
    
while(essai != nb);
alert("Game Over vous avez trouvé en " + cpt + " coups ! Faites mieux la prochaine fois");