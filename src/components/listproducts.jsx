import React from "react";

function MyTable() {
  const initState = [
   
  ];
  const [state, setState] = React.useState(initState);

  return (
    <table>
      <tr key={"index"}>
        {Object.keys(state[0]).map((key) => (
          <th>{key}</th>
        ))}
      </tr>
      {state.map((item) => (
        <tr key={product-code}>
          {Object.values(item).map((val) => (
            <td>{val}</td>
          ))}
        </tr>
      ))}
    </table>
  );
}

ReactDOM.render(<MyTable />, document.getElementById("target"));
