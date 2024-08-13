import React from 'react'
import './Body.css'
import { TextField } from '@mui/material'
const Body = () => {
  return (
    <div className='input-box'>
      <div className="prompt-me">Prompt</div>
      <TextField
          label="Prompt"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          // sx={{ mb : 2 }}
          className="textField"
        />
    </div>
  )
}

export default Body
