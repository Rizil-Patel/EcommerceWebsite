import NavBar from "./Navbar";
import Banner from "./Banner";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import { getProducts } from "../../redux/actions/producerAction";

import { styled, Box } from '@mui/material';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MidSection from "../header/MidSection";

const Component = styled(Box)`
    padding:10px;
    background: #f2f2f2;
`

const Home = () => {

    const { products} = useSelector(state => state.getProducts)
    // console.log(products);
    const dispatch = useDispatch();

    useEffect (() => {
        dispatch(getProducts());
    },[dispatch]);

    return (
        <>
            <NavBar />
            <Component>
                <Banner />
                <MidSlide products={products} title="Deal of the Day" timer={true}/>
                <Slide products={products} title="Discount for you" timer={false}/>
                <MidSection />
                <Slide products={products} title="Suggesting Items" timer={false}/>
                <Slide products={products} title="Top Selection" timer={false}/>
                <Slide products={products} title="Recommended Items" timer={false}/>
                <Slide products={products} title="Trending Offers" timer={false}/>
                <Slide products={products} title="Season's top picks" timer={false}/>
                <Slide products={products} title="Top Deals on Accessories View" timer={false}/>

            </Component>
        </>
    )
}

export default Home;