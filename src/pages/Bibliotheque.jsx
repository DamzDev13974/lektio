import { useState } from "react";
import CardBook from "../components/CardBook";
import NavBottom from "../components/NavBottom";
import { useLivres } from "../contexts/LivresContext";
import SearchBar from "../components/SearchBar";

export default function Bibliotheque(){
    //Page d’accueil présentant les livres fournis, un champ de recherche filtrant les livres en direct par titre et auteur. Cette page sera accessible par une barre de navigation en bas de l’écran, flèche retour de la page lecture et par le logo de l’application. 

    //Recup des livres via le hook perso
    const {livres} =  useLivres();
    

    return(
        
        <section className="home-page">
            <h1>Ma bibilothèque</h1>
            <SearchBar/>
            {livres.map((livre)=>{
                return(
                    <CardBook key={livre.id} livre={livre}/>
                )
            })};
            <NavBottom/>
        </section>
    )
}