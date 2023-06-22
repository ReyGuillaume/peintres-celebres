import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Oeuvre from '../../components/Oeuvre/Oeuvre'
import {data} from "../../data"

import './Artist.css'

const Artist = () => {
  let { artistId } = useParams()

  const [artist, setArtist] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setArtist(data.find(elt => elt.id.toString() === artistId.toString()))
    setLoading(false)
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h1 className="title">Créations de {artist.name}</h1>
      <section className='content'>
        {artist.oeuvres.map(oeuvre => (
          <Oeuvre key={oeuvre.id} {...oeuvre} artist={artist} />
        ))}
        <h2 className="side-title">{artist.name}</h2>
      </section>
    </>
  )
}

export default Artist
