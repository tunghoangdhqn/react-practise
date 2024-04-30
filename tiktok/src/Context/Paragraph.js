import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";


function Paragraph() {
  const context = useContext(ThemeContext);


  let backgroundColor = (context.theme === 'dark' ? '#000' : '#fff');
  console.log(backgroundColor);
  return (
    <p className={context.theme} style={{ background: backgroundColor }}>
      In publishing and graphic design, Lorem ipsum is a placeholder
      text commonly used to demonstrate the visual form of a document or a
      typeface without relying on meaningful content
    </p>
  );
}

export default Paragraph;
