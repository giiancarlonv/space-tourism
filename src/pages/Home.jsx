import { Navbar } from '../Navbar';
import { Link } from 'react-router-dom';
import { HomeBG } from '../data';


export function Home(){
  return(
    <>
    <HomeBG />
    <Navbar />
      <div className="home">
        <section>
          <h5>So, you want to travel to</h5> 
          <h1>Space</h1>
          <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
          outer space and not hover kind of on the edge of it. Well sit back, and relax 
          because we’ll give you a truly out of this world experience!</p>
        </section>
        <Link to='/moon' ><button>Explore</button></Link>
      </div>    
    </>
  );
}