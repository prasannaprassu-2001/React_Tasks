import React, { Component } from 'react';
import './Generator.scss';
import copyIcon from '../assets/copy-icon.svg';
import { ToastContainer, toast } from 'react-toastify';

const lowercaseList = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbersList = '0123456789';
const symbolsList = "!@#$%^&*()?";

class Generator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      lowerCase: true,
      upperCase: true,
      numbers: true,
      symbols: true,
      passwordLength: 0,
      selectedChoices: ['lowercase', 'uppercase', 'numbers', 'symbols'],
    };
  }

  componentDidMount() {
    this.generatePassword();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.passwordLength !== this.state.passwordLength) {
      this.generatePassword();
    }
  }

  handleCheckboxChange = (event) => {
    const{name, checked} = event.target;
    this.setState({[name]: checked});
    let tempChoices = [...this.state.selectedChoices];
    if (tempChoices.includes(event)) {
      const index = tempChoices.indexOf(event);
      tempChoices.splice(index, 1);
    } else {
      tempChoices.push(event);
    }
    this.setState({ selectedChoices: tempChoices });
  };

  

  

  generatePassword = () => {
    const { lowerCase, upperCase, numbers, symbols, passwordLength } = this.state;

    let characterList = '';

    if (lowerCase) {
      characterList += lowercaseList;
    }
    if (upperCase) {
      characterList += uppercaseList;
    }
    if (numbers) {
      characterList += numbersList;
    }
    if (symbols) {
      characterList += symbolsList;
    }

    let tempPassword = '';
    const characterListLength = characterList.length;

    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characterListLength);
      tempPassword += characterList.charAt(characterIndex);
    }

    this.setState({ password: tempPassword });
  };

           handleLengthChange= (event) =>{
           this.setState({ passwordLength: event.target.value});
           }

  copyPassword = async () => {
    const { password } = this.state;
    const copiedText = await navigator.clipboard.readText();
    if (password.length && copiedText !== password) {
      navigator.clipboard.writeText(password);
      toast.success('Password copied to clipboard', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        
      });
    }
  };

  render() {
    const {
      password,
      lowerCase,
      upperCase,
      numbers,
      symbols,
      passwordLength,
      selectedChoices,
    } = this.state;

    return (
      <>
       <div className="password-generator">
     <h2 className='title'>Password Generator </h2>
            <div className="password-wrapper">
              <div className="password-area">
                <div className="password">
                  <input
                    type="text"
                    value={password}
                    disabled
                    placeholder="P4$5W0rD!"
                  />
                  <img
                    src={copyIcon}
                    alt="copyicon"
                    className="copyIcon"
                    onClick={this.copyPassword}
                  />
                </div>
              </div>
            </div>
            <div className="customize">
            <div className="password-length">
                    <h3>Character Length <span className="rangeValue">{passwordLength}</span></h3>
                    <div className="slider">
                       
                        <div className="range">
                            <input type="range" min={0} max={100} defaultValue={passwordLength} onChange={(this.handleLengthChange)} />
                        </div>
                    </div>
                </div>
                   
                    
                        <div className="checkboxes">
                            <div className="left">
                            <div className="checkbox-field">
                                    <input type="checkbox" name="upperCase" id="upper" checked={upperCase} disabled={selectedChoices.length === 1 && selectedChoices.includes('uppercase')} onChange={this.handleCheckboxChange}/>
                                    <label htmlFor="upper">Include UpperCase Letters</label>
                                </div>  
                                <div className="checkbox-field">
                                    <input type="checkbox" name="lowerCase" id="lower" checked={lowerCase} disabled={selectedChoices.length === 1 && selectedChoices.includes("lowercase")} onChange={this.handleCheckboxChange} />
                                    <label htmlFor="lower">Include Lowercase Letters</label>
                                </div>
                                
                            </div>
                            <div className="right">
                                <div className="checkbox-field">
                                    <input type="checkbox" name="numbers" id="numbers" checked={numbers} disabled={selectedChoices.length === 1 && selectedChoices.includes('numbers')} onChange={this.handleCheckboxChange}/>
                                    <label htmlFor="numbers">Include Numbers </label>
                                </div>
                                <div className="checkbox-field">
                                    <input type="checkbox" name="symbols" id="symbols" checked={symbols} disabled={selectedChoices.length === 1 && selectedChoices.includes('symbols')} onChange={this.handleCheckboxChange} />
                                    <label htmlFor="symbols">Include Symbols</label>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
                
                
            
            <ToastContainer />
        </>
    )
}
}
export default Generator;
            