import React from 'react';

const Title = ({ name, age }) => (
    <div>
        <h1>Bem vindo, {name}</h1>
        <p>{`Você possui ${age} anos`}</p>
    </div>
)


Title.defaultProps = {
    name: 'Nome padrão',
    age: 10
}

export default Title;
