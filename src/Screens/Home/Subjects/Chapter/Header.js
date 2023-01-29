import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import FontAwesome from "react-native-vector-icons/FontAwesome";

const {height} = Dimensions.get("screen");

const Header = ({route, navigation}) => {
    console.log(route);
  return (
    <Container height={height}>
        <Row>
            <NavMenu onPress={navigation.goBack}>
                  <FontAwesome name="angle-left" size={20} color="green" />
            </NavMenu>
            {/* <SubjectText>{route.params.name}</SubjectText> */}
        </Row>
    </Container>
  )
}

const Container = styled.View`
    height: ${props => parseInt(props.height * .3)}px;
    width: 100%;
    background-color: #00202F;
    padding: 10px;
`;

const NavMenu = styled.TouchableOpacity`
    height: 30px;
    width: 30px;
    align-items: center;
    justify-content: center;
    border-width: 2px;
    border-color: #e5e5e5;
    border-radius: 5px;
`;

const SubjectText = styled.Text`
    font-size: 20px;
    color: #fff;
    font-weight: 600;
    margin-bottom: 10px;
`;

const Row = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-right: 10px;
    width: 60%;
`;

export default Header