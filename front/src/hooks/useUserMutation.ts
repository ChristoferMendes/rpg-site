import { useMutation } from "@tanstack/react-query"
import { api } from "../services/api"
import { useState } from "react";

const login = async ({ email, password }: { email: string, password: string }) => {
  console.log(email)
  const res = await api.post('/users/login', { email, password })

  return res.data;
}

export const useUserLoginMutation = () => {
  const [data, setData] = useState<null | any>(null)
  const { mutate } = useMutation(['login'], { mutationFn: login, onSuccess: (data) => setData(data)})

  const executeLogin = async (email: string, password: string) => {
    mutate({ email, password })
  }

  return { executeLogin, data }
}