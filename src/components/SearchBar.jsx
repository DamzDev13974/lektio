import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { useLivres } from "../contexts/LivresContext";
import { usePreferences } from "../contexts/PreferencesContext";

export default function SearchBar(){
    // Composant permettant de faire la recherche de livre par titre ou auteur

    //recup du hook des livres et des traductions
    const {recherche,setRecherche} = useLivres();
    const {traductions,langue} = usePreferences();

    return(
        <div className="search-book">
            <form>
                <div className="search-wrapper">
                    <input type="text" name="search" id="search" value={recherche} onChange={(e)=>setRecherche(e.target.value)} placeholder={traductions.nav.search[langue]} aria-label={traductions.nav.search[langue]}/>
                    <MagnifyingGlassIcon size={24}/>
                </div>
            </form>
        </div>
    )
}