import React, { Component } from "react";
import './Home.css'
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'; 
import NavBar from './components/NavBar'
import Grid from './components/Grid'
import { Link } from "react-router-dom";
import { FormatUnderlined } from "@material-ui/icons";

function Home(){
    return(
        <div className="Home">
            <div class="container text-center">
            <div class="row">
                <div className="firstBlock">
                    <Typography className="title1" varient="h6" align = "center" >
                        Incarcerated America
                    </Typography>
                    <Typography className="title2" variant="h6" align= "center">
                        Unseen Americans and their Political power
                    </Typography>
                    
                    <Typography className="para1" varient="p" >
                        The United States of America The US has the world's highest incarceration rate. Current estimates indicate 
                        that there are approximately 2.3 million people incarcerated in the United States, with an additional 4.5 million people 
                        on probation or parole. Despite representing under 5% of the global population, the US holds almost 20% of the global prison 
                        population according to the&nbsp;
                        <a href="https://sites.tufts.edu/prisondivestment/the-pic-and-mass-incarceration/" className= "Tuffs" target={"_blank"}>
                            Tuffs University Prison Divestment.
                        </a>
                    </Typography>
                </div>
            </div>
        
        </div>
    
    <section className="section-1">
        <div className="imgSplit">
            <div className="LiArt"></div>
            <div className="Complex">
                <Typography variant="h6" align="left">
                    The Prison Industrial Complex
                </Typography>
                <Typography vairent="p" align="left" >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat molestias nobis mollitia tempora optio facilis laboriosam laborum 
                        repudiandae cum provident, magni culpa quidem ratione id praesentium aliquam sapiente totam nesciunt.Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Placeat molestias nobis mollitia tempora optio facilis laboriosam laborum repudiandae cum provident, magni culpa quidem 
                        ratione id praesentium aliquam sapiente totam nesciunt.
                        </Typography>
                        <Typography vairent="p" align="left" display="block">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat molestias nobis mollitia tempora optio facilis laboriosam laborum 
                        repudiandae cum provident, magni culpa quidem ratione id praesentium aliquam sapiente totam nesciunt.Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit.
                </Typography>
            </div>
        </div>
    </section>

    <section class="section-2 container-fluid p-0">
        <div class="cover">
            <div class="content text-center">
                <h1>
                    With over 20% of the global prison population, most Americans forget about the number of people behind bars in our very own cities. The following map shows a glimse
                    of the incarcerated people within each county across the United States.  
                </h1>
            </div>
            <div>
                 <iframe frameborder="0" scrolling="no" marginheight="50px" marginwidth="0" 
                  src="https://www.washingtonpost.com/wp-srv/special/business/prisoners/index.html?template=iframe"></iframe>
            </div>
        </div>
    </section>
    
    <section class="section-4">
        <div class="container text-center">
            <h1 class="text-dark">What our Readers say about us</h1>
            <p class="text-secondary">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Perferendis enim possimus ad rerum labore? Blanditiis ex molestias 
                totam eaque enim voluptas atque saepe animi perspiciatis autem iusto quia, 
                nemo laboriosam.
            </p>
        </div>
        <div class="team row">
            <div class="col-md-4 col-12 text-center">
                <div class="card mr-2 d-inline-block shadow-lg">
                    <div class="card-img-top">
                        <img src="../assets/perry.png" alt="Perry" class="img-fluid"/>
                    </div>
                    <div class="card-body">
                        <h3 class="card-title">Perry the Platypus</h3>
                        <p class="card-text">Gyururururururu</p>
                        <a href="#" class="text-secondary text-decoaration-none">Go Somwhere</a>
                        <p class="text-black-50">Agent P </p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 text-center">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                      <div class="carousel-item active text-center">
                        <div class="card mr-2 d-inline-block shadow-lg"> 
                            <div class="card-img-top">
                                <img src="../assets/Snowball.jpeg" alt="Snuffles" class="img-fluid"/>
                            </div>
                            <div class="card-body">
                                <h3 class="card-title">Snuffles</h3>
                                <p class="card-text">
                                    Do not call me that! Snuffles was my slave name. You shall now call me Snowball, 
                                    because my fur is pretty and white.
                                </p>
                                <a href="#" class="text-secondary text-decoaration-none">Leave.</a>
                                <p class="text-black-50">Canine Revolutionary </p>
                            </div>
                        </div>
                      </div>
                      <div class="carousel-item text-center">
                        <div class="card mr-2 d-inline-block shadow-lg"> 
                            <div class="card-img-top">
                                <img src="../assets/Jake the dog.jpeg" alt="Jake" class="img-fluid"/>
                            </div>
                            <div class="card-body">
                                <h3 class="card-title">Jake the Dog</h3>
                                <p class="card-text">
                                    Ooooooh
                                </p>
                                <a href="#" class="text-secondary text-decoaration-none">...</a>
                                <p class="text-black-50">Adventurer </p>
                            </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-12 text-center">
                <div class="card mr-2 d-inline-block shadow-lg">
                    <div class="card-img-top">
                        <img src="../assets/dexter.png" alt="Dexter" class="img-fluid"/>
                    </div>
                    <div class="card-body">
                        <h3 class="card-title">Dexter</h3>
                        <p class="card-text">Dee Dee what are you doing in my laboratory!?</p>
                        <a href="#" class="text-secondary text-decoaration-none">Get Out</a>
                        <p class="text-black-50">Mad Scientist</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
        </div>
    );
} 

export default Home