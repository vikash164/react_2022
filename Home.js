import React from 'react'
import { Link } from 'react-router-dom'
import Slider from '../inc/Slider'
import Vmc from './inc/Vmc'
import Service1 from '../images/Service1.jpg'
const Home = () => {
    return (
        <div>
            <Slider/>
       <section className='section'>
           <div className='container'>
               <div className='row'>
                   <div className='col-md-4'>
                       <h2 className='main-heading'>Our company</h2>
                       <div className='underline mx-auto'></div>
                       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora maxime distinctio consequuntur non similique? Ex molestias earum dolore aut sequi?</p>
                       <Link to="/about" className='btn btn-warning shadow'>Read More</Link>

                   </div>
               </div>
           </div>

       </section>
       {/* Our vision, mission and values */}

       <Vmc/>

       {/* Our Services */}

       <section className='section  border-top'>
           <div className='container '>
               <div className='row'>
                   <div className='col-md-12 mb-8 text-center'>
                       <h2 className='main-heading'>Our Services</h2>
                       <div className='underline mx-auto'></div>
                     <div className='col-sm-4 py-3'>
                         <div className='card shadow'>
                         <img src={Service1} className='w-10 border-botton' alt='Services'/>
                             <div className='card-body'>
                                 <h4>Service 1</h4>
                                 <div className='underline'></div>
                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cupiditate 
                                     consectetur error fugiat aut vero nulla, molestias similique 
                                     iure quasi deserunt eligendi minus temporibus rem blanditiis repellendus nisi autem. Eligendi.</p>
                                     <Link to='/Services' className='btn btn-link'>Read More</Link></div>
                                     </div>
                                

                             </div>
                     <div className='col-sm-4 py-3'>
                         <div className='card shadow text-end'>
                         <img src={Service1} className='w-10 border-botton' alt='Services'/>
                             <div className='card-body'>
                                 <hr/>
                                 <h4>Service 2</h4>
                                 <div className='underline'></div>
                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cupiditate 
                                     consectetur error fugiat aut vero nulla, molestias similique 
                                     iure quasi deserunt eligendi minus temporibus rem blanditiis repellendus nisi autem. Eligendi.</p>
                                    
                                 <Link to='/Services' className='btn btn-link'>Read More</Link>
                                </div>  

                             </div>
                         
                        </div>

                   </div>
               </div>
           </div>

       </section>

        </div>
        
    )
}

export default Home
