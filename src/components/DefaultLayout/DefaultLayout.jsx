import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";
import { Wrapper } from "./DefaultLayout.styled";

export default function DefaultLayout() {
  return (
    <Wrapper>
      <NavBar/>
      <Outlet/>
    </Wrapper>
  );
}