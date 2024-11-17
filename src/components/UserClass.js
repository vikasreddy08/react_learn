import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "John wick",
        location: "USA",
        avatar_url: "",
      },
    };
  }

  async componentDidMount() {
    const response = await fetch("https://api.github.com/users/vikasreddy08");
    const userData = await response.json();
    // console.log(userData);

    this.setState({
      userInfo: userData,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Count : {this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increase count
        </button>
        <h2>{name}</h2>
        <h2>{location || "India"}</h2>
        <img src={avatar_url} />
      </div>
    );
  }
}

export default UserClass;
