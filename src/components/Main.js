import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";

const Main = () => {

    const [joined, setJoined] = useState("");
    const history = useHistory();


    const join = (e) =>{
        e.preventDefault();
        if(joined !== ""){
            let today = new Date();
            let date = today.getFullYear()+ '-' +(today.getMonth()+1) + '-' + today.getDate();
            history.push(`/thanks/${joined}`, date );
        }

    }



    return(
        <React.Fragment>
            <header>
                
                <div>
                    <h1>We build &amp; design <br/> web applications.</h1>
                    <p> </p>
                    <Link to="/contact">Get in touch</Link>
                </div>
          
            </header>


            <main>
                <section className="services">
                     <h2>Why we should work together?</h2>

                     <div className="service-container">
                         <div className="services-card service-one"></div>
                         <div className="service-description">

                            <h3>SEO Friendly Apps.</h3>
                            <div></div>

                         </div>
                    </div>



                    <div className="service-container">
                      
                      <div className="services-card service-two"></div>
                      <div className="service-description">
                          <h3>Clear &amp; Optimized Code.</h3>
                          <div></div>
                      </div>
                    </div>



                    <div className="service-container">
                        <div className="services-card service-three"></div>
                        <div className="service-description">
                            <h3>Support 24 hours.</h3>
                            <div>.</div>
                        </div>
                      
                    </div>
                </section>

                <section>
                    <h2>Join our newsletter to get the latest trends.</h2>

                    <form className="newsletter" onSubmit={join}>
                        <input type="email" placeholder="Your email goes here" onChange={(e) => setJoined(e.target.value)} />
                        <input type="submit"  value="Join Now!"/>
                    </form>

                </section>
            </main>


        </React.Fragment>
    )
}


export default Main;