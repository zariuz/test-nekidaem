import React from 'react';
import {Button} from '../../components/Button';
import {Card} from '../../components/Card';
import addSvg from '../../assets/img/add.svg';
import clearSvg from '../../assets/img/clear.svg';

import './AddForm.scss';

const AddForm = ({value, showForm, setValue, textareaRef, setShowForm, onAdd}) => {
  return showForm ? (
    <div className="add-form">
      <div className="add-form__input">
        <Card>
          <textarea
            onChange={(e) => setValue(e.target.value)}
            value={value}
            placeholder={'Ввести заголовок для этой карточки'}
            ref={textareaRef}
            rows="3"
          />
        </Card>
        <div className="add-form__bottom">
          <Button onClick={onAdd}>{'Добавить карточку'}</Button>
          <img
            onClick={setShowForm.bind(this, false)}
            className="add-form__bottom-clear"
            src={clearSvg}
            alt="Clear svg icon"
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="add-form__bottom">
      <div onClick={setShowForm.bind(this, true)} className="add-form__bottom-add-btn">
        <img src={addSvg} alt="Add svg icon" />
        <span>{'Добавить карточку'}</span>
      </div>
    </div>
  );
};

export default AddForm;
