import Template from "./Template";

const Biology = ({navigation, route}) => {
  const subject = route.name;
  return <Template subject={subject} goBack={navigation.goBack}/>
}

export default Biology;