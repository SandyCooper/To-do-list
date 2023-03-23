import React from "react";
import Search from "./component/search";
import Header from "./component/header";
import CreateNote from "./component/createNotes";
import NotesGroup from "./component/notesGroup";
import Simplyfy from "./component/simplyfy";
import Toggle from "./component/toggle";





function App() {

  return (
    <Simplyfy>

      <Toggle />
      <Header />
      <Search />
      <CreateNote />
      <NotesGroup />

    </Simplyfy>
  );
}

export default App;
