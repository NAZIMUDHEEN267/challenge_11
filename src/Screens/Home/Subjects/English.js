import Template from "./Template";

const English = ({ navigation, route }) => {
  const subject = route.name;
  return <Template subject={subject} goBack={navigation.goBack} />
}

export default English;