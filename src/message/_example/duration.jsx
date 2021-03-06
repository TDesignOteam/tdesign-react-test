import React from "react";
import { Button, MessagePlugin } from 'tdesign-react';

let message = null;

export default function () {
  const list = [];

  return (
    <div className="tdesign-demo-block-row">
      <Button
        onClick={() => {
          message = MessagePlugin.info('I am duration 20s Message', 20 * 1000);
          list.unshift(message);
        }}
      >
        I am duration 20s Message
      </Button>
      <Button
        onClick={() => {
          if (list.length !== 0) {
            MessagePlugin.close(list.shift());
          }
        }}
      >
        close latest duration 20s Message
      </Button>

      <Button
        onClick={() => {
          MessagePlugin.closeAll();
        }}
      >
        close all Message
      </Button>
    </div>
  );
}
