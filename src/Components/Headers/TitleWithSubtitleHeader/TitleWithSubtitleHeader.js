import React, { Component } from 'react';

import { Container, Header, Left, Body, Right, Title, Subtitle } from 'native-base';

class TitleWithSubtitleHeader extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left />
                    <Body>
                        <Title>Title</Title>
                        <Subtitle>Subtitle</Subtitle>
                    </Body>
                    <Right />
                </Header>
            </Container>
        );
    }
}

export default TitleWithSubtitleHeader;