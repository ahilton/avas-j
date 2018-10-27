import React from 'react'
import {Grid} from "semantic-ui-react";

const EventWidget = ({
                         bookingLink,
                         eventDate,
                         eventLocation,
                         eventCell,
                         eventTitle,
                         eventDetail,
                         eventLink,
                         bgColor
                     }) => (


    <div id={eventLink}>
        <Grid className='galaEventWidget' container centered stackable style={{
            // backgroundColor: 'black',
            // marginTop: '5em',
            // marginBottom: '3em'
        }}>
            {/*<Grid.Row textAlign='center'>*/}


            <Grid.Column className='mobileEvent' width={10} stretched style={{
                // backgroundColor:'blue',
                // padding: '0rem 0rem!important',
            }}>
                {eventCell}
                {/*{children}*/}
            </Grid.Column>
            <Grid.Column width={5} only={'computer tablet'} stretched style={{
                backgroundColor: bgColor,
                fontSize: '1.8em',
                textAlign: 'right',
                padding: '1em'
            }}>
                <div style={{
                    // fontWeight: 300,
                    marginBottom: 20
                }}>
                    <b>
                        <p>
                            {eventDate.map(x => [x, <br/>])}
                        </p>
                    </b>
                </div>
                <div style={{
                    fontWeight: 300,
                    marginBottom: 20
                }}>
                    <p>
                        {eventLocation.map(x => [x, <br/>])}
                    </p>
                </div>

                <p style={{fontSize: '1.33em'}}>
                    {bookingLink}
                </p>
            </Grid.Column>


            <Grid.Column width={10} stretched only={'mobile'} style={{
                textAlign: 'left',
                fontSize: '1.8em',
                backgroundColor: bgColor
            }}>
                <div style={{
                    padding: 15
                }}>
                    <div style={{
                        // fontWeight: 300,
                        marginBottom: 10,
                    }}>
                        <b>
                            <p>
                                {eventDate.map((x, i) => [i === 0 ? '' : ', ', x])}
                            </p>
                        </b>
                    </div>
                    <div style={{
                        fontWeight: 300,
                        marginBottom: 20
                    }}>
                        <p>
                            {eventLocation.map((x, i) => [i === 0 ? '' : ', ', x])}
                        </p>
                    </div>

                    <p style={{fontSize: '1.33em'}}>
                        {bookingLink}
                    </p>

                    {/*<div style={{fontSize:'0.8em'}}>*/}
                    {/*{eventDetail}*/}
                    {/*</div>*/}
                </div>
            </Grid.Column>

            {/*<Grid.Row textAlign='left' stlye={{}}>*/}
            {/*<Grid.Column width={15}>*/}
            {/*<h1 className='normal' style={{*/}
            {/*fontSize:'2.5em'*/}
            {/*}}>{eventTitle}</h1>*/}
            {/*</Grid.Column>*/}
            {/*</Grid.Row>*/}

            <Grid.Row textAlign='left'>
                {/*<Container text>*/}
                <Grid.Column width={14} style={{
                    fontSize: '1.2em',
                    paddingTop: '1em'
                }}>

                    {eventDetail}
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>
)

export default EventWidget
