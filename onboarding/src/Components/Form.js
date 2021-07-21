import React from 'react';

export default function Form(props) {
    const {values, update, submit, disabled, errors} = props;
    const onChange = evt => {
        const { name, value } = evt.target;
        update(name, value);
    };
    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    };

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
                <label htmlFor='name'> Name
                    <input 
                    id='name'
                    type='text'
                    name='name'
                    onChange={onChange}
                    value={values.name}
                    />
                </label>

                <label htmlFor='email'> Email
                    <input 
                    id='email'
                    type='email'
                    name='email'
                    onChange={onChange}
                    value={values.email}
                    />
                </label>
                <label htmlFor='password'> Password
                    <input 
                    id='password'
                    type='password'
                    name='password'
                    onChange={onChange}
                    value={values.password}
                    />
                </label>
                <label htmlFor='tos'> Terms of Service
                    <input 
                    id='tos'
                    type='checkbox'
                    name='tos'
                    onChange={onChange}
                    checked={values.tos}
                    />
                </label>
                {/* <label htmlFor='role'> Role
                    <select id='role' name='role' onChange={onChange} value={values.role}>
                        <option value=''>-- Select a Role --</option>
                        <option value='Frontend Engineer'>Frontend Engineer</option>
                        <option value='Backend Engineer'>Backend Engineer</option>
                        <option value='Copywriter'>Copywriter</option>
                        <option value='Art Director'>Art Director</option>
                        <option value='Project Manager'>Project Manager</option>
                    </select>
                </label> */}

                <div className='submit'>
                <button>submit</button>
                </div>
            </div>
        </form>

    )
};