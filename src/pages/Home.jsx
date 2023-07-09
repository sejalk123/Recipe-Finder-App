import { Button } from "semantic-ui-react";
import Header from "../components/common/Header";
import { Link } from "react-router-dom";
const Home=()=>{
    return(
         <div>
             <Header title="Our Recipes" bgClass="bg-image">
                <Button
                content="SEARCH RECIPES"
                color="primary"
                as={Link}
                to="/recipes"
                size="big"
                />
             </Header>
         </div>
    )
}
export default Home;