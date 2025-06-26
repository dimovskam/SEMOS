import React from "react";

export function Adress({korisnik1,korisnik2,korisnik3,korisnik4}){

    return(
        <div id="adress">
        {korisnik1.adresa === "Skopje" ? <div>
            <h1>User 1</h1>
            <p>Ime: {korisnik1.ime}</p>
            <p>Prezime: {korisnik1.prezime}</p>
            <p>Adresa: {korisnik1.adresa}</p>
            <p>Godini: {korisnik1.godini}</p>
        </div> : <h2>Not from Skopje</h2>
        }
        {korisnik2.adresa === "Skopje" ? <div>
            <h1>User 2</h1>
            <p>Ime: {korisnik2.ime}</p>
            <p>Prezime: {korisnik2.prezime}</p>
            <p>Adresa: {korisnik2.adresa}</p>
            <p>Godini: {korisnik2.godini}</p>
        </div> : <h2>Not from Skopje</h2>
        }
        {korisnik3.adresa === "Skopje" ? <div>
            <h1>User 3</h1>
            <p>Ime: {korisnik3.ime}</p>
            <p>Prezime: {korisnik3.prezime}</p>
            <p>Adresa: {korisnik3.adresa}</p>
            <p>Godini: {korisnik3.godini}</p>
        </div> : <h2>Not from Skopje</h2>
        }
        {korisnik4.adresa === "Skopje" ? <div>
            <h1>User 4</h1>
            <p>Ime: {korisnik4.ime}</p>
            <p>Prezime: {korisnik4.prezime}</p>
            <p>Adresa: {korisnik4.adresa}</p>
            <p>Godini: {korisnik4.godini}</p>
        </div> : <h2>Not from Skopje</h2>
        }
        </div>
    )
}