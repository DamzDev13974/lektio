import { BookBookmarkIcon, CaretDownIcon  } from "@phosphor-icons/react";
import { usePreferences } from "../contexts/PreferencesContext";
import { Link } from "react-router";

export default function Header(){
    //Comporte le logo de l’appli et le menu select permettant de changer la langue

    //Recup des langues possibles via le hook Preference
    const {langues,langue, setLangue} = usePreferences();

    return(
        <header>
            <div className="logo">
                <Link to="/" aria-label="Aller à l'accueil" title="Aller à l'accueil">
                    <BookBookmarkIcon  size={24} weight="fill"/> LEKTIO
                </Link>
            </div>
            <div className="select-wrapper">
                <select name="select-lang" id="select-lang" value={langue} onChange={(e)=>setLangue(e.target.value)} aria-label="Choisir la langue">
                {/* Je parcours le tableau des langues pour en faire une option par langue dans le select */}
                {langues.map((langue)=>(
                    <option key={langue} value={langue}>{langue.toUpperCase()}</option>
                ))}
                </select>
                <CaretDownIcon size={16}/>
            </div>
        </header>
    )
}