import { Helmet } from "react-helmet-async";
import Rooms from "../../components/Rooms/Rooms";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>HR-PALase | Vacation Homes & Condo Rentals</title>
      </Helmet>


      
      <Rooms></Rooms>
    </div>
  );
};

export default Home;
