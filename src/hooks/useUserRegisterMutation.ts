import { useMutation } from "@tanstack/react-query"
import { api } from "../services/api"
import { useState } from "react";

const register = async ({ email, password, name }: { email: string, password: string, name: string }) => {
  const res = await api.post('/users/', { email, password, name })

  return res.data;
}

export const useUserRegisterMutation = () => {
  const [data, setData] = useState<null | any>(null)
  const { mutate } = useMutation(['register', 'user'], { mutationFn: register, onSuccess: (data) => setData(data)})

  const executeRegister = async (email: string, password: string, name: string) => {
    mutate({ email, password, name })
  }

  return { executeRegister, data }
}