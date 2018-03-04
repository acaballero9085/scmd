import React, { Component } from 'react'
import Divider from 'material-ui/Divider'

import jeremy from '../assets/jeremy.png'
import beavers from '../assets/beavers.jpg'
import blake from '../assets/blake.jpg'
import patrick from '../assets/patrick.jpg'
import Siegel from '../assets/Siegel .jpg'

// Styles
import './About.css'

class About extends Component {
    render(){
        return(
            <div>
                <div className='picture-container'>
                    <img src={Siegel} width='100%' style={{marginTop: '-6rem'}} />
                </div>

                <div className='about-container'>
                    <p className='about-text'>About Us</p>
                </div>

                <div className='about-text-container'>

                    <h1>About Us</h1>

                    <p>Our design philosophy is simple. We believe that design isn't how things look, but how they work. 
                        We believe that regardless of a groups size or skill set they can have a well designed and fully 
                        integrated show. With 30+ years of combined experience and a long record of success SouthCoast can 
                        provide great work to a program of any level.
                    </p>

                    <h1>Meet the SouthCoast Team</h1>

                    <div className='card-container'>

                        <div className='left-about-container'>

                            <h2>Jeremy Smith</h2>
                            <h3>Percussion and Wind Arrangements/Designer</h3>

                            <p>Jeremy Smith is a composer, percussionist, and educator born and raised 
                                in Muscle Shoals, AL. During his time as a percussionist he has served 
                                many roles on both sides of the drum as a player and educator. Jeremy is 
                                an alumni of Muscle Shoals High School, Music City Drum Corps, and Freedom 
                                Indoor Percussion. He currently designs, arranges, consults, and instructs 
                                for multiple groups across the country.
                            </p>

                            <p>In 2014 he served as the battery arranger and battery caption head for Southwind 
                                Drum and Bugle Corps. From 2015-2017 he was a battery staff member at Clarksville 
                                Audio Theatre and Music City Drum Corps. Jeremy currently serves as the director 
                                of percussion at Siegel High School and as program coordinator for Chattanooga 
                                Independent Percussion Ensemble.
                            </p>

                            <p>Off the field Jeremy is a composer of chamber works, symphonic works, vocal works, 
                                soundtracks, and music for dance whose influences range from popular music to Bach. 
                                Described by SET Magazine as “One of the most unique and promising talents the Shoals 
                                has ever produced,” he has had a number of successes in his time as a composer. In 2015 
                                he was the first composer to ever win the Shoals Symphony Solo Artist Contest for his 
                                work “The Fourth Wall for Symphonic Winds and Percussion”. He has twice been selected as 
                                a resident the Azule Artist Residency in Hot Springs, NC where he worked as a resident and 
                                composer. In April of 2017 he premiered his work “The Singularity: A Modern Ballet” to sell 
                                out crowds in Florence, Al. His latest work, “A Setting of the Text of the Mass Ordinary” was 
                                commissioned by The Shoals Chamber Singers and premiered in December of 2017. In April of 2018 
                                his work “In 3 Short Movements for Flute Quartet” will be performed at the SoundNow Music 
                                Festival in Atlanta, Ga. 
                            </p>

                            <p>Jeremy currently resides in Nashville, TN and is attending the University of North Alabama where 
                                he is finishing his final semester as a student of composition and philosophy.
                            </p>

                        </div>

                        <div className='right-container'>
                            <img className='j-profile' src={jeremy} height='600px'/>
                        </div>
                    </div>

                    <div className='card-container'>

                        <div className='left-about-container'>

                            <h2>Jonathan Beavers</h2>
                            <h3>Percussion and Wind Drill Writer/Designer</h3>

                            <p>Jonathan Beavers is a freelance drill/show designer and choreographer currently 
                                living in Nashville, TN. He attends Athens State University where he will receive 
                                a Bachelor’s degree in Business Management and Small Business/ Entrepreneurship.
                            </p>

                            <p>Jonathan was a member of Music City Drum Corps in 2011 as well as the 2014 Silver 
                                Medalist Bluecoats Drum Corps, where he received the award for being the Visual 
                                Performer of the Year. He was also a member of the 8-time World Champion Music City 
                                Mystique Indoor Drumline from 2012-2015 winning 2 silver medals, 1 bronze medal and 
                                a 4th place finish.
                            </p>

                            <p>Jonathan is currently the Visual Coordinator at Siegel High School, a consistent BOA 
                                Regional Finalist. He also works with Fred J. Page High School, an 8-time State 
                                Champion Marching Band and has worked with various other high school marching bands 
                                including Bob Jones High School and Father Ryan High School. Jonathan is currently 
                                on visual staff with the Bluecoats Drum Corps and has also worked on visual staff 
                                with Music City Drum Corps. During the indoor season, Jonathan has worked with Music 
                                City Mystique as well as various other high schools and independent drumlines in the 
                                southeastern region.
                            </p>

                            <p>Jonathan has designed and/or choreographed for multiple groups including Music City 
                                Drum Corps, Fred J Page High School, Bob Jones High School, Austin High School, 
                                Momentum Independent Indoor Percussion, Station Camp High School, Hillwood High School, 
                                Independence High School and Blue Springs South High School. 
                            </p>

                        </div>

                        <div className='right-container'>
                            <img className='jb-profile' src={beavers} height='600px'/>
                        </div>
                    </div>

                    <div className='card-container'>

                        <div className='left-about-container'>

                            <h2>Blake Lankford</h2>
                            <h3>Percussion Arranger/Sound Designer</h3>

                            <p>Blake Lankford is a percussionist, teacher, and sound designer in Florence, AL. 
                                Blake has been a performing musician for nearly a decade, with various ensembles 
                                and touring bands. He was a member of the Music City Mystique Front Ensemble for 
                                the 2010 (Bronze), 2011 (Gold), and 2012 (Silver) indoor seasons, and was a member 
                                of the University of North Alabama Wind Ensemble for five years during his college 
                                career, spending two of those years as the Principal Percussionist and a featured 
                                member of the Percussion Ensemble.
                            </p>

                            <p>Blake has been a member of the education and design staff of several high school 
                                programs in the North Alabama and Middle Tennessee area, most recently with Columbia 
                                Central High School in Columbia, TN and currently with Siegel High School in 
                                Murfreesboro, TN. He also taught with Music City Drum Corps in Nashville, TN from 
                                2013 to 2015, serving as the Front Ensemble Coordinator in 2014/2015 and working with 
                                Clarksville Audio Theater in their 2016 indoor season, as well as providing design and 
                                consultant services for various other independent marching ensembles in Tennessee, Alabama, 
                                and Texas.
                            </p>

                            <p>Blake’s front ensemble writing, sound design, and program design has been a part of many 
                                successful programs in marching band, drum corps, scholastic and independent marching indoor, 
                                and concert indoor activities. His is approach is one that uses both acoustic instruments 
                                and electronics/effect contribution to create an “environment of sound” that fit and illustrates 
                                the mood, context, and desired effect of the show to the ear of the listener.
                            </p>

                        </div>

                        <div className='right-container'>
                            <img className='jb-profile' src={blake} height='600px'/>
                        </div>
                    </div>

                    <div className='card-container'>

                        <div className='left-about-container'>

                            <h2>Patrick Nolen</h2>
                            <h3>Colorguard and Winterguard Choreographer/Designer</h3>

                            <p>Patrick Nolen is a marching band visual and design consultant, color guard choreographer, 
                                and winter guard designer that resides in Birmingham, AL. He began his color guard 
                                career as a member of the University of Alabama at Birmingham Marching Blazers and began 
                                winter guard in 2012 with Amor Winterguard as a cast member of "What Good Am I?" and "The 
                                Raven". He marched as a color guard member of Atlanta CV Drum and Bugle Corps in 2016 and 
                                again in 2017 where they won High Guard. 
                            </p>

                            <p>Patrick’s education in the arts continues to grow as he works with guards across the southeast. 
                                He founded 2 time Southeastern Color Guard Circuit Independent A Gold Medalist, Divenire 
                                Winterguard. Patrick designs and collaborates with guards and marching bands of different 
                                sizes as a visual consultant, color guard choreographer, and concept designer.
                            </p>

                        </div>

                        <div className='right-container'>
                            <img className='p-profile' src={patrick} height='600px'/>
                        </div>
                    </div>

                </div>
                

                <Divider/>

                <div className='social-media-links-container'>
                    <a href="https://www.w3schools.com" target='_blank' rel="noopener noreferrer">
                        <div className='icon-container'>
                            <i className="fab fa-facebook-f fa-2x" style={{color: '#fff'}}></i>
                        </div>
                    </a>

                    <a href="https://www.w3schools.com" target='_blank' rel="noopener noreferrer">
                        <div className='icon-container'>
                            <i class="fab fa-twitter fa-2x" style={{color: '#fff'}}></i>
                        </div>
                    </a>

                    <a href="https://www.w3schools.com" target='_blank' rel="noopener noreferrer">
                        <div className='icon-container'>
                            <i class="fab fa-instagram fa-2x" style={{color: '#fff'}}></i>
                        </div>
                    </a>
                </div>

            </div>
        )
    }
}

export default About