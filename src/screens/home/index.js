import React, { Fragment } from 'react';
import presentationImage from '../../assets/images/presentation_eagle.png';
import Header from '../../components/header';
import { Column, Section, Title, Container } from 'rbx';
import '../../styles/home.scss'
import { Link } from 'react-router-dom';

const HomeScreen = () => (
    <Fragment>
        <Header />

        <Section size="medium" className="home">
            <Container>
                <Column.Group>
                    <Column size={5}>

                        <Title size={2} spaced className="has-text-white">
                            Registre sua ideia que um de nossos consultores irão te responder
                        </Title>
                        <Title size={5} spaced className="has-text-light" subtitle>
                            Registre a sua ideia em poucas linhas<br /><br />
                            Um de nossos consultores entrará em contato em menos de 24hs.
                        </Title>
                        <Link to='/register' className="button is-outlined is-white is-large">
                            <strong>Entrar</strong>
                        </Link>
                    </Column>
                    <Column size={6} offset={1}>
                        <img src= {presentationImage}/>
                    </Column>
                </Column.Group>
            </Container>
        </Section>
    </Fragment>
);

export default HomeScreen;