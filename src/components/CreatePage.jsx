export default function CreateForm() {
  return(
    <div>
      <form>
        <label for="name">name: </label>
        <input
        type="text"
        id="name"
        placeholder="Type your name here">
        required
        />

        <button id="form-button">submit</button>
      </form>
    </div> );
}