"use strict";function populatePreviousSlides(state,props,slidesHavePassed){void 0===slidesHavePassed&&(slidesHavePassed=0);var nextSlides,nextPosition,currentSlide=state.currentSlide,itemWidth=state.itemWidth,slidesToSlide=props.slidesToSlide,nextMaximumSlides=currentSlide-slidesHavePassed-(0<slidesHavePassed?0:slidesToSlide);return nextPosition=0<=nextMaximumSlides?-itemWidth*(nextSlides=nextMaximumSlides):nextSlides=nextMaximumSlides<0&&0!==currentSlide?0:void 0,{nextSlides:nextSlides,nextPosition:nextPosition}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.populatePreviousSlides=populatePreviousSlides;