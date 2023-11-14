import NavBar from "./NavBar";

export default function Homepage() {
  return (
    <div>
      <NavBar />
      <h1>Welcome to our user administration page</h1>
      <img
        style={{ height: "200px" }}
        src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f973.svg"
        alt=""
      />
    </div>
  );
}
