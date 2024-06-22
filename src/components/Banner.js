
import { Header } from "./Header";
import '../styles/header.css'
import logo from '../assets/logo.png'
/**
 * 
 * @returns the big header of the page
 */
export function Banner({props}) {
  
    return (<div className="lmj-banner">

      <img src={logo} alt="imag"/>
      <Header props={props}/>
      
          </div>)
}