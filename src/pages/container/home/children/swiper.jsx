import React, { Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import banner from '../../../../image/banner.png';
import education from '../../../../image/education.jpg';
import basketball from '../../../../image/basketball.jpg';
class Swiper extends Component{
    state = {
        data: [banner,education,basketball],
        imgHeight: 150,
    }

    render(){
        return (
            <WingBlank>
                <Carousel className="space-carousel"
                    frameOverflow="visible"
                    cellSpacing={10}
                    slideWidth={0.8}
                    autoplay
                    infinite
                    beforeChange={(from, to) => {}}
                    afterChange={index => this.setState({ slideIndex: index })}
                >
                    {this.state.data.map((val, index) => (
                    <a
                        key={val}
                        href=""
                        style={{
                            display: 'block',
                            position: 'relative',
                            top: this.state.slideIndex === index ? -10 : 0,
                            height: this.state.imgHeight,
                            boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        <img
                            src={val}
                            alt=""
                            style={{ width: '100%',height: this.state.imgHeight, verticalAlign: 'top' }}
                            onLoad={() => {
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: this.state.imgHeight});
                            }}
                        />
                    </a>
                    ))}
                </Carousel>
            </WingBlank>
        );
    }
}

export default Swiper;