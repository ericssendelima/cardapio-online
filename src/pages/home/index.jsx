import axios from "axios";

const index = () => {
  const handleTestes = () => {
    axios("http://localhost:8088/api")
      .then((res) => {
        console.log("dentro do then do axios");
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h3>Cardápio online</h3>
      <button
        onClick={() => {
          handleTestes()
        }}
      >
        TEste
      </button>
    </div>
  );
};


export default index

