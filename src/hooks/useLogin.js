import { useState } from 'react'
import { useAuthContext } from './useAuthContext.js'
import ApiService from '../services/ApiService';

export const useLogin = () => {

  const apiService = new ApiService(process.env.REACT_APP_API_BASE_URL);
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const login = async (formData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await apiService.login(formData);
      localStorage.setItem('user', JSON.stringify(response.payload));
      dispatch({ type: 'LOGIN', payload: response });
      setIsLoading(false);
      return response.message
    } catch (err) {    
      setError(err);
      setIsLoading(false);
      throw err; 
    }
  };

  return { login, isLoading, error }
}