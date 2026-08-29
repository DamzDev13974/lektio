import { GearIcon } from "@phosphor-icons/react";
import { ShoppingCartIcon, BookOpenIcon } from "@phosphor-icons/react/dist/ssr";
import { NavLink } from "react-router";
import { usePreferences } from "../contexts/PreferencesContext";

export default function NavBottom(){
    //Composant correspondant à la barre de navigation située en bas de l’application. Il permettra de naviguer rapidement entre les principales “pages” de l’appli.

    //Recup des traductions
    const {traductions,langue} = usePreferences();

    return (
        <nav className="nav-bottom">
            <NavLink to="/librairie" aria-label="Aller à l'accueil" title="Aller à l'accueil"> 
                {/* mis en nav vers la bibliotheque car pas de store dédiés pour la librairie */}
                <ShoppingCartIcon size={24} /> {traductions.nav.bookstore[langue]}
            </NavLink>
            <NavLink to="/" aria-label="Aller à l'accueil" title="Aller à l'accueil">
                <BookOpenIcon size={24} /> {traductions.nav.library[langue]}
            </NavLink>
            <NavLink to="/preference" aria-label="Aller à la page préférences" title="Aller à la page préférénces">
                <GearIcon size={24} /> {traductions.nav.settings[langue]}
            </NavLink>
        </nav>
    )
}