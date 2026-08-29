import { Link } from "react-router";
import ProgressBar from "../components/ProgressBar";
import Badge from "./Badge";

export default function CardBook({livre, enCours}){
    //Card de présentation des livres pour l’accueil, comporte l’image du livre, le titre, l’auteur. Un Badge sera présent si il est le dernier livre qui est en cours de lecture et une barre de progression pour l’évolution de lecture dans le livre présenté. 

    return(
        <article className="card-book">
            <Link to={"/lecture/"+ livre.id}>
                <div className="cover-wrapper">
                    <img src={"/cover/"+ livre.coverKey} alt={"image du livre : "+ livre.title} />
                    {enCours &&(
                        <Badge texte="en cours"/>
                    )}
                    <ProgressBar progression={livre.readingProgress}/>
                </div>
                <h2>{livre.title}</h2>
                <p>{livre.author}</p>
            </Link>
        </article>
    )
}