import { connect } from "react-redux";
import AddNote from "./components/AddNote";
import ShowNote from "./components/ShowNote";

function App(props) {
  return (
    <div className="row" style={{ marginTop: "3%" }}>
      <AddNote />
      {props.note.map((note, index) => {
        // Render ra lần lượt các ghi chú.
        return <ShowNote noteData={note} key={note.id} />;
      })}
    </div>
  );
}

// Lấy state từ store bằng mapStateToProps
// Lúc này state nhận được sẽ gán vào props
const mapStateToProps = (state, ownProps) => {
  console.log(state);
  // Gán state nhận về từ store
  // thành props có tên note (props.note)
  return {
    note: state.note,
  };
};

export default connect(mapStateToProps, null)(App);
