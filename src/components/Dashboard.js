import React from 'react';
import firebase from 'firebase';


class Dashboard extends React.Component{
    
    state = {
        data: []
    }
    componentDidMount(){
        
        firebase.database().ref('/reports').on('value', snapshot => {
            let data = [];
            for(let key in snapshot.val()){
                console.log(snapshot.val()[key]);
                data.push(snapshot.val()[key]);
            }
            this.setState({data});
        });
    }
    _renderContent(){
        this.state.data.map( (item, index) => {
            return (<div key={index+item.comment1}>
                        

                    </div>)
            ;
        });
    }
    render(){
        return (
            <div>
                Dashboard
                <table className="MyClassName">
                    <thead>
                        <tr>
                            <th>Comment1</th>
                            <th>Comment2</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.data.map((item, i) =>
                        <tr key={i}>
                            <td>{item.comment1}</td>
                            <td>{item.comment2}</td>
                            <td><img src={item.url} alt={item.url} style={{height:100, width: 100}} /></td>
                        </tr>
                    )}
                    </tbody>
            </table>
        </div>
            
        );
    }
}

export default Dashboard;