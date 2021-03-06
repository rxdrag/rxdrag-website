import clsx from "clsx";
import React from "react";
import { tongjiScript } from "../../consts";
import styles from "./styles.module.css"

export default function FooterAvatar(){
  return (
    <div className = {styles.footAvatar}>
      <div className = {styles.logo}>
        <span className = {styles.ruxin}>rx</span><span>Drag</span>
      </div>
      <div className = {styles.footerNav}>
        <ul>
          <li> <a href="/">首页</a> </li>
          <li> <a href="/docs/intro">文档</a> </li>
          <li> <a href="https://rxmodels-client.rxdrag.com/" target="_blank">后端演示</a> </li>
          <li> <a href="https://dragit.vercel.app/" target="_blank">前端演示</a> </li>
          <li> <a href="https://github.com/rxdrag" target="_blank">GITHUB</a> </li>          
          <li> QQ群：957619750 </li>
        </ul>

      </div>
      <div className = {styles.layout}>

        <div>
          <a href="https://github.com/rxdrag" target="_blank" >
            <img className = {clsx(styles.maskSquircle, styles.mask)} src="img/avatar.jpg" />
          </a>
        </div>
        <div className={styles.textArea}>
          <div className={styles.grayText}>
            设计制作 by
          </div>
          <div><a target="_blank" href="https://github.com/rxdrag">悠闲的水</a></div>
        </div>
      </div>
      <div className={styles.beian}>
        <a href="http://beian.miit.gov.cn/" target="_blank" >
          鲁ICP备20004279号-2
        </a> 
      </div>
      {
        <div  dangerouslySetInnerHTML = {{__html:tongjiScript}} >

        </div>
      }
    </div>
  )
}