import React, {useEffect, useState} from 'react';
import './App.css';
import {Button, Card, Form, Input} from "antd";

function App() {
    const [form] = Form.useForm()
    const [checkNick, setCheckNick] = useState(false)

    useEffect(() => {
        form.validateFields(['nickname'])
    }, [checkNick, form])

    const onCheck = async () => {
        try {
            const values = await form.validateFields()
            console.log('sucess', values)
        } catch (erroInfo) {
            console.log('Faild, ', erroInfo)
        }
    }
    return (
        <div>
            <div style={{textAlign: 'center'}}>
                <img src='/logo.png' width='50%'/>
            </div>

            <Card style={{margin: 20}}>
                <Form form={form}>
                    <Form.Item name='username' label='Name' rules={[
                        {
                            required: true,
                            message: 'Please input your name',
                        },
                    ]}>
                        <Input placeholder='Please input your name'/>
                    </Form.Item>
                    <Form.Item label='NO KP' name='nokp' rules={[
                        {
                            required: true,
                            message: 'Please input NO KP'
                        }
                    ]}>
                        <Input placeholder='Please input NO KP'/>
                    </Form.Item>
                    <Form.Item label='Document Control Number' name='docnumber' rules={[
                        {
                            required: true,
                            message: 'Please input document control number'
                        }
                    ]}>
                        <Input placeholder='Please input document control number'/>
                    </Form.Item>
                </Form>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Button style={{background:'red', color:'white'}} onClick={onCheck}>Digital Signature</Button>
                </div>
                <div style={{marginTop: 20}}>
                    I hereby declare that the above made statements are true to the best of my knowledge and belief, and that I understand it is made for use as evidence in court and is subject to penalty for perjury.
                </div>
            </Card>
        </div>
    );
}

export default App;
