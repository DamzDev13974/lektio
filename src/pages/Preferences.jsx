import NavBottom from "../components/NavBottom";

export default function Preference(){
    //Page permettant le changement de langue, thème, couleur d’accentuation, de typographie et un reset des préférences. Tout ces réglages seront persistés dans le LocalStorage

    return (
        <div className="settings-page">
            <h1>Paramètres</h1>
            <p>Test routage vers page settings</p>
            <NavBottom/>
        </div>
    )
}