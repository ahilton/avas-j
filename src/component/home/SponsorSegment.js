import React from 'react'

import {Container, Grid, Image, Popup, Segment,} from 'semantic-ui-react'

import grazing from '../../img/sponsor-grazing.png'
import lion from '../../img/sponsor-lion.png'
import gallery from '../../img/sponsor-sgm.png'
import ff from '../../img/sponsor-ff.png'
import gk from '../../img/sponsor-gamekeepers.png'
import selements from '../../img/sponsors-7e.png'
import mbb from '../../img/sponsor-mbb.png'
import rmc from '../../img/sponsor-rmc.png'
import dairy from '../../img/sponsor-dairy.png'
import sciclunas from '../../img/sponsor-sciclunas.png'
import pharma from '../../img/sponsor-pharma.png'
import projekt from '../../img/sponsor-projekt.jpg'
import kao from '../../img/sponsor-kao.png'
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
import ap from '../../img/sponsor-ap.png'

import audioActive from '../../img/sponsor-audioActive.png'
import bull from '../../img/sponsor-bull.jpg'
import cBlank from '../../img/sponsor-cBlank.png'
import colling from '../../img/sponsor-colling.jpg'
import hawks from '../../img/sponsor-hawks.png'
import jag from '../../img/sponsor-jag.png'
import kallure from '../../img/sponsor-kallure.png'
import pa from '../../img/sponsor-pa.png'
import tla from '../../img/sponsor-tla.jpg'
import audible from '../../img/sponsor-audible.png'
import muka from '../../img/sponsor-muka.jpg'
import rara from '../../img/sponsor-rara.png'
import smallprint from '../../img/sponsor-smallprint.jpg'
import taylor from '../../img/sponsor-taylormade.png'
import furphy from '../../img/sponsor-furphy.png'

import grammar from '../../img/sponsor-grammar.jpg'
import glam from '../../img/sponsor-glam.png'
import motto from '../../img/sponsor-motto.png'
import buxton from '../../img/sponsor-buxton.png'
import aia from '../../img/sponsor-aia.png'
import ao from '../../img/sponsor-ao.png'
import prol from '../../img/sponsor-prol.png'
import propharma from '../../img/sponsor-pro-pharma.png'

import cocon from '../../img/sponsors-cocon.png'
import electrolux from '../../img/sponsors-electrolux.png'
import fresco from '../../img/sponsors-fresco.png'
import tennisaus from '../../img/sponsors-tennis-aus.png'
import torello from '../../img/sponsors-torello.png'
import cassy from '../../img/sponsors-cassy.png'
import ferrari from '../../img/sponsor-ferrari.png'
import clicceleb from '../../img/sponsor-clicceleb.png'
import diamond from '../../img/sponsor-diamond.png'
import molton from '../../img/sponsor-molton.png'
import just from '../../img/sponsor-justgroup.gif'
import kirsten from '../../img/sponsor-kirsten.png'
import ali from '../../img/sponsor-ali.jpg'
import liam from '../../img/sponsor-liam.png'
import marriner from '../../img/sponsor-marriner.png'
import bc from '../../img/sponsor-bc.png'
import plaza from '../../img/sponsor-plaza-hotel.png'
import converse from '../../img/sponsor-converse.png'
import merlin from '../../img/sponsor-merlin.png'
import sealife from '../../img/sponsor-sealife.png'
import cablepark from '../../img/sponsor-cablepark.png'
import smiggle from '../../img/sponsor-smiggle.png'
import biozet from '../../img/sponsor-biozet.png'
import tilnak from '../../img/sponsor-tilnak.png'
import kms from '../../img/sponsor-kms.png'
import jergens from '../../img/sponsor-jergens.png'
import jfrieda from '../../img/sponsor-jfrieda.png'
import biore from '../../img/sponsor-biore.png'

import ausgp from '../../img/sponsor-aus-gp.png'
import blackrockcellars from '../../img/sponsor-blackrockcellars.jpg'
import dius from '../../img/sponsor-dius.png'
import galaFund from '../../img/sponsor-gala-fund.png'
import wilddog from '../../img/sponsor-wilddog.png'

const sponsors = [
    {
        name: 'Studio Gallery Melbourne',
        url: 'https://www.studiogallerymelbourne.com.au/',
        img: gallery,
        info: 'Host of the fabulous Art for Ava evening. Thank you!'
    }, {
        name: 'Mercedes-Benz Brighton',
        url: 'https://www.mbbrighton.com.au/',
        img: mbb,
        info: 'Our headline sponsor for Avas Gala. Thank you!'
    }, {
        name: 'Fitness First',
        url: 'https://www.fitnessfirst.com.au/',
        img: ff,
        info: 'Fundraising and caring for Ava from the very beginning. Thank you!'
    }, {
        name: 'Buxton',
        url: 'https://buxton.com.au/',
        img: buxton,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    }, {
        name: 'Audrey Paige Communications',
        url: 'http://www.audreypaige.com/',
        img: ap,
        info: "Audrey has been a key member of Ava's fundraising team from the very beginning. Thank you!"
    }, {
        name: 'Just Grazing Through',
        url: 'http://www.justgrazingthrough.com/',
        img: grazing,
        info: 'Responsible for the delicious grazing platters from our Art For Ava night. Thank you!'
    }, {
        name: 'Lights Lights Lights',
        url: 'https://www.lightslightslights.com.au/',
        img: lll,
        info: 'Supporting many of our fundraising events. Thank you!'
    }, {
        name: 'Lion',
        url: 'http://lionco.com/',
        img: lion,
        info: 'Helping us with beverage donations. Thank you!'
    }, {
        name: 'Furphy',
        url: 'http://lionco.com/',
        img: furphy,
        info: 'Helping us with beverage donations. Thank you!'
    }, {
        name: 'TaylorMade',
        url: 'https://taylormadegolf.com.au/',
        img: taylor,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    }, {
        name: 'Peninsula Grammar',
        url: 'https://www.peninsulagrammar.vic.edu.au/',
        img: grammar,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    },{
        name: 'Australian Grand Prix Corporation',
        url: 'https://www.grandprix.com.au/',
        img: ausgp,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    },{
        name: 'Blackrock Cellars',
        // url: 'https://www.peninsulagrammar.vic.edu.au/',
        img: blackrockcellars,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    },{
        name: 'DiUS',
        url: 'https://dius.com.au/',
        img: dius,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    },{
        name: 'Gala Fundraising',
        url: 'http://www.galafundraising.com.au/',
        img: galaFund,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    },{
        name: 'Wilddog',
        url: 'http://www.wilddogwinery.com/',
        img: wilddog,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    }, {
        name: 'Flowers By Cassy',
        url: 'https://flowersbycassy.com/',
        img: cassy,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    }, {
        name: 'Ferrari Formalwear & Bridal',
        url: 'www.ferrariformal.com.au',
        img: ferrari,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    }, {
        name: 'Click Celebrations',
        url: 'www.clickcelebrations.com.au',
        img: clicceleb,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    }, {
        name: 'Australian Diamond Trading Corp',
        url: 'http://adtc.com.au:8080/home',
        img: diamond,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    }, {
        name: 'Molton Brown',
        url: 'https://www.moltonbrown.com.au/store/index.jsp',
        img: molton,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    }, {
        name: 'The Just Group',
        url: 'http://www.justgroup.com.au',
        img: just,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    }, {
        name: 'KMS',
        url: 'https://www.kmshair.com/en-AU/Products/',
        img: kms,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    }, {
        name: 'Jergens',
        url: 'https://www.jergens.com/en-us/',
        img: jergens,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    }, {
        name: 'Biore',
        url: 'http://www.biore.com.au/biore-facial-cleansing-products/',
        img: biore,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    }, {
        name: 'John Frieda',
        url: 'https://www.johnfrieda.com/en-au/home/',
        img: jfrieda,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    }, {
        name: 'Kirsten Jackson',
        url: 'https://kirstenjackson.com.au',
        img: kirsten,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    }, {
        name: 'Ali McNabney Stevens',
        url: 'https://www.alimcnabneystevens.com.au/',
        img: ali,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    }, {
        name: 'Liam Snootle',
        url: 'https://liamsnootle.bigcartel.com',
        img: liam,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    }, {
        name: 'Marriner Group',
        url: 'https://marrinergroup.com.au/',
        img: marriner,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    }, {
        name: 'BC Dental',
        url: 'https://www.bcdental.com.au/',
        img: bc,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    }, {
        url: 'https://www.theplazany.com/',
        name: 'The Plaza New York',
        img: plaza,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    }, {
        name: 'Converse',
        url: 'https://www.converse.com.au/',
        img: converse,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    }, {
        name: 'Merlin Entertainments',
        url: 'https://www.merlinentertainments.biz/',
        img: merlin,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    }, {
        name: 'Melbourne Aquarium',
        url: 'https://www.melbourneaquarium.com.au/',
        img: sealife,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    }, {
        name: 'Melbourne Cable Park',
        url: 'https://melbournecablepark.com/',
        img: cablepark,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    }, {
        name: 'Smiggle',
        url: 'https://www.smiggle.com.au/shop/en/smiggle',
        img: smiggle,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    }, {
        name: 'BioZet Attack',
        url: 'https://www.biozet.com.au/',
        img: biozet,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    }, {
        name: 'Tilnak Photography',
        url: 'https://www.tilnak.com/',
        img: tilnak,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    },


    {
        name: 'AIA',
        url: 'http://www.aia.com.au/',
        img: aia,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    }, {
        name: 'Pro Light & Sound',
        url: 'https://prolightandsound.com.au/',
        img: prol,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    }, {
        name: 'Australian Open',
        url: 'https://ausopen.com/',
        img: ao,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    }, {
        name: 'co conspirators',
        url: 'http://coconspirators.com.au/',
        img: cocon,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    }, {
        name: 'Electrolux',
        url: 'https://www.electrolux.com.au/',
        img: electrolux,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    }, {
        name: 'Fresco Images',
        url: 'http://frescoimages.com/',
        img: fresco,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    }, {
        name: 'Tennis Australia',
        url: 'https://www.tennis.com.au/',
        img: tennisaus,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    }, {
        name: 'Torello Farm',
        url: 'https://www.torellofarm.com.au/',
        img: torello,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    }, {
        name: 'ProPharma Group',
        url: 'https://www.propharmagroup.com/',
        img: propharma,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    }, {
        name: 'Glam Corner',
        url: 'https://www.glamcorner.com.au/',
        img: glam,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    }, {
        name: 'Motto Creative',
        url: 'http://www.mottocreative.com.au/',
        img: motto,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    }, {
        name: 'Audio Active',
        url: 'https://audioactive.com.au/',
        img: audioActive,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    }, {
        name: 'Western Bulldogs',
        url: 'http://www.westernbulldogs.com.au/',
        img: bull,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    }, {
        name: 'Christopher Blank',
        url: 'https://christopherblank.com.au/',
        img: cBlank,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    }, {
        name: 'Collingwood Football Club',
        url: 'http://www.collingwoodfc.com.au/',
        img: colling,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    }, {
        name: 'Hawthorn Football Club',
        url: 'http://www.hawthornfc.com.au/',
        img: hawks,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    }, {
        name: 'Jaggad',
        url: 'https://www.jaggad.com/',
        img: jag,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    }, {
        name: 'KA\'LLURE',
        url: 'http://www.kallurejewellery.com/',
        img: kallure,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    }, {
        name: 'Smallprint - The Original Silver Keepsake Company',
        url: 'https://www.smallprint.com/',
        img: smallprint,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    }, {
        name: 'Peter Alexander',
        url: 'https://www.peteralexander.com.au/shop/en/peteralexander',
        img: pa,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    }, {
        name: 'TLA',
        url: 'http://tlaworldwide.com/',
        img: tla,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    }, {
        name: 'Gamekeepers',
        url: 'http://gamekeepersmeat.com.au/',
        img: gk,
        info: 'Helping our fundraising BBQs taste delicious. Thank you!'
    }, {
        name: 'Rara Architecture',
        url: 'https://www.raraarchitecture.com.au/',
        img: rara,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    }, {
        name: 'Muka Portraits',
        url: 'https://mukaportraits.com.au/',
        img: muka,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    }, {
        name: 'Audible',
        url: 'https://www.audible.com.au/',
        img: audible,
        info: 'Supporting Ava\'s Gala night. Thank you!'
    }, {
        name: '7 Elements',
        url: 'https://www.7elements.com.au/',
        img: selements,
        info: "Our go to print-shop helping to spread the word of Ava's Journey. Thank you!"
    }, {
        name: 'Robbie McEwen Cycling',
        url: 'http://www.robbiemcewen.com/',
        img: rmc,
        info: "Supporting Ava's Gala night. Thank you!"
    }, {
        name: 'King Island Dairy',
        url: 'https://www.kingislanddairy.com.au/',
        img: dairy
    }, {
        name: 'Scicluna’s',
        url: 'https://sciclunas.com.au/',
        img: sciclunas
    }, {
        name: 'The Pharmacy Guild of Australia',
        url: 'https://www.guild.org.au/',
        img: pharma
    }, {
        name: 'Projekt Travel',
        url: 'https://www.facebook.com/pg/projekttravel/',
        img: projekt
    }, {
        name: 'Kao',
        url: 'https://www.kao.com/global/en/products/',
        img: kao,
        info: "We are grateful to Kao for the generous donation of gifts from their fantastic cosmetics range including Molton Brown, Biore, Jergens, KMS, John Frieda... Thank you!"
    }, {
        name: 'Wine by Sam',
        url: 'https://www.winebysam.com.au/',
        img: sam,
        info: ''
    }, {
        name: 'Dockendorfs IGA',
        url: 'https://www.igaliquor.com.au/bottle-shops/vic/dockendorfs-iga',
        img: iga,
        info: ''
    }, {
        name: 'AFL',
        url: 'http://www.afl.com.au/',
        img: afl,
        info: "Supporting Ava's Gala night. Thank you!"
    }, {
        name: 'Xtend Barre',
        url: 'https://www.xtendbarre.com/',
        img: xtend,
        info: ''
    }, {
        name: 'Chemist Warehouse Brighton',
        url: 'https://www.chemistwarehouse.com.au/',
        img: chemist,
        info: ''
    }, {
        name: 'Bakers Delight',
        url: 'https://www.bakersdelight.com.au/bakery-locator/elwood/',
        img: bdelight,
        info: 'Helping our fundraising BBQs taste delicious. Thank you!'
    }, {
        name: 'Kindred Movement',
        url: 'http://kindredmovement.com.au/2018/',
        img: kmove,
        info: ''
    }, {
        name: 'Back In Montion, Mentone',
        url: 'https://www.backinmotion.com.au/mentone',
        img: bim,
        info: 'Supporting our community fundraiser. Thank you!'
    }, {
        name: 'Rockmelon',
        url: 'https://www.facebook.com/rockmelonmedispa/',
        img: rmelon,
        info: 'Supporting our community fundraiser. Thank you!'
    }, {
        name: 'Love Your Soul',
        url: 'http://www.weloveyoursoul.com.au/',
        img: soul,
        info: 'Supporting our community fundraiser & raising money for Ava. Thank you!'
    }, {
        name: 'Black Rock Chocolates',
        url: 'http://www.blackrockchocolates.com.au/',
        img: choc,
        info: 'Supporting our community fundraiser. Thank you!'
    }, {
        name: 'Mumma Body Coaching',
        url: 'https://www.facebook.com/MummaBodyCoaching/',
        img: muma,
        info: 'Supporting our community fundraiser. Thank you!'
    }, {
        name: 'Truly Scrumptious',
        url: 'http://www.trulyscrumptious.com.au/',
        img: trulys,
        info: 'Supporting our community fundraiser. Thank you!'
    }, {
        name: 'The House Of Flowers',
        url: 'http://thehouseofflowers.com.au/',
        img: hoflowers,
        info: 'Supporting our community fundraiser. Thank you!'
    }, {
        name: 'brad Rowswell',
        url: 'http://bradrowswell.com.au/',
        img: brad,
        info: 'Supporting our community fundraiser. Thank you!'
    }, {
        name: "Emma & Tom's",
        url: 'https://emmaandtom.com/',
        img: et,
        info: 'Supporting our community fundraiser. Thank you!'
    }
]

const intro = <Container text textAlign='justified' style={{
    color: 'black',
    marginTop: 10,
    marginBottom: 30
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

const SponsorSegment = ({children, big = false, size}) => (

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
                        fontSize: '1.6em',
                        color: 'black'
                    }}>Friends of Ava</h2>}
                    {sponsors.map(x =>
                        <div style={{display: 'inline', marginTop: '1em'}}>
                            <Popup
                                key={x.name}
                                trigger={<Image as='a' style={{margin: '1em'}} href={x.url} inline rounded size={size}
                                                src={x.img}/>}
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