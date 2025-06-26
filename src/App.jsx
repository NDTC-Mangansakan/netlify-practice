import React from 'react'
import img1 from '../public/Images/destination-img-1.png'
import img2 from '../public/Images/destination-img-2.png'
import img3 from '../public/Images/destination-img-3.png'

const App = () => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '200px 300px 200px'
    }}>
      <img src={img1} alt="" />
      <img src={img2} alt="" />
      <img src={img3} alt="" />
    </div>
  )
}

export default App