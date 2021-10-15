import React from 'react';
import image1 from '../../images/image-1.jpg';
import image3 from '../../images/image-3.jpg';
import image2 from '../../images/image-2.jpg';


const Destinations = () => {

  return (
    <section className='destinations'>
      <h3 style={{color:"#205f2e" }}>How is it Useful</h3>
      
      <div className='grid'>
        <div className='main'>
          <img src={image1} alt='destination-1' />
          <h3>Reuse</h3>
          <p>
          .Reuse provides an excellent, environmentally-preferred alternative to waste management methods, 
          as it reduces air, water and land pollution, limits the need for new natural    
          </p>
        </div>

        <div className='main'>
          <img src={image2} alt='destination-2' />
          <h3>Reduce</h3>
          <p>
          Recycling is the process of converting waste materials into new materials and objects. It is the recovery
		  of energy from waste materials
		  
         
          </p>
        </div>

        

        
        <div className='main'>
          <img src={image3} alt='destination-3' />
          <h3> Refurbish</h3>
          <p> 	it is the distribution of products that have been previously returned to a manufacturer or vendor for various
			reasons.
			
          </p>
        </div>

        
</div>

        
     
		
    </section>
  )
}

export default Destinations
