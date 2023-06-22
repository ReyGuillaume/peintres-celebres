import { useEffect, useState } from 'react'
import ArtistCard from '../components/ArtistCard/ArtistCard'
import { data } from "../data"

const Home = () => {
  const [artists, setArtists] = useState([])

  useEffect(() => setArtists(data), [])

  return (
    <>
      {artists.map(artist => (
        <ArtistCard key={artist.id} artistId={artist.id} artistImageUrl={artist.url} artistName={artist.name} />
      ))}
    </>
  )
}

export default Home
