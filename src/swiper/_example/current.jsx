import React, { useState } from 'react';
import { Swiper, Button } from 'tdesign-react';

const { SwiperItem } = Swiper;

export default function BasicSwiper() {
  const [current, setCurrent] = useState(0);
  return (
    <div className="tdesign-demo-block--swiper-new">
      <Swiper current={current} navigation={{ showSlideBtn: 'never' }}>
        <SwiperItem>
          <div className="demo-item">1</div>
        </SwiperItem>
        <SwiperItem>
          <div className="demo-item">2</div>
        </SwiperItem>
        <SwiperItem>
          <div className="demo-item">3</div>
        </SwiperItem>
        <SwiperItem>
          <div className="demo-item">4</div>
        </SwiperItem>
        <SwiperItem>
          <div className="demo-item">5</div>
        </SwiperItem>
        <SwiperItem>
          <div className="demo-item">6</div>
        </SwiperItem>
      </Swiper>
      <div className="tdesign-demo-block-row">
        <Button
          size={'small'}
          onClick={() => {
            setCurrent(current + 2 > 6 ? 0 : current + 1);
          }}
        >
          跳转到第 {current + 2 >= 7 ? 1 : current + 2} 项
        </Button>
      </div>
    </div>
  );
}
