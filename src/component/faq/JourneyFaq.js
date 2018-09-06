import React from 'react'
import {Image} from "semantic-ui-react";

var img = require('../../img/insta-ava3.jpg')

const Faq = () => (

    <div>
        <div style={{float: 'right', marginLeft: 25}}>
            <Image bordered rounded spaced='right' floated='right' size='medium' src={img}/>
        </div>
        <p>
            <ul>
                <li>
                    3 surgeries - to remove ovarian tissue, biopsies, bone marrow aspiration and have a central
                    line
                </li>
                <li>
                    (Hickman line) inserted into her heart.
                </li>
                <li>
                    Approximately 7 general anaesthetics for various things such as MRIs, MIBG scans, CT scans,
                    venous
                    catheters etc.
                </li>
                <li>
                    4 NG tubes inserted (they come out when vomiting caused by chemotherapy)
                </li>
                <li>
                    She’s undergone several scans - MRIs, CTs, Ultrasounds, MRIs, heart scans such as
                    echocardiograms,
                    hearing tests.
                </li>
                <li>
                    Countless blood tests, urine tests, stool samples etc all checking her levels.
                </li>
                <li>
                    Received approx 10 blood and platelet transfusions
                </li>
                <li>
                    Received chemotherapy agents, multiple IV pain meds, multiple IV antibiotics, steroids,
                    proton pump
                    inhibitors, anti sickness medications, sedation medications and IV nutrition.
                </li>
                <li>
                    Receives weekly dressing changes which she hates - requires pinning her down for safety of
                    the
                    central line.
                </li>
            </ul>
        </p>
        <p>
            On 11th July 2018 we received more awful news. Scans done after 4 cycles of chemo have shown little
            reduction in Ava’s disease. At that stage they would expect her score count (which at diagnosis was
            18) to be less than 3. Ava’s was still 15. Again more devastating news.
        </p>
    </div>
)


export default Faq