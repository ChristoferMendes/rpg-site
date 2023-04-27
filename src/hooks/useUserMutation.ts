import { useMutation } from "@tanstack/react-query"
import { api } from "../services/api"
import { useState } from "react";

export interface UserData {
  id: number;
  email: string;
  password: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

const login = async ({ email, password }: { email: string, password: string }) => {
  const res = await api.post<UserData>('/users/login', { email, password })

  return res.data;
}

export const useUserLoginMutation = () => {
  const [data, setData] = useState<undefined | UserData>()
  const { mutate } = useMutation(['login', 'user'], { mutationFn: login, onSuccess: (data) => setData(data) })

  const executeLogin = async (email: string, password: string) => {
    mutate({ email, password })
  }

  return { executeLogin, data }
}