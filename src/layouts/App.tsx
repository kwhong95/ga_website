import { useEffect } from "react";
import ReactGa from "react-ga";

export default function App() {
  useEffect(() => {
    ReactGa.initialize("G-F85BG5VQJ0");

    ReactGa.pageview("/");
  }, []);

  return <h1>Hello~</h1>;
}
