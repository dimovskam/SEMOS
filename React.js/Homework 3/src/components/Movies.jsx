import React from "react";
import PropTypes from "prop-types";


export const Movies = ({movies}) => {
 
    return(
        <div style={{
            width:"95%",
            padding:"25px",
            border:"2px solid black",
            borderRadius:"20px",
            backgroundColor: "pink",
            textAlign:"center"
        }}> {movies.map((movie,i)=> {
            return(
                <div key={i}>
                    <h3><span>Title: {movie.name}</span></h3>
                    <p><span>Date: {movie.date}</span></p>
                    <p><span>Genre: {movie.genre}</span></p>
                    <p><span>Plot: {movie.plot}</span></p>
                    <a href={movie.imdbLink}>Follow the Link!</a>
                    <br />
                    <img src={movie.image} alt={movie.name}
                    width={350} height={400} />
                    <p><span>Director: {movie.director}</span></p>
                </div>
            )
        })}
        
       </div>
        
        
     
    )
}