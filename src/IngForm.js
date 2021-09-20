import React from 'react';

function IngForm(props) {

  return(
    <div className="formDiv">
      <form>
      <label htmlFor="ingName">Ingredient Name</label>
      <input type="text" name="ingName" id="ingName" />
      <label htmlFor="ingColor">Ingredient Color</label>
      <input type="text" name="ingColor" id="ingColor" />
      <button onClick={e => props.addIng(e)}>ADD INGREDIENT</button>
      </form>
    </div>
  )
}

export default IngForm;