import Modal from 'antd/lib/modal/Modal';
import React from 'react';
import style from './modal.module.scss';
import cn from 'classnames';
import { Space } from 'antd';

interface ModalConvertProps {
    visible : boolean;
    onCancel : () => void ;
    base : string;
    onInput : () => void;
    onChange : () => void;
    onBlur : () => void;
    placeholder : string;
    placeholder2 : string;
  }

  export default function ModalConvert({
    visible,
    onCancel,
    base,
    onInput,
    onChange,
    onBlur,
    placeholder,
    placeholder2,
  }: ModalConvertProps) {

    return (
        <Modal 
        visible={visible}
        onCancel = {onCancel}
    >
        <h3 className={cn(style.modalText)}>Convertisseur de Base 10 en Base {base}</h3>
        <h4 className={cn(style.modalText)}> Entrez le nombre que vous desirez convertir </h4>
        <Space className={cn(style.space)}size={'large'} direction ={'horizontal'}>
            <Space direction={'vertical'}>
                <label> Base 10</label>
                <input 
                    type="text"
                    pattern="[0-9]*"
                    className={cn(style.input)} 
                    onInput={onInput}
                    onBlur={onBlur}
                    placeholder={placeholder}
                />
            </Space>
            <p style={{paddingTop :'2.5rem'}}>=</p>
            <Space direction={'vertical'}>
                <label>base {base}</label>
                <input                             
                    type="text" 
                    pattern="[0-9]*" 
                    className={cn(style.input)}
                    onChange={onChange} 
                    onBlur={onBlur}
                    placeholder={placeholder2}  
                />
            </Space>
        </Space>
    </Modal>
      );
    }


            