import Typewriter from  "typewriter-effect/dist/core";

var motanime = document.getElementById('anime');
var typewriter = new Typewriter(anime,{
    loop: true
});
typewriter.typeString('etudiant en annee preparatoire, a la recherche d\'alernance' )
.pauseFor(200)
.deleteAll()
.start();