import { View, Text } from 'react-native';
import { useRef } from 'react';
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import Fontawesome from "react-native-vector-icons/FontAwesome";
import SelectDropdown from 'react-native-select-dropdown';
import CompanyLogo from "../../Assets/Images/logo.png";
import {
  Nav,
  Image,
  LineBtn,
  MenuBar,
  Row,
  Container,
  BtnText,
  Section
} from './Styles/Home';
import { ScrollView } from 'react-native-gesture-handler';

const Home = ({navigation}) => {

  const timeGreeting = function () {
    const hrs = new Date().getHours;
    if (hrs < 12) return "Good morning";
    else if (hrs > 12 && hrs < 17) return "Good after noon";
    else return "Good evening"
  };

  const subArray = ["Biology", 0,"English", 0,"Maths", 0,"It", 0,"Chemist", 0,"Physics", 0,"History"];

  return (
    <View>

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

        {/* scrolling video section */}
        <Section>
          <ScrollView
            horizontal
            pagingEnabled
            snapToInterval={100}
            decelerationRate='fast'
            showsHorizontalScrollIndicator={false}
          >
            {
              subArray
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

        {/* scrolling button section */}

      </Container>
    </View>
  )
}

export default Home;