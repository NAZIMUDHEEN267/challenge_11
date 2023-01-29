import { View } from "react-native";
import styled from "styled-components/native";
import AntiDesign from "react-native-vector-icons/AntDesign";
import Ionic from "react-native-vector-icons/Ionicons";
import { ContainerTop } from "../Styles/Templete";

const Stream = ({ route }) => {
    return (
        <View style={{ height: "100%", width: "100%" }}>
            {/* video container */}
            <ContainerTop>

            </ContainerTop>

            {/* body */}
            <ContainerBody>

                {/* video text */}
                <TextContainer>
                    <VideoText>
                        kalsjdf;laksjdf;laksjdf;alskdfj
                    </VideoText>
                    <Icon>
                        <AntiDesign name="clouddownloado" color="#999" size={33} />
                    </Icon>
                </TextContainer>

                {/* change video */}
                <TextContainer style={{justifyContent: "space-between"}}>
                    <Icon>

                    </Icon>
                    <Row>
                        <Ionic name="radio-button-on" size={12} color="#00C458" />
                        <ChapterText>12 chapters</ChapterText>
                    </Row>
                    <Icon>

                    </Icon>
                </TextContainer>
            </ContainerBody>
        </View>
    )
}

const ContainerBody = styled.View`
    height: 70%;
    width: 100%;
    background-color: #002333;
    padding: 10px;
`;

const TextContainer = styled.View`
    height: 40px;
    width: 100%;
    flex-direction: row;
    align-items: center;
`;

const VideoText = styled.Text`
  text-align: left;
  font-size: 17px;
  font-weight: 600;
  color: #fff;
  margin: 5px;
  flex: .8;
`;

const Icon = styled.View`
    flex: .2; 
    align-items: center;
    justify-content: center;
`;

export const Row = styled.View`
    flex-direction: row;
    align-items: center;
    margin-right: 10px;
`;

export default Stream;