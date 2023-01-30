import { ScrollView, Dimensions } from 'react-native'
import styled from 'styled-components/native';
import Ionic from "react-native-vector-icons/Ionicons";
import { videoApi } from "../api";

const { height } = Dimensions.get("screen");

const Video = (props) => {
  
  return (
    <ScrollView style={{ padding: 10 }}>
      <VideoItem
        height={height} activeOpacity={.7}
        onPress={() => props.navigation.navigate("Stream", { videoLink: "../../../../Assets/Videos/History.mp4" })}
      >
        <VideoImg resizeMode={"cover"} source={require("../../../../Assets/Images/share.jpg")} />
        <VideoText>somealdkfsdfa</VideoText>
        <Row style={{ marginLeft: 8 }}>
          <Row>
            <Ionic name="radio-button-on" size={12} color="#999" />
            <ChapterText>1 chapters</ChapterText>
          </Row>
          <Row>
            <Ionic name="radio-button-on" size={12} color="#999" />
            <ChapterText>1 Part</ChapterText>
          </Row>
        </Row>
      </VideoItem>
    </ScrollView>
  )
}

const VideoItem = styled.TouchableOpacity`
  height: ${props => props.height / 3.5}px;
  width: 100%;
  border-radius: 5px;
  elevation: 5;
  padding: 5px;
  margin-bottom: 5px;
`;

const VideoImg = styled.Image`
  height: 70%;
  width: 100%;
  background-color: yellow;
`;

const VideoText = styled.Text`
  text-align: left;
  font-size: 15px;
  font-weight: 600;
  color: #111;
  margin: 5px;
`;

export const Row = styled.View`
    flex-direction: row;
    align-items: center;
    margin-right: 10px;
`;

export const ChapterText = styled.Text`
    color: #999;
    font-size: 13px;
`;

export default Video;