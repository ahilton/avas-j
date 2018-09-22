import React from 'react'
import {Image} from "semantic-ui-react";

var ava1 = require('../../img/insta-ava1.jpg')
var ava6 = require('../../img/insta-ava6.jpg')

const Faq = () => (

    <div>
        <p>
            A couple of days after Ava’s second birthday, we noticed she wasn’t herself. Ava became very upset; she
            stopped sleeping well and would wake a lot crying. She stopped eating well, was having fevers frequently and
            eventually stopped walking, playing and became inconsolable.
        </p>
        <p>
            During all of this we took her to the doctors and (through no fault of the GPs) were told it was viruses,
            then a UTI infection, and prescribed antibiotics.
        </p>
        <Image bordered rounded spaced='left' floated='left' size='medium' src={ava1}/>
        <p>
            11 days after this started we decided this was too much and after seeing Ava not walking that day, just
            lying on the sofa too lethargic to play we took her to the Royal Children’s Hospital, emergency department.
            This is where the journey started.
        </p>
        <p>
            That very same day Ava had ultrasounds, X-rays (looking for septic arthritis initially), and then the
            following evening had an MRI scan.
        </p>
        <p>
            On the morning of 7th April 2018, 6 doctors walked into our little room and I instinctively knew it was
            cancer. I don’t quite remember the whole conversation, but I do remember one of the junior doctors had tears
            in his eyes as he tried to speak. They explained that the MRI hadn’t shown any sign of fluid in the joints,
            but had shown some masses across Ava’s body. Masses consistent with tumours.
        </p>
        <Image bordered rounded spaced='right' floated='right' size='medium' src={ava6}/>
        <p>
            A senior consultant oncologist (who remains in charge of Ava’s care today) went on to explain - he believes
            Ava has Neuroblastoma. He explained further that Ava’s disease on the MRI shows its present in her bones -
            pelvis, femurs, spine, skull, eye sockets and small spots in other bones. She has a large primary mass in
            her adrenal gland above the left kidney, smaller spots in the lung and along her spine.
        </p>
        <p>
            Ava’s disease is in her bone marrow, her lymph and blood. This is known as Stage 4, high risk Neuroblastoma.
            A rare and very aggressive childhood cancer affecting approximately 40-60 patients a year in Australia.
        </p>
        <p>
            Our lives were crushed. I couldn’t comprehend - our little 2 year old who only up until 11 days ago was so
            happy, bubbly and healthy has stage 4 cancer. Who, without starting aggressive treatment immediately - could
            die within months. I still can’t comprehend it sometimes. It still hits me hard when I’m least expecting it.
        </p>
        <p>
            So there we were - in hospital, a whirlwind of information being passed our way about how the next 18 months
            and beyond we’re going to look. An aggressive treatment protocol for this kind of cancer. Ava would receive
            5 cycles of rapid chemotherapy (which has turned into 8 due to how difficult her Neuroblastoma is to treat),
            8 hour surgery to remove the primary tumour, transplant chemotherapy (designed to wipe out bone marrow), a
            stem cell transplant, radiotherapy and then immunotherapy treatment. All this on a tiny body - still a baby
            to me.
        </p>
    </div>
)


export default Faq