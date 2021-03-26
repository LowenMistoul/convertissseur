import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import "antd/dist/antd.css";
import style from './timer.module.scss'
import cn from 'classnames'
import { Button, DatePicker, Select, Space } from 'antd';
import Form from 'antd/lib/form/Form';

const { Option } = Select;


export default function Timer(){
   
    const [restant , setRestant] = useState('');
    const [classActive , setClassActive] = useState(true);
    const [secondes , setSecondes] = useState('0');
    const [minutes , setminutes] = useState('0');
    const [heures , setheures] = useState('0');
    const [temps , setTemps] = useState(0);
    function useInterval(callback: () => void, delay: number | null) {
        const savedCallback = useRef<() => void | null>();
       
         // Remember the latest callback.
         useEffect(() => {
           savedCallback.current = callback
         })
       
         // Set up the interval.
         useEffect(() => {
           function tick() {
             if (typeof savedCallback?.current !== 'undefined') {
               savedCallback?.current()
             }
           }
       
           if (delay !== null) {
             const id = setInterval(tick, delay)
             return () => clearInterval(id)
           }
         }, [delay])
       }
    // const [time , setTime] = useState(['00','00','00']);

    // Dynamic delay
    const [delay, setDelay] = useState<number>(1000)
    // ON/OFF
    const [isPlaying, setPlaying] = useState<boolean>(false)
 
    useInterval(
           () => {
            if(temps != 0){
                setTemps(temps-1)
                secondsToHms(temps)
            }else{
                setPlaying(false)
                secondsToHms(0)
            }
             // Your custom logic here
           },
           // Delay in milliseconds or null to stop it
           isPlaying ? delay : null,
        )

    function descend(){
        if(secondes == '0' && minutes =='0' && heures =='0' ){
            alert('Veuillez choisir le temps de depart')
        }else{
            setPlaying(true);
            toggle();
            var s = Number.parseInt(secondes);
            var m = Number.parseInt(minutes)*60;
            var h = Number.parseInt(heures)*3600;
            var temps = s + m + h;
            setTemps(temps);
        }
    }
    function toggle(){
        if(classActive == false){
            setClassActive(true);
        }else{
            setClassActive(false);
        }
    }

    function annuler(){
        toggle();
        setPlaying(false);
        setSecondes('0');
        setminutes('0');
        setheures('0');
        setTemps(0);
    }

    function secondsToHms(d) {
        d = Number(d);
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);
    
        var hDisplay = h > 0 ? h + (h == 1 ? " hour : " : " hours : ") : "";
        var mDisplay = m > 0 ? m + (m == 1 ? " minute : " : " minutes : ") : "";
        var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
        setRestant(hDisplay + mDisplay + sDisplay);
    }
     
    
      
     

        
    return(
        <>
        <audio autoPlay={true} id="myAudio">
        <source src="../../../public/son/man.mp3" type="audio/ogg" />
            Your browser does not support the audio element.
        </audio>
            <p className={`${classActive ? style.isHidden : style.timer}`} 
                style={{fontSize : '40px'}}>
                    {restant}
            </p>
            <Form className={`${classActive ? style.form : style.isHidden}`} >
                <Space direction={'horizontal'}>
                    <Select 
                        disabled={!classActive}
                        className={style.select} 
                        bordered={false} 
                        showArrow={false} 
                        placeholder={'Heures'} 
                        defaultValue='0' 
                        dropdownClassName={style.dropdown}
                        onSelect={(value) => {
                            setheures(value)
                          }}
                    > 
                            <Option value="0">0</Option>
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                            <Option value="4">4</Option>
                            <Option value="5">5</Option>
                            <Option value="6">6</Option>
                            <Option value="7">7</Option>
                            <Option value="8">8</Option>
                            <Option value="9">9</Option>
                            <Option value="10">10</Option>
                            <Option value="11">11</Option>
                            <Option value="12">12</Option>
                            <Option value="13">13</Option>
                            <Option value="14">14</Option>
                            <Option value="15">15</Option>
                            <Option value="16">16</Option>
                            <Option value="17">17</Option>
                            <Option value="18">18</Option>
                            <Option value="19">19</Option>
                            <Option value="20">20</Option>
                            <Option value="21">21</Option>
                            <Option value="22">22</Option>
                            <Option value="23">23</Option>
                    </Select>
                    <p className={style.p}>Heures</p>

                    <Select 
                        disabled={!classActive}
                        className={style.select} 
                        bordered={false} 
                        showArrow={false} 
                        placeholder={'Minutes'} 
                        defaultValue='0' 
                        dropdownClassName={style.dropdown}
                        onChange={(value) => {
                            setminutes(value)
                          }}
                    > 
                            <Option value="0">0</Option>
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                            <Option value="4">4</Option>
                            <Option value="5">5</Option>
                            <Option value="6">6</Option>
                            <Option value="7">7</Option>
                            <Option value="8">8</Option>
                            <Option value="9">9</Option>
                            <Option value="10">10</Option>
                            <Option value="11">11</Option>
                            <Option value="12">12</Option>
                            <Option value="13">13</Option>
                            <Option value="14">14</Option>
                            <Option value="15">15</Option>
                            <Option value="16">16</Option>
                            <Option value="17">17</Option>
                            <Option value="18">18</Option>
                            <Option value="19">19</Option>
                            <Option value="20">20</Option>
                            <Option value="21">21</Option>
                            <Option value="22">22</Option>
                            <Option value="23">23</Option>
                            <Option value="24">24</Option>
                            <Option value="25">25</Option>
                            <Option value="26">26</Option>
                            <Option value="27">27</Option>
                            <Option value="28">28</Option>
                            <Option value="29">29</Option>
                            <Option value="30">30</Option>
                            <Option value="31">31</Option>
                            <Option value="32">32</Option>
                            <Option value="33">33</Option>
                            <Option value="34">34</Option>
                            <Option value="35">35</Option>
                            <Option value="36">36</Option>
                            <Option value="37">37</Option>
                            <Option value="38">38</Option>
                            <Option value="39">39</Option>
                            <Option value="40">40</Option>
                            <Option value="41">41</Option>
                            <Option value="42">42</Option>
                            <Option value="43">43</Option>
                            <Option value="44">44</Option>
                            <Option value="45">45</Option>
                            <Option value="46">46</Option>
                            <Option value="47">47</Option>
                            <Option value="48">48</Option>
                            <Option value="49">49</Option>
                            <Option value="50">50</Option>
                            <Option value="51">51</Option>
                            <Option value="52">52</Option>
                            <Option value="53">53</Option>
                            <Option value="54">54</Option>
                            <Option value="55">55</Option>
                            <Option value="56">56</Option>
                            <Option value="57">57</Option>
                            <Option value="58">58</Option>
                            <Option value="59">59</Option>
                        </Select>
                        <p className={style.p}>Minutes</p>

                        <Select 
                                disabled={!classActive}
                                className={style.select} 
                                bordered={false} 
                                showArrow={false} 
                                placeholder={'secondes'} 
                                defaultValue='0' 
                                dropdownClassName={style.dropdown}
                                onChange={(value) => {
                                    setSecondes(value)
                                  }}
                        > 
                            <Option value="0">0</Option>
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                            <Option value="4">4</Option>
                            <Option value="5">5</Option>
                            <Option value="6">6</Option>
                            <Option value="7">7</Option>
                            <Option value="8">8</Option>
                            <Option value="9">9</Option>
                            <Option value="10">10</Option>
                            <Option value="11">11</Option>
                            <Option value="12">12</Option>
                            <Option value="13">13</Option>
                            <Option value="14">14</Option>
                            <Option value="15">15</Option>
                            <Option value="16">16</Option>
                            <Option value="17">17</Option>
                            <Option value="18">18</Option>
                            <Option value="19">19</Option>
                            <Option value="20">20</Option>
                            <Option value="21">21</Option>
                            <Option value="22">22</Option>
                            <Option value="23">23</Option>
                            <Option value="24">24</Option>
                            <Option value="25">25</Option>
                            <Option value="26">26</Option>
                            <Option value="27">27</Option>
                            <Option value="28">28</Option>
                            <Option value="29">29</Option>
                            <Option value="30">30</Option>
                            <Option value="31">31</Option>
                            <Option value="32">32</Option>
                            <Option value="33">33</Option>
                            <Option value="34">34</Option>
                            <Option value="35">35</Option>
                            <Option value="36">36</Option>
                            <Option value="37">37</Option>
                            <Option value="38">38</Option>
                            <Option value="39">39</Option>
                            <Option value="40">40</Option>
                            <Option value="41">41</Option>
                            <Option value="42">42</Option>
                            <Option value="43">43</Option>
                            <Option value="44">44</Option>
                            <Option value="45">45</Option>
                            <Option value="46">46</Option>
                            <Option value="47">47</Option>
                            <Option value="48">48</Option>
                            <Option value="49">49</Option>
                            <Option value="50">50</Option>
                            <Option value="51">51</Option>
                            <Option value="52">52</Option>
                            <Option value="53">53</Option>
                            <Option value="54">54</Option>
                            <Option value="55">55</Option>
                            <Option value="56">56</Option>
                            <Option value="57">57</Option>
                            <Option value="58">58</Option>
                            <Option value="59">59</Option>
                        </Select>
                        <p className={style.p}>S</p>
                </Space>
            </Form>
            <div className={style.divButton}>
                <Button className={style.play} shape={'circle'} disabled={isPlaying} onClick={descend} >
                    start
                </Button>

                <Button className={style.play2} shape={'circle'} disabled={!isPlaying} onClick={annuler} >
                    stop
                </Button>
            </div>
        </>
        
    )
}