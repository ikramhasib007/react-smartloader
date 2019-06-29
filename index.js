import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function SmartLoader ({
  size,
  position,
  secondary,
  spacingTop,
  spacingBottom
}) {

  var color_0 = '#2ac6cc';
  var color_40 = '#0057e7';
  var color_66 = '#008744';
  var color_90 = '#ffa700';

  if(secondary) {
    color_0 = '#0057e7';
    color_40 = '#8e44ad';
    color_66 = '#ea425f';
    color_90 = '#008744';
  }

  var stroke = 3;
  if(size >= 40) {
    stroke = 4;
  }

  var paddingTop = '';
  var paddingBottom = '';

  if(spacingTop) {
    paddingTop = spacingTop === true ? '20px' : `${spacingTop}px`;
  }
  if(spacingBottom) {
    paddingBottom = spacingBottom === true ? '20px' : `${spacingBottom}px`;
  }


  return <Fragment>
    <div className="smartloader">
      <svg className="circular" viewBox="25 25 50 50">
        <circle 
          className="path"
          cx="50"
          cy="50"
          r="20"
          fill="none"
          strokeWidth={stroke}
          strokeMiterlimit="10"
        />
      </svg>
    </div>
    <style jsx>{`
      .smartloader {
        position: relative;
        margin: 0 auto;
        width: ${size}px;
        padding-top: ${paddingTop};
        padding-bottom: ${paddingBottom};
      }
      .smartloader:before {
        content: "";
        display: block;
        padding-top: 100%;
      }
      .circular {
        -webkit-animation: rotate 2s linear infinite;
                animation: rotate 2s linear infinite;
        height: 100%;
        -webkit-transform-origin: center center;
                transform-origin: center center;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
      }
      
      .path {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
        -webkit-animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
                animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
        stroke-linecap: round;
      }
      
      @-webkit-keyframes rotate {
        100% {
          -webkit-transform: rotate(360deg);
                  transform: rotate(360deg);
        }
      }
      
      @keyframes rotate {
        100% {
          -webkit-transform: rotate(360deg);
                  transform: rotate(360deg);
        }
      }
      @-webkit-keyframes dash {
        0% {
          stroke-dasharray: 1, 200;
          stroke-dashoffset: 0;
        }
        50% {
          stroke-dasharray: 89, 200;
          stroke-dashoffset: -35px;
        }
        100% {
          stroke-dasharray: 89, 200;
          stroke-dashoffset: -124px;
        }
      }
      @keyframes dash {
        0% {
          stroke-dasharray: 1, 200;
          stroke-dashoffset: 0;
        }
        50% {
          stroke-dasharray: 89, 200;
          stroke-dashoffset: -35px;
        }
        100% {
          stroke-dasharray: 89, 200;
          stroke-dashoffset: -124px;
        }
      }
      @-webkit-keyframes color {
        100%,
        0% {
          stroke: ${color_0};
        }
        40% {
          stroke: ${color_40};
        }
        66% {
          stroke: ${color_66};
        }
        80%,
        90% {
          stroke: ${color_90};
        }
      }
      @keyframes color {
        100%,
        0% {
          stroke: ${color_0};
        }
        40% {
          stroke: ${color_40};
        }
        66% {
          stroke: ${color_66};
        }
        80%,
        90% {
          stroke: ${color_90};
        }
      }
    `}</style>
  </Fragment>
}


SmartLoader.defaultProps = {
  size: 20,
  position: 'center',
  secondary: false
}

SmartLoader.propTypes = {
  size: PropTypes.number.isRequired,
  position: PropTypes.string.isRequired,
  secondary: PropTypes.bool.isRequired,
  spacingTop: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number
  ]),
  spacingBottom: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number
  ])
}

export default SmartLoader;