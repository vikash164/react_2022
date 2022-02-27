import React from 'react'
import Vmc from './inc/Vmc'

const About = () => {
    return (
        <div>
            <section className='py-4 bg-info'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8 my-auto'>
                            <h4>About us</h4>
                        </div>
                        <div className='col-md-8 my-auto'>
                            <h6 className='float-end'>
                                Home / About us
                            </h6>
                        </div>

                    </div>

                </div>
            </section>

            <section className='section  border-bottom '>
                <div className='container '>
                    <h5 className='main-heading'>Our Company</h5>
                    <div className='underline'></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis perferendis nobis
                         atque, autem sint fuga delectus, dicta iste reiciendis consectetur nemo sit tempore 
                         in porro voluptas dignissimos explicabo ullam laudantium!</p>
                </div>
            </section>

              {/* Our vision, mission and values */}

       <Vmc/>
            
        </div>
    )
}

export default About