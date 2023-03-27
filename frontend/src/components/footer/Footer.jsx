import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About the App</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam illum quam optio autem suscipit incidunt dicta dolorum eum dolores recusandae laboriosam expedita quo facilis, numquam et.
            Delectus atque dolorum sapiente.
          </p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>Phone: +251 912 99 5895</span>
        
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <span>Continent: Africa</span>
          <span>Country: Ethiopia</span>
          <span>Current Location: Addis Ababa</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer