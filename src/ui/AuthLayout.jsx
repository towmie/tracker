import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
`;

const ImageBg = styled.div`
  position: relative;
  width: 50%;
  height: 100vh;
  overflow: hidden;
  background-image: url(/login-bg.jpg);
  background-position: 50% 100%;
  background-size: contain;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    display: none;
  }
`;
// const StyledLoginForm = styled.div`
//   width: 50%;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   @media (max-width: 768px) {
//     width: 100%;
//   }
// `;
function AuthLayout() {
  return (
    <Layout>
      <ImageBg />
      <Outlet />
    </Layout>
  );
}

export default AuthLayout;
