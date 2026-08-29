export default function Badge({texte}){
    // Permet de savoir si le livre est le dernier en cours de lecture. Change de couleur selon la couleur d’accentuation choisie par l’utilisateur. 

    return(
        <span className="badge">{texte}</span>
    );
}