import "./styles.css";
import React, { useEffect } from "react";
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
    <>
      <MainNav>
        <MainNavElement />
        <MainNavElement />
        <MainNavElement />
        <MainNavElement />
        <MainNavElement />
      </MainNav>
      <HomePage
        leftNav={
          <Layout className="leftnav">
            <Content className="leftnav__element" />
            <Content className="leftnav__element" />
            <Content className="leftnav__element" />
            <Content className="leftnav__element" />
            <Content className="leftnav__element" />
          </Layout>
        }
        centerContent={
          <Layout className="centercontent">
            <Content className="centercontent__element" />
            <Content className="centercontent__element" />
            <Content className="centercontent__element" />
            <Content className="centercontent__element" />
            <Content className="centercontent__element" />
          </Layout>
        }
        rightContent={
          <Layout className="rightcontent">
            <Content className="rightcontent__element" />
            <Content className="rightcontent__element" />
            <Content className="rightcontent__element" />
            <Content className="rightcontent__element" />
            <Content className="rightcontent__element" />
          </Layout>
        }
      />
    </>
  );
}
