import Table from "./Components/Table/Table";
import Carousel from "./Components/Carousel/Carousel";
import Slide from "./Components/Carousel/Slide";
import Spinner from "./Components/Spinner/Spinner";
import TypeWriter from "./Components/TypeWriter/TypeWriter";
import Select from "./Components/Select/Select";
const columns = [
  { name: "ID", field: "id" },
  { name: "Name", field: "name" },
  { name: "Age", field: "age" },
];

const rows = new Array(100).fill({
  id: 1,
  name: "Alice",
  age: 25,
});

const options = ["Shan", "Vishwa"];
const App = () => {
  // return <TypeWriter text="welcome to my world" />;
  return (
    <>
      <div>
        {/* <Carousel>
          <Slide>
            <div>HI</div>
          </Slide>
          <Slide>
            <div>HOW</div>
          </Slide>
          <Slide>
            <div>ARE</div>
          </Slide>
          <Slide>
            <div>YOU</div>
          </Slide>
        </Carousel> */}
        <Select options={options} />
      </div>
    </>
  );
};

export default App;
