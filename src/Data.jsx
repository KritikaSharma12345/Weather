import React from 'react'
import { useState } from "react"
import Card from './Card'

export default function Data() {
    const [data,setData] = useState([])
    fetch('https://fakestoreapi.com/products/')
    .then((response)=>{
        return response.json()
    }).then((value)=>{
        setData(value)
    })

  return (
    <>
    <Card data ={data}/>
    </>
  )
}

// import { useState } from "react"

// const [data,setData] = useState([])
// let p = fetch('https://fakestoreapi.com/products/')
// p.then((response)=>{
//     return response.json
// }).then((value)=>{
//     console.log(setData)
// })
