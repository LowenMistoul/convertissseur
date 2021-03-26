import React, { useState } from 'react'
import "antd/dist/antd.css";
import style from './menu.module.scss'
import cn from 'classnames'
import { Menu, Dropdown, Button } from 'antd';
import {MenuOutlined, CloseOutlined, HomeOutlined} from '@ant-design/icons'



const menu = (
    <Menu>
      <Menu.Item>
        <a rel="noopener noreferrer" href="/convertisseur">
          Convertisseur base
        </a>
      </Menu.Item>
      <Menu.Item>
        <a rel="noopener noreferrer" href="/stopwatch">
          Chronometre
        </a>
      </Menu.Item>
      <Menu.Item>
        <a rel="noopener noreferrer" href="/timer">
          Minuteur
        </a>
      </Menu.Item>
      <Menu.Item disabled>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Calculatrice
        </a>
      </Menu.Item>
    </Menu>
  );

export default function MenuFlottant(){
    const[classActive , setClassActive] = useState(false);

    function toggle(){
        if(classActive == false){
            setClassActive(true);
        }else{
            setClassActive(false);
        }
    }
    
    return(
        <>
            <a href='/'>
              <Button className={cn(style.accueil)}type="primary" shape="round" icon={<HomeOutlined/>} >
                  Accueil
              </Button>
            </a>
            <Dropdown visible={classActive} overlay={menu} trigger={["click"]}>
                <a className={`${classActive ? style.toggle +' '+style.active : style.toggle}`} onClick={toggle} >
                    <i></i>
                    <i></i>
                    <i></i>
                </a>
            </Dropdown>
        </>
    )
}