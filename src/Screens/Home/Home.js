import { View, Text, Dimensions } from 'react-native';
import Entypo from "react-native-vector-icons/Entypo";
import Video from "react-native-video";
import AntDesign from "react-native-vector-icons/AntDesign";
import Fontawesome from "react-native-vector-icons/FontAwesome";
import SelectDropdown from 'react-native-select-dropdown';
import CompanyLogo from "../../Assets/Images/logo.png";
import dataObj from "./data";

import {
  Nav,
  Image,
  LineBtn,
  MenuBar,
  Row,
  Container,
  BtnText,
  Section,
  Box,
  SideText,
  ProfileImg,
  BoxHeadline,
  BoxText,
  BoxButton
} from './Styles/Home';
import { ScrollView } from 'react-native-gesture-handler';
import data from './data';

const Home = ({ navigation }) => {

  const { width } = Dimensions.get("screen");

  const timeGreeting = function () {
    const hrs = new Date().getHours;
    if (hrs < 12) return "Good morning";
    else if (hrs > 12 && hrs < 17) return "Good after noon";
    else return "Good evening"
  };

  return (
    <ScrollView>
      {/* navbar */}
      <Nav>
        <Row>
          <MenuBar>
            <AntDesign name={"appstore1"} size={25} color={"#00C458"} />
          </MenuBar>
          <Image source={CompanyLogo} />
        </Row>

        <LineBtn style={{ borderColor: "#00C458" }}>
          <Entypo name="controller-record" size={25} color="green" />
          <BtnText style={{ color: "#00C458" }}>Classes</BtnText>
        </LineBtn>
      </Nav>

      {/* body */}
      <Container>
        {/* greeting section */}
        <Section>
          <Text style={{ fontWeight: "600", fontSize: 14 }}>{timeGreeting()}</Text>
          <Text style={{ fontSize: 26, color: "#000", fontWeight: "400" }}>{"Nazimudheen"}</Text>
        </Section>
        {/* dropdown section */}
        <Section>
          <SelectDropdown
            data={[8, 9, 10, 11, 12]}
            buttonStyle={{
              width: "100%",
              height: 70,
              backgroundColor: "#002333",
              paddingHorizontal: 20
            }}
            rowTextStyle={{ color: "#fff" }}
            buttonTextStyle={{ color: "#fff", textAlign: 'left' }}
            rowStyle={{ width: "100%", backgroundColor: "#002333" }}
            renderDropdownIcon={() => <Fontawesome name={"angle-down"} size={25} color={"#fff"} />}
            defaultButtonText={"Select class"}
          />
        </Section>

        {/* scroll button section */}
        <Section>
          <ScrollView
            horizontal
            pagingEnabled
            snapToInterval={100}
            decelerationRate='fast'
            showsHorizontalScrollIndicator={false}
          >
            {
              dataObj.subArray
                .map((subject, i) => {
                  if (typeof subject === "string") {
                    return (
                      (
                        <LineBtn key={String(i)} onPress={() => navigation.navigate(subject)}>
                          <Entypo name="controller-record" size={25} color="#00C458" />
                          <BtnText>{subject}</BtnText>
                        </LineBtn>
                      )
                    )
                  } else {
                    return (
                      <View style={{ width: 20 }} key={String(i)} />
                    )
                  }
                })
            }
          </ScrollView>
        </Section>

        {/* scrolling video section */}
        <Section>

        <SideText>Recent Courses</SideText>

          <ScrollView
            horizontal
            pagingEnabled
            snapToInterval={100}
            decelerationRate='fast'
            showsHorizontalScrollIndicator={false}
          >
            {
              dataObj.videos
                .map((link, i) => {
                  if (link !== 0) {
                    return (
                      (
                        <Video
                          source={link}
                          style={{ width: width * .59, height: 130, backgroundColor: "yellow" }}
                          paused={false}
                          repeat
                          key={i}
                          muted={false}
                        />
                      )
                    )
                  } else {
                    return (
                      <View style={{ width: 20 }} key={String(i)} />
                    )
                  }
                })
            }
          </ScrollView>
        </Section>

        {/* box section */}
        <Section>
         <ScrollView horizontal>
              <Box style={{ marginRight: 20, width: width * .6 }}>
                <ProfileImg source={data.Teacher_1} resizeMode={"center"} />
                <BoxHeadline>
                  Target live classes
                </BoxHeadline>
                <BoxText>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum recusandae praesentium aperiam minus ducimus quis modi, facere earum facilis voluptates, commodi voluptatibus quia beatae quidem quo pariatur nihil tempore doloremque.
                </BoxText>

                <BoxButton>
                  <Text style={{ color: "#fff", fontWeight: "600" }}>Book a free class</Text>
                </BoxButton>
              </Box>

            <Box style={{ width: width * .6 }}>
                <ProfileImg source={data.Teacher_2} resizeMode={"center"} />
                <BoxHeadline>
                  Available free online counseling classes
                </BoxHeadline>
                <BoxText>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum recusandae praesentium aperiam minus ducimus quis modi, facere earum facilis voluptates, commodi voluptatibus quia beatae quidem quo pariatur nihil tempore doloremque.
                </BoxText>

                <BoxButton>
                  <Text style={{ color: "#fff", fontWeight: "600" }}>Book a free class</Text>
                </BoxButton>
              </Box>
         </ScrollView>
        </Section>
      </Container>
    </ScrollView>
  )
}

export default Home;