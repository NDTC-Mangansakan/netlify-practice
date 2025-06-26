import React from 'react'
import img1 from './assets/Images/destination-img-1.png'
import img2 from './assets/Images/destination-img-2.png'
import img3 from './assets/Images/destination-img-3.png'

const App = () => {
  return (
    <div style={{
      border:'1px solid',
      width: '100%',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)'
    }}>
      <img src={img1} alt="" style={{ width: '100%',  objectFit: 'cover' }} />
      <img src={img2} alt="" style={{ width: '100%',  objectFit: 'cover' }} />
      <img src={img3} alt="" style={{ width: '100%',  objectFit: 'cover' }} />
    </div>
  )
}

export default App