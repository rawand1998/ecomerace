import React from 'react'

function TrendingProduct() {
  return (
    <div className="trend-container">
        <div className="trend-nav">
            <h2>Trending This Week</h2>
            <div className="trend-menu">
                <a className="woman">Woman</a>
                <a>Men</a>
                <a>Baby</a>
                <a>Fashion</a>
            </div>
        </div>

        <div className="trend-img">
           
            <div className="trend-img1">
            <div>
                <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/xlatest4.jpg.pagespeed.ic.Lrd0UW2ap9.webp"/>
            </div>
                <h3>Cashmere Tank + Bag</h3>
                <span>852$</span>
            </div>
            <div className="trend-img1">
            <div>
                <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/xlatest2.jpg.pagespeed.ic.wreJQIyLHL.webp"/>
            </div>
                <h3>Cashmere Tank + Bag</h3>
                <span>852$</span>
            </div>
            <div className="trend-img1">
            <div>
                <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/xlatest3.jpg.pagespeed.ic.weRwbGvwtF.webp"/>
            </div>
                <h3>Cashmere Tank + Bag</h3>
                <span>852$</span>
            </div>
            <div className="trend-img1">
            <div>
                <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/xlatest1.jpg.pagespeed.ic.9LywwGvNeR.webp"/>
            </div>
                <h3>Cashmere Tank + Bag</h3>
                <span>852$</span>
            </div>
        </div>
    </div>
  )
}

export default TrendingProduct