import { Typography } from "@material-ui/core";
import React from "react";

function Report() {
    return (
        <div>
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
        </div>
    );
}

export default Report