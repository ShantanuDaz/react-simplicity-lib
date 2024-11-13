import Table from "./Components/Table/Table";
import Carousel from "./Components/Carousel/Carousel";
import Slide from "./Components/Carousel/Slide";
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
const App = () => {
  // return <TypeWriter text="welcome to my world" />;
  return (
    <>
      <div>
        {/* <Table
          columns={columns}
          rows={rows}
          isSerialized
          pageMenuPlacement="end"
          isPagination
        /> */}
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
      </div>
    </>
  );
};

export default App;
