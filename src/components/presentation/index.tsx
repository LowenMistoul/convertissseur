import "antd/dist/antd.css";
import React from 'react';
import Typography from'antd'
import cn from 'classnames'
import style from './presentation.module.scss'

interface PresentationProps{
    title : String;
    subtitle? : String;
}


export default function Presentation({
    title,
    subtitle
}:PresentationProps){
    return(

        <div className={cn(style.container)}>
            <div className={cn(style.bg)} />
            <h1 className={cn(style.titre)}>{title}</h1>
            <h2 className={cn(style.sousTitre)}>{subtitle}</h2>
        </div>
    )
}