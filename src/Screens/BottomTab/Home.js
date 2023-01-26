import { View } from 'react-native';
import { Nav, Image, LineBtn, MenuBar, Row, Container, BtnText } from './Styles/Home';
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import CompanyLogo from "../../Assets/Images/logo.png";

const Home = () => {
  return (
     <View>
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
      <Container>
      </Container>
     </View>
  )
}

export default Home;