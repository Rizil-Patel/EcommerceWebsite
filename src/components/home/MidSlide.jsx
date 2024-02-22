import Slide from './Slide';
import {Box,styled} from '@mui/material'

const Component = styled(Box)`
    display:flex;
`

const LeftComponent = styled(Box)(({ theme}) => ({
    width: '83%',
    [theme.breakpoints.down('md')]: {
        width: '100%'
    }
}))

const RightComponent = styled(Box)(({ theme}) => ({
    marginTop: 10,
    background: '#FFFFFF',
    width: '17%',
    marginLeft: 10,
    padding: 5,
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

const MidSlide = ({products,title,timer}) => {
    const adURL = 'https://rukminim2.flixcart.com/fk-p-flap/530/810/image/1f03e99f6dc9f7a6.jpg?q=20';
    return (
        <Component>
            <LeftComponent>
                <Slide 
                    products = {products}
                    title = {title}
                    timer = {timer}
                />
            </LeftComponent>
            <RightComponent>
                <img src={adURL} alt="ad" style={{width: 217}}/>
            </RightComponent>

        </Component>
    )
}

export default MidSlide;