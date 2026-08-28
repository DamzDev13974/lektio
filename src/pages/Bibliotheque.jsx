import NavBottom from "../components/NavBottom";
import SearchBar from "../components/SearchBar";
import ListBook from "../components/ListBook";
import Header from "../components/Header";
import { usePreferences } from "../contexts/PreferencesContext";

export default function Bibliotheque(){
    //Page d’accueil présentant les livres fournis, un champ de recherche filtrant les livres en direct par titre et auteur. Cette page sera accessible par une barre de navigation en bas de l’écran, flèche retour de la page lecture et par le logo de l’application. 

    const {theme}= usePreferences();
    return(
        <div className={"home-page theme-"+theme}>
            <Header/>
            <h1 className="primary-title">Ma bibilothèque</h1>
            <SearchBar/>
            <ListBook/>
            <NavBottom/>
        </div>
    )
}