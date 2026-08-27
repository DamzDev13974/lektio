import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { useLivres } from "../contexts/LivresContext";

export default function SearchBar(){
    // Composant permettant de faire la recherche de livre par titre ou auteur

    //recup du hook des livres
    const {recherche,setRecherche} = useLivres();

    return(
        <div className="search-book">
            <form action="">
                <div className="search-wrapper">
                    <input type="text" name="search" id="search" value={recherche} onChange={(e)=>setRecherche(e.target.value)} placeholder="Rechercher un livre" />
                    <MagnifyingGlassIcon size={24}/>
                </div>
            </form>
        </div>
    )
}