import React from 'react'
import {Button, Container, Divider, Header, Image, Segment} from "semantic-ui-react";
import Video10Segment from "../home/Video10Segment";
import Video7Segment from "../home/Video7Segment";

var press7 = require('../../img/press-7.png')
var pressmama = require('../../img/press-mama.png')
var pressdm = require('../../img/press-dailym.png')
var pressdmaus = require('../../img/press-dailym-aus.png')
var pressrc = require('../../img/press-rc.png')
var pressbayside = require('../../img/press-bayside.png')


const Press = () => (

    <div>
        <Segment style={{
            padding: '4em 0 3em 0',
            margin: 0,
            backgroundColor: '#f3f4f5'
        }}>
            <Container text className='pressContainer'>
                <Header as='h2' style={{fontSize: '4em'}}>
                    Press
                </Header>
                <p>For all media enquiries, please contact <a
                    href='mailto:hello@audreypaige.com'>hello@audreypaige.com</a></p>
                <p>
                    <Button as='a'
                            href={process.env.PUBLIC_URL + '/AvaRelease.docx'}
                            size='medium'>
                        Download media kit
                    </Button>
                </p>
            </Container>
        </Segment>
        <Video10Segment detail/>
        <Video7Segment detail/>
        <Segment style={{padding: '2em 0em 8em 0em'}} vertical>
            <Container text className='pressContainer'>

                <Image
                    href='https://au.news.yahoo.com/mums-desperate-battle-keep-seriously-ill-daughter-alive-past-age-five-084027238.html'
                    bordered rounded spaced='left' floated='right' size='small' src={press7}/>
                <Header className='normal' as='h3' style={{fontSize: '2em'}}>
                    Mum's desperate battle to keep seriously ill daughter alive past age of five
                </Header>
                <p>
                    An Australian family is desperately raising money for their toddler to receive life-saving treatment
                    to help her live past the age of five.
                </p>
                <p>
                    Melbourne mum Leanne Shaw told Yahoo7 her daughter was diagnosed with stage four high-risk
                    Neuroblastoma, a rare and aggressive tumour, in April.
                </p>
                <p>
                    The cancer affects the adrenal nerve cells and has spread across Ava’s body. She has a primary
                    tumour in her abdomen in the adrenal gland above her kidney...
                </p>
                <Button as='a'
                        href='https://au.news.yahoo.com/mums-desperate-battle-keep-seriously-ill-daughter-alive-past-age-five-084027238.html'
                        size='large'>
                    Read More...
                </Button>


                <Divider section/>

                <Image
                    href='https://www.dailymail.co.uk/news/article-6052275/Five-year-old-Ava-Melbourne-diagnosed-Neuroblastoma.html'
                    bordered rounded spaced='left' floated='right' size='small' src={pressdm}/>
                <Header className='normal' as='h3' style={{fontSize: '2em'}}>
                    'This is her only chance of surviving': Mother fights to keep her daughter, Ava, alive after the
                    two-year-old is diagnosed with rare and aggressive tumours
                </Header>
                <p>
                    A heartbroken mother is fighting to keep her young daughter alive after the toddler was diagnosed
                    with a rare tumour.
                </p>
                <p>
                    Leanne Shaw's two-year-old daughter, Ava, was diagnosed with Neuroblastoma, which is a very
                    aggressive form of childhood cancer, in April.
                </p>
                <p>
                    The Melbourne mother, who was 33-weeks pregnant at the time, said she was shattered when doctors
                    told her Ava would need to undergo extensive chemotherapy...
                </p>
                <Button as='a'
                        href='https://www.dailymail.co.uk/news/article-6052275/Five-year-old-Ava-Melbourne-diagnosed-Neuroblastoma.html'
                        size='large'>
                    Read More...
                </Button>


                <Divider section/>

                <Image
                    href='https://www.dailymail.co.uk/femail/article-6104403/The-heart-wrenching-moment-time-mum-told-two-year-old-daughter-stage-four-cancer.html'
                    bordered rounded spaced='left' floated='right' size='small' src={pressdmaus}/>
                <Header className='normal' as='h3' style={{fontSize: '2em'}}>
                    'We thought she was just teething': The heart-wrenching moment a first time mother was told her
                    two-year-old daughter had stage four cancer that could take her life before her fifth birthday
                </Header>
                <p>
                    It wasn't until she turned two that Leanne and James Wake noticed something unusual about their
                    little girl, Ava.
                </p>
                <p>
                    While the Melbourne-based parents assumed that their daughter was 'teething', in fact her 'agitated
                    and unsettled nature' was hiding something more serious.
                </p>
                <p>
                    It was only when Leanne and James took her to the Royal Children's Hospital in Melbourne for a
                    full-body MRI that they found out Ava was fighting stage 4 Neuroblastoma, a very aggressive form of
                    cancer with a terrifying prognosis...
                </p>
                <Button as='a'
                        href='https://www.dailymail.co.uk/femail/article-6104403/The-heart-wrenching-moment-time-mum-told-two-year-old-daughter-stage-four-cancer.html'
                        size='large'>
                    Read More...
                </Button>


                <Divider section/>

                <Image href='https://www.mamamia.com.au/child-with-neuroblastoma/'
                       bordered rounded spaced='right' floated='right' size='small' src={pressmama}/>
                <Header className='normal' as='h3' style={{fontSize: '2em'}}>
                    Ava had just turned two when her Melbourne parents noticed something was very wrong
                </Header>
                <p>
                    Ava Wake had just turned two when her parents Leanne and James noticed something was wrong. Their
                    happy, sunny baby girl suddenly stopped sleeping, playing or walking and became inconsolable.
                </p>
                <p>
                    On April 5, James and Leanne, who is 33 weeks pregnant, took their daughter to the Royal Children’s
                    Hospital in Melbourne for a full-body MRI.
                </p>
                <p>
                    “On the morning of the 7th we came into the room, and there were six doctors. As soon as I saw them,
                    I knew it wasn’t good. They told us they had found tumours,” Leanne said...
                </p>
                <Button as='a' href='https://www.mamamia.com.au/child-with-neuroblastoma/' size='large'>
                    Read More...
                </Button>

                <Divider section/>

                <Image href='https://www.zachary-phillips.com/realitycheck/avas-journey-battling-neuroblastoma'
                       bordered rounded spaced='right' floated='right' size='small' src={pressrc}/>
                <Header className='normal' as='h3' style={{fontSize: '2em'}}>
                    Episode 49: Ava's Journey - Battling Neuroblastoma (podcast interview)
                </Header>
                <p>
                    Ava is a two year old girl who is receiving treatment for Stage 4 high risk Neuroblastoma. This is a
                    very aggressive form of cancer, with a survival rate of 40%. If Ava's chemotherapy treatments are
                    successful, she faces a 75% chance of relapse with in 6 months - unless she receives a trial
                    vaccine.
                </p>
                <p>
                    Despite amazing results, the vaccine it is currently not receiving funding, leaving family and
                    friends to come up the the money necessary for treatment. The total costs of the treatment,
                    including the vaccine itself and the 7+ trips to USA to administer it (Memorial Sloan Kettering
                    Cancer Centre, accommodation and other expenses will be well over $300,000.
                </p>
                <p>
                    In this episode I am joined by Ava's parents Leanne and James to talk more about Ava's Journey...
                </p>
                <Button as='a' href='https://www.zachary-phillips.com/realitycheck/avas-journey-battling-neuroblastoma'
                        size='large'>
                    Read More...
                </Button>

                <Divider section/>

                <Image href={process.env.PUBLIC_URL + '/IMG-20180821-WA0028.jpg'}
                       bordered rounded spaced='right' floated='right' size='small' src={pressbayside}/>
                <Header className='normal' as='h3' style={{fontSize: '2em'}}>
                    Help brave little Ava get well
                </Header>
                <p>
                    A fundraiser to help the family of a Black Rock toddler battling an aggressive form of cancer will
                    be held later this month.
                </p>
                <p>
                    Ava Wake had just turned two when her parents Leanne and James found out their precious baby girl
                    has Neuroblastoma - a cancer which 40% of sufferers survive.
                </p>
                <p>
                    "We noticed she wasn't herself," mum Leanne said...
                </p>
                <Button as='a' href={process.env.PUBLIC_URL + '/IMG-20180821-WA0028.jpg'}
                        size='large'>
                    Read More...
                </Button>

            </Container>
        </Segment>
    </div>
)


export default Press