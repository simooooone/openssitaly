import React, { FunctionComponent } from 'react';
import { Container, Info, NoWrap } from './style';

export const Footer: FunctionComponent<{}> = () => {
    return (
        <Container>
            <Info>
                <NoWrap>&copy; 2020</NoWrap>{' '}
                <NoWrap>
                    &laquo;Open Source Saturday Italy!&raquo; &mdash; Ogni
                    sabato contribuiamo insieme al codice open source
                </NoWrap>
            </Info>
            <Info>Questo sito non usa cookie :)</Info>
        </Container>
    );
};
