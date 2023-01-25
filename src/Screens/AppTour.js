import { View, Text } from 'react-native'
import React from 'react';
import { Container, Description, Headline, Image, Button } from "./Styles/AppTour";
import Icon from "react-native-vector-icons/AntDesign";
import ShareImg from "../Assets/Images/share.jpg";
import LarnImg from "../Assets/Images/learn.jpg";
import KidsImg from "../Assets/Images/kids.jpg";
import PageImg from "../Assets/Images/fullscreen.jpg";
import TitlePageImg from "../Assets/Images/title.jpg";

const Share = () => (
    <Container>
        <Image source={ShareImg} resizeMode={"contain"} />
        <Headline>Fractional Shares</Headline>
        <Description>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias pariatur enim, dignissimos ullam ratione error reiciendis officiis nemo, ducimus expedita quam illo iste autem qui! Ut minima expedita quam quos!</Description>
        <Button>
            <Icon name="arrowright" size={35} color={"#fff"}/>
        </Button>
    </Container>
)

const Learn = () => (
    <Container>
        <Image source={LarnImg} resizeMode={"contain"} />
        <Headline>Learn As You Go</Headline>
        <Description>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias pariatur enim, dignissimos ullam ratione error reiciendis officiis nemo, ducimus expedita quam illo iste autem qui! Ut minima expedita quam quos!</Description>
        <Button>
            <Icon name="arrowright" size={35} color={"#fff"} />
        </Button>
    </Container>
)

const Kids = () => (
    <Container>
        <Image source={KidsImg} resizeMode={"contain"} />
        <Headline>Kids And Seen</Headline>
        <Description>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias pariatur enim, dignissimos ullam ratione error reiciendis officiis nemo, ducimus expedita quam illo iste autem qui! Ut minima expedita quam quos!</Description>
        <Button>
            <Icon name="arrowright" size={35} color={"#fff"} />
        </Button>
    </Container>
)

const Page = () => (
    <Container>
        <Image source={PageImg} resizeMode={"contain"} />
        <Headline>Full Screen Page</Headline>
        <Description>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias pariatur enim, dignissimos ullam ratione error reiciendis officiis nemo, ducimus expedita quam illo iste autem qui! Ut minima expedita quam quos!</Description>
        <Button>
            <Icon name="arrowright" size={35} color={"#fff"} />
        </Button>
    </Container>
)

const TitlePage = () => (
    <Container>
        <Image source={TitlePageImg} resizeMode={"contain"} />
        <Headline>Another Title Page</Headline>
        <Description>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias pariatur enim, dignissimos ullam ratione error reiciendis officiis nemo, ducimus expedita quam illo iste autem qui! Ut minima expedita quam quos!</Description>
        <Button>
            <Icon name="arrowright" size={35} color={"#fff"} />
        </Button>
    </Container>
)

export default TitlePage;