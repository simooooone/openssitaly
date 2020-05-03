import React, { FunctionComponent } from 'react';
import animateScrollTo from 'animated-scroll-to';
import {
    Container,
    BackgroundImage,
    ImageOverlay,
    Arrow,
    Data,
    Title,
    SubTitle,
    NavBar,
} from './style';
import { Discord } from '@styled-icons/boxicons-logos/Discord';
import { Github } from '@styled-icons/boxicons-logos/Github';
import { Twitter } from '@styled-icons/boxicons-logos/Twitter';
import { Query } from './query';
import { Copyright } from '../Copyright';

export const Intro: FunctionComponent<{}> = () => {
    const scrollWindow = () => {
        const data = document.querySelector('.intro-data');
        if (data) {
            const windowScrollTop = window.scrollY || window.pageYOffset;
            const dataRect = data.getBoundingClientRect();
            animateScrollTo(dataRect.top + dataRect.height + windowScrollTop, {
                speed: 1000,
            });
        }
    };

    const timeoutBase = 500;

    return (
        <Query>
            {data => (
                <>
                    <Container>
                        <BackgroundImage
                            sizes={data.backgroundImage.childImageSharp.fluid}
                        />
                        <NavBar className="navbar">
                            <a
                                href="https://github.com/oss-italy"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github />
                            </a>
                            <a
                                href="https://twitter.com/OssItaly"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Twitter />
                            </a>
                            <a
                                href="https://discord.gg/TpEa5Wn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Discord />
                            </a>
                        </NavBar>
                        <ImageOverlay />
                        <Data className="intro-data">
                            <Title
                                effect="fade-slide-left"
                                effectTimeout={timeoutBase}
                            >
                                Open Source Saturday Italy
                            </Title>
                            <SubTitle
                                effect="fade-slide-bottom"
                                effectTimeout={timeoutBase + 500}
                            >
                                Ogni sabato contribuiamo insieme al codice open
                                source
                            </SubTitle>
                        </Data>
                        <Arrow
                            effectTimeout={timeoutBase + 1500}
                            onClick={() => scrollWindow()}
                        />
                    </Container>
                    <Copyright
                        author="Caspar Camille Rubin"
                        source="https://unsplash.com/photos/fPkvU7RDmCo"
                        sourceText="Unsplash"
                    />
                </>
            )}
        </Query>
    );
};
