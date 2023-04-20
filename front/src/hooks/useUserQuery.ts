import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const fetchUser = (id: number) => {
  return axios.get(`http://localhost:4000/users/${id}`)
}

export const useUserQuery = () => {
  const { refetch, data } = useQuery(['user'], { queryFn: (id) => fetchUser })
}