import React from "react";
import PropTypes from "prop-types";


export const Movies = ({movie1,movie2}) => {
 
    return(
        <div style={{
            width:"90%",
            padding:"25px",
            border:"2px solid black",
            borderRadius:"20px",
            backgroundColor: "orange",
            textAlign:"center"
        }}> <div style={{textDecorationStyle:"wavy", fontStyle: "italic"}}>
            <h1>Movie: {movie1.name}</h1>
            <p>Release date: {movie1.date}</p>
            <p>Genre: {movie1.genre}</p>
            <div style={{
               display: "flow", alignContent:"center"}}>
            <img
            src={movie1.image}
            alt= {"Movie Photo"}
            style={{
                width:"220px",
                height:"180px",
                padding:"30px"
            }} />
            <p>Plot: {movie1.plot}</p>
            <p>ImbdLink: {movie1.imdbLink}</p>
            <h4>Director: {movie1.director}</h4>
            </div>
        </div>
        <div style={{textDecorationStyle:"double", fontStyle: "inherit"}}>
            <h1>Movie: {movie2.name}</h1>
            <p>Release date: {movie2.date}</p>
            <p>Genre: {movie2.genre}</p>
            <div style={{
               display: "flow", alignContent:"center"}}>
            <img
            src={movie2.image}
            alt= {"Movie Photo"}
            style={{
                width:"220px",
                height:"180px",
                border:"5px"
            }} />
            <p>Plot: {movie2.plot}</p>
            <p>ImbdLink: {movie2.imdbLink}</p>
            <h4>Director: {movie2.director}</h4>
            </div>
        </div>
        </div>
        
    )
}