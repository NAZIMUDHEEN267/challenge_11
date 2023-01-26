import styled from "styled-components/native";


export const Container = styled.View`
    width: 100%;
    height: 100%;
    padding: 20px;
`;

export const Nav = styled.View`
    width: 100%;
    height: 100px;
    padding: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px;
    border-bottom-width: 1px;
    border-color: #d6d2c5;
`;

export const Row = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Image = styled.Image`
    width: 60px;
    height: 60px;
    margin-left: 15px;
`;

export const MenuBar = styled.TouchableOpacity `
    width: 50px;
    height: 50px;
    border-width: 1px;
    border-color: #00C458;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
`;

export const LineBtn = styled.TouchableOpacity`
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    height: 50px;
    width: 100px;
    border-width: 2px;
    border-color: black;
    border-radius: 5px;
    flex-direction: row;
`;

export const BtnText = styled.Text`
    font-size: 15px;
    color: black;
    font-weight: 600;
`;