import React from 'react';
import LeftArea from '../../Component/Pages/Login/LeftArea';
import Layout from '../../Layout';
import LoginForm from '../../Component/Pages/Login/LoginForm';
const Login: React.FC = () => {
  return (
    <Layout>
      <div className='flex gap-4 flex-col md:flex-row w-full h-full px-10 lg:px-40 '>
        <div className='w-full'> <LeftArea /></div>
        <div className='w-full'> <LoginForm /></div>

       </div>
    </Layout>
  );
};

export default Login;
