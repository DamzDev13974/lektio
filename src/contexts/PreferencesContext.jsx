import { createContext, useContext, useState, useEffect } from "react";

export const PreferencesContext = createContext();
//Composant qui permet de gérer les couleurs du theme, d’accentuation, de typographie et langue de l’application.
//Le provider contient : le state pour les langues du json, un autre pour les traductions. Les states nécessaires pour le thme, la couelru d'accentuation et de typographie

export default function PreferencesProvider({children}){
    //State pour les langues
    const [langues, setLangues] = useState([]); //init en tableau
    //Celui pour les traductions
    const [traductions, setTraductions] = useState({}); //init en objet
    //State pour la langue selectionnée
    const [langue, setLangue] = useState("fr") // init en string sur français
    //State pour les préférences de l'user
    const [theme,setTheme] = useState(()=>{ return localStorage.getItem("theme") || "clear"})//recup la valeur du localStorage sinon init en string sur clear

    //hook useEffect avec dépendance vide pour qu'il ne soit utilisé qu'une fois lors du montage (sauf en dev)
    useEffect(()=>{
        fetch("/data/translations.json")
        .then(rep=>{return rep.json()})
        .then(data=>{
            console.log(data);
            setLangues(data.locales);
            setTraductions(data.translations);
        })
        .catch(error=>{
            console.log("Impossible de charger les préférences: "+ error)
        })

    },[]);

    //Sauvegarde des préférences à chaque changement des states correspondants
    useEffect(()=>{
        localStorage.setItem("theme",theme);
        console.log(localStorage);
        console.log(theme);
    },[theme])
    
    return(
        <PreferencesContext.Provider value={{langues,traductions,langue, setLangue,theme,setTheme}}>
            {children}
        </PreferencesContext.Provider>
    )
};

export function usePreferences(){
    return useContext(PreferencesContext);
}
