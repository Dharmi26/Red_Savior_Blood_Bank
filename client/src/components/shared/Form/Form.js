import React,{useState} from 'react'
import InputType from './InputType'
import { Link } from 'react-router-dom';
import { handleLogin,handleRegister } from '../../../services/authService';

const Form = ({submitBtn, formType}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("donar");
    const [name, setName] = useState("");
    const [organisation, setOrganisation] = useState("");
    const [hospital, setHospital] = useState("");
    const [website, setWebsite] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

  return (
    <div>
        <form 
        className="space-y-4 md:space-y-6" 
        action="#"
        onSubmit={(e) => {
          if (formType === "login")
            return handleLogin(e, email, password, role);
          else if (formType === "register")
            return handleRegister(
              e,
              name,
              role,
              email,
              password,
              phone,
              organisation,
              address,
              hospital,
              website
            );
        }}
        >

            <div className="flex">
            <div className="flex items-center mr-4">
                <input 
                    type="radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    name="role"
                    id="donarRadio"
                    value={"donar"}
                    onChange={(e) => setRole(e.target.value)}
                    defaultChecked
                />
                <label htmlFor="donarRadio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Donar</label>
            </div>
            <div className="flex items-center mr-4">
                <input
                type="radio"
                className="form-check-input"
                name="role"
                id="adminRadio"
                value={"admin"}
                onChange={(e) => setRole(e.target.value)}
                />
                <label htmlFor="adminRadio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Admin</label>
            </div>
            <div className="flex items-center mr-4">
                <input
                type="radio"
                className="form-check-input"
                name="role"
                id="organisationRadio"
                value={"organisation"}
                onChange={(e) => setRole(e.target.value)}
                />
                <label htmlFor="organisationRadio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Organisation</label>
            </div>
            <div className="flex items-center">
                <input
                type="radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                name="role"
                id="hospitalRadio"
                value={"hospital"}
                onChange={(e) => setRole(e.target.value)}
                />
                <label htmlFor="hospitalRadio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Hospital</label>
            </div>
            </div>


            {(()=>{
                switch(true){
                    case formType==="login":{
                        return(
                            <>
                                <InputType 
                                    labelText={"Email"}
                                    labelFor={"Email"}
                                    inputType={"email"}
                                    name={"email"}
                                    value={email}
                                    placeholder={"johndoe@example.com"}
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                                <InputType 
                                    labelText={"Password"}
                                    labelFor={"Password"}
                                    inputType={"password"}
                                    name={"password"}
                                    value={password}
                                    placeholder={"********"}
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                            </>
                        )
                    }
                    case formType==="register":{
                        return(
                            <>
                            {(role === "admin" || role === "donar") && (
                                <InputType 
                                    labelText={"Your Name"}
                                    labelFor={"Name"}
                                    inputType={"name"}
                                    name={"John Doe"}
                                    value={name}
                                    placeholder={"Name"}
                                    onChange={(e)=>setName(e.target.value)}
                                />)}
                                {role === "organisation" && (
                                <InputType 
                                    labelText={"Organisation Name"}
                                    labelFor={"Organisation"}
                                    inputType={"organisation"}
                                    name={"organisation"}
                                    value={organisation}
                                    placeholder={"HealthCare Group"}
                                    onChange={(e)=>setOrganisation(e.target.value)}
                                />)}
                                {role === "hospital" && (
                                <InputType 
                                    labelText={"Hospital Name"}
                                    labelFor={"Hospital"}
                                    inputType={"hospital"}
                                    name={"hospital"}
                                    value={hospital}
                                    placeholder={"City Hospital"}
                                    onChange={(e)=>setHospital(e.target.value)}
                                />)}
                                <InputType 
                                    labelText={"Email"}
                                    labelFor={"Email"}
                                    inputType={"email"}
                                    name={"email"}
                                    value={email}
                                    placeholder={"johndoe@example.com"}
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                                <InputType 
                                    labelText={"Password"}
                                    labelFor={"Password"}
                                    inputType={"password"}
                                    name={"********"}
                                    value={password}
                                    placeholder={"password"}
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                                <InputType 
                                    labelText={"Website"}
                                    labelFor={"Website"}
                                    inputType={"website"}
                                    name={"website"}
                                    value={website}
                                    placeholder={"https://www.example.com"}
                                    onChange={(e)=>setWebsite(e.target.value)}
                                />
                                <InputType 
                                    labelText={"Address"}
                                    labelFor={"Address"}
                                    inputType={"address"}
                                    name={"address"}
                                    value={address}
                                    placeholder={"123 Main Street, Cityville, State"}
                                    onChange={(e)=>setAddress(e.target.value)}
                                />
                                <InputType 
                                    labelText={"Phone"}
                                    labelFor={"Phone"}
                                    inputType={"phone"}
                                    name={"phone"}
                                    value={phone}
                                    placeholder={"(555) 123-4567"}
                                    onChange={(e)=>setPhone(e.target.value)}
                                />

                            </>
                        )
                    }
                }
            })()}
            
            {formType==="login" && (
                <div className="flex items-center justify-between">
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />                    
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                        </div>
                    </div>
                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                </div>
            )}

            

            <button type="submit" className="w-full text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-gray-600 dark:focus:ring-primary-800">
                {submitBtn}
            </button>
            
            {formType==="login"?(
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet? <Link to="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                </p>
            ):(
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</Link>
                </p>
            )}
            
        </form>
    </div>
  )
}

export default Form
