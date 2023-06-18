import { useState } from 'react'
import ArtistCard from '../components/ArtistCard/ArtistCard'

const Home = () => {
  const [artists, setArtists] = useState([
    {
      id: 1,
      url: 'https://th.bing.com/th/id/OIP.Rjit-VtcuL9In71Phto43wHaJk?pid=ImgDet&rs=1',
      name: 'Léonard de Vinci',
    },
  ])

  return (
    <>
      {artists.map(artist => (
        <ArtistCard key={artist.id} artistId={artist.id} artistImageUrl={artist.url} artistName={artist.name} />
      ))}
    </>
  )
}

export default Home
