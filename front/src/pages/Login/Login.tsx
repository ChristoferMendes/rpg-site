import { useEffect, useState } from "react";
import { AnimatedPage } from "../../components/AnimatedPage";
import { useUserLoginMutation } from "../../hooks/useUserMutation";
import { useAuthStore } from "../../store/auth";
import { useUserRegisterMutation } from "../../hooks/useUserRegisterMutation";

export function Login() {
  const { actions: { login } } = useAuthStore()
  const { executeLogin, data } = useUserLoginMutation()
  const { executeRegister, data: registerData } = useUserRegisterMutation()
  const [isRegister, setIsRegister] = useState(false)

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
    if (!data) return;

    login()
  }, [data])

  useEffect(() => {
    if (!registerData) return;

    login()
  }, [registerData])

  return (
    <AnimatedPage>
      <section className="bg-gradient-to-t from-[#000000CC] to-[#11091A]">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 h-screen">
          <img className="rounded-full w-44 -translate-y-12" src="https://cdn.discordapp.com/attachments/1083808275436408885/1098235650819498044/Artie_Cahill_rounded_logo_anime_style_pop_color__a_illustration_86d698e7-1fc8-4865-8207-8a4fbe57964e.png" alt="logo" />
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Login in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                {isRegister && (
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                    <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John doe" required />
                  </div>
                )}
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <button type="submit" className="w-full text-white bg-mirage hover:bg-vulcal focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Submit</button>
                {!isRegister ? (
                  <button type="button" className="w-full text-gray-300 text-sm" onClick={() => setIsRegister(true)}>Don't have an account? Register</button>
                ) : (
                  <button type="button" className="w-full text-gray-300 text-sm" onClick={() => setIsRegister(false)}>Login</button>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}
