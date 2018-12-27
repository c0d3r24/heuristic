import React from 'react';
import S3FileUpload from 'react-s3';
import firebase, { storage, database } from 'firebase';

const config = {
    bucketName: 'c0d3rbucket',
    //dirName: 'report', /* optional */
    region: 'us-east-1',
    accessKeyId: 'put your accesskey',
    secretAccessKey: 'put you secrect key',
}

class Report extends React.Component{
    
    state = {
        comment1: '',
        comment2: ''
    }
    constructor(props){
        super(props);
        this._handleSubmit = this._handleSubmit.bind(this);
        this._onComment1Change = this._onComment1Change.bind(this);
        this._onComment2Change = this._onComment2Change.bind(this);
    }
    

    _handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append('selectedFile', this.fileInput.files[0]);
        S3FileUpload
        .uploadFile(this.fileInput.files[0], config)
        .then(data => 
            {
                firebase.database().ref(`/reports`)
                .push({comment1: this.state.comment1, comment2: this.state.comment2, url: data.location})
                .then((d) => {
                        console.log('saved: ' + d);
                }).catch(err => console.log(err));
            })
        .catch(err => console.error(err))
       
        
        // formData.append('algorithm', this.state.algorithm);
        // this.props.classify(formData, 'showAnalysisModal', !this.props.showAnalysisModal);

      }

      _onComment1Change(event){
        this.setState({comment1:event.target.value});
      }

      _onComment2Change(event){
        this.setState({comment2:event.target.value});
      }
      
    render(){
        return (
            <form onSubmit={this._handleSubmit} >
            <div>
              <div className="row">
                <label>
                Comment:
                    <input type="text" name="name"
                    onChange={this._onComment1Change}
                    value={this.state.comment1}
                    placeholder="Type your comment here" />
                </label>
             </div>  
            <div className="row">
              
                <label >
                Another Comment:
                    <input type="text" name="name" 
                        onChange={this._onComment2Change}
                        value={this.state.comment2}
                        placeholder="Type your comment here" 
                     />
                </label>
            </div>
            <div className="input-field row">
                <input type="file" ref={ref => this.fileInput = ref} name="selectedFile" />
                <button style={{ cursor: 'pointer',color:'#fff',backgroundColor: '#9CA9FF', height: 40, width: "30%", borderRadius:5}} type="submit">Submit Request</button>
            </div>
             </div>    
            </form> 
        );
    }
}

export default Report;