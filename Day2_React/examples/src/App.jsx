import Greetings from "./greetings";
import Navbar from "./header/Navbar";

export default function App() {
  return (
    <>
    <Navbar></Navbar>
     <h1><marquee>Welcome to REACT</marquee></h1>
     <Greetings></Greetings>
    </>
  );
}
