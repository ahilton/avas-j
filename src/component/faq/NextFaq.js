import React from 'react'
import {Image} from "semantic-ui-react";

var img = require('../../img/insta-ava5.jpg')

const Faq = () => (

    <div>
        <Image bordered rounded spaced='right' floated='right' size='medium' src={img}/>
        <p>
            Our little fighter Ava is about to enter her 8th round of chemo now. Ava has a long road ahead – many more months of treatment which will involve chemotherapy, radiotherapy, surgery, stem cell transplant and immunotherapy - a gruelling road for anyone, least a toddler.
        </p>
        <p>
            When we get Ava into remission of this cancer, the battle is far from over. Neuroblastoma is a difficult disease to treat and in over 75% of patients, they relapse. A relapse of Neuroblastoma currently brings a very low prognosis of survival - current available treatment across the world is not successful and most cases result in fatality. A 1 in 2 relapse rate.
        </p>
        <p>
            There is hope for Ava and other kids like her however at Memorial Sloan Kettering hospital in New York. A trial with extraordinary results in keeping kids clear for years longer than ever seen before.
        </p>
        <p>
            Our aim is get there by June 2019 to begin treatment.
        </p>
    </div>
)


export default Faq