const hexToRgba = (bgColor) => {
  let color = bgColor.slice(1);   // 去掉'#'号
  let rgba = [
      parseInt('0x'+color.slice(0, 2)),
      parseInt('0x'+color.slice(2, 4)),
      parseInt('0x'+color.slice(4, 6)),
      0.85
  ];
  return 'rgba(' + rgba.toString() + ')';
};


console.log(hexToRgba("#D3D3D3"));
