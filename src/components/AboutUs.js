import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="about">
        <h1>About</h1>
        <h4>This is about us page</h4>
        {/* <User /> */}
        <UserClass name={"vikas class"} location={"hyderabad"} />
      </div>
    );
  }
}

// const AboutUs = () => {
//   return (
//     <div className="about">
//       <h1>About</h1>
//       <h4>This is about us page</h4>
//       {/* <User /> */}
//       <UserClass name={"vikas class"} />
//     </div>
//   );
// };

export default AboutUs;
