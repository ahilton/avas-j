import React from 'react'

import {Button, Container, Grid, Icon, Image, Popup, Responsive, Segment,} from 'semantic-ui-react'

import grazing from '../../img/sponsor-grazing.png'
import lion from '../../img/sponsor-lion.png'
import gallery from '../../img/sponsor-sgm.jpeg'
import ff from '../../img/sponsor-ff.png'
import gk from '../../img/sponsor-gamekeepers.png'
import selements from '../../img/sponsors-7e.png'
import mbb from '../../img/sponsor-mbb.png'
import rmc from '../../img/sponsor-rmc.jpg'
import dairy from '../../img/sponsor-dairy.png'
import sciclunas from '../../img/sponsor-sciclunas.png'
import pharma from '../../img/sponsor-pharma.png'
import projekt from '../../img/sponsor-projekt.jpg'
import kao from '../../img/sponsor-kao.jpg'
import sam from '../../img/sponsor-winesam.png'
import iga from '../../img/sponsor-iga.png'
import afl from '../../img/sponsor-afl.png'
import lll from '../../img/sponsor-lll.png'
import xtend from '../../img/sponsor-xtendbarre.png'
import chemist from '../../img/sponsor-chemist.png'
import bdelight from '../../img/sponsor-bdelight.jpeg'
import kmove from '../../img/sponsor-kmove.png'
import bim from '../../img/sponsor-bim.png'
import rmelon from '../../img/sponsor-rmelon.png'
import soul from '../../img/sponsor-loveyoursoul.png'
import choc from '../../img/sponsor-choc.jpg'
import muma from '../../img/sponsor-muma.png'
import trulys from '../../img/sponsor-trulys.jpg'
import hoflowers from '../../img/sponsor-hoflowers.png'
import brad from '../../img/sponsor-brad.jpg'
import et from '../../img/sponsor-et.jpg'


const sponsors = [
    {
        name: 'Studio Gallery Melbourne',
        url: 'https://www.studiogallerymelbourne.com.au/',
        img: gallery,
        info: 'Host of the fabulous Art for Ava evening. Thank you!'
    },{
        name: 'Mercedes-Benz Brighton',
        url: 'https://www.mbbrighton.com.au/',
        img: mbb,
        info: 'Our headline sponsor for Avas Gala. Thank you!'
    },{
        name: 'Fitness First',
        url: 'https://www.fitnessfirst.com.au/',
        img: ff,
        info: 'Fundraising and caring for Ava from the very beginning. Thank you!'
    },{
        name: 'Just Grazing Through',
        url: 'http://www.justgrazingthrough.com/',
        img: grazing,
        info: 'Responsible for the delicious grazing platters from our Art For Ava night. Thank you!'
    },{
        name: 'Lights Lights Lights',
        url: 'https://www.lightslightslights.com.au/',
        img: lll,
        info: 'Supporting many of our fundraising events. Thank you!'
    },{
        name: 'Lion',
        url: 'http://lionco.com/',
        img: lion,
        info: 'Helping us with beverage donations. Thank you!'
    },{
        name: 'Gamekeepers',
        url: 'http://gamekeepersmeat.com.au/',
        img: gk,
        info: 'Helping our fundraising BBQs taste delicious. Thank you!'
    },{
        name: '7 Elements',
        url: 'https://www.7elements.com.au/',
        img: selements,
        info: "Our go to print-shop helping to spread the word of Ava's Journey. Thank you!"
    },{
        name: 'Robbie McEwen Cycling',
        url: 'http://www.robbiemcewen.com/',
        img: rmc,
        info: "Supporting Ava's Gala night. Thank you!"
    },{
        name: 'King Island Dairy',
        url: 'https://www.kingislanddairy.com.au/',
        img: dairy
    },{
        name: 'Scicluna’s',
        url: 'https://sciclunas.com.au/',
        img: sciclunas
    },{
        name: 'The Pharmacy Guild of Australia',
        url: 'https://www.guild.org.au/',
        img: pharma
    },{
        name: 'Projekt Travel',
        url: 'https://www.facebook.com/pg/projekttravel/',
        img: projekt
    },{
        name: 'Kao',
        url: 'https://www.kao.com/global/en/products/',
        img: kao,
        info: "We are grateful to Kao for the generous donation of gifts from their fantastic cosmetics range including Molton Brown, Biore, Jergens, KMS, John Frieda... Thank you!"
    },{
        name: 'Wine by Sam',
        url: 'https://www.winebysam.com.au/',
        img: sam,
        info: ''
    },{
        name: 'Dockendorfs IGA',
        url: 'https://www.igaliquor.com.au/bottle-shops/vic/dockendorfs-iga',
        img: iga,
        info: ''
    },{
        name: 'AFL',
        url: 'http://www.afl.com.au/',
        img: afl,
        info: "Supporting Ava's Gala night. Thank you!"
    },{
        name: 'Xtend Barre',
        url: 'https://www.xtendbarre.com/',
        img: xtend,
        info: ''
    },{
        name: 'Chemist Warehouse Brighton',
        url: 'https://www.chemistwarehouse.com.au/',
        img: chemist,
        info: ''
    },{
        name: 'Bakers Delight',
        url: 'https://www.bakersdelight.com.au/bakery-locator/elwood/',
        img: bdelight,
        info: 'Helping our fundraising BBQs taste delicious. Thank you!'
    },{
        name: 'Kindred Movement',
        url: 'http://kindredmovement.com.au/2018/',
        img: kmove,
        info: ''
    },{
        name: 'Back In Montion, Mentone',
        url: 'https://www.backinmotion.com.au/mentone',
        img: bim,
        info: 'Supporting our community fundraiser. Thank you!'
    },{
        name: 'Rockmelon',
        url: 'https://www.facebook.com/rockmelonmedispa/',
        img: rmelon,
        info: 'Supporting our community fundraiser. Thank you!'
    },{
        name: 'Love Your Soul',
        url: 'http://www.weloveyoursoul.com.au/',
        img: soul,
        info: 'Supporting our community fundraiser & raising money for Ava. Thank you!'
    },{
        name: 'Black Rock Chocolates',
        url: 'http://www.blackrockchocolates.com.au/',
        img: choc,
        info: 'Supporting our community fundraiser. Thank you!'
    },{
        name: 'Mumma Body Coaching',
        url: 'https://www.facebook.com/MummaBodyCoaching/',
        img: muma,
        info: 'Supporting our community fundraiser. Thank you!'
    },{
        name: 'Truly Scrumptious',
        url: 'http://www.trulyscrumptious.com.au/',
        img: trulys,
        info: 'Supporting our community fundraiser. Thank you!'
    },{
        name: 'The House Of Flowers',
        url: 'http://thehouseofflowers.com.au/',
        img: hoflowers,
        info: 'Supporting our community fundraiser. Thank you!'
    },{
        name: 'brad Rowswell',
        url: 'http://bradrowswell.com.au/',
        img: brad,
        info: 'Supporting our community fundraiser. Thank you!'
    },{
        name: "Emma & Tom's",
        url: 'https://emmaandtom.com/',
        img: et,
        info: 'Supporting our community fundraiser. Thank you!'
    }
]

const intro = <Container text textAlign='justified' style={{
    color:'black',
    marginTop: 10,
    marginBottom:30
    // fontSize:'1em'
}}>
    <p>
        The success of Ava's Fundraising events rely on the generosity of individuals & businesses
        giving up their time and resources to help.
    <b> THANK YOU to the amazing companies listed here.</b> 💕💕
    </p>
    <p>
        If you can help support a fundraising event - through the donation of beverages, prizes, loan of equipment
        or anything else -
        please <b><a href="mailto:info@avasjourney.com.au">get in touch</a></b>. Thank you!
    </p>
</Container>

const SponsorSegment = ({children, big=false, size}) => (

    <Segment className='gala' basic style={{
        backgroundColor: '#eee',
        padding: '1.5em',
    }} vertical textAlign='center'>
        <Grid padded verticalAlign='middle' style={{
            height: '100%',
            paddingTop: 0
        }}>
            {big && intro}
            <Grid.Row textAlign='center' style={{
                paddingTop: 0
            }}>
                <Grid.Column>
                    {!big && <h2 className='normal' style={{
                        fontSize:'1.6em',
                        color:'black'
                    }}>Friends of Ava</h2>}
                    {sponsors.map(x=>
                        <div style={{display:'inline', margin:'1em'}}>
                            <Popup
                                key={x.name}
                                trigger={<Image as='a' style={{margin:'1em'}} href={x.url} inline rounded size={size} src={x.img}/>}
                                header={x.name}
                                content={x.info}
                            />
                        </div>)}
                    {!big && intro}
                </Grid.Column>
            </Grid.Row>
        </Grid>

    </Segment>
)


export default SponsorSegment