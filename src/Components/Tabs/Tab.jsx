const Tab = ({ children, style = {}, className = "" }) => {
  return (
    <section className={`Tab ${className}`} style={style}>
      {children}
    </section>
  );
};

export default Tab;
