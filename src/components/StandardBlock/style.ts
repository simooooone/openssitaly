import styled from 'styled-components';
import { align } from '@bucket-of-bolts/styled-companion/build';
import Img from 'gatsby-image';
import { media, grid, cell, withTheme } from '../../style';
import { effect, withEffects } from '../../lib/effects';

export const StandardBlockContainer = withTheme(styled.div`
    margin: 2rem 1rem;
    ${media({ xs: 'margin: 2rem 0rem;' })}
    ${align('center', 'center', 'column')};
    position: relative;

    // @ts-ignore
    font-size: ${props => props.theme.font[props.fontSize]};

    // @ts-ignore
    ${props => effect(props)}

    a {
        position: relative;
        display: inline-block;
        padding-left: 26px;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px transparent;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
    }
    a:before {
        content: 'star_border';
        font-size: 5px;
        position: absolute;
        left: 0;
        top: 3px;
        text-decoration: none;
        color: #9863a0;
        font-family: 'Material Icons';
        font-weight: normal;
        font-style: normal;
        font-size: 24px; /* Preferred icon size */
        display: inline-block;
        line-height: 1;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: normal;
        white-space: nowrap;
        direction: ltr;

        /* Support for all WebKit browsers. */
        -webkit-font-smoothing: antialiased;
        /* Support for Safari and Chrome. */
        text-rendering: optimizeLegibility;

        /* Support for Firefox. */
        -moz-osx-font-smoothing: grayscale;

        /* Support for IE. */
        font-feature-settings: 'liga';
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }

    /* Icon Bob */
    @-webkit-keyframes hvr-icon-bob {
        0% {
            -webkit-transform: translateY(-3px);
            transform: translateY(-3px);
        }
        50% {
            -webkit-transform: translateY(3px);
            transform: translateY(3px);
        }
        100% {
            -webkit-transform: translateY(-3px);
            transform: translateY(-3px);
        }
    }
    @keyframes hvr-icon-bob {
        0% {
            -webkit-transform: translateY(-3px);
            transform: translateY(-3px);
        }
        50% {
            -webkit-transform: translateY(3px);
            transform: translateY(3px);
        }
        100% {
            -webkit-transform: translateY(-3px);
            transform: translateY(-3px);
        }
    }
    @-webkit-keyframes hvr-icon-bob-float {
        100% {
            -webkit-transform: translateY(-3px);
            transform: translateY(-3px);
        }
    }
    @keyframes hvr-icon-bob-float {
        100% {
            -webkit-transform: translateY(-3px);
            transform: translateY(-3px);
        }
    }

    a:hover:before,
    a:focus:before,
    a:active:before {
        -webkit-animation-name: hvr-icon-bob-float, hvr-icon-bob;
        animation-name: hvr-icon-bob-float, hvr-icon-bob;
        -webkit-animation-duration: 0.3s, 1.5s;
        animation-duration: 0.3s, 1.5s;
        -webkit-animation-delay: 0s, 0.3s;
        animation-delay: 0s, 0.3s;
        -webkit-animation-timing-function: ease-out, ease-in-out;
        animation-timing-function: ease-out, ease-in-out;
        -webkit-animation-iteration-count: 1, infinite;
        animation-iteration-count: 1, infinite;
        -webkit-animation-fill-mode: forwards;
        animation-fill-mode: forwards;
        -webkit-animation-direction: normal, alternate;
        animation-direction: normal, alternate;
        color: #842020;
    }
`);

export const Inner = withTheme(styled.div`
    max-width: 60%;
    ${media({ xs: 'max-width: 80%', sm: 'max-width: 70%' })};
    // @ts-ignore
    font-size: ${props => props.theme.font[props.fontSize]};
    font-weight: 300;
`);

export const ImageSingle = styled.div`
    position: relative;
    ${align('center', 'center')};
    width: 100%;
`;

export const ImageWrap = styled.div`
    width: 75%;
    ${media({ xs: 'width: 100%;' })}
`;

export const Image = styled(Img)`
    width: 100%;
    height: auto;
    background-color: #f2f1ef;
    border-radius: 2px;
`;

export const ImageGallery = styled.div`
    margin: 0 5rem;
    ${media({ sm: 'margin: 0 2rem;', xs: 'margin: 0' })};
    width: 100%;
`;

export const ImageGalleryGrid = styled.div`
    ${grid({ gutters: { all: '1rem', xs: '0.5rem' } })};
`;

export const GalleryItem = withEffects(styled.div`
    ${cell({ xs: 12, all: 4 })};

    // @ts-ignore
    ${props => effect(props)}
`);
