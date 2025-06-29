import React from "react"
import { Movies } from "./components/Movies"

  let movie1 = {
    name:"The Shawshank Redemption", 
    date: "10/09/1994", 
    genre:"Drama", 
    plot:"Andy Dufresne is sent to Shawshank Prison for the murder of his wife and her secret lover. He is very isolated and lonely at first, but realizes there is something deep inside your body that people can't touch or get to... 'HOPE.' Andy becomes friends with prison 'fixer' Red, and Andy epitomizes why it is crucial to have dreams. His spirit and determination lead us into a world full of imagination, one filled with courage and desire. Will Andy ever realize his dreams?", 
    imdbLink:"https://www.imdb.com/title/tt0111161/?ref_=chttp_t_1",
    image:"https://miro.medium.com/v2/resize:fit:1100/format:webp/0*Ux4LIFqnqxhGBWXJ.jpg",
    director:"Frank Darabont"
  }  
  let movie2 = {
    name:"Forrest Gump", 
    date: "07/10/1994", 
    genre:"Drama, Romance", 
    plot:"Forrest Gump is a simple man with a low I.Q. but good intentions. He is running through childhood with his best and only friend Jenny. His 'mama' teaches him the ways of life and leaves him to choose his destiny. Forrest joins the army for service in Vietnam, finding new friends called Dan and Bubba, he wins medals, creates a famous shrimp fishing fleet, inspires people to jog, starts a ping-pong craze, creates the smiley, writes bumper stickers and songs, donates to people and meets the president several times. However, this is all irrelevant to Forrest who can only think of his childhood sweetheart Jenny Curran, who has messed up her life. Although in the end all he wants to prove is that anyone can love anyone.", 
    imdbLink:"https://www.imdb.com/title/tt0109830/?ref_=mv_close",
    image:"https://resizing.flixster.com/kNAalgVTTW4PiJNLyUlQrRoXbTA=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15829_v_h9_aa.jpg",
    director:"Robert Zemeckis"}

    let movie3 = {
      name: "The Dark Knight",
      date: "24/07/2008",
      genre: "Action, Crime, Drama, Thriller",
      plot: "Set within a year after the events of Batman Begins (2005), Batman, Lieutenant James Gordon, and new District Attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City, until a mysterious and sadistic criminal mastermind known only as The Joker appears in Gotham, creating a new wave of chaos. Batman's struggle against The Joker becomes deeply personal, forcing him to confront everything he believes and improve his technology to stop him. A love triangle develops between Bruce Wayne, Dent, and Rachel Dawes.",
      imdbLink: "https://www.imdb.com/title/tt0468569/?ref_=chttp_i_3",
      image: "https://m.media-amazon.com/images/I/9131BgavE-L._AC_UF894,1000_QL80_.jpg",
      director: "Christopher Nolan"
    }

export function App() {

  return(
    <div>
      <Movies 
      movie1={movie1}
      movie2={movie2}
      movie3={movie3}
      
      />
    </div>
  )
}