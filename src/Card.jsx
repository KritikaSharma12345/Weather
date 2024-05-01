import React from 'react'

export default function Card({data}) {
  return (
    <>{
        data.map((value) => (
            <h3>{value.id}</h3>
            // <h3>{value.titel}</h3>
            // <h3>{value.description}</h3>
        ))
    }
    </>
  )
}
