import React from 'react'
import next from '../../../images/other/next.png';

export default function LeftButton(onClick,onDisable) {
    return (
        <img
            src={next}
            alt=""
            width="35px"
            onClick={onClick}
            onDisable={onDisable}
            height="35px"
            style={{ float: "left", marginTop: "130px", cursor: "pointer" }}
        />
    )
}
