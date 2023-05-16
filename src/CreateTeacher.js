import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import TeacherService from './services/Teacher.service';

const TeacherForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [phone, setPhone] = useState('');

    const handleOnChangeName = (event) => setName(event.target.value);
    const handleOnChangeDescription = (event) => setDescription(event.target.value);
    const handleOnChangeImage = (event) => setImage(event.target.value);
    const handleOnChangePhone = (event) => setPhone(event.target.value);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            name,
            description,
            image,
            phone,
        };
        await TeacherService.create(data);
        alert('Учитель добавлен на сайт!');
        setName('');
        setDescription('');
        setImage('');
        setPhone('');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="name">Имя учителя</Label>
                <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Введите имя учителя"
                    value={name}
                    onChange={handleOnChangeName}
                />
            </FormGroup>
            <FormGroup>
                <Label for="description">Краткое описание учителя</Label>
                <Input
                    type="textarea"
                    name="description"
                    id="description"
                    placeholder="Введите краткое описание учителя"
                    value={description}
                    onChange={handleOnChangeDescription}
                />
            </FormGroup>
            <FormGroup>
                <Label for="image">URL изображения учителя</Label>
                <Input
                    type="text"
                    name="image"
                    id="image"
                    placeholder="Введите URL изображения учителя"
                    value={image}
                    onChange={handleOnChangeImage}
                />
            </FormGroup>
            <FormGroup>
                <Label for="phone">Номер телефона учителя</Label>
                <Input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Введите номер телефона учителя"
                    value={phone}
                    onChange={handleOnChangePhone}
                />
            </FormGroup>
            <Button color="primary">Добавить учителя</Button>
        </Form>
    );
};

export default TeacherForm;
