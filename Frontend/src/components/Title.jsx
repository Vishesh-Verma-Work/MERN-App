import React from 'react'
const Title = ({title}) => {
    return (  
    <>
    {   
        title && 
        <>
        <h3 className='title'>{title}</h3>
        <hr/>
        </>
    }
    </>
  )
}

export default Title;
