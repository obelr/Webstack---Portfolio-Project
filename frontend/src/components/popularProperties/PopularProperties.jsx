import React from 'react'
import {Link} from 'react-router-dom'
import classes from './popularProperties.module.css'
import img1 from '../../assets/realestatebeach.jpg'
import img2 from '../../assets/realestatemountain.jpg'
import img3 from '../../assets/realestatecountryside.jpg'


import { FaBed, FaSquareFull } from 'react-icons/fa'

import { useState } from 'react'
import { useEffect } from 'react'
import { request } from '../../util/fetchAPI'

const PopularProperties = () => {
   const [featuredProperties, setFeaturedProperties] = useState([])

    useEffect(() => {
        const fetchFeatured = async () => {
            try {
                const data = await request("/property/find/featured", "GET")
                setFeaturedProperties(data)
                
            } catch (error) {
                console.error(error)
            }
        }
        fetchFeatured()
    }, [])

    console.log(featuredProperties)
  return (
    <div className={classes.container}>
        <div className={classes.wrapper}>
            <div className={classes.titles}>
                <h5>Different types of properties</h5>
                <h2>Best type of properties for you</h2>
            </div>
              {featuredProperties?.map((property) => (
            <div className={classes.properties} key={property._id}>
                <Link to={`/propertyDetail/${property._id}`} className={classes.property}>
                  <img src={`http://localhost:8080/images/${property?.img}`}/>
                  <div className={classes.quantity}>30 properties</div>
                  <h5>Beach properties</h5>
                </Link>
            
            </div>
              ))}
        </div>
    </div>
  )
}

export default PopularProperties