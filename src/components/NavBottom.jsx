import { GearIcon } from "@phosphor-icons/react";
import { ShoppingCartIcon, BookOpenIcon } from "@phosphor-icons/react/dist/ssr";
import { NavLink } from "react-router";

export default function NavBottom(){
    //Composant correspondant à la barre de navigation située en bas de l’application. Il permettra de naviguer rapidement entre les principales “pages” de l’appli.

    return (
        <div className="nav-bottom">
            <NavLink to="/" aria-label="Aller à l'accueil" title="Aller à l'accueil"> 
                {/* mis en nav vers la bibliotheque car pas de store dédiés pour la librairie */}
                <ShoppingCartIcon size={24} /> Librairie
            </NavLink>
            <NavLink to="/" aria-label="Aller à l'accueil" title="Aller à l'accueil">
                <BookOpenIcon size={24} /> Ma bibliotheque
            </NavLink>
            <NavLink to="/preference" aria-label="Aller à la page préférences" title="Aller à la page préférénces">
                <GearIcon size={24} /> Paramètres
            </NavLink>
        </div>
    )
}