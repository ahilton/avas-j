import React from 'react'

import InstagramEmbed from 'react-instagram-embed';


const Instagram = ({url}) => (

    <div style={{
        minWidth: 320,
        maxWidth: 320,
        width: 320,
        margin: '0 auto 0 auto'
    }}>
        <InstagramEmbed
            url={'https://instagr.am/p/'+url+'/'}
            maxWidth={320}
            hideCaption={true}
            containerTagName='div'
            protocol=''
            injectScript
            // onLoading={() => {}}
            // onSuccess={() => {}}
            // onAfterRender={() => {}}
            // onFailure={() => {}}
        />
    </div>
)

export default Instagram