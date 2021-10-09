import React from 'react'; 

function About() {
    return (
        <section id="about">
        <div class="container">
            <h2 class="about-heading">Get to Know <span class="text-primary"> Me</span></h2>
            <div class="about-content">
                <div class="about-text">
                <h3>A Little Bit <span class="text-primary">About Myself</span></h3>
                <p class="lead">
                    My name is Yussef Rafat a 20 year old currently on his come up on becoming a great and amazing  Software Developer. 
                </p>
                <p class="lead">
                    One of my passions is to TRAVEL the world I would love to be able to visit all six continents.
                </p>
                <p class="lead">
                    A young man full of ambitious love coding with a creative mindset.
                </p>
                

                </div>
            
            <div class="about-image">
                <img
                src={request('../../assets/IMG/avatar,jpeg')} 
                alt="avatar"
                /> 
            </div>
            </div>
        </div>
    </section>

    )
}

export default About;
