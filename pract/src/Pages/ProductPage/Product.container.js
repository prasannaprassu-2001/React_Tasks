import React, { PureComponent } from "react";
import Productcomponent from "./Product.component";
import { useNavigate, useParams } from "react-router-dom";

const App = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
  return <Productcontainer navigate={navigate} params={params} {...props} />;
};
class Productcontainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.params.id !== this.props.params.id) {
      this.fetchData();
    }
  }
  fetchData = () => {
    const { id } = this.props.params;
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => this.setState({ data: data }))
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    const { data } = this.state;

    if (!data) {
      return <>loading</>;
    }
    return (
      <div>
        <Productcomponent data={data} />
      </div>
    );
  }
}
export default App;
