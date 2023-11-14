export default function User(props) {
  const { name } = props;
  console.log(props);
  return (
    <>
      <article className="grid-item-artist">
        <h2>{name}</h2>
      </article>
    </>
  );
}
