import React, { memo } from "react";
import "./login.css";
import ManagerService from "../../services/ManagerService";
import { useAccountContext } from "../../contexts/accountContexts";
import { DiAtom } from "react-icons/di";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";

const Login = () => {
  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(6).required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const managerService = new ManagerService();
  const { account, setAccount } = useAccountContext();

  const handleLogin = async (e) => {
    try {
      const { data } = await managerService.get(e);
      if (data.length > 0) {
        setAccount(...data);
        localStorage.setItem("account", JSON.stringify(...data));
        console.log(account)
      }
      else{
        alert("usuario não encontrado")
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="box">
          <h1>Welcome</h1>
          <DiAtom />
          <label htmlFor="email"></label>
          <input
            id="email"
            placeholder="Email"
            type="text"
            name="email"
            {...register("email")}
            className="email"
          />
          <div className="login-info">
             {errors.email && <span>{errors.email?.message}</span>}
          </div>
          <label htmlFor="password"></label>
          <input
            id="password"
            placeholder="Password"
            type="password"
            name="password"
            {...register("password")}
            className="password"
          />
          <div className="login-info">
           {errors.password && <span>{errors.password?.message}</span>}
          </div>
          <div className="button-container">
            <button  type="submit" className="btn">
              LOGIN
            </button>
          </div>
          <div>Dont have account? SignUp</div>
        </div>
      </form>
    </div>
  );
};

export default memo(Login);
