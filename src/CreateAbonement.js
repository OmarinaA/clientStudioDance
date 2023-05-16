import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import SubscriptionService from './services/Subscription.service';

const SubscriptionForm = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [services, setServices] = useState([]);

    const handleOnChangeName = (event) => setName(event.target.value);
    const handleOnChangePrice = (event) => setPrice(event.target.value);
    const handleOnChangeServices = (event) => setServices(event.target.value.split(','));

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            name,
            price,
            services,
        };
        await SubscriptionService.create(data);
        alert('Абонемент добавлен на сайт!');
        setName('');
        setPrice('');
        setServices([]);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="name">Название абонемента</Label>
                <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Введите название абонемента"
                    value={name}
                    onChange={handleOnChangeName}
                />
            </FormGroup>
            <FormGroup>
                <Label for="price">Цена</Label>
                <Input
                    type="number"
                    name="price"
                    id="price"
                    placeholder="Введите цену абонемента"
                    value={price}
                    onChange={handleOnChangePrice}
                />
            </FormGroup>
            <FormGroup>
                <Label for="services">Услуги</Label>
                <Input
                    type="text"
                    name="services"
                    id="services"
                    placeholder="Введите список услуг"
                    value={services}
                    onChange={handleOnChangeServices}
                />
            </FormGroup>
            <Button color="primary" type="submit">
                Добавить абонемент
            </Button>
        </Form>
    );
};

export default SubscriptionForm;