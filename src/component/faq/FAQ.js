import React from 'react'

import {Container, List, Segment} from 'semantic-ui-react'
import {HashLink as Link} from 'react-router-hash-link';
import AvaFaq from "./AvaFaq";
import DiagnosisFaq from "./DiagnosisFaq";
import JourneyFaq from "./JourneyFaq";
import NextFaq from "./NextFaq";
import WhyFaq from "./WhyFaq";
import FamilyFaq from "./FamilyFaq";
import FundraisingFaq from "./FundraisingFaq";
import ParentsFaq from "./ParentsFaq";

// const scrollWithOffset = (el, offset) => {
//     const elementPosition = el.offsetTop - offset;
//     window.scroll({
//         top: elementPosition,
//         left: 0,
//         behavior: "smooth"
//     })
// };

const qlist = [
    {
        link: 'ava',
        question: 'What is little Ava like?',
        component: <AvaFaq/>
    }, {
        link: 'diagnosis',
        question: 'How did Ava’s diagnosis come about?',
        component: <DiagnosisFaq/>
    }, {
        link: 'journey',
        question: 'What has Ava had to go through so far?',
        component: <JourneyFaq/>
    }, {
        link: 'next',
        question: 'What’s next for Ava?',// (last updated at XX/XX/XXXX)?',
        component: <NextFaq/>
    }, {
        //     link: 'when',
        //     question: 'When does the family need to get to NYC?',
        //     component: <WhenFaq/>
        // },{
        link: 'why',
        question: 'Why does the family have to go to NYC for the vaccination and why does it cost so much?',
        component: <WhyFaq/>
    }, {
        link: 'family',
        question: 'How is the family doing?', //I can’t even imagine what this would be like.
        component: <FamilyFaq/>
    }, {
        link: 'fundraising',
        question: 'How is the fundraising going? How much is needed?',
        component: <FundraisingFaq/>
    }, {
        link: 'parents',
        question: <div>What are the parents’ backgrounds? <br/> How are they managing work so that they can pay the bills with Ava being so unwell?</div>,
        component: <ParentsFaq/>
    },
]

const FAQ = () => (
    <div className='faq-page'>
        <Segment secondary textAlign='left' padded='very' style={{
            // marginTop: 40
        }}>
            <Container text textAlign='left'>

                <List link bulleted relaxed >
                    {qlist.map((item, i) =>
                        <List.Item key={'faq-list-' + i}>
                        <Link smooth to={'#' + item.link}
                            // scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                            style={{
                                // color:'#207EA9'
                            }}
                        >
                            {item.question}
                        </Link>
                    </List.Item>)}
                </List>
            </Container>
        </Segment>

        <Segment textAlign='center' basic padded='very' style={{
            marginTop: 40
        }}>
            <h1 style={{
                fontSize: '11em'
            }}>
                FAQ
            </h1>
        </Segment>

        {qlist.map((item, i) => <Segment basic key={'faq-segment-' + i}  padded='very' style={{
            borderBottom: '1px solid #ddd'
        }}>
            <Container text textAlign='justified'>
                <h2 id={item.link} className='normal' style={{
                    fontSize:'2em',
                    marginBottom:20,
                    textAlign:'left'
                }}>
                    {item.question}
                </h2>
                {item.component}
            </Container>
        </Segment>)}

    </div>
)

export default FAQ