import style from "./Post.module.css";

const name = ["Name 1", "Name2"];

function Post(props) {
  const chosenName = Math.random() > 0.5 ? name[0] : name[1];
  console.log(props);

  return (
    <div className={style.post}>
      <p className={style.author}>{props.author}</p>
      <p className={style.text}>{props.body}</p>
    </div>
  );
}
export default Post;
