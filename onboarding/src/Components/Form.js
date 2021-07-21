import React from 'react';

export default function Form(props) {
    const {values, update, submit, disabled, errors} = props;
    const onChange = evt => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value
        update(name, valueToUse);
    };
    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    };

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
                <label htmlFor='first_name'>First name
                    <input 
                    id='first_name'
                    type='text'
                    name='first_name'
                    onChange={onChange}
                    value={values.first_name}
                    />
                </label>
                <label htmlFor='last_name'>Last name
                    <input 
                    id='last_name'
                    type='text'
                    name='last_name'
                    onChange={onChange}
                    value={values.last_name}
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
                <button disabled={disabled}>Submit</button>
                </div>
            </div>
        </form>

    )
};