import { Link, useParams } from "react-router";
import { useLivres } from "../contexts/LivresContext"
import { CaretLeftIcon } from "@phosphor-icons/react";
import ProgressBar from "../components/ProgressBar";
import { useState } from "react";
import { usePreferences } from "../contexts/PreferencesContext";
import TypoSettings from "../components/settings/TypoSettings";

export default function Lecture(){
    //Page permettant la lecture du livre (lorem ipsum pour le projet), voir le titre et l’auteur de celui ci, ainsi qu’une barre de progression sur la lecture du livre. Cette page présentera  un overlay des réglages possible pour la lecture

    //Recup des hooks LivresContext
    const {livres} = useLivres();
    //L'id avec useParam nécessaire pour le find() et trouvé le livre ciblé
    const {id}= useParams();
    //Recup de la recette via find() et number() pour la conversion en nombre
    const livre = livres.find((livre)=>livre.id === Number(id));
    //State toggle pour l'overlay
    const [parametresOuverts, setParametresOuverts] = useState(false); //init boolean en false
    const{theme,largeurContenu} = usePreferences();

    //Si pas de livre existant
    if(!livre){
        return(
            <div className={"read-page theme-"+theme}> 
                <div className="top-read"> 
                    <Link to="/" aria-label="Aller à l'accueil" title="Aller à l'accueil">
                        <CaretLeftIcon size={24}/>
                    </Link>
                     <div className="read-wrapper">
                        <h1 className="primary-title">Page de lecture</h1>
                        <p>Livre demandé non trouvé</p>
                    </div>
                </div>
            </div>
        )
    }


    return(
        <div className={"read-page theme-"+theme}>
            <div className="top-read">
                <Link to="/" aria-label="Aller à l'accueil" title="Aller à l'accueil">
                    <CaretLeftIcon size={24}/>
                </Link>
                <div className="read-wrapper">
                    <h1  className="primary-title">{livre.title}</h1>
                    <p>{livre.author}</p>
                    <ProgressBar progression={livre.readingProgress}/>
                </div>
            </div>
            <h2>Chapitre 6</h2>
            <div className={"page-content width-" + largeurContenu}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <button className="typo-overlay" arai-label="Ouvrir ou fermer les paramètres de lecture " title="Ouvrir ou fermer les paramètres de lecture" onClick={()=> setParametresOuverts(!parametresOuverts)}></button>
            {/* au click j'inverser le boolean de l'overlay ouvert ou fermé */}
            {parametresOuverts && (
                <TypoSettings/>
            )}
        </div>
    )
}