import React from 'react'
import InputType from '../../components/shared/Form/InputType'
import Form from '../../components/shared/Form/Form'

const Login = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="w-8 h-8 mr-2" src="https://apprecs.org/gp/images/app-icons/300/3c/com.bcorp.blooddonate.jpg" alt="logo" />
            Blood Bank    
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 h-full">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <Form submitBtn={"Sign in"} formType={"login"}/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Login
