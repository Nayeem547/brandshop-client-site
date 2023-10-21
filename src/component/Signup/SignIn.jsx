import React from 'react';

const SignIn = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
            <h2 className=" text-2xl font-semibold " >Please Sign In</h2>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className=" flex justify-center text-center items-center " >
              <input
                name="password"
                type={ showPassword ? "text" : "password"}
                placeholder="password"
                className="input input-bordered"
                required
              />  <span className=" pl-2 " onClick={() => setShowPassword(!showPassword)} >
                    {
                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                    }
              </span>
              </div>
             
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control space-y-3 mt-6">
              <button className="btn btn-primary">Login</button>
              <button className='btn btn-primary' onClick={handleGooglSignIN} > Google</button>
            </div>
            
          </form>
         {
            registerError && <p className="w-64 pl-4 pr-4 pb-2 text-[#fc032c] text-sm italic  " >{registerError}</p>
         }
         <p className=' pl-4 pr-4 pb-2' >New to this website Please <Link className=' text-blue-400 ' to="/register">Register</Link>  </p>
        </div>
      </div>
    </div>
    );
};

export default SignIn;