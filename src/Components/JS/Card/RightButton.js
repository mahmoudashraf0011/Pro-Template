import React from 'react'
import prev from '../../../images/other/prev.png';

export default function RightButton(onClick,onDisable) {
  return (
    <img
    src={prev}
    alt=""
    width="35px"
    onClick={onClick}
    onDisable={onDisable}
    height="35px"
    style={{ float: "right", marginTop: "130px", cursor: "pointer" }}
/>
  )
}
