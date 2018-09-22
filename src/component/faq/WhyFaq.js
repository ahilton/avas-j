import React from 'react'
import {Image} from "semantic-ui-react";

var img = require('../../img/insta-ava4.jpg')

const Faq = () => (

    <div>
        <p>
            The hard part; the cost to have this medication known as a Neuroblastoma vaccine as an international patient
            is US$160,000 – around AU$225,000. Which is not funded by pharmaceutical companies, government or hospitals.
        </p>
        <Image bordered rounded spaced='left' floated='left' size='medium' src={img}/>

        <p>
            The funding must come directly from the patient / carers. This cost is actually reduced from a much higher
            figure - this is a negotiated down price with the help of the Bradley Lowry foundation and Solving Kids
            Cancer charities based in the UK.
        </p>
        <p>
            The Neuroblastoma world specialists are at Memorial Sloan Kettering, a hospital in New York which sees over
            125 new cases of this rare cancer a year. They have 5 Neuroblastoma experts on site and the man recognised
            as the best neuroblastoma surgeon in the world.
        </p>
        <p>
            MSK has completed and published a phase 1 trial with children who have already relapsed with Neuroblastoma
            once and been cleared a second time (these are considered extremely tough cases). These kids would be
            expected to relapse again within a very short timeframe (months). The study shows these kids remaining
            relapse-free almost 3 years later.
        </p>
        <p>
            With this kind of data - you can see why any parent would want to give their child this chance of survival!
            What price can you place on giving a child the chance to live past the age of 5? We will do anything.
        </p>
    </div>
)


export default Faq