import { GearIcon } from "@phosphor-icons/react";
import { ShoppingCartIcon, BookOpenIcon } from "@phosphor-icons/react/dist/ssr";
import { NavLink } from "react-router";

export default function NavBottom(){
    //Composant correspondant à la barre de navigation située en bas de l’application. Il permettra de naviguer rapidement entre les principales “pages” de l’appli.

    return (
        <div className="nav-bottom">
            <NavLink to="/"> 
                {/* mis en nav vers la bibliotheque car pas de store dédiés pour la librairie */}
                <ShoppingCartIcon size={24} /> 
            </NavLink>
            <NavLink to="/">
                <BookOpenIcon size={24} />
            </NavLink>
            <NavLink to="/preference">
                <GearIcon size={24} />
            </NavLink>
        </div>
    )
}