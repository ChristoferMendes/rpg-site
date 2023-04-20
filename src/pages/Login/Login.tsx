import { useEffect, useState } from "react";
import { AnimatedPage } from "../../components/AnimatedPage";
import { useUserLoginMutation } from "../../hooks/useUserMutation";
import { useAuthStore } from "../../store/auth";
import { useUserRegisterMutation } from "../../hooks/useUserRegisterMutation";
import { useLogoutQuestionMarkStore } from "../../store/logoutQuestionMark";
import { Input } from "../../components/Input";
import { BiUser } from "react-icons/bi";
import { SlLock } from "react-icons/sl";
import { AiOutlineMail } from "react-icons/ai";

export function Login() {
  const { actions: { login } } = useAuthStore()
  const { executeLogin, data } = useUserLoginMutation()
  const { executeRegister, data: registerData } = useUserRegisterMutation()
  const [isRegister, setIsRegister] = useState(false)
  const { actions: { hideLogout } } = useLogoutQuestionMarkStore()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { email, password, name } = e.currentTarget.elements as any

    if (isRegister) {
      return handleRegister(email.value, password.value, name.value)
    }

    handleLogin(email.value, password.value)
  }

  const handleRegister = async (email: string, password: string, name: string) => {
    await executeRegister(email, password, name)
  }

  const handleLogin = async (email: string, password: string) => {
    await executeLogin(email, password)
  }

  useEffect(() => {
    hideLogout()
    if (!data) return;

    login()
  }, [data])

  useEffect(() => {
    if (!registerData) return;

    login()
  }, [registerData])

  return (
    <AnimatedPage>
      <section className="h-screen flex flex-col justify-center text-white">
        <div className="flex items-center flex-col -translate-y-3 space-y-3">
          <img className="rounded-full w-44" src="https://cdn.discordapp.com/attachments/1083808275436408885/1098235650819498044/Artie_Cahill_rounded_logo_anime_style_pop_color__a_illustration_86d698e7-1fc8-4865-8207-8a4fbe57964e.png" alt="logo" />
          <p className="text-white font-bold text-2xl">COMPANION'S GUILD.</p>
          <p className="text-stroke font-semibold text-2xl -translate-y-8 -z-10">COMPANION'S GUILD.</p>
        </div>
        <div className="">
          <form onSubmit={handleSubmit} className="flex flex-col mx-12 space-y-8">
            {isRegister && <Input placeholder="John Doe" id="name" Icon={<BiUser className="text-3xl text-indigo-900 mx-2 translate-x-1" />} />}
            <Input
              placeholder="user@gmail.com"
              type="email"
              id="email"
              Icon={<AiOutlineMail className="text-3xl text-indigo-900 mx-2 translate-x-1" />}
            />
            <Input
              type="password"
              id="password"
              Icon={<SlLock className="text-3xl text-indigo-900 mx-2 translate-x-1" />}
            />
            <button title="submit" type="submit" className="bg-purple-950 w-full rounded-xl h-12 text-white">Submit</button>
            {!isRegister ? (
              <button type="button" className="w-full text-gray-300 text-sm" onClick={() => setIsRegister(true)}>Don't have an account? Register</button>
            ) : (
              <button type="button" className="w-full text-gray-300 text-sm" onClick={() => setIsRegister(false)}>Already have a account? Login</button>
            )}
          </form>
          <button onClick={login} className="w-full text-gray-300 text-sm bg-black mt-5 h-12 hover:bg-zinc-900">Enter as Guest</button>
        </div>
      </section>
    </AnimatedPage>
  );
}
