#include <stdio.h>
#include <stdlib.h>
#include <time.h>
/*bibliothèque*/

srand(time(NULL)); 
/*srand unique permet d'initialiser le générateur de nombres*/
nombreMystere = (rand() % (MAX - MIN + 1)) + MIN;
/*variable = (rand fonction) (MAX - MIN constante)*/
const int MAX = 100, MIN = 1;

if {
    nombre mystère>nombre entre
    (Le chiffre demandé est supérieur.)
}

else if{
    nombre mystère<nombre entre
    (Le chiffre demandé est inférieur.)
}

else{
    (Félicitation, vous avez trouvé le chiffre exact)
}