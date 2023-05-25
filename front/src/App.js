import "./styles.css";
import React, { useEffect } from "react";
import CommitmentScrollView from "./component/CommitmentScrollView";
import Title from "./component/Title";

const MainNav = ({ children }) => {
  return <div className="mainnav">{children}</div>;
};


const Layout = ({
  children,
  className
}) => {
  return <div className={className}>{children}</div>;
};
const LayoutElement = ({
  children,
  className
}) => {
  const [state, setState] = React.useState(false);
  return (
    <div className={className} onClick={() => setState((v) => !v)}>
      <span> {String(state)}</span>
    </div>
  );
};

const HomePage = ({
  leftNav,
  centerContent,
  rightContent
}) => {
  return (
    <div className="homepage">
      {leftNav}
      {centerContent}
      {rightContent}
    </div>
  );
};
const MainNavElement = ({ children }) => {
  const [state, setState] = React.useState(false);
  return (
    <div className="mainnav__element" onClick={() => setState((v) => !v)}>
      <span> {String(state)}</span>
    </div>
  );
};

const Content = LayoutElement;

export default function App() {

  useEffect(() => {

  })

  return (
    <div className="main">
      <Title/>
      <CommitmentScrollView/>
    </div>
  );
}
