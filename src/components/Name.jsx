import React from 'react';
import '/./src/components/styles/name.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
    name: {
    
        fontSize: '20px',
        color: 'white',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        padding: '10px',
        margin: '10px',
        backgroudColor: 'gray',
    
    },
};

export default function Name() {
    return (
        <div style={styles.name}>
            <h1>Kagen Smith</h1>
        </div>
    );
}