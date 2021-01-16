#useForm hook

Ejemplo de uso
```
    const initialForm = {
        name: '',
        email: '',
        age: 0,
    }

    const [ formValues, handleInputChange, reset ] = useForm(initialForm);

```