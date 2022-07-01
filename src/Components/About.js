import React from 'react'

function About() {
  return (
    <div className="about-container">
        <div className="about-description">
            <span>BEST SETVOICE</span>
            <p>Here to make your life <br/> more easier</p>
        </div>
        <div className="three-about-section">
            <div className="about-section">
                <div className="about-section-img">
                    <div className="img1">
                        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"/> <p>Hello Herer</p>
                    </div>
                    <div className="img2">
                        <p>How can i..</p>
                        <p className="empty-div"></p>
                    </div>
                </div>
                <div className="about-section-desc">
                    <p className="title">Quik response</p>
                    <p className="title-description">The final tech sit amet,<br/>consectetur some adipiscing <br/>olit sed do elusmod</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About