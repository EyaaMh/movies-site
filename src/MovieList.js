import React, { useRef, useState } from 'react'
import Item from './items'
import Navbar from './Navbar';
import  './MovieList.css'

import Add from './Add.js';
function MovieList() {

    const [movies,setMovie]=useState(
           [
              {name:"Jhon Wick 11",image:"https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg",rate:"3"},
              {name:"",image:"https://upload.wikimedia.org/wikipedia/en/2/24/Creed_poster.jpg",rate:"3"},
              {name:"",image:"https://amc-theatres-res.cloudinary.com/v1648561164/amc-cdn/production/2/movies/67400/67369/PosterDynamic/136797.jpg",rate:"3"},
              {name:"",image:"https://i.ytimg.com/vi/hUikYic751Q/movieposter_en.jpg",rate:"3"},
              {name:"",image:"https://m.media-amazon.com/images/M/MV5BMDU2ZmM2OTYtNzIxYy00NjM5LTliNGQtN2JmOWQzYTBmZWUzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",rate:"3"},
              {name:"",image:"https://images.moviesanywhere.com/c9b039ffb143f8eea8b7d66d3cfd8949/8a030796-a13c-4acd-b88f-dbd2b161c0b1.jpg?h=375&resize=fit&w=250",rate:"3"},
              {name:"",image:"https://cps-static.rovicorp.com/2/Open/NBC_Universal/Program/32103114/_derived_jpg_q90_310x470_m0/32103114_Sing_2_PA_2x3_6_1637845064438_10.jpg",rate:"3"},
              {name:"",image:"https://lumiere-a.akamaihd.net/v1/images/au_poster_movies_20cs_avatar2_wayofwater_teaser_cc6f7f91.jpeg?region=0,0,540,800",rate:"3"},
              {name:"",image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:q-80/et00122133-bbggujchps-portrait.jpg",rate:"3"},
           
           



            ])

 const namemovie=useRef();
 console.log(namemovie)
return (
    <div className='CONTAINER'>
        <Navbar ></Navbar>

        <div className='movie-groupe'>
      {movies.map((e) => (
     
        <Item name={e.name} image={e.image} rate={e.rate}></Item>
      ))}
      </div>
    <Add movies={movies} setMovie={setMovie}/>
    </div>
  );
    
    
   
}

export default MovieList