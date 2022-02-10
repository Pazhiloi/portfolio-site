import "./TextAnimation.css";
const TextAnimation = ({text}) => {
  const reactArray = text.split("");

  return (
    <div className="wrapper">
      {reactArray.map((item, i) => {
        let delay = i * 0.07 + 's';
        return (
        <span style={{transitionDelay: delay}} className="span" key={i}>
          {item}
        </span>
      )})}
    </div>
  );
}; 

export default TextAnimation;
