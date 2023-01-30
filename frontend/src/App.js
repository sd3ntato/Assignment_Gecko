import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';


function App() {


  const [value, set_value] = useState('pizza was nice but delivery was late');
  const [result, set_result] = useState(undefined);

  const call_model = () => {
    console.log(value.replaceAll(' ', '-'));

    fetch(`/data?text=${value.replaceAll(' ', '-')}`).then(res => res.json()).then(data => {
      console.log(data);
      set_result(data);
    }).catch(() => {
      set_result({ mess: 'failure' });
    });
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1> testing the mock model </h1>

      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '1em' }}>

        <TextField label="insert review text here" variant="standard" multiline rows={4} value={value} onChange={(e) => { set_value(e.target.value) }} />

        <Button style={{
          border: '1px solid black',
          color: 'black'
        }}
          variant="outlined"
          onClick={call_model}
        >
          Process
        </Button>

        {result &&
          <div style={{ display: 'flex', gap: '2em' }}>
            {result.res.map((el) => {
              return (
                <div style={{ border: '1px solid black', padding: '0px 20px', textAlign: 'left', minWidth: '15em' }} >
                  <table style={{ width: '100%' }}>
                    <tbody>
                      <tr>
                        <td style={{ textAlign: 'left' }} > sentence: </td>
                        <td style={{ textAlign: 'right' }} >"{el.str_sentence}" </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: 'left' }} > topic: </td>
                        <td style={{ textAlign: 'right' }} >{(el.props[0] / (el.props[0] + el.props[1])).toFixed(2)}%f, {(el.props[1] / (el.props[0] + el.props[1])).toFixed(2)}%d </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: 'left' }} > polarity: </td>
                        <td style={{ textAlign: 'right' }} >{el.polarity} </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )
            })}
          </div>
        }

      </div>

    </div>
  );
}

export default App;
