import React from "react";
// import { Movies } from "./components/Movies";
// import { LifecycleExample } from "./components/LifecycleExamples";
import { StateExamples } from "./components/StateExamples";

// const filmovi = [
//   {name:"The Shawshank Redemption", 
//     date: "10/09/1994", 
//     genre:"Drama", 
//     plot:"Andy Dufresne is sent to Shawshank Prison for the murder of his wife and her secret lover. He is very isolated and lonely at first, but realizes there is something deep inside your body that people can't touch or get to... 'HOPE.' Andy becomes friends with prison 'fixer' Red, and Andy epitomizes why it is crucial to have dreams. His spirit and determination lead us into a world full of imagination, one filled with courage and desire. Will Andy ever realize his dreams?", 
//     imdbLink:"https://www.imdb.com/title/tt0111161/?ref_=chttp_t_1",
//     imgURL:"https://miro.medium.com/v2/resize:fit:1100/format:webp/0*Ux4LIFqnqxhGBWXJ.jpg"},
//     {name:"Back to the Future", 
//     date: "03/07/1985", 
//     genre:"Adventure, Comedy", 
//     plot:"Marty McFly, a typical American teenager of the Eighties, is accidentally sent back to 1955 in a plutonium-powered DeLorean time machine invented by a slightly mad scientist. During his often hysterical, always amazing trip back in time, Marty must make sure his teenage parents-to-be meet and fall in love to get back to the future", 
//     imdbLink:"https://www.imdb.com/title/tt0088763/",
//     image:"https://cdn.shopify.com/s/files/1/0047/2989/7030/collections/back-to-the-future-the-musical-triplet-one-RE12.jpg?v=1600302173"}
// ]


export function App(){

  return(
    <div id="app">
      <StateExamples />
      {/* <Movies
      filmovi={filmovi} /> */}
      {/* <LifecycleExample /> */}
    </div>
  )
}