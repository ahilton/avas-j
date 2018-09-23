import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {Image, Label, Responsive, Segment, Statistic,} from 'semantic-ui-react'

class FundraisingEvent extends Component {

    render() {
        const {amount, title, imageSrc, content, color} = this.props
        // const { fixed } = this.state

        return (
            <Segment clearing basic textAlign='left' style={{
                backgroundColor: 'white',
                borderWidth: 10,
                borderColor: color,
                borderStyle: 'solid',
                borderRadius: 20
            }}>
                <Responsive minWidth={Responsive.onlyComputer.minWidth}>
                    <Label as='a' color='orange' ribbon='right'>
                        <Statistic inverted size='tiny'>
                            <Statistic.Value>{amount}</Statistic.Value>
                            <Statistic.Label>Raised</Statistic.Label>
                        </Statistic>
                    </Label>
                </Responsive>

                <Responsive maxWidth={Responsive.onlyTablet.maxWidth}>

                    <Segment basic style={{
                        marginTop: 0
                    }}>

                        <h1 style={{marginBottom: 30}}>{title}</h1>

                        <Statistic horizontal inverted text size='tiny' style={{
                            backgroundColor: '#f2711c',
                            padding: 10,
                            marginTop: -10,
                            borderRadius: 5
                        }}>
                            <Statistic.Value>{amount}</Statistic.Value>
                            <Statistic.Label>Raised</Statistic.Label>
                        </Statistic>
                        <Image
                            size='small'
                            floated='right'
                            src={imageSrc}/>
                        {content}
                    </Segment>
                </Responsive>

                <Responsive minWidth={Responsive.onlyComputer.minWidth}>

                    <Segment basic style={{
                        marginTop: -50
                    }}>
                        <h1 style={{marginBottom: 30}}>{title}</h1>
                        <Image
                            size='medium'
                            floated='right'
                            src={imageSrc}/>

                        {content}
                    </Segment>
                </Responsive>

            </Segment>
        )
    }
}

FundraisingEvent.propTypes = {
    children: PropTypes.node,
}

export default FundraisingEvent