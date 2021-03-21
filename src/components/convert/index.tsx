import React, { useState } from 'react'
import "antd/dist/antd.css";
import style from './convert.module.scss'
import cn from 'classnames'
import { Button, Col, Form, Input, InputNumber, Row } from 'antd'
import Modal from 'antd/lib/modal/Modal';

export default function Convertisseur(){
    const [convertit , setConvertit] = useState('0');
    const [binaire , setBinaire] = useState('');
    const [decimal , setDecimal] = useState(0);
    const [isModalVisible2, setIsModalVisible2] = useState(false);
    const [isModalVisible8, setIsModalVisible8] = useState(false);
    const [isModalVisible16, setIsModalVisible16] = useState(false);

    function inversion(value:string){
         var inverse : string= '';
        for (let i = value.length-1; i >= 0; i--) {
            inverse =inverse + value[i];
       }
       return inverse;
    }

    function base16(value:number){
        var fin: string ='';
        if(value == 10){
            fin = 'A';
        } else if(value == 11){
            fin = 'B';
        }else if(value == 12){
            fin = 'C';
        }else if(value == 13){
            fin = 'D';
        }else if(value == 14){
            fin = 'E';
        }else if(value == 15){
            fin = 'F';
        }else if(value < 10){
            fin = fin +value;
        }
        return fin;
    }

    function onChange(value) {
        var fin : string='' ;
        var base : number;
        var finReverse : string='' ;
        if(isModalVisible2 == true){
            base = 2;
        }else if (isModalVisible8 == true) {
            base = 8;
        }else {
            base = 16;
        }
        if (value < 0 ){
            value = value * -1;
            finReverse ='-';
        }
        while(value > 0 ){
            var resultat =  ~~(value /base );
            var reste = value % base; 
            value = resultat;
            fin =fin + base16(reste);
        }
        finReverse = inversion(fin)
        setConvertit(finReverse);
      }

      function conversionDecimal(value : string){
            var reverse : string= '';
            var resultat : number = 0;
            reverse = inversion(value);
          for (let i = 0  ; i <=  value.length; i++) {
              if(reverse[i] == '1'){
                resultat = resultat + Math.pow(2,i);
              }else{
                resultat = resultat + 0;  
              }
          }
          setDecimal(resultat);
      }


      function conversionDecimal8(value : string){
        var reverse : string= '';
        var resultat : number = 0;
        reverse = inversion(value);
      for (let i = 0  ; i <=  value.length-1; i++) {
          var x = +reverse[i];
          var power = Math.pow(8,i);
        resultat = resultat + ( x * power);
      }
      setDecimal(resultat);
  }

  function conversionDecimal16(value : string){
    var reverse : string= '';
    var resultat : number = 0;
    var x : number;
    reverse = inversion(value);
  for (let i = 0  ; i <=  value.length-1; i++) {
    if(reverse[i] == 'A'){
        x = 10 ;
    }else if(reverse[i] == 'B'){
        x = 11 ;
    }else if(reverse[i] == 'C'){
        x = 12 ;
    }else if(reverse[i] == 'D'){
        x = 13 ;
    }else if(reverse[i] == 'E'){
        x = 14 ; 
    }else if(reverse[i] == 'F'){
        x = 16 
    }else {
        x = +reverse[i];
    }
      var power = Math.pow(16,i);
    resultat = resultat + ( x * power);
  }
  setDecimal(resultat);
}
    

      function handleChange(evt){
        const nombreBinaire:string = (evt.target.validity.valid) ? evt.target.value : binaire;
        setBinaire( nombreBinaire );
        conversionDecimal(nombreBinaire);
      }

      function handleChange8(evt){
        const nombreBinaire:string = (evt.target.validity.valid) ? evt.target.value : binaire;
        setBinaire( nombreBinaire );
        conversionDecimal8(nombreBinaire);
      }

      function handleChange16(evt){
        const nombreBinaire:string = (evt.target.validity.valid) ? evt.target.value : binaire;
        setBinaire( nombreBinaire );
        conversionDecimal16(nombreBinaire);
      }

    return (
        <div className={cn(style.container)}>
            <Row >
                <Col className={cn(style.div)}>
                    <div
                        className={cn(style.base)}
                        onClick = {()=>setIsModalVisible2(true)}
                    >
                         <p>BASE 2</p>
                    </div>
                    <Modal 
                        visible={isModalVisible2}
                        onCancel = {()=>setIsModalVisible2(false)}
                    >
                        <h3 className={cn(style.modalText)}>Convertisseur de Base 10 en Base 2</h3>
                        <h4 className={cn(style.modalText)}> Entrez le nombre que vous desirez convertir (base 10)</h4>
                        <InputNumber  placeholder='0' onChange={onChange} />
                        <h3 className={cn(style.modalText)}>Résultat : {convertit} </h3>
                        <br/>
                        <br/>
                        <h3 className={cn(style.modalText)}>Convertisseur de Base 2 en base 10</h3>
                        <h4 className={cn(style.modalText)}> Entrez le nombre que vous desirez convertir (base 2)</h4>
                        <h4>
                        <input 
                            className={cn(style.input)} 
                            type="text" 
                            pattern="[0-1]*" 
                            onInput={handleChange.bind(this)} 
                            value={binaire} 
                            placeholder={'0'}
                            />
                        </h4>

                        <h3 className={cn(style.modalText)}>Resultat: {decimal}</h3>
                    </Modal>
                </Col>
                <Col className={cn(style.div)}>
                    <div
                        className={cn(style.base)}
                        onClick = {()=>setIsModalVisible8(true)}
                    >
                         <p>BASE 8</p>
                    </div>
                    <Modal 
                        visible={isModalVisible8}
                        onCancel = {()=>setIsModalVisible8(false)}
                    >
                        <h3 className={cn(style.modalText)}>Convertisseur de Base 10 en Base 8</h3>
                        <h4 className={cn(style.modalText)}> Entrez le nombre que vous desirez convertir (base 10)</h4>
                        <InputNumber  placeholder='0' onChange={onChange} />
                        <h3 className={cn(style.modalText)}>Résultat : {convertit} </h3>
                        <br/>
                        <br/>
                        <h3 className={cn(style.modalText)}>Convertisseur de Base 8 en base 10</h3>
                        <h4 className={cn(style.modalText)}> Entrez le nombre que vous desirez convertir (base 8)</h4>
                        <h4>
                        <input 
                            className={cn(style.input)} 
                            type="text" 
                            pattern="[0-9]*" 
                            onInput={handleChange8.bind(this)} 
                            value={binaire} 
                            placeholder={'0'}
                            />
                        </h4>

                        <h3 className={cn(style.modalText)}>Resultat: {decimal}</h3>
                    </Modal>
                </Col>
                <Col className={cn(style.div)}>
                    <div
                        className={cn(style.base)}
                        onClick = {()=>setIsModalVisible16(true)}
                    >
                         <p>BASE 16</p>
                    </div>
                    <Modal 
                        visible={isModalVisible16}
                        onCancel = {()=>setIsModalVisible16(false)}
                    >
                        <h3 className={cn(style.modalText)}>Convertisseur de Base 10 en Base 16</h3>
                        <h4 className={cn(style.modalText)}> Entrez le nombre que vous desirez convertir (base 10)</h4>
                        <InputNumber  placeholder='0' onChange={onChange} />
                        <h3 className={cn(style.modalText)}>Résultat : {convertit} </h3>
                        <br/>
                        <br/>
                        <h3 className={cn(style.modalText)}>Convertisseur de Base 16 en base 10</h3>
                        <h4 className={cn(style.modalText)}> Entrez le nombre que vous desirez convertir (base 16)</h4>
                        <h4>
                        <input 
                            className={cn(style.input)} 
                            type="text" 
                            pattern="[0-9]*+[A-F]*" 
                            onInput={handleChange16.bind(this)} 
                            value={binaire} 
                            placeholder={'0'}
                            />
                        </h4>

                        <h3 className={cn(style.modalText)}>Resultat: {decimal}</h3>
                    </Modal>
                </Col>
            </Row>
        </div>
    )
}