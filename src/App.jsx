import { useState } from "react";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen((prevState) => !prevState);
  };
  return (
    <div className="">
      <div className="min-h-screen text-[#1C191C]">
        <Navbar modalOpen={modalOpen} toggleModal={toggleModal} />
        {/* Work on responsiveness across screen sizes */}
        <Content />
      </div>
      <Modal modalOpen={modalOpen} toggleModal={toggleModal} />
    </div>
  );
}

export default App;
