import React from 'react'
import outdoors from '../../Assets/outdoors.jpeg'
import tech from '../../Assets/tech.jpeg'
import family from '../../Assets/family.jpeg'
import wellness from '../../Assets/wellness.jpeg'
import sports from '../../Assets/sports.jpeg'
import learning from '../../Assets/learning.jpeg'
import photography from '../../Assets/photography.jpeg'
import food from '../../Assets/food.jpeg'
import writing from '../../Assets/writing.jpeg'
import language from '../../Assets/language.jpeg'
import music from '../../Assets/music.jpeg'
import movements from '../../Assets/movements.jpeg'
import lgbtq from '../../Assets/lgbtq.jpeg'
import film from '../../Assets/film.jpeg'
import scifi from '../../Assets/scifi.jpeg'
import beliefs from '../../Assets/beliefs.jpeg'



export default function CategoryGrid() {
    return (
        <div className='categoryGrid'>
            <div className='gridCategoryRow'>
                <div className='gridItem'>
                    <img src={outdoors} alt="img" />
                    <h3>Outdoors</h3>
                </div>
                <div className='gridItem'>
                    <img src={tech} alt="img" />
                    <h3>Tech</h3>
                </div>
            </div>
            <div className='gridCategoryRow'>    
                <div className='gridItem'>
                    <img src={family} alt="img" />
                    <h3>Family</h3>
                </div>
                <div className='gridItem'>
                    <img src={wellness} alt="img" />
                    <h3>Wellness</h3>
                </div>
            </div>

            <div className='gridCategoryRow'>
                <div className='gridItem'>
                    <img src={sports} alt="img" />
                    <h3>Sports</h3>
                </div>
                <div className='gridItem'>
                    <img src={learning} alt="img" />
                    <h3>Learning</h3>
                </div>
            </div>
            <div className='gridCategoryRow'>            
                <div className='gridItem'>
                    <img src={photography} alt="img" />
                    <h3>Photography</h3>
                </div>
                <div className='gridItem'>
                    <img src={food} alt="img" />
                    <h3>Food</h3>
                </div>
            </div>

            <div className='gridCategoryRow'>
                <div className='gridItem'>
                    <img src={writing} alt="img" />
                    <h3>Writing</h3>
                </div>
                <div className='gridItem'>
                    <img src={language} alt="img" />
                    <h3>Language</h3>
                </div>
            </div>
            <div className='gridCategoryRow'>            
                <div className='gridItem'>
                    <img src={music} alt="img" />
                    <h3>Music</h3>
                </div>
                <div className='gridItem'>
                    <img src={movements} alt="img" />
                    <h3>Movements</h3>
                </div>
            </div>

            <div className='gridCategoryRow'>
                <div className='gridItem'>
                    <img src={lgbtq} alt="img" />
                    <h3>LGBTQ</h3>
                </div>
                <div className='gridItem'>
                    <img src={film} alt="img" />
                    <h3>Film</h3>
                </div>
            </div>
            <div className='gridCategoryRow'>            
                <div className='gridItem'>
                    <img src={scifi} alt="img" />
                    <h3>Sci-Fi</h3>
                </div>
                <div className='gridItem'>
                    <img src={beliefs} alt="img" />
                    <h3>Beliefs</h3>
                </div>
            </div>


        </div>
    )
}