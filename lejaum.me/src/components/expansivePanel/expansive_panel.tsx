import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { panelData } from './panel_data';


export default function ExpandablePanel({ id = '', ult_click = [''], title = '', content = '' }) {
    const [expanded, setExpanded] = useState(false)
    return <>

        <div className="rounded-md bg-quase-black hover:bg-quase-cinza w-[300px]">
            <button
                className="flex text-branquin items-center justify-between w-full py-3 px-6 text-left text-white text-body1 hover:text-gray-100 focus:outline-none"
                onClick={() => {
                    ult_click.push(id)
                    console.log(ult_click[ult_click.length - 1])
            setExpanded(!expanded)
                }}
            >
            {title}
            <FontAwesomeIcon icon={!expanded ? faArrowDown : faArrowUp} className="fas fa-arrow-down" style={{ color: "white" }} />
        </button>
        {(expanded && (ult_click[ult_click.length - 1]) != ult_click[ult_click.length - 3] ) && (
            <div className="p-3 bg-quase-black text-white text-sub1 rounded-b-md">
                {content}
            </div>
        )}
        
    </div>
    </>


}
