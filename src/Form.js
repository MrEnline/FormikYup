import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const CustomForm = () => {
    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                amount: 0,
                currency: '',
                text: '',
                terms: false,
            }}
            validationSchema={Yup.object({
                name: Yup.string().min(2, 'Минимум 2 символа').required('Обязательное поле'),
                email: Yup.string().email('Неправильный email-адрес').required('Обязательное поле'),
                amount: Yup.number().min(5, 'Не менее пяти цифр').required('Обязательное поле'),
                currency: Yup.string().required('Выберите валюту'),
                text: Yup.string().min(10, 'Не менее 10 символов'),
                terms: Yup.boolean().required('Необходимо согласие!').oneOf([true], 'Необходимо согласие!'),
            })}
            onSubmit={(values) => console.log(JSON.stringify(values, null, 2))}
        >
            <Form className="form">
                <h2>Отправить пожертвование</h2>
                <label htmlFor="name">Ваше имя</label>
                <Field id="name" name="name" type="text" />
                <ErrorMessage name="name" className="error" component="div" />
                <label htmlFor="email">Ваша почта</label>
                <Field id="email" name="email" type="email" />
                <ErrorMessage name="email" className="error" component="div" />
                <label htmlFor="amount">Количество</label>
                <Field id="amount" name="amount" type="number" />
                <ErrorMessage name="amount" className="error" component="div" />
                <label htmlFor="currency">Валюта</label>
                <Field id="currency" name="currency" as="select">
                    <option value="">Выберите валюту</option>
                    <option value="USD">USD</option>
                    <option value="UAH">UAH</option>
                    <option value="RUB">RUB</option>
                </Field>
                <ErrorMessage name="currency" className="error" component="div" />
                <label htmlFor="text">Ваше сообщение</label>
                <Field id="text" name="text" as="textarea" />
                <label className="checkbox">
                    <Field name="terms" type="checkbox" />
                    Соглашаетесь с политикой конфиденциальности?
                </label>
                <ErrorMessage name="terms" className="error" component="div" />
                <button type="submit">Отправить</button>
            </Form>
        </Formik>
    );
};

export default CustomForm;
