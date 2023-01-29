import styled from "styled-components/native";

export const ContainerTop = styled.View`
    height: 30%;
    width: 100%;
    background-color: #002333;
    padding: 20px;
    padding-bottom: 50px;
    justify-content: space-between;
`;

export const NavMenu = styled.TouchableOpacity`
    height: 30px;
    width: 30px;
    align-items: center;
    justify-content: center;
    border-width: 2px;
    border-color: #e5e5e5;
    border-radius: 5px;
`;

export const ProfileContainer = styled.View`
    height: 60%;
    width: 90%;
    align-self: center;
    background-color: #fff;
    margin-top: -8%;
    margin-bottom: 110px;
    elevation: 5;
    border-radius: 5px;
    padding: 15px;
`;

export const SubjectText = styled.Text`
    font-size: 30px;
    color: #fff;
    font-weight: 600;
    margin-bottom: 10px;
`;

export const ChapterText = styled.Text`
    color: #00C458;
    font-size: 13px;
`;

export const Row = styled.View`
    flex-direction: row;
    align-items: center;
    margin-right: 10px;
`;

export const ChapterBtn = styled.TouchableOpacity`
    width: 100%;
    height: 20%;
    border-radius: 5px;
    elevation: 5;
    background-color: #fff;
    padding: 10px;
`;