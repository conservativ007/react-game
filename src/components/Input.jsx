import React, { useState, useEffect } from 'react';

export default function Input({setAudioVolume, setSoundClick}) {

  const useSlider = (min, max, defaultState) => {
    const [state, setSlide] = useState(defaultState);
    const handleChange = e => {
      console.log('setting level', e.target.value)
      setSlide(e.target.value);
      if(setAudioVolume) {
        setAudioVolume(e.target.value)
      }
      if(setSoundClick) {
        setSoundClick(e.target.value)
      }
      
    }
  
    const props = { 
      type: 'range',
      min,
      max,
      step: 0.1,
      value: state,
      onChange: handleChange
    }
    return props
  }

  const sliderProps = useSlider(0.1, 1.0, 0.5);

  return <input {...sliderProps}/>
}