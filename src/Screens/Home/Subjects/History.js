import Template from "./Template";

const History = ({ navigation, route }) => {
  const subject = route.name;
  return <Template subject={subject} goBack={navigation.goBack} />
}

export default History;