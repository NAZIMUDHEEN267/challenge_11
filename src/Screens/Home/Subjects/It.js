import Template from "./Template";

const It = ({ navigation, route }) => {
  const subject = route.name;
  return <Template subject={subject} goBack={navigation.goBack} />
}

export default It;