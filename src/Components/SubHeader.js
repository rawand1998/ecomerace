import React from 'react'

function SubHeader() {
  return (
    <div className="subheader-conatiner">
        <div className="subheader-description">
            <h1>Experts<br/> with <strong>Mega</strong> <br/> vision.</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            <button>Explore Now</button>
        </div>
        <div className="subheader-image">
          <img src="../../assets/header.png" />
        </div>
    </div>
  )
}

export default SubHeader