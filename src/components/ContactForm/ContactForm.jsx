import { Formik } from 'formik';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { FormWr, Input, Label, Button, Error } from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup.string().min(2).required(),
  number: yup.number().min(6).required(),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ onSubmit }) => {
  return (
    <Formik
    // Подключение схемы валидации
      validationSchema={schema}
    // Инициализируем значения input-ов
      initialValues={initialValues}
    // Вызоваем onSubmit
      onSubmit={onSubmit}
    >
      <FormWr>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Enter name"
          />
          <Error component="div" name="name" />
        </Label>
        <Label>
          Number
          <Input
            placeholder="Enter number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <Error component="div" name="number" />
        </Label>
        <Button type="submit">Add contact</Button>
      </FormWr>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};