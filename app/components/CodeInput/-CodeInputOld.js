import React, { Component } from 'react';
import { View, Text, TextInput, Alert, DeviceEventEmitter } from 'react-native';
import styles from './styles'
import buttons from '../../config/buttons'

import KeyEvent from 'react-native-keyevent';

// const BTextInput = (props)=>{
//     const inputRefs = []
//     const handleChange = (name)=>{
//         const thisInput = parseInt(name)
//         console.log('sdfsdfsdf')
//         const nextInput = String(thisInput+1)
//         if(typeof inputRefs[nextInput]!='undefined' ){
//             inputRefs[nextInput].focus();
//         }


//     }


    
//     return(
//         <View style={styles.inputWrapper}>
//             <TextInput
//                 underlineColorAndroid="transparent"
//                 keyboardType="numeric"
//                 style={styles.input}
//                 ref={(input)=>inputRefs[props.inputRef]=input}
//                 onChangeText={(text) => handleChange(props.inputRef)}
//                 value={props.text}
                
//                 {...this.props}
//             />
//         </View>
//     )
// }

class CodeInput extends Component{
    constructor(props) {
      super(props);
    
      this.state = {
        letterCount: 6,
        text: '',
        textArr: [],
        focusedInput: 0,
        
      };
      // this.onChangeText = this.onChangeText.bind(this)
      this.handleChange = this.handleChange.bind(this)
      this.inputRefs = []
      this.onFocus = this.onFocus.bind(this)
    }
    // onChangeText(name){
    //     this.inputRefs[name].focus();
    // }
    componentWillMount(){
        KeyEvent.onKeyUpListener((keyEvent) => {
          switch(keyEvent.keyCode){
            case buttons.backspace:
                // Alert.alert(String(this.state.textArr[this.state.focusedInput]==''))
                // console.log(this.state.textArr[this.state.focusedInput]+'aaa')
                
                this.inputRefs[0].focus()
                this.setState({textArr:[]})
                break;

            case buttons.enter:
                this.props.onPress()

          }
          // Alert.alert(`Action: ${keyEvent.action}`);
        });
    }
    componentDidMount(){
        this.inputRefs[0].focus()

        
    }

    componentWillUnmount() {
        // if you are listening to keyDown
        // KeyEvent.removeKeyDownListener();

         // if you are listening to keyUp
        KeyEvent.removeKeyUpListener();

         // if you are listening to keyMultiple
        // KeyEvent.removeKeyMultipleListener();
      }

    handleKeyPress(e){
        // Alert.alert(e.nativeEvent.key+'')
    }
    async handleChange(text, name){
        // @info we wont use this version due to KeyEvent
        // let splitText = text.split('')
        // let textArr = [...this.state.textArr]
        // textArr[name] = splitText[0]
        // if(name+1<this.state.letterCount && splitText.length>1) textArr[name+1] = splitText[1]
        // await this.setState({textArr})
        // this.inputRefs[textArr.length-1].focus();
        // if(text.length==0 && name!=0) {
        //     this.inputRefs[name-1].focus();
        //     this.state.textArr.pop()
        // }



        let textArr = [...this.state.textArr]
        textArr[name] = text
        this.setState({textArr})
        const thisInput = parseInt(name)
        // Array.from(this.state.textArr).map((e, i)=>{
        //     this.inputRefs[i].value = e
        // })
        
        const nextInput = String(thisInput+1)
        const prevInput = String(thisInput-1)
        if (text!='') {
            if(typeof this.inputRefs[nextInput]!='undefined' ){
                this.inputRefs[nextInput].focus();
                // this.inputRefs[nextInput].value = null

            }
        } 
        // (name-1<=)

    }
    onFocus(id){
        // let textArr = [...this.state.textArr]
        // textArr[id] = null
        this.setState({focusedInput: id})
        
        // this.inputRefs[0].focus()
    }
    render(){
        const inputs = [];
        
        for (var i=0; i < this.state.letterCount; i++) {
            const id = i;
            inputs.push(
                <View style={styles.inputWrapper} key={id}>
                    <TextInput
                    keyboardType={'numeric'}
                        underlineColorAndroid="transparent"
                        keyboardType="numeric"
                        style={styles.input}
                        textAlign={'right'}
                        ref={(input)=>this.inputRefs[id] = input}
                        maxLength={1}
                        onChangeText={(text)=>this.handleChange(text, id)}
                        blurOnSubmit={true}
                        // onKeyPress={this.handleKeyPress} 
                        // onKeyDown={(e)=> Alert.alert("onKeyDown") } 
                        onSubmitEditing={()=>this.inputRefs[id].blur()}
                        onFocus={this.onFocus.bind(this, id)}
                        value={this.state.textArr[id]}

                        
                        
                    />
                    
                </View>
            );
        }
        return (
          <View style={styles.inputContainer}>
            
            

            {inputs}
            
            
          </View>
        )
    }
	
}

export default CodeInput