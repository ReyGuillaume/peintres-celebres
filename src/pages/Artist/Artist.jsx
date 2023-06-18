import { useParams } from 'react-router-dom'
import { useState } from 'react'
import Oeuvre from '../../components/Oeuvre/Oeuvre'

import './Artist.css'

const Artist = () => {
  let { artistId } = useParams()

  const artist = {
    id: 1,
    url: 'https://th.bing.com/th/id/OIP.Rjit-VtcuL9In71Phto43wHaJk?pid=ImgDet&rs=1',
    name: 'Léonard de Vinci',
  }

  const [oeuvres, setOeuvres] = useState([
    {
      id: 1,
      name: 'Mona Lisa',
      url: 'https://th.bing.com/th/id/OIP.9N6roKD8IUieYWom8Gq1IQHaLM?pid=ImgDet&rs=1',
      date: '1503 - 1505',
    },
    {
      id: 2,
      name: 'Madonna Litta',
      url: 'https://th.bing.com/th/id/R.36e9903941e7f9eb61b234b68d472c76?rik=4e2ZcqVCbDjV1Q&riu=http%3a%2f%2f3.bp.blogspot.com%2f_Jlmku534qz0%2fTUX1dT_YV6I%2fAAAAAAAAA1I%2fnwxDNjipfFw%2fs1600%2fns_paciencia.jpg&ehk=VL8U8%2bYAnerb52JBENQZDgjURfhx2uUtxaI86lxpwNw%3d&risl=&pid=ImgRaw&r=0',
      date: '1490 - 1491',
    },
  ])

  console.log(artistId)

  return (
    <>
      <h1 className="title">Créations de {artist.name}</h1>
      <section className='content'>
        {oeuvres.map(oeuvre => (
          <Oeuvre key={oeuvre.id} {...oeuvre} artist={artist} />
        ))}
        <h2 className="side-title">{artist.name}</h2>
      </section>
    </>
  )
}

export default Artist
