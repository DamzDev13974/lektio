import { createContext, useState, useContext, useEffect } from "react";

export const LivresContexts = createContext();
//Composant qui permet de gérer les livres fournit par le json du projet. Il chargera la liste de ces livres et la fournira aux composants qui ont en besoins. 
//Le provider contient : le state qui passera les données json contenant les livres, un state pour la recherche de livre et une fonction permettant de faire celà. 

export default function LivresProvider({children}){

    //State pour la liste des livres de la bibliotheque
    const [livres, setLivres] = useState([]);
    //State pour la recherche filtrée
    const [recherche, setRecherche] = useState("");


    //hook useEffect avec dépendance vide pour qu'il ne soit utilisé qu'une fois lors du montage (sauf en dev)
    useEffect(()=>{
        fetch("/data/books.json")
        .then(rep=>{return rep.json()})
        .then(data=>{
            console.log(data);
            setLivres(data.library);
        })
        .catch(error=>{
            console.log("Impossible de charger la bibliotheque :" + error);
        })
    },[]);

    function rechercherLivres(recherche){
        //Rechercher des livres par titre ou auteur
        //Param : la recherche saisie dans le formulaire

        //Je fais un nouveau tableau via filter() avec les livres correspondants à l'auteur ou titre saisie dans la recherche
        return livres.filter((livre)=>
            livre.title.toLowerCase().includes(recherche.toLowerCase()) || livre.author.toLowerCase().includes(recherche.toLowerCase())
        );
    }

    return(
        <LivresContexts.Provider value={{livres,recherche,setRecherche,rechercherLivres}}>
            {children}
        </LivresContexts.Provider>
    )

};

//hook perso à transmettre aux composants qui en ont besoin
export function useLivres(){
    return useContext(LivresContexts);
}