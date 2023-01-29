import React, { useEffect,useState } from 'react'
import Search from './Search'
import token from '../util/token'
import Artist from './Artist';

const URL ="https://api.spotify.com"

const apiHeaders = new Headers();
apiHeaders.append("Authorization",token.id);

const reqOption = {
    method:'GET',
    headers: apiHeaders,
    redirect:'follow'

}




const Music = () => {
    const [artist,setArtist]= useState([])

    const searchHandler = (artistName)=> {
        fetch(`${URL}/v1/search?q=${artistName}&type=artist`,reqOption)
        .then(res=>res.json())
        .then(out=>{
            console.log('artist',out);
            setArtist(out.artists.items) //20 items in artist
        }).catch(err =>console.log(err.message))
    }

    useEffect(()=>{
        searchHandler("Sonu nigam")
    },[])

  return (
    <div className="container">
    <div className="row">
        <h3 className="col-md-12  text-center">
            <h3 className='display-3'>Music Player</h3>
        </h3>
    </div>
    <Search artistSearch = {searchHandler}/>
    <Artist artistInfo={artist} pageCount={6}/>
</div>

   
   
   
  )
}

export default Music