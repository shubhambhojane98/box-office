import React from 'react'
import ActorCard from './ActorCard'
import Image_Not_Found from '../../images/not-found.png'
import { FlexGrid } from '../styled'



const ActorGrid = ({data}) => {
    return (
        <FlexGrid>
            {
                data.map(({person}) => (
                    <ActorCard 
                    key={person.id} 
                    name={person.name} 
                    country = {person.country ? person.country.name : null} 
                    birthday={person.birthday} 
                    deathday={person.deathday} 
                    gender={person.gender} 
                    image={person.image ? person.image.medium : Image_Not_Found} 
                    />
                ))
            }
        </FlexGrid>
    )
}

export default ActorGrid
