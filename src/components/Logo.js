import React from 'react';
import ReactVivus from 'react-vivus';
import svg from '../logo-face.svg';

const Logo = () => {

    return (
        <ReactVivus
            id="foo"
            option={{
                file: svg,
                type: 'oneByOne',
                animTimingFunction: 'EASE',
                duration: 250,
                onReady: console.log
            }}
            style={{ height: '450px', width: '450px' }}
            callback={(myVivus) => {
                setTimeout(function () { 
                    if (myVivus.getStatus() === 'end') {
                        myVivus.reset().play();
                    }
                }, 4000);
            }}
        />
    )
}

export default Logo
