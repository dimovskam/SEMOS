import React from "react";

export const Movies = ({filmovi}) => {

    return(
        <div id="movies">
           {filmovi.map((film,i) => {
            return(
                <div key={i}>
                    <h3><span>Title: </span>{film.name}</h3>
                    <p><span>Release Date:</span>{film.date}</p>
                    <p><span>Genre: </span>{film.genre}</p>
                    <p><span>Plot: </span>{film.plot}</p>
                    <a target="_blank" href={film.imdbLink}>Go to IMDB</a>
                    <br/>
                    <img src={film.imgURL} alt={film.name} width={250} height={350} />
                    <hr />
                </div>
            )
           })}
        </div>
    )
}