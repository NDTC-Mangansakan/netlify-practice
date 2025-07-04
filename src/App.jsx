import React, { useEffect, useState } from 'react'
import img1 from './assets/Images/destination-img-1.png'
import img2 from './assets/Images/destination-img-2.png'
import img3 from './assets/Images/destination-img-3.png'

const imgsToLoad = [img1, img2, img3]

const App = () => {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let loadCount = 0

    imgsToLoad.forEach(src => {
      const img = new Image()
      img.src = src
      img.onload = handleLoad
      img.onerror = handleLoad
    })

    function handleLoad(){
      loadCount += 1

      if (loadCount === imgsToLoad.length) {
        setIsLoading(false);
      }
    }
  }, [])
  return (
    <div style={{
      border:'1px solid',
      width: '100%',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)'
    }}>
      {
        imgsToLoad.map((src, index) => (
          <img key={index} src={src} className="w-full h-64 object-cover rounded-xl shadow" />
        ))
      }
    </div>
  )
}

export default App