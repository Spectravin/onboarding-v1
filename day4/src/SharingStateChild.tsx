import React from 'react'
interface parentProps{
     title: string;
  children: React.ReactNode;
  isActive: boolean;
  onShow: () => void;
}


const SharingStateChild = ({title,children,isActive,onShow}:parentProps) => {
  return (
    <div>
        <h4>{title}</h4>
        {isActive?<p>{children}</p>:<button type="button"onClick={onShow}>Show</button>}

    </div>
  )
}

export default SharingStateChild