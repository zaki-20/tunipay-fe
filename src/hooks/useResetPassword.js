import { useState } from 'react'
import { useAuthContext } from './useAuthContext.js'
import ApiService from '../services/ApiService';

export const useResetPassword = () => {

  const apiService = new ApiService(process.env.REACT_APP_API_BASE_URL);
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)

  const resetPassword = async (formData, token) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await apiService.resetPassword(formData, token);
      setIsLoading(false);
      return response.message
    } catch (err) {    
      setError(err);
      setIsLoading(false);
      throw err; 
    }
  };

  return { resetPassword, isLoading, error }
}