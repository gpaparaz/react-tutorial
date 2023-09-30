import React from "react";

const titleStyle = {
  width:'fit-content',
  fontVariant: 'small-casps',
  position:'relative',
  display:'grid',
  placeItems:'center'
}

//se c'è il text bene, altrimenti gli mettiamo di default titolo
const Title = ({text}) => {
  return <div style={titleStyle}><h4>{text || 'titolo'}</h4>
  <div className="underline"></div>
  </div>;
};

export default Title;
