import { createContext, useContext, useState, useEffect } from "react";

export const PreferencesContext = createContext();
//Composant qui permet de gérer les couleurs du theme, d’accentuation, de typographie et langue de l’application.
//Le provider contient : le state pour les langues du json, un autre pour les traductions. Les states nécessaires pour le theme, la couleur, d'accentuation et de typographie

export default function PreferencesProvider({children}){
    //State pour les langues
    const [langues, setLangues] = useState([]); //init en tableau
    //Celui pour les traductions
    const [traductions, setTraductions] = useState({}); //init en objet
    //State pour la langue selectionnée
    const [langue, setLangue] =  useState(() => {return localStorage.getItem("lang") || "fr"});
    //State pour les préférences de l'user
    const [theme,setTheme] = useState(()=>{ return localStorage.getItem("theme") || "clear"});//recup la valeur du localStorage sinon init en string sur clear
    const [couleur, setCouleur] = useState(()=>{ return localStorage.getItem("color") || "default"});
    const [police, setPolice] = useState(()=>{return localStorage.getItem("police")|| "sansSerif"});
    const [tailleTexte, setTailleTexte] = useState(()=>{
        //création de la variable valeur afin de la convertir en int par la suite et eviter le double appel du localStorage
        const valeur = localStorage.getItem("tailleTexte");
        //Si valeur est différent de null, je retourne sa valeur convertie, sinon 16 par défaut
        return valeur !== null ? parseInt(valeur) : 16;
    });
    const [interligne,setInterligne] =useState(()=>{
        const valeur = localStorage.getItem("interligne");
        return valeur !== null ? parseFloat(valeur) : 1.4;
    });
    const [espacementCaracteres, setEspacementCaracteres]=useState(()=>{
        const valeur = localStorage.getItem("espacementCaracteres");
        return valeur !== null ? parseFloat(valeur) : 1.4;
    });
    const [largeurContenu, setLargeurContenu]=useState(()=>{return localStorage.getItem("largeurContenu") || "normal"});

    

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
        localStorage.setItem("color", couleur);
        localStorage.setItem("lang",langue);
        localStorage.setItem("police",police);
        localStorage.setItem("tailleTexte",tailleTexte);
        localStorage.setItem("interligne",interligne);
        localStorage.setItem("espacementCaracteres",espacementCaracteres);
        localStorage.setItem("largeurContenu",largeurContenu);
        console.log( "dans le localStorage", localStorage);
    },[theme,couleur,langue,police,tailleTexte,interligne,espacementCaracteres,largeurContenu])
    
    return(
        <PreferencesContext.Provider value={{langues,traductions,langue, setLangue,theme,setTheme,couleur,setCouleur,police,setPolice,tailleTexte,setTailleTexte,interligne,setInterligne,espacementCaracteres,setEspacementCaracteres,largeurContenu,setLargeurContenu}}>
            {children}
        </PreferencesContext.Provider>
    )
};

export function usePreferences(){
    return useContext(PreferencesContext);
}
