import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const animateLoading = keyframes`
 0% {
    width: 0;
    height: 0;
    opacity: 1;
  }

  100% {
   top: calc(0px - var(--thickness));
   left: calc(0px - var(--thickness));
    width: 100%;
    height: 100%;
    opacity: 0;
  }
`;

const LoadingWrapper = styled.div`
  --size: 80px;
  --thickness: 8px;
  --timing: 1.5s;
  position: relative;
  background: #ffffff;
  display: grid;
  justify-items: center;
  align-items: center;
  height: 150px;

  .loading__wave {
    position: absolute;
    width: var(--size);
    height: var(--size);
    overflow: visible;

    &:before,
    &:after {
      position: absolute;
      content: '';
      border: var(--thickness) solid #0c3b86;
      opacity: 1;
      border-radius: 50%;
      left: calc(50% - var(--thickness));
      top: calc(50% - var(--thickness));
      animation: ${animateLoading} var(--timing) cubic-bezier(0, 0.2, 0.8, 1)
        infinite;
    }

    &:after {
      animation-delay: calc(var(--timing) / 3);
    }
  }
`;

class Loading extends Component {
  render() {
    return (
      <LoadingWrapper>
        <div className="loading__wave" />
      </LoadingWrapper>
    );
  }
}

export default Loading;
