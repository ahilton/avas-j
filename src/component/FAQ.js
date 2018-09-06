import React from 'react'

import {Container, Segment} from 'semantic-ui-react'
import {HashLink as Link} from 'react-router-hash-link';
import AvaFaq from "./faq/AvaFaq";
import DiagnosisFaq from "./faq/DiagnosisFaq";
import JourneyFaq from "./faq/JourneyFaq";
import NextFaq from "./faq/NextFaq";
import WhenFaq from "./faq/WhenFaq";
import WhyFaq from "./faq/WhyFaq";
import FamilyFaq from "./faq/FamilyFaq";
import FundraisingFaq from "./faq/FundraisingFaq";
import ParentsFaq from "./faq/ParentsFaq";

// const scrollWithOffset = (el, offset) => {
//     const elementPosition = el.offsetTop - offset;
//     window.scroll({
//         top: elementPosition,
//         left: 0,
//         behavior: "smooth"
//     })
// };

const FAQ = () => (
    <div>
        <Segment textAlign='left' basic padded='very' style={{
            marginTop: 40
        }}>
            <ul>
               <li>
                <Link smooth to="#ava">
                    What is little Ava like?
                </Link>
               </li>
                <li>
                <Link smooth to="#diagnosis">
                    How did Ava’s diagnosis come about?
                </Link>
                </li>
                <li>
                <Link smooth to="#journey">
                    What has Ava had to go through so far?
                </Link>
                </li>
                <li>
                <Link smooth to="#next">
                    What’s next for Ava? (last updated at XX/XX/XXXX)
                </Link>
                </li>
                <li>
                <Link smooth to="#when">
                    When does the family need to get to NYC?
                </Link>
                </li>
                <li>
                <Link smooth to="#why">
                    Why does the family have to go to NYC for the vaccination and why does it cost so much?
                </Link>

                    </li>
                <li>
                <Link smooth to="#family">
                    I can’t even imagine what this would be like. How is the family doing?
                </Link>
                </li>
                <li>
                <Link smooth to="#fundraising">
                    How is the fundraising going? How much is needed?
                </Link>
                </li>
                <li>
                <Link smooth to="#parents">
                    What are the parents’ backgrounds? How are they managing work so that they can pay the bills with
                    Ava being so unwell?
                </Link>
                </li>
            </ul>
        </Segment>

        <Segment textAlign='center' basic padded='very' style={{
            marginTop: 40
        }}>
            <h1 style={{
                fontSize: '12em'
            }}>
                FAQ
            </h1>
        </Segment>
        <Segment id='ava' basic padded='very'>
            <Container text textAlign='justified'>
                <AvaFaq/>
            </Container>
        </Segment>
        <Segment id='diagnosis' basic padded='very'>
            <Container text textAlign='justified'>
                <DiagnosisFaq/>
            </Container>
        </Segment>
        <Segment id='journey' basic padded='very'>
            <Container text textAlign='justified'>
                <JourneyFaq/>
            </Container>
        </Segment>
        <Segment id='next' basic padded='very'>
            <Container text textAlign='justified'>
                <NextFaq/>
            </Container>
        </Segment>
        <Segment id='when' basic padded='very'>
            <Container text textAlign='justified'>
                <WhenFaq/>
            </Container>
        </Segment>
        <Segment id='why' basic padded='very'>
            <Container text textAlign='justified'>
                <WhyFaq/>
            </Container>
        </Segment>
        <Segment id='family' basic padded='very'>
            <Container text textAlign='justified'>
                <FamilyFaq/>
            </Container>
        </Segment>
        <Segment id='fundraising' basic padded='very'>
            <Container text textAlign='justified'>
                <FundraisingFaq/>
            </Container>
        </Segment>
        <Segment id='parents' basic padded='very'>
            <Container text textAlign='justified'>
                <ParentsFaq/>
            </Container>
        </Segment>
    </div>
)

export default FAQ