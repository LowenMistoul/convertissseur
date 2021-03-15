import "antd/dist/antd.css";
import React from 'react';
import Typography from'antd'
import cn from 'classnames'
import style from './presentation.module.scss'



export default function Presentation(){
    return(
        <div className={cn(style.container)}>
            <h1 className={cn(style.titre)}> CONVERTISSEUR DE BASES ARITHMETIQUES </h1>
            <h2 className={cn(style.sousTitre)}>Vous pouvez Selectionner la conversion :</h2>
        </div>
    )
}