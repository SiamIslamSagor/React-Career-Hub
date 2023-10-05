import Banner from "../Banner/Banner";
import CategoryList from "../CategoryLlist/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className=" custom-width  bg-gradient-to-t from-violet-50 to-violet-0">
        <Banner></Banner>
      </div>
      <CategoryList></CategoryList>
      <FeaturedJobs className="container mx-auto"></FeaturedJobs>
    </div>
  );
};

export default Home;
