import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel'

const onChange = 1;
const onClickItem = 1;
const onClickThumb = 1;


var DemoCarousel = React.createClass({
    render() {
        return (
            <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
                <div>
                    <img src="https://assets.coingecko.com/coins/images/18111/large/Doge.png?1630696110" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://assets.coingecko.com/coins/images/18111/large/Doge.png?1630696110" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://assets.coingecko.com/coins/images/18111/large/Doge.png?1630696110" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="https://assets.coingecko.com/coins/images/18111/large/Doge.png?1630696110" />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src="https://assets.coingecko.com/coins/images/18111/large/Doge.png?1630696110" />
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img src="https://assets.coingecko.com/coins/images/18111/large/Doge.png?1630696110" />
                    <p className="legend">Legend 6</p>
                </div>
            </Carousel>
        );
    }
});

export default DemoCarousel;