import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import DirectionService from './services/Direction.service';

const DanceForm = () => {
    const [name, setName] = useState('');
    const [descriptionShort, setDescriptionShort] = useState('');
    const [descriptionFull, setDescriptionFull] = useState('');
    const [image, setImage] = useState(null);

    const handleOnChangeName = (event) => setName(event.target.value);
    const handleOnChangeDescriptionShort = (event) => setDescriptionShort(event.target.value);
    const handleOnChangeDescriptionFull = (event) => setDescriptionFull(event.target.value);
    const handleOnChangeImage = (event) => setImage(event.target.value);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("file", image);

        console.log(formData)
        const result = await fetch("http://localhost:8080/file/upload",{
            method:"POST",
            body: formData

        });

        const resultJSON = await result.json();
        console.log(resultJSON);
        const fileId = resultJSON.fileId;
        const data = {
            name,
            descriptionShort,
            descriptionFull,
            fileId
        };
        await DirectionService.create(data);
        alert('Направление танцев добавлено на сайт!');
        setName('');
        setDescriptionShort('');
        setDescriptionFull('');
        setImage('');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="name">Название направления танцев</Label>
                <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Введите название направления"
                    value={name}
                    onChange={handleOnChangeName}
                />
            </FormGroup>
            <FormGroup>
                <Label for="descriptionShort">Краткое описание направления танцев</Label>
                <Input
                    type="textarea"
                    name="descriptionShort"
                    id="descriptionShort"
                    placeholder="Введите краткое описание направления"
                    value={descriptionShort}
                    onChange={handleOnChangeDescriptionShort}
                />
            </FormGroup>
            <FormGroup>
                <Label for="descriptionFull">Подробное описание направления танцев</Label>
                <Input
                    type="textarea"
                    name="descriptionFull"
                    id="descriptionFull"
                    placeholder="Введите подробное описание направления"
                    value={descriptionFull}
                    onChange={handleOnChangeDescriptionFull}
                />
            </FormGroup>
            <FormGroup>
                <Label for="image">Изображение направления танцев (URL)</Label>
                <Input
                    type="file"
                    name="image"
                    id="image"
                    placeholder=""
                    value={image}
                    onChange={handleOnChangeImage}
                />
            </FormGroup>
            <Button type="submit" color="primary">
                Добавить направление танцев
            </Button>
        </Form>
    );
};

export default DanceForm;