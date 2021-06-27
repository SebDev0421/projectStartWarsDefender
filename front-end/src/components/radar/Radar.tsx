import React from "react";

import { useWindowSize } from "@react-hook/window-size";

type IConfig = {
  frames: Number | any,
  speed: Number | any,
  size: Number | any,
  inset: Number | any,
  parent: HTMLElement | any
}

type ISvg = {
  tag: string | any,
  props: object | any,
  children: any
}

const useRadar = () => {
  const [width, height] = useWindowSize();

  React.useEffect(() => {
    return Radar({
      frames: 60, // number of frames to draw, more = worse performance
      speed: 0.0017, // how fast the sweep moves (rads per ms)
      size: Math.min(width, height) / 6, // outer frame px
      inset: 3, // circle inset px
      parent: document.getElementById('div-radar'), // DOM node to attach to
    });
  }, [width, height]);
}
export default useRadar;


const Radar = (config: IConfig) => {
  const {
    frames = 50, // number of frames to draw, more = worse performance
    speed = 0.0017, // how fast the sweep moves (rads per ms)
    size = 300, // outer frame px
    inset = 3, // circle inset px
    parent = document.body, // DOM node to attach to
  } = config;

  const svgns = "http://www.w3.org/2000/svg";

  const styles = document.createTextNode(`
    .Radar {
      pointer-events: none;
       z-index: 1;
    }
    .Radar-sweep > * {
      shape-rendering: crispEdges;
      z-index: 1;
    }
    .Radar-face {
      fill: transparent;
      z-index: 1;
    }
    .Radar-hand {
      stroke-width: 4px;
      stroke-linecap: round;
      z-index: 1;
    }
  `);

  function $svg({tag, props = {}, children = []}:ISvg) {
    const el = document.createElementNS(svgns, tag);
    Object.keys(props).forEach((prop) => el.setAttribute(prop, props[prop]));
    children.forEach((child:any) => el.appendChild(child));
    return el;
  }

  const PI2 = Math.PI * 2;
  const middle = (size / 2);
  const radius = (middle - inset);

  const firsForm: ISvg = {
    tag: "path",
    props: { class: "Radar-hand" },
    children: []
  }

  const $hand = $svg(firsForm);
  const $arcs = new Array(frames).fill("path").map((t) => $svg(t));
  const thirdForm: ISvg = {
    tag: "style",
    props: { type: "text/css" },
    children: [styles]
  }
  const fourthForm: ISvg = {
    tag: "g",
    props:  { class: "Radar-sweep" },
    children: $arcs
  }
  const fiveForm: ISvg = {
    tag: "circle",
    props: {
      class: "Radar-face",
      cx: middle,
      cy: middle,
      r: radius,
    },
    children: []
  }
  const secondForm: ISvg = {
    tag: "svg",
    props: { class: "Radar", height: size, width: size },
    children: [
      $svg(thirdForm),
      $svg(fourthForm),
      $hand,
      $svg(fiveForm),
    ]
  }
  const $root = $svg(secondForm);

  parent.appendChild($root);

  let frame:any;
  let framePtr = 0;
  let last = {
    rotation: 0,
    now: Date.now(),
    tx: middle + radius,
    ty: middle,
  };

  const calcHue = (() => {
    const max_hue = 120;
    const max_ms = 1000;
    const log_f = 10;
    const mult = max_hue / Math.log(max_ms / log_f);
    return function (ms_delta: any) {
      return (
        max_hue -
        Math.max(0, Math.min(mult * Math.log(ms_delta / log_f), max_hue))
      );
    };
  })();

  function animate() {
    const now = Date.now();
    const rdelta = Math.min(PI2 - speed, speed * (now - last.now));
    const rotation = (last.rotation + rdelta) % PI2;
    const tx = middle + radius * Math.cos(rotation);
    const ty = middle + radius * Math.sin(rotation);
    const bigArc = rdelta < Math.PI ? "0" : "1";
    const path = `M${tx} ${ty}A${radius} ${radius} 0 ${bigArc} 0 ${last.tx} ${last.ty}L${middle} ${middle}`;
    const hue = calcHue(rdelta / speed);

    $arcs[framePtr % frames].setAttribute("d", path);
    $arcs[framePtr % frames].setAttribute("fill", `hsl(${hue}, 80%, 40%)`);
    $hand.setAttribute("d", `M${middle} ${middle}L${tx} ${ty}`);
    $hand.setAttribute("stroke", `hsl(${hue}, 80%, 60%)`);

    for (let i = 0; i < frames; i++) {
      $arcs[(frames + framePtr - i) % frames].style.fillOpacity =
        1 - i / frames;
    }

    framePtr++;
    last = {
      now,
      rotation,
      tx,
      ty,
    };

    frame = window.requestAnimationFrame(animate);
  }

  animate();

  return function destroy() {
    if (frame) {
      window.cancelAnimationFrame(frame);
    }
    $root.remove();
  };
}
