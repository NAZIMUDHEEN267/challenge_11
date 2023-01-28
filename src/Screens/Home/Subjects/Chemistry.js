import Template from "./Template";

const Chemistry = ({ navigation, route }) => {
  const subject = route.name;
  return <Template subject={subject} goBack={navigation.goBack} />
}

export default Chemistry;