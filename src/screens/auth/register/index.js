import React, { Fragment } from "react";
import Header from '../../../components/header'
import { Column, Section, Title, Container, Card } from "rbx";
import logoImage from '../../../assets/images/logo_eagle.png'
import '../../../styles/auth.scss'
import RegisterForm from '../../../components/auth/register_form'

const RergisterScreen = () => (
    <Fragment>
        <Header />
        <Section size="medium" className="auth">
            <Container>
                <Column.Group centered>
                    <Column size={4}>
                        <Card>
                            <Section>
                                <Column.Group centered>
                                    <Column size={12}>
                                        <img src={logoImage} />
                                    </Column>
                                </Column.Group>
                                
                                <Column.Group>
                                    <Column size={12}>
                                        <Title size={6} className="has-text-grey has-text-centered">
                                            Registre suas ideias
                                        </Title>
                                    </Column>
                                </Column.Group>
                            </Section>
                            <Card.Content>
                            <RegisterForm/>
                            </Card.Content>
                        </Card>
                    </Column>
                </Column.Group>
            </Container>
        </Section>
    </Fragment>
)

export default RergisterScreen;