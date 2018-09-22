import React from 'react'
import {Image} from "semantic-ui-react";

var img = require('../../img/insta-ava3.jpg')

const Faq = () => (

    <div>
        <Image bordered rounded spaced='right' floated='right' size='medium' src={img}/>
        <p>
            <ul>
                <li>
                    5 surgeries - to remove ovarian tissue, biopsies, 2 bone marrow aspirations & venous catheter
                    insertion
                </li>
                <li>
                    A central line (Hickman line) inserted into her heart.
                </li>
                <li>
                    Approximately 9 general anaesthetics for various things such as MRIs, MIBG scans, CT scans, venous
                    catheters etc.
                </li>
                <li>
                    9 NG tubes inserted (they come out when vomiting caused by chemotherapy)
                </li>
                <li>
                    She’s undergone several scans - MRIs, CTs, Ultrasounds, MRIs, heart scans such as echocardiograms,
                    hearing tests.
                </li>
                <li>
                    Countless blood tests, urine tests, stool samples etc all checking her levels.
                </li>
                <li>
                    Received approx 12 blood and platelet transfusions
                </li>
                <li>
                    Received multiple chemotherapy agents, multiple IV pain meds, multiple IV antibiotics, steroids,
                    proton pump inhibitors, anti-sickness medications, sedation medications and IV nutrition.
                </li>
                <li>
                    Receives weekly dressing changes which she hates - requires pinning her down for safety of the
                    central line.
                </li>
            </ul>
        </p>
        <p>
            When diagnosed, Ava’s cancer was given a score of 18. Then scans after 4 cycles of chemo showed little
            reduction in Ava’s disease. At that stage they would expect her score count to be less than 3. Ava’s was
            still 15. Again more devastating news.
        </p>
        <p>
            But on 22nd August, finally a turnaround!! Our amazing little Ava bear IS responding finally! After the
            current treatment protocol she’s now at a score of 7! We couldn’t have been more relieved!
        </p>
        <p>
            Ava’s Journey is far far from over. There will be many more hard times ahead, and for Ava; treatment will
            become even harsher. But we are now able to feel a little more hopeful that she’s going to be ok. For the
            first time in 5 months we experienced a little bit of happiness.

        </p>
    </div>
)


export default Faq