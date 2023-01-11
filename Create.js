import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
  const [title, setTitle] = useState(" ");
  const [body, setBody] = useState(" ");
  const [author, setAuthor] = useState(" ");
  const [isPending, setIspending ]= useState(false);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIspending(true);
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(blog),
    }).then(()=>{
        console.log("new blog added");
setIspending(false);
history.push("/")
    });
  };
  return (
    <div className="create">
      <h2>create new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></textarea>
        <label>blog author:</label>
        <input
          required
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
        {!isPending && <button>add blog</button>}
        {isPending && <button>adding blog........</button>}
        
      </form>
    </div>
  );
};
export default Create;
