import React, { useState } from 'react';
import {
  App,
  Button,
  Card,
  ConfigProvider,
  Form,
  Input,
  Layout,
  Modal,
  Tabs,
  Typography,
} from 'antd';
import { MailOutlined, LockOutlined, SendOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Link, Text } = Typography;

/* -------------------------------
   LOGIN FORM
--------------------------------*/
const LoginForm: React.FC = () => {
  const [openForgot, setOpenForgot] = useState(false);
  const { modal, message } = App.useApp();

  const onLogin = (values: any) => {
    console.log('onLogin OK ->', values);
    modal.success({
      title: 'Inicio de sesión exitoso',
      content: `Bienvenido, ${values.email}`,
    });
  };

  const onLoginFailed = (info: any) => {
    console.log('onLogin FAILED ->', info);
    message.error('Revisá los campos del login.');
  };

  const onRecover = (values: any) => {
    console.log('onRecover ->', values);
    modal.success({
      title: 'Recuperación enviada',
      content: `Te enviamos un correo a ${values.recoverEmail}`,
      onOk: () => setOpenForgot(false),
    });
  };

  return (
    <>
      <Card variant="outlined">
        <Title level={3} style={{ marginTop: 0 }}>Iniciar sesión</Title>

        <Form
          layout="vertical"
          onFinish={onLogin}
          onFinishFailed={onLoginFailed}
          autoComplete="off"
        >
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, type: 'email', message: 'Ingresa un email válido' }]}
          >
            <Input prefix={<MailOutlined />} placeholder="tu@email.com" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Contraseña"
            rules={[{ required: true, message: 'Ingresa tu contraseña' }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="••••••••" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Entrar
            </Button>
          </Form.Item>

          <Text type="secondary">
            ¿Olvidaste tu contraseña?{' '}
            <Link onClick={() => setOpenForgot(true)}>Recuperarla</Link>
          </Text>
        </Form>
      </Card>

      <Modal
        title="Recuperar contraseña"
        open={openForgot}
        onCancel={() => setOpenForgot(false)}
        footer={null}
      >
        <Paragraph type="secondary" style={{ marginTop: 0 }}>
          Te enviaremos un enlace para restablecer tu contraseña.
        </Paragraph>
        <Form layout="vertical" onFinish={onRecover} autoComplete="off">
          <Form.Item
            name="recoverEmail"
            label="Email"
            rules={[{ required: true, type: 'email', message: 'Ingresa un email válido' }]}
          >
            <Input prefix={<MailOutlined />} placeholder="tu@email.com" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" icon={<SendOutlined />} block>
              Enviar enlace
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

/* -------------------------------
   CONTACT FORM
--------------------------------*/
const ContactForm: React.FC = () => {
  const { modal, message } = App.useApp();

  const onSend = (values: any) => {
    console.log('onSend ->', values);
    modal.success({
      title: 'Mensaje enviado',
      content: `Gracias por contactarte, ${values.name}!`,
    });
  };

  const onSendFailed = (info: any) => {
    console.log('onSend FAILED ->', info);
    message.error('Revisá los campos del formulario.');
  };

  return (
    <Card variant="outlined">
      <Title level={3} style={{ marginTop: 0 }}>Contacto</Title>
      <Form
        layout="vertical"
        onFinish={onSend}
        onFinishFailed={onSendFailed}
        autoComplete="off"
      >
        <Form.Item
          name="name"
          label="Nombre"
          rules={[{ required: true, message: 'Ingresa tu nombre' }]}
        >
          <Input placeholder="Tu nombre" />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, type: 'email', message: 'Ingresa un email válido' }]}
        >
          <Input prefix={<MailOutlined />} placeholder="tu@email.com" />
        </Form.Item>

        <Form.Item
          name="message"
          label="Mensaje"
          rules={[{ required: true, message: 'Escribe tu mensaje' }]}
        >
          <Input.TextArea rows={4} placeholder="¿En qué podemos ayudarte?" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" icon={<SendOutlined />} block>
            Enviar
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

/* -------------------------------
   MAIN PAGE
--------------------------------*/
const WelcomePage: React.FC = () => {
  return (
    <ConfigProvider>
      <App>
        <Layout style={{ minHeight: '100vh' }}>
          <Header style={{ display: 'flex', alignItems: 'center', paddingInline: 16 }}>
            <Title level={5} style={{ color: '#fff', margin: 0 }}>Tu App</Title>
          </Header>

          <Content style={{ padding: 24, display: 'grid', placeItems: 'center' }}>
            <div style={{ width: '100%', maxWidth: 520 }}>
              <Tabs
                defaultActiveKey="login"
                items={[
                  { key: 'login', label: 'Login', children: <LoginForm /> },
                  { key: 'contact', label: 'Contact Us', children: <ContactForm /> },
                ]}
              />
            </div>
          </Content>
        </Layout>
      </App>
    </ConfigProvider>
  );
};
export {WelcomePage} ;
