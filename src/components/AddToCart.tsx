import React, { useContext } from "react";
import { appSetStateContext } from "../AppState";
import { RobotProps } from "./Robot";

export const withAddToCart = (
  ChildComponent: React.ComponentType<RobotProps>
) => {
  return (props) => {
    const setState = useContext(appSetStateContext);
    // 因为在做初始化的时候，setState 使用的是undefined 所以在使用
    // setState hook 函数的时候，应该做一个判断
    const addToCart = (id, name) => {
      if (setState) {
        setState((state) => {
          return {
            ...state,
            shoppingCart: {
              items: [...state.shoppingCart.items, { id, name }],
            },
          };
        });
      }
    };

    return <ChildComponent {...props} addToCart={addToCart} />;
  };
};
/**
 * useAddToCart 是用来处理购物车数据的，所以应该接入购物车的state
 * 在useAddToCart 中调用其他hook函数
 */
export const useAddToCart = () => {
  const setState = useContext(appSetStateContext);
  // 因为在做初始化的时候，setState 使用的是undefined 所以在使用
  // setState hook 函数的时候，应该做一个判断
  const addToCart = (id, name) => {
    if (setState) {
      setState((state) => {
        return {
          ...state,
          shoppingCart: {
            items: [...state.shoppingCart.items, { id, name }],
          },
        };
      });
    }
  };
  return addToCart;
};
