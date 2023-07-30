import { useNavigate } from "react-router-dom";

const withNavigate = (WrappedComponent) => {
    const WrappedWithNavigate = (props) => {
      const navigate = useNavigate();
  
      return <WrappedComponent {...props} navigate={navigate} />;
    };
  
    return WrappedWithNavigate;
  };
  
  export default withNavigate;