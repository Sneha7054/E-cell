import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const FirstPage = () => {
  
  const [gridColors, setGridColors] = useState(Array(9).fill('bg-green-500'));


  const [clickSequence, setClickSequence] = useState([]);

  const handleSquareClick = (index) => {
    
    if (!clickSequence.includes(index)) {
      setClickSequence([...clickSequence, index]);
    }

    
    if (index !== 8) {
      const newColors = [...gridColors];
      newColors[index] = 'bg-red-500';
      setGridColors(newColors);
    }

   
    if (index === 8) {
      changeToBlueInSequence();
    }
  };

  const changeToBlueInSequence = () => {
    
    let newColors = [...gridColors];
  

    clickSequence.forEach((squareIndex, i) => {
      setTimeout(() => {
        newColors[squareIndex] = 'bg-blue-500'; 
        setGridColors([...newColors]); 
      }, i * 300); 
    });
  
    setTimeout(() => {
      newColors[8] = 'bg-blue-500';
      setGridColors([...newColors]);
    }, clickSequence.length * 300);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-5">
      <Navbar />
      <div className="flex flex-wrap gap-5 justify-center items-center mt-10">
      
        <div className="w-60 h-60 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-md"></div>

       
        <div className="w-60 h-60 bg-white rounded-2xl shadow-md flex justify-center items-center">
          <img src="/public/Assets/images.png" alt="E-cell Logo" className="h-40 w-40 object-contain" />
        </div>

        
        <div className="w-60 h-60 bg-white rounded-2xl shadow-inner p-3">
          <div className="grid grid-cols-3 gap-2">
            {gridColors.map((color, index) => (
              <div
                key={index}
                className={`w-16 h-16 ${color} rounded shadow`}
                onClick={() => handleSquareClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
