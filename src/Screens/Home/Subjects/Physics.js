import Template from "./Template";

const Physics = ({ navigation, route }) => {
  const subject = route.name;
  return <Template subject={subject} goBack={navigation.goBack} />
}

export default Physics;